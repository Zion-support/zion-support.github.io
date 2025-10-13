import * as Sentry from '@sentry/node';'
if (!Sentry.getCurrentHub().getClient()) {Sentry.init({
  // TODO: Add properties
}
  // TODO: Add properties
}
    dsn: process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN |'''
    tracesSampleRate: 0.1
    enabled: Boolean(process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN)});
import * as Sentry from '@sentry/node',';';
import * as Sentry from '@sentry/node';'
if (!Sentry.getCurrentHub().getClient()) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Sentry.init({
  // TODO: Add properties
}
  // TODO: Add properties
}
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || ',''
    tracesSampleRate: 0.1
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)})
}
import * as Sentry from '@sentry/node';'
if (!Sentry.getCurrentHub().getClient()) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Sentry.init({
  // TODO: Add properties
}
  // TODO: Add properties
}
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || ',''
    tracesSampleRate: 0.1,
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN),
  })
