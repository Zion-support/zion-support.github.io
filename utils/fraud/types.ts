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
=======


export interface AdminAction {;
export interface AdminAction {



export interface AdminAction {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  case_id: string;
  type: AdminActionType;
<<<<<<< HEAD
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: "pending" | "executed" | "failed";
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
}


export interface FraudDetectionResult {;
<<<<<<< HEAD
  isFraud: boolean;
  confidence: number;
  reasons: string[];
<<<<<<< HEAD
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;
=======
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
}


export interface FraudDetectionConfig {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
      threshold: number,
    }
    fake_profile: {
      enabled: boolean;
<<<<<<< HEAD
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
=======
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
