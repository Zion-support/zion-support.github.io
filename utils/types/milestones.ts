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

  clientUserId: string;
  talentUserId: string;
<<<<<<< HEAD
}
export type Project = {  id: string;
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
  clientUserId: string;
  talentUserId: string;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  title: string;
  description?: string;  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];

  updatedAt: string

}
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (

  );export interface MilestoneAttachment {
<<<<<<< HEAD
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
<<<<<<< HEAD

export interface CreateMilestoneRequest {;

=======

  uploaded_at: string,

}
  uploadedAt: string
}
origin/cursor/expand-services-advertise-and-build-project-c28b



export interface CreateMilestoneRequest {;

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {
<<<<<<< HEAD

export interface UpdateMilestoneRequest {;

export interface UpdateMilestoneRequest {  title?: string;
=======


export interface UpdateMilestoneRequest {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  title?: string;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
<<<<<<< HEAD
=======






export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
}

export function getDaysUntilDue(milestone: Milestone): number | null {
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

}
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
origin/cursor/integrate-build-improve-and-re-verify-2156
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
};

export type Project = {
  id: string;
  name: string;
  participants: ProjectParticipants;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
};

export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||
    value === 'Paid'
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
