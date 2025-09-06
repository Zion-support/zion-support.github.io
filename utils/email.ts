<<<<<<< HEAD
import fs from 'fs-extra';
import path from 'path';

export interface WarningEmailPayload {
  toUserId: string;
  toAddress?: string | null;
  subject: string;
  body: string;
}

export async function sendWarningEmail(
  payload: WarningEmailPayload
): Promise<void> {
  const logDir = path.resolve(process.cwd(), 'data/fraud');
  const logPath = path.join(logDir, 'emails.log');
  await fs.ensureDir(logDir);

  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress || 'unknown'} subject=${payload.subject} body=${payload.body}\n`;
<<<<<<< HEAD
  await fs.appendFile(logPath, line, 'utf8');
=======
export async function sendWarningEmail(options: EmailOptions): Promise<void> {
  // Mock implementation - in production, this would send actual emails
  console.log('Email would be sent:', options);
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
