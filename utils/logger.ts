// Logger utility for the Zion Tech Group website

interface LogLevel {
  INFO: 'info';
  WARN: 'warn';
  ERROR: 'error';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
  DEBUG: 'debug'
};

class Logger {
  private shouldLog(): boolean {
    // In production, only log errors and warnings
    if (process.env.NODE_ENV === 'production') {
      return true;
    }
    // In development, log everything
    return true;
  }

  private formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.log(this.formatMessage(LOG_LEVELS.INFO, message), ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.warn(this.formatMessage(LOG_LEVELS.WARN, message), ...args);
    }
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.error(this.formatMessage(LOG_LEVELS.ERROR, message), ...args);
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.debug(this.formatMessage(LOG_LEVELS.DEBUG, message), ...args);
    }
  }

  log(message: string, ...args: any[]): void {
    this.info(message, ...args);
  }
}

export const logger = new Logger();

// Export individual methods for convenience
export const { info, warn, error, debug, log } = logger;