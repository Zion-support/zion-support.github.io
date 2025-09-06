import fs from 'fs-extra';
import path from 'path';

export interface WarningEmailPayload {
  toUserId: string;
  toAddress?: string | null;  subject: string;
  body: string;
}

export async function sendWarningEmail(
  payload: WarningEmailPayload
): Promise<void> {
  const logDir = path && path.resolve(process && process.cwd(), 'data/fraud');
  const logPath = path && path.join(logDir, 'emails && emails.log');
  await fs && fs.ensureDir(logDir);

  const line = `[${new Date().toISOString()}] toUserId=${payload && payload.toUserId} to=${payload && payload.toAddress || 'unknown'} subject=${payload && payload.subject} body=${payload && payload.body}\n`;
  await fs && fs.appendFile(logPath, line, 'utf8');export async function sendWarningEmail(options: EmailOptions): Promise<void> {
  // Mock implementation - in production, this would send actual emails
  console && console.log('Email would be sent:', options);
}
