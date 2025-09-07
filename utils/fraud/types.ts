// Fraud detection types;
export type AdminActionType =
  | "ban_user"""
  | "suspend_user"""
  | "flag_content"""
  | "remove_content"""
  | "investigate"""
  | "dismiss"""
  | "escalate";"
export interface AdminAction {
  // TODO: Implement
}
export interface AdminAction {;
  // TODO: Implement

  id: string;,
  case_id: string;
  type: AdminActionType;,
  adminId: string;
  reason: string;,
  details: Record<string, any>;
</string>
  metadata: Record<string, any>;
  metadata: Record < string, any>;

export interface FraudDetectionConfig {
  // TODO: Implement


export interface FraudDetectionConfig {;

  enabled: boolean;,
  rules: {
    suspiciousActivity: {,
  enabled: boolean;


      threshold: number,
    fake_profile: {,
      threshold: number;
    };
    fakeProfile: {,
    paymentFraud: {,
    spam: {,
  autoActions: {,
    actions: AdminActionType[];,
  confidenceThreshold: number;
    confidenceThreshold: number,

"