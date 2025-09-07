export interface Application {;
  id: string;
  name: string;
  email: string;
  position: string;
  experience: number;
  skills: string[];
  createdAt: string;
  updatedAt?: string;

  id: string;
  jobId: string;
  talentSlug: string;
  status: "applied" | "skipped" | "pending";
  createdAtIso: string;
}
export type UserRole = 'admin' | 'user' | 'guest';

export interface Application {

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

  id: string;

  job_id: string;
  talent_slug: string;
  status: 'applied' | 'skipped' | 'pending';
  createdAtIso: string;

}

  jobId: string;

  talentSlug: string;,
  status: "applied" | "skipped" | "pending";"
  createdAtIso: string;
}"
export type UserRole = 'admin' | 'user' | 'guest';