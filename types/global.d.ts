// Minimal and clean global type declarations used by the app

declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.png" {
  const content: string;
  export default content;
}
declare module "*.jpg" {
  const content: string;
  export default content;
}
declare module "*.jpeg" {
  const content: string;
  export default content;
}
declare module "*.gif" {
  const content: string;
  export default content;
}
declare module "*.webp" {
  const content: string;
  export default content;
}
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.module.css" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.module.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string;
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export {};
