// Fraud detection types
export type AdminActionType =
  | 'ban_user'
  | 'suspend_user'
  | 'flag_content'
  | 'remove_content'
  | 'investigate'
  | 'dismiss';
  | 'escalate';

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

  isFraud: boolean;

  confidence: number;
  reasons: string[];

  enabled: boolean;
  rules: {
    suspiciousActivity: {

      threshold: number,
    fake_profile: {
    payment_fraud: {
    spam: {
  auto_actions: {
    actions: AdminActionType[];
