/**
 * Production-safe logging utility
 * Automatically disables console statements in production builds
 */

type LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug';

interface LoggerConfig {
  enabled: boolean;
  level: LogLevel;
  prefix?: string;
}

class Logger {
  private config: LoggerConfig;

  constructor(config: LoggerConfig = { enabled: true, level: 'log' }) {
    this.config = {
      enabled: process.env.NODE_ENV !== 'production' && config.enabled,
      level: config.level,
      prefix: config.prefix || '[Zion Tech]',
    };
  }

  private shouldLog(level: LogLevel): boolean {
    if (!this.config.enabled) return false;
    
    const levels: Record<LogLevel, number> = {
      debug: 0,
      log: 1,
      info: 2,
      warn: 3,
      error: 4,
    };
    
    return levels[level] >= levels[this.config.level];
  }

  private formatMessage(level: LogLevel, message: string, ...args: any[]): [string, ...any[]] {
    const timestamp = new Date().toISOString();
    const prefix = `${this.config.prefix} [${timestamp}] [${level.toUpperCase()}]`;
    return [`${prefix} ${message}`, ...args];
  }

  log(message: string, ...args: any[]): void {
    if (this.shouldLog('log')) {
      console.log(...this.formatMessage('log', message, ...args));
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog('info')) {
      console.info(...this.formatMessage('info', message, ...args));
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog('warn')) {
      console.warn(...this.formatMessage('warn', message, ...args));
    }
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog('error')) {
      console.error(...this.formatMessage('error', message, ...args));
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog('debug')) {
      console.debug(...this.formatMessage('debug', message, ...args));
    }
  }
}

// Create singleton instance
export const logger = new Logger({
  enabled: true,
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'warn',
});

// Export for direct use
export default logger;