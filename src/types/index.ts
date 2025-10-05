// Typedefinitionsexport interfac; eBannerConfig {
  id: string;
  title: string;
  component: string;
  priority: number;
  category: string;
  impressions: number;
  clicks: number;
  active: boolean;
}

exportinterfacePerformanceMetrics { 
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb ?  : number;
 }

exportinterfaceAnalyticsEvent { 
  name: string;
  category: string;
  action?: string;
  label?: string;
  value ? : number;
  timestamp: string;
  session_id: string;
  user_id: string;
  page_url: string;
  user_agent : string;
 }
