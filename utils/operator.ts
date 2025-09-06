<<<<<<< HEAD
// Operator utilities
export const operator = {
  // Add operator functionality here
  logEvent: (event: any) => null
  getEvents: () => []
  getEventById: (id: string) => null
}
=======
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

class OperatorManager {
  private sessions: Map<string, OperatorSession> = new Map();
  private events: SupportEvent[] = [];

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
export const getSupportEvents = () => operatorManager && operatorManager.getSupportEvents();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
