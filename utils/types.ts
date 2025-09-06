<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
export interface Application {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======


export interface Application {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


  id: string;
  jobId: string;
  talentSlug: string;
  status: "applied" | "skipped" | "pending";
  createdAtIso: string;
}
export type UserRole = 'admin' | 'user' | 'guest';

export type UserRole = "admin" | "user" | "guest";
