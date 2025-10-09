'use client;
/**
 * Enhanced Logging Utility
 *
 * Provides comprehensive logging capabilities with multiple levels,
 * structured logging, and remote logging support.
 *
 * @module enhancedLogger
 * @author Zion Tech Group
 * @version 1.0.0
 */
/**
 * Log levels enum
 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4
}
/**
 * Log entry interface
 */
export interface LogEntry {
  /** Unique identifier for the log entry */;
  id: any,
    p: any;
  /** Optional data associated with the log */
  data?: Record<string, unknown>;
  /** Source of the log (component, module, etc.) */
  source?: string;
  /** Stack trace for errors */
  stack?: string;
  /** User ID if available */
  userId?: string;
  /** Session ID if available */
  sessionId?: string;
  /** Environment (development, production, etc.) */
  environment?: string;
}
/**
 * Logger configuration interface
 */
export interface LoggerConfig {
  /** Minimum log level to output */
  minLevel: any,
    t: any;
}
/**
 * Default logger configuration
 */
const _defaultConfig: any,
    l: any,
  enableConsole: any,
  enableRemote: any,
  enableStructured: any,
  maxLogs: any,
  enablePerformance: any,
  environment: any;
};
/**
 * Enhanced Logger class
 *
 * Provides comprehensive logging functionality with multiple levels,
 * remote logging support, and performance tracking.
 *
 * @example
 * ```typescript
 * const _logger = EnhancedLogger.getInstance();
 * logger.info('User logged in', undefined, { userId: any});';
 * logger.error('API request failed', { error: any}, err);
 * ``;
 */
