// Fraud detection types
export type AdminActionType =
  | "ban_user"
  | "suspend_user"
  | "flag_content"
  | "remove_content"
  | "investigate"
  | "dismiss"
  | "escalate";

<<<<<<< HEAD
export interface AdminAction {


export interface AdminAction {;
export interface AdminAction {



export interface AdminAction {;

  id: string;
=======
export interface AdminAction {  id: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  case_id: string;
  type: AdminActionType;
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: "pending" | "executed" | "failed";
<<<<<<< HEAD
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
=======
}

export interface FraudDetectionResult {;
  isFraud: boolean;
  confidence: number;
  reasons: string[];  confidence: number;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  reasons: string[];

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;

}
<<<<<<< HEAD
export interface FraudDetectionConfig {
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
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  };
  autoActions: {
    enabled: boolean;
    actions: AdminActionType[];
<<<<<<< HEAD
    confidenceThreshold: number;
  };
    confidenceThreshold: number,
  };

}
=======
    confidenceThreshold: number
};
    confidenceThreshold: number,
  };

}}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
