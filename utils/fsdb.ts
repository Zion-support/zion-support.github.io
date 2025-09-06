import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export interface FSDocument {
  id: string;
  data: any;
  createdAt: string;
  updatedAt: string;
}

export class FSDB {
  private collectionPath: string;

  constructor(collectionName: string) {
    this.collectionPath = path.join(DATA_DIR, `${collectionName}.json`);
    this.ensureCollection();
  }

  private ensureCollection(): void {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(this.collectionPath)) {
      fs.writeFileSync(this.collectionPath, JSON.stringify([]));
    }
  }

  private readCollection(): FSDocument[] {
    try {
      const content = fs.readFileSync(this.collectionPath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      console.error(`Error reading collection ${this.collectionPath}:`, error);
      return [];
    }
  }

  private writeCollection(documents: FSDocument[]): void {
    try {
      fs.writeFileSync(this.collectionPath, JSON.stringify(documents, null, 2));
    } catch (error) {
      console.error(`Error writing collection ${this.collectionPath}:`, error);
    }
  }

  async create(data: any): Promise<FSDocument> {
    const documents = this.readCollection();
    const id = `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();
    
    const document: FSDocument = {
      id,
      data,
      createdAt: now,
      updatedAt: now
    };
    
    documents.push(document);
    this.writeCollection(documents);
    return document;
  }

  async findById(id: string): Promise<FSDocument | null> {
    const documents = this.readCollection();
    return documents.find(doc => doc.id === id) || null;
  }

  async findAll(): Promise<FSDocument[]> {
    return this.readCollection();
  }

  async update(id: string, data: any): Promise<FSDocument | null> {
    const documents = this.readCollection();
    const index = documents.findIndex(doc => doc.id === id);
    
    if (index === -1) return null;
    
    documents[index] = {
      ...documents[index],
      data: { ...documents[index].data, ...data },
      updatedAt: new Date().toISOString()
    };
    
    this.writeCollection(documents);
    return documents[index];
  }

  async delete(id: string): Promise<boolean> {
    const documents = this.readCollection();
    const index = documents.findIndex(doc => doc.id === id);
    
    if (index === -1) return false;
    
    documents.splice(index, 1);
    this.writeCollection(documents);
    return true;
  }

  async query(predicate: (doc: FSDocument) => boolean): Promise<FSDocument[]> {
    const documents = this.readCollection();
    return documents.filter(predicate);
  }
}

export const disputesDB = new FSDB('disputes');
export const applicationsDB = new FSDB('applications');
export const projectsDB = new FSDB('projects');

// Additional utility functions for disputes
export async function getDisputeById(id: string): Promise<any> {
  return disputesDB.findById(id);
}

export async function upsertDispute(dispute: any): Promise<void> {
  if (dispute.id) {
    await disputesDB.update(dispute.id, dispute);
  } else {
    await disputesDB.create(dispute);
  }
}

export async function readAllDisputes(): Promise<any[]> {
  return disputesDB.findAll();
}

export async function createDispute(dispute: any): Promise<void> {
  await disputesDB.create(dispute);
}

export function generateCaseId(): string {
  return `CASE-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

export async function ensureDisputeUploadDir(disputeId: string): Promise<string> {
  const dir = path.join(DATA_DIR, 'disputes', disputeId, 'uploads');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}