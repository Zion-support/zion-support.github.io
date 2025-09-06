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