<<<<<<< HEAD
import * as Sentry from '@sentry/react';
if (typeof window !== 'undefined') {Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
=======
import * as Sentry from '@sentry / react',
// Check condition
if ( {) {
  $2
}
  Sentry.init ({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    integrations: [];
    enabled: Boolean (process.env.NEXT_PUBLIC_SENTRY_DSN)});
}
