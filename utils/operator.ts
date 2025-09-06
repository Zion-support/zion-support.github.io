
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


// Operator utilities;
export const operator = {
  // Add operator functionality here;
  log_event: (event: any) => null,
  get_events: () => [],
  getEventById: (id: string) => null;
}
// Operator utilities
export const operator = {
  // Add operator functionality here
  logEvent: (event: any) => null
  getEvents: () => []
  getEventById: (id: string) => null
}

  logEvent: (event: any) => null,
  getEvents: () => [],
  getEventById: (id: string) => null;
};

