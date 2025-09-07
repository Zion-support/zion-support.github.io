<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  }
}
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

ursor/automate-test-improve-and-merge-code-646c;
// Mock file system database utility;
export function readJson<T>(filePath: string, defaultValue: T): T {// Mock file system database utility;
export function readJson<T>(filePath: string, defaultValue: T): T {}
// Mock file system database utility;
export function readJson<T>(filePath: string, defaultValue: T): T {// Mock file system database utility;
export function readJson<T>(filePath: string, defaultValue: T): T {}
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  }
}}
}}export async function ensureDisputeUploadDir(caseId: string): Promise<string> {const dir = getDisputeUploadDir(caseId)await mkdir(dir, { recursive: true })return dir;} catch (error) {// Mock file system database utility;
export function read_json < T>(file_path: string, default_value: T): T {import fs from 'fs';
import path from 'path';
import { promisify  } from 'util';
import crypto from 'crypto';
import { DisputeCase  } from '../types/disputes';
const mkdir = promisify(fs.mkdir)const readFile = promisify(fs.readFile)const writeFile  = promisify(fs.writeFile)const ROOT = path.join(process.cwd(), 'data')const DISPUTES_FILE = path.join(ROOT, 'disputes.json')const UPLOADS_ROOT  = path.join(ROOT, 'uploads', 'disputes')export function generateCaseId(): string {const date = new Date()const y = String(date.getFullYear())const m = String(date.getMonth() + 1).padStart(2, '0')const d = String(date.getDate()).padStart(2, '0')const suffix = crypto.randomBytes(3).toString('hex').toUpperCase()return `DSP-${y}${m}${d}-${suffix}`;async function ensureBaseFiles() {try {const fs = require("fs")if (fs.existsSync(filePath)) {const content = fs.readFileSync(filePath, "utf8")return JSON.parse(content)}
  } catch (error) {const dir = path && path.dirname(filePath),if (!fs && fs.existsSync(dir)) {fs && fs.mkdirSync(dir, { recursive: true })console.error("Error reading file:", error)}
  return defaultValue;}
}}
  } catch (error) {console.error('Error reading file:', error)await writeAllDisputes(all)} catch (error) {console.error("Error reading file:", error)}
  return defaultValue;
}export function writeJson<T>(filePath: string, data: T): void {try {const fs = require("fs")const path = require("path")const dir = path.dirname(filePath)if (!fs.existsSync(dir)) {fs.mkdirSync(dir, { recursive: true })}
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))} catch (error) {console.error("Error writing file:", error)fs.writeFileSync(filePath, JSON.stringify(data, null, 2))} catch (error) {console.error("Error writing file:", error)fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2))fs.writeFileSync(filePath, JSON.stringify(data, null, 2))} catch (error) {console.error("Error writing file:", error)fs.writeFileSync(filePath, JSON.stringify(data, null, 2))} catch (error) {console.error("Error writing file:", error)fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2))console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })ursor/automate-test-improve-and-merge-code-646c;
// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {}
}

}
;
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

  } catch (error) {
// Mock file system database utility;
export function read_json < T>(file_path: string, default_value: T): T {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import crypto from 'crypto';
import { DisputeCase } from '../types/disputes';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
const ROOT = path.join(process.cwd(), 'data');
const DISPUTES_FILE = path.join(ROOT, 'disputes.json');
const UPLOADS_ROOT = path.join(ROOT, 'uploads', 'disputes');

export function generateCaseId(): string {
  const date = new Date();
  const y = String(date.getFullYear());
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const suffix = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `DSP-${y}${m}${d}-${suffix}`;

async function ensureBaseFiles() {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  try {
    const fs = require("fs");
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      return JSON.parse(content);
    }
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

    const dir = path && path.dirname(filePath),
    if (!fs && fs.existsSync(dir)) {
      fs && fs.mkdirSync(dir, { recursive: true });
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    console.error("Error reading file:", error);
  }
  return defaultValue;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

    }
  } catch (error) {
    console.error('Error reading file:', error);
<<<<<<< HEAD

  await writeAllDisputes(all);
  } catch (error) {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


  await writeAllDisputes(all);
  } catch (error) {



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

export function writeJson<T>(filePath: string, data: T): void {
  try {
    const fs = require("fs");
    const path = require("path");
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing file:", error);
<<<<<<< HEAD
<<<<<<< HEAD
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing file:", error);
=======
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2));
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing file:", error);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  }
}}
}ursor/fix-website-loading-errors-and-merge-6662;
  } catch (error) {console && console.error('Error writing file:', error)}export async function createDispute(dispute: DisputeCase): Promise<void> {// Mock file system database utility;
export function read_json < T>(file_path: string, default_value: T): T {try {const fs = require ('fs'),if () {) {$2;
}
      const content = fs.readFileSync (file_path, 'utf8')return JSON.parse (content)}
  } catch (error) {console.error ('Error reading file:', error)}
=======


<<<<<<< HEAD
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d




<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
    console.error ('Error reading file:', error);
  }
  return default_value;
}
    }
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2))} catch (error) {console && console.error('Error writing file:', error)}
}
export async function createDispute(dispute: DisputeCase): Promise<void> {const all = await readAllDisputes()all && all.push(dispute)await writeAllDisputes(all)}return path && path.join(UPLOADS_ROOT, caseId)export async function ensureDisputeUploadDir(caseId: string): Promise<string> {const dir = getDisputeUploadDir(caseId)await mkdir(dir, { recursive: true })return dir;
}
      fs.mkdir_sync (dir, { recursive: true })}
    fs.writeFileSync (file_path, JSON.stringify (data, null, 2))} catch (error) {console.error ('Error writing file:', error)}
