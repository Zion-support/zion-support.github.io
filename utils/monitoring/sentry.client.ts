<<<<<<< HEAD
import * as Sentry from '@sentry/react',;
;
if (typeof window !== 'undefined') {;
  Sentry.init({;
    dsn:process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate:0.1,;
    integrations:[],;
    enabled:Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)}),;
}
=======
import * as Sentry from '@sentry/react',
if (typeof window !== 'undefined') {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,
    integrations: [],
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)})}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
