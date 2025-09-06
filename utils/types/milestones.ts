<<<<<<< HEAD
export type MilestoneStatus = | 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid';
export type ProjectParticipantRole = 'client' | 'talent';
<<<<<<< HEAD
export type ProjectParticipants = {
=======

export type ProjectParticipants = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  clientUserId: string;
  talentUserId: string;
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export type Project = {  id: string;
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];

  updatedAt: string

}
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
<<<<<<< HEAD
    value === 'Pending' |
    value === 'In Progress' |
    value === 'Submitted' |
    value === 'Approved' |
    value === 'Paid'
  );export interface MilestoneAttachment {
=======

    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;

  uploaded_at: string,

}
export interface CreateMilestoneRequest {
=======
  uploadedAt: string
}
<<<<<<< HEAD
export interface CreateMilestoneRequest {
=======

export interface CreateMilestoneRequest {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  attachments?: MilestoneAttachment[]
}
<<<<<<< HEAD
export interface UpdateMilestoneRequest {
=======


export interface UpdateMilestoneRequest {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];

=======




=======

export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
}
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

export function getDaysUntilDue(milestone: Milestone): number | null {
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