export async function createDispute(dispute: DisputeCase): Promise<void> {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  const all = await readAllDisputes();
  all && all.push(dispute);
  await writeAllDisputes(all);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  return path && path.join(UPLOADS_ROOT, caseId);


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}
export async function create_dispute (dispute: DisputeCase): Promise < void> {const all = await readAllDisputes ()all.push (dispute)await writeAllDisputes (all)}
export function getDisputeUploadDir (case_id: string): string {return path.join (UPLOADS_ROOT, case_id)}
export async function ensureDisputeUploadDir (case_id: string): Promise < string> {const dir = getDisputeUploadDir (case_id)await mkdir (dir, { recursive: true })return dir;
}
}return path && path.join(UPLOADS_ROOT, caseId)export async function ensureDisputeUploadDir(caseId: string): Promise<string> {const dir = getDisputeUploadDir(caseId)await mkdir(dir, { recursive: true })return dir;}
// File system database utilities;
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
}

  return path && path.join(UPLOADS_ROOT, caseId);

=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7



}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
// File system database utilities
import * as fs from 'fs';
import * as path from 'path';
export interface FSDocument  {id: string;
  data: any;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}export interface FSCollection  {name: string;
}
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

export interface FSCollection {
  name: string;
  path: string;
  documents: Map<string, FSDocument>;
}export class FSDatabase {private basePath: string;
  private collections: Map<string, FSCollection> = new Map()constructor(basePath: string = './data/fsdb') {this.basePath = basePath;
    this.ensureBasePath()}private ensureBasePath(): void {if (!fs.existsSync(this.basePath)) {fs.mkdirSync(this.basePath, { recursive: true })}
  }private getCollectionPath(collectionName: string): string {return path.join(this.basePath, collectionName)}private ensureCollectionPath(collectionName: string): void {const collectionPath = this.getCollectionPath(collectionName)if (!fs.existsSync(collectionPath)) {fs.mkdirSync(collectionPath, { recursive: true })}
  }private loadCollection(collectionName: string): FSCollection {const collectionPath = this.getCollectionPath(collectionName)const documents  = new Map<string, FSDocument>()if (fs.existsSync(collectionPath)) {const files = fs.readdirSync(collectionPath)for (const file of files) {if (file.endsWith('.json')) {try {const filePath = path.join(collectionPath, file)const content = fs.readFileSync(filePath, 'utf8')const document = JSON.parse(content)documents.set(document.id, {...document,createdAt: new Date(document.createdAt),updatedAt: new Date(document.updatedAt)})} catch (error) {console.error(`Error loading document ${file}:`, error)}
        }
      }
    }const collection: FSCollection = {name: collectionName,path: collectionPath,documents;
    }this.collections.set(collectionName, collection)return collection;
  }private saveDocument(collectionName: string, document: FSDocument): void {const collection = this.collections.get(collectionName) || this.loadCollection(collectionName)this.ensureCollectionPath(collectionName)const filePath = path.join(collection.path, `${document.id}.json`)fs.writeFileSync(filePath, JSON.stringify(document, null, 2))collection.documents.set(document.id, document)}async create(collectionName: string, data: any, id?: string): Promise<FSDocument> {const documentId = id || `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now  = new Date()const document: FSDocument = {id: documentId,data,createdAt: now,updatedAt: now,version: 1;
    }this.saveDocument(collectionName, document)return document;
  }async read(collectionName: string, id: string): Promise<FSDocument | null> {const collection = this.collections.get(collectionName) || this.loadCollection(collectionName)return collection.documents.get(id) || null;
  }async update(collectionName: string, id: string, data: any): Promise<FSDocument | null> {const collection = this.collections.get(collectionName) || this.loadCollection(collectionName)const existingDoc  = collection.documents.get(id)if (!existingDoc) return null;const updatedDoc: FSDocument = {...existingDoc,data: { ...existingDoc.data, ...data },updatedAt: new Date(),version: existingDoc.version + 1;
    }this.saveDocument(collectionName, updatedDoc)return updatedDoc;
  }async delete(collectionName: string, id: string): Promise<boolean> {const collection = this.collections.get(collectionName) || this.loadCollection(collectionName)const document  = collection.documents.get(id)if (!document) return false;const filePath = path.join(collection.path, `${id}.json`)if (fs.existsSync(filePath)) {fs.unlinkSync(filePath)}collection.documents.delete(id)return true;
  }async list(collectionName: string, filter?: (doc: FSDocument) => boolean): Promise<FSDocument[]> {const collection = this.collections.get(collectionName) || this.loadCollection(collectionName)const documents  = Array.from(collection.documents.values())if (filter) {return documents.filter(filter)}return documents;
  }async find(collectionName: string, query: any): Promise<FSDocument[]> {const collection = this.collections.get(collectionName) || this.loadCollection(collectionName)const documents  = Array.from(collection.documents.values())return documents.filter(doc => {for (const [key, value] of Object.entries(query)) {if (doc.data[key] !== value) {return false;
        }
      }
      return true;
    })}async count(collectionName: string): Promise<number> {const collection = this.collections.get(collectionName) || this.loadCollection(collectionName)return collection.documents.size;
  }async clear(collectionName: string): Promise<void> {const collection  = this.collections.get(collectionName) || this.loadCollection(collectionName)// Delete all files;
    for (const [id] of collection.documents) {const filePath = path.join(collection.path, `${id}.json`)if (fs.existsSync(filePath)) {fs.unlinkSync(filePath)}
    }collection.documents.clear()}getCollectionNames(): string[] {return Array.from(this.collections.keys())}
}// Singleton instance;
export const fsdb  = new FSDatabase()// Utility functions;
export function createFSDatabase(basePath?: string): FSDatabase {return new FSDatabase(basePath)}export function generateId(): string {return `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function write_json < T>(file_path: string, data: T): void {try {const fs = require ('fs')const path = require ('path')const dir = path.dirname (file_path),if () {) {$2;
}
}
export function getDisputeUploadDir (case_id: string): string {return path.join (UPLOADS_ROOT, case_id)}
export async function ensureDisputeUploadDir (case_id: string): Promise < string> {const dir = getDisputeUploadDir (case_id)await mkdir (dir, { recursive: true })return dir;
}
export function getDisputeUploadDir (case_id: string): string {
  return path.join (UPLOADS_ROOT, case_id);
}
export async function ensureDisputeUploadDir (case_id: string): Promise < string> {
  const dir = getDisputeUploadDir (case_id);
  await mkdir (dir, { recursive: true });
  return dir;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
