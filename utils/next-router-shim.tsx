import { useRouter } from 'next/router';
import Link from 'next/link';

// Shim for react-router-dom compatibility with Next.js
export const useLocation = () => {
  const router = useRouter();
  return {
    pathname: router.pathname,
    search: router.asPath.split('?')[1] || '',
    hash: '',
    state: null,
    key: router.asPath,
  };
};

export { Link, useRouter as useNavigate };
export default Link;