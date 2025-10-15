// Logger utility for the Zion Tech Group website
type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LoggerConfig {
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;
  logLevel: LogLevel;
}

class Logger {
  private config: LoggerConfig = {
    enableConsole: true,
    enableRemote: false,
    logLevel: 'info'
  };

  constructor(config?: Partial<LoggerConfig>) {
    if (config) {
      this.config = { ...this.config, ...config };
    }
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    return levels.indexOf(level) >= levels.indexOf(this.config.logLevel);
  }

  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog('info')) {
      console.log(this.formatMessage('info', message), ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog('warn')) {
      console.warn(this.formatMessage('warn', message), ...args);
    }
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog('error')) {
      console.error(this.formatMessage('error', message), ...args);
    }
    
    if (this.config.enableRemote) {
      this.sendToRemote('error', message, args);
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog('debug')) {
      console.debug(this.formatMessage('debug', message), ...args);
    }
  }

  private async sendToRemote(level: LogLevel, message: string, args: any[]): Promise<void> {
    try {
      if (this.config.remoteEndpoint) {
        await fetch(this.config.remoteEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            level,
            message,
            args,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent
          })
        });
      }
    } catch (error) {
      console.error('Failed to send log to remote endpoint:', error);
    }
  }
}

// Create default logger instance
export const logger = new Logger();

// Export the Logger class for custom instances
export type { LogLevel, LoggerConfig };
export { Logger };
export default logger;