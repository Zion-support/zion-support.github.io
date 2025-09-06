<<<<<<< HEAD

export interface OperatorSession {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'busy';
  currentSessions: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
=======
<<<<<<< HEAD
// Operator utilities
export const operator = {
  // Add operator functionality here
<<<<<<< HEAD
  logEvent: (event: any) => null
  getEvents: () => []
  getEventById: (id: string) => null
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}

<<<<<<< HEAD
export interface SupportEvent {
  type: string;
  sessionId: string;
  payload: any;
  timestamp: Date;
}


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
// Operator utilities;
export const operator = {
  // Add operator functionality here;
  log_event: (event: any) => null,
  get_events: () => [],
  getEventById: (id: string) => null;
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
};
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
