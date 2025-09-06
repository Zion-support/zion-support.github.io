<<<<<<< HEAD
type OperatorEvent = {;
=======
<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  type: string;
  sessionId: string;
  payload?: any;
};
export async function logSupportEventToOperator(event: OperatorEvent): Promise<void> {;
  // Placeholder for real Operator integration, could POST to external service;
  // For now, we just no-op to avoid failures;
  return Promise.resolve();
}
<<<<<<< HEAD
;
export async function tagOperatorSession(sessionId: string, tag: string): Promise<void> {;
  return Promise.resolve();
}
=======


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

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export const getOperatorSessions = () => operatorManager.getOperatorSessions();
export const getSupportEvents = () => operatorManager.getSupportEvents();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
