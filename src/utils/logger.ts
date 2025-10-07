/**
 * Comprehensive logging utility with multiple levels and outputs
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4,
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  data?: unknown;
  context?: string;
  stack?: string;
}

export interface LoggerOptions {
  minLevel?: LogLevel;
  enableConsole?: boolean;
  enableRemote?: boolean;
  remoteEndpoint?: string;
  context?: string;
}

/**
 * Logger class with multiple outputs and levels
 */
export class Logger {
  private static instance: Logger;
  private minLevel: LogLevel;
  private enableConsole: boolean;
  private enableRemote: boolean;
  private remoteEndpoint?: string;
  private context?: string;
  private logs: LogEntry[] = [];
  private maxLogs = 1000;

  private constructor(options: LoggerOptions = {}) {
    this.minLevel = options.minLevel ?? (process.env.NODE_ENV === 'production' ? LogLevel.INFO : LogLevel.DEBUG);
    this.enableConsole = options.enableConsole ?? true;
    this.enableRemote = options.enableRemote ?? false;
    this.remoteEndpoint = options.remoteEndpoint;
    this.context = options.context;
  }

  public static getInstance(options?: LoggerOptions): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(options);
    }
    return Logger.instance;
  }

  /**
   * Log debug message
   */
  public debug(message: string, data?: unknown): void {
    this.log(LogLevel.DEBUG, message, data);
  }

  /**
   * Log info message
   */
  public info(message: string, data?: unknown): void {
    this.log(LogLevel.INFO, message, data);
  }

  /**
   * Log warning message
   */
  public warn(message: string, data?: unknown): void {
    this.log(LogLevel.WARN, message, data);
  }

  /**
   * Log error message
   */
  public error(message: string, error?: Error | unknown): void {
    const stack = error instanceof Error ? error.stack : undefined;
    this.log(LogLevel.ERROR, message, error, stack);
  }

  /**
   * Log fatal message
   */
  public fatal(message: string, error?: Error | unknown): void {
    const stack = error instanceof Error ? error.stack : undefined;
    this.log(LogLevel.FATAL, message, error, stack);
  }

  /**
   * Core logging method
   */
  private log(level: LogLevel, message: string, data?: unknown, stack?: string): void {
    if (level < this.minLevel) {
      return;
    }

    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date(),
      data,
      context: this.context,
      stack,
    };

    // Store log entry
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Console output
    if (this.enableConsole) {
      this.logToConsole(entry);
    }

    // Remote logging
    if (this.enableRemote && this.remoteEndpoint) {
      this.logToRemote(entry);
    }
  }

  /**
   * Output to console
   */
  private logToConsole(entry: LogEntry): void {
    const prefix = `[${LogLevel[entry.level]}] ${entry.timestamp.toISOString()}`;
    const message = entry.context ? `${prefix} [${entry.context}] ${entry.message}` : `${prefix} ${entry.message}`;

    switch (entry.level) {
      case LogLevel.DEBUG:
        if (process.env.NODE_ENV === 'development') {
          if (import.meta.env.DEV) { console.debug(message, entry.data ?? ''); }
        }
        break;
      case LogLevel.INFO:
        if (import.meta.env.DEV) { console.info(message, entry.data ?? ''); }
        break;
      case LogLevel.WARN:
        console.warn(message, entry.data ?? '');
        break;
      case LogLevel.ERROR:
      case LogLevel.FATAL:
        console.error(message, entry.data ?? '', entry.stack ?? '');
        break;
    }
  }

  /**
   * Send to remote logging service
   */
  private async logToRemote(entry: LogEntry): Promise<void> {
    if (!this.remoteEndpoint || typeof fetch === 'undefined') {
      return;
    }

    try {
      await fetch(this.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });
    } catch (error) {
      // Silent fail to prevent logging loops
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to send log to remote:', error);
      }
    }
  }

  /**
   * Get recent logs
   */
  public getLogs(count?: number): LogEntry[] {
    if (count) {
      return this.logs.slice(-count);
    }
    return [...this.logs];
  }

  /**
   * Clear all logs
   */
  public clearLogs(): void {
    this.logs = [];
  }

  /**
   * Export logs as JSON
   */
  public exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }

  /**
   * Set minimum log level
   */
  public setMinLevel(level: LogLevel): void {
    this.minLevel = level;
  }

  /**
   * Create a child logger with context
   */
  public createChild(context: string): Logger {
    const child = new Logger({
      minLevel: this.minLevel,
      enableConsole: this.enableConsole,
      enableRemote: this.enableRemote,
      remoteEndpoint: this.remoteEndpoint,
      context: this.context ? `${this.context}:${context}` : context,
    });
    return child;
  }
}

// Export singleton instance
export const logger = Logger.getInstance();

// Utility function to create child loggers
export const createLogger = (context: string, options?: LoggerOptions): Logger => {
  return Logger.getInstance(options).createChild(context);
};

export default logger;
