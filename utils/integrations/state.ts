interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
  connections: []
  logs: []
  overrides: []
<<<<<<< HEAD
}
export function getState(): IntegrationState {
  return { ...state }
}
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {
=======
<<<<<<< HEAD
}
export function getState(): IntegrationState {
  return { ...state }
}
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {
=======
};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    connections: []
    logs: []
    overrides: []
  }
<<<<<<< HEAD
}
=======
=======

    connections: [],
    logs: [],
    overrides: [];
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
