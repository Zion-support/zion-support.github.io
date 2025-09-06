<<<<<<< HEAD
// Versioning utilities
export const versioning = {
  // Add versioning functionality here
  getVersion: () => '1.0.0'
  compareVersions: (v1: string, v2: string) => 0
  incrementVersion: (version: string) => version
}
=======
import { MultiverseState } from './types';
}

export function nextVersionFor(
  state: MultiverseState,
  entityKey: string
): number {
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
