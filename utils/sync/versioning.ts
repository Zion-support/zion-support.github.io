
<<<<<<< HEAD
<<<<<<< HEAD
export interface Version {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
;
ursor/automate-test-improve-and-merge-code-646c;
export interface Version  {major: number;
  minor: number;
  patch: number;
  build?: number;
}export function parseVersion(versionString: string): Version {const parts = versionString.split(".").map(Number)return {major: parts[0] || 0,minor: parts[1] || 0,patch: parts[2] || 0,build: parts[3];
  }}build: parts[3];
  }}}
    build: parts[3];
  }}}
export function nextVersionFor(state: MultiverseState,entityKey: string;
): number {const current = state.latestVersionByEntityId[entityKey] || 0;
export interface Version {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
    build: parts[3]
  };
}

<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
export function nextVersionFor(
  state: MultiverseState,
  entityKey: string
): number {
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
}export function nextVersionFor(currentVersion: string,type: "major" | "minor" | "patch" = "patch",): string {const version  = parseVersion(currentVersion)switch (type) {case "major":;
      return versionToString({ major: version.major + 1, minor: 0, patch: 0 })case "minor":;
      return versionToString({major: version.major,minor: version.minor + 1,patch: 0;
        patch: 0;
      })case "patch":;
    default:;
      return versionToString({major: version.major,minor: version.minor,patch: version.patch + 1;
      })}patch: version.patch + 1;
      })}
}export function isVersionGreater(a: string, b: string): boolean {return compareVersions(parseVersion(a), parseVersion(b)) > 0;
}export function isVersionEqual(a: string, b: string): boolean {return compareVersions(parseVersion(a), parseVersion(b)) === 0;
}export interface Version  {major: number;
  minor: number;
  patch: number;
  build?: number;
}}
  getVersion: () => '1.0.0',compareVersions: (v1: string, v2: string) => 0,incrementVersion: (version: string) => version;
}}
// Versioning utilities;
export const versioning = {// Add versioning functionality here;
  get_version: () => '1.0.0',compare_versions: (v1: string, v2: string) => 0,increment_version: (version: string) => version;
}
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
// Versioning utilities;
export const versioning = {// Add versioning functionality here;
  get_version: () => '1.0.0',compare_versions: (v1: string, v2: string) => 0,increment_version: (version: string) => version;
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
        patch: 0
      });
    case "patch":
    default:
      return versionToString({
        major: version.major,
        minor: version.minor,
        patch: version.patch + 1
      });
  }
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

export function isVersionGreater(a: string, b: string): boolean {
  return compareVersions(parseVersion(a), parseVersion(b)) > 0;
}

export function isVersionEqual(a: string, b: string): boolean {
  return compareVersions(parseVersion(a), parseVersion(b)) === 0;
}
export interface Version {
  major: number;
  minor: number;
  patch: number;
  build?: number;
}


}
  getVersion: () => '1.0.0',
  compareVersions: (v1: string, v2: string) => 0,
  incrementVersion: (version: string) => version;
};

}
<<<<<<< HEAD
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
