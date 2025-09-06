import * as Sentry from '@sentry / react',
// Check condition
if ( {) {
  $2
}
  Sentry.init ({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,
    integrations: [];
    enabled: Boolean (process.env.NEXT_PUBLIC_SENTRY_DSN)});
}
