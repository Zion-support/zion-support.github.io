
    return { hasErro: true, error }

import React, { Component, ErrorInfo, ReactNode } from 'react';
import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 dark:bg-red-900 rounded-full mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>

            <div className="text-center">
              <h1 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Something went wrong
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Page
                </button>

                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </button>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                    Error Details (Development)
                  </summary>
                  <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <pre className="text-xs text-red-600 dark:text-red-400 whitespace-pre-wrap">
                      {this.state.error.toString()}
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </div>
                </details>
              )}
  handleRefresh = () => {
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-red-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6">
            <div className="mt-4">
              <button
                onClick={this.handleRefresh}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
              We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
                <pre className="text-xs text-red-700 whitespace-pre-wrap">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-xs text-red-700 whitespace-pre-wrap mt-2">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="flex space-x-4 justify-center">
              <button
                onClick={this.handleReload}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Page
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

import { AlertTriangle, RefreshCw, Home  } from 'lucide-react';
interface Props  {children: ReactNode;
}interface State  {hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}class ErrorBoundary extends Component<Props, State> {constructor(props: Props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error: Error): State {return { hasError: true, error }}componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('ErrorBoundary caught an error:', error, errorInfo)this.setState({ error, errorInfo })}render() {if (this.state.hasError) {return (<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">;
          <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">;
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 dark:bg-red-900 rounded-full mb-4">;
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />;
            </div>;
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">;
              Something went wrong;
            </h2>;
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">;
              We're sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            <div className="space-y-3">;
              <button;
                onClick={() => window.location.reload()}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
              >;
                <RefreshCw className="w-4 h-4 mr-2" />;
                Refresh Page;
              </button>;
              <button;
                onClick={() => window.location.href = '/'}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
              >;
                <Home className="w-4 h-4 mr-2" />;
                Go Home;
              </button>;
            </div>;
            {process.env.NODE_ENV === 'development' && this.state.error && (<details className="mt-6 text-left">;
                <summary className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">;
                  Error Details (Development)</summary>;
                <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">;
                  <pre className="text-xs text-red-600 dark:text-red-400 whitespace-pre-wrap">;
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>;
                </div>;
              </details>;
            )}
          </div>;
        </div>;
      )}return this.props.children;
  }
}export default ErrorBoundary;
    return this.props.children;
  }
}

export default ErrorBoundary;
