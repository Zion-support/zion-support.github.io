<<<<<<< HEAD
import { MultiverseState } from "./types",
export function nextVersionFor(state: MultiverseState, entityKey: string): number {
  const current = state.latestVersionByEntityId[entityKey] || 0,
  return current + 1
}
=======

export function nextVersionFor(_state: MultiverseState, _entityKey: string): number {_const _current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
