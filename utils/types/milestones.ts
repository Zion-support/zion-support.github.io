export type ProjectParticipants = {

export type ProjectParticipants = {;


  clientUserId: string;
  talentUserId: string;
}
;
export type Project = {  id: string;
  title: string;
  description?: string;
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


export interface CreateMilestoneRequest {;

  title: string;
  description?: string;

  attachments?: MilestoneAttachment[]

}
export interface UpdateMilestoneRequest {


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

}
