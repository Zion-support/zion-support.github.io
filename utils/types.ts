export interface Application {;
  id: string;
  name: string;
  email: string;
  position: string;
  experience: number;
  skills: string[];
  createdAt: string;
  updatedAt?: string;
<<<<<<< HEAD
}


export interface Application {;


  id: string;
  jobId: string;
  talentSlug: string;
  status: "applied" | "skipped" | "pending";
  createdAtIso: string;
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




=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
