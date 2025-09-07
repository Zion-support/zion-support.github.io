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