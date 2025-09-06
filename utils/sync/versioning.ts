<<<<<<< HEAD
// Versioning utilities
export const versioning = {
  // Add versioning functionality here
  getVersion: () => '1.0.0'
  compareVersions: (v1: string, v2: string) => 0
  incrementVersion: (version: string) => version
=======
export interface Version {
  major: number;
  minor: number;
  patch: number;
  build?: number;
}

<<<<<<< HEAD
export function parseVersion(versionString: string): Version {
  const parts = versionString && versionString.split('.').map(Number);
  return {
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2] || 0,
    build: parts[3]
  };
}

export function versionToString(version: Version): string {
  let versionStr = `${version && version.major}.${version && version.minor}.${version && version.patch}`;
  if (version && version.build !== undefined) {
    versionStr += `.${version && version.build}`;
  }
  return versionStr;
}

export function compareVersions(a: Version, b: Version): number {
  if (a && a.major !== b && b.major) return a && a.major - b && b.major;
  if (a && a.minor !== b && b.minor) return a && a.minor - b && b.minor;
  if (a && a.patch !== b && b.patch) return a && a.patch - b && b.patch;
  if (a && a.build !== undefined && b && b.build !== undefined) {
    return a && a.build - b && b.build;
  }
  return 0;
}

export function nextVersionFor(currentVersion: string, type: 'major' | 'minor' | 'patch' = 'patch'): string {
  const version = parseVersion(currentVersion);
  
  switch (type) {
    case 'major':
      return versionToString({ major: version && version.major + 1, minor: 0, patch: 0 });
    case 'minor':
      return versionToString({ major: version && version.major, minor: version && version.minor + 1, patch: 0 });
    case 'patch':
    default:
      return versionToString({ major: version && version.major, minor: version && version.minor, patch: version && version.patch + 1 });
  }
}

export function isVersionGreater(a: string, b: string): boolean {
  return compareVersions(parseVersion(a), parseVersion(b)) > 0;
}

export function isVersionEqual(a: string, b: string): boolean {
  return compareVersions(parseVersion(a), parseVersion(b)) === 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
=======
export function nextVersionFor(
  state: MultiverseState,
  entityKey: string
): number {
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
