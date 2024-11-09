import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { z } from "zod";
import type { RepoIssues, GitHubLoaderData } from "~/types/github";

const CONFIG = {
    OWNER: "zufall-labs",
    CACHE_DURATION: 5 * 60 * 1000, // 5 Minutes
    GITHUB_API_BASE: "https://api.github.com"
} as const;

const envSchema = z.object({
    REPOSITORIES: z.string().transform(str => str.split(",").map(s => s.trim())),
    SECRET_ACCESS_TOKEN: z.string().min(1, "GitHub token is required")
});

let cachedData: RepoIssues[] | null = null;
let cacheExpiration: number = 0;

const fetchRepoIssues = async (repo: string, token: string) => {
    const res = await fetch(`${CONFIG.GITHUB_API_BASE}/repos/${CONFIG.OWNER}/${repo}/issues`, {
        headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3+json"
        }
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch issues for ${repo}: ${res.status} ${res.statusText}`);
    }

    return res.json();
};

export const loader: LoaderFunction = async () => {
    const now = Date.now();

    if (cachedData && now < cacheExpiration) {
        return json<GitHubLoaderData>({ data: cachedData });
    }

    try {
        const env = envSchema.parse(process.env);

        const issuesByRepo = await Promise.all(
            env.REPOSITORIES.map(async (repo): Promise<RepoIssues> => {
                try {
                    const issues = await fetchRepoIssues(repo, env.SECRET_ACCESS_TOKEN);
                    return { repo, issues };
                } catch (error) {
                    console.error(`Error fetching ${repo} issues:`, error);
                    return { repo, issues: [] };
                }
            })
        );

        cachedData = issuesByRepo;
        cacheExpiration = now + CONFIG.CACHE_DURATION;

        return json<GitHubLoaderData>({ data: issuesByRepo });
    } catch (error) {
        console.error("Error fetching issues:", error);

        if (error instanceof z.ZodError) {
            return json({ error: "Invalid environment configuration", details: error.errors }, { status: 500 });
        }

        return json<GitHubLoaderData>({ data: [] });
    }
};
