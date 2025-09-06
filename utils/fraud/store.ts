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

const dataDir = path.resolve(process.cwd(), 'data/fraud');
const eventsPath = path.join(dataDir, 'events.jsonl');
const actionsPath = path.join(dataDir, 'actions.jsonl');
const privacyPath = path.join(dataDir, 'privacy.json');

function ensureFiles() {
  fs.ensureDirSync(dataDir);
  if (!fs.existsSync(eventsPath)) fs.writeFileSync(eventsPath, '');
  if (!fs.existsSync(actionsPath)) fs.writeFileSync(actionsPath, '');
  if (!fs.existsSync(privacyPath))
    fs.writeFileSync(privacyPath, JSON.stringify({}));

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE!;
  return createClient(url, key, { auth: { persistSession: false } });

export class FraudStore {
  async saveEvent(
    record: Omit<StoredFraudRecord, 'id'> & { id?: string }
  ): Promise<StoredFraudRecord> {
    const withId: StoredFraudRecord = {
      ...record,
      id: record.id ?? uuidv4(),
    } as StoredFraudRecord;

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      await supabase.from('fraud_events').insert([withId as any]);
      return withId;
    }

    ensureFiles();
    const line = JSON.stringify(withId) + '\n';
    await fs.appendFile(eventsPath, line, 'utf8');
    return withId;
  }

  async updateEventStatus(
    fraudId: string,
    status: StoredFraudRecord['status']
  ): Promise<void> {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      await supabase.from('fraud_events').update({ status }).eq('id', fraudId);
      return;
    }

    ensureFiles();
    const events = await this._readAllEvents();
    const idx = events.findIndex(e => e.id === fraudId);
    if (idx >= 0) {
      events[idx].status = status;
      await this._writeAllEvents(events);
    }
  }

  async recordAction(
    action: Omit<AdminActionRecord, 'id' | 'createdAt'> & {
      id?: string;
      createdAt?: string;
    }
  ): Promise<AdminActionRecord> {
    const withId: AdminActionRecord = {
      id: action.id ?? uuidv4(),
      fraudId: action.fraudId,
      action: action.action,
      adminId: action.adminId ?? null,
      reason: action.reason ?? null,
      createdAt: action.createdAt ?? new Date().toISOString(),
    };

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      await supabase.from('fraud_actions').insert([withId as any]);
      return withId;
    }

    ensureFiles();
    const line = JSON.stringify(withId) + '\n';
    await fs.appendFile(actionsPath, line, 'utf8');
    return withId;
  }

  async listFlagged(
    limit = 50,
    offset = 0,
    filters: ListFilters = {}
  ): Promise<StoredFraudRecord[]> {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      let query = supabase
        .from('fraud_events')
        .select('*')
        .order('createdAt', { ascending: false })
        .range(offset, offset + limit - 1);
      if (filters.source) query = query.eq('source', filters.source);
      if (filters.userId) query = query.eq('userId', filters.userId);
      if (filters.status) query = query.eq('status', filters.status);
      if (filters.label)
        query = query.contains('gpt', { label: filters.label } as any);
      const { data } = await query;
      return data as any as StoredFraudRecord[];
    }

    ensureFiles();
    const events = await this._readAllEvents();
    const filtered = events.filter(e => {
      if (filters.source && e.source !== filters.source) return false;
      if (filters.userId && e.userId !== filters.userId) return false;
      if (filters.status && e.status !== filters.status) return false;
      if (filters.label && e.gpt?.label !== filters.label) return false;
      return true;
    });
    return filtered
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      .slice(offset, offset + limit);
  }

  async countEventsByIp(
    ip: string,
    source: MonitoredSource,
    withinMinutes: number
  ): Promise<number> {
    const since = Date.now() - withinMinutes * 60_000;

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      const { data } = await supabase
        .from('fraud_events')
        .select('id, createdAt')
        .eq('ipAddress', ip)
        .eq('source', source)
        .gte('createdAt', new Date(since).toISOString());
      return data?.length ?? 0;
    }

    ensureFiles();
    const events = await this._readAllEvents();
    return events.filter(
      e =>
        e.ipAddress === ip &&
        e.source === source &&
        Date.parse(e.createdAt) >= since
    ).length;
  }

  async countFlaggedForUser(userId: string): Promise<number> {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      const { data } = await supabase
        .from('fraud_events')
        .select('id')
        .eq('userId', userId);
      return data?.length ?? 0;
    }
    ensureFiles();
    const events = await this._readAllEvents();
    return events.filter(e => e.userId === userId).length;
  }

  async getPrivacySettings(userId: string): Promise<PrivacySettings> {
    const now = new Date().toISOString();
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      const { data } = await supabase
        .from('privacy_settings')
        .select('*')
        .eq('userId', userId)
        .limit(1);
      if (data && data[0]) return data[0] as any as PrivacySettings;
      return { userId, monitoringContentAnalysisOptOut: false, updatedAt: now };
    }

    ensureFiles();
    const json = JSON.parse(fs.readFileSync(privacyPath, 'utf8') || '{}');
    return (
      json[userId] || {
        userId,
        monitoringContentAnalysisOptOut: false,
        updatedAt: now,
      }
    );
  }

  async setPrivacySettings(
    userId: string,
    monitoringContentAnalysisOptOut: boolean
  ): Promise<PrivacySettings> {
    const updated: PrivacySettings = {
      userId,
      monitoringContentAnalysisOptOut,
      updatedAt: new Date().toISOString(),
    };

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      await supabase
        .from('privacy_settings')
        .upsert(updated as any, { onConflict: 'userId' });
      return updated;
    }

    ensureFiles();
    const json = JSON.parse(fs.readFileSync(privacyPath, 'utf8') || '{}');
    json[userId] = updated;
    fs.writeFileSync(privacyPath, JSON.stringify(json, null, 2));
    return updated;
  }

  async generateMonthlyReport(month: string): Promise<MonthlyReport> {
    // month format: YYYY-MM
    const [year, mon] = month.split('-').map(v => parseInt(v, 10));
    const start = new Date(Date.UTC(year, mon - 1, 1, 0, 0, 0));
    const end = new Date(Date.UTC(year, mon, 1, 0, 0, 0));

    let events: StoredFraudRecord[] = [];

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      const { data } = await supabase
        .from('fraud_events')
        .select('*')
        .gte('createdAt', start.toISOString())
        .lt('createdAt', end.toISOString());
      events = data as any as StoredFraudRecord[];
    } else {
      ensureFiles();
      events = await this._readAllEvents();
      events = events.filter(e => {
        const ts = Date.parse(e.createdAt);
        return ts >= start.getTime() && ts < end.getTime();
      });
    }

    const totals = {
      all: events.length,
      safe: events.filter(e => e.gpt?.label === 'SAFE').length,
      suspicious: events.filter(e => e.gpt?.label === 'SUSPICIOUS').length,
      dangerous: events.filter(e => e.gpt?.label === 'DANGEROUS').length,
    };

    const bySource: MonthlyReport['bySource'] = {
      signup: 0,
      job_post: 0,
      message: 0,
      quote: 0,
      review: 0,
    };
    for (const e of events) bySource[e.source as MonitoredSource]++;

    const actions = await this._readAllActions();
    const falsePositives = actions.filter(a => a.action === 'IGNORE').length;

    const reasonCounts: Record<string, number> = {};
    
    const topReasons = Object.entries(reasonCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([reason, count]) => ({ reason, count }));

    return { month, totals, bySource, falsePositives, topReasons };
  }

  private async _readAllEvents(): Promise<StoredFraudRecord[]> {
    ensureFiles();
    const text = fs.readFileSync(eventsPath, 'utf8');
    return text
      .split('\n')
      .filter(Boolean)
      .map(line => {
        try {
          return JSON.parse(line) as StoredFraudRecord;
        } catch {
          return null;
        }
      })
      .filter(Boolean) as StoredFraudRecord[];
  }

  private async _writeAllEvents(events: StoredFraudRecord[]): Promise<void> {
    ensureFiles();
    const content = events.map(e => JSON.stringify(e)).join('\n') + '\n';
    await fs.writeFile(eventsPath, content, 'utf8');
  }

  private async _readAllActions(): Promise<AdminActionRecord[]> {
    ensureFiles();
    const text = fs.readFileSync(actionsPath, 'utf8');
    return text
      .split('\n')
      .filter(Boolean)
      .map(line => {
        try {
          return JSON.parse(line) as AdminActionRecord;
        } catch {
          return null;
        }
      })
      .filter(Boolean) as AdminActionRecord[];
  }

export function getFraudStore(): FraudStore {
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
