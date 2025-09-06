
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
<<<<<<< HEAD
  // Add versioning functionality here;
  get_version: () => '1.0.0',
  compare_versions: (v1: string, v2: string) => 0,
  increment_version: (version: string) => version;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
