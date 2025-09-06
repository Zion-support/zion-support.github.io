<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
export interface FraudRecord {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  source: string;
  timestamp: string;
  status: 'pending' | 'investigating' | 'resolved' | 'false_positive';
  admin_id?: string;
  resolution?: string;
}
export interface MonthlyReport {
  month: string;
  total_cases: number;
  resolved_cases: number;
  false_positives: number;
  averageResolutionTime: number;
  topFraudTypes: Array<{ type: string; count: number }>;
}
class FraudStore {
<<<<<<< HEAD
  private records: Map<string, FraudRecord> = new Map();
  createRecord(record: Omit<FraudRecord, 'id' | 'timestamp'>): FraudRecord {
    const id = Date.now().toString();
    const newRecord: FraudRecord = {
      ...record
      id
      timestamp: new Date().toISOString()
    }
    this.records.set(id, newRecord);
    return newRecord;
  }
  getRecord(id: string): FraudRecord | undefined {
    return this.records.get(id);
  }
  updateRecord(id: string, updates: Partial<FraudRecord>): FraudRecord | undefined {
    const record = this.records.get(id);
    if (!record) return undefined;
    const updatedRecord = { ...record, ...updates }
    this.records.set(id, updatedRecord);
    return updatedRecord;
  }
  listRecords(): FraudRecord[] {
    return Array.from(this.records.values());
  }
  async generateMonthlyReport(month: string): Promise<MonthlyReport> {
    const records = this.listRecords();
    const monthRecords = records.filter(r => r.timestamp.startsWith(month));
    return {
      month
      totalCases: monthRecords.length
      resolvedCases: monthRecords.filter(r => r.status === 'resolved').length
      falsePositives: monthRecords.filter(r => r.status === 'false_positive').length
      averageResolutionTime: 24, // placeholder
      topFraudTypes: [
        { type: 'suspicious_activity', count: 5 }
        { type: 'unauthorized_access', count: 3 }
      ]
    }
  }
}
export const fraudStore = new FraudStore();
export const getFraudStore = () => fraudStore;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
// Mock fraud store utility
export function getFraudStore() {
  return {
    id,
    userId: partial && partial.userId ?? null,
    source: partial && partial.source,
    content: partial && partial.content ?? null,
    metadata: partial && partial.metadata ?? null,
    ipAddress: partial && partial.ipAddress ?? null,
    createdAt: partial && partial.createdAt ?? new Date().toISOString(),
  };
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  private records: Map < string, FraudRecord> = new Map ();
;
  create_record (record: Omit < FraudRecord, 'id' | 'timestamp'>): FraudRecord {
    const id = Date.now ().to_string ();
    const new_record: FraudRecord = {
      ...record,
      id,
      timestamp: new Date ().toISOString ();
    }
    this.records.set (id, new_record);
    return new_record;
  }
  get_record (id: string): FraudRecord | undefined {
    return this.records.get (id);
  }
  update_record (id: string, updates: Partial < FraudRecord>): FraudRecord | undefined {
    const record = this.records.get (id);
    // Check condition
if (return undefined) {
  $2
}
    const updated_record = { ...record, ...updates }
    this.records.set (id, updated_record);
    return updated_record;
  }
  list_records (): FraudRecord[] {
    return Array.from (this.records.values ());
  }
  async generateMonthlyReport (month: string): Promise < MonthlyReport> {
    const records = this.list_records ();
    const month_records = records.filter (r => r.timestamp.starts_with (month));
;
    return {
      month,
      total_cases: month_records.length,
      resolved_cases: month_records.filter (r => r.status === 'resolved').length,
      false_positives: month_records.filter (r => r.status === 'false_positive').length,
      averageResolutionTime: 24, // placeholder;
      topFraudTypes: [;
        { type: 'suspicious_activity', count: 5 },
        { type: 'unauthorized_access', count: 3 }
      ];
    }
  }
}
export const fraud_store = new FraudStore ();
export const getFraudStore = () =>: any fraud_store;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
