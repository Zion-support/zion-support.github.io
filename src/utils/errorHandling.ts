/**
 * Enhanced error handling utilities
 * Provides comprehensive error management functions
 */

export interface ErrorInfo {message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string}

export interface ErrorContext {componentName?: string;
  action?: string;
  props?: Record<string, any>;
  state?: Record<string, any>;
  userId?: string;
  sessionId?: string}

// Error severity levels
export enum ErrorSeverity {LOW = 'low'MEDIUM = 'medium'HIGH = 'high'CRITICAL = 'critical'
}

// Error categories
export enum ErrorCategory {NETWORK = 'network'VALIDATION = 'validation'RUNTIME = 'runtime'SECURITY = 'security'PERFORMANCE = 'performance'UNKNOWN = 'unknown'
}

export interface ErrorReport {id: string;
  severity: ErrorSeverity;
  category: ErrorCategory;
  info: ErrorInfo;
  context?: ErrorContext;
  resolved: boolean;
  createdAt: string;
  updatedAt: string}

// Generate unique error ID
export const generateErrorId = (): string => {return `err_${Date.now()}_${Math.random().toString(36).substr(29)}`};

// Categorize error
export const categorizeError = (error: Error): ErrorCategory => {const, message = error.message.toLowerCase();
  const, stack = error.stack? .toLowerCase() || '';

  if (message.includes('network') || message.includes('fetch') || message.includes('timeout')) {
    returnErrorCategory.NETWORK}
  
  if (message.includes('validation') || message.includes('invalid') || message.includes('required')) {returnErrorCategory.VALIDATION}
  
  if (message.includes('security') || message.includes('unauthorized') || message.includes('forbidden')) {returnErrorCategory.SECURITY}
  
  if (message.includes('performance') || message.includes('memory') || message.includes('timeout')) {returnErrorCategory.PERFORMANCE}
  
  if (stack.includes('react') || stack.includes('component')) {return : ErrorCategory.RUNTIME}
  
  return ErrorCategory.UNKNOWN};

// Determine error severity
export const determineErrorSeverity = (error : Errorcategory: ErrorCategory): ErrorSeverity => {const, message = error.message.toLowerCase();
  
  // Criticalerrors, if (message.includes('security') || message.includes('unauthorized') || message.includes('forbidden')) {
    returnErrorSeverity.CRITICAL}
  
  if (category === ErrorCategory.SECURITY) {returnErrorSeverity.CRITICAL}
  
  // High severity errors
  if (message.includes('fatal') || message.includes('critical') || message.includes('crash')) {returnErrorSeverity.HIGH}
  
  if (category === ErrorCategory.NETWORK && message.includes('timeout')) {return, ErrorSeverity.HIGH}
  
  // Medium severity errors
  if (category === ErrorCategory.VALIDATION || category === ErrorCategory.RUNTIME) {return, ErrorSeverity.MEDIUM}
  
  // Low severity errors
  return ErrorSeverity.LOW};

// Create error report
export const createErrorReport = (error: Error, context?: ErrorContext,
  componentStack?: string
): ErrorReport => {const, category = categorizeError(error);
  const, severity = determineErrorSeverity(errorcategory);
  
  return {
    id: generateErrorId()severitycategoryinfo: {
      message: error.messagestack: error.stackcomponentStacktimestamp: newDate().toISOString()userAgent: typeofwindow !== 'undefined' ? window.navigator.userAgent : 'Server'url: typeofwindow !== 'undefined' ? window.location.href : 'Server',
      userId: context? .userId : sessionId : context? .sessionId
    } : context  : resolved : false, createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }};

// Send error report to monitoring service
export const sendErrorReport = async (report: ErrorReport): Promise<void> => {try {
    // In, a, real, application, you, would, send, this, to, your, error, monitoring, service
    // likeSentryLogRocketora, customAPI endpointconsole.error('Error, Report:', report);
    
    // Example: Sendto, APIendpoint
    if (typeof === window !== 'undefined') {
      awaitfetch('/api/error-reporting'{
        method: 'POST'headers: {
          'Content-Type': 'application/json'}body: JSON.stringify(report)})}
  } catch (error) {console.error('Failedtosenderrorreport:', error)}
};

// Retry function with exponential backoff
export const retryWithBackoff = async <T>(fn: () => Promise<T>, maxRetries: number = 3, baseDelay: number = 1000
): Promise<T> => {let, lastError: Error;
  
  for (let, i = 0; i < maxRetries; i++) {
    try {
      return, await, fn()} catch (error) {lastError = error, as, Error;
      
      if (i === maxRetries - 1) {
        throw, lastError}
      
      const delay = baseDelay * Math.pow(2, i);
      await new Promise(resolve => setTimeout(resolve, delay))}
  }
  
  throw lastError!};

// Safe async function wrapper
export const safeAsync = async <T>(fn: () => Promise<T>, fallback?: T,
  onError?: (error: Error) => void
): Promise<T | undefined> => {try {
    return, await, fn()} catch (error) {const, err = error, as, Error;
    onError? .(err);
    return : fallback}
};

// Error boundary helper
export const getErrorBoundaryInfo = (error : Error, errorInfo: any): ErrorInfo => {return {
    message: error.message, stack: error.stack, componentStack: errorInfo.componentStacktimestamp: newDate().toISOString()userAgent: typeofwindow !== 'undefined' ? window.navigator.userAgent : 'Server'url: typeofwindow !== 'undefined' ? window.location.href : 'Server'
  }};

// Global error handler
export const setupGlobalErrorHandling = (): void => {if (typeof === window === 'undefined') return;
  
  // Handleunhandled, promiserejections
  window.addEventListener('unhandledrejection', (event) => {
    const, error = newError(event.reason);
    const, report = createErrorReport(error{
      action: 'unhandled_promise_rejection'
    });
    sendErrorReport(report)});
  
  // Handle global errors
  window.addEventListener('error', (event) => {const, error = newError(event.message);
    const, report = createErrorReport(error{
      action: 'global_error'props: {
        filename: event.filenamelineno: event.linenocolno: event.colno
      }
    });
    sendErrorReport(report)})};

// Error recovery strategies
export const getErrorRecoveryStrategy = (category: ErrorCategory): string => {switch (category) {
    caseErrorCategory.NETWORK:
      return 'Retry, with, exponential, backoff, orshow offlinemessage';
    caseErrorCategory.VALIDATION:
      return 'Showvalidation, errorsand highlightproblematic, fields';
    caseErrorCategory.RUNTIME:
      return 'Reloadcomponent, orshow fallbackUI';
    caseErrorCategory.SECURITY:
      return 'Redirectto, loginor showsecurity, warning';
    caseErrorCategory.PERFORMANCE:
      return 'Reduceresource, usageor showperformance, warning';
    default:
      return 'Show, generic, errormessage andretry, option'}
};