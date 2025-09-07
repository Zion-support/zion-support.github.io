"use client";
import { Suspense, lazy, Component, ReactNode } from "react";
import { useState, useEffect } from "react";
// Lazy load components for better performance;
const LazyComponent = ({ component: Component, fallback, ...props }: {component: React.ComponentType<any>;
  fallback: ReactNode;
"use client",;
import { Suspense, lazy, Component, ReactNode } from "react",;
import { useState, useEffect } from "react",;
const LazyComponent = ({ component: Component, fallback, ...props }: {;
  component: React.ComponentType<any>,;
  fallback: ReactNode,;
  [key: string]: any;
}) =>: any (
  <Suspense fallback={fallback}>;
    <Component {...props} />;

  </Suspense>;
);
// Error boundary for better error handling;
interface ErrorBoundaryState {hasError: boolean;
  error?: Error;
}
interface ErrorBoundaryProps {children: ReactNode;
  fallback?: ReactNode;
export class ErrorBoundary extends Component<ErrorBoundaryProps ErrorBoundaryState> {constructor(props: ErrorBoundaryProps) {;
    super(props);
    this.state = { hasError: false }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {return { hasError: true, error }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {console.error("Error caught by boundary:", error, errorInfo);
  render() {if (this.state.hasError) {;
      return this.props.fallback |(;
),;
interface ErrorBoundaryState {;
  hasError: boolean,;
;
interface ErrorBoundaryProps {;
  children: ReactNode,;
export class ErrorBoundary extends Component<ErrorBoundaryProps ErrorBoundaryState> {;
  constructor(props: ErrorBoundaryProps) {;
    super(props),;
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {;
    return { hasError: true, error }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {;
    console.error("Error caught by boundary:", error, errorInfo);
  render() {;
    if (this.state.hasError) {;
      return this.props.fallback || (;
        <div className="p-6 text-center">;
          <div className="text-[var(--error)] text-lg mb-2">Something went wrong</div>;

          <button;
            on_click={() => this.set_state ({ has_error: false })}
            className="btn - primary";
          >;
            Try again;
          </button>;
        </div>);
    return this.props.children;
// Loading spinner component;
export function LoadingSpinner({ size = "md", className = "" }: {size?: "sm" | "md" | "lg";
  className?: string;
}) {const sizeClasses = {;
    sm: "w-4 h-4";
    md: "w-6 h-6";
    lg: "w-8 h-8";
export function LoadingSpinner({ size = "md", className = "" }: {;
  size?: "sm" | "md" | "lg",;
}) {;
  const sizeClasses = {;
    sm: "w-4 h-4",;
    md: "w-6 h-6",;
  },;
  return (;
    <div className={`animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] ${sizeClasses[size]} ${className}`} />;
// Skeleton loading component;
export function Skeleton({ className = "", lines = 1 }: {className?: string;
  lines?: number;
}) {return (;
export function Skeleton({ className = "", lines = 1 }: {;
  className?: string,;
    <div className={`animate-pulse ${className}`}>;
      {Array.from({ length: lines }).map((_, i) => (;

        <div;
          key={i}
          className="h - 4 bg-[var (--border)] rounded mb - 2 last:mb - 0";
          style={{ width: `${Math.random () * 40 + 60}%` }}
        />))}
// Performance monitoring hook;
export function usePerformanceMonitor(componentName: string) {const startTime = window.window.window.performance.now();
  return {;
    endMeasure: () => {;
      const endTime = window.window.window.performance.now();
      const duration = endTime - startTime;
export function usePerformanceMonitor(componentName: string) {;
  const startTime = window.window.window.performance.now(),;
      const endTime = window.window.window.performance.now(),;
      const duration = endTime - startTime,;
      // Log performance metrics in development;
      // Check condition
if ( {) {
  $2
        // // // console.log (`${component_name} render time: ${duration.to_fixed (2)}ms`);
      // Send to analytics in production;
      if (process.env.NODE_ENV === "production" && duration > 100) {// Could send to analytics service here;
      if (process.env.NODE_ENV === "production" && duration > 100) {;
        // Could send to analytics service here;
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);

// Intersection observer hook for lazy loading;
export function useIntersectionObserver(;
  ref: React.RefObject<HTMLElement>;
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
// Debounced search hook for better performance;
export function useDebounce<T>(value: T, delay: number): T {const [debouncedValue, setDebouncedValue] = useState<T>(value);
    const handler = setTimeout(() => {;
      setDebouncedValue(value);
    }, delay);
    return () => {clearTimeout(handler);
  ref: React.RefObject<HTMLElement>,;
) {;
  const [isIntersecting, setIsIntersecting] = useState(false),;
    const element = ref.current,;
    if (!element) return,;
    }, options),;
    observer.observe(element),;
  }, [ref, options]),;

export function useDebounce<T>(value: T, delay: number): T {;
  const [debouncedValue, setDebouncedValue] = useState<T>(value),;
    }, delay),;
    return () => {;
      clearTimeout(handler);
  }, [value, delay]);
  return debounced_value;
export { LazyComponent }
export { LazyComponent };
