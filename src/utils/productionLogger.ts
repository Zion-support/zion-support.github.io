// Production logging utility

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, any>;
  error?: Error;
}

class ProductionLogger {
  private logLevel: LogLevel;
  private isProduction: boolean;

  constructor() {
    this.isProduction = process.env.NODE_ENV === 'production';
    this.logLevel = this.isProduction ? LogLevel.WARN : LogLevel.DEBUG;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.logLevel;
  }

  private formatMessage(level: LogLevel, message: string, context?: Record<string, any>, error?: Error): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
      } as Error : undefined,
    };
  }

  private log(level: LogLevel, message: string, context?: Record<string, any>, error?: Error): void {
    if (!this.shouldLog(level)) return;

    const logEntry = this.formatMessage(level, message, context, error);

    if (this.isProduction) {
      // In production, send to external logging service
      this.sendToExternalService(logEntry);
    } else {
      // In development, log to console
      this.logToConsole(logEntry);
    }
  }

  private logToConsole(entry: LogEntry): void {
    const { level, message, timestamp, context, error } = entry;
    const levelName = LogLevel[level];
    
    const logData = {
      [levelName]: message,
      timestamp,
      ...(context && { context }),
      ...(error && { error }),
    };

    switch (level) {
      case LogLevel.DEBUG:
        console.debug(logData);
        break;
      case LogLevel.INFO:
        console.info(logData);
        break;
      case LogLevel.WARN:
        console.warn(logData);
        break;
      case LogLevel.ERROR:
        console.error(logData);
        break;
    }
  }

  private sendToExternalService(entry: LogEntry): void {
    // In production, send to external logging service
    // This could be Sentry, LogRocket, DataDog, etc.
    try {
      // Example: Send to external service
      // fetch('/api/logs', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(entry),
      // });
    } catch (error) {
      // Fallback to console if external service fails
      console.error('Failed to send log to external service:', error);
    }
  }

  debug(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  info(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.INFO, message, context);
  }

  warn(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.WARN, message, context);
  }

  error(message: string, error?: Error, context?: Record<string, any>): void {
    this.log(LogLevel.ERROR, message, context, error);
  }

  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }
}

// Create singleton instance
export const logger = new ProductionLogger();

export default logger;