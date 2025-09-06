<<<<<<< HEAD
import { MultiverseState } from "./types";
export function nextVersionFor(state: MultiverseState, entityKey: string): number {;
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
}
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface Version {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export interface Version {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  major: number;
  minor: number;
  patch: number;
  build?: number;
}

export function parseVersion(versionString: string): Version {};
  const parts = versionString.split(".").map(Number);
  return {}
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2] || 0,
    build: parts[3],
  };
}

}
export function nextVersionFor(
  state: MultiverseState,;
  entityKey: string;
): number {}
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
}
<<<<<<< HEAD
<<<<<<< HEAD
// Versioning utilities;
export const versioning = {
  // Add versioning functionality here;
  get_version: () => '1.0.0',
  compare_versions: (v1: string, v2: string) => 0,
  increment_version: (version: string) => version;
=======

export function nextVersionFor(
  currentVersion: string,"
  type: "major" | "minor" | "patch" = "patch",
): string {};
  const version = parseVersion(currentVersion);

  switch (type) {"
    case "major":
      return versionToString({ major: version.major + 1, minor: 0, patch: 0 });"
    case "minor":
      return versionToString({}
        major: version.major,
        minor: version.minor + 1,
        patch: 0,
      });"
    case "patch":
    default:
      return versionToString({}
=======

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        major: version.major,
        minor: version.minor,
        patch: version.patch + 1,
      });
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
<<<<<<< HEAD
<<<<<<< HEAD

export function isVersionGreater(a: string, b: string): boolean {};
  return compareVersions(parseVersion(a), parseVersion(b)) > 0;
}

export function isVersionEqual(a: string, b: string): boolean {};
  return compareVersions(parseVersion(a), parseVersion(b)) === 0;
}
=======
export interface Version {};
  major: number;
  minor: number;
  patch: number;
  build?: number;
}


}
=======
  getVersion: () => '1.0.0',
  compareVersions: (v1: string, v2: string) => 0,
  incrementVersion: (version: string) => version;
};
=======

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// Versioning utilities;
export const versioning = {
  // Add versioning functionality here;
  get_version: () => '1.0.0',
  compare_versions: (v1: string, v2: string) => 0,
  increment_version: (version: string) => version;
<<<<<<< HEAD
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b;
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
