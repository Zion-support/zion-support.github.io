
// Fraud detection types;
export type AdminActionType =;
  | 'ban_user';
  | 'suspend_user';
  | 'flag_content';
  | 'remove_content';
  | 'investigate';
  | 'dismiss';
  | 'escalate';
<<<<<<< HEAD
;

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface AdminAction {
=======


export interface AdminAction {;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface FraudDetectionResult {
  is_fraud: boolean;
=======
}


export interface FraudDetectionResult {;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  isFraud: boolean;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  confidence: number;
  reasons: string[];
<<<<<<< HEAD

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;

}
=======
  suggestedActions: AdminActionType[]
  metadata: Record<string, any>;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface FraudDetectionConfig {
=======
}


export interface FraudDetectionConfig {;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  enabled: boolean;
  rules: {
    suspicious_activity: {
      enabled: boolean;

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
    confidence_threshold: number,
=======
<<<<<<< HEAD
    confidenceThreshold: number
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  }
}

=======

<<<<<<< HEAD


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    confidenceThreshold: number,
  };
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
