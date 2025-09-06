/**
 * Sentry mock for development and testing
 * Provides no-op implementations of Sentry functions
 */

interface SentryMock {
  captureException: (error: Error, context?: any) => void;
  captureMessage: (message: string, level?: string) => void;
  addBreadcrumb: (breadcrumb: any) => void;
  setContext: (key: string, context: any) => void;
  setUser: (user: any) => void;
  setTag: (key: string, value: string) => void;
  configureScope: (callback: (scope: any) => void) => void;
  withScope: (callback: (scope: any) => void) => void;
}

const mockSentry: SentryMock = {
  captureException: (error: Error, context?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Sentry mock - Exception:', error, context);
    }
  },
  captureMessage: (message: string, level?: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Sentry mock - Message (${level || 'info'}):`, message);
    }
  },
  addBreadcrumb: (breadcrumb: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Sentry mock - Breadcrumb:', breadcrumb);
    }
  },
  setContext: (key: string, context: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Sentry mock - Context ${key}:`, context);
    }
  },
  setUser: (user: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Sentry mock - User:', user);
    }
  },
  setTag: (key: string, value: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Sentry mock - Tag ${key}:`, value);
    }
  },
  configureScope: (callback: (scope: any) => void) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Sentry mock - Configure scope');
      callback({});
    }
  },
  withScope: (callback: (scope: any) => void) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Sentry mock - With scope');
      callback({});
    }
  }
};

export default mockSentry;