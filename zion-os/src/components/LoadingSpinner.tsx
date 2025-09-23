'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
}

export function LoadingSpinner({ size = "md", color = "primary", text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  const colorClasses = {
    primary: "text-blue-600",
    secondary: "text-gray-600",
    white: "text-white"
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-current ${sizeClasses[size]} ${colorClasses[color]}`} />
      {text && <span className="ml-2 text-sm">{text}</span>}
    </div>
  );
}

export function LoadingDots({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-100"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
      </div>
      {text && (
        <p className="text-sm text-gray-400">{text}</p>
      )}
    </div>
  );
}

export function LoadingBar({ progress = 0, text }: { progress?: number; text?: string }) {
  return (
    <div className="w-full max-w-md space-y-4">
      {text && (
        <p className="text-sm text-gray-400 text-center">{text}</p>
      )}
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        ></div>
      </div>
      <div className="text-center text-sm text-gray-400">
        {Math.round(progress)}%
      </div>
    </div>
  );
}

export default LoadingSpinner;
