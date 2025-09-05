<<<<<<< HEAD
=======
<<<<<<< HEAD:src/components/ui/use-toast.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { toast   } from 'react-hot-toast';
import { toast } from 'react-hot-toast'
import { toast } from 'react-hot-toast' interface ToastOptions { duration?: "number"} position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"} export function useToast(...args[]): "{ const showToast = ("message": 'string'",options?: "ToastOptions) => { return toast(message",options) return { showToast }};
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main:src_backup_temp/components/ui/use-toast.ts

=======
import { toast } from 'react-hot-toast'
interface ToastOptions {
  duration?: number;
  position?: &quot;top-right&quot; | &quot;top-center&quot; | &quot;top-left&quot; | &quot;bottom-right&quot; | &quot;bottom-center&quot; | &quot;bottom-left&quot;;
}
export function useToast() {
  const showToast = (&quot;message&quot;: string, options?: ToastOptions) => {
    return toast(message, options);
  };
  return { showToast };
};
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
