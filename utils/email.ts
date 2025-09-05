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
}