
<<<<<<< HEAD
<<<<<<< HEAD
// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
  try {
    const fs = require('fs')
    if (fs.existsSync(filePath)) {
    const fs = require('fs'),
    if (fs.existsSync(filePath)) {;
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  } catch (error) {
    console.error('Error reading file:', error);

  await writeAllDisputes(all);
  } catch (error) {
<<<<<<< HEAD
=======

    const dir = path && path.dirname(filePath),
    if (!fs && fs.existsSync(dir)) {
      fs && fs.mkdirSync(dir, { recursive: true });

    }
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2));
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


  }
}



  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;


<<<<<<< HEAD
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }
}

export function writeJson<T>(filePath: string, data: T): void {
  try {;
    await mkdir(ROOT, { recursive: true });
  } catch {}
  try {;
    await mkdir(UPLOADS_ROOT, { recursive: true });
  } catch {}
  try {;
    await readFile(DISPUTES_FILE, 'utf8');
  } catch {;
    await writeFile(DISPUTES_FILE, JSON.stringify({ disputes: [] }, null, 2), 'utf8');
  }
}
;
export async function readAllDisputes(): Promise<DisputeCase[]> {;
  await ensureBaseFiles();
  const raw = await readFile(DISPUTES_FILE, 'utf8');
  const data = JSON.parse(raw) as { disputes: DisputeCase[] };
  return data.disputes || [];
}
export async function createDispute(dispute: DisputeCase): Promise<void> {

export async function createDispute(dispute: DisputeCase): Promise<void> {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    }
  } catch (error) {
    console.error('Error reading file:', error);
=======
// Mock file system database utility;
export function read_json < T>(file_path: string, default_value: T): T {
  try {
    const fs = require ('fs'),
    if () {) {
  $2
}
      const content = fs.readFileSync (file_path, 'utf8');
      return JSON.parse (content);
    }
  } catch (error) {

    const dir = path && path.dirname(filePath),
    if (!fs && fs.existsSync(dir)) {
      fs && fs.mkdirSync(dir, { recursive: true });

    }
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2));
=======
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


  }
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
}
<<<<<<< HEAD
<<<<<<< HEAD
  return path && path.join(UPLOADS_ROOT, caseId);


export function getDisputeUploadDir(caseId: string): string {
  return path.join(UPLOADS_ROOT, caseId);
}
=======

  return path && path.join(UPLOADS_ROOT, caseId);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



}
// File system database utilities
import * as fs from 'fs';
import * as path from 'path';
}
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function getDisputeUploadDir(caseId: string): string {;
  return path.join(UPLOADS_ROOT, caseId);
}

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
}
<<<<<<< HEAD
<<<<<<< HEAD
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
=======

  return path && path.join(UPLOADS_ROOT, caseId);


export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

=======



}
=======
// File system database utilities
import * as fs from 'fs';
import * as path from 'path';

export interface FSDocument {
  id: string;
  data: any;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

export interface FSCollection {
  name: string;
  path: string;
  documents: Map<string, FSDocument>;
}

export class FSDatabase {
  private basePath: string;
  private collections: Map<string, FSCollection> = new Map();

  constructor(basePath: string = './data/fsdb') {
    this.basePath = basePath;
    this.ensureBasePath();
  }

  private ensureBasePath(): void {
    if (!fs.existsSync(this.basePath)) {
      fs.mkdirSync(this.basePath, { recursive: true });
    }
  }

  private getCollectionPath(collectionName: string): string {
    return path.join(this.basePath, collectionName);
  }

  private ensureCollectionPath(collectionName: string): void {
    const collectionPath = this.getCollectionPath(collectionName);
    if (!fs.existsSync(collectionPath)) {
      fs.mkdirSync(collectionPath, { recursive: true });
    }
  }

