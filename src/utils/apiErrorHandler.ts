import { toast } from '@/src/src/hooks/use-toast';

export const showApiError: React.FC = ($2) => {
  const message = error?.message || fallbackMessage || 'An unexpected error occurred';
  toast({
    variant: "destructive",
    title: "Error",
    description: message,
  });
  // Log error for debugging

  if (process.env.NODE_ENV === 'development') {
    console.error('API Error:', error);

  }
};

export const handleApiError: React.FC = ($2) => {
  showApiError(error, fallbackMessage);
  return { error: error?.message || fallbackMessage || 'An unexpected error occurred' };
};