<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
<<<<<<< HEAD
// Production-safe logging utility
=======
<<<<<<< HEAD
<<<<<<< HEAD
// Production logger utility for handling logging in production environment

=======
// Production logger utility
>>>>>>> main
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
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
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a

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

=======
// Create singleton instance
const productionLogger = new ProductionLogger();

>>>>>>> cursor/create-and-deploy-new-content-cc9d
<<<<<<< HEAD
=======
}

>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
}

>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
