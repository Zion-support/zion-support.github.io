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
};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;
=======
=======
}
<<<<<<< HEAD
export function getState(): IntegrationState {
=======

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {
<<<<<<< HEAD
<<<<<<< HEAD
=======

  connections: [],
  logs: [],
  overrides: [];
=======
  connections: []
  logs: []
  overrides: []
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
export function get_state (): IntegrationState {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return { ...state }
}

=======
  connections: [],
  logs: [],
  overrides: [],
};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(
  updater: (state: IntegrationState) => void,
): IntegrationState {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  updater(state);

  return { ...state }
}
export function resetState(): void {
  state = {

  connections: [],
  logs: [],
  overrides: [];
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
<<<<<<< HEAD
<<<<<<< HEAD

  }

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
=======
<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
    connections: [],
    logs: [],
    overrides: [];
=======
<<<<<<< HEAD
    connections: []
    logs: []
    overrides: []
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    connections: [],
    logs: [],
    overrides: [];
  };
<<<<<<< HEAD
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    connections: [],
    logs: [],
    overrides: [],
  };
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
