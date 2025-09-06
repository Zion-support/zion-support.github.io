<<<<<<< HEAD
<<<<<<< HEAD
export type MonitoredSource = 'signup' | 'job_post' | 'message' | 'quote' | 'review';
export type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
export interface FraudEvent {;
=======
=======
// Fraud detection types
export type AdminActionType =
  | "ban_user"
  | "suspend_user"
  | "flag_content"
  | "remove_content"
  | "investigate"
  | "dismiss"
  | "escalate";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export interface AdminAction {
=======


export interface AdminAction {;
export interface AdminAction {



export interface AdminAction {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
<<<<<<< HEAD
  userId: string | null;
  source: MonitoredSource;
  content: string | null;
  metadata: Record<string unknown> | null;
  ipAddress: string | null;
  createdAt: string, // ISO string;
}
<<<<<<< HEAD
;
export interface HeuristicEvaluation {;
  flagged: boolean;
  reasons: string[];
  severity: 'low' | 'medium' | 'high';
}
;
export interface GptClassification {;
  label: GptClassificationLabel;
  reason: string;
  confidence: number, // 0..1;
}
;
export type FraudReviewStatus = 'PENDING' | 'WARNED' | 'SUSPENDED' | 'IGNORED';
export interface StoredFraudRecord extends FraudEvent {;
  heuristic: HeuristicEvaluation;
  gpt?: GptClassification;
  autoHidden: boolean;
  status: FraudReviewStatus;
}
;
export type AdminActionType = 'SUSPEND' | 'WARN' | 'IGNORE';
export interface AdminActionRecord {;
  id: string;
  fraudId: string;
  action: AdminActionType;
  adminId: string | null;
  reason: string | null;
  createdAt: string, // ISO;
}
;
export interface PrivacySettings {;
  userId: string;
  monitoringContentAnalysisOptOut: boolean;
  updatedAt: string, // ISO;
}
;
export interface ListFilters {;
  source?: MonitoredSource;
  userId?: string;
  label?: GptClassificationLabel;
  status?: FraudReviewStatus;
}
;
export interface MonthlyReport {;
  month: string, // YYYY-MM;
  totals: {;
    all: number;
    safe: number;
    suspicious: number;
    dangerous: number;
  };
  bySource: Record<MonitoredSource number>;
  falsePositives: number, // count of IGNORED actions;
  topReasons: Array<{ reason: string, count: number }>;
}
=======
<<<<<<< HEAD
export interface FraudDetectionResult {
  is_fraud: boolean;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  case_id: string;
  type: AdminActionType;
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: "pending" | "executed" | "failed";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}


export interface FraudDetectionResult {;
<<<<<<< HEAD
  isFraud: boolean;
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;
}


export interface FraudDetectionConfig {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;

      threshold: number,
    }
    fake_profile: {
      enabled: boolean;
      threshold: number;
    };
    fakeProfile: {
      enabled: boolean;
      threshold: number;
    };
    paymentFraud: {
      enabled: boolean;
      threshold: number;
    };
    spam: {
      enabled: boolean;
      threshold: number;
    };
  };
  autoActions: {
    enabled: boolean;
    actions: AdminActionType[];
    confidenceThreshold: number;
  };
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
