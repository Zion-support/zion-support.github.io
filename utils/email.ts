export interface WarningEmailPayload {
  toUserId: string;
  to_address?: string | null;
  subject: string;
  body: string;
}

export interface EmailOptions {
  to: string;

export async function sendEmail(options: EmailOptions): Promise<void> {
  // Mock implementation - in production, this would send actual emails
  console.log('Email would be sent:', options);
