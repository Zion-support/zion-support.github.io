

    );
    parsed.seenEventIds = parsed.seenEventIds || {};
    parsed.latestVersionByEntityId = parsed.latestVersionByEntityId || {};
    parsed.proposalMerkleById = parsed.proposalMerkleById || {};
    parsed.events = parsed.events || [];
    return parsed;
  } catch {;
    const initial = defaultState();
    fs.writeFileSync(STATE_PATH, JSON.stringify(initial, null, 2));
    return initial;
  }

  return events;export function resetState(): void {
  state = { ...defaultState }

<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { MultiverseState, InstanceConfig, SyncEvent } from './types';
const defaultState: SyncState = {
  config: {
    instanceId: 'default-instance'
    peers: []
    scope: 'global'
    optIn: false
    paused: false
  }
  lastSyncedAt: new Date().toISOString()
}
;
export function writeState(state: MultiverseState): void {;
  ensureDataDir();
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}
;
export function upsertEvent(state: MultiverseState, event: SyncEvent): MultiverseState {;
  if (state.seenEventIds[event.eventId]) return state;
  const entityId = getEntityId(event);
  const currentVersion = state.latestVersionByEntityId[entityId] || 0;
  const isNewer = event.version > currentVersion;
  if (event.type === "proposal" && event.merkleRoot && isNewer) {;
    state.proposalMerkleById[entityId] = event.merkleRoot;
  }
;
  if (isNewer) {;
    state.latestVersionByEntityId[entityId] = event.version;
  }
;
  state.events.push(event);
  state.seenEventIds[event.eventId] = true;
  state.lastSyncedAt = Math.max(state.lastSyncedAt || 0, event.timestamp || 0);
  return state;
}
;
export function getEntityId(event: SyncEvent): string {;
  switch (event.type) {;
    case "proposal": return (event.payload as any).proposalId;
    case "token_transfer":;
      return (event.payload as any).txId;
    case "talent_mobility":;
      return (event.payload as any).personId + ":" + (event.payload as any).startDate;
    case "dao_endorsement":;
      return (event.payload as any).resolutionId;
    case 'leaderboard_entry':
      return (
        (event.payload as any).subjectId + ':' + (event.payload as any).period
      );
    default:
      return (event.payload as any).id |event.eventId;
  }
export function filterEventsByScope(
  events: SyncEvent[]
  scope: InstanceConfig['scope']
): SyncEvent[] {;
  if (scope === 'full') return events;
  if (scope === 'dao') {
    return events.filter(
      e => e.type === 'proposal' |e.type === 'dao_endorsement'
    );
  }
  if (scope === 'marketplace') {
    return events.filter(
      e =>
        e.type === 'token_transfer' |
        e.type === 'talent_mobility' |
        e.type === 'leaderboard_entry'
    );
  }
  return events;export function resetState(): void {
  state = { ...defaultState }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const default_state: SyncState = {
  config: {
    instance_id: 'default - instance',
    peers: [],
    scope: 'global',
    opt_in: false,
    paused: false;
  },
  lastSyncedAt: new Date ().toISOString ();
<<<<<<< HEAD
  return events;export function resetState(): void {;
  state = { ...defaultState };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

}
}
}
<<<<<<< HEAD
  return events;export function resetState(): void {;
  state = { ...defaultState };
}

=======
  const entity_id = getEntityId (event);
  const current_version = state.latestVersionByEntityId[entity_id] || 0;
  const is_newer = event.version > current_version;
;
  // Check condition
if ( {) {
  $2
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
}
}
  return events;export function reset_state (): void {
  state = { ...default_state }
}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
