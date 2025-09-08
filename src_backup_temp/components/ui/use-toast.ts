import { toast    } from 'react-hot-toast';'
import { toast  } from 'react-hot-toast';'
<<<<<<< HEAD
import { toast } from 'react-hot-toast' interface ToastOptions { duration?: "number"} position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"} export function useToast(...args[]): "{ const showToast = ("message": 'string'",options?: "ToastOptions) => { return toast(message",options) return { showToast }interface ToastOptions  {duration?: number;"
=======
import { toast } from 'react-hot-toast' interface ToastOptions { duration?: "number"} position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"} export function useToast(...args[]): "{ const showToast = ("message": 'string'",options?: "ToastOptions) => { return toast(message",options) return { showToast }}interface ToastOptions  {duration?: number;"
>>>>>>> origin/resolved-merge-conflicts
  }
  position?: &quot;top-right&quot; | &quot;top-center&quot; | &quot;top-left&quot; | &quot;bottom-right&quot; | &quot;bottom-center&quot; | &quot;bottom-left&quot;}
export function useToast() {const showToast = (&quot;message&quot;: string, options?: ToastOptions) => {return toast(message, options)}return { showToast }
import { toast   } from 'react-hot-toast';'
import { toast } from 'react-hot-toast''
import { toast } from 'react-hot-toast' interface ToastOptions { duration?: "number"} position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"} export function useToast(...args[]): "{ const showToast = ("message": 'string'",options?: "ToastOptions) => { return toast(message",options) return { showToast }};"
interface ToastOptions {
  }
  duration?: number;
<<<<<<< HEAD
  position?: &quot;top-right&quot; | &quot;top-center&quot; | &quot;top-left&quot; | &quot;bottom-right&quot; | &quot;bottom-center&quot; | &quot;bottom-left&quot;
=======
  position?: &quot;top-right&quot; | &quot;top-center&quot; | &quot;top-left&quot; | &quot;bottom-right&quot; | &quot;bottom-center&quot; | &quot;bottom-left&quot;;
>>>>>>> origin/resolved-merge-conflicts
}
export function useToast() {
  }
  const showToast = (&quot;message&quot;: string, options?: ToastOptions) => {
    return toast(message, options)
};
  return { showToast }
};