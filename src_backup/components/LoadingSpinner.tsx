import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md', color = 'currentColor',
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  className = ''
ursor/fix-syntax-push-and-merge-to-main-54a3
  size = 'md',
  text = 'Loading...',
  className = '',

}) => {
  const sizeClasses = {
    sm: 'w-4 h-4', md: 'w-8 h-8',
    lg: 'w-12 h-12'
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
      />
      {text && (
<<<<<<< HEAD
        <p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>
=======
        <p className="mt-2 text-sm text-gray-600 animate-pulse">{text}</p>
>>>>>>> origin/resolved-merge-conflicts
ursor/fix-syntax-push-and-merge-to-main-54a3
      )}
    </div>
  );
};
 import { motion } from 'framer - motion' import { Brain, Zap, Globe, Rocket } from 'lucide - react' interface LoadingSpinnerProps {
  message?: string
   size?: 'sm' | 'md' | 'lg'
<<<<<<< HEAD
} const LoadingSpinner: React.FC < LoadingSpinnerProps> = ({ message = 'Loading...', size = 'md' }) => { const sizeClasses = { sm: 'w - 8 h - 8', md: 'w - 16 h - 16', lg: 'w - 24 h - 24' } const textSizeClasses = { sm: 'text - sm', md: 'text - base', lg: 'text - lg' } const icons = [Brain, Zap, Globe, Rocket] const [currentIcon, setCurrentIcon] = React.useState (0)  React.useEffect ( () => { const interval = setInterval ( () => { setCurrentIcon ( (prev) => (prev + 1) % icons.length)  }, 1000)  return () => clearInterval (interval)  }, [icons.length])  const CurrentIcon = icons[currentIcon] return (<div className='min - h-screen flex items - center justify - center bg - zion - slate - dark'> <div className='flex flex - col items - center space - y-6'> {} <div className='relative'> <motion.div className={`${sizeClasses[size]} border - 4 border - zion - cyan / 20 border - t-zion - cyan rounded - full`} animate={ rotate: 360 } transition={ duration: 1, repeat: Infinity, ease: 'linear' } /> <motion.div className='absolute inset - 0 flex items - center justify - center' animate={ scale: [1, 1.2, 1] } transition={ duration: 2, repeat: Infinity } > <CurrentIcon className={`${sizeClasses[size]} text - zion - cyan`} /> </motion.div> </div> {} <motion.div initial={ opacity: 0 } animate={ opacity: 1 } transition={ delay: 0.5 } className='text - center' > <div className={`${textSizeClasses[size]} text - zion - cyan font - medium mb - 2`}> {message} </div> {} <div className='flex space - x-1 justify - center'> {[0, 1, 2].map ( (i) => (<motion.div key={i} className='w - 2 h - 2 bg - zion - cyan rounded - full' animate={ scale: [1, 1.5, 1] } transition={ duration: 1, repeat: Infinity, delay: i * 0.2 } />) ) } </div> </motion.div> {} <div className='w - 48 h - 1 bg - zion - slate - light / 30 rounded - full overflow - hidden'> <motion.div className='h - full bg - gradient - to - r from - zion - cyan to - zion - purple' initial={ width: 0 } animate={ width: '100%' } transition={ duration: 3, repeat: Infinity, ease: 'easeInOut' } /> </div> </div> </div>)  } export default LoadingSpinner';`'''
=======
} const LoadingSpinner: React.FC < LoadingSpinnerProps> = ({ message = 'Loading...', size = 'md' }) => { const sizeClasses = { sm: 'w - 8 h - 8', md: 'w - 16 h - 16', lg: 'w - 24 h - 24' } const textSizeClasses = { sm: 'text - sm', md: 'text - base', lg: 'text - lg' } const icons = [Brain, Zap, Globe, Rocket] const [currentIcon, setCurrentIcon] = React.useState (0)  React.useEffect ( () => { const interval = setInterval ( () => { setCurrentIcon ( (prev) => (prev + 1) % icons.length)  }, 1000)  return () => clearInterval (interval)  }, [icons.length])  const CurrentIcon = icons[currentIcon] return (<div className='min - h-screen flex items - center justify - center bg - zion - slate - dark'> <div className='flex flex - col items - center space - y-6'> {} <div className='relative'> <motion.div className={`${sizeClasses[size]} border - 4 border - zion - cyan / 20 border - t-zion - cyan rounded - full`} animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} /> <motion.div className='absolute inset - 0 flex items - center justify - center' animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} > <CurrentIcon className={`${sizeClasses[size]} text - zion - cyan`} /> </motion.div> </div> {} <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className='text - center' > <div className={`${textSizeClasses[size]} text - zion - cyan font - medium mb - 2`}> {message} </div> {} <div className='flex space - x-1 justify - center'> {[0, 1, 2].map ( (i) => (<motion.div key={i} className='w - 2 h - 2 bg - zion - cyan rounded - full' animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} />) ) } </div> </motion.div> {} <div className='w - 48 h - 1 bg - zion - slate - light / 30 rounded - full overflow - hidden'> <motion.div className='h - full bg - gradient - to - r from - zion - cyan to - zion - purple' initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} /> </div> </div> </div>)  } export default LoadingSpinner';`"'"
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
