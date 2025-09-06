interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {

  connections: []
  logs: []
  overrides: []


};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {


}
;
export function get_state (): IntegrationState {
  return { ...state }
}

  return { ...state }
}
export function reset_state (): void {
  state = {

    connections: [],
    logs: [],
    overrides: [];


    connections: []
    logs: []
    overrides: []
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }

    connections: [],
    logs: [],
    overrides: [];
  };



}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
