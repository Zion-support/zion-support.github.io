// File system database utilities
import fs from 'fs';
import path from 'path';

export interface FsdbConfig {
  baseDir: string;
}

export class Fsdb {
  private baseDir: string;

  constructor(config: FsdbConfig) {
    this.baseDir = config.baseDir;
    this.ensureDir(this.baseDir);
  }

  private ensureDir(dir: string): void {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  private getFilePath(collection: string, id: string): string {
    return path.join(this.baseDir, collection, `${id}.json`);
  }

  async create<T>(collection: string, id: string, data: T): Promise<T> {
    const filePath = this.getFilePath(collection, id);
    const dir = path.dirname(filePath);
    this.ensureDir(dir);
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return data;
  }

  async read<T>(collection: string, id: string): Promise<T | null> {
    const filePath = this.getFilePath(collection, id);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error);
      return null;
    }
  }

  async update<T>(collection: string, id: string, data: Partial<T>): Promise<T | null> {
    const existing = await this.read<T>(collection, id);
    if (!existing) {
      return null;
    }

    const updated = { ...existing, ...data };
    return this.create(collection, id, updated);
  }

  async delete(collection: string, id: string): Promise<boolean> {
    const filePath = this.getFilePath(collection, id);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }

    try {
      fs.unlinkSync(filePath);
      return true;
    } catch (error) {
      console.error(`Error deleting file ${filePath}:`, error);
      return false;
    }
  }

  async list<T>(collection: string): Promise<T[]> {
    const collectionDir = path.join(this.baseDir, collection);
    
    if (!fs.existsSync(collectionDir)) {
      return [];
    }

    try {
      const files = fs.readdirSync(collectionDir);
      const items: T[] = [];

      for (const file of files) {
        if (file.endsWith('.json')) {
          const id = path.basename(file, '.json');
          const item = await this.read<T>(collection, id);
          if (item) {
            items.push(item);
          }
        }
      }

      return items;
    } catch (error) {
      console.error(`Error listing collection ${collection}:`, error);
      return [];
    }
  }
}

// Default instance
export const fsdb = new Fsdb({ baseDir: './data' });