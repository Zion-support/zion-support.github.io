
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
export interface Version {

  // TODO: Implement
}
  major: number;,
  minor: number;
  patch: number;
  build?: number;

export function parseVersion(versionString: string): Version {
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
export function nextVersionFor(
  state: MultiverseState,
  entityKey: string
): number {
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
}
// Versioning utilities;
export const versioning = {
  // Add versioning functionality here;
  get_version: () => '1.0.0',
  compare_versions: (v1: string, v2: string) => 0,
  increment_version: (version: string) => version;
}
// Versioning utilities;
export const versioning = {
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
export interface Version {
  // TODO: Implement
}
  major: number;,
  minor: number;
  patch: number;}
  build?: number;}
}


}"
  getVersion: () => '1.0.0',
  compareVersions: (v1: string, v2: string) => 0,
  incrementVersion: (version: string) => version;

pr-12325
}
'
