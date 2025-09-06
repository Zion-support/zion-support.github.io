
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

export interface AdminAction {


export interface AdminAction {;

  id: string;
  case_id: string;
  type: AdminActionType;

  admin_id: string;
  reason: string,
  details: Record < string, any>;
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed',

}
export interface FraudDetectionResult {
  is_fraud: boolean;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}


export interface FraudDetectionResult {;

  isFraud: boolean;
<<<<<<< HEAD
// Fraud detection types
export type AdminActionType =
  | 'ban_user'
  | 'suspend_user'
  | 'flag_content'
  | 'remove_content'
  | 'investigate'
  | 'dismiss';
  | 'escalate';
export interface AdminAction {

export interface AdminAction {;
  id: string;
  caseId: string;
  type: AdminActionType;
  adminId: string;
  reason: string
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: 'pending' | 'executed' | 'failed'
}
export interface FraudDetectionResult {

export interface FraudDetectionResult {;
  isFraud: boolean;
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[]
  metadata: Record<string, any>;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  confidence: number;
  reasons: string[];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;

}
export interface FraudDetectionConfig {
<<<<<<< HEAD

export interface FraudDetectionConfig {;

export interface FraudDetectionConfig {;
=======
=======
}


export interface FraudDetectionConfig {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    confidence_threshold: number,
  }
}

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

=======
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    confidenceThreshold: number,
  };

<<<<<<< HEAD
}
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
