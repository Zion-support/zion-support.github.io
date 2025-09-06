export interface FraudCase {
  id: string;
  type: 'payment' | 'identity' | 'behavior' | 'content';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'investigating' | 'resolved' | 'dismissed';
  description: string;
  evidence: any[];
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  resolution?: string;
}

export interface AdminAction {
  type: AdminActionType;
  targetId: string;
  reason?: string;
  adminId: string;
  timestamp: string;
}

export type AdminActionType = 'ban' | 'suspend' | 'warn' | 'investigate' | 'dismiss';

// In-memory store for demo purposes
let fraudCases: FraudCase[] = [];
let adminActions: AdminAction[] = [];

export const getFraudStore = () => ({
  async getCases(): Promise<FraudCase[]> {
    return [...fraudCases];
  },

  async getCaseById(id: string): Promise<FraudCase | null> {
    return fraudCases.find(c => c.id === id) || null;
  },

  async createCase(caseData: Omit<FraudCase, 'id' | 'createdAt' | 'updatedAt'>): Promise<FraudCase> {
    const newCase: FraudCase = {
      ...caseData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    fraudCases.push(newCase);
    return newCase;
  },

  async updateCase(id: string, updates: Partial<FraudCase>): Promise<FraudCase | null> {
    const index = fraudCases.findIndex(c => c.id === id);
    if (index === -1) return null;
    
    fraudCases[index] = {
      ...fraudCases[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    return fraudCases[index];
  },

  async performAdminAction(action: AdminAction): Promise<AdminAction> {
    adminActions.push(action);
    return action;
  },

  async getAdminActions(): Promise<AdminAction[]> {
    return [...adminActions];
  }
});