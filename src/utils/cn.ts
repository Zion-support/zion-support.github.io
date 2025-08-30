import { clsx, type ClassValue  } from 'clsx.ts';
import { twMerge  } from 'tailwind-merge.ts';

export function cn(...args: []):  {
  return twMerge(clsx(inputs));
}