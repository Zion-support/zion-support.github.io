import { captureException } from './sentry';
export function withErrorLogging(handler) {
    return async (req, res) => {
        try {
            return await handler(req, res);
        }
        catch (err) {
            captureException(err?.stack ? err.stack : err);
            if (res && !res.headersSent) {
                res.statusCode = 500;
                if (typeof res.json === 'function') {
                    res.json({ error: 'Internal server error' });
                }
                else if (typeof res.end === 'function') {
                    res.end('Internal server error');
                }
            }
        }
    };
}
