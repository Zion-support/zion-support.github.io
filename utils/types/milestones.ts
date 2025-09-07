export type ProjectParticipants = {
  clientUserId: string;
  talentUserId: string;
}

export type MilestoneStatus = 'pending' | 'completed' | 'cancelled';

export interface Milestone {
  id: string;
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: MilestoneStatus;
  attachments?: MilestoneAttachment[];
  created_at: string;
  updated_at: string;
}

export interface MilestoneAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
}

export interface CreateMilestoneRequest {
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
}

export interface UpdateMilestoneRequest {
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: MilestoneStatus;
  attachments?: MilestoneAttachment[];
}

export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'pending' ||
    value === 'completed' ||
    value === 'cancelled'
  );
}

export function getDaysUntilDue(milestone: Milestone): number | null {
  if (!milestone.due_date) return null;
  const dueDate = new Date(milestone.due_date);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}