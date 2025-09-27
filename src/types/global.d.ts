// Global type declarations
import '@testing-library/jest-dom';

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        [key: string]: unknown;
      }
    ) => void;
  }
}

export {};