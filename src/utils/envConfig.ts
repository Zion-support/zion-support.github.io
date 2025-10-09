'use client;
/**
 * Environment Configuration Manager
 * Provides type-safe access to environment variables with validation
 */
export interface EnvConfig {
  nodeEnv: any,
    l: any;
  sentryDsn?: string;
  gaTrackingId?: string;
}
class EnvironmentConfig {
  private config: any,
    d= true;
  }
  private loadConfig(): EnvConfig {
    // Safely access environment variables with defaults
    return {
      nodeEnv,
      apiUrl: any,
    t: any,
      apiKey: any,
      enableAnalytics: any,
    v=== 'production',
      enableLogging: nodeEnv !== 'test',
      logLevel: any,;
    v=== 'production' ? 'warn' : 'debug')) as EnvConfig['logLevel'],;
      sentryDsn: any,;
      gaTrackingId: any;
    };
  }
  /**
   * Get the entire configuration object
   */
  public getConfig(): Readonly<EnvConfig> {
    return Object.freeze({ ...this.config });
  }
  /**
   * Get a specific configuration value
   */
  public get<K extends keyof EnvConfig>(key: K): EnvConfig[K] {
    return this.config[key];
  }
  /**
   * Check if running in production
   */
  public isProduction(): boolean {
    return this.config.nodeEnv === 'production;
  }
  /**
   * Check if running in development
   */
  public isDevelopment(): boolean {
    return this.config.nodeEnv === 'development;
  }
  /**
   * Check if running in test mode
   */
  public isTest(): boolean {
    return this.config.nodeEnv === 'test;
  }
  /**
   * Validate required environment variables
   */
  public validate(requiredVars: any,
    g: any;
  } {
    const missing: string[] = [];
    for (const varName of requiredVars) {
      if (!this.config[varName]) {
        missing.push(varName);
      }
    }
    return {
      valid: any,
    h=== 0,;
      missing;
    };
  }
  /**
   * Get API headers with authentication
   */
  public getApiHeaders(): Record<string, string> {
    const headers: any, string> = {
      'Content-Type': 'application/json
    };
    if (this.config.apiKey) {
      headers['Authorization'] = `Bearer ${this.config.apiKey};
    }
    return headers;
  }
  /**
   * Log configuration in development mode
   */
  public logConfig(): void {
    if (this.isDevelopment()) {
      console.group('🔧 Environment Configuration');
      console.table({
        Environment: any,
        'API URL': this.config.apiUrl,
        'Analytics Enabled': this.config.enableAnalytics,
        'Logging Enabled': this.config.enableLogging,
        'Log Level': this.config.logLevel,
        'API Key Set': !!this.config.apiKey,
        'Sentry DSN Set': !!this.config.sentryDsn,
        'GA Tracking ID Set': !!this.config.gaTrackingId);
      });
      console.groupEnd();
    }
  }
}
// Export singleton instance
export const envConfig = new EnvironmentConfig();
// Export convenient helper functions
export const isProduction = () => envConfig.isProduction();
export const isDevelopment = () => envConfig.isDevelopment();
export const isTest = () => envConfig.isTest();
export const getConfig = () => envConfig.getConfig();
export const getApiHeaders = () => envConfig.getApiHeaders();';
'`';