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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
export function get_state (): IntegrationState {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return { ...state }
}
<<<<<<< HEAD
export function write_state (updater: (state: IntegrationState) => void): IntegrationState {
  updater (state);
=======
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {
=======
};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  updater(state);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
