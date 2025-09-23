import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-label="Loading" />
  );
}

export default LoadingSpinner;
