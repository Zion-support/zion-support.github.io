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
export type Project = {  id: string;
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
  createdAt: string;
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
  dueDate?: string;
  amountUsd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
}
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
