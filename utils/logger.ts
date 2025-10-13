// Logger utility for Zion Tech Group
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
  DEBUG: 'debug'
};

type LogLevelType = LogLevel[keyof LogLevel];

interface LogEntry {
  timestamp: string;
  level: LogLevelType;
  message: string;
  data?: any;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
}

class Logger {
  private isDevelopment: boolean;
  private logLevel: LogLevelType;
  private sessionId: string;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.logLevel = this.isDevelopment ? 'debug' : 'info';
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private shouldLog(level: LogLevelType): boolean {
    const levels = ['error', 'warn', 'info', 'debug'];
    const currentLevelIndex = levels.indexOf(this.logLevel);
    const messageLevelIndex = levels.indexOf(level);
    return messageLevelIndex <= currentLevelIndex;
  }

  private formatMessage(level: LogLevelType, message: string, data?: any): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      sessionId: this.sessionId,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined
    };
  }

  private logToConsole(level: LogLevelType, message: string, data?: any): void {
    if (!this.shouldLog(level)) return;

    const logEntry = this.formatMessage(level, message, data);
    
    switch (level) {
      case 'error':
        console.error(`[${logEntry.timestamp}] ERROR:`, message, data || '');
        break;
      case 'warn':
        console.warn(`[${logEntry.timestamp}] WARN:`, message, data || '');
        break;
      case 'info':
        console.info(`[${logEntry.timestamp}] INFO:`, message, data || '');
        break;
      case 'debug':
        console.debug(`[${logEntry.timestamp}] DEBUG:`, message, data || '');
        break;
    }
  }

  private logToStorage(level: LogLevelType, message: string, data?: any): void {
    try {
      const logEntry = this.formatMessage(level, message, data);
      const logs = JSON.parse(localStorage.getItem('app-logs') || '[]');
      logs.push(logEntry);
      
      // Keep only last 100 logs
      if (logs.length > 100) {
        logs.splice(0, logs.length - 100);
      }
      
      localStorage.setItem('app-logs', JSON.stringify(logs));
    } catch (error) {
      console.warn('Failed to log to storage:', error);
    }
  }

  private sendToAnalytics(level: LogLevelType, message: string, data?: any): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'log', {
        event_category: 'Logger',
        event_label: level,
        custom_parameter_message: message,
        custom_parameter_data: data ? JSON.stringify(data) : undefined
      });
    }
  }

  error(message: string, data?: any): void {
    this.logToConsole('error', message, data);
    this.logToStorage('error', message, data);
    this.sendToAnalytics('error', message, data);
  }

  warn(message: string, data?: any): void {
    this.logToConsole('warn', message, data);
    this.logToStorage('warn', message, data);
  }

  info(message: string, data?: any): void {
    this.logToConsole('info', message, data);
    this.logToStorage('info', message, data);
  }

  debug(message: string, data?: any): void {
    this.logToConsole('debug', message, data);
    this.logToStorage('debug', message, data);
  }

  // Performance logging
  performance(operation: string, startTime: number, data?: any): void {
    const duration = performance.now() - startTime;
    this.info(`Performance: ${operation}`, { duration, ...data });
  }

  // User action logging
  userAction(action: string, data?: any): void {
    this.info(`User Action: ${action}`, data);
  }

  // Error boundary logging
  errorBoundary(error: Error, errorInfo: any): void {
    this.error('Error Boundary Caught Error', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack
    });
  }

  // API request logging
  apiRequest(method: string, url: string, data?: any): void {
    this.debug(`API Request: ${method} ${url}`, data);
  }

  apiResponse(method: string, url: string, status: number, data?: any): void {
    const level = status >= 400 ? 'error' : 'info';
    this[level](`API Response: ${method} ${url}`, { status, ...data });
  }

  // Get all logs
  getLogs(): LogEntry[] {
    try {
      return JSON.parse(localStorage.getItem('app-logs') || '[]');
    } catch (error) {
      this.error('Failed to get logs from storage', error);
      return [];
    }
  }

  // Clear logs
  clearLogs(): void {
    localStorage.removeItem('app-logs');
    this.info('Logs cleared');
  }

  // Export logs
  exportLogs(): string {
    const logs = this.getLogs();
    return JSON.stringify(logs, null, 2);
  }
}

// Create singleton instance
const logger = new Logger();

export default logger;