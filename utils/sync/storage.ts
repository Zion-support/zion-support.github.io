
}
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

  return events;export function resetState(): void {;
  state = { ...defaultState };
}

}
}
}

