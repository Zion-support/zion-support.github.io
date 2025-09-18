'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

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
            onClick={reset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Try Again
          </button>
          
          <a
            href="/"
            className="block w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Go Home
          </a>
        </div>
        
        <div className="mt-8 text-sm text-gray-400">
          <p>Error ID: {error.digest || 'unknown'}</p>
          <p className="mt-2">
            If this problem persists, please{' '}
            <a 
              href="/contact" 
              className="text-blue-400 hover:text-blue-300 underline"
            >
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}