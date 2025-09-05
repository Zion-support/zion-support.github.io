"use client&quot;;

interface LoadingSpinnerProps {
  size?: &quot;small&quot; | &quot;medium&quot; | &quot;large&quot;;
  className?: string;
}

export function LoadingSpinner({ size = &quot;medium&quot;, className = "&quot; }: LoadingSpinnerProps) {
  const sizeClasses = {
    small: &quot;w-4 h-4&quot;,
    medium: &quot;w-8 h-8&quot;,
    large: &quot;w-12 h-12&quot;
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`} role=&quot;status&quot; aria-label=&quot;Loading&quot;>
      <svg
        className=&quot;animate-spin text-blue-500&quot;
        xmlns=&quot;http://www.w3.org/2000/svg&quot;
        fill=&quot;none&quot;
        viewBox=&quot;0 0 24 24&quot;
        aria-hidden=&quot;true&quot;
      >
        <circle
          className=&quot;opacity-25&quot;
          cx=&quot;12&quot;
          cy=&quot;12&quot;
          r=&quot;10&quot;
          stroke=&quot;currentColor&quot;
          strokeWidth=&quot;4&quot;
        />
        <path
          className=&quot;opacity-75&quot;
          fill=&quot;currentColor&quot;
          d=&quot;M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z&quot;
        />
      </svg>
      <span className=&quot;sr-only&quot;>Loading...</span>
    </div>
  );
}