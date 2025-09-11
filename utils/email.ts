

export interface WarningEmailPayload {
  toUserId: string;
  to_address?: string | null;
  subject: string;
  body: string;
}


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}


=======
  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress |'unknown'} subject=${payload.subject} body=${payload.body}\n`;
  await fs.appendFile(logPath, line, 'utf8');
=======
// Email utilities
export interface EmailConfig {
  provider: 'smtp' | 'sendgrid' | 'ses' | 'mailgun' | 'nodemailer';
  apiKey?: string;
  fromEmail: string;
  fromName: string;
  replyTo?: string;
  smtp?: {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
  };

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


export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
  provider?: string;
  timestamp: string;
}

export function createEmailTemplate(template: EmailTemplate, variables: Record<string, string>): EmailOptions {
  let html = template.html;
  let text = template.text;
  let subject = template.subject;

  // Replace variables in template
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    html = html.replace(regex, value);
    text = text.replace(regex, value);
    subject = subject.replace(regex, value);
  });

  return {
    to: variables.to || '',
    subject,
    html,
    text
  };
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function formatEmailList(emails: string | string[]): string {
  return Array.isArray(emails) ? emails.join(', ') : emails;
}

// Common email templates
export const COMMON_TEMPLATES = {
  WELCOME: 'welcome',
  PASSWORD_RESET: 'password_reset',
  ACCOUNT_VERIFICATION: 'account_verification',
  FRAUD_ALERT: 'fraud_alert',
  PAYMENT_CONFIRMATION: 'payment_confirmation',
  SECURITY_NOTIFICATION: 'security_notification'
};

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
