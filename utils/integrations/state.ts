interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
<<<<<<< HEAD
  connections: []
  logs: []
  overrides: []

=======


};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {

<<<<<<< HEAD
}
=======
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

    connections: [],
    logs: [],
    overrides: [];
  };

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
