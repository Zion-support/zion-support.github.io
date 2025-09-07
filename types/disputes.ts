export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';

export type DisputeReason = 
  | 'Scope Disagreement' 
  | 'Quality Issues' 
  | 'Delivery Delay' 
  | 'Payment Issue' 
  | 'Communication Breakdown' 
  | 'Other';

export interface DisputeCase {
  id: string;
  projectId: string;
  createdAt: string;
  status: DisputeStatus;
  reason: DisputeReason;
  description: string;
  resolution?: string;
}

export type DisputeListItem = Pick<DisputeCase, 'id' | 'projectId' | 'createdAt' | 'status'>;