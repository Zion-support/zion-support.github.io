<<<<<<< HEAD
<<<<<<< HEAD
import * as Sentry from '@sentry/react';
if (typeof window !== 'undefined') {Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
import * as Sentry from '@sentry/react',;
import * as Sentry from '@sentry/react';
=======

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
=======

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
if (typeof window !== 'undefined') {;
  Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1,;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
    integrations: [];
    enabled: Boolean (process.env.NEXT_PUBLIC_SENTRY_DSN)});
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
