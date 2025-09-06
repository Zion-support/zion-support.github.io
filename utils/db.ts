// Mock database utilities
export interface DatabaseRecord {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export class MockDatabase {
  private data: Map<string, any[]> = new Map();

  async create<T extends DatabaseRecord>(table: string, record: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T> {
    const records = this.data.get(table) || [];
    const newRecord = {
      ...record,
      id: `mock-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    } as T;
    
    records.push(newRecord);
    this.data.set(table, records);
    return newRecord;
  }

  async find<T>(table: string, where?: Partial<T>): Promise<T[]> {
    const records = this.data.get(table) || [];
    if (!where) return records;
    
    return records.filter(record => {
      return Object.entries(where).every(([key, value]) => record[key] === value);
    });
  }

  async findOne<T>(table: string, where: Partial<T>): Promise<T | null> {
    const records = await this.find(table, where);
    return records[0] || null;
  }

  async update<T extends DatabaseRecord>(table: string, id: string, updates: Partial<T>): Promise<T | null> {
    const records = this.data.get(table) || [];
    const index = records.findIndex(record => record.id === id);
    
    if (index === -1) return null;
    
    records[index] = {
      ...records[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    this.data.set(table, records);
    return records[index];
  }

  async delete(table: string, id: string): Promise<boolean> {
    const records = this.data.get(table) || [];
    const index = records.findIndex(record => record.id === id);
    
    if (index === -1) return false;
    
    records.splice(index, 1);
    this.data.set(table, records);
    return true;
  }
}

export const db = new MockDatabase();