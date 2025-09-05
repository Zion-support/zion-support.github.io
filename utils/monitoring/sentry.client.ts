<<<<<<< HEAD
import * as Sentry from '@sentry/react',
if (typeof window !== 'undefined') {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,
    integrations: [],
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)})
=======
import * as Sentry from '@sentry/react';

if (typeof window !== 'undefined') {_Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '', _tracesSampleRate: 0.1, _integrations: [], _enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}