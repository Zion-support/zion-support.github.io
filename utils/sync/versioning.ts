export interface Version {
  major: number;
  minor: number;
  patch: number;
  build?: number;
}

export function parseVersion(versionString: string): Version {
  const parts = versionString.split(".").map(Number);
  return {
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2] || 0,
    build: parts[3],
  };
}

export function versionToString(version: Version): string {
  let result = `${version.major}.${version.minor}.${version.patch}`;
  if (version.build !== undefined) {
    result += `.${version.build}`;
  }
  return result;
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

export function nextVersionFor(
  currentVersion: string,
  type: "major" | "minor" | "patch" = "patch",
): string {
  const version = parseVersion(currentVersion);

  switch (type) {
    case "major":
      return versionToString({ major: version.major + 1, minor: 0, patch: 0 });
    case "minor":
      return versionToString({
        major: version.major,
        minor: version.minor + 1,
        patch: 0,
      });
    case "patch":
    default:
      return versionToString({
        major: version.major,
        minor: version.minor,
        patch: version.patch + 1,
      });
  }
}

export function isVersionGreater(a: string, b: string): boolean {
  return compareVersions(parseVersion(a), parseVersion(b)) > 0;
}

export function isVersionEqual(a: string, b: string): boolean {
  return compareVersions(parseVersion(a), parseVersion(b)) === 0;
}

export function isVersionLess(a: string, b: string): boolean {
  return compareVersions(parseVersion(a), parseVersion(b)) < 0;
}

export function isValidVersion(versionString: string): boolean {
  const version = parseVersion(versionString);
  return version.major >= 0 && version.minor >= 0 && version.patch >= 0;
}

export function getLatestVersion(versions: string[]): string {
  if (versions.length === 0) return "0.0.0";
  
  return versions.reduce((latest, current) => {
    return isVersionGreater(current, latest) ? current : latest;
  });
}

export function sortVersions(versions: string[]): string[] {
  return versions.sort((a, b) => compareVersions(parseVersion(a), parseVersion(b)));
}

export function getVersionRange(versions: string[], min: string, max: string): string[] {
  return versions.filter(version => {
    return isVersionGreater(version, min) && isVersionLess(version, max);
  });
}

export function incrementVersion(version: string): string {
  return nextVersionFor(version, "patch");
}

export function incrementMinorVersion(version: string): string {
  return nextVersionFor(version, "minor");
}

export function incrementMajorVersion(version: string): string {
  return nextVersionFor(version, "major");
}