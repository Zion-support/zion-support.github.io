
export type ProjectParticipants = {;
  clientUserId: string;
  talentUserId: string;
}
;
export type Project = {  id: string;
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
  createdAt: string;
  updatedAt: string;
  milestones: Milestone[];
}
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
  );export interface MilestoneAttachment {

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
  uploadedAt: string
  uploaded_at: string,
}
export interface CreateMilestoneRequest {
  uploadedAt: string
}

export interface CreateMilestoneRequest {;
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  attachments?: MilestoneAttachment[]
}


export interface UpdateMilestoneRequest {;
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
}


export function getDaysUntilDue(milestone: Milestone): number | null {
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

