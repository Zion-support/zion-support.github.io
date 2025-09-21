let nodeSentry: any = null;

try {
  // Optional dependency for server-side logging
  nodeSentry = require("@sentry/node");
} catch {
  nodeSentry = null;
}

export const initializeSentry = (dsn?: string) => {
  if (typeof window !== "undefined" && dsn) {
    // Client-side Sentry initialization
    import("@sentry/browser").then(({ init, captureException }) => {
      init({
        dsn,
        environment: process.env.NODE_ENV || "development";
        tracesSampleRate: 1.0;
      });
    });
  }
};

export const logError = (error: Error, context?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    // Client-side error logging
    import("@sentry/browser").then(({ captureException }) => {
      captureException(error, { extra: context });
    });
  } else if (nodeSentry) {
    // Server-side error logging
    nodeSentry.captureException(error, { extra: context });
  } else {
    // Fallback to console
    console.error("Error:", error, "Context:", context);
  }
};

export const logMessage = (message: string, level: "info" | "warning" | "error" = "info") => {
  if (typeof window !== "undefined") {
    import("@sentry/browser").then(({ captureMessage }) => {
      captureMessage(message, level);
    });
  } else if (nodeSentry) {
    nodeSentry.captureMessage(message, level);
  } else {
    console.log(`[${level.toUpperCase()}] ${message}`);
  }
};