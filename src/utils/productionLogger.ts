/**
 * Production-safe logging utilities
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
  context?: Record<string, any>;
  error?: Error;
}

class ProductionLogger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private logHistory: LogEntry[] = [];
  private maxHistorySize = 100;

  private createLogEntry(level: LogLevel, message: string, context?: Record<string, any>, error?: Error): LogEntry {
    return {
      level,
      message,
      timestamp: Date.now(),
      context,
      error,
    };
  }

  private addToHistory(entry: LogEntry): void {
    this.logHistory.push(entry);
    
    // Keep only the most recent entries
    if (this.logHistory.length > this.maxHistorySize) {
      this.logHistory = this.logHistory.slice(-this.maxHistorySize);
    }
  }

  private shouldLog(level: LogLevel): boolean {
    if (this.isDevelopment) {
      return true;
    }

    // In production, only log warnings and errors
    return level === 'warn' || level === 'error';
  }

  debug(message: string, context?: Record<string, any>): void {
    const entry = this.createLogEntry('debug', message, context);
    
    if (this.shouldLog('debug')) {
      console.debug(`[DEBUG] ${message}`, context || '');
    }
    
    this.addToHistory(entry);
  }

  info(message: string, context?: Record<string, any>): void {
    const entry = this.createLogEntry('info', message, context);
    
    if (this.shouldLog('info')) {
      console.info(`[INFO] ${message}`, context || '');
    }
    
    this.addToHistory(entry);
  }

  warn(message: string, context?: Record<string, any>): void {
    const entry = this.createLogEntry('warn', message, context);
    
    if (this.shouldLog('warn')) {
      console.warn(`[WARN] ${message}`, context || '');
    }
    
    this.addToHistory(entry);
  }

  error(message: string, error?: Error, context?: Record<string, any>): void {
    const entry = this.createLogEntry('error', message, context, error);
    
    if (this.shouldLog('error')) {
      console.error(`[ERROR] ${message}`, error || '', context || '');
    }
    
    this.addToHistory(entry);
  }

  getLogHistory(): LogEntry[] {
    return [...this.logHistory];
  }

  clearHistory(): void {
    this.logHistory = [];
  }

  exportLogs(): string {
    return JSON.stringify(this.logHistory, null, 2);
  }
}

// Create singleton instance
export const logger = new ProductionLogger();

// Convenience functions
export const logDebug = (message: string, context?: Record<string, any>): void => {
  logger.debug(message, context);
};

export const logInfo = (message: string, context?: Record<string, any>): void => {
  logger.info(message, context);
};

export const logWarn = (message: string, context?: Record<string, any>): void => {
  logger.warn(message, context);
};

export const logError = (message: string, error?: Error, context?: Record<string, any>): void => {
  logger.error(message, error, context);
};

export const getLogHistory = (): LogEntry[] => {
  return logger.getLogHistory();
};

export const clearLogHistory = (): void => {
  logger.clearHistory();
};

export const exportLogs = (): string => {
  return logger.exportLogs();
};

export default logger;