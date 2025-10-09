'use client';
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
  /** Unique identifier for the log entry */
  id: string;
  /** Log level */
  level: LogLevel;
  /** Log message */
  message: string;
  /** Timestamp when the log was created */
  timestamp: Date;
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
  minLevel: LogLevel;
  /** Enable console logging */
  enableConsole: boolean;
  /** Enable remote logging */
  enableRemote: boolean;
  /** Remote logging endpoint */
  remoteEndpoint?: string;
  /** Enable structured logging */
  enableStructured: boolean;
  /** Maximum number of logs to store in memory */
  maxLogs: number;
  /** Enable performance tracking */
  enablePerformance: boolean;
  /** Environment name */
  environment: string;
}
/**
 * Default logger configuration
 */
  minLevel: LogLevel.INFO,
  enableConsole: true,
  enableRemote: false,
  enableStructured: true,
  maxLogs: 1000,
  enablePerformance: true,
  environment: process.env['NODE_ENV'] || 'development'
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
 * logger.info('User logged in', undefined, { userId: '123' });
 * logger.error('API request failed', { error: err }, err);
 * ```
 */
export class EnhancedLogger {
  private static instance: EnhancedLogger;
  private config: LoggerConfig;
  private logs: LogEntry[] = [];
  private performanceMarks: Map<string, number> = new Map();
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
   * Reset singleton instance (mainly for testing)
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
   * @param source - Optional source identifier
   * @example
   * ```typescript
   * logger.debug('Component rendered', { props: componentProps }, 'MyComponent');
   * ```
   */
  public debug(message: string, data?: Record<string, unknown>, source?: string): void {
    this.log(LogLevel.DEBUG, message, data, source);
  }
  /**
   * Log an info message
   *
   * @param message - The log message
   * @param data - Optional data to include
   * @param source - Optional source identifier
   * @example
   * ```typescript
   * logger.info('User action completed', { action: 'submit_form' }, 'FormComponent');
   * ```
   */
  public info(message: string, data?: Record<string, unknown>, source?: string): void {
    this.log(LogLevel.INFO, message, data, source);
  }
  /**
   * Log a warning message
   *
   * @param message - The log message
   * @param data - Optional data to include
   * @param source - Optional source identifier
   * @example
   * ```typescript
   * logger.warn('Deprecated API used', { api: 'oldFunction' }, 'LegacyModule');
   * ```
   */
  public warn(message: string, data?: Record<string, unknown>, source?: string): void {
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
   *   logger.error('Operation failed', { operation: 'fetchData' }, err, 'DataService');
   * }
   * ```
   */
  public error(
    message: string,
    data?: Record<string, unknown>,
    error?: Error,
    source?: string
  ): void {
    const logData = { ...data };
    if (error) {
      logData.error = {
        name: error.name,
        message: error.message,
        stack: error.stack
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
    message: string,
    data?: Record<string, unknown>,
    error?: Error,
    source?: string
  ): void {
    const logData = { ...data };
    if (error) {
      logData.error = {
        name: error.name,
        message: error.message,
        stack: error.stack
      };
    }
    this.log(LogLevel.FATAL, message, logData, source, error?.stack);
  }
  /**
   * Start a performance measurement
   *
   * @param markName - Unique name for the performance mark
   * @example
   * ```typescript
   * logger.startPerformance('api_call');
   * // ... perform operation
   * logger.endPerformance('api_call'); // Logs the duration
   * ```
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
  public endPerformance(markName: string, data?: Record<string, unknown>): number | undefined {
    if (!this.config.enablePerformance) return undefined;
    const startTime = this.performanceMarks.get(markName);
    if (!startTime) {
      this.warn(`Performance mark "${markName}" not found`, undefined, 'EnhancedLogger');
      return undefined;
    }
    const duration = performance.now() - startTime;
    this.performanceMarks.delete(markName);
    this.info(
      `Performance: ${markName}`,
      {
        duration: `${duration.toFixed(2)}ms`,
        ...data
      },
      'PerformanceMonitor'
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
    level: LogLevel,
    message: string,
    data?: Record<string, unknown>,
    source?: string,
    stack?: string
  ): void {
    // Check if log level meets minimum threshold
    if (level < this.config.minLevel) return;
    const logEntry: LogEntry = {
      id: this.generateLogId(),
      level,
      message,
      timestamp: new Date(),
      data,
      source,
      stack,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
      environment: this.config.environment
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
    return this.config.environment === 'development' || process.env['NODE_ENV'] === 'development';
  }
  /**
   * Output log to console
   *
   * @private
   * @param entry - Log entry to output
   */
  private logToConsole(entry: LogEntry): void {
    const levelName = LogLevel[entry.level];
    const timestamp = entry.timestamp.toISOString();
    const source = entry.source ? ` [${entry.source}]` : '';
    const message = `[${timestamp}] ${levelName}${source}: ${entry.message}`;
    if (this.config.enableStructured) {
      const structuredLog = {
        timestamp: entry.timestamp,
        level: levelName,
        message: entry.message,
        source: entry.source,
        data: entry.data
      };
      switch (entry.level) {
        case LogLevel.DEBUG:
          if (this.isDevelopment()) {
            logger.debug(message, structuredLog);
          }
          break;
        case LogLevel.INFO:
          if (this.isDevelopment()) {
            }
          break;
        case LogLevel.WARN:
          logger.warn(message, structuredLog);
          break;
        case LogLevel.ERROR:
        case LogLevel.FATAL:
          logger.error(message, structuredLog);
          if (entry.stack) {
            logger.info('Stack trace:', { stack: entry.stack }, 'Logger');
          }
          break;
      }
    } else {
      // Simple console output
      switch (entry.level) {
        case LogLevel.DEBUG:
          if (this.isDevelopment()) {
            logger.debug(message, entry.data);
          }
          break;
        case LogLevel.INFO:
          if (this.isDevelopment()) {
            }
          break;
        case LogLevel.WARN:
          logger.warn(message, entry.data);
          break;
        case LogLevel.ERROR:
        case LogLevel.FATAL:
          logger.error(message, entry.data);
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...entry,
          timestamp: entry.timestamp.toISOString()
        })
      });
    } catch (error) {
      // Fallback to console if remote logging fails
      logger.error('Failed to send log to remote endpoint:', {
        error: error instanceof Error ? error.message : String(error)
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
    return `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
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
      if (!sessionId) {
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
  public getLogsBySource(source: string): LogEntry[] {
    return this.logs.filter(log => log.source === source);
  }
  /**
   * Get log statistics
   *
   * @returns Object containing log statistics
   */
  public getStatistics(): {
    total: number;
    byLevel: Record<string, number>;
    bySource: Record<string, number>;
  } {
    const byLevel: Record<string, number> = {};
    const bySource: Record<string, number> = {};
    this.logs.forEach(log => {
      const levelName = LogLevel[log.level];
      byLevel[levelName] = (byLevel[levelName] || 0) + 1;
      if (log.source) {
        bySource[log.source] = (bySource[log.source] || 0) + 1;
      }
    });
    return {
      total: this.logs.length,
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
  public configure(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config };
  }
  /**
   * Export logs as JSON
   *
   * @returns JSON string of all logs
   */
  public exportLogs(): string {
    return JSON.stringify(
      this.logs.map(log => ({
        ...log,
        timestamp: log.timestamp.toISOString()
      })),
      null,
      2
    );
  }
}
// Export singleton instance
export const logger = EnhancedLogger.getInstance();
// Export default
export default EnhancedLogger;
