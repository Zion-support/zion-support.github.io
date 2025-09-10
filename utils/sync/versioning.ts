
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

