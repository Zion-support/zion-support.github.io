
export type MilestoneStatus = 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid',
export interface MilestoneAttachment {
  id: string,
  name: string,
  url: string,
  type: string,
  size: number,
  uploadedAt: string,
}
,
export interface Milestone {
  id: string,
  title: string,
  description?: string,
  dueDate: string,
  amountUsd: number,
  status: 'pending' | 'completed' | 'cancelled',
  attachments?: MilestoneAttachment[],
  createdAt: string,
  updatedAt: string,
}
,
export interface Project {
  id: string,
  title: string,
  description?: string,
  dueDate: string,
  amountUsd: number,
  status: 'pending' | 'completed' | 'cancelled',
  milestones: Milestone[],
  createdAt: string,
  updatedAt: string,
}
,
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' ||,
    value === 'In Progress' ||,
    value === 'Submitted' ||,
    value === 'Approved' ||,
    value === 'Paid'),
}
,
export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate) return false,
  return new Date(milestone.dueDate) < new Date(),
}
,