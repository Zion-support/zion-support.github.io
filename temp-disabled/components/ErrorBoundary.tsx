import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800'>
            <div className='text-center p-8'>
              <h1 className='text-4xl font-bold text-white mb-4'>
                Something went wrong
              </h1>
              <p className='text-gray-300 mb-6'>
                We're sorry, but something unexpected happened. Please try
                refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors'
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
