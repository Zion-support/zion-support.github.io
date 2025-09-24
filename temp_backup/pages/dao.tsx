import { useEffect } from 'react',
export default function DaoRedirect() {,
  const router = useRouter(),
  useEffect(() => {,
    router.replace('/governance'),
  }, [router]),
  return null,
}
,