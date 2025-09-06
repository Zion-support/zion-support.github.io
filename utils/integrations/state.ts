interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
  connections: [],
  logs: [],
<<<<<<< HEAD
  overrides: [],
  connections: [],
  logs: [],
  overrides: [],
export function getState(): IntegrationState {
}
;
export function get_state (): IntegrationState {
  return { ...state }
}
export function write_state (updater: (state: IntegrationState) => void): IntegrationState {
  updater (state);
=======
  overrides: [],}
export function getState(): IntegrationState {
  return { ...state }
}
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};

export function getState(): IntegrationState {;
  return { ...state };
}
<<<<<<< HEAD

export function writeState(
  updater: (state: IntegrationState) => void,
): IntegrationState {
export function writeState(
  updater: (state: IntegrationState) => void,
): IntegrationState {
  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {

  connections: [],
  logs: [],
  overrides: [];
}
;
export function get_state (): IntegrationState {
  return { ...state }
}
  updater(state);
  return { ...state }
}
export function reset_state (): void {
  state = {
  }
    connections: [],
    logs: [],
    overrides: [];
    connections: []
    logs: []
    overrides: []
  }
}


    connections: [],
    logs: [],
    overrides: [],
  };
}
}
=======
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;

  updater(state);
  return { ...state }
}    connections: [],
    logs: [],
    overrides: [],
  };
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
