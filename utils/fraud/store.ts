
  private records: Map < string, FraudRecord> = new Map ()create_record (record: Omit < FraudRecord, 'id' | 'timestamp'>): FraudRecord {const id = Date.now ().to_string ()const new_record: FraudRecord = {export interface FraudRecord  {id: string;

  private records: Map < string, FraudRecord> = new Map ()create_record (record: Omit < FraudRecord, 'id' | 'timestamp'>): FraudRecord {const id = Date.now ().to_string ()const new_record: FraudRecord = {export interface FraudRecord  {id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  source: string;
  timestamp: string;
  status: 'pending' | 'investigating' | 'resolved' | 'false_positive';
  adminId?: string;
  resolution?: string;
}class FraudStore {private records: Map<string, FraudRecord> = new Map()createRecord(record: Omit<FraudRecord, 'id' | 'timestamp'>): FraudRecord {const id = Date.now().toString()const newRecord: FraudRecord = {...record,id,timestamp: new Date().toISOString()}this.records.set(id, newRecord)return newRecord;...record,id,timestamp: new Date().toISOString()}this.records.set(id, newRecord)return newRecord;
  }
  get_record (id: string): FraudRecord | undefined {return this.records.get (id)}updateRecord(id: string,updates: Partial<FraudRecord>,): FraudRecord | undefined {const record = this.records.get(id)if (!record) return undefined;const updatedRecord = { ...record, ...updates }this.records.set(id, updatedRecord)return updatedRecord;}
  list_records (): FraudRecord[] {return Array.from (this.records.values ())}async generateMonthlyReport(month: string): Promise<MonthlyReport> {const records = this.listRecords()const monthRecords  = records.filter((r) => r.timestamp.startsWith(month))return {month,totalCases: monthRecords.length,resolvedCases: monthRecords.filter((r) => r.status === 'resolved').length,falsePositives: monthRecords.filter((r) => r.status === 'false_positive').length,averageResolutionTime: 24, // placeholder;
      topFraudTypes: [;
        { type: 'suspicious_activity', count: 5 },{ type: 'unauthorized_access', count: 3 }
      ];
    }
}export const fraudStore = new FraudStore()export const getFraudStore  = () => fraudStore;{ type: 'unauthorized_access', count: 3 }
      ];
    }
}
  private records: Map < string, FraudRecord> = new Map ();
;
  create_record (record: Omit < FraudRecord, 'id' | 'timestamp'>): FraudRecord {
    const id = Date.now ().to_string ();
    const new_record: FraudRecord = {
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
      resolvedCases: monthRecords.filter((r) => r.status === 'resolved').length,
      falsePositives: monthRecords.filter((r) => r.status === 'false_positive')
        .length,
      averageResolutionTime: 24, // placeholder
      topFraudTypes: [
        { type: 'suspicious_activity', count: 5 },
        { type: 'unauthorized_access', count: 3 },
      ],
    };
  }
}
export const fraud_store = new FraudStore ()export const getFraudStore  = () =>: any fraud_store;export const fraudStore = new FraudStore()export const getFraudStore = () => fraudStore;
export const fraud_store = new FraudStore ();
export const getFraudStore = () =>: any fraud_store;

export const fraud_store = new FraudStore ()export const getFraudStore  = () =>: any fraud_store;export const fraudStore = new FraudStore()export const getFraudStore = () => fraudStore;
import fs from 'fs-extra';
// Fraud detection store utilities
import fs from 'fs';
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
  StoredFraudRecord} from './types',

const dataDir = path.resolve(process.cwd(), 'data/fraud'),
const eventsPath = path.join($2);
const actionsPath = path.join($2);
const privacyPath = path.join($2);
function ensureFiles() {
  fs.ensureDirSync($2);
  if (!fs.existsSync(eventsPath)) fs.writeFileSync($2);
  if (!fs.existsSync(actionsPath)) fs.writeFileSync($2);
  if (!fs.existsSync(privacyPath)) fs.writeFileSync(privacyPath, JSON.stringify({}))
}

function isSupabaseConfigured() {
  return !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE)
}

function getSupabaseAdmin() {
  const url = $2;
  const key = $2;
  return createClient(url, key, { auth: { persistSession: false} })
}

