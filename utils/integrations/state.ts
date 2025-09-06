interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
  connections: []
  logs: []
  overrides: []
}
export function getState(): IntegrationState {
  return { ...state }
}
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {
};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {
<<<<<<< HEAD
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
  }
    connections: [],
    logs: [],
    overrides: [];
  };
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
