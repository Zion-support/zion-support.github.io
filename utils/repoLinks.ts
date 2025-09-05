import pkg from &quot;../package.json&quot;;

function normalizeRepoUrl(raw?: string): string | undefined {
  if (!raw) return undefined;
  // e.g., https://github.com/org/repo.git -> https://github.com/org/repo
  return raw.replace(/\.git$/, "&quot;);
}

const repoWebUrl = normalizeRepoUrl(
  typeof (pkg as any).repository === &quot;string&quot;
    ? ((pkg as any).repository as string)
    : (pkg as any).repository?.url
);

const defaultBranch = &quot;main&quot;;

export function githubFileUrl(pathInRepo: string): string | undefined {
  if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, "&quot;)}/blob/${defaultBranch}/${pathInRepo.replace(/^\//, "&quot;)}`;
}

export function githubActionsUrl(): string | undefined {
  if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, "&quot;)}/actions`;
}

export function githubRepoUrl(): string | undefined {
  return repoWebUrl?.replace(/#.*$/, "");
}