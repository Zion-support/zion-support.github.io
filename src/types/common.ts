// Common type definitions for the application

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
  timestamp: string;
  path?: string;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface FormState<T> extends LoadingState {
  data: T;
  errors: Partial<Record<keyof T, string>>;
  isValid: boolean;
  isDirty: boolean;
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      type?: string;
      stiffness?: number;
      duration?: number;
      delay?: number;
      staggerChildren?: number;
    };
  };
}

export interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
  bundleSize: number;
  cacheHitRate: number;
  lighthouseScore: number;
  loadTime: number;
}

export interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
}

export interface BundleInfo {
  name: string;
  size: number;
  gzipSize: number;
  chunks: string[];
  modules: ModuleInfo[];
}

export interface ModuleInfo {
  name: string;
  size: number;
  percentage: number;
  chunks: string[];
}

export interface BundleAnalysis {
  totalSize: number;
  totalGzipSize: number;
  bundles: BundleInfo[];
  largestModules: ModuleInfo[];
  duplicateModules: ModuleInfo[];
  unusedModules: ModuleInfo[];
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface UserPreferences {
  theme: ThemeConfig;
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  accessibility: {
    highContrast: boolean;
    reducedMotion: boolean;
    fontSize: 'small' | 'medium' | 'large';
  };
}

export interface NavigationItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavigationItem[];
  external?: boolean;
  disabled?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
  current?: boolean;
}

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, item: T) => React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    onPageChange: (page: number) => void;
    onLimitChange: (limit: number) => void;
  };
  sorting?: {
    field: keyof T;
    direction: 'asc' | 'desc';
    onSort: (field: keyof T, direction: 'asc' | 'desc') => void;
  };
  selection?: {
    selected: string[];
    onSelectionChange: (selected: string[]) => void;
  };
}

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
  metadata?: Record<string, any>;
}

export interface ChartConfig {
  type: 'line' | 'bar' | 'pie' | 'doughnut' | 'area';
  data: ChartDataPoint[];
  options?: {
    responsive?: boolean;
    maintainAspectRatio?: boolean;
    plugins?: {
      legend?: {
        display?: boolean;
        position?: 'top' | 'bottom' | 'left' | 'right';
      };
      tooltip?: {
        enabled?: boolean;
      };
    };
    scales?: {
      x?: {
        display?: boolean;
        title?: {
          display?: boolean;
          text?: string;
        };
      };
      y?: {
        display?: boolean;
        title?: {
          display?: boolean;
          text?: string;
        };
      };
    };
  };
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null;
}

export interface ValidationSchema {
  [key: string]: ValidationRule;
}

export interface NotificationConfig {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  priceRange?: {
    min: number;
    max: number;
  };
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FileUploadConfig {
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  multiple?: boolean;
  onUpload: (files: File[]) => Promise<void>;
  onError?: (error: string) => void;
}

export interface ModalConfig {
  id: string;
  title: string;
  content: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closable?: boolean;
  backdrop?: boolean;
  actions?: {
    primary?: {
      label: string;
      onClick: () => void;
      loading?: boolean;
    };
    secondary?: {
      label: string;
      onClick: () => void;
    };
  };
}

export interface ToastConfig {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean;
  action: () => void;
  description?: string;
  preventDefault?: boolean;
}

export interface LocalStorageConfig {
  key: string;
  defaultValue: any;
  serializer?: {
    serialize: (value: any) => string;
    deserialize: (value: string) => any;
  };
}

export interface DebounceConfig {
  delay: number;
  leading?: boolean;
  trailing?: boolean;
}

export interface ThrottleConfig {
  limit: number;
  leading?: boolean;
  trailing?: boolean;
}

export interface RetryConfig {
  maxAttempts: number;
  delay: number;
  backoff?: 'linear' | 'exponential';
  onRetry?: (attempt: number, error: Error) => void;
}

export interface CacheConfig {
  ttl: number;
  maxSize?: number;
  strategy?: 'lru' | 'lfu' | 'fifo';
}

export interface LoggerConfig {
  level: 'debug' | 'info' | 'warn' | 'error';
  enableConsole?: boolean;
  enableRemote?: boolean;
  remoteEndpoint?: string;
  context?: Record<string, any>;
}

export interface AnalyticsConfig {
  enabled: boolean;
  trackingId: string;
  anonymizeIp?: boolean;
  customDimensions?: Record<string, string>;
  events?: {
    pageView?: boolean;
    userInteraction?: boolean;
    performance?: boolean;
    errors?: boolean;
  };
}

export interface FeatureFlag {
  key: string;
  enabled: boolean;
  description?: string;
  rolloutPercentage?: number;
  targetAudience?: string[];
  expirationDate?: Date;
}

export interface A11yConfig {
  skipLinks?: boolean;
  focusManagement?: boolean;
  screenReader?: boolean;
  keyboardNavigation?: boolean;
  colorContrast?: boolean;
  reducedMotion?: boolean;
}

export interface I18nConfig {
  defaultLanguage: string;
  supportedLanguages: string[];
  fallbackLanguage?: string;
  namespace?: string;
  interpolation?: {
    escapeValue?: boolean;
  };
}

export interface SecurityConfig {
  csrfProtection?: boolean;
  xssProtection?: boolean;
  contentSecurityPolicy?: string;
  rateLimiting?: {
    windowMs: number;
    maxRequests: number;
  };
}

export interface MonitoringConfig {
  performance?: boolean;
  errors?: boolean;
  userBehavior?: boolean;
  customMetrics?: boolean;
  alerting?: {
    enabled: boolean;
    thresholds: Record<string, number>;
    channels: string[];
  };
}

export interface DeploymentConfig {
  environment: 'development' | 'staging' | 'production';
  version: string;
  buildNumber: string;
  timestamp: string;
  features: FeatureFlag[];
}

export interface HealthCheck {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  services: {
    [serviceName: string]: {
      status: 'up' | 'down' | 'degraded';
      responseTime?: number;
      error?: string;
    };
  };
  metrics: {
    cpu: number;
    memory: number;
    disk: number;
  };
}