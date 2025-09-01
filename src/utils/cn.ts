import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classValues: Array<string | false | null | undefined>): string {
  return twMerge(clsx(classValues));
}