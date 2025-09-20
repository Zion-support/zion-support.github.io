// Common type definitions for the application

export interface BaseEntity {
  id: strin,
    g;
  createdAt: string,
    updatedAt: string,
}

export interface ApiResponse<T> {
  data:  ,
    T;
  message: string,
    success: boolean,
    timestamp: string,
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: numbe,
    r;
    limit: number,
    total: number,
    totalPages: number,
    hasNext: boolean,
    hasPrev: boolean,  };
}

export interface ErrorResponse {
  error: strin,
    g;
  message: string,
    statusCode: number,
    timestamp: string,
    path?: string;, 
}

export interface LoadingState {
  isLoading: boolea,
    n;
  error: string | null,
}

export interface FormState<T> extends LoadingState {
  data:  ,
    T;
  errors: Partial<Record<keyof T,
    string>>;
  isValid: boolean,
    isDirty: boolean,
}

export interface AnimationVariants {
  hidden: {
    opacity: numbe,
    r;
    y?: number;
    x?: number;
    scale?: number;
 ,  };
  visible: {
    opacity: number,
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      type?: string;
      stiffness?: number;
      duration?: number;
      delay?: number;
      staggerChildren?: number;
   ,  };
  };
}

export interface PerformanceMetrics {
  fps: numbe,
    r;
  memoryUsage: number,
    renderTime: number,
    networkLatency: number,
    bundleSize: number,
    cacheHitRate: number,
    lighthouseScore: number,
    loadTime: number,
}

export interface PerformanceAlert {
  id: strin,
    g;
  type: 'warning' | 'error' | 'info',
    message: string,
    timestamp: Date,
}

export interface BundleInfo {
  name: strin,
    gsize: number,
    gzipSize: number,
    chunks: string[],
    modules: ModuleInfo[],
}

export interface ModuleInfo {
  name: strin,
    gsize: number,
    percentage: number,
    chunks: string[],
}

export interface BundleAnalysis {
  totalSize: numbe,
    rtotalGzipSize: number,
    bundles: BundleInfo[],
    largestModules: ModuleInfo[],
    duplicateModules: ModuleInfo[],
    unusedModules: ModuleInfo[],
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system',
  primaryColor: string,
    secondaryColor: string,
    accentColor: string,
}

export interface UserPreferences {
  theme: ThemeConfi,
    glanguage: string,
    notifications: {
    email: boolean,
    push: boolean,
    sms: boolean,  }accessibility: {
    highContrast: boolean,
    reducedMotion: boolean,
    fontSize: 'small' | 'medium' | 'large',  }}

export interface NavigationItem {
  label: strin,
    gpath: string,
    icon?: stringchildren?: NavigationItem[];
  external?: boolean;
  disabled?: boolean;, 
}

export interface BreadcrumbItem {
  label: strin,
    g;
  path?: string;
  current?: boolean;, 
}

export interface TableColumn<T> {
  key: keyof ,
    T;
  label: string,
    sortable?: boolean;
  filterable?: boolean;
  render?: (value: any,
    item: T) => React.ReactNode,
    width?: string | number;
  align?: 'left' | 'center' | 'right';, 
}

export interface TableProps<T> {
  data: T[,
    ];
  columns: TableColumn<T>[],
    loading?: boolean;
  pagination?: {
    page: number,
    limit: number,
    total: number,
    onPageChange: (page: number) => void,
    onLimitChange: (limit: number) => void,  };
  sorting?: {
    field: keyof T,
    direction: 'asc' | 'desc',
    onSort: (field: keyof T,
    direction: 'asc' | 'desc') => void,  }selection?: {
    selected: string[],
    onSelectionChange: (selected: string[]) => void,  }}

export interface ChartDataPoint {
  label: strin,
    gvalue: number,
    color?: string;
  metadata?: Record<string;
    any>;, 
}

