export type Project = {  id: string;
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
}
export interface CreateMilestoneRequest {
  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
}
