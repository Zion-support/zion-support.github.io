// File System Database - Simple file-based data storage
import { promises as fs } from 'fs';
import path from 'path';

export interface FsDbOptions {
  dataDir: string;
  encoding?: BufferEncoding;
}

export class FsDb {
  private dataDir: string;
  private encoding: BufferEncoding;

  constructor(options: FsDbOptions) {
    this.dataDir = options.dataDir;
    this.encoding = options.encoding || 'utf8';
  }

  private getFilePath(collection: string, id: string): string {
    return path.join(this.dataDir, collection, `${id}.json`);
  }

  private async ensureDir(dir: string): Promise<void> {
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch (error) {
      // Directory might already exist, ignore error
    }
  }

  async create<T>(collection: string, id: string, data: T): Promise<T> {
    const filePath = this.getFilePath(collection, id);
    const dir = path.dirname(filePath);
    
    await this.ensureDir(dir);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), this.encoding);
    
    return data;
  }

  async read<T>(collection: string, id: string): Promise<T | null> {
    try {
      const filePath = this.getFilePath(collection, id);
      const content = await fs.readFile(filePath, this.encoding);
      return JSON.parse(content);
    } catch (error) {
      return null;
    }
  }

  async update<T>(collection: string, id: string, data: Partial<T>): Promise<T | null> {
    const existing = await this.read<T>(collection, id);
    if (!existing) return null;

    const updated = { ...existing, ...data };
    return this.create(collection, id, updated);
  }

  async delete(collection: string, id: string): Promise<boolean> {
    try {
      const filePath = this.getFilePath(collection, id);
      await fs.unlink(filePath);
      return true;
    } catch (error) {
      return false;
    }
  }

  async list<T>(collection: string): Promise<T[]> {
    try {
      const dir = path.join(this.dataDir, collection);
      const files = await fs.readdir(dir);
      
      const items: T[] = [];
      for (const file of files) {
        if (file.endsWith('.json')) {
          const id = path.basename(file, '.json');
          const item = await this.read<T>(collection, id);
          if (item) items.push(item);
        }
      }
      
      return items;
    } catch (error) {
      return [];
    }
  }

  async exists(collection: string, id: string): Promise<boolean> {
    try {
      const filePath = this.getFilePath(collection, id);
      await fs.access(filePath);
      return true;
    } catch (error) {
      return false;
    }
  }
}

// Default instance
export const fsDb = new FsDb({ dataDir: './data' });