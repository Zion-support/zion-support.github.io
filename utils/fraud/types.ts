export type FraudSource = 'registration' | 'payment' | 'profile' | 'application' | 'message' | 'system';
export type FraudStatus = 'pending' | 'reviewed' | 'flagged' | 'ignored' | 'suspended' | 'warned';
export type AdminActionType = 'SUSPEND' | 'WARN' | 'IGNORE';

export interface FraudEvent {
  id: string;
  source: FraudSource;
  userId?: string;
  sessionId?: string;
  ipAddress?: string;
  userAgent?: string;
  timestamp: string;
  data: Record<string, any>;
  riskScore: number;
  status: FraudStatus;
  labels: string[];
  metadata: {
    detectedAt: string;
    reviewedAt?: string;
    reviewedBy?: string;
    adminNotes?: string;
  };
}

export interface FraudRule {
  id: string;
  name: string;
  description: string;
  source: FraudSource;
  conditions: FraudCondition[];
  riskScore: number;
  labels: string[];
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FraudCondition {
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'not_contains' | 'greater_than' | 'less_than' | 'regex';
  value: any;
  weight: number;
}

export interface AdminAction {
  id: string;
  fraudId: string;
  action: AdminActionType;
  adminId: string;
  reason?: string;
  timestamp: string;
  metadata: Record<string, any>;
}

export interface FraudStats {
  total: number;
  pending: number;
  flagged: number;
  ignored: number;
  suspended: number;
  warned: number;
  bySource: Record<FraudSource, number>;
  byStatus: Record<FraudStatus, number>;
  averageRiskScore: number;
  topLabels: Array<{ label: string; count: number }>;
}