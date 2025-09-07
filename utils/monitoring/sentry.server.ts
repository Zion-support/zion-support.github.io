// Mock Sentry server implementation
export interface SentryOptions {
  dsn?: string;
  environment?: string;
  release?: string;
  tracesSampleRate?: number;
}

class MockSentryServer {
  private options: SentryOptions = {};

  init(options: SentryOptions): void {
    this.options = { ...this.options, ...options };
    console.log('Sentry server initialized with options:', options);
  }

  captureException(error: Error, context?: any): string {
    console.error('Sentry server captured exception:', error, context);
    return Math.random().toString(36).substr(2, 9);
  }

  captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info', context?: any): string {
    console.log(`Sentry server captured message [${level}]:`, message, context);
    return Math.random().toString(36).substr(2, 9);
  }

  setUser(user: { id?: string; email?: string; username?: string }): void {
    console.log('Sentry server set user:', user);
  }

  setTag(key: string, value: string): void {
    console.log(`Sentry server set tag: ${key} = ${value}`);
  }

  setContext(key: string, context: any): void {
    console.log(`Sentry server set context: ${key}`, context);
  }

  withScope(callback: (scope: any) => void): void {
    const scope = {
      setUser: this.setUser.bind(this),
      setTag: this.setTag.bind(this),
      setContext: this.setContext.bind(this)
    };
    callback(scope);
  }
}

export const Sentry = new MockSentryServer();

export function initSentry(options: SentryOptions): void {
  Sentry.init(options);
}

export function captureException(error: Error, context?: any): string {
  return Sentry.captureException(error, context);
}

export function captureMessage(message: string, level?: 'info' | 'warning' | 'error', context?: any): string {
  return Sentry.captureMessage(message, level, context);
}