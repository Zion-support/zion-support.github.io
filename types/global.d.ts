<<<<<<< HEAD

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
=======
/// <reference types="next"  />
/// <reference types="next/image-types/global"  />

declare global {
  interface Window {
    // Add any global window properties here if needed
  }
}

// DOM types are available globally in TypeScript with proper configuration
// This file ensures they are properly recognized by ESLint

export {};
>>>>>>> 76ac031ee1bd0638dab6f2aa5c6a46ca343d86e9
