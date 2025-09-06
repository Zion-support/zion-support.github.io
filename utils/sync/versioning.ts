<<<<<<< HEAD
<<<<<<< HEAD

export interface Version {
  major: number;
  minor: number;
  patch: number;
  build?: number;
}


}
=======
=======

}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function nextVersionFor(
  state: MultiverseState,
  entityKey: string
): number {
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
}
<<<<<<< HEAD
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
=======
// Versioning utilities
=======
// Versioning utilities;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const versioning = {
  // Add versioning functionality here;
  get_version: () => '1.0.0',
  compare_versions: (v1: string, v2: string) => 0,
  increment_version: (version: string) => version;
}
<<<<<<< HEAD
  getVersion: () => '1.0.0',
  compareVersions: (v1: string, v2: string) => 0,
  incrementVersion: (version: string) => version;
};

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
// Versioning utilities;
export const versioning = {
  // Add versioning functionality here;
  get_version: () => '1.0.0',
  compare_versions: (v1: string, v2: string) => 0,
  increment_version: (version: string) => version;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
