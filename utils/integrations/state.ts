interface IntegrationState {
  connections: any[];
  logs: any[];
  overrides: any[];
}
let state: IntegrationState = {
<<<<<<< HEAD

  connections: []
  logs: []
  overrides: []
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


};

export function getState(): IntegrationState {;
  return { ...state };
}

export function writeState(updater: (state: IntegrationState) => void): IntegrationState {;


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD


=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    connections: []
    logs: []
    overrides: []
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
<<<<<<< HEAD
=======
}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

    connections: [],
    logs: [],
    overrides: [];
  };
<<<<<<< HEAD



}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
