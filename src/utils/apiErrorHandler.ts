import { toast } from '@/hooks / use - toast';
  export const handleApiError = (error: unknown, fallbackMessage?: string) => {
export const showApiError = (error: unknown, fallbackMessage?: string) => {

export const showApiError = (error: any, fallbackMessage?: string) => {

  const message ='
<<<<<<< HEAD
    error?.message || fallbackMessage || 'An unexpected error occurred';
  toast({

    variant: 'destructive',
=======
    error?.message || fallbackMessage || 'An unexpected error occurred';  toast({
'
    variant: 'destructive','
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    title: 'Error',
    description: message});
  // Log error for debugging

  if (process.env.NODE_ENV === 'development') {

    // console.error('API Error:', error);
  }
};

export const handleApiError = (error: any, fallbackMessage?: string) => {

  showApiError(error, fallbackMessage);
  return {

    error: error?.message || fallbackMessage || 'An unexpected error occurred'};
};
