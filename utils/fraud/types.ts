
  id: string;
  case_id: string;
  type: AdminActionType;
<<<<<<< HEAD



;

export interface AdminAction {

  id: string;
  case_id: string;
  type: AdminActionType;


  admin_id: string;
  reason: string,
  details: Record < string, any>;
=======
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: "pending" | "executed" | "failed";admin_id: string;
  reason: string,details: Record < string, any>;
>>>>>>> origin/merge-pr-12271
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed',



}
<<<<<<< HEAD


=======
export interface FraudDetectionResult  {is_fraud: boolean;}}export interface FraudDetectionResult  {isFraud: boolean;
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;isFraud: boolean;
ursor/fix-website-loading-errors-and-merge-6662;
  confidence: number;
  reasons: string[];  confidence: number;
  reasons: string[];suggested_actions: AdminActionType[],metadata: Record < string, any>;}
export interface FraudDetectionConfig  {}export interface FraudDetectionConfig  {ursor/fix-website-loading-errors-and-merge-6662;
  enabled: boolean;
  rules: {suspiciousActivity: {enabled: boolean;threshold: number;
    }
    fake_profile: {enabled: boolean;threshold: number;
    }
    fake_profile: {enabled: boolean;
      threshold: number;
    }fakeProfile: {enabled: boolean;
      threshold: number;
    }paymentFraud: {enabled: boolean;
      threshold: number;
    }spam: {enabled: boolean;
      threshold: number;
    }export interface FraudDetectionConfig {}export interface FraudDetectionConfig {}fakeProfile: {enabled: boolean;
      threshold: number;
}paymentFraud: {enabled: boolean;
      threshold: number;
}spam: {enabled: boolean;
      threshold: number;
}}autoActions: {enabled: boolean;
    actions: AdminActionType[];
    confidenceThreshold: number;
  }threshold: number;
    }
    payment_fraud: {enabled: boolean;
      threshold: number;
    }
    spam: {enabled: boolean;
      threshold: number;
    }
  }
  auto_actions: {enabled: boolean;
    actions: AdminActionType[];
    confidence_threshold: number;
  }
}confidenceThreshold: number;
  }}
  status: "pending" | "executed" | "failed";
>>>>>>> origin/merge-pr-12271
export interface FraudDetectionResult {
  is_fraud: boolean;



  isFraud: boolean;
  confidence: number;
  reasons: string[];


<<<<<<< HEAD


export interface FraudDetectionConfig {
=======
}
export interface FraudDetectionConfig {}
>>>>>>> origin/merge-pr-12271




  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;


<<<<<<< HEAD
      threshold: number,
=======
      threshold: number
>>>>>>> origin/merge-pr-12271
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
<<<<<<< HEAD




  }



=======
    confidenceThreshold: number;
  };
    confidenceThreshold: number
  };
>>>>>>> origin/merge-pr-12271

}


}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
>>>>>>> cursor/create-and-deploy-new-content-376e



=======
export type MonitoredSource = 'signup' | 'job_post' | 'message' | 'quote' | 'review';

export type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';

export interface FraudEvent {
  id: string;
  userId: string | null;
  source: MonitoredSource;
  content: string | null;
  metadata: Record<string, unknown> | null;
  ipAddress: string | null;
  createdAt: string; // ISO string
}

export interface HeuristicEvaluation {
  flagged: boolean;
  reasons: string[];
  severity: 'low' | 'medium' | 'high';
}

export interface GptClassification {
  label: GptClassificationLabel;
  reason: string;
  confidence: number; // 0..1
}

export type FraudReviewStatus = 'PENDING' | 'WARNED' | 'SUSPENDED' | 'IGNORED';

export interface StoredFraudRecord extends FraudEvent {
  heuristic: HeuristicEvaluation;
  gpt?: GptClassification;
  autoHidden: boolean;
  status: FraudReviewStatus;
}

export type AdminActionType = 'SUSPEND' | 'WARN' | 'IGNORE';

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
<<<<<<< HEAD
=======
>>>>>>> origin/auto/autonomy-17186719616
=======
ursor/fix-website-loading-errors-and-merge-6662;
ursor/automate-test-improve-and-merge-code-646c;
    confidenceThreshold: number;
  }}
    confidenceThreshold: number;
}confidenceThreshold: number;
  }}}
}
>>>>>>> origin/merge-pr-12271
>>>>>>> cursor/create-and-deploy-new-content-376e
