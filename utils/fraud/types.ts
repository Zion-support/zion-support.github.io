<<<<<<< HEAD
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

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface AdminAction {


export interface AdminAction {;
export interface AdminAction {



export interface AdminAction {;

  id: string;
  case_id: string;
  type: AdminActionType;
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: "pending" | "executed" | "failed";
}


export interface FraudDetectionResult {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  isFraud: boolean;
  confidence: number;
  reasons: string[];
=======
<<<<<<< HEAD
  isFraud: boolean;
  confidence: number;
  reasons: string[];
<<<<<<< HEAD
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;
=======
<<<<<<< HEAD
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;
=======
=======

  isFraud: boolean;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  confidence: number;
  reasons: string[];

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;

}
}


export interface FraudDetectionConfig {;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    confidenceThreshold: number,
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
