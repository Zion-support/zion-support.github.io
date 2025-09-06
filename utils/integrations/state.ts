interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {
<<<<<<< HEAD

  connections: [],
  logs: [],
  overrides: [];
}
;
export function get_state (): IntegrationState {
  return { ...state }
}
export function write_state (updater: (state: IntegrationState) => void): IntegrationState {
  updater (state);
  return { ...state }
}
export function reset_state (): void {
  state = {
    connections: [],
    logs: [],
    overrides: [];
  }
}

=======
<<<<<<< HEAD
    connections: []
    logs: []
    overrides: []
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

    connections: [],
    logs: [],
    overrides: [];
  };
<<<<<<< HEAD

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
