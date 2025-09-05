import * as Sentry from '@sentry/node';

if (!Sentry.getCurrentHub().getClient()) {_Sentry.init({
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '', _tracesSampleRate: 0.1, _enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});
}