import React, { useState } from 'react';

// Async error handling utilities
export const asyncErrorHandler = (asyncFn: (...args: any[]) => Promise<any>) => {
  return async (...args: any[]) => {
    try {
      return await asyncFn(...args);
    } catch (error) {
      console.error('Async operation failed:', error);
      
      // Log to error tracking service
      if ((window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: (error as Error).toString(),
          fatal: false
        });
      }
      
      throw error;
    }
  };
};

export const withErrorHandling = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const [error, setError] = useState(null);
    
    const handleError = (error: any) => {
      setError(error);
      console.error('Component error:', error);
    };
    
    if (error) {
      return (
        <div className="error-state">
          <p>Something went wrong: {(error as Error).message}</p>
          <button onClick={() => setError(null)}>Try Again</button>
        </div>
      );
    }
    
    return <Component {...props} onError={handleError} />;
  };
};