"use client";


// Lazy load components for better performance
const _LazyComponent = (_{_component: Component, _fallback, _...props}: {_component: React.ComponentType<any>;
  fallback: ReactNode;
  [key: string]: unknown;}) => (
  <Suspense fallback={_fallback}>
    <Component {_...props} />
  </Suspense>
);

// Error boundary for better error handling
interface ErrorBoundaryState {_hasError: boolean;
  error?: Error;}

interface ErrorBoundaryProps {_children: ReactNode;
  fallback?: ReactNode;}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {_constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false};
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {_return { hasError: true, _error};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {}

  render() {_if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 text-center">
          <div className="text-[var(--error)] text-lg mb-2">Something went wrong</div>
          <button
            onClick={() => this.setState({ hasError: false})}
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

// Loading spinner component
export function LoadingSpinner(_{_size = "md", _className = ""}: {_size?: "sm" | "md" | "lg"; 
  className?: string;}) {_const _sizeClasses = {
    sm: "w-4 h-4", _md: "w-6 h-6", _lg: "w-8 h-8"};

  return (
    <div className={_`animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] ${sizeClasses[size]} ${_className}`} />
  );
}

// Skeleton loading component
export function Skeleton(_{_className = "", _lines = 1}: {_className?: string; 
  lines?: number;}) {_return (
    <div className={`animate-pulse ${className}`}>
      {_Array.from({ length: lines}).map(_(_, _i) => (
        <div
          key={_i}
          className="h-4 bg-[var(--border)] rounded mb-2 last:mb-0"
          style={_{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
}

// Performance monitoring hook
export function usePerformanceMonitor(_componentName: string) {_const _startTime = performance.now();
  
  return {
    endMeasure: () => {
      const _endTime = performance.now();
      const _duration = endTime - startTime;
      
      // Log performance metrics in development
      if (process.env.NODE_ENV === "development") {}ms`);
      }
      
      // Send to analytics in production
      if (process.env.NODE_ENV === "production" && duration > 100) {_// Could send to analytics service here}ms to render`);
      }
    }
  };
}

// Intersection observer hook for lazy loading
export function useIntersectionObserver(_ref: React.RefObject<HTMLElement>, _options: IntersectionObserverInit = {}) {_const [isIntersecting, _setIsIntersecting] = useState(false);

  useEffect__(() => {
    const _element = ref.current;
    if (!element) return;

    const _observer = new IntersectionObserver(_([entry]) => {
      setIsIntersecting(entry.isIntersecting);}, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}

// Debounced search hook for better performance
export function useDebounce<T>(_value: T, _delay: number): T {_const [debouncedValue, _setDebouncedValue] = useState<T>(value);

  useEffect__(() => {
    const _handler = setTimeout__(() => {
      setDebouncedValue(value);}, delay);

    return () => {_clearTimeout(handler);};
  }, [value, delay]);

  return debouncedValue;
}

export {_LazyComponent};