<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type MilestoneStatus =;
  | 'Pending';
  | 'In Progress';
  | 'Submitted';
  | 'Approved';
  | 'Paid';
export type MilestoneAttachment = {;
  id: string;
  type: 'link' | 'file';
  url: string;
  label?: string;
  uploadedByUserId: string;
  uploadedAt: string, // ISO date;
};
export type Milestone = {;
  id: string;
  title: string;
  description?: string;
  dueDate: string, // ISO date;
  amountUsd: number;
  status: MilestoneStatus;
  attachments?: MilestoneAttachment[];
  submittedByUserId?: string;
  approvedByUserId?: string;
  paidAt?: string, // ISO date;
  createdAt: string, // ISO date;
  updatedAt: string, // ISO date;
};
export type ProjectParticipantRole = 'client' | 'talent';
export type ProjectParticipants = {;
  clientUserId: string;
  talentUserId: string;
};
export type Project = {;
  id: string;
  name: string;
  participants: ProjectParticipants;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
};
export function isMilestoneStatus(value: string): value is MilestoneStatus {;
  return (;
    value === 'Pending' ||;
    value === 'In Progress' ||;
    value === 'Submitted' ||;
    value === 'Approved' ||;
    value === 'Paid';
  );
}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export type ProjectParticipants = {

export type ProjectParticipants = {;

=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  clientUserId: string;
  talentUserId: string;
<<<<<<< HEAD
}
export type Project = {  id: string;
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


origin/cursor/expand-services-advertise-and-build-project-c28b
  clientUserId: string;
  talentUserId: string;

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export type ProjectParticipants = {

export type ProjectParticipants = {;

  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;
pr-12325
export type ProjectParticipants = {

  clientUserId: string;
  talentUserId: string;
}

export type MilestoneStatus = 'pending' | 'completed' | 'cancelled';

export interface Milestone {
  id: string;
  title: string;
  description?: string;
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title: string;
  description?: string;  title: string;
  description?: string;
  due_date: string;
<<<<<<< HEAD
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];

  updatedAt: string;
}
export function isMilestoneStatus(value: string): value is MilestoneStatus {}
  return (
<<<<<<< HEAD

  );export interface MilestoneAttachment {
<<<<<<< HEAD
=======


<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
  clientUserId: string;,
  talentUserId: string;
}
export type Project = {  id: string;,
  title: string;
  description?: string;
  due_date: string;,
pr-12325
  amount_usd: number;
  status: MilestoneStatus;
  attachments?: MilestoneAttachment[];
  created_at: string;
  updated_at: string;
}


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;
<<<<<<< HEAD
<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
;
  );export interface MilestoneAttachment {}
'
    value === 'Pending' ||'
    value === 'In Progress' ||'
    value === 'Submitted' ||';
    value === 'Approved' ||;'
    value === 'Paid';
  );export interface MilestoneAttachment {;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export interface CreateMilestoneRequest {;

=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  uploaded_at: string,

}
export interface CreateMilestoneRequest {
  uploadedAt: string
}
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export interface CreateMilestoneRequest {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


export interface CreateMilestoneRequest {;

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

export interface CreateMilestoneRequest {;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {
<<<<<<< HEAD

export interface UpdateMilestoneRequest {;

export interface UpdateMilestoneRequest {  title?: string;
=======

export interface UpdateMilestoneRequest {;

<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======

  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {};
export interface UpdateMilestoneRequest {;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
export interface UpdateMilestoneRequest {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
export interface UpdateMilestoneRequest {

}

export interface UpdateMilestoneRequest {
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title?: string;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  description?: string;
  due_date?: string;
<<<<<<< HEAD
  amount_usd?: number;'
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
<<<<<<< HEAD
=======
  amount_usd?: number;
  status?: MilestoneStatus;
  attachments?: MilestoneAttachment[];
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD





export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

export function getDaysUntilDue(milestone: Milestone): number | null {};
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/integrate-build-improve-and-re-verify-2156
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
}

origin/cursor/expand-services-advertise-and-build-project-c28b
  updatedAt: string;

}

export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'pending' ||
    value === 'completed' ||
    value === 'cancelled'
  );
}

export function getDaysUntilDue(milestone: Milestone): number | null {

}
}
export type MilestoneStatus =;
  | 'Pending';
  | 'In Progress';
  | 'Submitted';
  | 'Approved';
  | 'Paid';
export type MilestoneAttachment = {;
  id: string;
  type: 'link' | 'file';
  url: string;
  label?: string;
  uploadedByUserId: string;
  uploadedAt: string, // ISO date;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
export type Milestone = {;
  id: string;
  title: string;
  description?: string;
  dueDate: string, // ISO date;
  amountUsd: number;
  status: MilestoneStatus;
  attachments?: MilestoneAttachment[];
  submittedByUserId?: string;
  approvedByUserId?: string;
  paidAt?: string, // ISO date;
  createdAt: string, // ISO date;
  updatedAt: string, // ISO date;
};
export type ProjectParticipantRole = 'client' | 'talent';
export type ProjectParticipants = {;
  clientUserId: string;
  talentUserId: string;
};
export type Project = {;
  id: string;
  name: string;
  participants: ProjectParticipants;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
};
export function isMilestoneStatus(value: string): value is MilestoneStatus {;
  return (;
    value === 'Pending' ||;
    value === 'In Progress' ||;
    value === 'Submitted' ||;
    value === 'Approved' ||;
    value === 'Paid';
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


}



'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
