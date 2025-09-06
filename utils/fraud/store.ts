// Fraud detection store utilities
export interface FraudCase {
  id: string;
  userId: string;
  type: 'suspicious_activity' | 'fake_profile' | 'payment_fraud' | 'spam' | 'other';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'investigating' | 'resolved' | 'dismissed';
  description: string;
  evidence: Record<string, any>;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
  adminNotes?: string;
}

export interface FraudRule {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  conditions: Record<string, any>;
  actions: string[];
  createdAt: string;
  updatedAt: string;
}

// In-memory storage for development
const fraudCases: FraudCase[] = [];
const fraudRules: FraudRule[] = [];

export class FraudStore {
  // Case methods
  async createCase(fraudCase: Omit<FraudCase, 'id' | 'createdAt' | 'updatedAt'>): Promise<FraudCase> {
    const newCase: FraudCase = {
      ...fraudCase,
      id: `fraud-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    fraudCases.push(newCase);
    return newCase;
  }

  async getCase(id: string): Promise<FraudCase | null> {
    return fraudCases.find(c => c.id === id) || null;
  }

  async getCases(filters?: {
    status?: string;
    type?: string;
    severity?: string;
    limit?: number;
  }): Promise<FraudCase[]> {
    let filtered = [...fraudCases];
    
    if (filters?.status) {
      filtered = filtered.filter(c => c.status === filters.status);
    }
    if (filters?.type) {
      filtered = filtered.filter(c => c.type === filters.type);
    }
    if (filters?.severity) {
      filtered = filtered.filter(c => c.severity === filters.severity);
    }
    
    filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    if (filters?.limit) {
      filtered = filtered.slice(0, filters.limit);
    }
    
    return filtered;
  }

  async updateCase(id: string, updates: Partial<FraudCase>): Promise<FraudCase | null> {
    const index = fraudCases.findIndex(c => c.id === id);
    if (index === -1) return null;
    
    fraudCases[index] = {
      ...fraudCases[index],
      ...updates,
      updatedAt: new Date().toISOString(),
      resolvedAt: updates.status === 'resolved' ? new Date().toISOString() : fraudCases[index].resolvedAt
    };
    
    return fraudCases[index];
  }

  // Rule methods
  async createRule(rule: Omit<FraudRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<FraudRule> {
    const newRule: FraudRule = {
      ...rule,
      id: `rule-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    fraudRules.push(newRule);
    return newRule;
  }

  async getRules(): Promise<FraudRule[]> {
    return [...fraudRules];
  }

  async updateRule(id: string, updates: Partial<FraudRule>): Promise<FraudRule | null> {
    const index = fraudRules.findIndex(r => r.id === id);
    if (index === -1) return null;
    
    fraudRules[index] = {
      ...fraudRules[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    return fraudRules[index];
  }

  async deleteRule(id: string): Promise<boolean> {
    const index = fraudRules.findIndex(r => r.id === id);
    if (index === -1) return false;
    
    fraudRules.splice(index, 1);
    return true;
  }
}

// Default instance
export const fraudStore = new FraudStore();

export function getFraudStore(): FraudStore {
  return fraudStore;
}