interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
<<<<<<< HEAD
<<<<<<< HEAD
  connections: []
  logs: []
  overrides: []
}
export function getState(): IntegrationState {
  return { ...state }
}
export function writeState(updater: (state: IntegrationState) => void): IntegrationState {
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
export function reset_state (): void {
  state = {
<<<<<<< HEAD
    connections: [],
    logs: [],
    overrides: [];
=======
<<<<<<< HEAD
<<<<<<< HEAD
    connections: []
    logs: []
    overrides: []
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    connections: [],
    logs: [],
    overrides: [];
  };
<<<<<<< HEAD
}
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
