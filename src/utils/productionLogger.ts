/**
 * Production-ready logger that removes debug statements in production
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class ProductionLogger {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  debug(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.info(`[INFO] ${message}`, ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    console.warn(`[WARN] ${message}`, ...args);
  }

  error(message: string, ...args: any[]): void {
    console.error(`[ERROR] ${message}`, ...args);
  }

  log(level: LogLevel, message: string, ...args: any[]): void {
    this[level](message, ...args);
  }
}

export const logger = new ProductionLogger();
export default logger;