export class FraudStore {
  async saveEvent(record: Omit<StoredFraudRecord, 'id'> & { id?: string }): Promise<StoredFraudRecord> {
    const withId: StoredFraudRecord = { ...record, id: record.id ?? uuidv4() } as StoredFraudRecord,

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin($2);
      await supabase.from('fraud_events').insert($2);
      return withId
    }

    ensureFiles($2);
    const line = $2;
    await fs.appendFile($2);
    return withId
  }

  async updateEventStatus(fraudId: string, status: StoredFraudRecord['status']): Promise<void> {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin($2);
      await supabase.from('fraud_events').update({ status }).eq($2);
      return
    }

    ensureFiles($2);
    const events = await this._readAllEvents($2);
    const idx = $2;
    if (idx >= 0) {
      events[idx].status = $2;
      await this._writeAllEvents(events)
    }
  }

  async recordAction(action: Omit<AdminActionRecord, 'id' | 'createdAt'> & { id?: string, createdAt?: string }): Promise<AdminActionRecord> {
    const withId: AdminActionRecord = {
      id: action.id ?? uuidv4($2);
      fraudId: action.fraudId,
      action: action.action,
      adminId: action.adminId ?? null,
      reason: action.reason ?? null,
      createdAt: action.createdAt ?? new Date().toISOString()},

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin($2);
      await supabase.from('fraud_actions').insert($2);
      return withId
    }

    ensureFiles($2);
    const line = $2;
    await fs.appendFile($2);
    return withId
  }

  async listFlagged(limit = 50, offset = 0, filters: ListFilters = {}): Promise<StoredFraudRecord[]> {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin($2);
      let query = supabase.from('fraud_events').select('*').order('createdAt', { ascending: false}).range($2);
      if (filters.source) query = query.eq($2);
      if (filters.userId) query = query.eq($2);
      if (filters.status) query = query.eq($2);
      if (filters.label) query = query.contains($2);
      const { data } = await query,
      return (data as any) as StoredFraudRecord[]
    }

    ensureFiles($2);
    const events = await this._readAllEvents($2);
    const filtered = $2;
      if (filters.userId && e.userId !== filters.userId) return false,
      if (filters.status && e.status !== filters.status) return false,
      if (filters.label && e.gpt?.label !== filters.label) return false,
      return true
    }),
    return filtered.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)).slice(offset, offset + limit)
  }

  async countEventsByIp(ip: string, source: MonitoredSource, withinMinutes: number): Promise<number> {
    const since = $2;
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin($2);
      const { data } = await supabase
        .from('fraud_events')
        .select('id, createdAt')
        .eq('ipAddress', ip)
        .eq('source', source)
        .gte('createdAt', new Date(since).toISOString()),
      return (data?.length ?? 0)
    }

    ensureFiles($2);
    const events = await this._readAllEvents($2);
    return events.filter((e) => e.ipAddress === ip && e.source === source && Date.parse(e.createdAt) >= since).length
  }

  async countFlaggedForUser(userId: string): Promise<number> {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin($2);
      const { data } = await supabase.from('fraud_events').select('id').eq($2);
      return data?.length ?? 0
    }
    ensureFiles($2);
    const events = await this._readAllEvents($2);
    return events.filter((e) => e.userId === userId).length
  }

  async getPrivacySettings(userId: string): Promise<PrivacySettings> {
    const now = new Date().toISOString($2);
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin($2);
      const { data } = await supabase.from('privacy_settings').select('*').eq('userId', userId).limit($2);
      if (data && data[0]) return data[0] as any as PrivacySettings,
      return { userId, monitoringContentAnalysisOptOut: false, updatedAt: now}
    }

    ensureFiles($2);
    const json = JSON.parse(fs.readFileSync(privacyPath, 'utf8') || '{}'),
    return (
      json[userId] || { userId, monitoringContentAnalysisOptOut: false, updatedAt: now}
    )
  }

  async setPrivacySettings(userId: string, monitoringContentAnalysisOptOut: boolean): Promise<PrivacySettings> {
    const updated: PrivacySettings = { userId, monitoringContentAnalysisOptOut, updatedAt: new Date().toISOString() },

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin($2);
      await supabase.from('privacy_settings').upsert($2);
      return updated
    }

    ensureFiles($2);
    const json = JSON.parse(fs.readFileSync(privacyPath, 'utf8') || '{}'),
    json[userId] = updated,
    fs.writeFileSync(privacyPath, JSON.stringify(json, null, 2)),
    return updated
  }

  async generateMonthlyReport(month: string): Promise<MonthlyReport> {
    // month format: YYYY-MM
    const [year, mon] = month.split('-').map((v) => parseInt(v, 10)),
    const start = new Date(Date.UTC(year, mon - 1, 1, 0, 0, 0)),
    const end = new Date(Date.UTC(year, mon, 1, 0, 0, 0)),

    let events: StoredFraudRecord[] = [],

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin($2);
      const { data } = await supabase
        .from('fraud_events')
        .select('*')
        .gte('createdAt', start.toISOString())
        .lt('createdAt', end.toISOString()),
      events = (data as any) as StoredFraudRecord[]
    } else {
      ensureFiles($2);
      events = await this._readAllEvents($2);
      events = events.filter((e) => {
        const ts = Date.parse($2);
        return ts >= start.getTime() && ts < end.getTime()
      })
    }

    const totals = $2;
      safe: events.filter((e) => e.gpt?.label = $2;
      suspicious: events.filter((e) => e.gpt?.label = $2;
      dangerous: events.filter((e) => e.gpt?.label = $2;
    const bySource: MonthlyReport['bySource'] = {
      signup: 0,
      job_post: 0,
      message: 0,
      quote: 0,
      review: 0},
    for (const e of events) bySource[e.source as MonitoredSource]++,

    const actions = await this._readAllActions($2);
    const falsePositives = $2;
    const reasonCounts: Record<string, number> = {},
    for (const e of events) {
      for (const r of e.heuristic.reasons) reasonCounts[r] = (reasonCounts[r] || 0) + 1,
      if (e.gpt?.reason) reasonCounts[e.gpt.reason] = (reasonCounts[e.gpt.reason] || 0) + 1
    }
    const topReasons = Object.entries(reasonCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([reason, count]) => ({ reason, count })),

    return { month, totals, bySource, falsePositives, topReasons }
  }

  private async _readAllEvents(): Promise<StoredFraudRecord[]> {
    ensureFiles($2);
    const text = fs.readFileSync($2);
    return text
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line) as StoredFraudRecord
        } catch {
          return null
        }
      })
      .filter(Boolean) as StoredFraudRecord[]
  }

  private async _writeAllEvents(events: StoredFraudRecord[]): Promise<void> {
    ensureFiles($2);
    const content = $2;
    await fs.writeFile(eventsPath, content, 'utf8')
  }

  private async _readAllActions(): Promise<AdminActionRecord[]> {
    ensureFiles($2);
    const text = fs.readFileSync($2);
    return text
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line) as AdminActionRecord
        } catch {
          return null
        }
      })
      .filter(Boolean) as AdminActionRecord[]
  }
}

