<<<<<<< HEAD:temp-disabled/components/ErrorBoundary.tsx
import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
>>>>>>> 8d73593ebce4d1c09c2c5c0fadb594f6c12c81e3:src/components/ErrorBoundary.tsx
}

interface State {
  hasError: boolean;
<<<<<<< HEAD:temp-disabled/components/ErrorBoundary.tsx
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught error:', error, info);
=======
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
>>>>>>> 8d73593ebce4d1c09c2c5c0fadb594f6c12c81e3:src/components/ErrorBoundary.tsx
  }

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD:temp-disabled/components/ErrorBoundary.tsx
      return <div className="p-4 text-center">Something went wrong.</div>;
    }
    return this.props.children;
  }
}
=======
      return this.props.fallback || (
        <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
            <p className="text-lg mb-6">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
>>>>>>> 8d73593ebce4d1c09c2c5c0fadb594f6c12c81e3:src/components/ErrorBoundary.tsx
