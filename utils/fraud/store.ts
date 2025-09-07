  private records: Map < string, FraudRecord> = new Map ();
;
  create_record (record: Omit < FraudRecord, 'id' | 'timestamp'>): FraudRecord {
    const id = Date.now ().to_string ();
    const new_record: FraudRecord = {
export interface FraudRecord {
export interface StoredFraudRecord {
  id: string;
  ipAddress: string;
  source: string;
  createdAt: string;
  data: any;
}

export interface AdminActionRecord {
  id: string;
  action: string;
  timestamp: string;
  adminId: string;
  details: any;
}

let events: StoredFraudRecord[] = [];

class FraudStore {
  private records: Map<string, FraudRecord> = new Map();

  createRecord(record: Omit<FraudRecord, "id" | "timestamp">): FraudRecord {
    const id = Date.now().toString();
    const newRecord: FraudRecord = {
      ...record,
      id,
      timestamp: new Date().toISOString(),
    };
    this.records.set(id, newRecord);
    return newRecord;
  }
  get_record (id: string): FraudRecord | undefined {
    return this.records.get (id);
  }

  updateRecord(
    id: string,
    updates: Partial<FraudRecord>,
  ): FraudRecord | undefined {
    const record = this.records.get(id);
    if (!record) return undefined;

    const updatedRecord = { ...record, ...updates };
    this.records.set(id, updatedRecord);
    return updatedRecord;
  }
  list_records (): FraudRecord[] {
    return Array.from (this.records.values ());
  }

  async generateMonthlyReport(month: string): Promise<MonthlyReport> {
    const records = this.listRecords();
    const monthRecords = records.filter((r) => r.timestamp.startsWith(month));

    return {
      month,
      totalCases: monthRecords.length,
      resolvedCases: monthRecords.filter((r) => r.status === "resolved").length,
      falsePositives: monthRecords.filter((r) => r.status === "false_positive")
        .length,
      averageResolutionTime: 24, // placeholder
      topFraudTypes: [
        { type: "suspicious_activity", count: 5 },
        { type: "unauthorized_access", count: 3 },
      ],
    };
  }
}
export const fraud_store = new FraudStore ();
export const getFraudStore = () =>: any fraud_store;

export const fraudStore = new FraudStore();
export const getFraudStore = () => fraudStore;
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
export function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export async function getRecentFraudEvents(
  ip: string,
  source: string,
  since: string
): Promise<number> {
  if (isSupabaseConfigured()) {
    // Mock Supabase query
    const data = events.filter(event => 
      event.ipAddress === ip && 
      event.source === source && 
      new Date(event.createdAt) >= new Date(since)
    );
    return data.length;
  }
  
  return 0;
}

export function storeFraudEvent(record: Omit<StoredFraudRecord, 'id' | 'createdAt'>): void {
  const newRecord: StoredFraudRecord = {
    ...record,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString()
  };
origin/cursor/automate-test-improve-and-merge-code-2533
  
  events.push(newRecord);
}

export function parseFraudRecords(text: string): StoredFraudRecord[] {
  return text
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line) as StoredFraudRecord;
      } catch {
        return null;
      }
    })
    .filter(Boolean) as StoredFraudRecord[];
}

export function parseAdminActions(text: string): AdminActionRecord[] {
  return text
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line) as AdminActionRecord;
      } catch {
        return null;
      }
    })
    .filter(Boolean) as AdminActionRecord[];
}
