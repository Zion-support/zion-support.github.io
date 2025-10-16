'use client';
/**
 * Logger Utility
 * Provides structured logging functionality
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
  context?: Record<string, unknown>;
  error?: Error;
}

class Logger {
  private level: LogLevel;
  private context: Record<string, unknown> = {};

  constructor(level: LogLevel = LogLevel.INFO) {
    this.level = level;
  }

  /**
   * Set the minimum log level
   */
  setLevel(level: LogLevel): void {
    this.level = level;
  }

  /**
   * Set context that will be included in all log entries
   */
  setContext(context: Record<string, unknown>): void {
    this.context = { ...this.context, ...context };
  }

  /**
   * Clear context
   */
  clearContext(): void {
    this.context = {};
  }

  /**
   * Log a debug message
   */
  debug(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  /**
   * Log an info message
   */
  info(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context);
  }

  /**
   * Log a warning message
   */
  warn(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, message, context);
  }

  /**
   * Log an error message
   */
  error(message: string, error?: Error, context?: Record<string, unknown>): void {
    this.log(LogLevel.ERROR, message, { ...context, error });
  }

  /**
   * Internal log method
   */
  private log(level: LogLevel, message: string, context?: Record<string, unknown>): void {
    if (level < this.level) {
      return;
    }

    const entry: LogEntry = {
      level,
      message,
      timestamp: Date.now(),
      context: { ...this.context, ...context }
    };

    // In development, log to console
    if (process.env.NODE_ENV === 'development') {
      this.logToConsole(entry);
    }

    // In production, you might want to send to a logging service
    if (process.env.NODE_ENV === 'production') {
      this.logToService(entry);
    }
  }

  /**
   * Log to console with appropriate styling
   */
  private logToConsole(entry: LogEntry): void {
    const timestamp = new Date(entry.timestamp).toISOString();
    const levelName = LogLevel[entry.level];
    const contextStr = entry.context ? JSON.stringify(entry.context, null, 2) : '';

    const styles = {
      [LogLevel.DEBUG]: 'color: #6B7280; background: #F3F4F6; padding: 2px 4px; border-radius: 3px;',
      [LogLevel.INFO]: 'color: #3B82F6; background: #DBEAFE; padding: 2px 4px; border-radius: 3px;',
      [LogLevel.WARN]: 'color: #F59E0B; background: #FEF3C7; padding: 2px 4px; border-radius: 3px;',
      [LogLevel.ERROR]: 'color: #EF4444; background: #FEE2E2; padding: 2px 4px; border-radius: 3px;'
    };

    console.log(
      `%c[${timestamp}] %c[${levelName}] %c${entry.message}`,
      'color: #6B7280;',
      styles[entry.level],
      'color: inherit;'
    );

    if (contextStr) {
      console.log(contextStr);
    }

    if (entry.error) {
      console.error(entry.error);
    }
  }

  /**
   * Log to external service (placeholder)
   */
  private logToService(entry: LogEntry): void {
    // In a real application, you would send this to your logging service
    // For now, we'll just log to console in production too
    this.logToConsole(entry);
  }
}

// Export singleton instance
export const logger = new Logger(
  process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO
);

// Export convenience functions
export const debug = (message: string, context?: Record<string, unknown>) => logger.debug(message, context);
export const info = (message: string, context?: Record<string, unknown>) => logger.info(message, context);
export const warn = (message: string, context?: Record<string, unknown>) => logger.warn(message, context);
export const error = (message: string, error?: Error, context?: Record<string, unknown>) => logger.error(message, error, context);

export default logger;