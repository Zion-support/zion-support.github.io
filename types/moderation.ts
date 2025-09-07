
export interface ModerationResult {
  // TODO: Implement
}
  id: string;,
  content: string;
  status: 'approved' | 'rejected' | 'pending';
  reason?: string;
  moderatedBy?: string;
  moderatedAt: Date;
}



;
export interface ModerationAction {
  // TODO: Implement
  type: "approve" | "remove" | "warn" | "ban";"
  targetId: string;,"
  targetType: "post" | "comment" | "user";"
  adminId: string;
  createdAt: string;
}




export interface ModerationFlag {
  // TODO: Implement
export interface ModerationFlag {;
  id: string;,"
  type: "spam" | "inappropriate" | "harassment" | "other";"
  content: string;,
  id: string;
type: \"spam\" | \"inappropriate\" | \"harassment\" | \"other\";
  content: string;
  reporterId: string;
  status: ModerationStatus;,
  updatedAt: string;
  adminNotes?: string;

  // TODO: Implement

export interface ModerationRule {
  // TODO: Implement
  name: string;
  pattern: string;,"
  action: 'approve' | 'reject' | 'flag';
  severity: 'low' | 'medium' | 'high';

  createdAt: string;
  updatedAt: string;}
  adminNotes?: string;}
}}

export interface ModerationRule {
  id: string;
name: string;
  pattern: string;
  action: 'approve' | 'reject' | 'flag';
  severity: 'low' | 'medium' | 'high';}
}

export type ModerationStatus = 'pending' | 'approved' | 'rejected';
