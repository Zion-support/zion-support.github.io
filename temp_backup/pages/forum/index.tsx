import { useEffect } from 'react';
export default function ForumRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/community'); }, [router]);
  return null;
}