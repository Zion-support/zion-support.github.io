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
  message?: string;
  success: boolean;
  status: number;
  timestamp: number;
}

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
  timestamp: number;
}

// ============================================================================
// User Types
// ============================================================================
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
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
  renderTime: number;
  loadTime: number;
  memoryUsage: number;
}

export interface PerformanceReport {
  metrics: PerformanceMetrics;
  score: number;
  timestamp: number;
  duration: number;
}

// ============================================================================
// Analytics Types
// ============================================================================
export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
  timestamp: number;
}

export interface AnalyticsUser {
  id: string;
  properties: Record<string, unknown>;
  timestamp: number;
}

// ============================================================================
// Content Types
// ============================================================================
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  tags: string[];
  category: string;
  slug: string;
  featuredImage?: string;
  seo: SEOMetadata;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  website?: string;
}

// ============================================================================
// SEO Types
// ============================================================================
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: Record<string, unknown>;
}

// ============================================================================
// Form Types
// ============================================================================
export interface FormField<T = string> {
  value: T;
  error?: string;
  touched: boolean;
  required: boolean;
  disabled: boolean;
}

export interface FormState<T = Record<string, unknown>> {
  values: T;
  errors: Partial<T>;
  touched: Partial<T>;
  isSubmitting: boolean;
  isValid: boolean;
}

export type FormValidator<T> = (value: T) => string | undefined;

// ============================================================================
// Component Types
// ============================================================================
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
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
  protected?: boolean;
  roles?: UserRole[];
}

export interface RouteConfig {
  routes: Route[];
  fallback?: React.ComponentType;
}

// ============================================================================
// Theme Types
// ============================================================================
export interface Theme {
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  breakpoints: Breakpoints;
  shadows: ShadowPalette;
  borderRadius: BorderRadius;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  warning: string;
  success: string;
  info: string;
}

export interface Typography {
  fontFamily: {
    primary: string;
    secondary: string;
    mono: string;
  };
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
}

export interface FontSize {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
}

export interface FontWeight {
  light: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
}

export interface LineHeight {
  none: number;
  tight: number;
  snug: number;
  normal: number;
  relaxed: number;
  loose: number;
}

export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
}

export interface ShadowPalette {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
  none: string;
}

export interface BorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}

export interface Breakpoints {
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
  meta?: Record<string, unknown>;
}

export interface Store<T = unknown> {
  getState: () => T;
  dispatch: (action: Action) => void;
  subscribe: (listener: () => void) => () => void;
}

// ============================================================================
// Utility Types
// ============================================================================
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequiredFields<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

export type OptionalFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P];
};

export type MakeRequired<T, K extends keyof T> = {
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
  PerformanceReport: PerformanceReport;
  AnalyticsEvent: AnalyticsEvent;
  AnalyticsUser: AnalyticsUser;
  BlogPost: BlogPost;
  Testimonial: Testimonial;
  SEOMetadata: SEOMetadata;
  FormField: FormField;
  FormState: FormState;
  FormValidator: FormValidator;
  BaseComponentProps: BaseComponentProps;
  ErrorBoundaryProps: ErrorBoundaryProps;
  Route: Route;
  RouteConfig: RouteConfig;
  Theme: Theme;
  ColorPalette: ColorPalette;
  Typography: Typography;
  FontSize: FontSize;
  FontWeight: FontWeight;
  LineHeight: LineHeight;
  Spacing: Spacing;
  ShadowPalette: ShadowPalette;
  BorderRadius: BorderRadius;
  Breakpoints: Breakpoints;
  Action: Action;
  Store: Store;
  DeepPartial: DeepPartial;
  RequiredFields: RequiredFields;
  OptionalFields: OptionalFields;
  MakeRequired: MakeRequired;
};