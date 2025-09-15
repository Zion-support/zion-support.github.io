// Production logger utility
<<<<<<< HEAD
export const productionLogger = {
  log: (message: string, ...args: any[]): void => {
    if (process.env.NODE_ENV === 'development') {
      console.log(message, ...args);
    }
  },

  error: (message: string, ...args: any[]): void => {
    if (process.env.NODE_ENV === 'development') {
      console.error(message, ...args);
    }
  },

  warn: (message: string, ...args: any[]): void => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(message, ...args);
    }
  },

  info: (message: string, ...args: any[]): void => {
    if (process.env.NODE_ENV === 'development') {
      console.info(message, ...args);
    }
  }
};

// Export the specific function that's being imported
export const logErrorToProduction = (error: Error | string, context?: string): void => {
  const errorMessage = error instanceof Error ? error.message : error;
  const fullMessage = context ? `${context}: ${errorMessage}` : errorMessage;
  
  if (process.env.NODE_ENV === 'development') {
    console.error('[PRODUCTION LOGGER]', fullMessage);
  }
  
  // In production, you might want to send this to an error tracking service
  // like Sentry, LogRocket, etc.
};

=======
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
  DEBUG: 'debug',
};

class ProductionLogger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private logLevel = this.isDevelopment ? 'debug' : 'info';

  private shouldLog(level: string): boolean {
    const levels = ['error', 'warn', 'info', 'debug'];
    const currentLevelIndex = levels.indexOf(this.logLevel);
    const messageLevelIndex = levels.indexOf(level);
    return messageLevelIndex <= currentLevelIndex;
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog(LOG_LEVELS.ERROR)) {
      console.error(`[ERROR] ${message}`, ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog(LOG_LEVELS.WARN)) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog(LOG_LEVELS.INFO)) {
      console.info(`[INFO] ${message}`, ...args);
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog(LOG_LEVELS.DEBUG)) {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  }
}

export const productionLogger = new ProductionLogger();
>>>>>>> cursor/create-and-deploy-new-content-c934
export default productionLogger;