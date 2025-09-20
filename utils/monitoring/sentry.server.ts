}
,
import * as Sentry from '@sentry/node',
if (!Sentry.getCurrentHub().getClient()) {,
  Sentry.init({,
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)}),
}
,