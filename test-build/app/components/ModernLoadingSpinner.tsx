'use client';
import React from 'react';
interface ModernLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent';
  text?: string;
  fullScreen?: boolean;
}
const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text = 'Loading...',
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };
  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400',
  };
  const spinnerClasses = `
    ${sizeClasses[size]}
    ${colorClasses[color]}
    animate-spin
    border-2
    border-current
    border-t-transparent
    rounded-full
  `;
  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-slate-900 bg-opacity-90 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4';
  return (
    <div className={containerClasses} role="status" aria-label="Loading">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className={spinnerClasses}></div>
          <div className="absolute inset-0 rounded-full border-2 border-current border-opacity-20"></div>
        </div>
        {text && (
          <p className="text-sm text-gray-300 animate-pulse">{text}</p>
        )}
      </div>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
};
export default ModernLoadingSpinner;