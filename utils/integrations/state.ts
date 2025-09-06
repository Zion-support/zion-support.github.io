interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
}
<<<<<<< HEAD

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
=======
export function getState(): IntegrationState {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
  }

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    connections: [],
    logs: [],
    overrides: [];
  };
<<<<<<< HEAD
<<<<<<< HEAD

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
