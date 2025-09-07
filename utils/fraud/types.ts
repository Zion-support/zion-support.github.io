// Fraud detection types
export type AdminActionType = 'approve' | 'reject' | 'escalate' | 'dismiss';

export interface AdminAction {
  id: string;
  recordId: string;
  action: AdminActionType;
  adminId: string;
  notes?: string;
  timestamp: string;
}

export interface FraudConfig {
  autoHide: boolean;
  emailWarnings: boolean;
  gptAnalysis: boolean;
  heuristicAnalysis: boolean;
  severityThresholds: {
    low: number;
    medium: number;
    high: number;
  };
}

export interface FraudMetrics {
  totalEvents: number;
  flaggedEvents: number;
  autoHiddenEvents: number;
  adminReviewedEvents: number;
  falsePositives: number;
  truePositives: number;
  averageResponseTime: number;
}

export interface FraudAlert {
  id: string;
  recordId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: string;
  acknowledged: boolean;
  acknowledgedBy?: string;
  acknowledgedAt?: string;
}

export interface FraudReport {
  period: {
    start: string;
    end: string;
  };
  summary: {
    totalEvents: number;
    flaggedEvents: number;
    resolvedEvents: number;
    pendingEvents: number;
  };
  trends: {
    daily: Array<{
      date: string;
      events: number;
      flagged: number;
    }>;
    weekly: Array<{
      week: string;
      events: number;
      flagged: number;
    }>;
  };
  topSources: Array<{
    source: string;
    count: number;
    percentage: number;
  }>;
  topUsers: Array<{
    userId: string;
    count: number;
    percentage: number;
  }>;
  severityBreakdown: {
    low: number;
    medium: number;
    high: number;
    critical: number;
  };
}

export interface FraudRule {
  id: string;
  name: string;
  description: string;
  pattern: string;
  severity: 'low' | 'medium' | 'high';
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}

export interface FraudWhitelist {
  id: string;
  userId?: string;
  pattern?: string;
  reason: string;
  createdAt: string;
  createdBy: string;
  expiresAt?: string;
}

export interface FraudBlacklist {
  id: string;
  userId?: string;
  pattern?: string;
  reason: string;
  createdAt: string;
  createdBy: string;
  expiresAt?: string;
}

export interface FraudNotification {
  id: string;
  type: 'email' | 'webhook' | 'slack';
  config: Record<string, any>;
  enabled: boolean;
  conditions: {
    severity: string[];
    sources: string[];
    labels: string[];
  };
  createdAt: string;
  updatedAt: string;
}