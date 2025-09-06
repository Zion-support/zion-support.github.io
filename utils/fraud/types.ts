<<<<<<< HEAD
export type MonitoredSource = 'signup' | 'job_post' | 'message' | 'quote' | 'review';
export type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
export interface FraudEvent {;
=======
export interface AdminAction {
=======


export interface AdminAction {;
export interface AdminAction {



export interface AdminAction {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
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
}


export interface FraudDetectionResult {;
<<<<<<< HEAD
  isFraud: boolean;
  confidence: number;
  reasons: string[];
=======

  isFraud: boolean;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  confidence: number;
  reasons: string[];

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;

}
<<<<<<< HEAD
export interface FraudDetectionConfig {
=======
}


export interface FraudDetectionConfig {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;

<<<<<<< HEAD

=======
      threshold: number,
    }
    fake_profile: {
      enabled: boolean;
      threshold: number,
    }
    payment_fraud: {
      enabled: boolean;
      threshold: number,
    }
    spam: {
      enabled: boolean;
      threshold: number,
    }
  }
  auto_actions: {
    enabled: boolean;
    actions: AdminActionType[];
    confidence_threshold: number,
  }
}

=======



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    confidenceThreshold: number,
  };
=======

<<<<<<< HEAD
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
