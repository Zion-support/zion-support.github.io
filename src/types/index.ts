
// TypeScript type definitions
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
}

export interface SecurityConfig {
  csp: Record<string, string[]>;
  rateLimit: {
    limit: number;
    windowMs: number;
  };
}

export interface AccessibilityConfig {
  ariaLabels: boolean;
  focusManagement: boolean;
  colorContrast: boolean;
}

export interface AppConfig {
  performance: PerformanceMetrics;
  seo: SEOData;
  security: SecurityConfig;
  accessibility: AccessibilityConfig;
}
