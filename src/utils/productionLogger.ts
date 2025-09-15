// Production logger utility for handling logging in production environment

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
    }
  }
}

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