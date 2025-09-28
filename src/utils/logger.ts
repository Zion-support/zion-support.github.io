/**
 * Production-Ready Logging System
 * Centralized logging with environment-based filtering
 */

export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
  TRACE = 4
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  context?: string;
  data?: unknown;
  stack?: string;
}

class Logger {
  private currentLevel: LogLevel;
  private isProduction: boolean;
  private logHistory: LogEntry[] = [];
  private maxHistorySize = 1000;

  constructor() {
    this.isProduction = process.env.NODE_ENV === 'production';
    this.currentLevel = this.isProduction ? LogLevel.WARN : LogLevel.DEBUG;
  }

  private shouldLog(level: LogLevel): boolean {
    return level <= this.currentLevel;
  }

  private formatMessage(level: LogLevel, message: string, context?: string, data?: unknown): string {
    const timestamp = new Date().toISOString();
    const levelName = LogLevel[level];
    const contextStr = context ? `[${context}]` : '';
    const dataStr = data ? ` ${JSON.stringify(data)}` : '';
    
    return `${timestamp} ${levelName}${contextStr}: ${message}${dataStr}`;
  }

  private addToHistory(entry: LogEntry): void {
    this.logHistory.push(entry);
    if (this.logHistory.length > this.maxHistorySize) {
      this.logHistory.shift();
    }
  }

  private log(level: LogLevel, message: string, context?: string, data?: unknown, error?: Error): void {
    if (!this.shouldLog(level)) return;

    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date(),
      context,
      data,
      stack: error?.stack
    };

    this.addToHistory(entry);

    if (this.isProduction) {
      // In production, only log errors and warnings
      if (level <= LogLevel.WARN) {
        console.error(this.formatMessage(level, message, context, data));
      }
    } else {
      // In development, log everything
      const formattedMessage = this.formatMessage(level, message, context, data);
      switch (level) {
        case LogLevel.ERROR:
          console.error(formattedMessage);
          if (error) console.error(error);
          break;
        case LogLevel.WARN:
          console.warn(formattedMessage);
          break;
        case LogLevel.INFO:
          console.info(formattedMessage);
          break;
        case LogLevel.DEBUG:
          console.debug(formattedMessage);
          break;
        case LogLevel.TRACE:
          console.trace(formattedMessage);
          break;
      }
    }
  }

  error(message: string, context?: string, data?: unknown, error?: Error): void {
    this.log(LogLevel.ERROR, message, context, data, error);
  }

  warn(message: string, context?: string, data?: unknown): void {
    this.log(LogLevel.WARN, message, context, data);
  }

  info(message: string, context?: string, data?: unknown): void {
    this.log(LogLevel.INFO, message, context, data);
  }

  debug(message: string, context?: string, data?: unknown): void {
    this.log(LogLevel.DEBUG, message, context, data);
  }

  trace(message: string, context?: string, data?: unknown): void {
    this.log(LogLevel.TRACE, message, context, data);
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

  // Get log history for debugging
  getHistory(): LogEntry[] {
    return [...this.logHistory];
  }

  // Clear log history
  clearHistory(): void {
    this.logHistory = [];
  }

  // Set log level
  setLevel(level: LogLevel): void {
    this.currentLevel = level;
  }

  // Get current log level
  getLevel(): LogLevel {
    return this.currentLevel;
  }

  // Export logs for analysis
  exportLogs(): string {
    return JSON.stringify(this.logHistory, null, 2);
  }
}

// Export singleton instance
export const logger = new Logger();

// Export convenience functions
export const { error, warn, info, debug, trace, time, timeEnd, group, groupEnd } = logger;

// Performance monitoring helpers
export const performanceLogger = {
  mark: (name: string) => {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name);
      logger.debug(`Performance mark: ${name}`, 'Performance');
    }
  },
  
  measure: (name: string, startMark: string, endMark?: string) => {
    if (typeof performance !== 'undefined' && performance.measure) {
      try {
        const measure = performance.measure(name, startMark, endMark);
        logger.debug(`Performance measure: ${name} - ${measure.duration}ms`, 'Performance');
        return measure.duration;
      } catch (err) {
        logger.warn(`Failed to measure performance: ${name}`, 'Performance', { error: err });
      }
    }
  },
  
  getEntries: (type?: string) => {
    if (typeof performance !== 'undefined' && performance.getEntriesByType) {
      return performance.getEntriesByType(type || 'measure');
    }
    return [];
  }
};

// Error boundary helper
export const logError = (error: Error, context?: string, additionalData?: Record<string, any>): void => {
  logger.error(`Error in ${context || 'Unknown'}: ${error.message}`, context, {
    ...(additionalData || {}),
    stack: error.stack,
    name: error.name
  });
};

// API call logging
export const logApiCall = (method: string, url: string, status?: number, duration?: number): void => {
  const level = status && status >= 400 ? LogLevel.ERROR : LogLevel.INFO;
  if (level === LogLevel.ERROR) {
    logger.error(`${method} ${url}`, 'API', {
      status,
      duration: duration ? `${duration}ms` : undefined
    });
  } else {
    logger.info(`${method} ${url}`, 'API', {
      status,
      duration: duration ? `${duration}ms` : undefined
    });
  }
};

// User interaction logging
export const logUserInteraction = (action: string, element?: string, data?: Record<string, any>): void => {
  logger.debug(`User interaction: ${action}`, 'UserInteraction', {
    element,
    ...(data || {})
  });
};