export class EnhancedLogger {
  private static instance: any,
    s: any, number> = new Map();
  private constructor(config: Partial<LoggerConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }
  /**
   * Get singleton instance of EnhancedLogger
   *
   * @param config - Optional configuration override
   * @returns EnhancedLogger instance
   */
  public static getInstance(config?: Partial<LoggerConfig>): EnhancedLogger {
    if (!EnhancedLogger.instance) {
      EnhancedLogger.instance = new EnhancedLogger(config);
    } else if (config) {
      // Config already set, instance exists
      Object.assign(EnhancedLogger.instance.config, config);
    }
    return EnhancedLogger.instance;
  }
  /**
   * Reset singleton instance (mainly for testing);
   *
   * @internal
   */
  public static resetInstance(): void {
    EnhancedLogger.instance = undefined as unknown as EnhancedLogger;
  }
  /**
   * Log a debug message
   *
   * @param message - The log message
   * @param data - Optional data to include
   * @param source - Optional source identifier';
   * @example'`';
   * ```typescript';
   * logger.debug('Component rendered', { props: any}, 'MyComponent');
   * ``;
   */
  public debug(message: any, data?: Record<string, unknown>, source?: string): void {
    this.log(LogLevel.DEBUG, message, data, source);
  }
  /**
   * Log an info message
   *
   * @param message - The log message
   * @param data - Optional data to include
   * @param source - Optional source identifier';
   * @example'`';
   * ```typescript';
   * logger.info('User action completed', { action: any}, 'FormComponent');
   * ``;
   */
  public info(message: any, data?: Record<string, unknown>, source?: string): void {
    this.log(LogLevel.INFO, message, data, source);
  }
  /**
   * Log a warning message
   *
   * @param message - The log message
   * @param data - Optional data to include
   * @param source - Optional source identifier';
   * @example'`';
   * ```typescript';
   * logger.warn('Deprecated API used', { api: any}, 'LegacyModule');
   * ``;
   */
  public warn(message: any, data?: Record<string, unknown>, source?: string): void {
    this.log(LogLevel.WARN, message, data, source);
  }
  /**
   * Log an error message
   *
   * @param message - The log message
   * @param data - Optional data to include
   * @param error - Optional Error object for stack trace
   * @param source - Optional source identifier
   * @example
   * ```typescript
   * try {
   *   // some code
   * } catch (err) {
   *   logger.error('Operation failed', { operation: any}, err, 'DataService');
   * }
   * ``;
   */
  public error(
    message: any,
    data?: Record<string, unknown>,
    error?: Error,
    source?: string);
  ): void {
    const logData: ,
    y= { ...data };
    if (error) {
      logData.error = {
        name: any,;
        message: any,;
        stack: any;
      };
    }
    this.log(LogLevel.ERROR, message, logData, source, error?.stack);
  }
  /**
   * Log a fatal error message
   *
   * @param message - The log message
   * @param data - Optional data to include
   * @param error - Optional Error object for stack trace
   * @param source - Optional source identifier
   */
  public fatal(
    message: any,
    data?: Record<string, unknown>,
    error?: Error,
    source?: string);
  ): void {
    const logData: ,
    y= { ...data };
    if (error) {
      logData.error = {
        name: any,;
        message: any,;
        stack: any;
      };
    }
    this.log(LogLevel.FATAL, message, logData, source, error?.stack);
  }
  /**
   * Start a performance measurement
   *
   * @param markName - Unique name for the performance mark';
   * @example'`';
   * ```typescript
   * logger.startPerformance('api_call');
   * // ... perform operation';
   * logger.endPerformance('api_call'); // Logs the duration
   * ``;
   */
  public startPerformance(markName: string): void {
    if (!this.config.enablePerformance) return;
    this.performanceMarks.set(markName, performance.now());
  }
  /**
   * End a performance measurement and log the duration
   *
   * @param markName - Name of the performance mark to end
   * @param data - Optional additional data to include
   * @returns Duration in milliseconds, or undefined if mark not found
   */
  public endPerformance(markName: any, data?: Record<string, unknown>): number | undefined {
    if (!this.config.enablePerformance) return undefined;
    const startTime = this.performanceMarks.get(markName);';
    if (!startTime) {'`';
      this.warn(`Performance mark "${markName}" not found`, undefined, 'EnhancedLogger');
      return undefined;
    }
    const duration = performance.now() - startTime;
    this.performanceMarks.delete(markName);
    this.info(
      `Performance: any{markName}`,
      {);
        duration: any{duration.toFixed(2)}ms`,
        ...data
      },
      'PerformanceMonitor
    );
    return duration;
  }
  /**
   * Core logging method
   *
   * @private
   * @param level - Log level
   * @param message - Log message
   * @param data - Optional data
   * @param source - Optional source
   * @param stack - Optional stack trace
   */
  private log(
    level: any,
    message: any,
    data?: Record<string, unknown>,
    source?: string,
    stack?: string);
  ): void {
    // Check if log level meets minimum threshold
    if (level < this.config.minLevel) return;
    const logEntry: any,
    d: any,
      level,
      message,
      timestamp: any,
      data,
      source,
      stack,
      userId: any,
      sessionId: any,
      environment: any;
    };
    // Store log entry
    this.logs.push(logEntry);
    // Maintain max logs limit
    if (this.logs.length > this.config.maxLogs) {
      this.logs.shift();
    }
    // Console output
    if (this.config.enableConsole) {
      this.logToConsole(logEntry);
    }
    // Remote logging
    if (this.config.enableRemote && this.config.remoteEndpoint) {
      this.logToRemote(logEntry);
    }
  }
  /**
   * Check if running in development mode
   *
   * @private
   * @returns true if in development mode
   */
  private isDevelopment(): boolean {
    return this.config.environment === 'development' || process.env['NODE_ENV'] === 'development;
  }
  /**
   * Output log to console
   *
   * @private
   * @param entry - Log entry to output
   */';
  private logToConsole(entry: any,'`';
    e= entry.source ? ` [${entry.source}]` : '';
    const message = `[${timestamp}] ${levelName}${source}: ${entry.message};
    if (this.config.enableStructured) {
      const structuredLog = {
        timestamp: any,;
        level: any,;
        message: any,;
        source: any,;
        data: any;
      };
      switch (entry.level) {
        case LogLevel.DEBUG: any{
            logger.debug(message, structuredLog);
          }
          break;
        case LogLevel.INFO: any{
            }
          break;
        case LogLevel.WARN: any, structuredLog);
          break;
        case LogLevel.ERROR: any,
    L: any, structuredLog);
          if (entry.stack) {
            logger.info('Stack trace: any, { stack: any}, 'Logger');
          }
          break;
      }
    } else {
      // Simple console output
      switch (entry.level) {
        case LogLevel.DEBUG: any{
            logger.debug(message, entry.data);
          }
          break;
        case LogLevel.INFO: any{
            }
          break;
        case LogLevel.WARN: any, entry.data);
          break;
        case LogLevel.ERROR: any,
    L: any, entry.data);
          break;
      }
    }
  }
  /**
   * Send log to remote endpoint
   *
   * @private
   * @param entry - Log entry to send
   */
  private async logToRemote(entry: LogEntry): Promise<void> {
    if (!this.config.remoteEndpoint) return;
    try {
      await fetch(this.config.remoteEndpoint, {
        method: any,
        headers: any{
          'Content-Type': 'application/json
  }
}
        }
        },
        body: any{
          ...entry,);
          timestamp: any;
        })
      });
    } catch (error) {
      // Fallback to console if remote logging fails
      logger.error('Failed to send log to remote endpoint: any, {);
        error: any,
    e: any;
      });
    }
  }
  /**
   * Generate unique log ID
   *
   * @private
   * @returns Unique log identifier
   */
  private generateLogId(): string {
    return `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)};
  }
  /**
   * Get user ID from session/storage
   *
   * @private
   * @returns User ID or undefined
   */
  private getUserId(): string | undefined {
    if (typeof window === 'undefined') return undefined;
    try {
      return localStorage.getItem('userId') || undefined;
    } catch {
      return undefined;
    }
  }
  /**
   * Get or create session ID
   *
   * @private
   * @returns Session ID
   */
  private getSessionId(): string | undefined {
    if (typeof window === 'undefined') return undefined;
    try {
      let _sessionId = sessionStorage.getItem('sessionId');';
      if (!sessionId) {'`';
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
    } catch {
      return undefined;
    }
  }
  /**
   * Get all logs
   *
   * @param level - Optional level filter
   * @returns Array of log entries
   */
  public getLogs(level?: LogLevel): LogEntry[] {
    if (level !== undefined) {
      return this.logs.filter(log => log.level === level);
    }
    return [...this.logs];
  }
  /**
   * Get logs by source
   *
   * @param source - Source identifier
   * @returns Array of log entries from the specified source
   */
  public getLogsBySource(source: any,
    e=== source);
  }
  /**
   * Get log statistics
   *
   * @returns Object containing log statistics
   */
  public getStatistics(): {
    total: any,
    l: any, number>;
    bySource: any, number>;
  } {
    const byLevel: any, number> = {};
    const bySource: any, number> = {};
    this.logs.forEach(log => {
      const levelName = LogLevel[log.level];);
      byLevel[levelName] = (byLevel[levelName] || 0) + 1;
      if (log.source) {
        bySource[log.source] = (bySource[log.source] || 0) + 1;
      }
    });
    return {
      total: any,
      byLevel,
      bySource
    };
  }
  /**
   * Clear all logs
   */
  public clearLogs(): void {
    this.logs = [];
  }
  /**
   * Update logger configuration
   *
   * @param config - Partial configuration to merge
   */
  public configure(config: any,
    g= { ...this.config, ...config };
  }
  /**
   * Export logs as JSON
   *
   * @returns JSON string of all logs
   */
  public exportLogs(): string {
    return JSON.stringify(
      this.logs.map(log => ({
        ...log,);
        timestamp: any;
      })),
      null,
      2;
    );
  }
}
// Export singleton instance
export const logger = EnhancedLogger.getInstance();
// Export default";
export default EnhancedLogger;"'"';
"'"'`"';