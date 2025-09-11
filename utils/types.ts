export interface Application {;


=======


=======
export interface Application {;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;

  job_id: string;
  talent_slug: string;
  status: 'applied' | 'skipped' | 'pending';
  createdAtIso: string;
}
export type UserRole = 'admin' | 'user' | 'guest';

export interface Application {
export interface Application {;
  id: string;
  jobId: string;
  talentSlug: string;
  status: ApplicationStatus;
  createdAtIso: string;
};
export type Participant = { type: 'email' | 'talent', id: string };
export type Attachment = {;
  name: string;
  email: string;
  position: string;
  experience: number;
  skills: string[];
  createdAt: string;
  updatedAt?: string;
}

export type UserRole = 'admin' | 'user' | 'guest';
=======



  job_id: string;
  talent_slug: string;
  status: 'applied' | 'skipped' | 'pending';
  createdAtIso: string;
}
export type UserRole = 'admin' | 'user' | 'guest';

=======


=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
