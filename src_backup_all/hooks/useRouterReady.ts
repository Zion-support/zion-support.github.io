import { useEffect, useState } from 'react'

export function useRouterReady() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])
  return ready
}

