import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export interface FSDocument {
  id: string;
  [key: string]: any;
}

export class FSDB {
  private collectionPath: string;

  constructor(collectionName: string) {
    this.collectionPath = path.join(DATA_DIR, `${collectionName}.json`);
    this.ensureCollectionExists();
  }

  private ensureCollectionExists(): void {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(this.collectionPath)) {
      fs.writeFileSync(this.collectionPath, JSON.stringify([]));
    }
  }

  private readCollection(): FSDocument[] {
    try {
      const data = fs.readFileSync(this.collectionPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading collection: ${error}`);
      return [];
    }
  }

  private writeCollection(documents: FSDocument[]): void {
    try {
      fs.writeFileSync(this.collectionPath, JSON.stringify(documents, null, 2));
    } catch (error) {
      console.error(`Error writing collection: ${error}`);
      throw error;
    }
  }

  async find(query: Partial<FSDocument> = {}): Promise<FSDocument[]> {
    const documents = this.readCollection();
    if (Object.keys(query).length === 0) {
      return documents;
    }
    
    return documents.filter(doc => {
      return Object.entries(query).every(([key, value]) => doc[key] === value);
    });
  }

  async findById(id: string): Promise<FSDocument | null> {
    const documents = this.readCollection();
    return documents.find(doc => doc.id === id) || null;
  }

  async create(document: Omit<FSDocument, 'id'>): Promise<FSDocument> {
    const documents = this.readCollection();
    const newDoc: FSDocument = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...document
    };
    documents.push(newDoc);
    this.writeCollection(documents);
    return newDoc;
  }

  async update(id: string, updates: Partial<FSDocument>): Promise<FSDocument | null> {
    const documents = this.readCollection();
    const index = documents.findIndex(doc => doc.id === id);
    if (index === -1) {
      return null;
    }
    
    documents[index] = { ...documents[index], ...updates };
    this.writeCollection(documents);
    return documents[index];
  }

  async delete(id: string): Promise<boolean> {
    const documents = this.readCollection();
    const index = documents.findIndex(doc => doc.id === id);
    if (index === -1) {
      return false;
    }
    
    documents.splice(index, 1);
    this.writeCollection(documents);
    return true;
  }
}

export function createFSDB(collectionName: string): FSDB {
  return new FSDB(collectionName);
}