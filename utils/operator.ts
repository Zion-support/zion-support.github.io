
export interface OperatorSession {
  id: string;
  name: string;
  status: "active" | "inactive" | "busy";
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

  getEvents: () => []
  getEventById: (id: string) => null
}

  logEvent: (event: any) => null,
  getEvents: () => [],
  getEventById: (id: string) => null
};

  tagOperatorSession(sessionId: string, tag: string): void {
    // Simple implementation - in a real app this would update a database
    console.log(`Tagging session ${sessionId} with tag: ${tag}`);
  }

  logSupportEvent(event: SupportEvent): void {
    this.events.push(event);
    console.log("Support event logged:", event);
  }

  getOperatorSessions(): OperatorSession[] {
    return Array.from(this.sessions.values());
  }

  getSupportEvents(): SupportEvent[] {
    return [...this.events];
  }
}

const operatorManager = new OperatorManager();

export const tagOperatorSession = (sessionId: string, tag: string) =>
  operatorManager.tagOperatorSession(sessionId, tag);

export const logSupportEventToOperator = (event: SupportEvent) =>
  operatorManager.logSupportEvent(event);

export const getOperatorSessions = () => operatorManager.getOperatorSessions();
export const getSupportEvents = () => operatorManager.getSupportEvents();