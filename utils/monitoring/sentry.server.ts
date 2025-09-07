<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import * as Sentry from '@sentry/node';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
if (!Sentry.getCurrentHub().getClient()) {Sentry.init({;
    dsn: process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN)});
import * as Sentry from '@sentry/node',;
import * as Sentry from '@sentry/node';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
import * as Sentry from '@sentry / node',
if (.get_client ()) {) {};
  $2;
=======
if (!Sentry.getCurrentHub().getClient()) {Sentry.init({;
    dsn: process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN |process.env.NEXT_PUBLIC_SENTRY_DSN)});
import * as Sentry from '@sentry/node',;
import * as Sentry from '@sentry/node';



import * as Sentry from '@sentry / node',;
if (.get_client ()) {) {
  $2
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
  Sentry.init ({'
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1;
    enabled: Boolean (process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934









>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
if (!Sentry.getCurrentHub().getClient()) {;
<<<<<<< HEAD
  Sentry.init({;
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '';
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
=======
  Sentry.init({;'
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }



}

<<<<<<< HEAD
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


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












if (!Sentry.getCurrentHub().getClient()) {;
  Sentry.init({;
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});


}


}
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}
}


import * as Sentry from '@sentry/node';
if (!Sentry.getCurrentHub().getClient()) {;
  Sentry.init({;
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '';
    tracesSampleRate: 0.1;
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  $2;
}
  Sentry.init ({
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || ,
    tracesSampleRate: 0.1;,)
  enabled: Boolean (process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});




if (!Sentry.getCurrentHub().getClient()) {;
  Sentry.init({;
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || ,;
  enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)});


  } catch (error) {
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"


"
pr-12325
// Mock Sentry server implementation
export interface SentryOptions {
  dsn?: string;
  environment?: string;
  release?: string;
  tracesSampleRate?: number;
}

class MockSentryServer {
  private options: SentryOptions = {};

  init(options: SentryOptions): void {
    this.options = { ...this.options, ...options };
    console.log('Sentry server initialized with options:', options);
  }

  captureException(error: Error, context?: any): string {
    console.error('Sentry server captured exception:', error, context);
    return Math.random().toString(36).substr(2, 9);
  }

  captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info', context?: any): string {
    console.log(`Sentry server captured message [${level}]:`, message, context);
    return Math.random().toString(36).substr(2, 9);
  }

  setUser(user: { id?: string; email?: string; username?: string }): void {
    console.log('Sentry server set user:', user);
  }

  setTag(key: string, value: string): void {
    console.log(`Sentry server set tag: ${key} = ${value}`);
  }

  setContext(key: string, context: any): void {
    console.log(`Sentry server set context: ${key}`, context);
  }

  withScope(callback: (scope: any) => void): void {
    const scope = {
      setUser: this.setUser.bind(this),
      setTag: this.setTag.bind(this),
      setContext: this.setContext.bind(this)
    };
    callback(scope);
  }
}

export const Sentry = new MockSentryServer();

export function initSentry(options: SentryOptions): void {
  Sentry.init(options);
}

export function captureException(error: Error, context?: any): string {
  return Sentry.captureException(error, context);
}

export function captureMessage(message: string, level?: 'info' | 'warning' | 'error', context?: any): string {
  return Sentry.captureMessage(message, level, context);
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
