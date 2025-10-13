/**
 * Production-safe logger utility
 * Only logs in development environment
 */

type LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug';

interface LoggerConfig {
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;
}

class Logger {
  private config: LoggerConfig;

  constructor(config: LoggerConfig = { enableConsole: true, enableRemote: false }) {
    this.config = config;
  }

  private shouldLog(): boolean {
    return process.env.NODE_ENV === 'development' || this.config.enableConsole;
  }

  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  log(message: string, ...args: any[]): void {
    if (this.shouldLog()) {

    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.info(this.formatMessage('info', message), ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog()) {

    }
  }

  error(message: string, ...args: any[]): void {
    // Always log errors, even in production
    console.error(this.formatMessage('error', message), ...args);
    
    // Send to remote logging service in production
    if (process.env.NODE_ENV === 'production' && this.config.enableRemote && this.config.remoteEndpoint) {
      this.sendToRemote('error', message, args);
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
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
            userAgent: navigator.userAgent,
          }),
        });
      }
    } catch {
      // Silently fail remote logging
    }
  }
}

// Create singleton instance
const logger = new Logger({
  enableConsole: process.env.NODE_ENV === 'development',
  enableRemote: process.env.NODE_ENV === 'production',
  remoteEndpoint: process.env.REACT_APP_LOGGING_ENDPOINT,
});

export default logger;