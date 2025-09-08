import React from 'react';

interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = 'Loading...', 
  showProgress = false, 
  progress = 0 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-purple flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto"></div>
          {showProgress && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {Math.round(progress)}%
              </span>
            </div>
          )}
        </div>
        <p className="mt-6 text-zion-slate-light text-lg">{message}</p>
        {showProgress && (
          <div className="mt-4 w-64 bg-zion-slate-dark rounded-full h-2 mx-auto">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingPage;