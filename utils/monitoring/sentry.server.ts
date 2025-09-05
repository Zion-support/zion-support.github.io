<<<<<<< HEAD
import * as Sentry from '@sentry/node',;
;
if (!Sentry.getCurrentHub().getClient()) {;
  Sentry.init({;
    dsn:process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate:0.1,;
    enabled:Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)}),;
}
=======
import * as Sentry from '@sentry/node',
if (!Sentry.getCurrentHub().getClient()) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)})}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
