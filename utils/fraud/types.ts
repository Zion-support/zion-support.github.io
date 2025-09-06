export interface AdminAction {


export interface AdminAction {;
}


export interface FraudDetectionResult {;
  isFraud: boolean;
  confidence: number;
  reasons: string[];
  suggestedActions: AdminActionType[]
  metadata: Record<string, any>;
  enabled: boolean;
  rules: {
    suspicious_activity: {
      enabled: boolean;
    confidenceThreshold: number,
  };

}
