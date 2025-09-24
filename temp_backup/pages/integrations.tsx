import { useEffect } from 'react',
export default function IntegrationsRedirect() {
  const router = useRouter(),
  useEffect(() => {
    router.replace('/admin/integrations')}, [router]),
  return null}
,