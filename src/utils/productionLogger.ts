/**
 * Production-safe logging utility
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  OFF = 4
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  context?: Record<string, any>;
  stack?: string;
}

export interface LoggerConfig {
  level: LogLevel;
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;
  maxBufferSize: number;
  flushInterval: number;
}

class ProductionLogger {
  private config: LoggerConfig;
  private logBuffer: LogEntry[] = [];
  private flushTimer?: NodeJS.Timeout;

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      level: LogLevel.INFO,
      enableConsole: process.env.NODE_ENV !== 'production',
      enableRemote: process.env.NODE_ENV === 'production',
      remoteEndpoint: '/api/logs',
      maxBufferSize: 100,
      flushInterval: 30000, // 30 seconds
      ...config
    };

    if (this.config.enableRemote) {
      this.startFlushTimer();
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.level;
  }

  private createLogEntry(level: LogLevel, message: string, context?: Record<string, any>): LogEntry {
    return {
      level,
      message,
      timestamp: new Date(),
      context,
      stack: level >= LogLevel.ERROR ? new Error().stack : undefined
    };
  }

  private logToConsole(entry: LogEntry): void {
    if (!this.config.enableConsole) return;

    const { level, message, timestamp, context, stack } = entry;
    const timestampStr = timestamp.toISOString();
    const contextStr = context ? ` ${JSON.stringify(context)}` : '';
    const stackStr = stack ? `\n${stack}` : '';

    switch (level) {
      case LogLevel.DEBUG:
        console.debug(`[DEBUG] ${timestampStr} ${message}${contextStr}${stackStr}`);
        break;
      case LogLevel.INFO:
        console.info(`[INFO] ${timestampStr} ${message}${contextStr}${stackStr}`);
        break;
      case LogLevel.WARN:
        console.warn(`[WARN] ${timestampStr} ${message}${contextStr}${stackStr}`);
        break;
      case LogLevel.ERROR:
        console.error(`[ERROR] ${timestampStr} ${message}${contextStr}${stackStr}`);
        break;
    }
  }

  private async logToRemote(entry: LogEntry): Promise<void> {
    if (!this.config.enableRemote || !this.config.remoteEndpoint) return;

    try {
      this.logBuffer.push(entry);

      if (this.logBuffer.length >= this.config.maxBufferSize) {
        await this.flush();
      }
    } catch (error) {
      console.error('Failed to buffer log entry:', error);
    }
  }

  private async flush(): Promise<void> {
    if (this.logBuffer.length === 0 || !this.config.remoteEndpoint) return;

    const logs = [...this.logBuffer];
    this.logBuffer = [];

    try {
      await fetch(this.config.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          logs,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      });
    } catch (error) {
      console.error('Failed to send logs to remote endpoint:', error);
      // Re-add logs to buffer for retry
      this.logBuffer.unshift(...logs);
    }
  }

  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  private stopFlushTimer(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
      this.flushTimer = undefined;
    }
  }

  private log(level: LogLevel, message: string, context?: Record<string, any>): void {
    if (!this.shouldLog(level)) return;

    const entry = this.createLogEntry(level, message, context);
    this.logToConsole(entry);
    this.logToRemote(entry);
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

  error(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.ERROR, message, context);
  }

  // Utility methods
  setLevel(level: LogLevel): void {
    this.config.level = level;
  }

  enableConsole(enable: boolean): void {
    this.config.enableConsole = enable;
  }

  enableRemote(enable: boolean): void {
    this.config.enableRemote = enable;
    if (enable && !this.flushTimer) {
      this.startFlushTimer();
    } else if (!enable) {
      this.stopFlushTimer();
    }
  }

  async shutdown(): Promise<void> {
    this.stopFlushTimer();
    await this.flush();
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
    if (this.config.enableConsole) {
      console.group(label);
    }
  }

  groupEnd(): void {
    if (this.config.enableConsole) {
      console.groupEnd();
    }
  }
}

// Create singleton instance
export const productionLogger = new ProductionLogger();

// Export convenience functions
export const logger = {
  debug: (message: string, context?: Record<string, any>) => productionLogger.debug(message, context),
  info: (message: string, context?: Record<string, any>) => productionLogger.info(message, context),
  warn: (message: string, context?: Record<string, any>) => productionLogger.warn(message, context),
  error: (message: string, context?: Record<string, any>) => productionLogger.error(message, context),
  time: (label: string) => productionLogger.time(label),
  timeEnd: (label: string) => productionLogger.timeEnd(label),
  group: (label: string) => productionLogger.group(label),
  groupEnd: () => productionLogger.groupEnd(),
};

export default productionLogger;