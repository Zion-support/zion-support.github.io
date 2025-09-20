import { toast } from 'react-hot-toast',
interface ToastOptions {,
  duration?: number,
  position?: &quot,top-right&quot, | &quot,top-center&quot, | &quot,top-left&quot, | &quot,bottom-right&quot, | &quot,bottom-center&quot, | &quot,bottom-left&quot,
}
export function useToast() : any {,
  const showToast = (&quot,message&quot,: string, options?: ToastOptions) : any => {,
    return toast(message, options),
  },
  return { showToast };
  },