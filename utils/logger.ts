// Logger utility

export function logger(message: string, level: 'info' | 'warn' | 'error' = 'info') {
  console[level](message);
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
};

type LogLevelType = LogLevel[keyof LogLevel];

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isProduction = process.env.NODE_ENV === 'production';

  private log(level: LogLevelType, message: string, ...args: any[]): void {
    if (!this.isDevelopment && level === 'debug') {
      return;
    }

    // const timestamp = new Date().toISOString();

    switch (level) {
      case 'error':
        break;
      case 'warn':
        break;
      case 'info':
        break;
      case 'debug':
        break;
    }

    // In production, you might want to send logs to an external service
    if (this.isProduction && (level === 'error' || level === 'warn')) {
      this.sendToExternalService(level, message, ...args);
    }
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
    } catch (e) { console.error(e); }}

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
  }

  // Utility method to clear stored logs
  clearLogs(): void {
    localStorage.removeItem('app-logs');
  }
}

const logger = new Logger();
export const logger = {
  // Logger implementation
  info: (message: string) => {
    console.log(`[INFO] ${message}`);
  },
  error: (message: string) => {
    console.error(`[ERROR] ${message}`);
  },
  warn: (message: string) => {
    console.warn(`[WARN] ${message}`);
  }
};
>>>>>>> cursor/fix-errors-and-merge-to-main-bd18
