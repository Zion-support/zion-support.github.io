

=======
  private records: Map < string, FraudRecord> = new Map ();
;
  create_record (record: Omit < FraudRecord, 'id' | 'timestamp'>): FraudRecord {
    const id = Date.now ().to_string ();
    const new_record: FraudRecord = {      ...record,
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
export const fraud_store = new FraudStore ();
export const getFraudStore = () =>: any fraud_store;