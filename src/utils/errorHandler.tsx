import React from 'react';

interface ErrorHandlerProps {
  error: Error;
  resetError: () => void;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ error, resetError }) => {
  return (
    <div className="error-handler">
      <h2>An error occurred</h2>
      <p>{error.message}</p>
      <button onClick={resetError}>Try again</button>
    </div>
  );
};

export default ErrorHandler;
