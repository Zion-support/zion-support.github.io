
export type MilestoneStatus = 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid',

export interface MilestoneAttachment {
  id: string,
  type: 'link' | 'file',
  url: string,
  label?: string,
  uploadedByUserId: string,
  uploadedAt: string, // ISO date
}

export interface Milestone {
  id: string,
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
}

export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||
    value === 'Paid'
  )
}

export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate) return false,
  return new Date(milestone.dueDate) < new Date()
}
