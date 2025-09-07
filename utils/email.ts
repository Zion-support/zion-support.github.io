// Email utilities
export interface EmailConfig {
  from: string;
  to: string;
  subject: string;
  body: string;
  html?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
    contentType: string;
  }>;
}

export interface EmailProvider {
  name: string;
  sendEmail: (config: EmailConfig) => Promise<boolean>;
}

// Mock email provider for development
class MockEmailProvider implements EmailProvider {
  name = 'mock';
  
  async sendEmail(config: EmailConfig): Promise<boolean> {
    console.log('Mock email sent:', {
      from: config.from,
      to: config.to,
      subject: config.subject,
      body: config.body
    });
    return true;
  }
}

// SendGrid provider
class SendGridProvider implements EmailProvider {
  name = 'sendgrid';
  
  async sendEmail(config: EmailConfig): Promise<boolean> {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return false;
    }

    try {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: config.to,
        from: config.from,
        subject: config.subject,
        text: config.body,
        html: config.html || config.body
      };

      await sgMail.send(msg);
      return true;
    } catch (error) {
      console.error('SendGrid email failed:', error);
      return false;
    }
  }
}

// SMTP provider
class SMTPProvider implements EmailProvider {
  name = 'smtp';
  
  async sendEmail(config: EmailConfig): Promise<boolean> {
    if (!process.env.SMTP_HOST) {
      console.error('SMTP configuration missing');
      return false;
    }

    try {
      const nodemailer = require('nodemailer');
      
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      const mailOptions = {
        from: config.from,
        to: config.to,
        subject: config.subject,
        text: config.body,
        html: config.html || config.body,
        attachments: config.attachments
      };

      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('SMTP email failed:', error);
      return false;
    }
  }
}

// Email service
class EmailService {
  private providers: EmailProvider[] = [];
  private defaultProvider: EmailProvider;

  constructor() {
    // Initialize providers based on environment
    if (process.env.SENDGRID_API_KEY) {
      this.providers.push(new SendGridProvider());
    }
    
    if (process.env.SMTP_HOST) {
      this.providers.push(new SMTPProvider());
    }
    
    // Always add mock provider as fallback
    this.providers.push(new MockEmailProvider());
    
    this.defaultProvider = this.providers[0];
  }

  async sendEmail(config: EmailConfig): Promise<boolean> {
    // Try providers in order
    for (const provider of this.providers) {
      try {
        const success = await provider.sendEmail(config);
        if (success) {
          console.log(`Email sent via ${provider.name}`);
          return true;
        }
      } catch (error) {
        console.error(`Email failed via ${provider.name}:`, error);
      }
    }
    
    console.error('All email providers failed');
    return false;
  }

  async sendWarningEmail(params: {
    toUserId: string;
    subject: string;
    body: string;
  }): Promise<boolean> {
    // In a real implementation, you'd look up the user's email
    const config: EmailConfig = {
      from: process.env.FROM_EMAIL || 'noreply@ziontechgroup.com',
      to: `user-${params.toUserId}@example.com`, // Placeholder
      subject: params.subject,
      body: params.body,
      html: `<p>${params.body.replace(/\n/g, '<br>')}</p>`
    };

    return this.sendEmail(config);
  }

  async sendNotificationEmail(params: {
    to: string;
    subject: string;
    body: string;
    html?: string;
  }): Promise<boolean> {
    const config: EmailConfig = {
      from: process.env.FROM_EMAIL || 'noreply@ziontechgroup.com',
      to: params.to,
      subject: params.subject,
      body: params.body,
      html: params.html || params.body
    };

    return this.sendEmail(config);
  }

  async sendBulkEmail(emails: EmailConfig[]): Promise<{ sent: number; failed: number }> {
    let sent = 0;
    let failed = 0;

    for (const email of emails) {
      const success = await this.sendEmail(email);
      if (success) {
        sent++;
      } else {
        failed++;
      }
    }

    return { sent, failed };
  }
}

export const emailService = new EmailService();

// Utility functions
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

export function extractDomain(email: string): string {
  const parts = email.split('@');
  return parts.length === 2 ? parts[1] : '';
}

export function isDisposableEmail(email: string): boolean {
  const disposableDomains = [
    '10minutemail.com',
    'tempmail.org',
    'guerrillamail.com',
    'mailinator.com',
    'throwaway.email'
  ];
  
  const domain = extractDomain(email);
  return disposableDomains.includes(domain);
}