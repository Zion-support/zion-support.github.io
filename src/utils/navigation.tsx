'use client'
export   }, [])
    }, [])
import { useCallback } from 'react'
export const _useRouter = () => {
    // TODO: Add content
  }
  const push = useCallback((url: string) => {
    // TODO: Add content
  }
    window.location.href = url
  const replace = useCallback((url: string) => {
    // TODO: Add content
  }
    window.location.replace(url)
  const back = useCallback(() => {
    // TODO: Add content
  }
    window.history.back()
  const forward = useCallback(() => {
    // TODO: Add content
  }
    window.history.forward()
  const refresh = useCallback(() => {
    // TODO: Add content
  }
    window.location.reload()
  return {
push,
    replace,
    back,
    forward,
    refresh
  }
export }
export const rateLimitingMiddleware = params
export default { useRouter, usePathname, useSearchParams }