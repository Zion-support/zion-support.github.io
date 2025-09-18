import React from 'react';
<<<<<<< HEAD
import {  import { motion  } from 'framer-motion';
export default function Page(props: any) {
-${Math.random().toString(36).substr(2, 9)}`}}
  componentDidCatch(error: Erro r, errorInfo: ErrorInf o) {
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

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error reporting service
      // like Sentry, LogRocket, or Bugsnag
      console.error('Production Error:', error, errorInfo);
    }
  }

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
=======

const EnhancedErrorBoundary: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedErrorBoundary</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  );
};

export default EnhancedErrorBoundary;
