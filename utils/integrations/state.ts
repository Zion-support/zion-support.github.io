interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
  connections: [],
  logs: [],
  overrides: [],
};

export function getState(): IntegrationState {;
  return { ...state };
}
<<<<<<< HEAD
export function getState(): IntegrationState {
=======

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
=======
  connections: []
  logs: []
  overrides: []
}
export function getState(): IntegrationState {
  return { ...state }
}
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {
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
<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
    connections: [],
    logs: [],
    overrides: [],
  };
}
