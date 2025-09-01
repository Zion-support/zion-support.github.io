import { clsx, type ClassValue  } from 'clsx';
import { twMerge  } from 'tailwind-merge';

export function cn(...args: any[]): any {
  return twMerge(clsx(inputs));
}