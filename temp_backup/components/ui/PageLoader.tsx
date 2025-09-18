<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface PageLoaderProps {
  isLoading?: boolean;
  loadingText?: string;
  minDisplayTime?: number;
  onLoadingComplete?: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({
  isLoading = true,
  loadingText = 'Loading Zion Tech Group...',
  minDisplayTime = 1000,
  onLoadingComplete
}) => {
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      // Ensure minimum display time
      const timer = setTimeout(() => {
        setShowLoader(false);
        onLoadingComplete?.();
      }, minDisplayTime);

      return () => clearTimeout(timer);
    }
  }, [isLoading, minDisplayTime, onLoadingComplete]);

  useEffect(() => {
    if (isLoading) {
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      // Complete progress
      setProgress(100);
    }
  }, [isLoading]);
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const PageLoader: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">PageLoader</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default PageLoader;
