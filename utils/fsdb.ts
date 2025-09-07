import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

const DATA_DIR = path.join(process.cwd(), 'data');
const UPLOADS_ROOT = path.join(process.cwd(), 'uploads');

export async function ensureDataDir(): Promise<void> {
  if (!fs.existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

export async function writeData(filename: string, data: any): Promise<void> {
  await ensureDataDir();
  const filepath = path.join(DATA_DIR, filename);
  await writeFile(filepath, JSON.stringify(data, null, 2));
}

export async function readData(filename: string): Promise<any> {
  const filepath = path.join(DATA_DIR, filename);
  try {
    const content = await readFile(filepath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

export async function createDispute(dispute: any): Promise<void> {
  const disputes = await readData('disputes.json') || [];
  disputes.push(dispute);
  await writeData('disputes.json', disputes);
}

export async function readAllDisputes(): Promise<any[]> {
  return await readData('disputes.json') || [];
}

export function generateCaseId(): string {
  return 'CASE-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

export function getDisputeUploadDir(caseId: string): string {
  return path.join(UPLOADS_ROOT, caseId);
}
