// app/routes/dashboard.tsx
import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { GitHubLoaderData } from "~/types/github";

export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const apiUrl = `${url.origin}/api/issues`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.error(`API returned ${response.status}`);
        }

        const responseData: GitHubLoaderData = await response.json();
        return Response.json(responseData);
    } catch (error) {
        console.error("Error fetching issues:", error);
        const responseData: GitHubLoaderData = { data: [] };
        return Response.json(responseData);
    }
};

export default function APITest() {
    const { data: issues } = useLoaderData<GitHubLoaderData>();

    return (
        <div className="p-4">
            {issues.map(({ repo, issues }) => (
                <div key={repo} className="mb-8">
                    <h2 className="mb-4 text-xl font-bold">{repo}</h2>

                    {issues.length === 0 ? (
                        <p className="text-gray-500">No issues found</p>
                    ) : (
                        <ul className="space-y-2">
                            {issues.map(issue => (
                                <li key={issue.id} className="rounded border p-3">
                                    <a
                                        href={issue.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline">
                                        {issue.title}
                                    </a>
                                    <span
                                        className={`ml-2 rounded-full px-2 py-1 text-sm ${
                                            issue.state === "open"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-gray-100 text-gray-800"
                                        }`}>
                                        {issue.state}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
