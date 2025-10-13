<<<<<<< HEAD
// Cn utility
export function Cn() {
  // Implementation coming soon
  return null;
}
=======
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
