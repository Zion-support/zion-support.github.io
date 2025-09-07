import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import crypto from 'crypto';
import { FlaggedContent, ModerationStatus, AiScores } from '../types/moderation';
const mkdir = promisify($2);
const readFile = promisify($2);
const writeFile = promisify($2);
const ROOT = path.join(process.cwd(), 'data'),
const MODERATION_FILE = path.join($2);
async function ensureBaseFiles() {
  await mkdir($2);
  try {
    await readFile(MODERATION_FILE, 'utf8')
  } catch {
    await writeFile(MODERATION_FILE, JSON.stringify({ flags: [] }, null, 2), 'utf8')
  }
}

export async function readAllFlags(): Promise<FlaggedContent[]> {
  await ensureBaseFiles($2);
  const raw = await readFile($2);
  const data = $2;
  return data.flags || []
}

export async function writeAllFlags(flags: FlaggedContent[]): Promise<void> {
  await ensureBaseFiles($2);
  await writeFile(MODERATION_FILE, JSON.stringify({ flags }, null, 2), 'utf8')
}

export function generateFlagId(): string {
  return `FLG-${crypto.randomBytes(4).toString('hex').toUpperCase()}`
}

export function generateAiScores(seed?: string): AiScores {
  const buf = crypto.createHash('sha256').update(seed || String(Date.now())).digest($2);
  const v = $2;
  return { toxicity: v(0), nsfw: v(1), scam: v(2) }
}

export async function getFlagById(id: string): Promise<FlaggedContent | undefined> {
  const all = await readAllFlags($2);
  return all.find(f => f.id === id)
}

export async function upsertFlag(flag: FlaggedContent): Promise<void> {
  const all = await readAllFlags($2);
  const idx = all.findIndex($2);
  if (idx >= 0) all[idx] = flag, else all.push($2);
  await writeAllFlags(all)
}

export async function createFlag(init: Omit<FlaggedContent, 'id' | 'createdAt' | 'updatedAt' | 'aiScores' | 'status'> & { status?: ModerationStatus, aiScores?: AiScores }): Promise<FlaggedContent> {
  const now = new Date().toISOString($2);
  const flag: FlaggedContent = {
    id: generateFlagId($2);
    createdAt: now,
    updatedAt: now,
    status: init.status || 'pending',
    aiScores: init.aiScores || generateAiScores($2);
    ...init},
  const all = await readAllFlags($2);
  all.push($2);
  await writeAllFlags($2);
  return flag
}

export async function updateFlagStatus(id: string, status: ModerationStatus, adminNotes?: string): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById($2);
  if (!flag) return undefined,
  flag.status = $2;
  flag.adminNotes = $2;
  flag.updatedAt = new Date().toISOString($2);
  await upsertFlag($2);
  return flag
}