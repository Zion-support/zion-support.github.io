export interface ModerationResult {
  id: string;
  content: string;
  status: 'approved' | 'rejected' | 'pending';
  reason?: string;
  moderatedBy?: string;
  moderatedAt: Date;
}

export interface ModerationRule {
  id: string;
  name: string;
  pattern: string;
  action: 'approve' | 'reject' | 'flag';
  severity: 'low' | 'medium' | 'high';
}