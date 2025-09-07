export type ProjectParticipants = {

export type ProjectParticipants = {;

  clientUserId: string;
  talentUserId: string;

origin/cursor/expand-services-advertise-and-build-project-c28b
  clientUserId: string;
  talentUserId: string;

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

  title: string;
  description?: string;  title: string;
  description?: string;
  due_date: string;

    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;

  id: string;
  name: string;
  url: string;
  type: string;
  size: number;

  uploaded_at: string,

}
export interface CreateMilestoneRequest {
  uploadedAt: string
}

export interface CreateMilestoneRequest {;

  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {

  title?: string;

  description?: string;
  due_date?: string;

}

export function getDaysUntilDue(milestone: Milestone): number | null {};
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

}

origin/cursor/integrate-build-improve-and-re-verify-2156
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

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