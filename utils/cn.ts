<<<<<<< HEAD
<<<<<<< HEAD
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

<<<<<<< HEAD
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
=======
export interface CnConfig {
  enabled: boolean;
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
}
=======
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

<<<<<<< HEAD
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
export class Cn {
  private config: CnConfig;

  constructor(config: Partial<CnConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

// Export default instance
export const cn = new Cn();
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
=======
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
>>>>>>> cursor/fix-errors-and-merge-to-main-5443
