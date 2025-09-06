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


    connections: [],
    logs: [],
    overrides: [];
  };



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
