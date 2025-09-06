export type MilestoneStatus = 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid';
export type ProjectParticipantRole = 'client' | 'talent';

export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  amount: number;
  dueDate?: string;
  status: MilestoneStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  talentId: string;
  milestones: Milestone[];
  status: 'active' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export function isMilestoneStatus(status: string): status is MilestoneStatus {
  return ['Pending', 'In Progress', 'Submitted', 'Approved', 'Paid'].includes(status);
}