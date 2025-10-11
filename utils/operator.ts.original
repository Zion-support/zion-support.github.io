<<<<<<< HEAD





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


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




>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
type OperatorEvent = {
  type: string;
  sessionId: string;
  payload?: any;
};

export async function logSupportEventToOperator(event: OperatorEvent): Promise<void> {
  // Placeholder for real Operator integration; could POST to external service
  // For now, we just no-op to avoid failures
  return Promise.resolve();
}

export async function tagOperatorSession(sessionId: string, tag: string): Promise<void> {
  return Promise.resolve();
}
>>>>>>> origin/auto/autonomy-17186719616
