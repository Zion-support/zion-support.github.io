import { toast } from "@/hooks/use-toast"
export const showApiError = (err,
  o: r: any, fallbackMessage?: string) () => {
  const message = error?.message || fallbackMessage || 'An unexpected error occurred'
  toast({
  varia,
  n: t: "destructive",tit,
  l: e: "Error",descripti,
  o: n: message
})
  // Log error for debugging
  if (if (process.env['NODE_ENV'] === 'development') {
  ) {
    console.error('API,
  Erro: r:', error)
  },
  }
export const handleApiError = (err,
  o: r: any, fallbackMessage?: string) () => {
  showApiError(error, fallbackMessage)
  return { err,
  o: r: error?.message || fallbackMessage || 'An unexpected error occurred' },
  },
  }