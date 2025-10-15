<<<<<<< HEAD
/**
 * Production-safe logger utility
 * Only logs in development environment
 */
type: LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug';";"

interface LoggerConfig {
  enableConsole: boolean
  enableRemote: boolean
  remoteEndpoint?: string
}

class Logger {
  private config: LoggerConfig

=======
/**;
 * Production-safe logger utility;
 * Only logs in development environment;
 */;
<<<<<<< HEAD
type: LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug';";";";";";

=======
type: LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug';";";";";";";";
;
>>>>>>> main
interface LoggerConfig {
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;,
};
class Logger {
<<<<<<< HEAD
    private config: LoggerConfig;

  constructor(config: LoggerConfig = { enableConsole: true,
    enableRemote: false 

  }) {";
    this.config = config;";";
  }";";";
;"
  private shouldLog(): boolean {';';";";";";";"
    return process.env.NODE_ENV === 'development' || this.config.enableConsole;";";";";";
  };
=======
  private config: LoggerConfig;
;
>>>>>>> main
  constructor(config: LoggerConfig = { enableConsole: true, enableRemote: false }) {
    this.config = config
  }
<<<<<<< HEAD

  private shouldLog(): boolean {';';";"
    return process.env.NODE_ENV === 'development' || this.config.enableConsole;";";"
  }

