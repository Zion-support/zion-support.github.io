<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs-extra';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import {
  AdminActionRecord,
  FraudEvent,
  ListFilters,
  MonthlyReport,
  MonitoredSource,
  PrivacySettings,
  StoredFraudRecord,;
} from './types';
=======
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

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
<<<<<<< HEAD
  return new FraudStore();

export function newEvent(
  partial: Partial<FraudEvent> & Pick<FraudEvent, 'source'>
): FraudEvent {
  const id = uuidv4();
  return {
    id,
    userId: partial.userId ?? null,
    source: partial.source,
    content: partial.content ?? null,
    metadata: partial.metadata ?? null,
    ipAddress: partial.ipAddress ?? null,
    createdAt: partial.createdAt ?? new Date().toISOString(),
  };
=======
// Fraud detection store utilities
export interface FraudEvent {
  id: string;
  timestamp: number;
  source: string;
  userId?: string;
  ip: string;
  userAgent: string;
  data: Record<string, any>;
  riskScore: number;
  classification: 'legitimate' | 'suspicious' | 'fraudulent';
  gptAnalysis?: {
    label: string;
    confidence: number;
    reasoning: string;
  };
  adminAction?: {
    action: 'approved' | 'rejected' | 'flagged' | 'investigated';
    adminId: string;
    timestamp: number;
    notes?: string;
  };
}

export interface FraudStats {
  total: number;
  byClassification: {
    legitimate: number;
    suspicious: number;
    fraudulent: number;
  };
  bySource: Record<string, number>;
  averageRiskScore: number;
  recent: FraudEvent[];
}

export interface AdminActionRecord {
  id: string;
  eventId: string;
  action: 'approved' | 'rejected' | 'flagged' | 'investigated';
  adminId: string;
  timestamp: number;
  notes?: string;
}

class FraudStore {
  private events: Map<string, FraudEvent> = new Map();
  private adminActions: Map<string, AdminActionRecord> = new Map();
  private maxEvents = 50000; // Limit to prevent memory issues

  // Event methods
  async addEvent(event: FraudEvent): Promise<boolean> {
    try {
      this.events.set(event.id, event);
      
      // Keep only the most recent events
      if (this.events.size > this.maxEvents) {
        const sortedEvents = Array.from(this.events.values())
          .sort((a, b) => b.timestamp - a.timestamp);
        
        this.events.clear();
        sortedEvents.slice(0, this.maxEvents).forEach(event => {
          this.events.set(event.id, event);
        });
      }
      
      return true;
    } catch (error) {
      console.error('Error adding fraud event:', error);
      return false;
    }
  }

  async getEvent(id: string): Promise<FraudEvent | null> {
    return this.events.get(id) || null;
  }

  async getEventsByUser(userId: string, limit: number = 100): Promise<FraudEvent[]> {
    return Array.from(this.events.values())
      .filter(event => event.userId === userId)
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  async getEventsByIp(ip: string, limit: number = 100): Promise<FraudEvent[]> {
    return Array.from(this.events.values())
      .filter(event => event.ip === ip)
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  async getEventsByClassification(classification: FraudEvent['classification'], limit: number = 100): Promise<FraudEvent[]> {
    return Array.from(this.events.values())
      .filter(event => event.classification === classification)
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  async getRecentEvents(limit: number = 100): Promise<FraudEvent[]> {
    return Array.from(this.events.values())
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  async getStats(): Promise<FraudStats> {
    const events = Array.from(this.events.values());
    const total = events.length;
    
    if (total === 0) {
      return {
        total: 0,
        byClassification: { legitimate: 0, suspicious: 0, fraudulent: 0 },
        bySource: {},
        averageRiskScore: 0,
        recent: []
      };
    }

    const byClassification = {
      legitimate: events.filter(e => e.classification === 'legitimate').length,
      suspicious: events.filter(e => e.classification === 'suspicious').length,
      fraudulent: events.filter(e => e.classification === 'fraudulent').length
    };

    const bySource: Record<string, number> = {};
    events.forEach(event => {
      bySource[event.source] = (bySource[event.source] || 0) + 1;
    });

    const averageRiskScore = events.reduce((sum, e) => sum + e.riskScore, 0) / total;

    const recent = events
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10);

    return {
      total,
      byClassification,
      bySource,
      averageRiskScore: Math.round(averageRiskScore * 100) / 100,
      recent
    };
  }

  // Admin action methods
  async addAdminAction(action: AdminActionRecord): Promise<boolean> {
    try {
      this.adminActions.set(action.id, action);
      
      // Update the event with the admin action
      const event = this.events.get(action.eventId);
      if (event) {
        event.adminAction = {
          action: action.action,
          adminId: action.adminId,
          timestamp: action.timestamp,
          notes: action.notes
        };
        this.events.set(action.eventId, event);
      }
      
      return true;
    } catch (error) {
      console.error('Error adding admin action:', error);
      return false;
    }
  }

  async getAdminActions(eventId?: string): Promise<AdminActionRecord[]> {
    let actions = Array.from(this.adminActions.values());
    
    if (eventId) {
      actions = actions.filter(action => action.eventId === eventId);
    }
    
    return actions.sort((a, b) => b.timestamp - a.timestamp);
  }

  // Search methods
  async searchEvents(query: string): Promise<FraudEvent[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.events.values()).filter(event => 
      event.userId?.toLowerCase().includes(lowercaseQuery) ||
      event.ip.toLowerCase().includes(lowercaseQuery) ||
      event.source.toLowerCase().includes(lowercaseQuery) ||
      JSON.stringify(event.data).toLowerCase().includes(lowercaseQuery)
    );
  }

  // Utility methods
  async clearEvents(): Promise<void> {
    this.events.clear();
  }

  async clearAdminActions(): Promise<void> {
    this.adminActions.clear();
  }

  async clearAll(): Promise<void> {
    this.events.clear();
    this.adminActions.clear();
  }

  getEventCount(): number {
    return this.events.size;
  }

  getAdminActionCount(): number {
    return this.adminActions.size;
  }
}

// Singleton instance
export const fraudStore = new FraudStore();

// Utility functions
export function createFraudEvent(
  source: string,
  ip: string,
  userAgent: string,
  data: Record<string, any>,
  riskScore: number,
  classification: FraudEvent['classification'],
  userId?: string
): FraudEvent {
  return {
    id: `fraud_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
    source,
    userId,
    ip,
    userAgent,
    data,
    riskScore,
    classification
  };
}

export function createAdminAction(
  eventId: string,
  action: AdminActionRecord['action'],
  adminId: string,
  notes?: string
): AdminActionRecord {
  return {
    id: `action_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    eventId,
    action,
    adminId,
    timestamp: Date.now(),
    notes
  };
}

export function newEvent(
  source: string,
  ip: string,
  userAgent: string,
  data: Record<string, any>,
  riskScore: number,
  classification: FraudEvent['classification'],
  userId?: string
): FraudEvent {
  return createFraudEvent(source, ip, userAgent, data, riskScore, classification, userId);
}

export function getFraudStore(): FraudStore {
  return fraudStore;
}

export function generateFraudEventId(): string {
  return `fraud_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateAdminActionId(): string {
  return `action_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return fraudStore;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
