export interface FraudRecord {
  id: string;
  type: string;
  details?: Record<string, unknown>;
  timestamp: string;
}

export class FraudStore {
  private records: Map<string, FraudRecord> = new Map();

  createRecord(record: Omit<FraudRecord, 'id' | 'timestamp'>): FraudRecord {
    const id = Date.now().toString();
    const newRecord: FraudRecord = {
      id,
      type: record.type,
      details: record.details,
      timestamp: new Date().toISOString(),
    };
    this.records.set(id, newRecord);
    return newRecord;
  }

  list(): FraudRecord[] {
    return Array.from(this.records.values());
  }
}

export const fraudStore = new FraudStore();
