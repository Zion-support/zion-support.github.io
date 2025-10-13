// Fraud detection types;
export type AdminActionType =;
  | 'ban_user''
  | 'suspend_user''
  | 'flag_content''
  | 'remove_content''
  | 'investigate''
  | 'dismiss''
  | 'escalate''
  id: string
  case_id: string
  type: AdminActionType;
export interface AdminAction {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  case_id: string
  type: AdminActionType
  admin_id: string
  reason: string,
  details: Record < string, any>
  created_at: string
  executed_at?: string
  status: 'pending' | 'executed' | 'failed','
}
export interface FraudDetectionResult {
  // TODO: Add properties
}
  // TODO: Add properties
}
  is_fraud: boolean
  isFraud: boolean
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  confidence: number
  reasons: string[];
export interface FraudDetectionConfig {
  // TODO: Add properties
}
  // TODO: Add properties
}
  enabled: boolean
  rules: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    suspiciousActivity: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      enabled: boolean
      threshold: number,
    }
    fake_profile: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      enabled: boolean
      threshold: number,
    }
    payment_fraud: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      enabled: boolean
      threshold: number,
    }
    spam: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      enabled: boolean
      threshold: number,
    }
  }
  auto_actions: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    enabled: boolean
    actions: AdminActionType[]
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662;
export type MonitoredSource = 'signup' | 'job_post' | 'message' | 'quote' | 'review';';';
export type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';';';
export interface FraudEvent {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  userId: string | null
  source: MonitoredSource
  content: string | null
  metadata: Record<string, unknown> | null
  ipAddress: string | null
  createdAt: string; // ISO string
}
export interface HeuristicEvaluation {
  // TODO: Add properties
}
  // TODO: Add properties
}
  flagged: boolean
  reasons: string[]
  severity: 'low' | 'medium' | 'high''
}
export interface GptClassification {
  // TODO: Add properties
}
  // TODO: Add properties
}
  label: GptClassificationLabel
  reason: string
  confidence: number; // 0..1
}
export type FraudReviewStatus = 'PENDING' | 'WARNED' | 'SUSPENDED' | 'IGNORED';';';
export interface StoredFraudRecord extends FraudEvent {
  // TODO: Add properties
}
  // TODO: Add properties
}
  heuristic: HeuristicEvaluation
  gpt?: GptClassification
  autoHidden: boolean
  status: FraudReviewStatus
}
export type AdminActionType = 'SUSPEND' | 'WARN' | 'IGNORE';';';
export interface AdminActionRecord {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  fraudId: string
  action: AdminActionType
  adminId: string | null
  reason: string | null
  createdAt: string; // ISO
}
export interface PrivacySettings {
  // TODO: Add properties
}
  // TODO: Add properties
}
  userId: string
  monitoringContentAnalysisOptOut: boolean
  updatedAt: string; // ISO
}
export interface ListFilters {
  // TODO: Add properties
}
  // TODO: Add properties
}
  source?: MonitoredSource
  userId?: string
  label?: GptClassificationLabel
  status?: FraudReviewStatus
}
export interface MonthlyReport {
  // TODO: Add properties
}
  // TODO: Add properties
}
  month: string; // YYYY-MM
  totals: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    all: number
    safe: number
    suspicious: number
    dangerous: number
  }
  bySource: Record<MonitoredSource, number>
  falsePositives: number; // count of IGNORED actions
  topReasons: Array<{ reason: string; count: number }>
}
