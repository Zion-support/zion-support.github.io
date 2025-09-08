import fs from 'fs-extra';
import path from 'path';
export interface WarningEmailPayload {
  toUserId: string,
  toAddress?: string | null,
  subject: string,
  body: string}

}export async function sendEmail(options: EmailOptions): Promise<void> {// Mock implementation - in production, this would send actual emails;
  console.log('Email would be sent:', options)export async function sendEmail(options: EmailOptions): Promise<void> {// Mock implementation - in production, this would send actual emails;
  console.log('Email would be sent:', options)}
  const logDir = path && path.resolve(process && process.cwd(), 'data/fraud')const logPath = path && path.join(logDir, 'emails && emails.log')await fs && fs.ensureDir(logDir)const line = `[${new Date().toISOString()}] toUserId=${payload && payload.toUserId} to=${payload && payload.toAddress || 'unknown'} subject=${payload && payload.subject} body=${payload && payload.body}\n`;
  await fs && fs.appendFile(logPath, line, 'utf8')export async function sendWarningEmail(options: EmailOptions): Promise<void> {// Mock implementation - in production, this would send actual emails;
  console && console.log('Email would be sent:', options)}export interface EmailResult  {success: boolean;
}
export async function sendEmail(options: EmailOptions): Promise<void> {
  // Mock implementation - in production, this would send actual emails
  console.log('Email would be sent:', options);
}
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

class EmailManager {
  private config: EmailConfig;
  private templates: Map<string, EmailTemplate> = new Map();

  constructor() {
    this.config = {
      provider: 'nodemailer',
      fromEmail: process.env.FROM_EMAIL || 'noreply@ziontechgroup.com',
      fromName: process.env.FROM_NAME || 'Zion Tech Group',
      replyTo: process.env.REPLY_TO_EMAIL,
      apiKey: process.env.EMAIL_API_KEY,
      smtp: {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER || '',
          pass: process.env.SMTP_PASS || ''
        }
      }
    };
  }

  // Send email
  async sendEmail(message: EmailMessage): Promise<EmailResult> {
    try {
      // Validate email addresses
      if (!this.validateEmailAddresses(message.to)) {
        return {
          success: false,
          error: 'Invalid email addresses',
          timestamp: new Date().toISOString()
        };
      }

      // Process template if specified
      if (message.templateId) {
        const processedMessage = await this.processTemplate(message);
        if (!processedMessage) {
          return {
            success: false,
            error: 'Template not found or processing failed',
            timestamp: new Date().toISOString()
          };
        }
        message = processedMessage;
      }

      // Send based on provider
      const result = await this.sendViaProvider(message);
      
      return {
        success: true,
        messageId: result.messageId,
        provider: this.config.provider,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Email send error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      };
    }
  }

  private async sendViaProvider(message: EmailMessage): Promise<{ messageId: string }> {
    switch (this.config.provider) {
      case 'sendgrid':
        return this.sendViaSendGrid(message);
      case 'ses':
        return this.sendViaSES(message);
      case 'mailgun':
        return this.sendViaMailgun(message);
      case 'smtp':
      case 'nodemailer':
      default:
        return this.sendViaSMTP(message);
    }
  }

  private async sendViaSMTP(message: EmailMessage): Promise<{ messageId: string }> {
    const nodemailer = await import('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      host: this.config.smtp!.host,
      port: this.config.smtp!.port,
      secure: this.config.smtp!.secure,
      auth: this.config.smtp!.auth
    });

    const mailOptions = {
      from: `${this.config.fromName} <${this.config.fromEmail}>`,
      to: Array.isArray(message.to) ? message.to.join(', ') : message.to,
      cc: message.cc ? (Array.isArray(message.cc) ? message.cc.join(', ') : message.cc) : undefined,
      bcc: message.bcc ? (Array.isArray(message.bcc) ? message.bcc.join(', ') : message.bcc) : undefined,
      subject: message.subject,
      text: message.text,
      html: message.html,
      attachments: message.attachments,
      headers: message.headers
    };

    const info = await transporter.sendMail(mailOptions);
    return { messageId: info.messageId };
  }

  private async sendViaSendGrid(message: EmailMessage): Promise<{ messageId: string }> {
    const sgMail = await import('@sendgrid/mail');
    sgMail.setApiKey(this.config.apiKey!);

    const msg = {
      to: message.to,
      from: {
        email: this.config.fromEmail,
        name: this.config.fromName
      },
      replyTo: this.config.replyTo,
      subject: message.subject,
      text: message.text,
      html: message.html,
      attachments: message.attachments,
      headers: message.headers
    };

    const response = await sgMail.send(msg);
    return { messageId: response[0].headers['x-message-id'] as string };
  }

  private async sendViaSES(message: EmailMessage): Promise<{ messageId: string }> {
    const AWS = await import('aws-sdk');
    const ses = new AWS.SES({
      region: process.env.AWS_REGION || 'us-east-1',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    const params = {
      Destination: {
        ToAddresses: Array.isArray(message.to) ? message.to : [message.to],
        CcAddresses: message.cc ? (Array.isArray(message.cc) ? message.cc : [message.cc]) : undefined,
        BccAddresses: message.bcc ? (Array.isArray(message.bcc) ? message.bcc : [message.bcc]) : undefined
      },
      Message: {
        Body: {
          Html: message.html ? { Data: message.html, Charset: 'UTF-8' } : undefined,
          Text: message.text ? { Data: message.text, Charset: 'UTF-8' } : undefined
        },
        Subject: { Data: message.subject, Charset: 'UTF-8' }
      },
      Source: `${this.config.fromName} <${this.config.fromEmail}>`,
      ReplyToAddresses: this.config.replyTo ? [this.config.replyTo] : undefined
    };

    const result = await ses.sendEmail(params).promise();
    return { messageId: result.MessageId };
  }

  private async sendViaMailgun(message: EmailMessage): Promise<{ messageId: string }> {
    const formData = new FormData();
    formData.append('from', `${this.config.fromName} <${this.config.fromEmail}>`);
    formData.append('to', Array.isArray(message.to) ? message.to.join(', ') : message.to);
    if (message.cc) {
      formData.append('cc', Array.isArray(message.cc) ? message.cc.join(', ') : message.cc);
    }
    if (message.bcc) {
      formData.append('bcc', Array.isArray(message.bcc) ? message.bcc.join(', ') : message.bcc);
    }
    formData.append('subject', message.subject);
    if (message.text) formData.append('text', message.text);
    if (message.html) formData.append('html', message.html);

    const response = await fetch(`https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${this.config.apiKey}`).toString('base64')}`
      },
      body: formData
    });

    const result = await response.json();
    return { messageId: result.id };
  }

  // Template management
  async addTemplate(template: EmailTemplate): Promise<void> {
    this.templates.set(template.id, template);
  }

  async getTemplate(id: string): Promise<EmailTemplate | null> {
    return this.templates.get(id) || null;
  }

  async removeTemplate(id: string): Promise<boolean> {
    return this.templates.delete(id);
  }

  async listTemplates(): Promise<EmailTemplate[]> {
    return Array.from(this.templates.values());
  }

  private async processTemplate(message: EmailMessage): Promise<EmailMessage | null> {
    const template = this.templates.get(message.templateId!);
    if (!template) return null;

    const variables = message.variables || {};
    let subject = template.subject;
    let html = template.html;
    let text = template.text;

    // Replace variables in template
    for (const [key, value] of Object.entries(variables)) {
      const placeholder = `{${key}}`;
      subject = subject.replace(new RegExp(placeholder, 'g'), String(value));
      html = html.replace(new RegExp(placeholder, 'g'), String(value));
      text = text.replace(new RegExp(placeholder, 'g'), String(value));
    }

    return {
      ...message,
      subject,
      html: message.html || html,
      text: message.text || text
    };
  }

  // Validation
  private validateEmailAddresses(emails: string | string[]): boolean {
    const emailList = Array.isArray(emails) ? emails : [emails];
    return emailList.every(email => this.isValidEmail(email));
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Configuration
  async updateConfig(newConfig: Partial<EmailConfig>): Promise<void> {
    this.config = { ...this.config, ...newConfig };
  }

  async getConfig(): Promise<EmailConfig> {
    return { ...this.config };
  }
}

// Singleton instance
export const emailManager = new EmailManager();

// Main function for external use
export async function sendEmail(message: EmailMessage): Promise<EmailResult> {
  return emailManager.sendEmail(message);
}

// Warning email function
export async function sendWarningEmail(
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
