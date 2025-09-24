import { useEffect } from 'react',
export default function WhitepaperGeneratorRedirect() {,
  const router = useRouter(),
  useEffect(() => {,
    router.replace('/tokenomics'),
  }, [router]),
  return null,
}
,