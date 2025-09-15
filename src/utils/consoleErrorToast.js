// Console error toast handler
import { toast } from 'react-hot-toast';

// Override console.error to show toast notifications
const originalConsoleError = console.error;

console.error = function(...args) {
  // Call the original console.error
  originalConsoleError.apply(console, args);
  
  // Show toast for certain types of errors
  const errorMessage = args.join(' ');
  if (errorMessage.includes('Error') || errorMessage.includes('Failed')) {
    toast.error('An error occurred. Please check the console for details.');
  }
};

export default console.error;