// Optimized component loader with error boundaries
import React, { Suspense, ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface OptimizedLoaderProps {
  component: () => Promise<{ default: ComponentType<unknown> }>;
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ 
  error, 
  resetErrorBoundary 
}) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
      <p className="text-gray-300 mb-4">{error.message}</p>
      <button 
        onClick={resetErrorBoundary}
        className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

const LoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="cyber-loading mx-auto mb-4"></div>
      <div className="text-white text-xl">Loading...</div>
    </div>
  </div>
);

export const OptimizedLoader: React.FC<OptimizedLoaderProps> = ({ 
  component, 
  fallback = <LoadingFallback />,
  errorFallback: _errorFallback = <ErrorFallback error={new Error('Component failed to load')} resetErrorBoundary={() => {}} />
}) => {
  const LazyComponent = React.lazy(component);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={fallback}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
