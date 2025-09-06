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
<<<<<<< HEAD
=======
  connections: []
  logs: []
  overrides: []
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return { ...state }
}
export function reset_state (): void {
  state = {
<<<<<<< HEAD
    connections: [],
    logs: [],
    overrides: [];
  }
}

=======

=======
    connections: []
    logs: []
    overrides: []
  }

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    connections: [],
    logs: [],
    overrides: [];
  };
<<<<<<< HEAD

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
