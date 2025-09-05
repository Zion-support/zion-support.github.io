export type MilestoneStatus =
  | 'Pending'
  | 'In Progress'
  | 'Submitted'
  | 'Approved'
  | 'Paid';

export type MilestoneAttachment = {_id: string;
  type: 'link' | 'file';
  url: string;
  label?: string;
  uploadedByUserId: string;
  uploadedAt: string; // ISO date};

export type Milestone = {_id: string;
  title: string;
  description?: string;
  dueDate: string; // ISO date
  amountUsd: number;
  status: MilestoneStatus;
  attachments?: MilestoneAttachment[];
  submittedByUserId?: string;
  approvedByUserId?: string;
  paidAt?: string; // ISO date
  createdAt: string; // ISO date
  updatedAt: string; // ISO date};

export type ProjectParticipantRole = 'client' | 'talent';

export type ProjectParticipants = {_clientUserId: string;
  talentUserId: string;};

export type Project = {_id: string;
  name: string;
  participants: ProjectParticipants;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;};

export function isMilestoneStatus(_value: string): value is MilestoneStatus {_return (
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||
    value === 'Paid'
  );}