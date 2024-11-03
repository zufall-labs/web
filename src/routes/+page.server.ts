import {SECRET_ACCESS_TOKEN, REPOSITORIES} from "$env/static/private"
import type {PageServerLoad} from "./$types";

const owner = "zufall-labs";
const token: string = SECRET_ACCESS_TOKEN;
// Parse the REPOSITORIES environment variable to create an array of repo names
const repositories: string[] = REPOSITORIES ? REPOSITORIES.split(",") : [];

export const load: PageServerLoad = async ({}) => {
    // Check if the token is present
    if (!token) {
        console.warn("SECRET_ACCESS_TOKEN is missing. Skipping fetch.");
        return {data: []};
    }

    try {
        // Fetch issues for each repository in the list
        const issuesByRepo: Awaited<{ repo: string; issues: any }>[] = await Promise.all(
            repositories.map(async (repo: string) => {
                const res = await fetch(`https://api.github.com/repos/${owner}/${repo.trim()}/issues`, {
                    headers: {
                        "Authorization": `token ${token}`,
                        "Accept": "application/vnd.github.v3+json",
                    },
                });

                if (!res.ok) {
                    throw new Error(`Failed to fetch issues for ${repo}: ${res.status} ${res.statusText}. This might be due to the token missing permissions for this repository.`);
                }

                const data = await res.json();
                return {repo, issues: data};
            })
        );

        // Return the issues grouped by repository
        return {data: issuesByRepo};
    } catch (error) {
        console.error("Error fetching issues, returning an empty list instead. The error:", error);
        return {data: []};
    }
};
