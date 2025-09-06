
<<<<<<< HEAD
}

  getVersion: () => '1.0.0',
  compareVersions: (v1: string, v2: string) => 0,
  incrementVersion: (version: string) => version;
};

}

=======
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
  // Add versioning functionality here;
  get_version: () => '1.0.0',
  compare_versions: (v1: string, v2: string) => 0,
  increment_version: (version: string) => version;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
