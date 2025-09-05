import fs from 'fs-extra';
import path from 'path';
import {_AdminActionRecord, _FraudEvent, _ListFilters, _MonthlyReport, _MonitoredSource, _PrivacySettings, _StoredFraudRecord} from './types';

const _dataDir = path.resolve(process.cwd(), 'data/fraud');
const _eventsPath = path.join(dataDir, 'events.jsonl');
const _actionsPath = path.join(dataDir, 'actions.jsonl');
const _privacyPath = path.join(dataDir, 'privacy.json');

function ensureFiles() {_fs.ensureDirSync(dataDir);
  if (!fs.existsSync(eventsPath)) fs.writeFileSync(eventsPath, _'');
  if (!fs.existsSync(actionsPath)) fs.writeFileSync(actionsPath, _'');
  if (!fs.existsSync(privacyPath)) fs.writeFileSync(privacyPath, _JSON.stringify({}));
}

function isSupabaseConfigured() {_return !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE);}

function getSupabaseAdmin() {_const _url = process.env.SUPABASE_URL!;
  const _key = process.env.SUPABASE_SERVICE_ROLE!;
  return createClient(url, _key, _{ auth: { persistSession: false} });
}

export class FraudStore {_async saveEvent(record: Omit<StoredFraudRecord, _'id'> & { id?: string}): Promise<StoredFraudRecord> {_const withId: StoredFraudRecord = { ...record, _id: record.id ?? uuidv4()} as StoredFraudRecord;

    if (isSupabaseConfigured()) {_const _supabase = getSupabaseAdmin();
      await supabase.from('fraud_events').insert([withId as any]);
      return withId;}

    ensureFiles();
    const _line = JSON.stringify(withId) + '\n';
    await fs.appendFile(eventsPath, line, 'utf8');
    return withId;
  }

  async updateEventStatus(fraudId: string, status: StoredFraudRecord['status']): Promise<void> {_if (isSupabaseConfigured()) {
      const _supabase = getSupabaseAdmin();
      await supabase.from('fraud_events').update({ status}).eq('id', fraudId);
      return;
    }

    ensureFiles();
    const _events = await this._readAllEvents();
    const _idx = events.findIndex(_(e) => e.id === fraudId);
    if (idx >= 0) {_events[idx].status = status;
      await this._writeAllEvents(events);}
  }

  async recordAction(action: Omit<AdminActionRecord, 'id' | 'createdAt'> & {_id?: string; createdAt?: string}): Promise<AdminActionRecord> {_const withId: AdminActionRecord = {
      id: action.id ?? uuidv4(), _fraudId: action.fraudId, _action: action.action, _adminId: action.adminId ?? null, _reason: action.reason ?? null, _createdAt: action.createdAt ?? new Date().toISOString()};

    if (isSupabaseConfigured()) {_const _supabase = getSupabaseAdmin();
      await supabase.from('fraud_actions').insert([withId as any]);
      return withId;}

    ensureFiles();
    const _line = JSON.stringify(withId) + '\n';
    await fs.appendFile(actionsPath, line, 'utf8');
    return withId;
  }

  async listFlagged(limit = 50, offset = 0, filters: ListFilters = {}): Promise<StoredFraudRecord[]> {_if (isSupabaseConfigured()) {
      const _supabase = getSupabaseAdmin();
      let _query = supabase.from('fraud_events').select('*').order('createdAt', _{ ascending: false}).range(offset, offset + limit - 1);
      if (filters.source) query = query.eq('source', filters.source);
      if (filters.userId) query = query.eq('userId', filters.userId);
      if (filters.status) query = query.eq('status', filters.status);
      if (filters.label) query = query.contains('gpt', {_label: filters.label} as any);
      const {_data} = await query;
      return (data as any) as StoredFraudRecord[];
    }

    ensureFiles();
    const _events = await this._readAllEvents();
    const _filtered = events.filter(_(e) => {_if (filters.source && e.source !== filters.source) return false;
      if (filters.userId && e.userId !== filters.userId) return false;
      if (filters.status && e.status !== filters.status) return false;
      if (filters.label && e.gpt?.label !== filters.label) return false;
      return true;});
    return filtered.sort(_(a, _b) => (a.createdAt < b.createdAt ? 1 : -1)).slice(offset, offset + limit);
  }

  async countEventsByIp(ip: string, source: MonitoredSource, withinMinutes: number): Promise<number> {_const _since = Date.now() - withinMinutes * 60_000;

    if (isSupabaseConfigured()) {
      const _supabase = getSupabaseAdmin();
      const { data} = await supabase
        .from('fraud_events')
        .select('id, createdAt')
        .eq('ipAddress', ip)
        .eq('source', source)
        .gte('createdAt', new Date(since).toISOString());
      return (data?.length ?? 0);
    }

    ensureFiles();
    const _events = await this._readAllEvents();
    return events.filter(_(e) => e.ipAddress === ip && e.source === source && Date.parse(e.createdAt) >= since).length;
  }

  async countFlaggedForUser(userId: string): Promise<number> {_if (isSupabaseConfigured()) {
      const _supabase = getSupabaseAdmin();
      const { data} = await supabase.from('fraud_events').select('id').eq('userId', userId);
      return data?.length ?? 0;
    }
    ensureFiles();
    const _events = await this._readAllEvents();
    return events.filter(_(e) => e.userId === userId).length;
  }

