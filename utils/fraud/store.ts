import { createFSDB } from './fsdb';

export interface FraudFlag {
  id: string;
  source: string;
  userId?: string;
  type: 'suspicious_activity' | 'fake_profile' | 'payment_fraud' | 'spam' | 'other';
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed';
  label?: string;
  description: string;
  evidence: any[];
  createdAt: string;
  updatedAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  resolution?: string;
}

export interface AdminAction {
  id: string;
  flagId: string;
  action: 'approve' | 'reject' | 'escalate' | 'dismiss';
  adminId: string;
  notes?: string;
  createdAt: string;
}

const fraudDB = createFSDB('fraud-flags');
const actionsDB = createFSDB('fraud-actions');

export function getFraudStore() {
  return {
    async createFlag(flag: Omit<FraudFlag, 'id' | 'createdAt' | 'updatedAt'>): Promise<FraudFlag> {
      const now = new Date().toISOString();
      return fraudDB.create({
        ...flag,
        createdAt: now,
        updatedAt: now
      });
    },

    async getFlag(id: string): Promise<FraudFlag | null> {
      return fraudDB.findById(id);
    },

    async updateFlag(id: string, updates: Partial<FraudFlag>): Promise<FraudFlag | null> {
      const now = new Date().toISOString();
      return fraudDB.update(id, { ...updates, updatedAt: now });
    },

    async listFlagged(limit: number = 50, offset: number = 0, filters: {
      source?: string;
      userId?: string;
      status?: string;
      label?: string;
    } = {}): Promise<{ items: FraudFlag[], total: number }> {
      const all = await fraudDB.find();
      
      let filtered = all;
      if (filters.source) {
        filtered = filtered.filter(flag => flag.source === filters.source);
      }
      if (filters.userId) {
        filtered = filtered.filter(flag => flag.userId === filters.userId);
      }
      if (filters.status) {
        filtered = filtered.filter(flag => flag.status === filters.status);
      }
      if (filters.label) {
        filtered = filtered.filter(flag => flag.label === filters.label);
      }

      return {
        items: filtered.slice(offset, offset + limit),
        total: filtered.length
      };
    },

    async createAction(action: Omit<AdminAction, 'id' | 'createdAt'>): Promise<AdminAction> {
      const now = new Date().toISOString();
      return actionsDB.create({
        ...action,
        createdAt: now
      });
    },

    async getActionsForFlag(flagId: string): Promise<AdminAction[]> {
      return actionsDB.find({ flagId });
    }
  };
}