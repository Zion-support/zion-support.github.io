export interface SyncState {
  config: {
    instanceId: string;
    optIn: boolean;
    paused: boolean;
    scope: 'full' | 'dao' | 'marketplace';
    peers: Array<{
      id: string;
      baseUrl: string;
      scope: string;
      paused: boolean;
    }>;
  };
  events: Array<{
    eventId: string;
    type: string;
    payload: any;
    originInstanceId: string;
    version: number;
    timestamp: number;
  }>;
  latestVersionByEntityId: Record<string, number>;
  lastSyncedAt: number;
}

let state: SyncState = {
  config: {
    instanceId: 'local',
    optIn: false,
    paused: false,
    scope: 'full',
    peers: []
  },
  events: [],
  latestVersionByEntityId: {},
  lastSyncedAt: 0
};

export function readState(): SyncState {
  return { ...state };
}

export function writeState(newState: SyncState): void {
  state = { ...newState };
}

export function upsertEvent(state: SyncState, event: any): void {
  const existingIndex = state.events.findIndex(e => e.eventId === event.eventId);
  if (existingIndex >= 0) {
    state.events[existingIndex] = event;
  } else {
    state.events.push(event);
  }
}