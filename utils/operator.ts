




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



