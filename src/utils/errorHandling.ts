/**
 * Enhanced error handling utilities
 * Provides comprehensive error management functions
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string}

export interface ErrorContext {
  componentName?: string;
  action?: string;
  props?: Record<string, any>;
  state?: Record<string, any>;
  userId?: string;
  sessionId?: string}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

// Error categories
export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  RUNTIME = 'runtime',
  SECURITY = 'security',
  PERFORMANCE = 'performance',
  UNKNOWN = 'unknown'
}

export interface ErrorReport {
  id: string;
  severity: ErrorSeverity;
  category: ErrorCategory;
  info: ErrorInfo;
  context?: ErrorContext;
  resolved: boolean;
  createdAt: string;
  updatedAt: string}

// Generate unique error ID
export const generateErrorId = (): string => {
  return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`};

// Categorize error
export const categorizeError = (error: Error): ErrorCategory => {
  const message = error.message.toLowerCase();
  const stack = error.stack?.toLowerCase() || '';

  if (message.includes('network') || message.includes('fetch') || message.includes('timeout')) {
    return ErrorCategory.NETWORK}
  
  if (message.includes('validation') || message.includes('invalid') || message.includes('required')) {
    return ErrorCategory.VALIDATION}
  
  if (message.includes('security') || message.includes('unauthorized') || message.includes('forbidden')) {
    return ErrorCategory.SECURITY}
  
  if (message.includes('performance') || message.includes('memory') || message.includes('timeout')) {
    return ErrorCategory.PERFORMANCE}
  
  if (stack.includes('react') || stack.includes('component')) {
    return ErrorCategory.RUNTIME}
  
  return ErrorCategory.UNKNOWN};

// Determine error severity
export const determineErrorSeverity = (error: Error, category: ErrorCategory): ErrorSeverity => {
  const message = error.message.toLowerCase();
  
  // Critical errors
  if (message.includes('security') || message.includes('unauthorized') || message.includes('forbidden')) {
    return ErrorSeverity.CRITICAL}
  
  if (category === ErrorCategory.SECURITY) {
    return ErrorSeverity.CRITICAL}
  
  // High severity errors
  if (message.includes('fatal') || message.includes('critical') || message.includes('crash')) {
    return ErrorSeverity.HIGH}
  
  if (category === ErrorCategory.NETWORK && message.includes('timeout')) {
    return ErrorSeverity.HIGH}
  
  // Medium severity errors
  if (category === ErrorCategory.VALIDATION || category === ErrorCategory.RUNTIME) {
    return ErrorSeverity.MEDIUM}
  
  // Low severity errors
  return ErrorSeverity.LOW};

// Create error report
export const createErrorReport = (
  error: Error,
  context?: ErrorContext,
  componentStack?: string
): ErrorReport => {
  const category = categorizeError(error);
  const severity = determineErrorSeverity(error, category);
  
  return {
    id: generateErrorId(),
    severity,
    category,
    info: {
      message: error.message,
      stack: error.stack,
      componentStack,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
      url: typeof window !== 'undefined' ? window.location.href : 'Server',
      userId: context?.userId,
      sessionId: context?.sessionId
    },
    context,
    resolved: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }};

// Send error report to monitoring service
export const sendErrorReport = async (report: ErrorReport): Promise<void> => {
  try {
    // In a real application, you would send this to your error monitoring service
    // like Sentry, LogRocket, or a custom API endpoint
    console.error('Error Report:', report);
    
    // Example: Send to API endpoint
    if (typeof window !== 'undefined') {
      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(report)
      })}
  } catch (error) {
    console.error('Failed to send error report:', error)}
};

// Retry function with exponential backoff
export const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> => {
  let lastError: Error;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()} catch (error) {
      lastError = error as Error;
      
      if (i === maxRetries - 1) {
        throw lastError}
      
      const delay = baseDelay * Math.pow(2, i);
      await new Promise(resolve => setTimeout(resolve, delay))}
  }
  
  throw lastError!};

// Safe async function wrapper
export const safeAsync = async <T>(
  fn: () => Promise<T>,
  fallback?: T,
  onError?: (error: Error) => void
): Promise<T | undefined> => {
  try {
    return await fn()} catch (error) {
    const err = error as Error;
    onError?.(err);
    return fallback}
};

// Error boundary helper
export const getErrorBoundaryInfo = (error: Error, errorInfo: any): ErrorInfo => {
  return {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo.componentStack,
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
    url: typeof window !== 'undefined' ? window.location.href : 'Server'
  }};

// Global error handler
export const setupGlobalErrorHandling = (): void => {
  if (typeof window === 'undefined') return;
  
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = new Error(event.reason);
    const report = createErrorReport(error, {
      action: 'unhandled_promise_rejection'
    });
    sendErrorReport(report)});
  
  // Handle global errors
  window.addEventListener('error', (event) => {
    const error = new Error(event.message);
    const report = createErrorReport(error, {
      action: 'global_error',
      props: {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      }
    });
    sendErrorReport(report)})};

// Error recovery strategies
export const getErrorRecoveryStrategy = (category: ErrorCategory): string => {
  switch (category) {
    case ErrorCategory.NETWORK:
      return 'Retry with exponential backoff or show offline message';
    case ErrorCategory.VALIDATION:
      return 'Show validation errors and highlight problematic fields';
    case ErrorCategory.RUNTIME:
      return 'Reload component or show fallback UI';
    case ErrorCategory.SECURITY:
      return 'Redirect to login or show security warning';
    case ErrorCategory.PERFORMANCE:
      return 'Reduce resource usage or show performance warning';
    default:
      return 'Show generic error message and retry option'}
};