<<<<<<< HEAD
  export 
=======
import { toast } from '@/hooks/use-toast';

export const showApiError = (error: , fallbackMessage?: string) => {;
  const message = error?.message || fallbackMessage || 'An unexpected error occurred';
>>>>>>> cursor/add-new-services-and-advertise-them-971c
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
<<<<<<< HEAD

  if (process.env.NODE_ENV === 'development') {

    // console.error('API Error:', error)}
};

export 
  return {

    error: error?.message || fallbackMessage || 'An unexpected error occurred'}};
=======
<<<<<<< HEAD
  if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
    // // // console.error('API Error:', error);

=======
    // // // // // // // console.error('API Error:', error);
=======
  if (process.env.NODE_ENV = == 'development') {;
    // // // // console.error('API Error:', error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
};

export const handleApiError = (error: , fallbackMessage?: string) => {;
  showApiError(error, fallbackMessage);
  return { error: error?.message || fallbackMessage || 'An unexpected error occurred' };
};}
>>>>>>> cursor/add-new-services-and-advertise-them-971c
