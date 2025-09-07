<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import * as Sentry from '@sentry/react';
if (typeof window !== 'undefined') {;
  Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '';
=======







if (typeof window !== 'undefined') {Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN |'';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    tracesSampleRate: 0.1;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
if (typeof window !== 'undefined') {Sentry.init({;
=======


if (typeof window !== 'undefined') {Sentry.init({;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});'
import * as Sentry from '@sentry/react',;'
import * as Sentry from '@sentry/react';

<<<<<<< HEAD
<<<<<<< HEAD
=======



'
import * as Sentry from '@sentry / react',;
// Check condition;
if ( {) {}
  $2;
}
  Sentry.init ({'
=======





import * as Sentry from '@sentry / react',
// Check condition
if ( {) {
  $2
}
  Sentry.init ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,

    integrations: [];
    enabled: Boolean (process.env.NEXT_PUBLIC_SENTRY_DSN)});
}


<<<<<<< HEAD





'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import * as Sentry from '@sentry/react';
if (typeof window !== 'undefined') {Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN |'';
    tracesSampleRate: 0.1;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
import * as Sentry from '@sentry/react',;
import * as Sentry from '@sentry/react';


<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
if (typeof window !== 'undefined') {;
  Sentry.init({;'
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',;
    tracesSampleRate: 0.1,;
    integrations: [];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});



}


  } catch (error) {}
    console.error("Error:", error);"
=======
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});



if (typeof window !== 'undefined') {Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN |;',
  tracesSampleRate: 0.1;
    integrations: [];,)
  enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
import * as Sentry from '@sentry/react',;
import * as Sentry from '@sentry/react';
import * as Sentry from '@sentry / react',;
// Check condition;
if ( {) {
  $2;
}




}



}

  Sentry.init ({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || ,
    tracesSampleRate: 0.1,

  enabled: Boolean (process.env.NEXT_PUBLIC_SENTRY_DSN)});


if (typeof window !== 'undefined') {;
  Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || ,;
    tracesSampleRate: 0.1,;


  } catch (error) {
<<<<<<< HEAD
    console.error("Error:", error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status(500).json({ error: "Internal server error" });
=======
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
    integrations: [];,
"
pr-12325
// Mock Sentry client implementation
export interface SentryOptions {
  dsn?: string;
  environment?: string;
  release?: string;
  tracesSampleRate?: number;
}

class MockSentryClient {
  private options: SentryOptions = {};

  init(options: SentryOptions): void {
    this.options = { ...this.options, ...options };
    console.log('Sentry initialized with options:', options);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }

  captureException(error: Error, context?: any): string {
    console.error('Sentry captured exception:', error, context);
    return Math.random().toString(36).substr(2, 9);
  }

  captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info', context?: any): string {
    console.log(`Sentry captured message [${level}]:`, message, context);
    return Math.random().toString(36).substr(2, 9);
  }

  setUser(user: { id?: string; email?: string; username?: string }): void {
    console.log('Sentry set user:', user);
  }

  setTag(key: string, value: string): void {
    console.log(`Sentry set tag: ${key} = ${value}`);
  }

  setContext(key: string, context: any): void {
    console.log(`Sentry set context: ${key}`, context);
  }
}
}




}



import * as Sentry from '@sentry/react';
if (typeof window !== 'undefined') {;
  Sentry.init({;
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '';
    tracesSampleRate: 0.1;
    integrations: [];
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});

export const Sentry = new MockSentryClient();

export function initSentry(options: SentryOptions): void {
  Sentry.init(options);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

export function captureException(error: Error, context?: any): string {
  return Sentry.captureException(error, context);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export function captureMessage(message: string, level?: 'info' | 'warning' | 'error', context?: any): string {
  return Sentry.captureMessage(message, level, context);
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
