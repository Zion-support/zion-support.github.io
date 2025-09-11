<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
"use client",
import { Suspense, lazy, Component, ReactNode  } from './react';,
import { useState, useEffect  } from './react';,
// Lazy load components for better performance;
const LazyComponent = ({ component: Component, fallback, ...props }: {
  component: React.ComponentType < any>,
  fallback: ReactNode,
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
"use client";
import { Suspense, lazy, Component, ReactNode } from "react";
import { useState, useEffect } from "react";
// Lazy load components for better performance;
const LazyComponent = ({ component: Component, fallback, ...props }: {component: React.ComponentType<any>;
  fallback: ReactNode;
<<<<<<< HEAD
"use client",;
import { Suspense, lazy, Component, ReactNode } from "react",;
import { useState, useEffect } from "react",;
// Lazy load components for better performance;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
"use client",;
import { Suspense, lazy, Component, ReactNode } from "react",;
import { useState, useEffect } from "react",;
// Lazy load components for better performance;
const LazyComponent = ({ component: Component, fallback, ...props }: {;
  component: React.ComponentType<any>,;
  fallback: ReactNode,;

<<<<<<< HEAD
const LazyComponent = ({ component: Component, fallback, ...props }: {;
  component: React.ComponentType<any>,;
  fallback: ReactNode,;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  [key: string]: any;
}) =>: any (
  <Suspense fallback={fallback}>;
    <Component {...props} />;
<<<<<<< HEAD
<<<<<<< HEAD
=======

  </Suspense>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  </Suspense>;
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD


        <div className="p-6 text-center">;
          <div className="text-[var(--error)] text-lg mb-2">Something went wrong</div>;
<<<<<<< HEAD
=======
=======
  </Suspense>),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  </Suspense>;
);
// Error boundary for better error handling;
interface ErrorBoundaryState {
  has_error: boolean,
  error?: Error;
}
interface ErrorBoundaryProps {
  children: ReactNode,
  fallback?: ReactNode;
}
export class ErrorBoundary extends Component < ErrorBoundaryProps ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super (props),
    this.state = { has_error: false }
  }
  static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    return { has_error: true, error }
  }
  componentDidCatch (error: Error, error_info: React.ErrorInfo) {
    console.error ("Error caught by boundary:", error, error_info);
  }
  render() {if (this.state.hasError) {;
      return this.props.fallback |(;
=======
        <div className="p-6 text-center">;
          <div className="text-[var(--error)] text-lg mb-2">Something went wrong</div>;
=======
  </Suspense>),
=======
  </Suspense>;
  render() {if (this.state.hasError) {;
      return this.props.fallback |(;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        <div className="p-6 text-center">;
          <div className="text-[var(--error)] text-lg mb-2">Something went wrong</div>;
          <button;
            on_click={() => this.set_state ({ has_error: false })}
            className="btn - primary";
          >;
            Try again;
          </button>;
        </div>);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

;
    return this.props.children;
  }
}
;
// Loading spinner component;
<<<<<<< HEAD
=======
export function LoadingSpinner({ size = "md", className = "" }: {;
  size?: "sm" | "md" | "lg",;
  className?: string;
}) {;
  const sizeClasses = {;
    sm: "w-4 h-4",;
    md: "w-6 h-6",;
    lg: "w-8 h-8";
  },;


  return (;
    <div className={`animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] ${sizeClasses[size]} ${className}`} />;
  );
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

;
// Skeleton loading component;
export function Skeleton({ className = "", lines = 1 }: {;
  className?: string,;
  lines?: number;
}) {;
  return (;


    <div className={`animate-pulse ${className}`}>;
      {Array.from({ length: lines }).map((_, i) => (;
<<<<<<< HEAD
=======
=======
export /**
 * LoadingSpinner - Function description
 */
function LoadingSpinner() {
  const size_classes = {
    sm: "w - 4 h - 4",
    md: "w - 6 h - 6",
    lg: "w - 8 h - 8";
  },
  return (
    <div className={`animate - spin rounded - full border - 2 border-[var (--border)] border - t-[var (--accent)] ${size_classes[size]} ${class_name}`} />);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return this.props.children;
  }
}
// Loading spinner component;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function LoadingSpinner({ size = "md", className = "" }: {size?: "sm" | "md" | "lg";
  className?: string;
}) {const sizeClasses = {;
    sm: "w-4 h-4";
    md: "w-6 h-6";
    lg: "w-8 h-8";
  }
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
  return (;
    <div className={`animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] ${sizeClasses[size]} ${className}`} />;
  );
}
// Skeleton loading component;
export function Skeleton({ className = "", lines = 1 }: {className?: string;
  lines?: number;
}) {return (;
<<<<<<< HEAD
=======
;
// Skeleton loading component;
export function Skeleton({ className = "", lines = 1 }: {;
  className?: string,;
  lines?: number;
}) {;
  return (;
    <div className={`animate-pulse ${className}`}>;
      {Array.from({ length: lines }).map((_, i) => (;
=======
export /**
 * LoadingSpinner - Function description
 */
function LoadingSpinner() {
  const size_classes = {
    sm: "w - 4 h - 4",
    md: "w - 6 h - 6",
    lg: "w - 8 h - 8";
  },
  return (
    <div className={`animate - spin rounded - full border - 2 border-[var (--border)] border - t-[var (--accent)] ${size_classes[size]} ${class_name}`} />);
=======
export function LoadingSpinner({ size = "md", className = "" }: {size?: "sm" | "md" | "lg";
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
  return (;
    <div className={`animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] ${sizeClasses[size]} ${className}`} />;
  );
}
export function Skeleton({ className = "", lines = 1 }: {className?: string;
  lines?: number;
}) {return (;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
// Skeleton loading component;
export function Skeleton({ className = "", lines = 1 }: {;
  className?: string,;
  lines?: number;
}) {;
  return (;
    <div className={`animate-pulse ${className}`}>;
      {Array.from({ length: lines }).map((_, i) => (;
        <div;
          key={i}
          className="h - 4 bg-[var (--border)] rounded mb - 2 last:mb - 0";
          style={{ width: `${Math.random () * 40 + 60}%` }}
        />))}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
// Performance monitoring hook;

=======
// Performance monitoring hook;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function usePerformanceMonitor(componentName: string) {const startTime = window.window.window.performance.now();
  return {;
    endMeasure: () => {;
      const endTime = window.window.window.performance.now();
      const duration = endTime - startTime;
<<<<<<< HEAD
=======

export /**
 * usePerformanceMonitor - Function description
 */
function usePerformanceMonitor() {
  const start_time = window.window.window.performance.now (),
  return {
    end_measure: () => {
      const end_time = window.window.window.performance.now (),
      const duration = end_time - start_time,

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
// Performance monitoring hook;
export function usePerformanceMonitor(componentName: string) {;
  const startTime = window.window.window.performance.now(),;
  return {;
    endMeasure: () => {;
      const endTime = window.window.window.performance.now(),;
      const duration = endTime - startTime,;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Log performance metrics in development;
      // Check condition
if ( {) {
  $2
}
        // // // console.log (`${component_name} render time: ${duration.to_fixed (2)}ms`);
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
      // Send to analytics in production;
      if (process.env.NODE_ENV === "production" && duration > 100) {// Could send to analytics service here;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
      // Send to analytics in production;
      if (process.env.NODE_ENV === "production" && duration > 100) {;
        // Could send to analytics service here;
<<<<<<< HEAD


        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
<<<<<<< HEAD
=======
=======
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
      // Check condition
if ( {) {
  $2
}
        // Could send to analytics service here;
        console.warn (`${component_name} took ${duration.to_fixed (2)}ms to render`);
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (process.env.NODE_ENV === "production" && duration > 100) {// Could send to analytics service here;
=======
      if (process.env.NODE_ENV === "production" && duration > 100) {// Could send to analytics service here;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
      // Send to analytics in production;
      if (process.env.NODE_ENV === "production" && duration > 100) {;
        // Could send to analytics service here;
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
      }
    }
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

export /**
 * useIntersectionObserver - Function description
 */
function useIntersectionObserver() {
  const [is_intersecting, setIsIntersecting] = useState (false),
  useEffect (() => {
    const element = ref.current,
    // Check condition
if (return, ) {
  $2
}
    const observer = new IntersectionObserver (([entry]) => {
      setIsIntersecting (entry.is_intersecting);
    }, options),
    observer.observe (element),
    return () => observer.disconnect ();
  }, [ref, options]),
  return is_intersecting;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
// Debounced search hook for better performance;
<<<<<<< HEAD
=======
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
}
// Debounced search hook for better performance;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function useDebounce<T>(value: T, delay: number): T {const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {;
    const handler = setTimeout(() => {;
      setDebouncedValue(value);
    }, delay);
    return () => {clearTimeout(handler);
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
// Debounced search hook for better performance;

export function useDebounce<T>(value: T, delay: number): T {;
  const [debouncedValue, setDebouncedValue] = useState<T>(value),;
  useEffect(() => {;
    const handler = setTimeout(() => {;
      setDebouncedValue(value);
    }, delay),;
    return () => {;
      clearTimeout(handler);
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }, [value, delay]);
  return debounced_value;
}
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export { LazyComponent }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
export { LazyComponent };


<<<<<<< HEAD
export { LazyComponent }
;
export { LazyComponent };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
