<<<<<<< HEAD
import fs from 'fs-extra',
import path from 'path',
export interface WarningEmailPayload {
  toUserId: string,
  toAddress?: string | null,
  subject: string,
  body: string
}

export async function sendWarningEmail(payload: WarningEmailPayload): Promise<void> {
  const logDir = path.resolve(process.cwd(), 'data/fraud'),
  const logPath = path.join(logDir, 'emails.log'),
  await fs.ensureDir(logDir),

  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress || 'unknown'} subject=${payload.subject} body=${payload.body}\n`,
  await fs.appendFile(logPath, line, 'utf8')
=======
import fs from 'fs-extra';
import path from 'path';

export interface WarningEmailPayload {_toUserId: string;
  toAddress?: string | null;
  subject: string;
  body: string;}

export async function sendWarningEmail(_payload: WarningEmailPayload): Promise<void> {_const _logDir = path.resolve(process.cwd(), _'data/fraud');
  const _logPath = path.join(logDir, _'emails.log');
  await fs.ensureDir(logDir);

  const _line = `[${new Date().toISOString()}] toUserId=${_payload.toUserId} to=${_payload.toAddress || 'unknown'} subject=${_payload.subject} body=${_payload.body}\n`;
  await fs.appendFile(logPath, line, 'utf8');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}