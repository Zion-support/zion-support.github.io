tracesSampleRate: 0.1;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
}

if (typeof window !== 'undefined') {Sentry.init({;

    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});'
import * as Sentry from '@sentry/react',;'
import * as Sentry from '@sentry/react';

    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,

    integrations: [];
    enabled: Boolean (process.env.NEXT_PUBLIC_SENTRY_DSN)});
}

if (typeof window !== 'undefined') {;
  Sentry.init({;'
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1,;
    integrations: [];

    return res.status(500).json({ error: "Internal server error" });

  }

  captureException(error: Error, context?: any): string {
    console.error('Sentry captured exception:', error, context);
    return Math.random().toString(36).substr(2, 9);
  }

  captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info', context?: any): string {
    console.log(`Sentry captured message [${level}]:`, message, context);
    return Math.random().toString(36).substr(2, 9);
  }

  setUser(user: { id?: string; email?: string; username?: string }): void {
    console.log('Sentry set user:', user);
  }

  setTag(key: string, value: string): void {
    console.log(`Sentry set tag: ${key} = ${value}`);
  }

  setContext(key: string, context: any): void {
    console.log(`Sentry set context: ${key}`, context);
  }
}
}

}

import * as Sentry from '@sentry/react';
if (typeof window !== 'undefined') {;
  Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '';
    tracesSampleRate: 0.1;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});

export const Sentry = new MockSentryClient();

export function initSentry(options: SentryOptions): void {
  Sentry.init(options);
}

}

export function captureMessage(message: string, level?: 'info' | 'warning' | 'error', context?: any): string {
  return Sentry.captureMessage(message, level, context);
}