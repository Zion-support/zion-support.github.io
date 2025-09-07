import { useState } from 'react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

let toasts: Toast[] = [];
let listeners: (() => void)[] = [];

export function toast({ title, description, variant = 'default' }: Omit<Toast, 'id'>) {
  const id = Math.random().toString(36).substr(2, 9);
  const newToast = { id, title, description, variant };
  
  toasts = [...toasts, newToast];
  listeners.forEach(listener => listener());
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id);
    listeners.forEach(listener => listener());
  }, 5000);
}

export function useToast() {
  const [toastList, setToastList] = useState<Toast[]>(toasts);
  
  useState(() => {
    const listener = () => setToastList([...toasts]);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  });
  
  return { toast, toasts: toastList };
}