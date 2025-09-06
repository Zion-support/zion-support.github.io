export interface Application {;
  id: string;
  name: string;
  email: string;
  position: string;
  experience: number;
  skills: string[];
  createdAt: string;
  updatedAt?: string;
}


export interface Application {;


  id: string;
  jobId: string;
  talentSlug: string;
  status: "applied" | "skipped" | "pending";
  createdAtIso: string;
}
export type UserRole = 'admin' | 'user' | 'guest';








