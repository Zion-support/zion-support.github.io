type LogLevel = 'info' | 'log' | 'error' | 'debug';

interface LoggerConfig {
  enableRemote: boolean;
  remoteEndpoint?: string;
  logLevel: LogLevel;
}

export const logger = {
  config: {
    enableRemote: false,
    logLevel: 'info' as LogLevel
  } as LoggerConfig,

  info: (message: string, ...args: any[]): void => {
    console.log(`[INFO] ${message}`, ...args);
  },

  log(message: string, ...args: any[]): void {
    if (this.shouldLog()) {
      console.log(this.formatMessage('log', message), ...args);
    }
  },

  error: (message: string, ...args: any[]): void => {
    console.error(`[ERROR] ${message}`, ...args);
  },

  debug: (message: string, ...args: any[]): void => {
    console.debug(`[DEBUG] ${message}`, ...args);
  },

  shouldLog(): boolean {
    const levels = ['error', 'warn', 'info', 'debug'];
    return levels.indexOf(this.config.logLevel) >= levels.indexOf('info');
  },

  formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  },

  async sendToRemote(level: LogLevel, message: string, args: any[]): Promise<void> {
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
      console.error('Failed to send log to remote:', error);
    }
  }
};

export default logger;