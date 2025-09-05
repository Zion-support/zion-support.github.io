import React from 'react';';';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/button';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
;
interface Props {;
  "children": "ReactNode;
  fallback?: ReactNode;
  onError?: ("error": Error", "errorInfo": "ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;
"}
interface State {;
  "hasError": "boolean;
  "error": Error | null;
  "errorInfo": ErrorInfo | null;
  "errorId": string;
"}
class EnhancedErrorBoundary extends Component<Props, State> {;
  private retryCount = 0;
  private maxRetries = 3;
;
  constructor("props": "Props) {;
    super(props);
    this.state = {;
      "hasError": false;
      "error": null;
      "errorInfo": null;
      "errorId": '';
    "};
  }
  static getDerivedStateFromError("error": "Error): Partial<State> {;
    return {;
      "hasError": true;
      error;
      "errorId": `error_${Date.now()"}_${Math.random().toString(36).substr(2, 9)}`;
    };
  }
  componentDidCatch("error": "Error", "errorInfo": "ErrorInfo) {;
    this.setState({;
      error;
      errorInfo;
    "});
;
    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {;
      console.error('ErrorBoundary caught an "error":', error, errorInfo);
    }
    // Report error to monitoring service;
    this.reportError(error, errorInfo);
;
    // Call custom error handler;
    if (this.props.onError) {;
import React from 'react';
import {  import { motion  } from 'framer-motion';
export default function Page(props: any) {
-${Math.random().toString(36).substr(2, 9)}`}}
  componentDidCatch(error: Erro r, errorInfo: ErrorInf o) {
';
    // Log error to console in development';';
    if (process.env.NODE_ENV === 'development') {';';
      console.group('🚨 Error Boundary Caught Error');';';
      console.error('Error:', error);';';
      console.error('Error Info:', errorInfo);
      console.groupEnd();
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/button';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;
}
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}
class EnhancedErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    };
  }
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.groupEnd();
    }
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
';
    // Log to external service in production';';
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error reporting service
      // like Sentry, LogRocket, or Bugsnag
      console.error('Production Error:', error, errorInfo);
    }
  }
  private reportError = ("error": "Error", "errorInfo": "ErrorInfo) => {;
    if (!this.props.enableReporting) return;
;
    const errorReport = {;
      "errorId": this.state.errorId;
      "message": error.message;
      "stack": error.stack;
      "componentStack": errorInfo.componentStack;
      "timestamp": new Date().toISOString();
      "userAgent": navigator.userAgent;
      "url": window.location.href;
      "retryCount": this.retryCount;
    "};
;
    // Send to error reporting service;
    if (typeof window !== 'undefined' && 'gtag' in window) {;
      (window as any).gtag('event', 'exception', {;
        "description": "error.message;
        "fatal": false;
        "custom_map": {;
          "error_id": this.state.errorId;
          "component_stack": errorInfo.componentStack;
        "}
      });
    }
    // Store locally for debugging;
    try {;
      const existingErrors = JSON.parse(localStorage.getItem('error_reports') || '[]');
      existingErrors.push(errorReport);
      localStorage.setItem('error_reports', JSON.stringify(existingErrors.slice(-10))); // Keep last 10;
    } catch (e) {;
    }
  };
;
  private handleRetry = () => {;
    if (this.retryCount < this.maxRetries) {;
      this.retryCount++;
      this.setState({;
        "hasError": "false;
        "error": null;
        "errorInfo": null;
        "errorId": '';
      "});
    }
  };
;
  private handleReload = () => {;
    window.location.reload();
  };
;
  private handleGoHome = () => {;
    window.location.href = '/';
  };
;
  private handleReportBug = () => {;
    const errorDetails = {;
      "errorId": "this.state.errorId;
      "message": this.state.error?.message;
      "stack": this.state.error?.stack;
      "url": window.location.href;
      "timestamp": new Date().toISOString();
    "};
;
    // Create a mailto link with error details;
    const subject = `Bug Report - Error "ID": "${this.state.errorId"}`;
    const body = `Error "Details": "\n${JSON.stringify(errorDetails", null, 2)}`;
    const mailtoLink = `"mailto": "support@ziontechgroup.com?subject=${encodeURIComponent(subject)"}&body=${encodeURIComponent(body)}`;
    ;
    window.open(mailtoLink);
  };
;
  render() {;
    if (this.state.hasError) {;
      if (this.props.fallback) {;
    // Send error to error reporting service
    this.reportError(error, errorInfo) }
  private async reportError(error: Erro r, errorInfo: ErrorInf o) {
    try {
      // You can integrate with services like Sentry, LogRocket, etc.      // Send to your error reporting endpoint'
      await fetch('/api/error-report', {
        method: 'POST',        headers: { 'Content-Type': 'application/json' },
        body: JSO N.stringify(errorReport)})} catch(reportError) {
      // console.error('Failed to report error:', reportError)}  }
  private handleRetry = () => {
    this.setState({
      hasError: fals e,
      error: nul l,
      errorInfo: nul l,
      errorId: nul l,
      reportSent: fals e})};
  private handleGoHome = () => {
    window.location.href = '/'};
  private handleGoBack = () => {
    window.history.back () };
  private handleReportError = async () => {
    this.setState({ isReporting: tru e }
    );
    try {
      await this.reportError(this.state.error!, this.state.errorInfo!);
      this.setState({ reportSent: tru e }
    );
      // Reset report status after 3 seconds
      setTimeout(() => {
        this.setState({ reportSent: fals e }) }, 3000) } catch(error) {
      // console.error('Failed to report error:', error)} finally {
      this.setState({ isReporting: fals e })}  };
  private handleRetry = () => {
    this.setState({
      hasError: fals e,
      error: nul l,
      errorInfo: nul l,
      errorId: nul l,
      showDetails: fals e,
      isRecovering: tru e}
    );
    // Force a re - render of children
    this.forceUpdate () };
  private handleGoHome = () => {
    window.location.href = '/'};
  private handleCopyError = async : unknown {
    if(this.state.error) {
`
      try {
        await navigator.clipboard.writeText(errorText) ;
        // You could show a toast notification here
      } catch(err) {
        // console.error('Failed to copy error details:', err)}    }
  }
  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    if (!this.props.enableReporting) return;
    const errorReport = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.retryCount,
    };
    // Send to error reporting service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
          component_stack: errorInfo.componentStack,
        },
      });
    }
    // Store locally for debugging
    try {
      const existingErrors = JSON.parse(localStorage.getItem('error_reports') || '[]');
      existingErrors.push(errorReport);
      localStorage.setItem('error_reports', JSON.stringify(existingErrors.slice(-10))); // Keep last 10
    } catch (e) {
    }
  };
  handleReload = () => {
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (;
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">;
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">;
            <div className="flex justify-center mb-4">;
              <AlertTriangle className="h-16 w-16 text-red-500" />;
            </div>;
            ;
            <h1 className="text-2xl font-bold text-gray-900 mb-2">;
              Oops! Something went wrong;
            </h1>;
            ;
            <p className="text-gray-600 mb-6">;
              We're sorry, but something unexpected happened. Our team has been notified.;
            </p>;
            {this.props.showDetails && this.state.error && (;
              <details className="mb-6 text-left">;
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">;
                  Error Details (Click to expand);
                </summary>;
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-800 overflow-auto max-h-32">;
                  <div className="mb-2">;
                    <strong>Error "ID": "</strong> {this.state.errorId"}
                  </div>;
                  <div className="mb-2">;
                    <strong>"Message": "</strong> {this.state.error.message"}
                  </div>;
                  {this.state.error.stack && (;
                    <div>;
                      <strong>"Stack": "</strong>;
                      <pre className="whitespace-pre-wrap mt-1">;
                        {this.state.error.stack"}
                      </pre>;
                    </div>;
                  )}
                </div>;
              </details>;
            )}
            <div className="space-y-3">;
              {this.retryCount < this.maxRetries && (;
                <Button;
                  onClick={this.handleRetry}
                  className="w-full bg-blue-600 "hover": "bg-blue-700 text-white";
                >;
                  <RefreshCw className="h-4 w-4 mr-2" />;
                  Try Again ({this.maxRetries - this.retryCount"} attempts left);
                </Button>;
              )}
              <Button;
                onClick={this.handleReload}
                variant="outline";
                className="w-full";
              >;
                <RefreshCw className="h-4 w-4 mr-2" />;
                Reload Page;
              </Button>;
              <Button;
                onClick={this.handleGoHome}
                variant="outline";
                className="w-full";
              >;
                <Home className="h-4 w-4 mr-2" />;
                Go to Homepage;
              </Button>;
              {this.props.enableReporting && (;
                <Button;
                  onClick={this.handleReportBug}
                  variant="outline";
                  className="w-full";
                >;
                  <Bug className="h-4 w-4 mr-2" />;
                  Report Bug;
                </Button>;
              )}
            </div>;
            <div className="mt-6 text-xs text-gray-500">;
              Error "ID": "{this.state.errorId"}
            </div>;
          </div>;
        </div>;
      );
    }
    return this.props.children;
  }
}
// Higher-order component for easier usage;
export const withErrorBoundary = <P extends object>(;
  "Component": "React.ComponentType<P>;
  errorBoundaryProps?: Omit<Props", 'children'>;
) => {;
  const WrappedComponent = ("props": "P) => (;
    <EnhancedErrorBoundary {...errorBoundaryProps"}>;
      <Component {...props} />;
    </EnhancedErrorBoundary>;
  );
;
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};
;
// Hook for error reporting;
export const useErrorReporting = () => {;
  const reportError = React.useCallback(("error": "Error", context?: "string) => {;
    const errorReport = {;
      "message": error.message;
      "stack": error.stack;
      context;
      "timestamp": new Date().toISOString();
      "url": window.location.href;
    "};
;
    // Send to analytics;
    if (typeof window !== 'undefined' && 'gtag' in window) {;
      (window as any).gtag('event', 'exception', {;
        "description": "error.message;
        "fatal": false;
        "custom_map": {;
          "context": context || 'unknown';
        "}
      });
    }
    console.error('Error "reported":', errorReport);
  }, []);
;
  return { reportError };
};
;
export default EnhancedErrorBoundary;
        return this.props.fallback}
      return ()
        <motion.div
          initial={{ opacity: 0, y: 2 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4"
        >"
          <div className="max-w-2xl w-full bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center">
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}"
              className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6"
            >"
              <AlertTriangle className="w-10 h-10 text-red-400"   />            </motion.div>
            {/* Error Message */}
            <motion.h1
              initial={{ opacity: 0, y: 2 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}"
              className="text-3xl font-bold text-white mb-4"
            >
              Oops ! Something went wrong
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 2 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}"
              className="text-gray-300 mb-6 text-lg"
            >
              We're sorry, but something unexpected happened.Our team has been
              notified and is working to fix this issue.</motion.p>
            {/* Error Details(Collapsible) */}
            <motion.details
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}"
              className="mb-6 text-left"
            >"
              <summary className="cursor-pointer text-cyan-400 hover: tex t-cyan-300 mb-2">
                Error Details
              </summary>"
              <div className="bg-black/20 rounded-lg p-4 text-sm text-gray-300 font-mono">"
                <div className="mb-2">
                  <strong>Error:</strong> {this.state.error?.name}:{' '}
                  {this.state.error?.message}
                </div>
                {this.state.errorId && ("
                  <div className="mb-2">
                    <strong>Error ID:</strong> {this.state.errorId}
                  </div>
                )}"
                <div className="text-xs opacity-75">
                  <strong>Component Stack:</strong>"
                  <pre className="mt-1 overflow-x-auto">
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </div>
            </motion.details>
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}"
              className="flex flex-col sm: fle x-row gap-4 justify-center items-center"
            >
              <button
                onClick={this.handleRetry}"
                className="px-6 py-3 bg-cyan-500 hover: b g-cyan-600 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >"
                <RefreshCw className="w-5 h-5"   />                <span>Try Again</span>
              </button>
              <button
                onClick={this.handleGoBack}"
                className="px-6 py-3 bg-gray-600 hover: b g-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >"
                <ArrowLeft className="w-5 h-5"   />                <span>Go Back</span>
              </button>
              <button
                onClick={this.handleGoHome}"
                className="px-6 py-3 bg-blue-600 hover: b g-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >"
                <Home className="w-5 h-5"   />                <span>Go Home</span>
              </button>
            </motion.div>
            {/* Error Reporting */}
            {this.props.showReportButton && (<motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}"
                className="mt-6 pt-6 border-t border-gray-600"
              >"
                <p className="text-gray-400 mb-4">
                  Help us improve by reporting this error
                </p>
                {!this.state.reportSent ? (
                  <button
                    onClick={this.handleReportError}
                    disabled={this.state.isReporting}"
                    className="px-6 py-3 bg-green-600 hover: b g-green-700 disabled: b g-green-800 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2 mx-auto disabled: opacit y-50"
                  >
                    {this.state.isReporting ? (
                      <>"
                        <RefreshCw className="w-5 h-5 animate-spin"   />
                        <span>Reporting...</span>
                      </>
                    ) : (
                      <>"
                        <Bug className="w-5 h-5"   />                        <span>Report Error</span>
                      </>
                    )}
                  </button>
                ) : ("
                  <div className="flex items-center justify-center space-x-2 text-green-400">"
                    <Send className="w-5 h-5"   />                    <span>Error reported successfully!</span>
                  </div>
                )}
              </motion.div>
            )}
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}"
              className="mt-6 pt-6 border-t border-gray-600"
            >"
              <p className="text-gray-400 text-sm">
                If this problem persists, please contact our support team at{' '}
                <a"
                  href="mailto: suppor t@ziontechgroup.com"
                  className="text-cyan-400 hover: tex t-cyan-300 underline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-gray-900 mb-2">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
              </p>
            </motion.div>
          </div>
        </motion.div>) }
    return this.props.children}
}
'"`
</path>
</a>
</p>
</motion>
</motion>
</motion>';
</motion>;';;';
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>
            {this.props.showDetails && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  Error Details (Click to expand)
                </summary>
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-800 overflow-auto max-h-32">
                  <div className="mb-2">
                    <strong>Error ID:</strong> {this.state.errorId}
                  </div>
                  <div className="mb-2">
                    <strong>Message:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
            <div className="space-y-3">
              {this.retryCount < this.maxRetries && (
                <Button
                  onClick={this.handleRetry}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again ({this.maxRetries - this.retryCount} attempts left)
                </Button>
              )}
              <Button
                onClick={this.handleReload}
                variant="outline"
                className="w-full"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reload Page
              </Button>
              <Button
                onClick={this.handleGoHome}
                variant="outline"
                className="w-full"
              >
                <Home className="h-4 w-4 mr-2" />
                Go to Homepage
              </Button>
              {this.props.enableReporting && (
                <Button
                  onClick={this.handleReportBug}
                  variant="outline"
                  className="w-full"
                >
                  <Bug className="h-4 w-4 mr-2" />
                  Report Bug
                </Button>
              )}
            </div>
            <div className="mt-6 text-xs text-gray-500">
              Error ID: {this.state.errorId}
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
// Higher-order component for easier usage
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <EnhancedErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </EnhancedErrorBoundary>
  );
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};
// Hook for error reporting
export const useErrorReporting = () => {
  const reportError = React.useCallback((error: Error, context?: string) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    };
    // Send to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          context: context || 'unknown',
        },
      });
    }
    console.error('Error reported:', errorReport);
  }, []);
  return { reportError };
};
export default EnhancedErrorBoundary;
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>