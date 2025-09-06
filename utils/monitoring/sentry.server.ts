<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as Sentry from '@sentry/node';
if (!Sentry.getCurrentHub().getClient()) {Sentry.init({;
    dsn: process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN)});
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as Sentry from '@sentry/node',;
import * as Sentry from '@sentry/node';
if (!Sentry.getCurrentHub().getClient()) {;
  Sentry.init({;
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1;
<<<<<<< HEAD
    enabled: Boolean (process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});
}

=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

if (!Sentry.getCurrentHub().getClient()) {;
  Sentry.init({;
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});

<<<<<<< HEAD
=======
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD

}
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
