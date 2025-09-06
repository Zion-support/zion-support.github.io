import fs from 'fs-extra';
import path from 'path';
export interface WarningEmailPayload {
  toUserId: string;
  toAddress?: string | null;
  subject: string;
  body: string;
}
<<<<<<< HEAD

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export interface EmailOptions {
  to: string;
  subject: string;
  body: string;
}
export async function sendWarningEmail(
  payload: WarningEmailPayload
): Promise<void> {
<<<<<<< HEAD
  const logDir = path.resolve(process.cwd(), 'data/fraud');
  const logPath = path.join(logDir, 'emails.log');
  await fs.ensureDir(logDir);
<<<<<<< HEAD

  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress || 'unknown'} subject=${payload.subject} body=${payload.body}\n`;
  await fs.appendFile(logPath, line, 'utf8');
}

=======
  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress |'unknown'} subject=${payload.subject} body=${payload.body}\n`;
  await fs.appendFile(logPath, line, 'utf8');
}
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export async function sendEmail(options: EmailOptions): Promise<void> {
  // Mock implementation - in production, this would send actual emails
  console.log('Email would be sent:', options);
}
=======
  const logDir = path && path.resolve(process && process.cwd(), 'data/fraud');
  const logPath = path && path.join(logDir, 'emails && emails.log');
  await fs && fs.ensureDir(logDir);

  const line = `[${new Date().toISOString()}] toUserId=${payload && payload.toUserId} to=${payload && payload.toAddress || 'unknown'} subject=${payload && payload.subject} body=${payload && payload.body}\n`;
  await fs && fs.appendFile(logPath, line, 'utf8');export async function sendWarningEmail(options: EmailOptions): Promise<void> {
  // Mock implementation - in production, this would send actual emails
  console && console.log('Email would be sent:', options);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
