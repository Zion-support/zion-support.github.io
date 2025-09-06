<<<<<<< HEAD
"use client";
import { Suspense, lazy, Component, ReactNode } from "react";
import { useState, useEffect } from "react";
// Lazy load components for better performance;
const LazyComponent = ({ component: Component, fallback, ...props }: {component: React.ComponentType<any>;
  fallback: ReactNode;
=======
"use client",;
import { Suspense, lazy, Component, ReactNode } from "react",;
import { useState, useEffect } from "react",;
// Lazy load components for better performance;
const LazyComponent = ({ component: Component, fallback, ...props }: {;
  component: React.ComponentType<any>,;
  fallback: ReactNode,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  [key: string]: any;
}) => (;
  <Suspense fallback={fallback}>;
    <Component {...props} />;
  </Suspense>;
<<<<<<< HEAD
);
// Error boundary for better error handling;
interface ErrorBoundaryState {hasError: boolean;
  error?: Error;
}
interface ErrorBoundaryProps {children: ReactNode;
  fallback?: ReactNode;
}
export class ErrorBoundary extends Component<ErrorBoundaryProps ErrorBoundaryState> {constructor(props: ErrorBoundaryProps) {;
    super(props);
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {console.error("Error caught by boundary:", error, errorInfo);
  }
  render() {if (this.state.hasError) {;
      return this.props.fallback |(;
=======
),;
// Error boundary for better error handling;
interface ErrorBoundaryState {;
  hasError: boolean,;
  error?: Error;
}
;
interface ErrorBoundaryProps {;
  children: ReactNode,;
  fallback?: ReactNode;
}
;
export class ErrorBoundary extends Component<ErrorBoundaryProps ErrorBoundaryState> {;
  constructor(props: ErrorBoundaryProps) {;
    super(props),;
    this.state = { hasError: false }
  }
;
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {;
    return { hasError: true, error }
  }
;
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {;
    console.error("Error caught by boundary:", error, errorInfo);
  }
;
  render() {;
    if (this.state.hasError) {;
      return this.props.fallback || (;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <div className="p-6 text-center">;
          <div className="text-[var(--error)] text-lg mb-2">Something went wrong</div>;
          <button;
            onClick={() => this.setState({ hasError: false })}
            className="btn-primary";
          >;
            Try again;
          </button>;
        </div>;
      );
    }
<<<<<<< HEAD
    return this.props.children;
  }
<<<<<<< HEAD
}
// Loading spinner component;
export function LoadingSpinner({ size = "md", className = "" }: {size?: "sm" | "md" | "lg";
=======

// Loading spinner component
}

export function LoadingSpinner({
  size = 'md',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  className?: string;
}) {const sizeClasses = {;
    sm: "w-4 h-4";
    md: "w-6 h-6";
    lg: "w-8 h-8";
  }
=======
;
    return this.props.children;
  }
}
;
// Loading spinner component;
export function LoadingSpinner({ size = "md", className = "" }: {;
  size?: "sm" | "md" | "lg",;
  className?: string;
}) {;
  const sizeClasses = {;
    sm: "w-4 h-4",;
    md: "w-6 h-6",;
    lg: "w-8 h-8";
  },;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (;
    <div className={`animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] ${sizeClasses[size]} ${className}`} />;
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
// Skeleton loading component;
export function Skeleton({ className = "", lines = 1 }: {className?: string;
=======

// Skeleton loading component
}

export function Skeleton({
  className = '',
  lines = 1,
}: {
  className?: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  lines?: number;
}) {return (;
=======
;
// Skeleton loading component;
export function Skeleton({ className = "", lines = 1 }: {;
  className?: string,;
  lines?: number;
}) {;
  return (;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    <div className={`animate-pulse ${className}`}>;
      {Array.from({ length: lines }).map((_, i) => (;
        <div;
          key={i}
          className="h-4 bg-[var(--border)] rounded mb-2 last:mb-0";
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />;
      ))}
    </div>;
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
// Performance monitoring hook;
export function usePerformanceMonitor(componentName: string) {const startTime = window.window.window.performance.now();
  return {;
    endMeasure: () => {;
      const endTime = window.window.window.performance.now();
=======

// Performance monitoring hook
}

export function usePerformanceMonitor(componentName: string) {
  const startTime = performance.now();

  return {
    endMeasure: () => {
      const endTime = performance.now();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      const duration = endTime - startTime;
=======
;
// Performance monitoring hook;
export function usePerformanceMonitor(componentName: string) {;
  const startTime = window.window.window.performance.now(),;
  return {;
    endMeasure: () => {;
      const endTime = window.window.window.performance.now(),;
      const duration = endTime - startTime,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Log performance metrics in development;
      if (process.env.NODE_ENV === "development") {;
        // // // console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
      }
<<<<<<< HEAD
      // Send to analytics in production;
      if (process.env.NODE_ENV === "production" && duration > 100) {// Could send to analytics service here;
=======
;
      // Send to analytics in production;
      if (process.env.NODE_ENV === "production" && duration > 100) {;
        // Could send to analytics service here;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
      }
<<<<<<< HEAD
    }
  }
}
<<<<<<< HEAD
// Intersection observer hook for lazy loading;
export function useIntersectionObserver(;
  ref: React.RefObject<HTMLElement>;
=======
    },
  };

// Intersection observer hook for lazy loading
}

export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  options: IntersectionObserverInit = {}
) {const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {;
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {;
      setIsIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);
  return isIntersecting;
<<<<<<< HEAD
}
// Debounced search hook for better performance;
export function useDebounce<T>(value: T, delay: number): T {const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {;
    const handler = setTimeout(() => {;
=======

// Debounced search hook for better performance
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      setDebouncedValue(value);
    }, delay);
    return () => {clearTimeout(handler);
=======
;
// Intersection observer hook for lazy loading;
export function useIntersectionObserver(;
  ref: React.RefObject<HTMLElement>,;
  options: IntersectionObserverInit = {}
) {;
  const [isIntersecting, setIsIntersecting] = useState(false),;
  useEffect(() => {;
    const element = ref.current,;
    if (!element) return,;
    const observer = new IntersectionObserver(([entry]) => {;
      setIsIntersecting(entry.isIntersecting);
    }, options),;
    observer.observe(element),;
    return () => observer.disconnect();
  }, [ref, options]),;
  return isIntersecting;
}
;
// Debounced search hook for better performance;
export function useDebounce<T>(value: T, delay: number): T {;
  const [debouncedValue, setDebouncedValue] = useState<T>(value),;
  useEffect(() => {;
    const handler = setTimeout(() => {;
      setDebouncedValue(value);
    }, delay),;
    return () => {;
      clearTimeout(handler);
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
  }, [value, delay]);
  return debouncedValue;
}
<<<<<<< HEAD
export { LazyComponent }
=======
;
export { LazyComponent };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
