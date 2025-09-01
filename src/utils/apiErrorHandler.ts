import { toast } from '@/hooks/use-toast';
;
export const showApiError = (...args: unknown[]): unknown => {
  const message = error?.message || fallbackMessage || 'An unexpected error occurred';
  toast({
    variant: "destructive",
    title: "Error",
    description: message
  });
  // Log error for debugging

  if (process.env.NODE_ENV === 'development') {
    console.error('API Error:', error);

  }
};
;
export const handleApiError = (...args: unknown[]): unknown => {
  showApiError(error, fallbackMessage);
  return { error: error?.message || fallbackMessage || 'An unexpected error occurred' };
};