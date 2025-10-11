/**
 * Advanced Logging System
 * Provides structured logging with levels, contexts, and filtering
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  CRITICAL = 4,
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
  context?: Record<string, any>;
  stack?: string;
  tags?: string[];
}

export interface LoggerConfig {
  minLevel: LogLevel;
  enableConsole: boolean;
  enableRemote: boolean;
  maxEntries: number;
  remoteEndpoint?: string;
}

class AdvancedLogger {
  private logs: LogEntry[] = [];
  private config: LoggerConfig = {
    minLevel: LogLevel.INFO,
    enableConsole: true,
    enableRemote: false,
    maxEntries: 1000,
  };
  private callbacks: Array<(entry: LogEntry) => void> = [];

  /**
   * Configure the logger
   */
  configure(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Log a debug message
   */
  debug(message: string, context?: Record<string, any>, tags?: string[]): void {
    this.log(LogLevel.DEBUG, message, context, tags);
  }

  /**
   * Log an info message
   */
  info(message: string, context?: Record<string, any>, tags?: string[]): void {
    this.log(LogLevel.INFO, message, context, tags);
  }

  /**
   * Log a warning message
   */
  warn(message: string, context?: Record<string, any>, tags?: string[]): void {
    this.log(LogLevel.WARN, message, context, tags);
  }

  /**
   * Log an error message
   */
  error(message: string, error?: Error, context?: Record<string, any>, tags?: string[]): void {
    const enrichedContext = {
      ...context,
      error: error
        ? {
            message: error.message,
            name: error.name,
            stack: error.stack,
          }
        : undefined,
    };
    this.log(LogLevel.ERROR, message, enrichedContext, tags, error?.stack);
  }

  /**
   * Log a critical message
   */
  critical(message: string, error?: Error, context?: Record<string, any>, tags?: string[]): void {
    const enrichedContext = {
      ...context,
      error: error
        ? {
            message: error.message,
            name: error.name,
            stack: error.stack,
          }
        : undefined,
    };
    this.log(LogLevel.CRITICAL, message, enrichedContext, tags, error?.stack);
  }

  /**
   * Log with specific level
   */
  private log(
    level: LogLevel,
    message: string,
    context?: Record<string, any>,
    tags?: string[],
    stack?: string
  ): void {
    // Check if level meets minimum threshold
    if (level < this.config.minLevel) {
      return;
    }

    const entry: LogEntry = {
      level,
      message,
      timestamp: Date.now(),
      context,
      stack,
      tags,
    };

    // Store log entry
    this.logs.push(entry);

    // Trim logs if exceeding max entries
    if (this.logs.length > this.config.maxEntries) {
      this.logs = this.logs.slice(-this.config.maxEntries);
    }

    // Console output
    if (this.config.enableConsole) {
      this.logToConsole(entry);
    }

    // Remote logging
    if (this.config.enableRemote) {
      this.logToRemote(entry);
    }

    // Notify callbacks
    this.callbacks.forEach((callback) => {
      try {
        callback(entry);
      } catch (error) {
//         console.error('Error in log callback:', error);
      }
    });
  }

  /**
   * Log to console with appropriate formatting
   */
  private logToConsole(entry: LogEntry): void {
const levelName = LogLevel[entry.level];
const timestamp = new Date(entry.timestamp).toISOString();
const prefix = `[${timestamp}] [${levelName}]`;
    const tags = entry.tags ? `[${entry.tags.join(', ')}]` : '';

const formattedMessage = `${prefix} ${tags} ${entry.message}`;

    switch (entry.level) {
      case LogLevel.DEBUG:
//         break;
      case LogLevel.INFO:
//         break;
      case LogLevel.WARN:
//         break;
      case LogLevel.ERROR:
      case LogLevel.CRITICAL:
//         console.error(formattedMessage, entry.context || '');
        if (entry.stack) {
//           console.error('Stack trace:', entry.stack);
        }
        break;
    }
  }

  /**
   * Send log to remote endpoint
   */
  private logToRemote(entry: LogEntry): void {
    if (!this.config.remoteEndpoint) return;

    // Don't log in development unless explicitly enabled
    if (process.env['NODE_ENV'] !== 'production' && !this.config.enableRemote) {
      return;
    }

    try {
      fetch(this.config.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      }).catch((error) => {
        // Fail silently to avoid logging loops
//         console.error('Failed to send log to remote:', error);
      });
    } catch (error) {
      // Fail silently
    }
  }

  /**
   * Get all log entries
   */
  getLogs(level?: LogLevel, tags?: string[]): LogEntry[] {
    let filtered = this.logs;

    if (level !== undefined) {
      filtered = filtered.filter((entry) => entry.level === level);
    }

    if (tags && tags.length > 0) {
      filtered = filtered.filter((entry) =>
        tags.some((tag) => entry.tags?.includes(tag))
      );
    }

    return [...filtered];
  }

  /**
   * Get log statistics
   */
  getStatistics(): Record<string, any> {
    const byLevel: Record<string, number> = {
      DEBUG: 0,
      INFO: 0,
      WARN: 0,
      ERROR: 0,
      CRITICAL: 0,
    };

    const byTag: Record<string, number> = {};

    this.logs.forEach((entry) => {
      byLevel[LogLevel[entry.level]]++;

      entry.tags?.forEach((tag) => {
        byTag[tag] = (byTag[tag] || 0) + 1;
      });
    });

    return {
      total: this.logs.length,
      byLevel,
      byoldestLog: this.logs.length > 0 ? this.logs[0].timestamp : null,
      newestLog: this.logs.length > 0 ? this.logs[this.logs.length - 1].timestamp : null,
    };
  }

  /**
   * Clear all logs
   */
  clearLogs(): void {
    this.logs = [];
  }

  /**
   * Export logs as JSON
   */
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }

  /**
   * Register callback for log events
   */
  onLog(callback: (entry: LogEntry) => void): () => void {
    this.callbacks.push(callback);
    return () => {
      this.callbacks = this.callbacks.filter((cb) => cb !== callback);
    };
  }

  /**
   * Create a child logger with additional context
   */
  child(context: Record<string, any>, tags?: string[]): {
    debug: (message: string, extraContext?: Record<string, any>) => void;
    info: (message: string, extraContext?: Record<string, any>) => void;
    warn: (message: string, extraContext?: Record<string, any>) => void;
    error: (message: string, error?: Error, extraContext?: Record<string, any>) => void;
    critical: (message: string, error?: Error, extraContext?: Record<string, any>) => void;
  } {
    return {
      debug: (message: string, extraContext?: Record<string, any>) =>
        this.debug(message, { ...context, ...extraContext }, tags),
      info: (message: string, extraContext?: Record<string, any>) =>
        this.info(message, { ...context, ...extraContext }, tags),
      warn: (message: string, extraContext?: Record<string, any>) =>
        this.warn(message, { ...context, ...extraContext }, tags),
      error: (message: string, error?: Error, extraContext?: Record<string, any>) =>
        this.error(message, error, { ...context, ...extraContext }, tags),
      critical: (message: string, error?: Error, extraContext?: Record<string, any>) =>
        this.critical(message, error, { ...context, ...extraContext }, tags),
    };
  }

  /**
   * Create a performance logger
   */
  createPerformanceLogger(operation: string): {
    start: () => void;
    end: (success?: boolean) => void;
  } {
    let startTime: number;

    return {
      start: () => {
        startTime = performance.now();
        this.debug(`Starting: ${operation}`, { operation });
      },
      end: (success: boolean = true) => {
        const duration = performance.now() - startTime;
        if (success) {
          this.info(`Completed: ${operation}`, {
            operation,
            duration: `${duration.toFixed(2)}ms`,
          });
        } else {
          this.warn(`Failed: ${operation}`, {
            operation,
            duration: `${duration.toFixed(2)}ms`,
          });
        }
      },
    };
  }
}

// Export singleton instance
export const logger = new AdvancedLogger();

// Configure based on environment
if (typeof window !== 'undefined') {
  logger.configure({
    minLevel: process.env['NODE_ENV'] === 'production' ? LogLevel.INFO : LogLevel.DEBUG,
    enableConsole: true,
    enableRemote: process.env['NODE_ENV'] === 'production',
    remoteEndpoint: process.env.NEXT_PUBLIC_LOG_ENDPOINT,
  });
}

export default logger;
