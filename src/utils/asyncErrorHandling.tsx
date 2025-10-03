// Async error handling utilities
export const asyncErrorHandler = (asyncFn) => {
  return async (...args) => {
    try {
      return await asyncFn(...args);
    } catch (error) {
      console.error('Async operation failed:', error);
      
      // Log to error tracking service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.toString(),
          fatal: false
        });
      }
      
      throw error;
    }
  };
};

export const withErrorHandling = (Component) => {
  return (props) => {
    const [error, setError] = React.useState(null);
    
    const handleError = (error) => {
      setError(error);
      console.error('Component error:', error);
    };
    
    if (error) {
      return (
        <div className="error-state">
          <p>Something went wrong: {error.message}</p>
          <button onClick={() => setError(null)}>Try Again</button>
        </div>
      );
    }
    
    return <Component {...props} onError={handleError} />;
  };
};