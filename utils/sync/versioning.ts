import { MultiverseState } from "./types";
export function nextVersionFor(state: MultiverseState, entityKey: string): number {
  const current = $2;
  return current + 1
}