<<<<<<< HEAD

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
// Operator utilities
export const operator = {
  // Add operator functionality here
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  logEvent: (event: any) => null
  getEvents: () => []
  getEventById: (id: string) => null
}

  logEvent: (event: any) => null,
  getEvents: () => [],
  getEventById: (id: string) => null;
};

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  tagOperatorSession(sessionId: string, tag: string): void {
    // Simple implementation - in a real app this would update a database
    console && console.log(`Tagging session ${sessionId} with tag: ${tag}`);
  }

  logSupportEvent(event: SupportEvent): void {
    this && this.events.push(event);
    console && console.log('Support event logged:', event);
  }

  getOperatorSessions(): OperatorSession[] {
    return Array && Array.from(this && this.sessions.values());
  }

  getSupportEvents(): SupportEvent[] {
    return [...this && this.events];
  }
}

const operatorManager = new OperatorManager();

export const tagOperatorSession = (sessionId: string, tag: string) => 
  operatorManager && operatorManager.tagOperatorSession(sessionId, tag);

export const logSupportEventToOperator = (event: SupportEvent) => 
  operatorManager && operatorManager.logSupportEvent(event);

export const getOperatorSessions = () => operatorManager && operatorManager.getOperatorSessions();
export async function logSupportEventToOperator(
  event: OperatorEvent
): Promise<void> {
  // Placeholder for real Operator integration; could POST to external service
  // For now, we just no-op to avoid failures
  return Promise.resolve();
}

export async function tagOperatorSession(
  sessionId: string,
  tag: string
): Promise<void> {
  return Promise.resolve();
}
// Operator utilities;
export const operator = {
  // Add operator functionality here;
  log_event: (event: any) => null,
  get_events: () => [],
  getEventById: (id: string) => null;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
