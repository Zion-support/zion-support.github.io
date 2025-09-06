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


=======
<<<<<<< HEAD
<<<<<<< HEAD
export interface Application {
=======
export interface Application {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  id: string;

  job_id: string;
  talent_slug: string;
  status: 'applied' | 'skipped' | 'pending';
  createdAtIso: string;
}
export type UserRole = 'admin' | 'user' | 'guest';
<<<<<<< HEAD



