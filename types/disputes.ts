// Mock implementation for dispute types
export type DisputeCase = {
  id: string;
  projectId: string;
  entityType?: string;
  entityId?: string;
  clientUserId: string;
  talentUserId: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  reason: DisputeReason;
  reasonDetails?: string;
  description: string;
  attachments: any[];
  messages: any[];
};

export type DisputeReason = 'payment' | 'quality' | 'communication' | 'other';