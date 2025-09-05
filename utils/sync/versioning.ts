import { MultiverseState } from &quot;./types&quot;;

export function nextVersionFor(state: MultiverseState, entityKey: string): number {
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
}