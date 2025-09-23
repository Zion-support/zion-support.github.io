<<<<<<< HEAD
=======
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AICustomerServiceRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/customer-service-ai');
  }, [router]);
  return null;
}

>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
