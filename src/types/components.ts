import { ReactNode } from 'react';

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
  'data-testid'?: string;
}

// Loading spinner props
export interface LoadingSpinnerProps extends BaseComponentProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
}

// Feature card props
<<<<<<< HEAD
export interface FeatureCardProps extends BaseComponentProps {
  id: string | number;
=======
<<<<<<< HEAD
export interface FeatureCardProps extends Omit<BaseComponentProps, 'id'> {
  id: number;
=======
export interface FeatureCardProps extends BaseComponentProps {
  id: string | number;
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
  title: string;
  description: string;
  icon: ReactNode;
  color: 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'indigo';
  href: string;
  isActive: boolean;
  onClick: () => void;
}

// Button props
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  asChild?: boolean;
}

// Input props
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  helperText?: string;
}

// Modal props
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// Card props
export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  image?: string;
  actions?: ReactNode;
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

// Form props
export interface FormProps extends BaseComponentProps {
  onSubmit: (data: Record<string, any>) => void;
  initialValues?: Record<string, any>;
  validationSchema?: unknown;
  loading?: boolean;
}

// Table props
export interface TableProps<T = any> extends BaseComponentProps {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    onPageChange: (page: number) => void;
  };
}

export interface TableColumn<T = any> {
  key: keyof T | string;
  title: string;
  render?: (value: unknown, row: T) => ReactNode;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

// Navigation props
export interface NavigationProps extends BaseComponentProps {
  items: NavigationItem[];
  activeItem?: string;
  onItemClick?: (item: NavigationItem) => void;
  orientation?: 'horizontal' | 'vertical';
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  badge?: string | number;
  children?: NavigationItem[];
}

// Layout props
export interface LayoutProps extends BaseComponentProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  main?: ReactNode;
}

// SEO props
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: Record<string, any>;
}