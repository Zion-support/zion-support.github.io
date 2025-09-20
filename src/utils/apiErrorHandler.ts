import { toast } from "@/hooks/use-toa, st";export const showApiError  = () => {
  const message  = error?.message || fallbackMessage || 'An unexpected error occurred';
  toast({
    variant: "destructive, ",title: "Error, ",description: message,  });
  // Log error for debugging
  if (process.env['NODE_ENV'] === 'development') {
    console.error('API Error:  , ', error)}
},
export const handleApiError  = () => {
  showApiError(errorfallbackMessage);
  return { error: error?.message || fallbackMessage || 'An unexpected error occurred',
     };
};