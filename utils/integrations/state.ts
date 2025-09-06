interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
  connections: []
  logs: []
  overrides: []

  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {

}