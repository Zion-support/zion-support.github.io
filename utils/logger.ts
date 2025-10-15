export const logger = {
  info: (message: string, ...args: any[]): void => {
    console.log(`[INFO] ${message}`, ...args);
  },

  log: (message: string, ...args: any[]): void => {
    if (logger.shouldLog()) {
      console.log(logger.formatMessage('log', message), ...args);
    }
  },

  error: (message: string, ...args: any[]): void => {
    console.error(`[ERROR] ${message}`, ...args);
  },

  debug: (message: string, ...args: any[]): void => {
    console.debug(`[DEBUG] ${message}`, ...args);
  },

  warn: (message: string, ...args: any[]): void => {
    console.warn(`[WARN] ${message}`, ...args);
  },

  shouldLog(): boolean {
    return process.env.NODE_ENV === 'development' || 
           (typeof window !== 'undefined' && window.localStorage?.getItem('debug') === 'true');
  },

  formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  },

  group: (label: string): void => {
    console.group(label);
  },

  groupEnd: (): void => {
    console.groupEnd();
  },

  table: (data: any): void => {
    console.table(data);
  },

  time: (label: string): void => {
    console.time(label);
  },

  timeEnd: (label: string): void => {
    console.timeEnd(label);
  }
};