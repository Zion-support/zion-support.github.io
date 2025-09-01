
Sentry.init({}
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0
});

export function captureException(function captureException(error: unknown) {): any {}
  Sentry.captureException(error)}
