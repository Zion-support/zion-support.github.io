type LogLevel = 'info' | 'log' | 'error' | 'debug' | 'warn';

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

  private shouldLog(): boolean {
    return this.config.enableConsole;
  }

  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
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
            url: typeof window !== 'undefined' ? window.location.href : '',
            userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
          })
        });
      }
    } catch (error) {
      console.error('Failed to send log to remote:', error);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.log(this.formatMessage('info', message), ...args);
    }
    if (this.config.enableRemote) {
      this.sendToRemote('info', message, args);
    }
  }

  log(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.log(this.formatMessage('log', message), ...args);
    }
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.error(this.formatMessage('error', message), ...args);
    }
    if (this.config.enableRemote) {
      this.sendToRemote('error', message, args);
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.debug(this.formatMessage('debug', message), ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.warn(this.formatMessage('warn', message), ...args);
    }
    if (this.config.enableRemote) {
      this.sendToRemote('warn', message, args);
    }
  }
}

export const logger = new Logger();

export default logger;