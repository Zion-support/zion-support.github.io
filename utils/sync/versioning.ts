export interface Version {
  major: number;
  minor: number;
  patch: number;
  build?: number;
}

export function parseVersion(versionString: string): Version {
  const parts = versionString.split('.').map(Number);
  return {
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2] || 0,
    build: parts[3]
  };
}

export function versionToString(version: Version): string {
  let versionStr = `${version.major}.${version.minor}.${version.patch}`;
  if (version.build !== undefined) {
    versionStr += `.${version.build}`;
  }
  return versionStr;
}

export function compareVersions(a: Version, b: Version): number {
  if (a.major !== b.major) return a.major - b.major;
  if (a.minor !== b.minor) return a.minor - b.minor;
  if (a.patch !== b.patch) return a.patch - b.patch;
  if (a.build !== undefined && b.build !== undefined) {
    return a.build - b.build;
  }
  return 0;
}

export function nextVersionFor(currentVersion: string, type: 'major' | 'minor' | 'patch' = 'patch'): string {
  const version = parseVersion(currentVersion);
  
  switch (type) {
    case 'major':
      return versionToString({ major: version.major + 1, minor: 0, patch: 0 });
    case 'minor':
      return versionToString({ major: version.major, minor: version.minor + 1, patch: 0 });
    case 'patch':
    default:
      return versionToString({ major: version.major, minor: version.minor, patch: version.patch + 1 });
  }
}

export function isVersionGreater(a: string, b: string): boolean {
  return compareVersions(parseVersion(a), parseVersion(b)) > 0;
}

export function isVersionEqual(a: string, b: string): boolean {
  return compareVersions(parseVersion(a), parseVersion(b)) === 0;
}