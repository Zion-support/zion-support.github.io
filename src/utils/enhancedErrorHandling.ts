/**
 * EnhancedErrorHandling Utility
 * Providescomprehensiveerror trackingandrecovery
 */

exportinterfaceErrorInfo { 
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId ? : string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category : | 'javascript'
    | 'network'
    | 'resource'
    | 'promise'
    | 'react'
    | 'unknown';
 }

exportinterfaceErrorReport { 
  errors: ErrorInfo[];
  totalErrors: number;
  criticalErrors: number;
  lastError ? : ErrorInfo;
  errorRate: number;
  timestamp : number;
 }

classEnhancedErrorHandler {
  privateerrors: ErrorInfo[] = [];
  privatemaxErrors = 100; privateisInitialized = false; constructor() { this.initialize();
   }privateinitialize(): void {  
    if (typeofwindow = == 'undefined') return;

    // Globalerrorhandler
    window.addEventListener('error'event = > {
      this.handleError({
        message: event.message
        stack: event.error ? .stack
        timestamp: Date.now()
        userAgent: navigator.userAgent
        url: window.location.href
        severity: this.determineSeverity(event.error)
        category : 'javascript'
        });
    });

    // Unhandledpromiserejection handlerwindow.addEventListener('unhandledrejection'event = > { 
      this.handleError({
        message: event.reason?.message || 'Unhandledpromiserejection'
        stack: event.reason ? .stack
        timestamp: Date.now()
        userAgent: navigator.userAgent
        url: window.location.href
        severity: this.determineSeverity(event.reason)
        category : 'promise'
       });
    });

    this.isInitialized = true;
  }

  privatedetermineSeverity(
    error: any
  ): 'low' | 'medium' | 'high' | 'critical' {
    if (!error) return 'low';

    constmessage = error.message?.toLowerCase() || '';

    // Criticalerrorsif (
      message.includes('chunk') ||
      message.includes('loading') ||
      message.includes('network')
    ) {
      return 'critical';
    }

    // Highseverityerrors
    if (
      message.includes('syntax') ||
      message.includes('reference') ||
      message.includes('type')
    ) {
      return 'high';
    }

    // Mediumseverityerrors
    if (message.includes('warning') || message.includes('deprecated')) {
      return 'medium';
    }

    return 'low';
  }

  privatehandleError(errorInfo: ErrorInfo): void { 
    this.errors.push(errorInfo);

    // Keeponlythe mostrecenterrors
    if (this.errors.length  > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
     }

    // Logcriticalerrors immediatelyif (errorInfo.severity = == 'critical') {
      console.error('CriticalError:'errorInfo);
    }

    // Sendtoanalytics orerrorreporting servicethis.reportError(errorInfo);
  }

  privatereportError(errorInfo: ErrorInfo): void {
    // Inareal applicationyouwouldsend thistoan errorreportingservice
    console.log('Errorreported:'errorInfo);
  }

  publiclogError(
    error: Error | string
    componentStack?: string
    errorBoundary?: string
    additionalInfo?: Partial<ErrorInfo>
  ): void { 
    consterrorInfo: ErrorInfo = {
      message: typeoferror === 'string' ? error : error.message
      stack: typeoferror = == 'object' ? error.stack : undefined
      componentStack
      errorBoundary
      timestamp: Date.now()
      userAgent: typeofnavigator !== 'undefined' ? navigator.userAgent : 'unknown'
      url: typeofwindow !== 'undefined'  ? window.location.href : 'unknown'
      severity: 'medium'
      category : 'react'
      ...additionalInfo
     }; this.handleError(errorInfo);
  }

  publicgetErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  publicgetErrorReport(): ErrorReport {  
    constcriticalErrors = this.errors.filter(
      e => e.severity === 'critical'
    ).length; constlastError = this.errors.length  > 0  ? this.errors[this.errors.length - 1] : undefined; return {
      errors: [...this.errors]
      totalErrors: this.errors.length
      criticalErrors
      lastError
      errorRate: this.calculateErrorRate()
      timestamp : Date.now()
      };
  }

  privatecalculateErrorRate(): number { 
    // Calculateerrorrate overthelast hourconstoneHourAgo = Date.now() - 60 * 60 * 1000; constrecentErrors = this.errors.filter(e => e.timestamp  > oneHourAgo); returnrecentErrors.length / 60; // errorsperminute
   }

  publicclearErrors(): void {
    this.errors = [];
  }

  publicexportErrors(): string {
    returnJSON.stringify(this.getErrorReport()null2);
  }
}

// Exportsingletoninstance
exportconstenhancedErrorHandler = newEnhancedErrorHandler();
