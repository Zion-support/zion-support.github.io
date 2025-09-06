

const defaultState: SyncState = {
  config: {
    instanceId: 'default-instance',
    peers: [],
    scope: 'global',
    optIn: false,
    paused: false
  },
  lastSyncedAt: new Date().toISOString()
},

let state: SyncState = { ...defaultState },

export function readState(): SyncState {
  return { ...state },
}

export function updateState(updates: Partial<SyncState>): void {
  state = { ...state, ...updates },
}


=======
export function resetState(): void {
  state = { ...defaultState },
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
