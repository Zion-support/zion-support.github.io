// Logger utility functions
export interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

export const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
};

export interface LoggerConfig {
  level: keyof LogLevel;
  enableConsole: boolean;
  enableFile: boolean;
}

export class Logger {
  private config: LoggerConfig;

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      level: 'INFO',
      enableConsole: true,
      enableFile: false,
      ...config
    };
  }

  private shouldLog(level: keyof LogLevel): boolean {
    const levels = Object.keys(LOG_LEVELS) as Array<keyof LogLevel>;
    const currentLevelIndex = levels.indexOf(this.config.level);
    const messageLevelIndex = levels.indexOf(level);
    return messageLevelIndex <= currentLevelIndex;
  }

  private formatMessage(level: keyof LogLevel, message: string, ...args: any[]): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${message} ${args.length > 0 ? JSON.stringify(args) : ''}`;
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog('ERROR')) {
      const formattedMessage = this.formatMessage('ERROR', message, ...args);
      if (this.config.enableConsole) {
        console.error(formattedMessage);
      }
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog('WARN')) {
      const formattedMessage = this.formatMessage('WARN', message, ...args);
      if (this.config.enableConsole) {
        console.warn(formattedMessage);
      }
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog('INFO')) {
      const formattedMessage = this.formatMessage('INFO', message, ...args);
      if (this.config.enableConsole) {
        console.info(formattedMessage);
      }
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog('DEBUG')) {
      const formattedMessage = this.formatMessage('DEBUG', message, ...args);
      if (this.config.enableConsole) {
        console.debug(formattedMessage);
      }
    }
  }
}

// Default logger instance
export const logger = new Logger();

export default logger;