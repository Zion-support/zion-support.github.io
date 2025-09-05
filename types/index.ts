export interface ContactInfo {
export interface ContactInfo {;  phone: string;
  email: string;
  address: string;
  site: string;}

export interface Service {_title: string;
  description: string;
  features: string[];
  href: string;
  icon: string;
  color: string;}

export interface ServiceCategory {_title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;}

export interface SEOProps {_title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;}

export interface LoadingState {_isLoading: boolean;
  error?: string;}

export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;}
export interface AnimationState {_isLoaded: boolean;
  hasError: boolean;}
