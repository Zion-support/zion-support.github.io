 const repoWebUrl = normalizeRepoUrl (typeof (pkg as any) .repository === "string" ? ( (pkg as any) .repository as string) : (pkg as any) .repository?.url);
