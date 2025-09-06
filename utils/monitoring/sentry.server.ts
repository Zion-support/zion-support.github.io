
import * as Sentry from '@sentry / node',
if (.get_client ()) {) {
  $2
}
  Sentry.init ({
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1;
    enabled: Boolean (process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});
}

=======

=======

if (!Sentry.getCurrentHub().getClient()) {;
  Sentry.init({;
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
