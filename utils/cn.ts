import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge'
;
export function cn(): void {
  return twMerge(clsx(inputs))
}