  private formatMessage(level: LogLevel, message: string): string {
    const  timestamp = new Date().toISOString()
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`
=======
;
  private shouldLog(): boolean {';';";";";";";";";
    return process.env.NODE_ENV === 'development' || this.config.enableConsole;";";";";";";";
  }
;
>>>>>>> main
  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();,
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
<<<<<<< HEAD
  };";
  log(message: string, ...args: any[";";
    ";";";
  ]): void {"
    if (this.shouldLog()) {';';";";";";";",";
      console.log(this.formatMessage('log', message), ...args);";";";";";
    };
  };";
  info(message: string, ...args: any[";";
    ";";";
  ]): void {"
    if (this.shouldLog()) {';';";";";";";",";
      console.info(this.formatMessage('info', message), ...args);";";";";";
    };
  };";
  warn(message: string, ...args: any[";";
    ";";";
  ]): void {"
    if (this.shouldLog()) {';';";";";";";",";
      console.warn(this.formatMessage('warn', message), ...args);";";";";";
    };
  };";
  error(message: string, ...args: any[";";
    ";";";
  ]): void {",";
    // Always log errors, even in production';';";";";";";"
    console.error(this.formatMessage('error', message), ...args);";";";";";";";";
    // Send to remote logging service in production;"
    if (this.config.enableRemote) {';';";";";";";"
      this.sendToRemote('error', message, args);";";";";";
    };
  };";
  debug(message: string, ...args: any[";";
    ";";";
  ]): void {"
    if (this.shouldLog()) {';';";";";";";",";
      console.debug(this.formatMessage('debug', message), ...args);";";";";";
    };
  };
  private async sendToRemote(level: LogLevel, message: string, args: any[
  ]): Promise<void> {";
    try {";";
";";";
      if (this.config.remoteEndpoint) {",";
        await fetch(this.config.remoteEndpoint, {';';";";";";";"
          method: 'POST',;";";";";";"
          headers: {';';";";";";";"
            'Content-Type': 'application/json';";";";";";
,
  } catch (error) {
    console.error(error);
  };
  };
          body: JSON.stringify({,
    level,;
=======
>>>>>>> main
  }

  log(message: string, ...args: any[]): void {
<<<<<<< HEAD
    if (this.shouldLog()) {';';";"
      console.log(this.formatMessage('log', message), ...args);";";"
=======
    if (this.shouldLog()) {';';";";";";";";";
      console.log(this.formatMessage('log', message), ...args);";";";";";";";
>>>>>>> main
    }
  }

  info(message: string, ...args: any[]): void {
<<<<<<< HEAD
    if (this.shouldLog()) {';';";"
      console.info(this.formatMessage('info', message), ...args);";";"
=======
    if (this.shouldLog()) {';';";";";";";";";
      console.info(this.formatMessage('info', message), ...args);";";";";";";";
>>>>>>> main
    }
  }

  warn(message: string, ...args: any[]): void {
<<<<<<< HEAD
    if (this.shouldLog()) {';';";"
      console.warn(this.formatMessage('warn', message), ...args);";";"
=======
    if (this.shouldLog()) {';';";";";";";";";
      console.warn(this.formatMessage('warn', message), ...args);";";";";";";";
>>>>>>> main
    }
  }

  error(message: string, ...args: any[]): void {
<<<<<<< HEAD
    // Always log errors, even in production';';";"
    console.error(this.formatMessage('error', message), ...args);";";"
    // Send to remote logging service in production
    if (this.config.enableRemote) {';';";"
      this.sendToRemote('error', message, args);";";"
=======
    // Always log errors, even in production';';";";";";";";";
    console.error(this.formatMessage('error', message), ...args);";";";";";";";
    // Send to remote logging service in production;
    if (this.config.enableRemote) {';';";";";";";";";
      this.sendToRemote('error', message, args);";";";";";";";
>>>>>>> main
    }
  }

  debug(message: string, ...args: any[]): void {
<<<<<<< HEAD
    if (this.shouldLog()) {';';";"
      console.debug(this.formatMessage('debug', message), ...args);";";"
=======
    if (this.shouldLog()) {';';";";";";";";";
      console.debug(this.formatMessage('debug', message), ...args);";";";";";";";
>>>>>>> main
    }
  }

  private async sendToRemote(level: LogLevel, message: string, args: any[]): Promise<void> {
    try {
      if (this.config.remoteEndpoint) {
<<<<<<< HEAD
        await fetch(this.config.remoteEndpoint, {';';";"
          method= 'POST',;";";"
          headers: {';';";"
            'Content-Type': 'application/json';";"
          },
          body: JSON.stringify({
            level,
            message,
            args,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent
          })
        })
      }
    } catch {
      // Silently fail remote logging
    }
  }
}

// Create singleton instance
const  logger = new Logger({';';";"
  enableConsole: process.env.NODE_ENV === 'development',';";"
  enableRemote: process.env.NODE_ENV === 'production',;";";"
  remoteEndpoint: process.env.REACT_APP_LOGGING_ENDPOINT
})

export default logger;';'
=======
        await fetch(this.config.remoteEndpoint, {';';";";";";";";";
          method: 'POST',;";";";";";";";
          headers: {';';";";";";";";";
            'Content-Type': 'application/json';";";";";";";";
          },;
          body: JSON.stringify({
            level,;
>>>>>>> main
            message,;
            args,;
            timestamp: new Date().toISOString(),;
            url: window.location.href,;
            userAgent: navigator.userAgent;
  
  })
        });
      };
    } catch {
      // Silently fail remote logging;
<<<<<<< HEAD
    };
  };
};";
// Create singleton instance;";";
const logger = new Logger({";";";
    "
    ';';";";";";";"
  enableConsole: process.env.NODE_ENV === 'development',';";";";";";"
  enableRemote: process.env.NODE_ENV === 'production',;";";";";";
  remoteEndpoint: process.env.REACT_APP_LOGGING_ENDPOINT;";
  ";";
  });";";";
;"
export default logger;';';";";";";
"
=======
    }
  }
}
;
// Create singleton instance;
const: logger = new Logger({';';";";";";";";";
  enableConsole: process.env.NODE_ENV === 'development',';";";";";";";";
  enableRemote: process.env.NODE_ENV === 'production',;";";";";";";";
  remoteEndpoint: process.env.REACT_APP_LOGGING_ENDPOINT;
});
;
export default logger;';';";";";
>>>>>>> main
>>>>>>> main
