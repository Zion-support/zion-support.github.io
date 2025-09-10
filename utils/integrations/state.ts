interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
  connections: [],
  logs: [],
  overrides: [],}
export function getState(): IntegrationState {
  return { ...state }
}
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {
};

export function getState(): IntegrationState {;
  return { ...state };
}
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;

  updater(state);
  return { ...state }
}    connections: [],
    logs: [],
    overrides: [],
  };