export type DisputeReason =
  | 'Scope Disagreement
  | 'Quality Issues
  | 'Delivery Delay
  | 'Payment Issue
  | 'Communication Breakdown
  | 'Other';
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',;
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',
export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';
export type DisputeAttachment = {
  id: string;,
  orderId: string;
  userId: string;,
  reason: string;
  description: string;,
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: Date;,
  updatedAt: Date;
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


  role: 'admin' | 'client' | 'talent';
};
export type DisputeListItem = Pick<DisputeCase, 'id' | 'projectId' | 'createdAt' | 'status'>;
