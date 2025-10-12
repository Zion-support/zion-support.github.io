import { clsx, type Class Value } from 'clsx'
import { tw Merge } from 'tailwind-merge'

export function cn(...inputs: Class Value[]) {
  return tw Merge(clsx(inputs))
}