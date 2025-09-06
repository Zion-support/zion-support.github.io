import * as Sentry from '@sentry/node';
if (!Sentry.getCurrentHub().getClient()) {Sentry.init({;
    dsn: process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN)});
import * as Sentry from '@sentry/node',;
import * as Sentry from '@sentry/node';
if (!Sentry.getCurrentHub().getClient()) {;
  Sentry.init({;
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
