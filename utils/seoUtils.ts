export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  robots?: string;
  viewport?: string;
  charset?: string;
  author?: string;
  publisher?: string;
  language?: string;
  geo?: {
    latitude?: number;
    longitude?: number;
    region?: string;
    placename?: string;
  };
  alternate?: Array<{
    hreflang: string;
    href: string;
  }>;
}

export interface PageSEOProps {
  config: SEOConfig;
  children?: React.ReactNode;
}

export default SEOUtils;
