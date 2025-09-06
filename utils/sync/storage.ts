import fs from 'fs';
import path from 'path';
import { MultiverseState, InstanceConfig, SyncEvent } from './types';

interface SyncState {
  config: InstanceConfig;
  lastSyncedAt: string;
}

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
let state: SyncState = { ...defaultState }
export function readState(): SyncState {
  return { ...state }
}
export function updateState(updates: Partial<SyncState>): void {
  state = { ...state, ...updates }
}
export function upsertEvent(
  state: MultiverseState
  event: SyncEvent
): MultiverseState {
<<<<<<< HEAD
  if (state.seenEventIds[event.eventId]) return state;
  const entityId = getEntityId(event);
  const currentVersion = state.latestVersionByEntityId[entityId] |0;
  const isNewer = event.version > currentVersion;
  if (event.type === 'proposal' && event.merkleRoot && isNewer) {
    state.proposalMerkleById[entityId] = event.merkleRoot;
=======
  if (state && state.seenEventIds[event && event.eventId]) return state;

  const entityId = getEntityId(event);
  const currentVersion = state && state.latestVersionByEntityId[entityId] || 0;
  const isNewer = event && event.version > currentVersion;

  if (event && event.type === 'proposal' && event && event.merkleRoot && isNewer) {
    state && state.proposalMerkleById[entityId] = event && event.merkleRoot;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  if (isNewer) {
    state && state.latestVersionByEntityId[entityId] = event && event.version;
  }
<<<<<<< HEAD
  state.events.push(event);
  state.seenEventIds[event.eventId] = true;
  state.lastSyncedAt = Math.max(state.lastSyncedAt |0, event.timestamp |0);
=======

  state && state.events.push(event);
  state && state.seenEventIds[event && event.eventId] = true;
  state && state.lastSyncedAt = Math && Math.max(state && state.lastSyncedAt || 0, event && event.timestamp || 0);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return state;
<<<<<<< HEAD
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function getEntityId(event: SyncEvent): string {
  switch (event && event.type) {
    case 'proposal':
      return (event && event.payload as any).proposalId;
    case 'token_transfer':
      return (event && event.payload as any).txId;
    case 'talent_mobility':
      return (
        (event && event.payload as any).personId + ':' + (event && event.payload as any).startDate
      );
    case 'dao_endorsement':
      return (event && event.payload as any).resolutionId;
    case 'leaderboard_entry':
      return (
        (event && event.payload as any).subjectId + ':' + (event && event.payload as any).period
      );
    default:
<<<<<<< HEAD
      return (event.payload as any).id |event.eventId;
=======
      return (event && event.payload as any).id || event && event.eventId;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
<<<<<<< HEAD
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function filterEventsByScope(
  events: SyncEvent[]
  scope: InstanceConfig['scope']
): SyncEvent[] {
  if (scope === 'full') return events;
  if (scope === 'dao') {
<<<<<<< HEAD
    return events.filter(
      e => e.type === 'proposal' |e.type === 'dao_endorsement'
=======
    return events && events.filter(
      e => e && e.type === 'proposal' || e && e.type === 'dao_endorsement'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
  }
  if (scope === 'marketplace') {
    return events && events.filter(
      e =>
<<<<<<< HEAD
        e.type === 'token_transfer' |
        e.type === 'talent_mobility' |
        e.type === 'leaderboard_entry'
=======
        e && e.type === 'token_transfer' ||
        e && e.type === 'talent_mobility' ||
        e && e.type === 'leaderboard_entry'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
  }
<<<<<<< HEAD
  return events;
}

export function resetState(): void {
  state = { ...defaultState };
=======
  return events;export function resetState(): void {
  state = { ...defaultState }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}