let fraudStoreInstance: FraudStore | null = null;

export function getFraudStore(): FraudStore {
  return new FraudStore()
}

export function newEvent(partial: Partial<FraudEvent> & Pick<FraudEvent, 'source'>): FraudEvent {
  const id = uuidv4($2);
  return {
    id,
    userId: partial.userId ?? null,
    source: partial.source,
    content: partial.content ?? null,
    metadata: partial.metadata ?? null,
    ipAddress: partial.ipAddress ?? null,
      }).filter(Boolean) as AdminActionRecord[];
  }export function getFraudStore(): FraudStore {return new FraudStore()export function newEvent(partial: Partial<FraudEvent> & Pick<FraudEvent, 'source'>;
): FraudEvent {const id = uuidv4()return {id,userId: partial.userId ?? null,source: partial.source,content: partial.content ?? null,metadata: partial.metadata ?? null,ipAddress: partial.ipAddress ?? null,createdAt: partial.createdAt ?? new Date().toISOString()}
      }).filter(Boolean) as AdminActionRecord[];
  }export function getFraudStore(): FraudStore {return new FraudStore()export function newEvent(partial: Partial<FraudEvent> & Pick<FraudEvent, 'source'>;
): FraudEvent {const id = uuidv4()return {id,userId: partial.userId ?? null,source: partial.source,content: partial.content ?? null,metadata: partial.metadata ?? null,ipAddress: partial.ipAddress ?? null,createdAt: partial.createdAt ?? new Date().toISOString()}
    createdAt: partial.createdAt ?? new Date().toISOString()}
}