  private loadCollection(collectionName: string): FSCollection {
    const collectionPath = this.getCollectionPath(collectionName);
    const documents = new Map<string, FSDocument>();

    if (fs.existsSync(collectionPath)) {
      const files = fs.readdirSync(collectionPath);
      for (const file of files) {
        if (file.endsWith('.json')) {
          try {
            const filePath = path.join(collectionPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const document = JSON.parse(content);
            documents.set(document.id, {
              ...document,
              createdAt: new Date(document.createdAt),
              updatedAt: new Date(document.updatedAt)
            });
          } catch (error) {
            console.error(`Error loading document ${file}:`, error);
          }
        }
      }
    }

    const collection: FSCollection = {
      name: collectionName,
      path: collectionPath,
      documents
    };

    this.collections.set(collectionName, collection);
    return collection;
  }

  private saveDocument(collectionName: string, document: FSDocument): void {
    const collection = this.collections.get(collectionName) || this.loadCollection(collectionName);
    this.ensureCollectionPath(collectionName);
    
    const filePath = path.join(collection.path, `${document.id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(document, null, 2));
    
    collection.documents.set(document.id, document);
  }

  async create(collectionName: string, data: any, id?: string): Promise<FSDocument> {
    const documentId = id || `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date();
    
    const document: FSDocument = {
      id: documentId,
      data,
      createdAt: now,
      updatedAt: now,
      version: 1
    };

    this.saveDocument(collectionName, document);
    return document;
  }

  async read(collectionName: string, id: string): Promise<FSDocument | null> {
    const collection = this.collections.get(collectionName) || this.loadCollection(collectionName);
    return collection.documents.get(id) || null;
  }

  async update(collectionName: string, id: string, data: any): Promise<FSDocument | null> {
    const collection = this.collections.get(collectionName) || this.loadCollection(collectionName);
    const existingDoc = collection.documents.get(id);
    
    if (!existingDoc) return null;

    const updatedDoc: FSDocument = {
      ...existingDoc,
      data: { ...existingDoc.data, ...data },
      updatedAt: new Date(),
      version: existingDoc.version + 1
    };

    this.saveDocument(collectionName, updatedDoc);
    return updatedDoc;
  }

  async delete(collectionName: string, id: string): Promise<boolean> {
    const collection = this.collections.get(collectionName) || this.loadCollection(collectionName);
    const document = collection.documents.get(id);
    
    if (!document) return false;

    const filePath = path.join(collection.path, `${id}.json`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    collection.documents.delete(id);
    return true;
  }

  async list(collectionName: string, filter?: (doc: FSDocument) => boolean): Promise<FSDocument[]> {
    const collection = this.collections.get(collectionName) || this.loadCollection(collectionName);
    const documents = Array.from(collection.documents.values());
    
    if (filter) {
      return documents.filter(filter);
    }
    
    return documents;
  }

  async find(collectionName: string, query: any): Promise<FSDocument[]> {
    const collection = this.collections.get(collectionName) || this.loadCollection(collectionName);
    const documents = Array.from(collection.documents.values());
    
    return documents.filter(doc => {
      for (const [key, value] of Object.entries(query)) {
        if (doc.data[key] !== value) {
          return false;
        }
      }
      return true;
    });
  }

  async count(collectionName: string): Promise<number> {
    const collection = this.collections.get(collectionName) || this.loadCollection(collectionName);
    return collection.documents.size;
  }

  async clear(collectionName: string): Promise<void> {
    const collection = this.collections.get(collectionName) || this.loadCollection(collectionName);
    
    // Delete all files
    for (const [id] of collection.documents) {
      const filePath = path.join(collection.path, `${id}.json`);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    
    collection.documents.clear();
  }

  getCollectionNames(): string[] {
    return Array.from(this.collections.keys());
  }
}

// Singleton instance
export const fsdb = new FSDatabase();

// Utility functions
export function createFSDatabase(basePath?: string): FSDatabase {
  return new FSDatabase(basePath);
}

export function generateId(): string {
  return `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
export function write_json < T>(file_path: string, data: T): void {
  try {
    const fs = require ('fs');
    const path = require ('path');
    const dir = path.dirname (file_path),
    if () {) {
  $2
}
      fs.mkdir_sync (dir, { recursive: true });
    }
    fs.writeFileSync (file_path, JSON.stringify (data, null, 2));
  } catch (error) {
    console.error ('Error writing file:', error);
  }
}
export async function create_dispute (dispute: DisputeCase): Promise < void> {
  const all = await readAllDisputes ();
  all.push (dispute);
  await writeAllDisputes (all);
}
export function getDisputeUploadDir (case_id: string): string {
  return path.join (UPLOADS_ROOT, case_id);
}
export async function ensureDisputeUploadDir (case_id: string): Promise < string> {
  const dir = getDisputeUploadDir (case_id);
  await mkdir (dir, { recursive: true });
  return dir;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
