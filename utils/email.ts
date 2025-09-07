subject: string;
  html: string;
  text: string;
}

  to: string;
  subject: string;
  body: string;
}

export async function sendWarningEmail(
<<<<<<< HEAD
  to: string,
  subject: string,
  message: string,
  priority: 'low' | 'normal' | 'high' = 'normal'
): Promise<EmailResult> {
  return emailManager.sendEmail({
    to,
      <h3>${subject}</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>This is an automated warning from Zion Tech Group security system.</small></p>
    </div>`,
    priority
  });
}

// Utility functions
export function createEmailTemplate(
  id: string,
  name: string,
  subject: string,
  html: string,
  text: string,
  variables: string[] = [],
  category: EmailTemplate['category'] = 'transactional'
): EmailTemplate {
  return {
    id,
    name,
    subject,
    html,
    text,
    variables,
    category
  };
}

export function isValidEmail(email: string): boolean {
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
  await fs.appendFile(logPath, line, 'utf8')
export async function sendWarningEmail(payload: WarningEmailPayload): Promise<void> {
  const logDir = path.resolve(process.cwd(), 'data/fraud'),
  const logPath = path.join($2);
  await fs.ensureDir($2);
  const line = $2;
  await fs.appendFile(logPath, line, 'utf8')
}
=======
  payload: WarningEmailPayload
): Promise<void> {
  const logDir = path.resolve(process.cwd(), 'data/fraud');
  const logPath = path.join(logDir, 'emails.log');
  await fs.ensureDir(logDir);
  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress |'unknown'} subject=${payload.subject} body=${payload.body}\n`;
  await fs.appendFile(logPath, line, 'utf8');
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
