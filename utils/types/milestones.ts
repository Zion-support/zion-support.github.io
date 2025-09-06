export type MilestoneStatus = $2;
export type MilestoneAttachment = $2;
  type: 'link' | 'file',
  url: string,
  label?: string,
  uploadedByUserId: string,
  uploadedAt: string, // ISO date
},

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

export type ProjectParticipantRole = $2;
export type ProjectParticipants = $2;
  talentUserId: string},

export type Project = $2;
  name: string,
  participants: ProjectParticipants,
  milestones: Milestone[],
  createdAt: string,
  updatedAt: string},

export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||
    value === 'Paid'
  )
}