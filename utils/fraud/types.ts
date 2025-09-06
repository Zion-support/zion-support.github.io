export type AdminActionType = 'approve' | 'reject' | 'escalate' | 'dismiss';

export interface FraudDetectionRule {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  severity: 'low' | 'medium' | 'high' | 'critical';
  conditions: {
    field: string;
    operator: 'equals' | 'contains' | 'regex' | 'greater_than' | 'less_than';
    value: any;
  }[];
  actions: AdminActionType[];
  createdAt: string;
  updatedAt: string;
}

export interface FraudMetrics {
  totalFlags: number;
  pendingFlags: number;
  resolvedFlags: number;
  dismissedFlags: number;
  flagsByType: Record<string, number>;
  flagsBySource: Record<string, number>;
  averageResolutionTime: number; // in hours
  falsePositiveRate: number; // percentage
}

export interface FraudReport {
  period: {
    start: string;
    end: string;
  };
  metrics: FraudMetrics;
  topSources: Array<{ source: string; count: number }>;
  topTypes: Array<{ type: string; count: number }>;
  trends: {
    daily: Array<{ date: string; count: number }>;
    weekly: Array<{ week: string; count: number }>;
  };
}