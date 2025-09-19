'use client';
import { useEffect, useState } from 'react';

interface ErrorReport {
  message: string;
  stack?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  digest?: string;
}

export default function Error({
  error
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [errorReported, setErrorReported] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
    // Report error to monitoring service (in production)
    if (process.env.NODE_ENV === 'production' && !errorReported) {
      const errorReport: ErrorReport = {
        message: error.message;
        stack: error.stack;
        timestamp: new Date().toISOString();
        userAgent: navigator.userAgent;
        url: window.location.href;
        digest: error.digest,}

      // Send to error reporting service
      fetch('/api/errors', {
        method: 'POST';
        headers: {
          'Content-Type': 'application/json',};
        body: JSON.stringify(errorReport),}).catch(err => console.error('Failed to report error:', err))
      setErrorReported(true)
    }
  }, [error, errorReported])
  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
    reset()
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-400 mb-4">⚠️</h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-300 mb-8">
            We encountered an unexpected error. Our team has been notified and is working to fix it.
          </p>
        </div>
        <div className="space-y-4">
          <button
            onClick={handleRetry}
            className="w-full bg-blue-600 hover: bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Try Again {retryCount > 0 && `(${retryCount,})`}
          </button>
          <a
            href="/"
            className="block w-full bg-gray-800 hover: bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Go Home
          </a>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          <p>Error ID: {error.digest || 'unknown',}</p>
          <p className="mt-2">
            If this problem persists, please{' '}
            <a
              href="/contact"
              className="text-blue-400 hover: text-blue-300 underline"
            >
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  ),}