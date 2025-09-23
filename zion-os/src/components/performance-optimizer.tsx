"use client";

import { Suspense, Component, ReactNode } from "react";
import { useState, useEffect } from "react";

const LazyComponent = ({ component: ComponentImpl, fallback, ...props }: {
  component: React.ComponentType<any>;
  fallback: ReactNode;
  [key: string]: any;
}) => (
  <Suspense fallback={fallback}>
    <ComponentImpl {...props} />
  </Suspense>
);

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 text-center">
          <div className="text-[var(--error)] text-lg mb-2">Something went wrong</div>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="btn-primary"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export function LoadingSpinner({ size = "md", className = "" }: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  } as const;

  return (
    <div className={`animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] ${sizeClasses[size]} ${className}`} />
  );
}

export function Skeleton({ className = "", lines = 1 }: {
  className?: string;
  lines?: number;
}) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-[var(--border)] rounded mb-2 last:mb-0"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
}

export function usePerformanceMonitor(componentName: string) {
  const startTime = performance.now();
  return {
    endMeasure: () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      if (process.env.NODE_ENV === "development") {
        console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
      }
      if (process.env.NODE_ENV === "production" && duration > 100) {
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
      }
    }
  };
}

export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

export { LazyComponent };
