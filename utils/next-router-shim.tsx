import { useRouter as useNextRouter } from 'next/router';

export function useRouter() {
  const router = useNextRouter();
  
  return {
    ...router,
    // Add any custom router methods here
    push: (url: string) => router.push(url),
    replace: (url: string) => router.replace(url),
    back: () => router.back(),
    reload: () => router.reload(),
    prefetch: (url: string) => router.prefetch(url)
  };
}