// Fraud detection types
export type AdminActionType =
  | 'ban_user'
  | 'suspend_user'
  | 'flag_content'
  | 'remove_content'
  | 'investigate'
  | 'dismiss';
  | 'escalate';
<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  id: string;
  case_id: string;
  type: AdminActionType;

=======
;

export interface AdminAction {
=======


export interface AdminAction {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  case_id: string;
  type: AdminActionType;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  admin_id: string;
  reason: string,
  details: Record < string, any>;
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed',

<<<<<<< HEAD
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
}
<<<<<<< HEAD
export interface FraudDetectionResult {
  is_fraud: boolean;
=======
}


export interface FraudDetectionResult {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  isFraud: boolean;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  confidence: number;
  reasons: string[];
<<<<<<< HEAD



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;

}
<<<<<<< HEAD
export interface FraudDetectionConfig {
=======
}


export interface FraudDetectionConfig {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  enabled: boolean;
  rules: {
    suspiciousActivity: {
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

    confidenceThreshold: number
=======
    confidence_threshold: number,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }

<<<<<<< HEAD
=======
=======



=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    confidenceThreshold: number,
  };

<<<<<<< HEAD
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
