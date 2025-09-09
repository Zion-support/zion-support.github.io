export const datadogLogs = {
  logger: {
    error: (_message: string, _context?: Record<string, unknown>) => undefined,
    warn: (_message: string, _context?: Record<string, unknown>) => undefined,
    info: (_message: string, _context?: Record<string, unknown>) => undefined,
    debug: (_message: string, _context?: Record<string, unknown>) => undefined,
  },
};

export default datadogLogs;

