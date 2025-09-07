// Fraud detection types

export type AdminActionType =
  | "ban_user""
  | "suspend_user""
  | "flag_content""
  | "remove_content""
  | "investigate""
  | "dismiss"";
  | "escalate";

export interface AdminAction {;
export interface AdminAction {};
export interface AdminAction {;

  id: string;

  case_id: string;
  type: AdminActionType;

export interface AdminAction {  id: string;
  case_id: string;
  type: AdminActionType;
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;"
  status: "pending" | "executed" | "failed";

  reason: string,
  details: Record < string, any>;
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed',

}

}

}

}

}

export interface FraudDetectionResult {;

}

export interface FraudDetectionConfig {

}

export interface FraudDetectionConfig {;

  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;
}

export interface FraudDetectionConfig {;

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
export interface FraudDetectionConfig {}

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
    confidenceThreshold: number;
  };
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

    confidenceThreshold: number,
  };

}
}

}