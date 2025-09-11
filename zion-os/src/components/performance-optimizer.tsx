>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
"use client",
import { Suspense, lazy, Component, ReactNode  } from './react';,
import { useState, useEffect  } from './react';,
// Lazy load components for better performance;
const LazyComponent = ({ component: Component, fallback, ...props }: {
  component: React.ComponentType < any>,
  fallback: ReactNode,
  </Suspense>;
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
      return this.props.fallback |(;),;
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
;
    return this.props.children;
  }
}
;
// Loading spinner component;
      // Check condition
if ( {) {
  $2
}
        // // // console.log (`${component_name} render time: ${duration.to_fixed (2)}ms`);
      }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
      // Send to analytics in production;
      if (process.env.NODE_ENV === "production" && duration > 100) {// Could send to analytics service here;;
      // Send to analytics in production;
      if (process.env.NODE_ENV === "production" && duration > 100) {;
        // Could send to analytics service here;
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
}
// Debounced search hook for better performance;
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
