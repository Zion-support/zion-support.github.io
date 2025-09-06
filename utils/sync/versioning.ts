
export interface Version {
  major: number;
  minor: number;
  patch: number;
  build?: number;
}


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
=======
// Versioning utilities;
export const versioning = {
  // Add versioning functionality here
<<<<<<< HEAD
  getVersion: () => '1.0.0'
  compareVersions: (v1: string, v2: string) => 0
  incrementVersion: (version: string) => version
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
  getVersion: () => '1.0.0',
  compareVersions: (v1: string, v2: string) => 0,
  incrementVersion: (version: string) => version;
};
=======

}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
