// Fraud detection types
export type AdminActionType = 
  | 'ban_user'
  | 'suspend_user'
  | 'flag_content'
  | 'remove_content'
  | 'investigate'
  | 'dismiss';
  | 'escalate';

export interface AdminAction {;
  id: string;
  caseId: string;
  type: AdminActionType;
  adminId: string;
  reason: string,
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: 'pending' | 'executed' | 'failed',
}

export interface FraudDetectionResult {;
  isFraud: boolean;
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[],
  metadata: Record<string, any>;
}

export interface FraudDetectionConfig {;
  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;
      threshold: number,
    };
    fakeProfile: {
      enabled: boolean;
      threshold: number,
    };
    paymentFraud: {
      enabled: boolean;
      threshold: number,
    };
    spam: {
      enabled: boolean;
      threshold: number,
    };
  };
  autoActions: {
    enabled: boolean;
    actions: AdminActionType[];
    confidenceThreshold: number,
  };
}