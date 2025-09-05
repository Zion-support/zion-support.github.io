export type JobStatus = 'New' | 'In Progress' | 'Filled' | 'Closed',

<<<<<<< HEAD
export type Job = {
  id: string,
  title: string,
  description: string,
  category: string,
  requiredSkills: string[],
  budgetMinUsd?: number,
  budgetMaxUsd?: number,
  deliveryDeadlineIso?: string, // ISO string
  clientEmail: string,
  status: JobStatus,
  createdAtIso: string,
  updatedAtIso: string
},
=======
export type Job = {_id: string;
  title: string;
  description: string;
  category: string;
  requiredSkills: string[];
  budgetMinUsd?: number;
  budgetMaxUsd?: number;
  deliveryDeadlineIso?: string; // ISO string
  clientEmail: string;
  status: JobStatus;
  createdAtIso: string;
  updatedAtIso: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type ApplicationStatus = 'applied' | 'skipped' | 'withdrawn',

<<<<<<< HEAD
export type Application = {
  id: string,
  jobId: string,
  talentSlug: string,
  status: ApplicationStatus,
  createdAtIso: string
},

export type Participant = { type: 'email' | 'talent', id: string },

export type Attachment = {
  name: string,
  url: string,
  sizeBytes?: number
},

export type Message = {
  id: string,
  conversationId: string,
  sender: Participant,
  text?: string,
  attachments?: Attachment[],
  createdAtIso: string,
  readBy?: { participantId: string, readAtIso: string }[]
},

export type Conversation = {
  id: string,
  jobId?: string,
  participants: Participant[],
  createdAtIso: string,
  updatedAtIso: string,
  messages: Message[]
},
=======
export type Application = {_id: string;
  jobId: string;
  talentSlug: string;
  status: ApplicationStatus;
  createdAtIso: string;};

export type Participant = {_type: 'email' | 'talent'; id: string};

export type Attachment = {_name: string;
  url: string;
  sizeBytes?: number;};

export type Message = {_id: string;
  conversationId: string;
  sender: Participant;
  text?: string;
  attachments?: Attachment[];
  createdAtIso: string;
  readBy?: { participantId: string; readAtIso: string}[];
};

export type Conversation = {_id: string;
  jobId?: string;
  participants: Participant[];
  createdAtIso: string;
  updatedAtIso: string;
  messages: Message[];};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
