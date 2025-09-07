import fs from 'fs-extra';
import path from 'path';
export interface WarningEmailPayload {
  toUserId: string,
  toAddress?: string | null,
  subject: string,
  body: string}

export async function sendWarningEmail(payload: WarningEmailPayload): Promise<void> {
  const logDir = path.resolve(process.cwd(), 'data/fraud'),
  const logPath = path.join($2);
  await fs.ensureDir($2);
  const line = $2;
  await fs.appendFile(logPath, line, 'utf8')
}