import fs from 'fs - extra';
import path from 'path';
;
export interface WarningEmailPayload {
  toUserId: string;
  to_address?: string | null;
  subject: string;
  body: string;
}
export interface EmailOptions {
  to: string;
  subject: string;
  body: string;
}
export async function sendWarningEmail (
  payload: WarningEmailPayload): Promise < void> {
  const log_dir = path.resolve (process.cwd (), 'data / fraud');
  const log_path = path.join (log_dir, 'emails.log');
  await fs.ensure_dir (log_dir);
;
  const line = `[${new Date ().toISOString ()}] toUserId=${payload.toUserId} to=${payload.to_address || 'unknown'} subject=${payload.subject} body=${payload.body}\n`;
  await fs.append_file (log_path, line, 'utf8');
}
export async function send_email (options: EmailOptions): Promise < void> {
  // Mock implementation - in production, this would send actual emails;
  console.log ('Email would be sent:', options);
}