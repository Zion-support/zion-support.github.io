interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
} as const;

type LogLevelType = typeof LOG_LEVELS[keyof typeof LOG_LEVELS];

class Logger {
  private isProduction: boolean;

  constructor() {
    this.isProduction = process.env.NODE_ENV === 'production';
  }

  private log(level: LogLevelType, message: string, ...args: any[]): void {
    if (this.isProduction && (level === 'debug')) {
      return; // Skip debug logs in production
    }

    switch (level) {
      case 'error':
        console.error(message, ...args);
        break;
      case 'warn':
        console.warn(message, ...args);
        break;
      case 'info':
        console.info(message, ...args);
        break;
      case 'debug':
        console.debug(message, ...args);
        break;
    }

    // In production, you might want to send logs to an external service
    if (this.isProduction && (level === 'error' || level === 'warn')) {
      this.sendToExternalService(level, message, ...args);
    }
  private sendToExternalService(level: LogLevelType, message: string, ...args: any[]): void {
    // This is where you would send logs to an external service like Sentry, LogRocket, etc.
    // For now, we'll just store them in localStorage for debugging
    try {
      const logs = JSON.parse(localStorage.getItem('app-logs') || '[]');
      logs.push({
        level,
        message,
        args,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      });

      // Keep only the last 100 logs
      if (logs.length > 100) {
        logs.splice(0, logs.length - 100);
      }

      localStorage.setItem('app-logs', JSON.stringify(logs));
    } catch (e) {
      console.error(e);
    }
  error(message: string, ...args: any[]): void {
    this.log(LOG_LEVELS.ERROR, message, ...args);
  }

  warn(message: string, ...args: any[]): void {
    this.log(LOG_LEVELS.WARN, message, ...args);
  }

  info(message: string, ...args: any[]): void {
    this.log(LOG_LEVELS.INFO, message, ...args);
  }

  debug(message: string, ...args: any[]): void {
    this.log(LOG_LEVELS.DEBUG, message, ...args);
  }

  // Utility method to get stored logs
  getLogs(): any[] {
    try {
      return JSON.parse(localStorage.getItem('app-logs') || '[]');
    } catch {
      return [];
    }
  // Utility method to clear logs
  clearLogs(): void {
    localStorage.removeItem('app-logs');
  }
export const logger = new Logger();
export default logger;

// logger utility functions

export interface LoggerConfig {
  enabled: boolean;
}

export class Logger {
  private config: LoggerConfig;

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
// Export default instance
export const logger = new Logger();
