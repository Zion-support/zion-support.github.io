// Safe storage utilities for browser compatibility
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
    } catch (error) {
      console.warn('localStorage not available:', error);
