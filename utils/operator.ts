
;
export interface OperatorSession  {id: string;
  name: string;
  status: "active" | "inactive" | "busy";
  currentSessions: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}export interface SupportEvent  {type: string;
  sessionId: string;
  payload: any;
  timestamp: Date;
}// Operator utilities;
export const operator = {// Add operator functionality here;
  log_event: (event: any) => null,get_events: () => [],getEventById: (id: string) => null;
}// Operator utilities;
export const operator = {// Add operator functionality here;
  logEvent: (event: any) => null;
  getEvents: () => [];
  getEventById: (id: string) => null;
}logEvent: (event: any) => null,getEvents: () => [],getEventById: (id: string) => null;
}getEventById: (id: string) => null;
}tagOperatorSession(sessionId: string, tag: string): void {// Simple implementation - in a real app this would update a database;
    console.log(`Tagging session ${sessionId} with tag: ${tag}`)}logSupportEvent(event: SupportEvent): void {this.events.push(event)console.log("Support event logged:", event)}getOperatorSessions(): OperatorSession[] {return Array.from(this.sessions.values())}getSupportEvents(): SupportEvent[] {return [...this.events];
  }
}const operatorManager  = new OperatorManager()export const tagOperatorSession = (sessionId: string, tag: string) =>;
  operatorManager.tagOperatorSession(sessionId, tag)export const logSupportEventToOperator = (event: SupportEvent) =>;
  operatorManager.logSupportEvent(event)export const getOperatorSessions = () => operatorManager.getOperatorSessions()export const getSupportEvents  = () => operatorManager.getSupportEvents()export const getOperatorSessions = () => operatorManager.getOperatorSessions()export const getSupportEvents = () => operatorManager.getSupportEvents()export const getOperatorSessions = () => operatorManager && operatorManager.getOperatorSessions()export async function logSupportEventToOperator(event: OperatorEvent;
): Promise<void> {// Placeholder for real Operator integration; could POST to external service;
  // For now, we just no-op to avoid failures;
  return Promise.resolve()}export async function tagOperatorSession(sessionId: string,tag: string;
): Promise<void> {return Promise.resolve()}
// Operator utilities;
export const operator = {// Add operator functionality here;
  log_event: (event: any) => null,get_events: () => [],getEventById: (id: string) => null;ursor/automate-test-improve-and-merge-code-646c;
export const getSupportEvents  = () => operatorManager.getSupportEvents()
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

// Operator utilities
export const operator = {
  // Add operator functionality here
  logEvent: (event: any) => null
<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  getEvents: () => []
  getEventById: (id: string) => null
}

  logEvent: (event: any) => null,
  getEvents: () => [],
<<<<<<< HEAD
<<<<<<< HEAD
  getEventById: (id: string) => null;
};


=======
  getEventById: (id: string) => null
};

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  getEventById: (id: string) => null;
};


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
export const getSupportEvents = () => operatorManager.getSupportEvents();
export const getOperatorSessions = () => operatorManager.getOperatorSessions();
export const getSupportEvents = () => operatorManager.getSupportEvents();
=======
export const getSupportEvents = () => operatorManager.getSupportEvents();
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
export const getSupportEvents = () => operatorManager.getSupportEvents();
export const getOperatorSessions = () => operatorManager.getOperatorSessions();
export const getSupportEvents = () => operatorManager.getSupportEvents();
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
