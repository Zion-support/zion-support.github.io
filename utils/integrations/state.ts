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

=======


};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  updater(state);
  return { ...state }
}
export function resetState(): void {
  state = {

<<<<<<< HEAD
}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  connections: [],
  logs: [],
  overrides: [];
=======
  connections: []
  logs: []
  overrides: []
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;
  updater(state);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return { ...state }
}
export function reset_state (): void {
  state = {
<<<<<<< HEAD
<<<<<<< HEAD
    connections: [],
    logs: [],
    overrides: [];
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    connections: []
    logs: []
    overrides: []
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
<<<<<<< HEAD
<<<<<<< HEAD
}

=======

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    connections: [],
    logs: [],
    overrides: [];
  };
<<<<<<< HEAD
<<<<<<< HEAD

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
