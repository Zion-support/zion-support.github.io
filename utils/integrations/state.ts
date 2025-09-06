interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {


};

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

    connections: [],
    logs: [],
    overrides: [];
  };

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
