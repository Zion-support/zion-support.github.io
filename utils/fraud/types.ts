<<<<<<< HEAD
export type MonitoredSource =
  | 'signup'
  | 'job_post'
  | 'message'
  | 'quote'
  | 'review';

=======
export type MonitoredSource = 'signup' | 'job post' | 'message' | 'quote' | 'review';
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
export type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
export type FraudReviewStatus = 'PENDING' | 'WARNED' | 'SUSPENDED' | 'IGNORED';
export type AdminActionType = 'SUSPEND' | 'WARN' | 'IGNORE';
<<<<<<< HEAD

export interface AdminActionRecord {
  id: string;
  fraudId: string;
  action: AdminActionType;
  adminId: string | null;
  reason: string | null;
  createdAt: string; // ISO
}

export interface PrivacySettings {
  userId: string;
  monitoringContentAnalysisOptOut: boolean;
  updatedAt: string; // ISO
}

export interface ListFilters {
  source?: MonitoredSource;
  userId?: string;
  label?: GptClassificationLabel;
  status?: FraudReviewStatus;
}

export interface MonthlyReport {
  month: string; // YYYY-MM
  totals: {
    all: number;
    safe: number;
    suspicious: number;
    dangerous: number;
  };
  bySource: Record<MonitoredSource, number>;
  falsePositives: number; // count of IGNORED actions
  topReasons: Array<{ reason: string; count: number }>;
}
=======
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
