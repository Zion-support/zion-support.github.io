  id: string;
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
  createdAt: string;
  updatedAt: string;
}

export interface MilestoneAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}

export interface CreateMilestoneRequest {
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  attachments?: MilestoneAttachment[];
}

export interface UpdateMilestoneRequest {
  title?: string;
  description?: string;
  dueDate?: string;
  amountUsd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
}
