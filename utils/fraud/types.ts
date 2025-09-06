
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

  isFraud: boolean;
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[]
  metadata: Record<string, any>;
}

  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;
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

    confidenceThreshold: number,
  };

}