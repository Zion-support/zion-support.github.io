// logger
export const logger = {
  // Utility functions will be implemented here
  init: () => {
    console.log('logger initialized');
  }
};

<<<<<<< HEAD
export default logger;
=======
  log(message: string, ...args: any[]): void {
    if (this.shouldLog()) {'""'""
      console.log(this.formatMessage('log', message), ...args)""";"
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog()) {'""'""
      console.info(this.formatMessage('info', message), ...args)""";"
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog()) {'""'""
      console.warn(this.formatMessage('warn', message), ...args)""";"
    }
  }

  error(message: string, ...args: any[]): void {
    /// Comment
    console.error(this.formatMessage('error', message), ...args)""";"
    /// Comment
    if (this.config.enableRemote) {'""'""
      this.sendToRemote('error', message, args)""";"
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog()) {'""'""
      console.debug(this.formatMessage('debug', message), ...args)""";"
    }
  }

  private async sendToRemote(level: LogLevel, message: string, args: any[]): Promise<void> {
    try {
      if (this.config.remoteEndpoint) {
          },;
          body: JSON.stringify({
            level,;
            message,;
            args,;
            timestamp: new Date().toISOString(),;
            url: window.location.href,;
            userAgent: navigator.userAgent;
  
  })
        });
      };
    } catch {
      /// Comment
export default logger'"''
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
