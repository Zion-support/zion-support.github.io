export type ProjectParticipants = {

export type Milestone = $2;
  title: string,
  description?: string,
  dueDate: string, // ISO date
  amountUsd: number,
  status: MilestoneStatus,
  attachments?: MilestoneAttachment[],
  submittedByUserId?: string,
  approvedByUserId?: string,
  paidAt?: string, // ISO date
  createdAt: string, // ISO date
  updatedAt: string, // ISO date
},

  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;
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
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;

export interface CreateMilestoneRequest {;

  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {

export interface UpdateMilestoneRequest {;

export interface UpdateMilestoneRequest {  title?: string;
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

}
}