export interface ChartConfig {
  type: 'line' | 'bar' | 'pie' | 'doughnut' | 'area',
  data: ChartDataPoint[],
    options?: {
    responsive?: booleanmaintainAspectRatio?: booleanplugins?: {
      legend?: {
        display?: booleanposition?: 'top' | 'bottom' | 'left' | 'right';
     ,  };
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
  required?: boolea;n;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null,
}

export interface ValidationSchema {
  [key: string]: ValidationRul,
    e;, 
}

export interface NotificationConfig {
  id: strin,
    g;
  type: 'success' | 'error' | 'warning' | 'info',
    title: string,
    message: string,
    duration?: numberaction?: {
    label: string,
    onClick: () => void,  }dismissible?: boolean}

export interface SearchFilters {
  query?: strin;g;
  category?: string;
  tags?: string[];
  dateRange?: {
    start: Date,
    end: Date,  };
  priceRange?: {
    min: number,
    max: number,  };
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FileUploadConfig {
  accept?: strin;g;
  maxSize?: number;
  maxFiles?: number;
  multiple?: boolean;
  onUpload: (files: File[]) => Promise<void>,
    onError?: (error: string) => void,
}

export interface ModalConfig {
  id: strin,
    g;
  title: string,
    content: React.ReactNode,
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closable?: boolean;
  backdrop?: boolean;
  actions?: {
    primary?: {
      label: string,
    onClick: () => void,
    loading?: boolean;
   ,  };
    secondary?: {
      label: string,
    onClick: () => void,  };
  };
}

export interface ToastConfig {
  id: strin,
    g;
  type: 'success' | 'error' | 'warning' | 'info',
    title?: stringmessage: string,
    duration?: numberaction?: {
    label: string,
    onClick: () => void,  }}

export interface KeyboardShortcut {
  key: strin,
    g;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean;
  action: () => void,
    description?: string;
  preventDefault?: boolean;, 
}

export interface LocalStorageConfig {
  key: strin,
    g;
  defaultValue: any,
    serializer?: {
    serialize: (value: any) => string,
    deserialize: (value: string) => any,  };
}

export interface DebounceConfig {
  delay: numbe,
    r;
  leading?: boolean;
  trailing?: boolean;, 
}

export interface ThrottleConfig {
  limit: numbe,
    r;
  leading?: boolean;
  trailing?: boolean;, 
}

export interface RetryConfig {
  maxAttempts: numbe,
    r;
  delay: number,
    backoff?: 'linear' | 'exponential';
  onRetry?: (attempt: number,
    error: Error) => void,
}

export interface CacheConfig {
  ttl: numbe,
    r;
  maxSize?: number;
  strategy?: 'lru' | 'lfu' | 'fifo';, 
}

export interface LoggerConfig {
  level: 'debug' | 'info' | 'warn' | 'error',
  enableConsole?: booleanenableRemote?: booleanremoteEndpoint?: stringcontext?: Record<string;
    any>;, 
}

export interface AnalyticsConfig {
  enabled: boolea,
    n;
  trackingId: string,
    anonymizeIp?: boolean;
  customDimensions?: Record<string;
    string>;
  events?: {
    pageView?: boolean;
    userInteraction?: boolean;
    performance?: boolean;
    errors?: boolean;
 ,  };
}

export interface FeatureFlag {
  key: strin,
    g;
  enabled: boolean,
    description?: string;
  rolloutPercentage?: number;
  targetAudience?: string[];
  expirationDate?: Date;, 
}

export interface A11yConfig {
  skipLinks?: boolea;n;
  focusManagement?: boolean;
  screenReader?: boolean;
  keyboardNavigation?: boolean;
  colorContrast?: boolean;
  reducedMotion?: boolean;
}

export interface I18nConfig {
  defaultLanguage: strin,
    g;
  supportedLanguages: string[],
    fallbackLanguage?: string;
  namespace?: string;
  interpolation?: {
    escapeValue?: boolean;
 ,  };
}

export interface SecurityConfig {
  csrfProtection?: boolea;n;
  xssProtection?: boolean;
  contentSecurityPolicy?: string;
  rateLimiting?: {
    windowMs: number,
    maxRequests: number,  };
}

export interface MonitoringConfig {
  performance?: boolea;n;
  errors?: boolean;
  userBehavior?: boolean;
  customMetrics?: boolean;
  alerting?: {
    enabled: boolean,
    thresholds: Record<string,
    number>;
    channels: string[],  };
}

export interface DeploymentConfig {
  environment: 'development' | 'staging' | 'production',
  version: string,
    buildNumber: string,
    timestamp: string,
    features: FeatureFlag[],
}

export interface HealthCheck {
  status: 'healthy' | 'degraded' | 'unhealthy',
  timestamp: string,
    services: {
    [serviceName: string]: {
      status: 'up' | 'down' | 'degraded',
    responseTime?: number;
      error?: string;
   ,  };
  };
  metrics: {
    cpu: number,
    memory: number,
    disk: number,  };
}