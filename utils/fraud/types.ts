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
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: "pending" | "executed" | "failed";
}


export interface FraudDetectionResult {;
<<<<<<< HEAD
  isFraud: boolean;
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[];
  metadata: Record<string, any>;
}


export interface FraudDetectionConfig {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
