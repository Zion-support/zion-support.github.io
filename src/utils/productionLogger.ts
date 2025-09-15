


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





