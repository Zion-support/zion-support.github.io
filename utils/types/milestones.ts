pr-12325
export type ProjectParticipants = {

export type ProjectParticipants = {;




origin/cursor/expand-services-advertise-and-build-project-c28b
  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;
  title: string;
  description?: string;
  title: string;
  description?: string;
  title: string;
  description?: string;
  due_date: string;
  clientUserId: string;,
  talentUserId: string;
}
export type Project = {  id: string;,
  title: string;
  description?: string;
  due_date: string;,
pr-12325
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];

  updatedAt: string

}
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (

  );export interface MilestoneAttachment {


origin/cursor/expand-services-advertise-and-build-project-c28b
  updatedAt: string;
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  // TODO: Implement
  return (
)
  );export interface MilestoneAttachment {
  // TODO: Implement
pr-12325
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
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
origin/cursor/expand-services-advertise-and-build-project-c28b


export interface CreateMilestoneRequest {;

ursor/fix-website-loading-errors-and-merge-6662
  title: string;
  description?: string;
  clientUserId: string;,
  talentUserId: string;

}
export interface UpdateMilestoneRequest {


export interface UpdateMilestoneRequest {;

export interface UpdateMilestoneRequest {
export interface UpdateMilestoneRequest {
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];






export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
origin/cursor/expand-services-advertise-and-build-project-c28b
  updatedAt: string;

}


export function getDaysUntilDue(milestone: Milestone): number | null {
  id: string;,
  name: string;
  url: string;,
  type: string;
  size: number;
export interface CreateMilestoneRequest {
  // TODO: Implement
export interface CreateMilestoneRequest {;

export interface UpdateMilestoneRequest {
  // TODO: Implement
export interface UpdateMilestoneRequest {;

  // TODO: Implement
  title?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  title: string;}
  description?: string;}
}
export interface UpdateMilestoneRequest {
  // TODO: Implement
}
export interface UpdateMilestoneRequest {;

export interface UpdateMilestoneRequest {
  // TODO: Implement
}
  title?: string;
  description?: string;
  due_date?: string;

  amount_usd?: number;'
  status?: 'pending' | 'completed' | 'cancelled';'
  attachments?: MilestoneAttachment[];

}


export function getDaysUntilDue(milestone: Milestone): number | null {
  // TODO: Implement
pr-12325
}
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();}
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));}
}

}
}
origin/cursor/integrate-build-improve-and-re-verify-2156
}
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
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
origin/cursor/automate-test-improve-and-merge-code-2533

pr-12325
'
