export interface AdminAction {


export interface AdminAction {;
  id: string;
  case_id: string;
  type: AdminActionType;
  adminId: string;
  reason: string
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;
  status: 'pending' | 'executed' | 'failed'
}
}


export interface FraudDetectionResult {;
  isFraud: boolean;
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[]
  metadata: Record<string, any>;
}
}


export interface FraudDetectionConfig {;
  enabled: boolean;
  rules: {
    suspicious_activity: {
      enabled: boolean;
    confidenceThreshold: number,
  };

}
