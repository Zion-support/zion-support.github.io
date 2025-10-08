/**
 * Comprehensive Type Definitions for the Application
 */

// ============================================================================
// Common Types
// ============================================================================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type AsyncResult<T> = Promise<T>;

// ============================================================================
// API Types
// ============================================================================

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// ============================================================================
// User Types
// ============================================================================

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

// ============================================================================
// Performance Types
// ============================================================================

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export interface PerformanceEntry {
  name: string;
  entryType: string;
  startTime: number;
  duration: number;
}

// ============================================================================
// Analytics Types
// ============================================================================

export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
}

export interface PageView {
  path: string;
  title: string;
  referrer?: string;
  timestamp: number;
}

// ============================================================================
// Content Types
// ============================================================================

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: Date;
  updatedAt: Date;
  tags: string[];
  category: string;
  featured: boolean;
  coverImage?: string;
  readTime?: number;
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
  socialLinks?: SocialLinks;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

// ============================================================================
// SEO Types
// ============================================================================

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: StructuredData;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

// ============================================================================
// Form Types
// ============================================================================

export interface FormField<T = string> {
  value: T;
  error?: string;
  touched: boolean;
  dirty: boolean;
}

export interface FormState<T extends Record<string, unknown>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
}

export type FormValidator<T> = (value: T) => string | undefined;

// ============================================================================
// Component Types
// ============================================================================

export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface ErrorBoundaryProps extends BaseComponentProps {
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

// ============================================================================
// Route Types
// ============================================================================

export interface Route {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  meta?: RouteMeta;
}

export interface RouteMeta {
  title: string;
  description?: string;
  requiresAuth?: boolean;
  roles?: UserRole[];
}

// ============================================================================
// Theme Types
// ============================================================================

export interface Theme {
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  breakpoints: Breakpoints;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
}

export interface Typography {
  fontFamily: {
    primary: string;
    secondary: string;
    monospace: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
}

export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

// ============================================================================
// State Management Types
// ============================================================================

export interface Action<T = unknown> {
  type: string;
  payload?: T;
}

export type Reducer<S, A extends Action> = (state: S, action: A) => S;

export interface Store<S> {
  getState: () => S;
  dispatch: (action: Action) => void;
  subscribe: (listener: () => void) => () => void;
}

// ============================================================================
// Utility Types
// ============================================================================

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

// ============================================================================
// Export all types
// ============================================================================

export type AppTypes = {
  ApiResponse: ApiResponse;
  ApiError: ApiError;
  User: User;
  UserRole: UserRole;
  PerformanceMetrics: PerformanceMetrics;
  AnalyticsEvent: AnalyticsEvent;
  BlogPost: BlogPost;
  SEOMetadata: SEOMetadata;
<<<<<<< HEAD
  FormState: FormState<Record<string, unknown>>;
=======
>>>>>>> 729f4dc1f33e (Fix: Add ErrorSeverity enum and resolve type conflicts)
  Route: Route;
  Theme: Theme;
};