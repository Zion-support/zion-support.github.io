export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export interface EmailOptions {
  to: string;
  from?: string;
  template: EmailTemplate;
  variables?: Record<string, string>;
}

export function sendEmail(options: EmailOptions): Promise<void> {
  // Mock implementation - replace with actual email service
  console.log('Sending email:', {
    to: options.to,
    subject: options.template.subject,
    from: options.from || 'noreply@ziontechgroup.com'
  });
  
  return Promise.resolve();
}

export function createEmailTemplate(
  subject: string,
  html: string,
  text: string
): EmailTemplate {
  return { subject, html, text };
}