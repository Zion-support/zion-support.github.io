
<<<<<<< HEAD
<<<<<<< HEAD
=======
"use client",
import { Suspense, lazy, Component, ReactNode  } from './react';,
import { useState, useEffect  } from './react';,
// Lazy load components for better performance;
const LazyComponent = ({ component: Component, fallback, ...props }: {
  component: React.ComponentType < any>,
  fallback: ReactNode,
=======
<<<<<<< HEAD
"use client";
import { Suspense, lazy, Component, ReactNode } from "react";
import { useState, useEffect } from "react";
// Lazy load components for better performance;
const LazyComponent = ({ component: Component, fallback, ...props }: {component: React.ComponentType<any>;
  fallback: ReactNode;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
"use client",;
import { Suspense, lazy, Component, ReactNode } from "react",;
import { useState, useEffect } from "react",;
// Lazy load components for better performance;
<<<<<<< HEAD
const LazyComponent = ({ component: Component, fallback, ...props }: {
  component: React.ComponentType < any>,
  fallback: ReactNode,

=======

"use client",;
import { Suspense, lazy, Component, ReactNode } from "react",;
import { useState, useEffect } from "react",;
// Lazy load components for better performance;
const LazyComponent = ({ component: Component, fallback, ...props }: {;
  component: React.ComponentType<any>,;
  fallback: ReactNode,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
const LazyComponent = ({ component: Component, fallback, ...props }: {;
  component: React.ComponentType<any>,;
  fallback: ReactNode,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  [key: string]: any;
}) =>: any (
  <Suspense fallback={fallback}>;
    <Component {...props} />;
<<<<<<< HEAD

  </Suspense>;

<<<<<<< HEAD
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="p-6 text-center">;
          <div className="text-[var(--error)] text-lg mb-2">Something went wrong</div>;
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  </Suspense>),
=======
  </Suspense>;
<<<<<<< HEAD
);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
  render () {
    // Check condition
if ( {) {
  $2
}
      return this.props.fallback || (
        <div className="p - 6 text - center">;
          <div className="text-[var (--error)] text - lg mb - 2">Something went wrong</div>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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

;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return this.props.children;
  }
}
;
// Loading spinner component;
<<<<<<< HEAD
export function LoadingSpinner({ size = "md", className = "" }: {;
  size?: "sm" | "md" | "lg",;
  className?: string;
}) {;
  const sizeClasses = {;
    sm: "w-4 h-4",;
    md: "w-6 h-6",;
    lg: "w-8 h-8";
  },;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (;
    <div className={`animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] ${sizeClasses[size]} ${className}`} />;
  );
}

<<<<<<< HEAD
=======

;
// Skeleton loading component;
export function Skeleton({ className = "", lines = 1 }: {;
  className?: string,;
  lines?: number;
}) {;
  return (;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <div className={`animate-pulse ${className}`}>;
      {Array.from({ length: lines }).map((_, i) => (;
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (;
    <div className={`animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] ${sizeClasses[size]} ${className}`} />;
  );
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
<<<<<<< HEAD
// Skeleton loading component;
<<<<<<< HEAD
export /**
 * Skeleton - Function description
 */
function Skeleton() {
  return (
    <div className={`animate - pulse ${class_name}`}>;
      {Array.from ({ length: lines }).map ((_, i) => (
=======
export function Skeleton({ className = "", lines = 1 }: {className?: string;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div;
          key={i}
          className="h - 4 bg-[var (--border)] rounded mb - 2 last:mb - 0";
          style={{ width: `${Math.random () * 40 + 60}%` }}
        />))}
    </div>);
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
// Performance monitoring hook;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export /**
 * usePerformanceMonitor - Function description
 */
function usePerformanceMonitor() {
  const start_time = window.window.window.performance.now (),
  return {
    end_measure: () => {
      const end_time = window.window.window.performance.now (),
      const duration = end_time - start_time,
<<<<<<< HEAD

=======

=======
=======
export function usePerformanceMonitor(componentName: string) {const startTime = window.window.window.performance.now();
  return {;
    endMeasure: () => {;
      const endTime = window.window.window.performance.now();
      const duration = endTime - startTime;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
// Performance monitoring hook;
export function usePerformanceMonitor(componentName: string) {;
  const startTime = window.window.window.performance.now(),;
  return {;
    endMeasure: () => {;
      const endTime = window.window.window.performance.now(),;
      const duration = endTime - startTime,;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

;
      // Send to analytics in production;
      if (process.env.NODE_ENV === "production" && duration > 100) {;
        // Could send to analytics service here;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
=======
=======
<<<<<<< HEAD
      // Send to analytics in production;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Check condition
if ( {) {
  $2
}
        // Could send to analytics service here;
        console.warn (`${component_name} took ${duration.to_fixed (2)}ms to render`);
=======
      if (process.env.NODE_ENV === "production" && duration > 100) {// Could send to analytics service here;
=======
;
      // Send to analytics in production;
      if (process.env.NODE_ENV === "production" && duration > 100) {;
        // Could send to analytics service here;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
    }
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
// Intersection observer hook for lazy loading;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
export function use_debounce < T>(value: T, delay: number): T {
  const [debounced_value, setDebouncedValue] = useState < T>(value),
  useEffect (() => {
    const handler = set_timeout (() => {
      setDebouncedValue (value);
    }, delay),
    return () => {
      clear_timeout (handler);
=======
export function useDebounce<T>(value: T, delay: number): T {const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {;
    const handler = setTimeout(() => {;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function useDebounce<T>(value: T, delay: number): T {;
  const [debouncedValue, setDebouncedValue] = useState<T>(value),;
  useEffect(() => {;
    const handler = setTimeout(() => {;
      setDebouncedValue(value);
    }, delay),;
    return () => {;
      clearTimeout(handler);
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }, [value, delay]);
  return debounced_value;
}
<<<<<<< HEAD

<<<<<<< HEAD
=======

;
export { LazyComponent };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export { LazyComponent }
=======
;
export { LazyComponent };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
