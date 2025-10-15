export interface LogContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  timestamp?: number;
}

export interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  context?: LogContext;
  timestamp: number;
  stack?: string;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private logs: LogEntry[] = [];
  private maxLogs = 1000;

  private shouldLog(level: string): boolean {
    if (this.isDevelopment) return true;
    return level === 'error' || level === 'warn';
  }

  private formatMessage(level: string, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? ` [${JSON.stringify(context)}]` : '';
    return `[${timestamp}] [${level.toUpperCase()}]${contextStr} ${message}`;
  }

  private addLog(entry: LogEntry): void {
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }
  }

  debug(message: string, context?: LogContext): void {
    if (this.shouldLog('debug')) {
      const entry: LogEntry = {
        level: 'debug',
        message,
        context: context ?? undefined,
        timestamp: Date.now(),
        stack: undefined,
      };
      this.addLog(entry);
      console.debug(this.formatMessage('debug', message, context));
    }
  }

  info(message: string, context?: LogContext): void {
    if (this.shouldLog('info')) {
      const entry: LogEntry = {
        level: 'info',
        message,
        context: context ?? undefined,
        timestamp: Date.now(),
        stack: undefined,
      };
      this.addLog(entry);
      console.info(this.formatMessage('info', message, context));
    }
  }

  warn(message: string, context?: LogContext): void {
    if (this.shouldLog('warn')) {
      const entry: LogEntry = {
        level: 'warn',
        message,
        context: context ?? undefined,
        timestamp: Date.now(),
        stack: undefined,
      };
      this.addLog(entry);
      console.warn(this.formatMessage('warn', message, context));
    }
  }

  error(message: string, error?: Error, context?: LogContext): void {
    const entry: LogEntry = {
      level: 'error',
      message,
      context: context ?? undefined,
      timestamp: Date.now(),
      stack: error?.stack ?? undefined,
    };
    this.addLog(entry);
    console.error(this.formatMessage('error', message, context), error);
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
  }

  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }
}

export const logger = new Logger();