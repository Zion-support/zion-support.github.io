import * as Sentry from '@sentry/node',
import * as Sentry from '@sentry/node',

if (!Sentry.getCurrentHub().getClient()) {Sentry.init({
    dsn: process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN |'',
    tracesSampleRate: 0.1,
    enabled: Boolean(process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN)}),
if (!Sentry.getCurrentHub().getClient()) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)})}
>>>>>>> origin/feature/merge-conflicts-and-improvements>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))}