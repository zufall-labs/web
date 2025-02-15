export interface GitHubIssue {
    id: number;
    number: number;
    title: string;
    state: "open" | "closed";
    created_at: string;
    updated_at: string;
    html_url: string;
    pull_request?: object;
}

export interface RepoIssues {
    repo: string;
    issues: GitHubIssue[];
}

export interface GitHubLoaderData {
    data: RepoIssues[];
}
