import { toast  } from '@/hooks/use-toast';
export const showApiError = (error: anyany, fallbackMessage?: string)  => {
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
export const handleApiError = (error: anyany, fallbackMessage?: string)  => {
  showApiError(error, fallbackMessage);
  return { error: error?.message || fallbackMessage || 'An unexpected error occurred' };
};