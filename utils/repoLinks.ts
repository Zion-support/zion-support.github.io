import pkg from "../package.json";

function normalizeRepoUrl(_raw?: string): string | undefined {_if (!raw) return undefined;
  // e.g., _https://github.com/org/repo.git -> https://github.com/org/repo
  return raw.replace(/\.git$/, _"");}

const _repoWebUrl = normalizeRepoUrl(
  typeof (pkg as any).repository === "string"
    ? ((pkg as any).repository as string)
    : (pkg as any).repository?.url
);

const _defaultBranch = "main";

export function githubFileUrl(_pathInRepo: string): string | undefined {_if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, _"")}/blob/${_defaultBranch}/${_pathInRepo.replace(/^\//, _"")}`;
}

export function githubActionsUrl(): string | undefined {_if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, _"")}/actions`;
}

export function githubRepoUrl(): string | undefined {_return repoWebUrl?.replace(/#.*$/, _"");}