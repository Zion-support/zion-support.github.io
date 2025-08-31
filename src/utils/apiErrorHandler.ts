import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD

export const showApiError = (error: any, fallbackMessage?: string) => {
=======
export const showApiError = (error: , fallbackMessage?: string) => {;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  const message = error?.message || fallbackMessage || 'An unexpected error occurred';
  toast({
    variant: "destructive",
    title: "Error",
    description: message,
  });
  // Log error for debugging
<<<<<<< HEAD
  if (process.env.NODE_ENV === 'development') {
    console.error('API Error:', error);
  }
};

export const handleApiError = (error: any, fallbackMessage?: string) => {
=======
    // // // // // // // console.error('API Error:', error);
  if (process.env.NODE_ENV = == 'development') {;
    // // // // console.error('API Error:', error);
  }
};
export const handleApiError = (error: , fallbackMessage?: string) => {;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  showApiError(error, fallbackMessage);
  return { error: error?.message || fallbackMessage || 'An unexpected error occurred' };
};