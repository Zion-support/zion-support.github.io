/// <reference types="next"  />
/// <reference types="next/image-types/global"  />

// Global type definitions
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare global {
  interface Window {
    // Add any global window properties here if needed
  }
}

// DOM types are available globally in TypeScript with proper configuration
// This file ensures they are properly recognized by ESLint

export {};
