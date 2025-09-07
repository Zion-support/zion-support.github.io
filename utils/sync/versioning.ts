

export interface Version {
  major: number;
export interface Version {
  // TODO: Implement
}
  major: number;,
  minor: number;
  patch: number;}
  build?: number;}
}

export function parseVersion(versionString: string): Version {
  const parts = versionString.split(".").map(Number);
  return {


}
export function nextVersionFor(
  state: MultiverseState,
  entityKey: string
): number {
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
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
export interface Version {
  major: number;
  // TODO: Implement
}
  major: number;,
  minor: number;
  patch: number;
  build?: number;

  // TODO: Implement
  const parts = versionString.split(".").map(Number);"

  return {
  // TODO: Implement
pr-12325
}
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2] || 0,}
    build: parts[3],}
  };
}

}
  getVersion: () => '1.0.0',
  compareVersions: (v1: string, v2: string) => 0,
  incrementVersion: (version: string) => version;
};

}
import { MultiverseState } from "./types";
export function nextVersionFor(state: MultiverseState, entityKey: string): number {;
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
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
// Versioning utilities;
export const versioning = {
  // Add versioning functionality here;
  get_version: () => '1.0.0',
  compare_versions: (v1: string, v2: string) => 0,
  increment_version: (version: string) => version;
}
// Versioning utilities;
  // Add versioning functionality here;
  get_version: () => '1.0.0',
  compare_versions: (v1: string, v2: string) => 0,
  increment_version: (version: string) => version;
}

export function nextVersionFor(
  state: MultiverseState,

  entityKey: string;)
): number {
  // TODO: Implement
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;

  currentVersion: string,"
  type: "major" | "minor" | "patch" = "patch",")

): string {
  // TODO: Implement
  const version = parseVersion(currentVersion);


  switch (type) {"
    case "major":"
      return versionToString({ major: version.major + 1, minor: 0, patch: 0 });"
    case "minor":"
      return versionToString({
        major: version.major,
        minor: version.minor + 1,
        patch: 0,)
      });"
    case "patch":"
    default: return versionToString({,
        minor: version.minor,
        patch: version.patch + 1,)

      });


export function isVersionGreater(a: string, b: string): boolean {
  // TODO: Implement
  return compareVersions(parseVersion(a), parseVersion(b)) > 0;

export function isVersionEqual(a: string, b: string): boolean {
  // TODO: Implement
  return compareVersions(parseVersion(a), parseVersion(b)) === 0;
  // TODO: Implement

}

