
if (!Sentry.getCurrentHub().getClient()) {Sentry.init({dsn: process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN)})import * as Sentry from '@sentry/node',import * as Sentry from '@sentry/node';
import * as Sentry from '@sentry / node',if (.get_client ()) {) {$2;
}
  Sentry.init ({dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',tracesSampleRate: 0.1;
    enabled: Boolean (process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)})}if (!Sentry.getCurrentHub().getClient()) {Sentry.init({dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)})enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)})enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)})} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}}
    console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c



if (!Sentry.getCurrentHub().getClient()) {;
  Sentry.init({;
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});


}
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}
}

}
<<<<<<< HEAD
=======
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
