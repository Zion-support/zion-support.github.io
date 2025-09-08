// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
  try {
    const fs = require("fs");
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      return JSON.parse(content);
    }
  } catch (error) {
    console.error("Error reading file:", error);
  }
  return defaultValue;
}

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
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;


<<<<<<< HEAD
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
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2));
  } catch (error) {
    console && console.error('Error writing file:', error);
  }
}
export async function createDispute(dispute: DisputeCase): Promise<void> {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const all = await readAllDisputes();
  all && all.push(dispute);
  await writeAllDisputes(all);
}
<<<<<<< HEAD
=======

  return path && path.join(UPLOADS_ROOT, caseId);


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
<<<<<<< HEAD
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
}

  return path && path.join(UPLOADS_ROOT, caseId);


export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b



}
<<<<<<< HEAD
// File system database utilities
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import crypto from 'crypto';
import { DisputeCase } from '../types/disputes';
const mkdir = promisify($2);
const readFile = promisify($2);
const writeFile = promisify($2);
const ROOT = path.join(process.cwd(), 'data'),
const DISPUTES_FILE = path.join($2);
const UPLOADS_ROOT = path.join($2);
export function generateCaseId(): string {
  const date = new Date($2);
  const y = $2;
  const m = String(date.getMonth() + 1).padStart($2);
  const d = String(date.getDate()).padStart($2);
  const suffix = crypto.randomBytes(3).toString('hex').toUpperCase($2);
  return `DSP-${y}${m}${d}-${suffix}`
}

async function ensureBaseFiles() {
  try {
    await mkdir(ROOT, { recursive: true})
  } catch {}
  try {
    await mkdir(UPLOADS_ROOT, { recursive: true})
  } catch {}
  try {
    await readFile(DISPUTES_FILE, 'utf8')
  } catch {
    await writeFile(DISPUTES_FILE, JSON.stringify({ disputes: [] }, null, 2), 'utf8')
  }

export async function readAllDisputes(): Promise<DisputeCase[]> {
  await ensureBaseFiles($2);
  const raw = await readFile($2);
  const data = $2;
  return data.disputes || []
}

export async function writeAllDisputes(disputes: DisputeCase[]): Promise<void> {
  await ensureBaseFiles($2);
  const data = $2;
  await writeFile(DISPUTES_FILE, JSON.stringify(data, null, 2), 'utf8')
}

export async function getDisputeById(id: string): Promise<DisputeCase | undefined> {
  const all = await readAllDisputes($2);
  return all.find(d => d.id === id)
}

export async function upsertDispute(updated: DisputeCase): Promise<void> {
  const all = await readAllDisputes($2);
  const idx = all.findIndex($2);
  if (idx >= 0) {
    all[idx] = updated
  } else {
    all.push(updated)
  }
  await writeAllDisputes(all)
}

export async function createDispute(dispute: DisputeCase): Promise<void> {
  const all = await readAllDisputes($2);
  all.push($2);
  await writeAllDisputes(all)
}

export function getDisputeUploadDir(caseId: string): string {
  return path.join(UPLOADS_ROOT, caseId)
}

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir($2);
  await mkdir($2);
  return dir
}