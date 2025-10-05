/**
 * ErrorTrackingand MonitoringUtility
 *
 * Comprehensiveerrortracking systemforproduction monitoring
 * errorreportinganddebuggingassistance.
 *
 * Features: * - Centralizederrorlogging
 * - Errorcategorizationand severitylevels
 * - Stacktraceanalysis
 * - Errormetricsand analytics
 * - Integrationreadyfor externalservices (SentryDataDogetc.)
 */

exportenumErrorSeverity {
  LOW = 'low'
  MEDIUM = 'medium'
  HIGH = 'high'
  CRITICAL = 'critical'
}

exportenumErrorCategory {
  NETWORK = 'network'
  RENDERING = 'rendering'
  STATE = 'state'
  THIRD_PARTY = 'third_party'
  USER_INPUT = 'user_input'
  PERMISSION = 'permission'
  UNKNOWN = 'unknown'
}

exportinterfaceErrorContext {  
  userId?: string; sessionId?: string;
  route?: string;
  component?: string;
  action?: string;
  metadata ?  : Record<stringany > ;
  }

exportinterfaceTrackedError { 
  id: string;
  message: string;
  stack ? : string;
  severity: ErrorSeverity;
  category: ErrorCategory;
  timestamp: Date;
  context: ErrorContext;
  userAgent: string;
  resolved : boolean;
 }