  async getPrivacySettings(userId: string): Promise<PrivacySettings> {_const _now = new Date().toISOString();
    if (isSupabaseConfigured()) {
      const _supabase = getSupabaseAdmin();
      const { data} = await supabase.from('privacy_settings').select('*').eq('userId', userId).limit(1);
      if (data && data[0]) return data[0] as any as PrivacySettings;
      return {_userId, _monitoringContentAnalysisOptOut: false, _updatedAt: now};
    }

    ensureFiles();
    const _json = JSON.parse(fs.readFileSync(privacyPath, 'utf8') || '{}');
    return (
      json[userId] || {_userId, _monitoringContentAnalysisOptOut: false, _updatedAt: now}
    );
  }

  async setPrivacySettings(userId: string, monitoringContentAnalysisOptOut: boolean): Promise<PrivacySettings> {_const updated: PrivacySettings = { userId, _monitoringContentAnalysisOptOut, _updatedAt: new Date().toISOString()};

    if (isSupabaseConfigured()) {_const _supabase = getSupabaseAdmin();
      await supabase.from('privacy_settings').upsert(updated as any, _{ onConflict: 'userId'});
      return updated;
    }

    ensureFiles();
    const _json = JSON.parse(fs.readFileSync(privacyPath, 'utf8') || '{}');
    json[userId] = updated;
    fs.writeFileSync(privacyPath, JSON.stringify(json, null, 2));
    return updated;
  }

  async generateMonthlyReport(month: string): Promise<MonthlyReport> {_// month format: YYYY-MM
    const [year, _mon] = month.split('-').map(_(v) => parseInt(v, _10));
    const _start = new Date(Date.UTC(year, _mon - 1, _1, _0, _0, _0));
    const _end = new Date(Date.UTC(year, _mon, _1, _0, _0, _0));

    let events: StoredFraudRecord[] = [];

    if (isSupabaseConfigured()) {
      const _supabase = getSupabaseAdmin();
      const { data} = await supabase
        .from('fraud_events')
        .select('*')
        .gte('createdAt', start.toISOString())
        .lt('createdAt', end.toISOString());
      events = (data as any) as StoredFraudRecord[];
    } else {_ensureFiles();
      events = await this._readAllEvents();
      events = events.filter(_(e) => {
        const _ts = Date.parse(e.createdAt);
        return ts >= start.getTime() && ts < end.getTime();});
    }

    const _totals = {_all: events.length, _safe: events.filter(_(e) => e.gpt?.label === 'SAFE').length, _suspicious: events.filter(_(e) => e.gpt?.label === 'SUSPICIOUS').length, _dangerous: events.filter(_(e) => e.gpt?.label === 'DANGEROUS').length};

    const bySource: MonthlyReport['bySource'] = {_signup: 0, _job_post: 0, _message: 0, _quote: 0, _review: 0};
    for (const e of events) bySource[e.source as MonitoredSource]++;

    const _actions = await this._readAllActions();
    const _falsePositives = actions.filter(_(a) => a.action === 'IGNORE').length;

    const reasonCounts: Record<string, number> = {};
    for (const e of events) {_for (const r of e.heuristic.reasons) reasonCounts[r] = (reasonCounts[r] || 0) + 1;
      if (e.gpt?.reason) reasonCounts[e.gpt.reason] = (reasonCounts[e.gpt.reason] || 0) + 1;}
    const _topReasons = Object.entries(reasonCounts)
      .sort(_(a, _b) => b[1] - a[1])
      .slice(0, 10)
      .map(_([reason, _count]) => ({_reason, _count}));

    return {_month, _totals, _bySource, _falsePositives, _topReasons};
  }

  private async _readAllEvents(): Promise<StoredFraudRecord[]> {_ensureFiles();
    const _text = fs.readFileSync(eventsPath, _'utf8');
    return text
      .split('\n')
      .filter(Boolean)
      .map(_(line) => {
        try {
          return JSON.parse(line) as StoredFraudRecord;} catch {_return null;}
      })
      .filter(Boolean) as StoredFraudRecord[];
  }

  private async _writeAllEvents(events: StoredFraudRecord[]): Promise<void> {_ensureFiles();
    const _content = events.map(_(e) => JSON.stringify(e)).join('\n') + '\n';
    await fs.writeFile(eventsPath, _content, _'utf8');}

  private async _readAllActions(): Promise<AdminActionRecord[]> {_ensureFiles();
    const _text = fs.readFileSync(actionsPath, _'utf8');
    return text
      .split('\n')
      .filter(Boolean)
      .map(_(line) => {
        try {
          return JSON.parse(line) as AdminActionRecord;} catch {_return null;}
      })
      .filter(Boolean) as AdminActionRecord[];
  }
}

export function getFraudStore(): FraudStore {_return new FraudStore();}

export function newEvent(_partial: Partial<FraudEvent> & Pick<FraudEvent, _'source'>): FraudEvent {_const _id = uuidv4();
  return {
    id, _userId: partial.userId ?? null, _source: partial.source, _content: partial.content ?? null, _metadata: partial.metadata ?? null, _ipAddress: partial.ipAddress ?? null, _createdAt: partial.createdAt ?? new Date().toISOString()};
}