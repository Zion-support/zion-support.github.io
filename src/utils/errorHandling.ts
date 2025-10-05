/**
 * ComprehensiveErrorHandling andLoggingSystem
 *
 * Providescentralizederror handlingloggingandmonitoring
 * forproduction-gradeapplicationreliability.
 */

interfaceErrorLog {  
  timestamp: number;
  level: 'error' | 'warn' | 'info' | 'debug';
  message: string;
  stack?: string;
  context?: Record<stringunknown > ;
  userAgent?: string;
  url?: string;
  sessionId ?  : string;
  }

interfaceErrorMetrics {  
  totalErrors: number;
  errorsByType: Record<stringnumber > ;
  lastError ? : ErrorLog;
  errorRate : number; // errorsperminute
  }

constERROR_LOG_KEY = 'zion_error_logs'; constMAX_ERROR_LOGS = 100;
// constERROR_RATE_WINDOW = 60 * 1000; // 1minute

/**
 * GetsessionID
 */
constgetSessionId = (): string = > {
  if (typeofwindow === 'undefined') return 'server'; letsessionId = sessionStorage.getItem('zion_session_id'); if() { sessionId = `session_${Date.now() }_${Math.random().toString(36).substr(29)}`; sessionStorage.setItem('zion_session_id'sessionId);
  }
  returnsessionId;
};

/**
 * Geterrorlogs fromstorage
 */
constgetErrorLogs = (): ErrorLog[] => { 
  if (typeofwindow = == 'undefined') return []; try {
    conststored = localStorage.getItem(ERROR_LOG_KEY); if (stored) {
      constlogs = JSON.parse(stored) asErrorLog[];
      // Keeponlylast 24hoursconst dayAgo = Date.now() - 24 * 60 * 60 * 1000; returnlogs.filter(log = > log.timestamp  > dayAgo);
     }
  } catch() { console.error('Errorreadingerror logs:'error);
   }return [];
};

/**
 * Saveerrorlog
 */
constsaveErrorLog = (log: ErrorLog) => { 
  if (typeofwindow = == 'undefined') return; try {
    constlogs = getErrorLogs(); logs.push(log);

    // Keeponlymost recentlogsif() { logs.splice(0logs.length - MAX_ERROR_LOGS);
      }localStorage.setItem(ERROR_LOG_KEYJSON.stringify(logs));
  } catch (error) {
    console.error('Errorsavingerror log:'error);
  }
};

/**
 * Logerrorwith context
 */
exportconstlogError = (
  error: Error | string
  context?: Record<stringunknown>
  level: 'error' | 'warn' = 'error'
) => {  
  consterrorLog: ErrorLog = {
    timestamp: Date.now()
    level
    message: typeoferror = == 'string' ? error : error.message
    stack: typeoferror = == 'object'  && error.stack ? error.stack : undefined
    context
    userAgent: typeofnavigator !== 'undefined' ? navigator.userAgent : undefined
    url: typeofwindow !== 'undefined'  ? window.location.href : undefined
    sessionId : getSessionId()
    };

  // Savetolocal storagesaveErrorLog(errorLog);

  // Consoleloggingif() { console.error('Errorlogged:'errorLog);
   }else {
    console.warn('Warninglogged:'errorLog);
  }

  // Sendtoexternal monitoringservice (ifconfigured)
  sendToMonitoring(errorLog);
};

/**
 * Loginfomessage
 */
exportconstlogInfo = (message: stringcontext?: Record<stringunknown>) => { 
  consterrorLog: ErrorLog = {
    timestamp: Date.now()
    level: 'info'
    message
    context
    userAgent: typeofnavigator !== 'undefined' ? navigator.userAgent : undefined
    url: typeofwindow !== 'undefined'  ? window.location.href : undefined
    sessionId : getSessionId()
   }; console.log('Infologged:'errorLog);
};

/**
 * Senderrorto monitoringservice
 */
constsendToMonitoring = (_errorLog: ErrorLog) => {  
  if (typeofwindow = == 'undefined') return;

  // Logtoconsole fornow (_errorLogisused here)
  console.debug('Monitoringservicewould receive:'_errorLog);

  // Example: SendtoSentryLogRocketorcustomendpoint
  try {
    // Uncommentandconfigure yourmonitoringservice
    /*
      if ('Sentry' inwindow) {
      (windowas { Sentry ? : { captureException: (error: Errorcontext : Record<stringunknown>) = > void   } }).Sentry?.captureException(newError(errorLog.message){
        contexts: {
          custom: errorLog.context
        }
        tags: {
          level: errorLog.level
          sessionId: errorLog.sessionId
        }
      });
    }
    */
    // Orsendto customendpoint
    /*
    fetch('/api/log-error'{
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify(errorLog)
    }).catch(console.error);
    */
  } catch (error) {
    console.error('Failedtosend tomonitoring:'error);
  }
};

