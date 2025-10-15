/**
 * Enhanced logging utility with different log levels and formatting
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export interface LogConfig {
  level: LogLevel;
  enableConsole: boolean;
  enableStorage: boolean;
  maxStorageEntries: number;
}

class Logger {
  private config: LogConfig;
  private logs: Array<{ timestamp: string; level: string; message: string; data?: any }> = [];

  constructor(config: Partial<LogConfig> = {}) {
    this.config = {
      level: LogLevel.INFO,
      enableConsole: true,
      enableStorage: false,
      maxStorageEntries: 100,
      ...config,
    };
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.level;
  }

  private formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  private storeLog(level: string, message: string, data?: any): void {
    if (!this.config.enableStorage) return;

    this.logs.push({
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
    });

    // Keep only the most recent logs
    if (this.logs.length > this.config.maxStorageEntries) {
      this.logs = this.logs.slice(-this.config.maxStorageEntries);
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      if (this.config.enableConsole) {
        console.debug(this.formatMessage('debug', message), ...args);
      }
      this.storeLog('debug', message, args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
      if (this.config.enableConsole) {
        console.info(this.formatMessage('info', message), ...args);
      }
      this.storeLog('info', message, args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
      if (this.config.enableConsole) {
        console.warn(this.formatMessage('warn', message), ...args);
      }
      this.storeLog('warn', message, args);
    }
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      if (this.config.enableConsole) {
        console.error(this.formatMessage('error', message), ...args);
      }
      this.storeLog('error', message, args);
    }
  }

  // Performance logging
  time(label: string): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.time(label);
    }
  }

  timeEnd(label: string): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.timeEnd(label);
    }
  }

  // Group logging
  group(label: string): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.group(label);
    }
  }

  groupEnd(): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.groupEnd();
    }
  }

  // Get stored logs
  getLogs(): Array<{ timestamp: string; level: string; message: string; data?: any }> {
    return [...this.logs];
  }

  // Clear stored logs
  clearLogs(): void {
    this.logs = [];
  }

  // Update configuration
  updateConfig(newConfig: Partial<LogConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  // Set log level
  setLevel(level: LogLevel): void {
    this.config.level = level;
  }
}

// Create default logger instance
export const logger = new Logger();

// Export convenience functions
export const debug = (message: string, ...args: any[]): void => logger.debug(message, ...args);
export const info = (message: string, ...args: any[]): void => logger.info(message, ...args);
export const warn = (message: string, ...args: any[]): void => logger.warn(message, ...args);
export const error = (message: string, ...args: any[]): void => logger.error(message, ...args);
export const time = (label: string): void => logger.time(label);
export const timeEnd = (label: string): void => logger.timeEnd(label);
export const group = (label: string): void => logger.group(label);
export const groupEnd = (): void => logger.groupEnd();

// Export the Logger class for custom instances
export { Logger };