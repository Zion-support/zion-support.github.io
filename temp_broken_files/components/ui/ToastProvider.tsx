import React, {
  createContext, useCallback, useContext, useMemo, useState 
}from 'react' export type ToastVariant = 'default' | 'success' | 'error' | 'info' export type Toast = {
  id: string title?: string description?: string variant?: ToastVariant actionLabel?: string onAction?: () => void durationMs?: number 
}const ToastContext = createContext<ToastContextValue | undefined> (undefined) export function ToastProvider ({
  children 
}: {
  children: React.ReactNode 
}) {
  const [toasts, setToasts] = useState<Toast[]> ([]) const removeToast = useCallback ( (id: string) => {
  setToasts (prev => prev.filter (t => t.id !== id) ) 
}, []) setToasts (prev => [...prev, item]) if (item.durationMs && item.durationMs > 0) {
  setTimeout ( () => removeToast (id), item.durationMs) 
}return id 
}, [removeToast]) const clearToasts = useCallback ( () => setToasts ([]), []) const value = useMemo ( () => ({
  toasts, addToast, removeToast, clearToasts 
}), [toasts, addToast, removeToast, clearToasts]) return (<AnimatePresence> {
  toasts.map (t => (<motion.div key= {
  t.id 
}initial= {
  {
  opacity: 0, y: 16, scale: 0.98 
}
}animate= {
  {
  opacity: 1, y: 0, scale: 1 
}
}exit= {
  {
  opacity: 0, y: 8, scale: 0.98 
}
}transition= {
  {
  type: 'spring', stiffness: 400, damping: 30 
}
}className= {
  `rounded-md border shadow-lg p-3 backdrop-blur bg-white/80 dark:bg-black/60 $ {
  t.variant === 'success' ? 'border-emerald-400/40' : t.variant === 'error' ? 'border-rose-400/40' : t.variant === 'info' ? 'border-sky-400/40' : 'border-gray-300/40 dark:border-gray-700/40' 
}` 
}> </div> </motion.div>) ) 
}</AnimatePresence> </div> </ToastContext.Provider>) 
}export function useToast () {
  const ctx = useContext (ToastContext) if (!ctx) throw new Error ('useToast must be used within ToastProvider') return ctx 
}