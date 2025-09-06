interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {

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