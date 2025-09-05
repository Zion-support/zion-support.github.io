export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
export type DisputeReason = | 'Scope Disagreement' | 'Quality Issues' | 'Delivery Delay' | 'Payment Issue' | 'Communication Breakdown' | 'Other';
export type DisputeListItem = Pick< DisputeCase;
'id' | 'projectId' | 'createdAt' | 'status' 