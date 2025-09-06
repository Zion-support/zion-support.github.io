export interface FraudEvent {
  id: string;
  userId?: string;
  source: 'message' | 'profile' | 'application' | 'other';
  content: string;
  metadata: Record<string, any>;
  timestamp: string;
}

export interface HeuristicResult {
  severity: 'low' | 'medium' | 'high';
  score: number;
  reasons: string[];
}

export interface GPTResult {
  label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  confidence: number;
  reasoning: string;
}

export interface StoredFraudRecord extends FraudEvent {
  heuristic: HeuristicResult;
  gpt?: GPTResult;
  autoHidden: boolean;
  status: 'PENDING' | 'REVIEWED' | 'RESOLVED' | 'FALSE_POSITIVE';
  adminNotes?: string;
  reviewedBy?: string;
  reviewedAt?: string;
}

export interface FraudFilter {
  source?: string;
  userId?: string;
  status?: string;
  label?: string;
}

class FraudStore {
  private records: StoredFraudRecord[] = [];

  async saveEvent(event: Omit<StoredFraudRecord, 'id'>): Promise<StoredFraudRecord> {
    const record: StoredFraudRecord = {
      ...event,
      id: `fraud-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    this.records.push(record);
    return record;
  }

  async listFlagged(limit: number, offset: number, filters: FraudFilter = {}): Promise<StoredFraudRecord[]> {
    let filtered = this.records;

    if (filters.source) {
      filtered = filtered.filter(r => r.source === filters.source);
    }
    if (filters.userId) {
      filtered = filtered.filter(r => r.userId === filters.userId);
    }
    if (filters.status) {
      filtered = filtered.filter(r => r.status === filters.status);
    }
    if (filters.label) {
      filtered = filtered.filter(r => r.gpt?.label === filters.label);
    }

    return filtered
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(offset, offset + limit);
  }

  async getById(id: string): Promise<StoredFraudRecord | null> {
    return this.records.find(r => r.id === id) || null;
  }

  async updateStatus(id: string, status: StoredFraudRecord['status'], adminNotes?: string, reviewedBy?: string): Promise<StoredFraudRecord | null> {
    const record = this.records.find(r => r.id === id);
    if (!record) return null;

    record.status = status;
    record.adminNotes = adminNotes;
    record.reviewedBy = reviewedBy;
    record.reviewedAt = new Date().toISOString();

    return record;
  }

  async getStats(): Promise<{
    total: number;
    pending: number;
    reviewed: number;
    resolved: number;
    falsePositive: number;
    bySource: Record<string, number>;
    byLabel: Record<string, number>;
  }> {
    const total = this.records.length;
    const pending = this.records.filter(r => r.status === 'PENDING').length;
    const reviewed = this.records.filter(r => r.status === 'REVIEWED').length;
    const resolved = this.records.filter(r => r.status === 'RESOLVED').length;
    const falsePositive = this.records.filter(r => r.status === 'FALSE_POSITIVE').length;

    const bySource = this.records.reduce((acc, r) => {
      acc[r.source] = (acc[r.source] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const byLabel = this.records.reduce((acc, r) => {
      const label = r.gpt?.label || 'UNKNOWN';
      acc[label] = (acc[label] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      pending,
      reviewed,
      resolved,
      falsePositive,
      bySource,
      byLabel
    };
  }
}

const fraudStore = new FraudStore();

export function getFraudStore(): FraudStore {
  return fraudStore;
}