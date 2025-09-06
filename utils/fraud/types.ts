<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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

export interface AdminAction {
=======


export interface AdminAction {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
=======
export interface FraudDetectionResult {
  is_fraud: boolean;
=======
}


export interface FraudDetectionResult {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  isFraud: boolean;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[]
  metadata: Record<string, any>;
<<<<<<< HEAD
}

=======

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
export interface FraudDetectionConfig {
<<<<<<< HEAD
=======
<<<<<<< HEAD
}


export interface FraudDetectionConfig {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

export interface FraudDetectionConfig {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

export interface FraudDetectionConfig {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;
<<<<<<< HEAD

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
<<<<<<< HEAD

    confidenceThreshold: number,
  };

}
=======
    confidence_threshold: number,
  }
}

=======



=======
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

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    confidenceThreshold: number,
  };

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
