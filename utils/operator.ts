
export interface OperatorSession {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'busy';
  currentSessions: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SupportEvent {
  type: string;
  sessionId: string;
  payload: any;
  timestamp: Date;
}


=======
// Operator utilities;
export const operator = {
  // Add operator functionality here;
  log_event: (event: any) => null,
  get_events: () => [],
  getEventById: (id: string) => null;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
