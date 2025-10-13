// Type definitions for the application

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
  viewport?: string;
  charset?: string;
  author?: string;
  publisher?: string;
  language?: string;
  geo?: {
    latitude?: string;
    longitude?: string;
    region?: string;
    placename?: string;
  };
  alternate?: Array<{
    hreflang: string;
    href: string;
  }>;
  structuredData?: any;
}

export interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export interface LoadingStates {
  isLoading: boolean;
  error?: string;
}

// Page component types
export interface PageProps {
  children?: React.ReactNode;
}

// Component prop types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface FeatureCardProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}