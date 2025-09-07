
export interface Version {
  // TODO: Implement
}
  major: number;,
  minor: number;
  patch: number;}
  build?: number;}
}

export function parseVersion(versionString: string): Version {

  // TODO: Implement
}
  const parts = versionString.split(".").map(Number);"

  return {
  // TODO: Implement
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

  entityKey: string;)
): number {
  // TODO: Implement
}
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
}

export function nextVersionFor(
  currentVersion: string,"
  type: "major" | "minor" | "patch" = "patch",")

): string {
  // TODO: Implement
}
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
  major: version.major,
        minor: version.minor,
        patch: version.patch + 1,)

      });
  }
}


export function isVersionGreater(a: string, b: string): boolean {
  // TODO: Implement
}
  return compareVersions(parseVersion(a), parseVersion(b)) > 0;
}

export function isVersionEqual(a: string, b: string): boolean {
  // TODO: Implement
}
  return compareVersions(parseVersion(a), parseVersion(b)) === 0;

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
  getVersion: () => '1.0.0','
  compareVersions: (v1: string, v2: string) => 0,
  incrementVersion: (version: string) => version;
};

}
'