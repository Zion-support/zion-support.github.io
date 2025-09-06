export interface EmailOptions {
  to: string;
  subject: string;
  body: string;
}

export async function sendWarningEmail(options: EmailOptions): Promise<void> {
  // Mock implementation - in production, this would send actual emails
  console.log('Email would be sent:', options);
}