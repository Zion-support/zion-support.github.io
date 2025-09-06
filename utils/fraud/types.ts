
// Fraud detection types
export type AdminActionType =
  | "ban_user"
  | "suspend_user"
  | "flag_content"
  | "remove_content"
  | "investigate"
  | "dismiss"
  | "escalate";

export interface AdminAction {



export interface AdminAction {;

ursor/fix-website-loading-errors-and-merge-6662
  id: string;
  case_id: string;
  type: AdminActionType;
>>>>>>> main
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: "pending" | "executed" | "failed";

  admin_id: string;
  reason: string,
  details: Record < string, any>;
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed'

}
export interface FraudDetectionResult {
  is_fraud: boolean;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
}


export interface FraudDetectionResult {;
  isFraud: boolean;
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;

  isFraud: boolean;
ursor/fix-website-loading-errors-and-merge-6662
  confidence: number;
  reasons: string[];

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;

}
export interface FraudDetectionConfig {
>>>>>>> main
}


export interface FraudDetectionConfig {;

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;


>>>>>>> main
      threshold: number
    }
    fake_profile: {
      enabled: boolean;
>>>>>>> main
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
      threshold: number
    }
    payment_fraud: {
      enabled: boolean;
      threshold: number
    }
    spam: {
      enabled: boolean;
      threshold: number
    }
  }
  auto_actions: {
    enabled: boolean;
    actions: AdminActionType[];
    confidence_threshold: number
  }
}




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    confidenceThreshold: number
  };

>>>>>>> main
}
}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
ursor/automate-test-improve-and-merge-code-646c
