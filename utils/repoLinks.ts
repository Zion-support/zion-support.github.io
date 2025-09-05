<<<<<<< HEAD
import pkg from "../package.json",
function normalizeRepoUrl(raw?: string): string | undefined {
  if (!raw) return undefined,
  // e.g., https://github.com/org/repo.git -> https://github.com/org/repo
  return raw.replace(/\.git$/, "")
}
=======
import pkg from "../package.json";

function normalizeRepoUrl(_raw?: string): string | undefined {_if (!raw) return undefined;
  // e.g., _https://github.com/org/repo.git -> https://github.com/org/repo
  return raw.replace(/\.git$/, _"");}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _repoWebUrl = normalizeRepoUrl(
  typeof (pkg as any).repository === "string"
    ? ((pkg as any).repository as string)
    : (pkg as any).repository?.url
),

<<<<<<< HEAD
const defaultBranch = "main",

export function githubFileUrl(pathInRepo: string): string | undefined {
  if (!repoWebUrl) return undefined,
  return `${repoWebUrl.replace(/#.*$/, "")}/blob/${defaultBranch}/${pathInRepo.replace(/^\//, "")}`
}

export function githubActionsUrl(): string | undefined {
  if (!repoWebUrl) return undefined,
  return `${repoWebUrl.replace(/#.*$/, "")}/actions`
}

export function githubRepoUrl(): string | undefined {
  return repoWebUrl?.replace(/#.*$/, "")
}
=======
const _defaultBranch = "main";

export function githubFileUrl(_pathInRepo: string): string | undefined {_if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, _"")}/blob/${_defaultBranch}/${_pathInRepo.replace(/^\//, _"")}`;
}

export function githubActionsUrl(): string | undefined {_if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, _"")}/actions`;
}

export function githubRepoUrl(): string | undefined {_return repoWebUrl?.replace(/#.*$/, _"");}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
