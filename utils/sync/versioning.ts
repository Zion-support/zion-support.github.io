<<<<<<< HEAD
import { MultiverseState } from "./types",;
;
export function nextVersionFor(state:MultiverseState, entityKey:string):number {;
  const current = state.latestVersionByEntityId[entityKey] || 0,;
  return current + 1;
=======
import { MultiverseState } from "./types",
export function nextVersionFor(state: MultiverseState, entityKey: string): number {
  const current = state.latestVersionByEntityId[entityKey] || 0,
  return current + 1
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}