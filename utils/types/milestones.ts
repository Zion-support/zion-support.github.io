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
  status: MilestoneStatus;
  attachments?: MilestoneAttachment[];
  created_at: string;
  updated_at: string;
}


  id: string;
  name: string;
  url: string;
  type: string;
  size: number;

}

export interface UpdateMilestoneRequest {
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: MilestoneStatus;
  attachments?: MilestoneAttachment[];






export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
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

