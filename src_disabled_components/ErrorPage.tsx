import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  error?: Error;
  title?: string;
  message?: string;
  showRetry?: boolean;
  showHome?: boolean;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  error,
  title = 'Something went wrong',
  message = 'We\'re sorry, but something unexpected happened.',
  showRetry = true,
  showHome = true,
}) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
      <div className="text-center text-white p-8 max-w-md">
        <div className="mb-8">
          <div className="text-8xl mb-6">⚠️</div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-6">{message}</p>
        </div>
        
        <div className="space-y-4">
          {showRetry && (
            <button
              onClick={handleRetry}
              className="w-full bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Again
            </button>
          )}
          
          {showHome && (
            <button
              onClick={handleGoHome}
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Go Home
            </button>
          )}
        </div>

        {import.meta.env.MODE === 'development' && error && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm opacity-75 hover:opacity-100">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-xs bg-black bg-opacity-20 p-4 rounded overflow-auto max-h-32">
              {error.toString()}
              {error.stack && `\n\nStack Trace:\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;