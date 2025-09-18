import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = true 
}) => (
  <div 
    className={`${height} ${width} ${rounded ? 'rounded' : ''} bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
  />
);

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'text-blue-500',
  text 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">LoadingStates</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default LoadingStates;
