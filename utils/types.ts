export type JobStatus = $2;
export type Job = $2;
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
  updatedAtIso: string},

export type ApplicationStatus = $2;
export type Application = $2;
  jobId: string,
  talentSlug: string,
  status: ApplicationStatus,
  createdAtIso: string},

export type Participant = { type: 'email' | 'talent', id: string},

export type Attachment = $2;
  url: string,
  sizeBytes?: number
},

export type Message = $2;
  conversationId: string,
  sender: Participant,
  text?: string,
  attachments?: Attachment[],
  createdAtIso: string,
  readBy?: { participantId: string, readAtIso: string}[]
},

  id: string;
  jobId: string;
  talentSlug: string;
  status: "applied" | "skipped" | "pending";
  createdAtIso: string;
}
export type UserRole = 'admin' | 'user' | 'guest';

export type UserRole = "admin" | "user" | "guest";
