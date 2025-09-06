export interface EmailOptions {
  toUserId: string;
  subject: string;
  body: string;
  template?: string;
  variables?: Record<string, any>;
}

export async function sendWarningEmail(options: EmailOptions): Promise<boolean> {
  // Mock implementation - in a real app, this would send actual emails
  console.log('Sending warning email:', {
    to: options.toUserId,
    subject: options.subject,
    body: options.body
  });
  
  // Simulate email sending
  return true;
}

export async function sendNotificationEmail(options: EmailOptions): Promise<boolean> {
  // Mock implementation
  console.log('Sending notification email:', {
    to: options.toUserId,
    subject: options.subject,
    body: options.body
  });
  
  return true;
}

export async function sendSystemEmail(options: EmailOptions): Promise<boolean> {
  // Mock implementation
  console.log('Sending system email:', {
    to: options.toUserId,
    subject: options.subject,
    body: options.body
  });
  
  return true;
}