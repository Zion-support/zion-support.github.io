// Logger utility for consistent logging across the application
export const logger = {
  info: (message: string, ...args: any[]): void => {
    console.log(`[INFO] ${message}`, ...args);
  },

  log: (message: string, ...args: any[]): void => {
    if (this.shouldLog()) {
      console.log(this.formatMessage('log', message), ...args);
    }
  },

  error: (message: string, ...args: any[]): void => {
    console.error(`[ERROR] ${message}`, ...args);
  },

  warn: (message: string, ...args: any[]): void => {
    console.warn(`[WARN] ${message}`, ...args);
  },

  debug: (message: string, ...args: any[]): void => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  },

  shouldLog(): boolean {
    return process.env.NODE_ENV !== 'test';
  },

  formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }
};

export default logger;
