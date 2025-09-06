<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
// Global type declarations
declare module "*.svg" {
  const "content": string;
  export default content}
declare module "*.png" {
  const "content": string;
  export default content}
declare module "*.jpg" {
  const "content": string;
  export default content}
declare module "*.jpeg" {
  const "content": string;
  export default content}
declare module "*.gif" {
  const "content": string;
  export default content}
declare module "*.webp" {
  const "content": string;
  export default content}
declare module "*.css" {
  const "content": { [className: string]: string };
  export default content}
declare module "*.scss" {
  const "content": { [className: string]: string };
  export default content}
declare module "*.module.css" {
  const "content": { [className: string]: string };
  export default content}
declare module "*.module.scss" {
  const "content": { [className: string]: string };
  export default content}
// Next.js specific types
declare namespace NodeJS {
  interface ProcessEnv {
    "NODE_ENV": "development" | "production" | "test";
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string}
}
// Global window extensions
=======
// Global type declarations for DOM types
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
<<<<<<< HEAD
export {};
declare module "*.svg" { const content: 'string; export default content;' } declare module "*.png" { const content: 'string; export default content;' } declare module "*.jpg" { const content: 'string; export default content;' } declare module "*.jpeg" { const content: 'string; export default content;' } declare module "*.gif" { const content: 'string; export default content;' } declare module "*.webp" { const content: 'string; export default content;' } declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: 'any[]) => void; dataLayer?: any[];' } } } export {};
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
=======
<<<<<<< HEAD
<<<<<<< HEAD
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
=======
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> main
>>>>>>> main
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
>>>>>>> main
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export {};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
