'use client';
import { useCallback } from 'react;
export const _useRouter = () => {
  const push = useCallback((url: any,;
    f= url;
  }, []);
  const replace = useCallback((url: string) => {
    window.location.replace(url);
  }, []);
  const back: ,
    y= useCallback((: any) => {
    window.history.back();
  }, []);
  const forward: ,
    y= useCallback((: any) => {
    window.history.forward();
  }, []);
  const refresh: ,
    y= useCallback((: any) => {
    window.location.reload();
  }, []);
  return {
    push,
    replace,
    back,
    forward,
    refresh
  };
};
export const usePathname: ,
    y= () => {
  return window.location.pathname;
};
export const useSearchParams: ,
    s= new URLSearchParams(window.location.search);
  return params;
};
export default { useRouter, usePathname, useSearchParams };
