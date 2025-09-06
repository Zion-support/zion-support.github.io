export type AdminActionType = 'approve' | 'reject' | 'flag' | 'unflag' | 'ban' | 'unban';

export interface AdminAction {
  id: string;
  type: AdminActionType;
  targetId: string;
  reason?: string;
  adminId: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface FraudConfig {
  autoHide: boolean;
  emailWarnings: boolean;
  gptEnabled: boolean;
  heuristicThresholds: {
    low: number;
    medium: number;
    high: number;
  };
}