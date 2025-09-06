<<<<<<< HEAD
<<<<<<< HEAD

=======


    );
  }

  return events;export function resetState(): void {
  state = { ...defaultState }

=======
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
<<<<<<< HEAD
}
let state: SyncState = { ...defaultState }
export function readState(): SyncState {
  return { ...state }
}
export function updateState(updates: Partial<SyncState>): void {
  state = { ...state, ...updates }
=======
};

let state: SyncState = { ...defaultState };

export function readState(): SyncState {;
  return { ...state };
}

export function updateState(updates: Partial<SyncState>): void {;
  state = { ...state, ...updates };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export function upsertEvent(
  state: MultiverseState
  event: SyncEvent
): MultiverseState {;
  if (state.seenEventIds[event.eventId]) return state;
  const entityId = getEntityId(event);
  const currentVersion = state.latestVersionByEntityId[entityId] |0;
  const isNewer = event.version > currentVersion;
  if (event.type === 'proposal' && event.merkleRoot && isNewer) {
    state.proposalMerkleById[entityId] = event.merkleRoot;
  }
  if (isNewer) {
    state.latestVersionByEntityId[entityId] = event.version;
  }
  state.events.push(event);
  state.seenEventIds[event.eventId] = true;
  state.lastSyncedAt = Math.max(state.lastSyncedAt |0, event.timestamp |0);
  return state;
export function getEntityId(event: SyncEvent): string {
  switch (event.type) {
    case 'proposal':;
      return (event.payload as any).proposalId;
    case 'token_transfer':
      return (event.payload as any).txId;
    case 'talent_mobility':
      return (
        (event.payload as any).personId + ':' + (event.payload as any).startDate
      );
    case 'dao_endorsement':
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
<<<<<<< HEAD
  return events;export function resetState(): void {
  state = { ...defaultState }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
const default_state: SyncState = {
  config: {
    instance_id: 'default - instance',
    peers: [],
    scope: 'global',
    opt_in: false,
    paused: false;
  },
  lastSyncedAt: new Date ().toISOString ();
=======
  return events;export function resetState(): void {;
  state = { ...defaultState };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}

}
<<<<<<< HEAD
export function update_state (updates: Partial < SyncState>): void {
  state = { ...state, ...updates }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
}
<<<<<<< HEAD
  const entity_id = getEntityId (event);
  const current_version = state.latestVersionByEntityId[entity_id] || 0;
  const is_newer = event.version > current_version;
;
  // Check condition
if ( {) {
  $2
}
    state.proposalMerkleById[entity_id] = event.merkle_root;
  }
  // Check condition
if ( {) {
  $2
}
    state.latestVersionByEntityId[entity_id] = event.version;
  }
  state.events.push (event);
  state.seenEventIds[event.event_id] = true;
  state.lastSyncedAt = Math.max (state.lastSyncedAt || 0, event.timestamp || 0);
  return state;
;
export function getEntityId (event: SyncEvent): string {
  switch (event.type) {
    case 'proposal':;
      return (event.payload as any).proposal_id;
    case 'token_transfer':;
      return (event.payload as any).tx_id;
    case 'talent_mobility':;
      return (
        (event.payload as any).person_id + ':' + (event.payload as any).start_date);
    case 'dao_endorsement':;
      return (event.payload as any).resolution_id;
    case 'leaderboard_entry':;
      return (
        (event.payload as any).subject_id + ':' + (event.payload as any).period);
    default:;
      return (event.payload as any).id || event.event_id;
  }
export function filterEventsByScope (
  events: SyncEvent[],
  scope: InstanceConfig['scope']): SyncEvent[] {
  // Check condition
if (return events) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    return events.filter (
      e => e.type === 'proposal' || e.type === 'dao_endorsement');
  }
  // Check condition
if ( {) {
  $2
}
    return events.filter (
      e =>;
        e.type === 'token_transfer' ||;
        e.type === 'talent_mobility' ||;
        e.type === 'leaderboard_entry');
  }
<<<<<<< HEAD

  return events;export function resetState(): void {;
  state = { ...defaultState };
}

}
}
}

=======
  return events;export function reset_state (): void {
  state = { ...default_state }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
