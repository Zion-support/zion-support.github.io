/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_URL: string;
  readonly VITE_APP_VERSION: string;
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Import React types properly
import * as React from "react";

// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from "vite";
}

declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from "vite";
  export default function reactSWC(): Plugin;
}

// Declare module for @vitejs/plugin-react
declare module '@vitejs/plugin-react' {
  import { Plugin } from "vite";
  export default function react(): Plugin;
}

// Declare module for vite-plugin-pwa
declare module 'vite-plugin-pwa' {
  import { Plugin } from "vite";
  export function VitePWA(options?: any): Plugin;
}

// Declare module for @vitejs/plugin-legacy
declare module '@vitejs/plugin-legacy' {
  import { Plugin } from "vite";
  export default function legacy(options?: any): Plugin;
}

// Declare module for rollup-plugin-visualizer
declare module 'rollup-plugin-visualizer' {
  import { Plugin } from "rollup";
  export function visualizer(options?: any): Plugin;
}

// Declare module for @types/node
declare module '@types/node' {
  export * from 'node';
}

// Global type declarations
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Component type declarations
declare module '@/components/ui/badge' {
  import { ReactNode } from 'react';
  
  interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
    className?: string;
  }
  
  export function Badge(props: BadgeProps): JSX.Element;
}

declare module '@/components/ui/card' {
  import { ReactNode } from 'react';
  
  interface CardProps {
    children: ReactNode;
    className?: string;
  }
  
  interface CardHeaderProps {
    children: ReactNode;
    className?: string;
  }
  
  interface CardContentProps {
    children: ReactNode;
    className?: string;
  }
  
  interface CardFooterProps {
    children: ReactNode;
    className?: string;
  }
  
  export function Card(props: CardProps): JSX.Element;
  export function CardHeader(props: CardHeaderProps): JSX.Element;
  export function CardContent(props: CardContentProps): JSX.Element;
  export function CardFooter(props: CardFooterProps): JSX.Element;
}

declare module '@/components/ui/button' {
  import { ReactNode, ButtonHTMLAttributes } from 'react';
  
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
  }
  
  export function Button(props: ButtonProps): JSX.Element;
}

declare module '@/components/ui/input' {
  import { InputHTMLAttributes } from 'react';
  
  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
  }
  
  export function Input(props: InputProps): JSX.Element;
}

declare module '@/components/ui/textarea' {
  import { TextareaHTMLAttributes } from 'react';
  
  interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
  }
  
  export function Textarea(props: TextareaProps): JSX.Element;
}

declare module '@/components/ui/label' {
  import { ReactNode, LabelHTMLAttributes } from 'react';
  
  interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
    className?: string;
  }
  
  export function Label(props: LabelProps): JSX.Element;
}

declare module '@/components/ui/select' {
  import { ReactNode, SelectHTMLAttributes } from 'react';
  
  interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode;
    className?: string;
  }
  
  export function Select(props: SelectProps): JSX.Element;
}

declare module '@/components/ui/switch' {
  import { InputHTMLAttributes } from 'react';
  
  interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    className?: string;
  }
  
  export function Switch(props: SwitchProps): JSX.Element;
}

declare module '@/components/ui/dropdown-menu' {
  import { ReactNode } from 'react';
  
  interface DropdownMenuProps {
    children: ReactNode;
  }
  
  interface DropdownMenuTriggerProps {
    children: ReactNode;
  }
  
  interface DropdownMenuContentProps {
    children: ReactNode;
  }
  
  export function DropdownMenu(props: DropdownMenuProps): JSX.Element;
  export function DropdownMenuTrigger(props: DropdownMenuTriggerProps): JSX.Element;
  export function DropdownMenuContent(props: DropdownMenuContentProps): JSX.Element;
}

declare module '@/components/ui/accordion' {
  import { ReactNode } from 'react';
  
  interface AccordionProps {
    children: ReactNode;
    type?: 'single' | 'multiple';
    collapsible?: boolean;
  }
  
  interface AccordionItemProps {
    children: ReactNode;
    value: string;
  }
  
  interface AccordionTriggerProps {
    children: ReactNode;
  }
  
  interface AccordionContentProps {
    children: ReactNode;
  }
  
  export function Accordion(props: AccordionProps): JSX.Element;
  export function AccordionItem(props: AccordionItemProps): JSX.Element;
  export function AccordionTrigger(props: AccordionTriggerProps): JSX.Element;
  export function AccordionContent(props: AccordionContentProps): JSX.Element;
}

declare module '@/components/ui/toast' {
  import { ReactNode } from 'react';
  
  interface ToastProps {
    children: ReactNode;
    variant?: 'default' | 'destructive';
  }
  
  interface ToastProviderProps {
    children: ReactNode;
  }
  
  export function Toast(props: ToastProps): JSX.Element;
  export function ToastProvider(props: ToastProviderProps): JSX.Element;
}

declare module '@/components/ui/loading-spinner' {
  interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
  }
  
  export function LoadingSpinner(props: LoadingSpinnerProps): JSX.Element;
}

declare module '@/components/ui/skeleton-loader' {
  interface SkeletonLoaderProps {
    className?: string;
  }
  
  export function SkeletonLoader(props: SkeletonLoaderProps): JSX.Element;
}

declare module '@/components/ui/floating-action-button' {
  import { ReactNode } from 'react';
  
  interface FloatingActionButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  export function FloatingActionButton(props: FloatingActionButtonProps): JSX.Element;
}

declare module '@/components/ui/error-boundary' {
  import { ReactNode } from 'react';
  
  interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
  }
  
  export function ErrorBoundary(props: ErrorBoundaryProps): JSX.Element;
}

declare module '@/components/ui/enhanced-notification-system' {
  import { ReactNode } from 'react';
  
  interface NotificationSystemProps {
    children: ReactNode;
  }
  
  export function EnhancedNotificationSystem(props: NotificationSystemProps): JSX.Element;
}

declare module '@/components/ui/enhanced-loading-spinner' {
  interface EnhancedLoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
  }
  
  export function EnhancedLoadingSpinner(props: EnhancedLoadingSpinnerProps): JSX.Element;
}

// Export the global declarations
export {};