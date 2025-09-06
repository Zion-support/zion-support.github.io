import { FraudEvent, FraudRule, AdminAction, FraudStats, FraudSource, FraudStatus } from './types';

class FraudStore {
  private events: Map<string, FraudEvent> = new Map();
  private rules: Map<string, FraudRule> = new Map();
  private actions: Map<string, AdminAction> = new Map();

  async createEvent(event: Omit<FraudEvent, 'id' | 'timestamp' | 'metadata'>): Promise<FraudEvent> {
    const id = `fraud_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();
    
    const newEvent: FraudEvent = {
      ...event,
      id,
      timestamp: now,
      metadata: {
        detectedAt: now
      }
    };
    
    this.events.set(id, newEvent);
    return newEvent;
  }

  async getEvent(id: string): Promise<FraudEvent | null> {
    return this.events.get(id) || null;
  }

  async listFlagged(
    limit: number = 50, 
    offset: number = 0, 
    filters: {
      source?: FraudSource;
      userId?: string;
      status?: FraudStatus;
      label?: string;
    } = {}
  ): Promise<FraudEvent[]> {
    let events = Array.from(this.events.values());
    
    if (filters.source) {
      events = events.filter(e => e.source === filters.source);
    }
    
    if (filters.userId) {
      events = events.filter(e => e.userId === filters.userId);
    }
    
    if (filters.status) {
      events = events.filter(e => e.status === filters.status);
    }
    
    if (filters.label) {
      events = events.filter(e => e.labels.includes(filters.label!));
    }
    
    return events
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(offset, offset + limit);
  }

  async updateEventStatus(id: string, status: FraudStatus): Promise<boolean> {
    const event = this.events.get(id);
    if (!event) return false;
    
    event.status = status;
    event.metadata.reviewedAt = new Date().toISOString();
    this.events.set(id, event);
    return true;
  }

  async recordAction(action: Omit<AdminAction, 'id' | 'timestamp'>): Promise<AdminAction> {
    const id = `action_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();
    
    const newAction: AdminAction = {
      ...action,
      id,
      timestamp: now
    };
    
    this.actions.set(id, newAction);
    return newAction;
  }

  async getActionsByFraudId(fraudId: string): Promise<AdminAction[]> {
    return Array.from(this.actions.values())
      .filter(a => a.fraudId === fraudId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }

  async getStats(): Promise<FraudStats> {
    const events = Array.from(this.events.values());
    
    const total = events.length;
    const pending = events.filter(e => e.status === 'pending').length;
    const flagged = events.filter(e => e.status === 'flagged').length;
    const ignored = events.filter(e => e.status === 'ignored').length;
    const suspended = events.filter(e => e.status === 'suspended').length;
    const warned = events.filter(e => e.status === 'warned').length;
    
    const bySource = events.reduce((acc, e) => {
      acc[e.source] = (acc[e.source] || 0) + 1;
      return acc;
    }, {} as Record<FraudSource, number>);
    
    const byStatus = events.reduce((acc, e) => {
      acc[e.status] = (acc[e.status] || 0) + 1;
      return acc;
    }, {} as Record<FraudStatus, number>);
    
    const averageRiskScore = events.length > 0 
      ? events.reduce((sum, e) => sum + e.riskScore, 0) / events.length 
      : 0;
    
    const labelCounts = events.reduce((acc, e) => {
      e.labels.forEach(label => {
        acc[label] = (acc[label] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);
    
    const topLabels = Object.entries(labelCounts)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
    
    return {
      total,
      pending,
      flagged,
      ignored,
      suspended,
      warned,
      bySource,
      byStatus,
      averageRiskScore,
      topLabels
    };
  }

  async createRule(rule: Omit<FraudRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<FraudRule> {
    const id = `rule_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();
    
    const newRule: FraudRule = {
      ...rule,
      id,
      createdAt: now,
      updatedAt: now
    };
    
    this.rules.set(id, newRule);
    return newRule;
  }

  async getRules(): Promise<FraudRule[]> {
    return Array.from(this.rules.values());
  }

  async updateRule(id: string, updates: Partial<FraudRule>): Promise<FraudRule | null> {
    const rule = this.rules.get(id);
    if (!rule) return null;
    
    const updated = { ...rule, ...updates, updatedAt: new Date().toISOString() };
    this.rules.set(id, updated);
    return updated;
  }

  async deleteRule(id: string): Promise<boolean> {
    return this.rules.delete(id);
  }
}

let fraudStoreInstance: FraudStore | null = null;

export function getFraudStore(): FraudStore {
  if (!fraudStoreInstance) {
    fraudStoreInstance = new FraudStore();
  }
  return fraudStoreInstance;
}