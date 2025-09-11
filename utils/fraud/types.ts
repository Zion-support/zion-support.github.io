export interface AdminAction {
export interface AdminAction {;

  admin_id: string;
  reason: string,
  details: Record < string, any>;
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed',

}
export interface FraudDetectionResult {
  is_fraud: boolean;

  suggested_actions: AdminActionType[],
  metadata: Record < string, any>;

}
export interface FraudDetectionConfig {
export interface FraudDetectionConfig {;
=======
=======
}


export interface FraudDetectionConfig {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    actions: AdminActionType[];    confidence_threshold: number,
  }
}


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
=======  confidence: number;
  reasons: string[];
export interface FraudDetectionConfig {
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



=======
}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
