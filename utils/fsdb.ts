import fs from 'fs';
import path from 'path';

export interface FSDocument {
  id: string;
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}

export class FSDB {
  private baseDir: string;

  constructor(baseDir: string = './data') {
    this.baseDir = baseDir;
    this.ensureDir(baseDir);
  }

  private ensureDir(dir: string): void {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  private getCollectionPath(collection: string): string {
    return path.join(this.baseDir, `${collection}.json`);
  }

  async create<T extends FSDocument>(collection: string, data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T> {
    const filePath = this.getCollectionPath(collection);
    const records = await this.getAll(collection);
    
    const newRecord = {
      ...data,
      id: `fsdb-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    } as T;
    
    records.push(newRecord);
    await this.writeAll(collection, records);
    return newRecord;
  }

  async getAll<T>(collection: string): Promise<T[]> {
    const filePath = this.getCollectionPath(collection);
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  async findById<T>(collection: string, id: string): Promise<T | null> {
    const records = await this.getAll<T>(collection);
    return records.find(record => (record as any).id === id) || null;
  }

  async update<T extends FSDocument>(collection: string, id: string, updates: Partial<T>): Promise<T | null> {
    const records = await this.getAll<T>(collection);
    const index = records.findIndex(record => (record as any).id === id);
    
    if (index === -1) return null;
    
    const updated = {
      ...records[index],
      ...updates,
      updatedAt: new Date().toISOString()
    } as T;
    
    records[index] = updated;
    await this.writeAll(collection, records);
    return updated;
  }

  async delete(collection: string, id: string): Promise<boolean> {
    const records = await this.getAll(collection);
    const filtered = records.filter(record => (record as any).id !== id);
    
    if (filtered.length === records.length) return false;
    
    await this.writeAll(collection, filtered);
    return true;
  }

  private async writeAll(collection: string, records: any[]): Promise<void> {
    const filePath = this.getCollectionPath(collection);
    this.ensureDir(path.dirname(filePath));
    fs.writeFileSync(filePath, JSON.stringify(records, null, 2));
  }
}

export const fsdb = new FSDB();