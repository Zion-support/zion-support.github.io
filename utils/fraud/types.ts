<<<<<<< HEAD
// Fraud detection types
export type AdminActionType =
  | 'ban_user'
  | 'suspend_user'
  | 'flag_content'
  | 'remove_content'
  | 'investigate'
  | 'dismiss'
  | 'escalate';
=======
// Fraud detection types;
export type AdminActionType =;
  | 'ban_user';
  | 'suspend_user';
  | 'flag_content';
  | 'remove_content';
  | 'investigate';
  | 'dismiss';
  | 'escalate';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface AdminAction {
  id: string;
  case_id: string;
  type: AdminActionType;
<<<<<<< HEAD
  adminId: string;
  reason: string
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: 'pending' | 'executed' | 'failed'
=======
  admin_id: string;
  reason: string,
  details: Record < string, any>;
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface FraudDetectionResult {
  is_fraud: boolean;
  confidence: number;
  reasons: string[];
<<<<<<< HEAD
  suggestedActions: AdminActionType[]
  metadata: Record<string, any>;
=======
  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface FraudDetectionConfig {
  enabled: boolean;
  rules: {
    suspicious_activity: {
      enabled: boolean;
<<<<<<< HEAD
      threshold: number
    }
    fakeProfile: {
      enabled: boolean;
      threshold: number
    }
    paymentFraud: {
      enabled: boolean;
      threshold: number
    }
    spam: {
      enabled: boolean;
      threshold: number
    }
  }
  autoActions: {
    enabled: boolean;
    actions: AdminActionType[];
    confidenceThreshold: number
  }
}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
