export type AdminActionType = 'ban' | 'suspend' | 'warn' | 'investigate' | 'dismiss';

export interface FraudCase {
  id: string;
  type: 'payment' | 'identity' | 'behavior' | 'content';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'investigating' | 'resolved' | 'dismissed';
  description: string;
  evidence: any[];
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  resolution?: string;
}

export interface AdminAction {
  type: AdminActionType;
  targetId: string;
  reason?: string;
  adminId: string;
  timestamp: string;
}