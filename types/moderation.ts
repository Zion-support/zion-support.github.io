
export interface ModerationResult  {id: string;
  content: string;
  status: 'approved' | 'rejected' | 'pending';
  reason?: string;moderatedBy?: string;
  moderatedAt: Date;
}

export interface ModerationAction {
  id: string;
  type: \"approve\" | \"remove\" | \"warn\" | \"ban\";
  targetId: string;
  targetType: \"post\" | \"comment\" | \"user\";
  adminId: string;
  reason?: string;
  createdAt: string;
}

export interface ModerationFlag {
  id: string;
type: \"spam\" | \"inappropriate\" | \"harassment\" | \"other\";
  content: string;
  reporterId: string;
  targetId: string;
  targetType: \"post\" | \"comment\" | \"user\";
  status: ModerationStatus;
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