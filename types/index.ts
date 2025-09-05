export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: string;
  color: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
}