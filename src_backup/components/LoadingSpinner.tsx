import React from 'react';
import './LoadingSpinner.css';

<<<<<<< HEAD
const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="loading-text">
          <span className="loading-title">Zion Tech Group</span>
          <span className="loading-subtitle">Loading...</span>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default LoadingSpinner;
=======
=======
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

<<<<<<< HEAD:src/components/LoadingSpinner.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
<<<<<<< HEAD
=======
=======
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md', color = 'currentColor',
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md', color = 'currentColor',
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/LoadingSpinner.tsx
  className = ''
ursor/fix-syntax-push-and-merge-to-main-54a3
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
<<<<<<< HEAD:src/components/LoadingSpinner.tsx
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}) => {
  const sizeClasses = {
<<<<<<< HEAD
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
<<<<<<< HEAD
    lg: 'w-12 h-12'
=======
    lg: 'w-12 h-12',
=======
    sm: 'w-4 h-4', md: 'w-8 h-8',
    lg: 'w-12 h-12'
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className={`flex justify-center items-center ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}
      />
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}></div>
      {text && (
        <p className="text-gray-600 text-sm font-medium">{text}</p>
=======
=======

}) => {
  const sizeClasses = {
    sm: 'w-4 h-4', md: 'w-8 h-8',
    lg: 'w-12 h-12'
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  };

  return (
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/LoadingSpinner.tsx
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
      />
      {text && (
        <p className="mt-2 text-sm text-gray-600 animate-pulse">{text}</p>
<<<<<<< HEAD:src/components/LoadingSpinner.tsx
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-54a3
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </div>
  );
};
<<<<<<< HEAD

<<<<<<< HEAD
export default LoadingSpinner;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
export default LoadingSpinner;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
=======
=======
ursor/fix-syntax-push-and-merge-to-main-54a3
      )}
    </div>
  );
};
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/LoadingSpinner.tsx
 import { motion } from 'framer - motion' import { Brain, Zap, Globe, Rocket } from 'lucide - react' interface LoadingSpinnerProps {
  message?: string
   size?: 'sm' | 'md' | 'lg'
} const LoadingSpinner: React.FC < LoadingSpinnerProps> = ({ message = 'Loading...', size = 'md' }) => { const sizeClasses = { sm: 'w - 8 h - 8', md: 'w - 16 h - 16', lg: 'w - 24 h - 24' } const textSizeClasses = { sm: 'text - sm', md: 'text - base', lg: 'text - lg' } const icons = [Brain, Zap, Globe, Rocket] const [currentIcon, setCurrentIcon] = React.useState (0)  React.useEffect ( () => { const interval = setInterval ( () => { setCurrentIcon ( (prev) => (prev + 1) % icons.length)  }, 1000)  return () => clearInterval (interval)  }, [icons.length])  const CurrentIcon = icons[currentIcon] return (<div className='min - h-screen flex items - center justify - center bg - zion - slate - dark'> <div className='flex flex - col items - center space - y-6'> {} <div className='relative'> <motion.div className={`${sizeClasses[size]} border - 4 border - zion - cyan / 20 border - t-zion - cyan rounded - full`} animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} /> <motion.div className='absolute inset - 0 flex items - center justify - center' animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} > <CurrentIcon className={`${sizeClasses[size]} text - zion - cyan`} /> </motion.div> </div> {} <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className='text - center' > <div className={`${textSizeClasses[size]} text - zion - cyan font - medium mb - 2`}> {message} </div> {} <div className='flex space - x-1 justify - center'> {[0, 1, 2].map ( (i) => (<motion.div key={i} className='w - 2 h - 2 bg - zion - cyan rounded - full' animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} />) ) } </div> </motion.div> {} <div className='w - 48 h - 1 bg - zion - slate - light / 30 rounded - full overflow - hidden'> <motion.div className='h - full bg - gradient - to - r from - zion - cyan to - zion - purple' initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} /> </div> </div> </div>)  } export default LoadingSpinner';`"'"
<<<<<<< HEAD:src/components/LoadingSpinner.tsx
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/LoadingSpinner.tsx
