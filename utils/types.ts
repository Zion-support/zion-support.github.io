export type JobStatus = 'New' | 'In Progress' | 'Filled' | 'Closed';
export type ApplicationStatus = 'applied' | 'skipped' | 'withdrawn';
<<<<<<< HEAD

export type Application = {
  id: string;
  jobId: string;
  talentSlug: string;
  status: ApplicationStatus;
  createdAtIso: string;
};

export type Participant = { type: 'email' | 'talent'; id: string };

export type Attachment = {
  name: string;
  url: string;
  sizeBytes?: number;
};

export type Message = {
  id: string;
  conversationId: string;
  sender: Participant;
  text?: string;
  attachments?: Attachment[];
  createdAtIso: string;
  readBy?: { participantId: string; readAtIso: string }[];
};

export type Conversation = {
  id: string;
  jobId?: string;
  participants: Participant[];
  createdAtIso: string;
  updatedAtIso: string;
  messages: Message[];
};
=======
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
