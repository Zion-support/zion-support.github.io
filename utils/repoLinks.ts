import pkg from "../package.json";
function normalizeRepoUrl(raw?: string): string | undefined {if (!raw) return undefined;
  // e.g., https://github.com/org/repo.git -> https://github.com/org/repo;
  return raw.replace(/\.git$/, "");
}
const repoWebUrl = normalizeRepoUrl(;
  typeof (pkg as any).repository === "string";
    ? ((pkg as any).repository as string);
    : (pkg as any).repository?.url;
);
<<<<<<< HEAD
const defaultBranch = "main";
export function githubFileUrl(pathInRepo: string): string | undefined {if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, "")}/blob/${defaultBranch}/${pathInRepo.replace(/^\//, "")}`;
}
export function githubActionsUrl(): string | undefined {if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, "")}/actions`;
}
export function githubRepoUrl(): string | undefined {return repoWebUrl?.replace(/#.*$/, "");
}
=======

const defaultBranch = 'main';
}

export function githubFileUrl(pathInRepo: string): string | undefined {
  if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, '')}/blob/${defaultBranch}/${pathInRepo.replace(/^\//, '')}`;
}

export function githubActionsUrl(): string | undefined {
  if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, '')}/actions`;
}

export function githubRepoUrl(): string | undefined {
  return repoWebUrl?.replace(/#.*$/, '');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