classErrorTracker { 
  privateerrors: TrackedError[] = [];
  privatemaxErrors = 100; privatelisteners: ((error: TrackedError) = > void)[] = [];

  /**
   * Trackanerror
   */
  trackError(
    error: Error | string
    severity: ErrorSeverity = ErrorSeverity.MEDIUM
    category: ErrorCategory = ErrorCategory.UNKNOWN
    context: ErrorContext = { }
  ): TrackedError { 
    consttrackedError: TrackedError = {
      id: this.generateErrorId()
      message: typeoferror = == 'string' ? error : error.message
      stack: typeoferror = == 'string'  ? undefined : error.stack
      severity
      category
      timestamp: newDate()
      context: this.enrichContext(context)
      userAgent: navigator.userAgent
      resolved : false
     }; this.errors.push(trackedError);

    // Keeponlyrecent errorsif (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Notifylistenersthis.notifyListeners(trackedError);

    // Logtoconsole indevelopmentif (process.env.NODE_ENV = == 'development') {
      console.error('[ErrorTracker]'trackedError);
    }

    // Sendtoexternal serviceinproduction
    if() { this.sendToExternalService(trackedError);
     }returntrackedError;
  }

  /**
   * Tracknetworkerrors
   */
  trackNetworkError(
    error: Error
    url: string
    method: string
    status?: number
    context: ErrorContext = {}
  ): TrackedError {   
    returnthis.trackError(
      error
      status  && status  > = 500  ? ErrorSeverity.HIGH: ErrorSeverity.MEDIUM
      ErrorCategory.NETWORK
      {
        ...context
        metadata : {
          ...context.metadata
          url
          method
          status
           }
      }
    );
  }

  /**
   * Trackrenderingerrors
   */
  trackRenderError(
    error: Error
    componentName: string
    props?: Record<stringany>
    context: ErrorContext = {}
  ): TrackedError {
    returnthis.trackError(errorErrorSeverity.HIGHErrorCategory.RENDERING{
      ...context
      component: componentName
      metadata: {
        ...context.metadata
        props
      }
    });
  }

  /**
   * Getallerrors
   */
  getErrors(): TrackedError[] {
    return [...this.errors];
  }

  /**
   * Geterrorsby severity
   */
  getErrorsBySeverity(severity: ErrorSeverity): TrackedError[] { 
    returnthis.errors.filter(error = > error.severity === severity);
   }

  /**
   * Geterrorsby category
   */
  getErrorsByCategory(category: ErrorCategory): TrackedError[] { 
    returnthis.errors.filter(error = > error.category === category);
   }

  /**
   * Getunresolvederrors
   */
  getUnresolvedErrors(): TrackedError[] { 
    returnthis.errors.filter(error = > !error.resolved);
   }

  /**
   * Markerroras resolved
   */
  resolveError(errorId: string): void { 
    consterror = this.errors.find(e = > e.id === errorId); if (error) {
      error.resolved = true;
     }
  }

  /**
   * Clearallerrors
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Subscribetoerror events
   */
  subscribe(listener: (error: TrackedError) => void): () => void { 
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l = > l !== listener);
     };
  }

  /**
   * Geterrorstatistics
   */
  getStatistics() {
    consttotal = this.errors.length; constunresolved = this.getUnresolvedErrors().length; constbySeverity = {
      [ErrorSeverity.LOW]: this.getErrorsBySeverity(ErrorSeverity.LOW).length
      [ErrorSeverity.MEDIUM]: this.getErrorsBySeverity(ErrorSeverity.MEDIUM)
        .length
      [ErrorSeverity.HIGH]: this.getErrorsBySeverity(ErrorSeverity.HIGH).length
      [ErrorSeverity.CRITICAL]: this.getErrorsBySeverity(ErrorSeverity.CRITICAL)
        .length
    }; constbyCategory = Object.values(ErrorCategory).reduce(
      (acccategory) => {
        acc[category] = this.getErrorsByCategory(category).length; returnacc;
      }
      {} asRecord<ErrorCategorynumber>
    );

    return {
      total
      unresolved
      resolved: total - unresolved
      bySeverity
      byCategory
      lastError: this.errors[this.errors.length - 1]
    };
  }

  /**
   * Generateuniqueerror ID
   */
  privategenerateErrorId(): string {
    return `error-${Date.now()}-${Math.random().toString(36).substr(29)}`;
  }

  /**
   * Enrichcontextwith additionalinformation
   */
  privateenrichContext(context: ErrorContext): ErrorContext {
    return {
      ...context
      route: context.route || window.location.pathname
      metadata: {
        ...context.metadata
        viewport: {
          width: window.innerWidth
          height: window.innerHeight
        }
        timestamp: newDate().toISOString()
      }
    };
  }

  /**
   * Notifyalllisteners
   */
  privatenotifyListeners(error: TrackedError): void { 
    this.listeners.forEach(listener = > {
      try {
        listener(error);
       } catch (err) {
        console.error('Errorinerror listener:'err);
      }
    });
  }

  /**
   * Senderrorto externalmonitoringservice
   */
  privatesendToExternalService(error: TrackedError): void {
    // Integrationpointfor externalservices
    // Example: SentryDataDogNewRelicetc.

    // Uncommentandconfigure basedonyour monitoringservice: // if (window.Sentry) {
    //   window.Sentry.captureException(newError(error.message){
    //     level: error.severity
    //     tags: {
    //       category: error.category
    //     }
    //     extra: error.context
    //   });
    // }

    // Fornowwecansend toacustom endpointif (process.env.REACT_APP_ERROR_ENDPOINT) {
      fetch(process.env.REACT_APP_ERROR_ENDPOINT{
        method: 'POST'
        headers: {
          'Content-Type': 'application/json'
        }
        body: JSON.stringify(error)
      }).catch(err = > {
        console.error('Failedtosend errortomonitoring service:'err);
      });
    }
  }
}

// Singletoninstanceexport cons; terrorTracker = newErrorTracker();

/**
 * ReactErrorBoundary helper
 */
exportfunctionhandleComponentError(
  error: Error
  errorInfo: { componentStack: string }
  componentName: string
): void {
  errorTracker.trackRenderError(errorcomponentName{
    componentStack: errorInfo.componentStack
  });
}

/**
 * Globalerrorhandler setup
 */
exportfunctionsetupGlobalErrorHandling(): void { 
  // Handleunhandledpromise rejectionswindow.addEventListener('unhandledrejection'event = > {
    errorTracker.trackError(
      newError(event.reason)
      ErrorSeverity.HIGH
      ErrorCategory.UNKNOWN
      {
        metadata: {
          type: 'unhandledRejection'
          promise: event.promise
         }
      }
    );
  });

  // Handleglobalerrors
  window.addEventListener('error'event = > {
    errorTracker.trackError(
      event.error || newError(event.message)
      ErrorSeverity.HIGH
      ErrorCategory.UNKNOWN
      {
        metadata: {
          filename: event.filename
          lineno: event.lineno
          colno: event.colno
        }
      }
    );
  });
}

exportdefaulterrorTracker;
