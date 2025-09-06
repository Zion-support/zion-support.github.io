export type AdminActionType = 'investigate' | 'resolve' | 'dismiss' | 'escalate';

export type GptClassificationLabel = 'fraud' | 'suspicious' | 'legitimate' | 'unknown';

export type MonitoredSource = 'api' | 'web' | 'mobile' | 'admin';

export interface StoredFraudRecord {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  source: MonitoredSource;
  timestamp: string;
  status: 'pending' | 'investigating' | 'resolved' | 'false_positive';
  adminId?: string;
  resolution?: string;
  gptClassification?: GptClassificationLabel;
  confidence?: number;
}

export interface FraudIngestionData {
  type: string;
  description: string;
  source: MonitoredSource;
  metadata?: Record<string, any>;
  userId?: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface AdminAction {
  fraudId: string;
  action: AdminActionType;
  reason: string;
  adminId: string;
  timestamp: string;
}