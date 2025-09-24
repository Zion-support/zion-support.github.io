
export type DisputeReason =
	| 'Scope Disagreement'
	| 'Quality Issues'
	| 'Delivery Delay'
	| 'Payment Issue'
	| 'Communication Breakdown'
	| 'Other';

export type DisputeAttachment = {
	id: string;
	fileName: string;
	fileSize: number;
	mimeType: string;
	url?: string;
	uploadedAt?: string;
};

export type DisputeMessage = {
	id: string;
	authorUserId: string;
	authorRole: 'client' | 'talent' | 'admin';
	body: string;
	createdAt: string;
};

export type DisputeCase = {
	id: string;
	projectId: string;
	entityType?: string;
	entityId?: string;
	clientUserId: string;
	talentUserId: string;
	createdAt: string;
	updatedAt: string;
	status: 'Open' | 'Resolved' | 'Closed';
	reason: DisputeReason;
	reasonDetails?: string;
	description: string;
	attachments: DisputeAttachment[];
	messages: DisputeMessage[];
};

export type UserSummary = {
  id: string;
  name: string;

