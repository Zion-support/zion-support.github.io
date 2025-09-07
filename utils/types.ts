}export type UserRole = 'admin' | 'user' | 'guest';id: string;job_id: string;
  talent_slug: string;
  status: 'applied' | 'skipped' | 'pending';export interface Application  {id: string;
}


export interface Application {;


  id: string;
  jobId: string;
  talentSlug: string;
  status: "applied" | "skipped" | "pending";
  createdAtIso: string;
}
export type UserRole = 'admin' | 'user' | 'guest';ursor/fix-website-loading-errors-and-merge-6662;
ursor/automate-test-improve-and-merge-code-646c;
}
export type UserRole = 'admin' | 'user' | 'guest';

export type UserRole = "admin" | "user" | "guest";
export type UserRole = "admin" | "user" | "guest";


export interface Application {
  id: string;
  name: string;
  email: string;
  position: string;
  experience: number;
  skills: string[];
  createdAt: string;
  updatedAt?: string;
}

export type UserRole = 'admin' | 'user' | 'guest';




  id: string;

  job_id: string;
  talent_slug: string;
  status: 'applied' | 'skipped' | 'pending';
  createdAtIso: string;
}
export type UserRole = 'admin' | 'user' | 'guest';




}
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

export type Conversation = $2;
  jobId?: string,
  participants: Participant[],
  createdAtIso: string,
  updatedAtIso: string,
  messages: Message[]
},
