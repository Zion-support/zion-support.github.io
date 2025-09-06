// File System Database - Simple file-based data storage
import fs from 'fs';
import path from 'path';

export interface FsDbOptions {
  dataDir: string;
  prettyPrint?: boolean;
}

export class FsDb {
  private dataDir: string;
  private prettyPrint: boolean;

  constructor(options: FsDbOptions) {
    this.dataDir = options.dataDir;
    this.prettyPrint = options.prettyPrint || false;
    
    // Ensure data directory exists
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  private getFilePath(collection: string): string {
    return path.join(this.dataDir, `${collection}.json`);
  }

  private readCollection(collection: string): any[] {
    const filePath = this.getFilePath(collection);
    if (!fs.existsSync(filePath)) {
      return [];
    }
    
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading collection ${collection}:`, error);
      return [];
    }
  }

  private writeCollection(collection: string, data: any[]): void {
    const filePath = this.getFilePath(collection);
    const jsonData = this.prettyPrint 
      ? JSON.stringify(data, null, 2)
      : JSON.stringify(data);
    
    fs.writeFileSync(filePath, jsonData, 'utf8');
  }

  // CRUD operations
  async create(collection: string, data: any): Promise<any> {
    const items = this.readCollection(collection);
    const newItem = {
      ...data,
      id: data.id || `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    items.push(newItem);
    this.writeCollection(collection, items);
    return newItem;
  }

  async read(collection: string, id?: string): Promise<any | any[]> {
    const items = this.readCollection(collection);
    if (id) {
      return items.find(item => item.id === id) || null;
    }
    return items;
  }

  async update(collection: string, id: string, data: Partial<any>): Promise<any | null> {
    const items = this.readCollection(collection);
    const index = items.findIndex(item => item.id === id);
    
    if (index === -1) {
      return null;
    }
    
    items[index] = {
      ...items[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    
    this.writeCollection(collection, items);
    return items[index];
  }

  async delete(collection: string, id: string): Promise<boolean> {
    const items = this.readCollection(collection);
    const index = items.findIndex(item => item.id === id);
    
    if (index === -1) {
      return false;
    }
    
    items.splice(index, 1);
    this.writeCollection(collection, items);
    return true;
  }

  async find(collection: string, filter: (item: any) => boolean): Promise<any[]> {
    const items = this.readCollection(collection);
    return items.filter(filter);
  }

  async findOne(collection: string, filter: (item: any) => boolean): Promise<any | null> {
    const items = this.readCollection(collection);
    return items.find(filter) || null;
  }

  async count(collection: string, filter?: (item: any) => boolean): Promise<number> {
    const items = this.readCollection(collection);
    if (filter) {
      return items.filter(filter).length;
    }
    return items.length;
  }

  async clear(collection: string): Promise<void> {
    this.writeCollection(collection, []);
  }

  async exists(collection: string, id: string): Promise<boolean> {
    const item = await this.read(collection, id);
    return item !== null;
  }
}

// Default instance
const defaultDb = new FsDb({
  dataDir: path.join(process.cwd(), 'data'),
  prettyPrint: true
});

export default defaultDb;