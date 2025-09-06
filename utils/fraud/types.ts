<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type MonitoredSource = 'signup' | 'job_post' | 'message' | 'quote' | 'review';
export type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
export interface FraudEvent {;
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// Fraud detection types
=======
// Fraud detection types;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export type AdminActionType =
  | "ban_user""
  | "suspend_user""
  | "flag_content""
  | "remove_content""
  | "investigate""
  | "dismiss"";
  | "escalate";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export interface AdminAction {
=======


=======
export interface AdminAction {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export interface AdminAction {;
export interface AdminAction {};
export interface AdminAction {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
export interface AdminAction {  id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface AdminAction {  id: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  case_id: string;
  type: AdminActionType;
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;"
  status: "pending" | "executed" | "failed";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======
=======

  admin_id: string;
  reason: string,
  details: Record < string, any>;
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed',

}
<<<<<<< HEAD
export interface FraudDetectionResult {
  is_fraud: boolean;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
}

=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export interface FraudDetectionResult {;
<<<<<<< HEAD
  isFraud: boolean;
  confidence: number;
  reasons: string[];  confidence: number;
  reasons: string[];

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
export interface FraudDetectionConfig {}

<<<<<<< HEAD
export interface FraudDetectionConfig {
};
    fakeProfile: {
      enabled: boolean;
      threshold: number
};
    paymentFraud: {
      enabled: boolean;
      threshold: number
};
    spam: {
      enabled: boolean;
      threshold: number
};
  };
  autoActions: {
    enabled: boolean;
    actions: AdminActionType[];
    confidenceThreshold: number
};
    confidenceThreshold: number,
  };

}}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
