interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {

=======

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
