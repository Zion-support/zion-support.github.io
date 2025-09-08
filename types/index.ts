// Global type definitions

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: string;
  setupTime: string;
  targetUsers: string;
  icon?: string;
  slug?: string;
  benefits?: string[];
  marketPrice?: string;
  price?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'talent' | 'client';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'paused' | 'cancelled';
  clientId: string;
  talentId?: string;
  startDate: string;
  endDate?: string;
  budget: number;
  timeline: Milestone[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  deliverables: string[];
}

export interface ProjectDocument {
  id: string;
  name: string;
  url: string;
  type: string;
  uploadedAt: string;
  uploadedBy: string;
}

export interface ProjectNote {
  id: string;
  content: string;
  authorId: string;
  authorRole: string;
  createdAt: string;
}

export interface Offer {
  id: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  createdAtIso: string;
}

export interface PaymentTerms {
  type: 'fixed' | 'hourly' | 'milestone';
  amount?: number;
  hourlyRate?: number;
  milestones?: Milestone[];
}

export interface FeedbackRecord {
  id: string;
  createdAtIso: string;
  user: string;
  rating: number;
  comment?: string;
  kind: string;
  context?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SearchParams {
  query?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  features?: string[];
  sortBy?: 'name' | 'price' | 'rating' | 'created';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  timestamp: number;
  userAgent?: string;
  url?: string;
}

export interface ErrorReport {
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

// Component Props Types
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  hover?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// API Types
export interface NextApiRequest extends Request {
  body: any;
  query: Record<string, string | string[]>;
  method: string;
  headers: Record<string, string>;
}

export interface NextApiResponse {
  status: (code: number) => NextApiResponse;
  json: (data: any) => void;
  send: (data: any) => void;
  end: (data?: any) => void;
  setHeader: (name: string, value: string) => void;
}

// Environment Variables
export interface ProcessEnv {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  DATABASE_URL?: string;
  NEXTAUTH_SECRET?: string;
  NEXTAUTH_URL?: string;
  OPENAI_API_KEY?: string;
  FIREBASE_PROJECT_ID?: string;
  FIREBASE_CLIENT_EMAIL?: string;
  FIREBASE_PRIVATE_KEY?: string;
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Event Types
export interface CustomEvent<T = any> extends Event {
  detail: T;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

export interface FormData {
  [key: string]: any;
}

export interface FormErrors {
  [key: string]: string;
}

// Theme Types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
  external?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

// Analytics Types
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface PageView {
  page: string;
  title: string;
  url: string;
  referrer?: string;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

// Notification Types
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error?: string;
  data?: any;
}

// API Error Types
export interface ApiError {
  code: string;
  message: string;
  details?: any;
  timestamp: string;
  requestId?: string;
}

// Cache Types
export interface CacheConfig {
  ttl: number; // Time to live in seconds
  key: string;
  tags?: string[];
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
  tags?: string[];
}

// Feature Flags
export interface FeatureFlags {
  [key: string]: boolean;
}

// Configuration Types
export interface AppConfig {
  name: string;
  version: string;
  environment: string;
  apiUrl: string;
  features: FeatureFlags;
  theme: Theme;
  seo: SEOData;
}

export default {};