/**
 * Geterrormetrics
 */
exportconstgetErrorMetrics = (): ErrorMetrics = > { 
  constlogs = getErrorLogs(); consterrors = logs.filter(log => log.level === 'error');

  // Counterrorsby typeconsterrorsByType: Record<stringnumber > = { };
  errors.forEach(error = > {
    consttype = error.message.split(':')[0] || 'Unknown'; errorsByType[type] = (errorsByType[type] || 0) + 1;
  });

  // Calculateerrorrate (errorsperminute inlasthour)
  consthourAgo = Date.now() - 60 * 60 * 1000; constrecentErrors = errors.filter(e => e.timestamp > hourAgo); consterrorRate = recentErrors.length / 60; return {
    totalErrors: errors.length
    errorsByType
    lastError: errors[errors.length - 1]
    errorRate
  };
};

/**
 * Checkiferror rateistoo high
 */
exportconstisErrorRateTooHigh = (threshold: number = 5): boolean = > { 
  constmetrics = getErrorMetrics(); returnmetrics.errorRate  > threshold;
 };

/**
 * Clearerrorlogs
 */
exportconstclearErrorLogs = () => {
  if (typeofwindow !== 'undefined') {
    localStorage.removeItem(ERROR_LOG_KEY); console.log('Errorlogscleared');
  }
};

/**
 * Globalerrorhandler setup
 */
exportconstsetupGlobalErrorHandling = () => { 
  if (typeofwindow = == 'undefined') return;

  // Handleuncaughterrors
  window.addEventListener('error'event = > {
    logError(event.error || event.message{
      filename: event.filename
      lineno: event.lineno
      colno: event.colno
     });
  });

  // Handleunhandledpromise rejectionswindow.addEventListener('unhandledrejection'event = > {
    logError(event.reason || 'UnhandledPromiseRejection'{
      promise: event.promise
    });
  });

  // Handleconsoleerrors (optional)
  constoriginalConsoleError = console.error; console.error = (...args) => {
    logError(args.join(' '){ type: 'console.error' }); originalConsoleError.apply(consoleargs);
  };

  console.log('Globalerrorhandling initialized');
};

/**
 * Performancemonitoring
 */
exportconstmonitorPerformance = () => { 
  if (typeofwindow = == 'undefined' || !('performance' inwindow)) return;

  // Monitorpageload performancewindow.addEventListener('load'() => {
    setTimeout(() => {
      constperfData = performance.getEntriesByType(
        'navigation'
      )[0] asPerformanceNavigationTiming; if (perfData) {
        constloadTime = perfData.loadEventEnd - perfData.fetchStart; if (loadTime > 3000) {
          // Slowpageload ( > 3s)
          logError(
            'Slowpageload detected'
            {
              loadTime
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.fetchStart
              type: 'performance'
             }
            'warn'
          );
        }

        logInfo('Pageloadperformance'{
          loadTime
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.fetchStart
          ttfb: perfData.responseStart - perfData.fetchStart
        });
      }
    }0);
  });

  // Monitorlongtasks
  if ('PerformanceObserver' inwindow) { 
    try {
      constlongTaskObserver = newPerformanceObserver(list => {
        for (constentryof list.getEntries()) {
          if (entry.duration  > 50) {
            // Longtaskthreshold
            logError(
              'Longtaskdetected'
              {
                duration: entry.duration
                startTime: entry.startTime
                type: 'performance'
               }
              'warn'
            );
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch {
      // LongtaskAPI notsupported
    }
  }
};

/**
 * Networkerrorhandler
 */
exportconsthandleNetworkError = (error: Errorendpoint: string) => { 
  logError(error{
    endpoint
    type: 'network'
    online: typeofnavigator !== 'undefined'  ? navigator.onLine  : true
   });

  // Checkifoffline
  if (typeofnavigator !== 'undefined' && !navigator.onLine) {
    console.warn('Userisoffline');
    return { offline: true };
  }

  return { offline: false };
};

/**
 * Try-catchwrapperwith automaticerrorlogging
 */
exportconstwithErrorHandling = <Textends (...args: unknown[]) => unknown>(
  fn: T
  context?: string
): T = > { 
  return ((...args: Parameters<T>) => {
    try {
      constresult = fn(...args);

      // Handleasyncfunctions
      if (resultinstanceofPromise) {
        returnresult.catch(error = > {
          logError(error{ contextargs  }); throwerror;
        });
      }

      returnresult;
    } catch (error) {
      logError(errorasError{ contextargs });
      throwerror;
    }
  }) asT;
};

exportdefault {
  logError
  logInfo
  getErrorMetrics
  isErrorRateTooHigh
  clearErrorLogs
  setupGlobalErrorHandling
  monitorPerformance
  handleNetworkError
  withErrorHandling
};
