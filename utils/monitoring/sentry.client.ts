<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as Sentry from '@sentry / react',
// Check condition
if ( {) {
  $2
}
  Sentry.init ({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,

    integrations: [];
    enabled: Boolean (process.env.NEXT_PUBLIC_SENTRY_DSN)});
}
<<<<<<< HEAD
=======

=======

=======


import * as Sentry from '@sentry/react';
if (typeof window !== 'undefined') {Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
import * as Sentry from '@sentry/react',;
import * as Sentry from '@sentry/react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
if (typeof window !== 'undefined') {;
  Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1,;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
<<<<<<< HEAD


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
