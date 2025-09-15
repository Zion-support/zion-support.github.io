<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Production-safe logging utility
=======
<<<<<<< HEAD
<<<<<<< HEAD
// Production logger utility for handling logging in production environment

=======
// Production logger utility
>>>>>>> main
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
<<<<<<< HEAD
  DEBUG: 'debug'
};

interface LoggerOptions {
  enableConsole?: boolean;
  enableRemote?: boolean;
  remoteEndpoint?: string;
  logLevel?: keyof LogLevel;
}

class ProductionLogger {
  private options: Required<LoggerOptions>;
  private isDevelopment: boolean;

  constructor(options: LoggerOptions = {}) {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.options = {
      enableConsole: options.enableConsole ?? true,
      enableRemote: options.enableRemote ?? false,
      remoteEndpoint: options.remoteEndpoint ?? '/api/logs',
      logLevel: options.logLevel ?? 'INFO'
    };
  }

  private shouldLog(level: keyof LogLevel): boolean {
    const levelPriority = {
      ERROR: 0,
      WARN: 1,
      INFO: 2,
      DEBUG: 3
    };

    return levelPriority[level] <= levelPriority[this.options.logLevel];
  }

  private formatMessage(level: string, message: string, data?: any): string {
    const timestamp = new Date().toISOString();
    const formattedData = data ? ` | Data: ${JSON.stringify(data)}` : '';
    return `[${timestamp}] [${level}] ${message}${formattedData}`;
  }

  private async sendToRemote(level: string, message: string, data?: any): Promise<void> {
    if (!this.options.enableRemote) return;

    try {
      await fetch(this.options.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          level,
          message,
          data,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      });
    } catch (error) {
      // Silently fail for remote logging
      console.warn('Failed to send log to remote endpoint:', error);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

  error(message: string, data?: any): void {
    if (!this.shouldLog('ERROR')) return;

    const formattedMessage = this.formatMessage('ERROR', message, data);
    
    if (this.options.enableConsole) {
      console.error(formattedMessage);
    }

    if (!this.isDevelopment) {
      this.sendToRemote('ERROR', message, data);
    }
  }

  warn(message: string, data?: any): void {
    if (!this.shouldLog('WARN')) return;

    const formattedMessage = this.formatMessage('WARN', message, data);
    
    if (this.options.enableConsole) {
      console.warn(formattedMessage);
    }

    if (!this.isDevelopment) {
      this.sendToRemote('WARN', message, data);
    }
  }

  info(message: string, data?: any): void {
    if (!this.shouldLog('INFO')) return;

    const formattedMessage = this.formatMessage('INFO', message, data);
    
    if (this.options.enableConsole) {
      console.info(formattedMessage);
    }

    if (!this.isDevelopment) {
      this.sendToRemote('INFO', message, data);
    }
  }

  debug(message: string, data?: any): void {
    if (!this.shouldLog('DEBUG')) return;

    const formattedMessage = this.formatMessage('DEBUG', message, data);
    
    if (this.options.enableConsole) {
      console.debug(formattedMessage);
    }

    if (!this.isDevelopment) {
      this.sendToRemote('DEBUG', message, data);
=======
  DEBUG: 'debug',
};
=======
/**
 * Production-safe logging utilities
 */
>>>>>>> cursor/create-and-deploy-new-content-cc9d

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  data?: any;
  timestamp: string;
  url?: string;
  userAgent?: string;
}
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a

class ProductionLogger {
  private isDevelopment: boolean;
  private logLevel: LogLevel;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.logLevel = this.isDevelopment ? 'debug' : 'warn';
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: Record<LogLevel, number> = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3,
    };
    return levels[level] >= levels[this.logLevel];
  }

  private createLogEntry(level: LogLevel, message: string, data?: any): LogEntry {
    return {
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
    };
  }

  private log(level: LogLevel, message: string, data?: any): void {
    if (!this.shouldLog(level)) return;

    const logEntry = this.createLogEntry(level, message, data);

    if (this.isDevelopment) {
      // In development, use console methods with colors
      const colors: Record<LogLevel, string> = {
        debug: '#6B7280',
        info: '#3B82F6',
        warn: '#F59E0B',
        error: '#EF4444',
      };

      const style = `color: ${colors[level]}; font-weight: bold;`;
      console[level](`%c[${level.toUpperCase()}] ${message}`, style, data || '');
    } else {
      // In production, send to logging service or store locally
      this.sendToLoggingService(logEntry);
    }
  }

  private sendToLoggingService(logEntry: LogEntry): void {
    // In production, you would typically send logs to a service like:
    // - Sentry
    // - LogRocket
    // - DataDog
    // - Custom logging endpoint

    // For now, we'll store in localStorage as a fallback
    try {
      const logs = JSON.parse(localStorage.getItem('app_logs') || '[]');
      logs.push(logEntry);
      
      // Keep only last 100 logs
      if (logs.length > 100) {
        logs.splice(0, logs.length - 100);
      }
      
      localStorage.setItem('app_logs', JSON.stringify(logs));
    } catch (error) {
      // Silently fail if localStorage is not available
    }
  }

<<<<<<< HEAD
  debug(message: string, data?: any): void {
    this.log('debug', message, data);
  }

  info(message: string, data?: any): void {
    this.log('info', message, data);
  }

  warn(message: string, data?: any): void {
    this.log('warn', message, data);
  }

  error(message: string, data?: any): void {
    this.log('error', message, data);
  }

  // Get stored logs (useful for debugging in production)
  getStoredLogs(): LogEntry[] {
    try {
      return JSON.parse(localStorage.getItem('app_logs') || '[]');
    } catch {
      return [];
=======
<<<<<<< HEAD
  debug(message: string, ...args: any[]): void {
    if (this.shouldLog(LOG_LEVELS.DEBUG)) {
      console.debug(`[DEBUG] ${message}`, ...args);
>>>>>>> main
=======
  info(message: string, context?: Record<string, any>): void {
    const entry = this.createLogEntry('info', message, context);
    
    if (this.shouldLog('info')) {
      console.info(`[INFO] ${message}`, context || '');
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
    }
  }

  // Clear stored logs
  clearStoredLogs(): void {
    try {
      localStorage.removeItem('app_logs');
    } catch {
      // Silently fail
    }
  }

  // Set log level dynamically
  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
// Create default logger instance
const productionLogger = new ProductionLogger();

// Convenience exports
export const logInfo = (message: string, data?: any) => productionLogger.info(message, data);
export const logWarn = (message: string, data?: any) => productionLogger.warn(message, data);
export const logError = (message: string, data?: any) => productionLogger.error(message, data);
export const logDebug = (message: string, data?: any) => productionLogger.debug(message, data);
export const logErrorToProduction = (message: string, data?: any) => productionLogger.error(message, data);

export default productionLogger;
export { ProductionLogger, LOG_LEVELS };
export type { LoggerOptions };
=======
export const productionLogger = new ProductionLogger();
export default productionLogger;
>>>>>>> main
=======
// Create singleton instance
const productionLogger = new ProductionLogger();

<<<<<<< HEAD
export default productionLogger;
export { ProductionLogger, type LogLevel, type LogEntry };
=======
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
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
}

>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
}

>>>>>>> cursor/create-and-deploy-new-content-f4f2
