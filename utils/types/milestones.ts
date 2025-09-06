export type MilestoneStatus = | 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid';
export type ProjectParticipantRole = 'client' | 'talent';
;
export type ProjectParticipants = {
  clientUserId: string;
  talentUserId: string;
}
;
export type Project = {  id: string;
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
  created_at: string;
  updated_at: string,
}
export function isMilestoneStatus (value: string): value is MilestoneStatus {
  return (
    value === 'Pending' ||;
    value === 'In Progress' ||;
    value === 'Submitted' ||;
    value === 'Approved' ||;
    value === 'Paid');export interface MilestoneAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploaded_at: string,
}
export interface CreateMilestoneRequest {
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  attachments?: MilestoneAttachment[],
}
export interface UpdateMilestoneRequest {
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
}