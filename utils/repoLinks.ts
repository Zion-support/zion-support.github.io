import pkg from '../package.json';

function normalizeRepoUrl(url: string | undefined): string | null {
  if (!url) return null;
  
  // Remove .git suffix if present
  const cleanUrl = url.replace(/\.git$/, '');
  
  // Convert SSH URLs to HTTPS
  if (cleanUrl.startsWith('git@')) {
    return cleanUrl
      .replace('git@github.com:', 'https://github.com/')
      .replace('git@gitlab.com:', 'https://gitlab.com/')
      .replace('git@bitbucket.org:', 'https://bitbucket.org/');
  }
  
  // Return as-is if already HTTPS
  if (cleanUrl.startsWith('http')) {
    return cleanUrl;
  }
  
  return null;
}

export function getRepoLinks() {
  const repoWebUrl = normalizeRepoUrl(
    typeof (pkg as any).repository === "string" 
      ? ((pkg as any).repository as string) 
      : (pkg as any).repository?.url
  );

  return {
    web: repoWebUrl,
    issues: repoWebUrl ? `${repoWebUrl}/issues` : null,
    pullRequests: repoWebUrl ? `${repoWebUrl}/pulls` : null,
    releases: repoWebUrl ? `${repoWebUrl}/releases` : null,
    actions: repoWebUrl ? `${repoWebUrl}/actions` : null,
    wiki: repoWebUrl ? `${repoWebUrl}/wiki` : null
  };
}