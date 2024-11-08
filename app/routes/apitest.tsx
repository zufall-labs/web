// app/routes/dashboard.tsx
import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { GitHubLoaderData } from "~/types/github";

export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const apiUrl = `${url.origin}/api/issues`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();
        return json<GitHubLoaderData>(data);
    } catch (error) {
        console.error('Error fetching issues:', error);
        return json<GitHubLoaderData>({ data: [] });
    }
};

export default function APITest() {
    const { data: issues } = useLoaderData<GitHubLoaderData>();

    return (
        <div className="p-4">
            {issues.map(({ repo, issues }) => (
                <div key={repo} className="mb-8">
                    <h2 className="text-xl font-bold mb-4">{repo}</h2>

                    {issues.length === 0 ? (
                        <p className="text-gray-500">No issues found</p>
                    ) : (
                        <ul className="space-y-2">
                            {issues.map((issue) => (
                                <li key={issue.id} className="border rounded p-3">
                                    <a
                                        href={issue.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {issue.title}
                                    </a>
                                    <span className={`ml-2 px-2 py-1 text-sm rounded-full ${issue.state === 'open'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-gray-100 text-gray-800'
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