<<<<<<< HEAD
=======
import {clsx} from 'clsx';
import { twMerge } from 'tailwind-merge';
>>>>>>> cursor/fix-errors-and-merge-to-main-d933

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}