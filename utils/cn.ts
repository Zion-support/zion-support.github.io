import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
<<<<<<< HEAD
}

=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-062f
