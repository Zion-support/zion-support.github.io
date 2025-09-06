/// <reference types="next" /> /// <reference types="next/image-types/global" /> /// <reference types="next/navigation-types/navigation" /> 

// Global window extensions
declare global {
  interface Window {
    gtag?: (..."args": any[]) => void;
    dataLayer?: any[]}

export {};
