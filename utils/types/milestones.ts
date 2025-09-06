export type MilestoneStatus = 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid';
export type ProjectParticipantRole = 'client' | 'talent';
export type ProjectParticipants = {
  clientUserId: string;
  talentUserId: string;
<<<<<<< HEAD
};

export interface MilestoneAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}

export interface Milestone {
  id: string;
=======
}
export type Project = {  id: string;
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
  createdAt: string;
<<<<<<< HEAD
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
=======
  updatedAt: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' |
    value === 'In Progress' |
    value === 'Submitted' |
    value === 'Approved' |
    value === 'Paid'
<<<<<<< HEAD
  );
=======
  );export interface MilestoneAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export interface CreateMilestoneRequest {
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
<<<<<<< HEAD
  attachments?: MilestoneAttachment[];
=======
  attachments?: MilestoneAttachment[]
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export interface UpdateMilestoneRequest {
  title?: string;
  description?: string;
  dueDate?: string;
  amountUsd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
}