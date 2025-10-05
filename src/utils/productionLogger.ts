interface LogEntry {
  timestamp: string;
  level: 'error' | 'warn' | 'info' | 'debug';
  message: string;
  error?: any;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  stack?: string;
}

class ProductionLogger {
  private logQueue: LogEntry[] = [];
  private maxQueueSize = 100;
  private flushInterval = 30000; // 30 seconds
  private endpoint = process.env['VITE_LOGGING_ENDPOINT'] || '/api/logs';

  constructor() {
    // Flush logs periodically
    setInterval(() => this.flushLogs(), this.flushInterval);
    
    // Flush logs before page unload
    window.addEventListener('beforeunload', () => this.flushLogs());
  }

  private createLogEntry(
    level: LogEntry['level'],
    message: string,
    error?: any,
    additionalData?: Partial<LogEntry>
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      error: error ? this.serializeError(error) : undefined,
      url: window.location.href,
      userAgent: navigator.userAgent,
      stack: error?.stack,
      ...additionalData
    };
  }

  private serializeError(error: any): any {
    if (error instanceof Error) {
      return {
        name: error.name,
        message: error.message,
        stack: error.stack
      };
    }
    return error;
  }

  private async sendLogs(logs: LogEntry[]): Promise<void> {
    try {
      await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ logs }),
        keepalive: true // Ensure request completes even if page unloads
      });
    } catch (error) {
      console.warn('Failed to send logs to production logging service:', error);
    }
  }

  private async flushLogs(): Promise<void> {
    if (this.logQueue.length === 0) return;

    const logsToSend = [...this.logQueue];
    this.logQueue = [];

    await this.sendLogs(logsToSend);
  }

  private addToQueue(logEntry: LogEntry): void {
    this.logQueue.push(logEntry);

    // If queue is full, flush immediately
    if (this.logQueue.length >= this.maxQueueSize) {
      this.flushLogs();
    }
  }

  error(message: string, error?: any, additionalData?: Partial<LogEntry>): void {
    const logEntry = this.createLogEntry('error', message, error, additionalData);
    
    // Always log to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error(message, error);
    }

    // Add to production logging queue
    this.addToQueue(logEntry);
  }

  warn(message: string, error?: any, additionalData?: Partial<LogEntry>): void {
    const logEntry = this.createLogEntry('warn', message, error, additionalData);
    
    if (process.env['NODE_ENV'] === 'development') {
      console.warn(message, error);
    }

    this.addToQueue(logEntry);
  }

  info(message: string, additionalData?: Partial<LogEntry>): void {
    const logEntry = this.createLogEntry('info', message, undefined, additionalData);
    
    if (process.env['NODE_ENV'] === 'development') {
      console.info(message);
    }

    this.addToQueue(logEntry);
  }

  debug(message: string, additionalData?: Partial<LogEntry>): void {
    const logEntry = this.createLogEntry('debug', message, undefined, additionalData);
    
    if (process.env['NODE_ENV'] === 'development') {
      console.debug(message);
    }

    this.addToQueue(logEntry);
  }
}

// Create singleton instance
const productionLogger = new ProductionLogger();

// Export the main logging function for backward compatibility
export function logErrorToProduction(message: string, error?: any): void {
  productionLogger.error(message, error);
}

// Export the full logger for advanced usage
export { productionLogger as logger };