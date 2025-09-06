export interface AdminAction {
  id: string;
  case_id: string;
  type: AdminActionType;
}
export interface FraudDetectionResult {
  is_fraud: boolean;
  confidence: number;
  reasons: string[];
}
export interface FraudDetectionConfig {
  enabled: boolean;
  rules: {
    suspicious_activity: {
      enabled: boolean;
