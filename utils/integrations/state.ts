interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {


export function getState(): IntegrationState {;
  return { ...state };
}
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;


  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {

  connections: [],
  logs: [],
  overrides: [];
  connections: []
  logs: []
  overrides: []
}
;
export function get_state (): IntegrationState {
  return { ...state }
}
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {
=======};

export function getState(): IntegrationState {;
  return { ...state };
}
=======
}

=======
=======

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;


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
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {
=======
};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;
  updater(state);
  return { ...state }
}
export function reset_state (): void {
  state = {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    connections: [],
    logs: [],
    overrides: [];
  };
}>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
