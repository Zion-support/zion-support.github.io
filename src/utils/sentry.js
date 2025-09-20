let nodeSentry;
try {
    // Optional dependency for server-side logging
    nodeSentry = require('@sentry/node');
}
catch {
    nodeSentry = null;
}
export function captureException(error) {
    if (process.env.NODE_ENV === 'development') {
        if (typeof console !== 'undefined') {
            console.error(error);
        }
    }
    else {
        if (typeof window !== 'undefined' && window.Sentry?.captureException) {
            window.Sentry.captureException(error);
        }
        else if (nodeSentry?.captureException) {
            nodeSentry.captureException(error);
        }
    }
}
