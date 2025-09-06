import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import crypto from 'crypto';
import { DisputeCase } from '../types/disputes';

const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

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
  try {
    const fs = require('fs')
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);
  }
  return defaultValue;
}
export function writeJson<T>(filePath: string, data: T): void {
  try {
    const fs = require('fs');
    const path = require('path');
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing file:', error);
  }
}
export async function createDispute(dispute: DisputeCase): Promise<void> {
  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
}
export function getDisputeUploadDir(caseId: string): string {
  return path.join(UPLOADS_ROOT, caseId);
}
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
