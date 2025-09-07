// Fraud detection types;
export type AdminActionType =;
  | "ban_user";
  | "suspend_user";
  | "flag_content";
  | "remove_content";
  | "investigate";
  | "dismiss";
  | "escalate";export interface AdminAction  {export interface AdminAction  {ursor/fix-website-loading-errors-and-merge-6662;
  id: string;
  case_id: string;
  type: AdminActionType;export interface AdminAction  {export interface AdminAction  {export interface AdminAction  {id: string;
export interface AdminAction {  id: string;
export interface AdminAction {


export interface AdminAction {;
export interface AdminAction {



export interface AdminAction {;

  id: string;
export interface AdminAction {  id: string;
  case_id: string;
  type: AdminActionType;
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: "pending" | "executed" | "failed";admin_id: string;
  reason: string,details: Record < string, any>;
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed';
}
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
export interface FraudDetectionResult {
  is_fraud: boolean;
}


export interface FraudDetectionResult {;
  isFraud: boolean;
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;
  confidence: number;
}

export interface FraudDetectionResult {;
  isFraud: boolean;
  confidence: number;
  reasons: string[];  confidence: number;
  reasons: string[];

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;

}
export interface FraudDetectionConfig {}


export interface FraudDetectionConfig {;

  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;


      threshold: number
    }
    fake_profile: {
      enabled: boolean;
      threshold: number;
    };
export interface FraudDetectionConfig {}

export interface FraudDetectionConfig {
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
    confidenceThreshold: number
  };

}
    confidenceThreshold: number
};
    confidenceThreshold: number,
  };

}}
}
ursor/fix-website-loading-errors-and-merge-6662;
ursor/automate-test-improve-and-merge-code-646c;
    confidenceThreshold: number;
  }}
    confidenceThreshold: number;
}confidenceThreshold: number;
  }}}
}
export type MonitoredSource = $2;
export type GptClassificationLabel = $2;
export interface FraudEvent {
  id: string,
  userId: string | null,
  source: MonitoredSource,
  content: string | null,
  metadata: Record<string, unknown> | null,
  ipAddress: string | null,
  createdAt: string, // ISO string
}

export interface HeuristicEvaluation {
  flagged: boolean,
  reasons: string[],
  severity: 'low' | 'medium' | 'high'
}

export interface GptClassification {
  label: GptClassificationLabel,
  reason: string,
  confidence: number, // 0..1
}

export type FraudReviewStatus = $2;
export interface StoredFraudRecord extends FraudEvent {
  heuristic: HeuristicEvaluation,
  gpt?: GptClassification,
  autoHidden: boolean,
  status: FraudReviewStatus}

export type AdminActionType = $2;
export interface AdminActionRecord {
  id: string,
  fraudId: string,
  action: AdminActionType,
  adminId: string | null,
  reason: string | null,
  createdAt: string, // ISO
}

export interface PrivacySettings {
  userId: string,
  monitoringContentAnalysisOptOut: boolean,
  updatedAt: string, // ISO
}

export interface ListFilters {
  source?: MonitoredSource,
  userId?: string,
  label?: GptClassificationLabel,
  status?: FraudReviewStatus
}

export interface MonthlyReport {
  month: string, // YYYY-MM
  totals: {
    all: number,
    safe: number,
    suspicious: number,
    dangerous: number},
  bySource: Record<MonitoredSource, number>,
  falsePositives: number, // count of IGNORED actions
  topReasons: Array<{ reason: string, count: number}>
}
