



    );
  }

  return events;export function resetState(): void {
  state = { ...defaultState }

}



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
};






}
}
  const entity_id = getEntityId (event);
  const current_version = state.latestVersionByEntityId[entity_id] || 0;
  const is_newer = event.version > current_version;
;
  // Check condition
if ( {) {
  $2
}
    state.proposalMerkleById[entity_id] = event.merkle_root;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  }
  if (isNewer) {
    state && state.latestVersionByEntityId[entityId] = event && event.version;
  }
  state.events.push(event);
  state.seenEventIds[event.eventId] = true;
  state.lastSyncedAt = Math.max(state.lastSyncedAt |0, event.timestamp |0);
  return state;
}

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
      return (event.payload as any).id |event.eventId;
  }
}

export function filterEventsByScope(
  events: SyncEvent[]
  scope: InstanceConfig['scope']
): SyncEvent[] {
  if (scope === 'full') return events;
  if (scope === 'dao') {
    return events.filter(
      e => e.type === 'proposal' |e.type === 'dao_endorsement'
    );
  }
  if (scope === 'marketplace') {
    return events && events.filter(
      e =>
        e.type === 'token_transfer' |
        e.type === 'talent_mobility' |
        e.type === 'leaderboard_entry'
    );
  }

  return events;export function resetState(): void {
  state = { ...defaultState }
}

  return events;export function resetState(): void {;
  state = { ...defaultState };
}

  lastSyncedAt: new Date().toISOString()




const default_state: SyncState = {
  config: {
    instance_id: 'default - instance',
    peers: [],
    scope: 'global',
    opt_in: false,
    paused: false;
  },
  lastSyncedAt: new Date ().toISOString ();
}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

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


  return events;export function resetState(): void {;
  state = { ...defaultState };
}

}
}
}


