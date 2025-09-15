// Production logger utility for handling logging in production environments

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
  DEBUG: 'debug',
};

interface LogEntry {
  level: string;
  message: string;
  timestamp: string;
  context?: Record<string, any>;
  error?: Error;
}

class ProductionLogger {
  private isDevelopment: boolean;
  private logLevel: string;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.logLevel = process.env.LOG_LEVEL || (this.isDevelopment ? 'debug' : 'error');
  }

  private shouldLog(level: string): boolean {
    const levels = ['error', 'warn', 'info', 'debug'];
    const currentLevelIndex = levels.indexOf(this.logLevel);
    const messageLevelIndex = levels.indexOf(level);
    return messageLevelIndex <= currentLevelIndex;
  }

  private formatMessage(level: string, message: string, context?: Record<string, any>, error?: Error): LogEntry {
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

  private log(level: string, message: string, context?: Record<string, any>, error?: Error): void {
    if (!this.shouldLog(level)) {
      return;
    }

    const logEntry = this.formatMessage(level, message, context, error);

    if (this.isDevelopment) {
      // In development, use console methods with colors
      const consoleMethod = level === 'error' ? console.error :
                           level === 'warn' ? console.warn :
                           level === 'info' ? console.info :
                           console.log;

      consoleMethod(`[${logEntry.timestamp}] ${level.toUpperCase()}:`, message);
      if (context) {
        consoleMethod('Context:', context);
      }
      if (error) {
        consoleMethod('Error:', error);
      }
    } else {
      // In production, send to external logging service
      this.sendToLoggingService(logEntry);
    }
  }

  private sendToLoggingService(logEntry: LogEntry): void {
    // In a real application, you would send this to your logging service
    // For now, we'll just store it in localStorage as a fallback
    try {
      const logs = JSON.parse(localStorage.getItem('production-logs') || '[]');
      logs.push(logEntry);
      
      // Keep only the last 100 logs
      if (logs.length > 100) {
        logs.splice(0, logs.length - 100);
      }
      
      localStorage.setItem('production-logs', JSON.stringify(logs));
    } catch (error) {
      // If localStorage fails, we can't do much
      console.error('Failed to store log entry:', error);
    }
  }

  error(message: string, context?: Record<string, any>, error?: Error): void {
    this.log(LOG_LEVELS.ERROR, message, context, error);
  }

  warn(message: string, context?: Record<string, any>): void {
    this.log(LOG_LEVELS.WARN, message, context);
  }

  info(message: string, context?: Record<string, any>): void {
    this.log(LOG_LEVELS.INFO, message, context);
  }

  debug(message: string, context?: Record<string, any>): void {
    this.log(LOG_LEVELS.DEBUG, message, context);
  }

  // Utility method to get stored logs
  getStoredLogs(): LogEntry[] {
    try {
      return JSON.parse(localStorage.getItem('production-logs') || '[]');
    } catch (error) {
      return [];
    }
  }

  // Utility method to clear stored logs
  clearStoredLogs(): void {
    try {
      localStorage.removeItem('production-logs');
    } catch (error) {
      console.error('Failed to clear stored logs:', error);
    }
  }
}

// Create and export a singleton instance
const productionLogger = new ProductionLogger();

export default productionLogger;

// Export the class for testing purposes
export { ProductionLogger };
