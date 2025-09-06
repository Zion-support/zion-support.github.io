
<<<<<<< HEAD
<<<<<<< HEAD
=======
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg',;
  text?: string,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  className?: string;
}
export default function LoadingSpinner({ size = 'md', text, className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4'
    md: 'w-6 h-6'
    lg: 'w-8 h-8'
  }
  return (
    <div className={`flex items-center gap-3 ${className}`}>

<<<<<<< HEAD
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
=======
      <svg 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        />
      </svg>
      {text && <span className="text-sm">{text}</span>}
    </div>
  )
}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  class_name?: string;
=======
<<<<<<< HEAD
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';
  text?: string;
=======
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg',;
  text?: string,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  className?: string;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
export default /**
 * LoadingSpinner - Function description
 */
function LoadingSpinner() {
  const size_classes = {
    sm: 'w - 4 h - 4',
    md: 'w - 6 h - 6',
    lg: 'w - 8 h - 8';
  },
  return (
<<<<<<< HEAD
    <div className={`flex items - center gap - 3 ${class_name}`}>;
      <svg;
        className={`animate - spin ${size_classes[size]} text - current`}
        view_box=&quot;0 0 24 24 & quot;
        fill=&quot;none & quot;
      >;
        <circle;
          className=&quot;opacity - 25 & quot; ;
          cx=&quot;12 & quot; ;
          cy=&quot;12 & quot; ;
          r=&quot;10 & quot; ;
          stroke=&quot;current_color & quot; ;
          stroke_width=&quot;4 & quot;
        />;
        <path;
          className=&quot;opacity - 75 & quot; ;
          fill=&quot;current_color & quot; ;
          d=&quot;M4 12a8 8 0 018 - 8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3 - 2.647z & quot;
        />;
      </svg>;
      {text && <span className=&quot;text - sm & quot;>{text}</span>}
    </div>);
=======
    <div className={`flex items-center gap-3 ${className}`}>
<<<<<<< HEAD
      <svg
        className={`animate-spin ${sizeClasses[size]} text-current`}
        viewBox=&quot;0 0 24 24&quot;
        fill=&quot;none&quot;
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
=======
      <svg 
<<<<<<< HEAD
        className={`animate-spin ${sizeClasses[size]} text-current`} ;
        viewBox=&quot;0 0 24 24&quot;
        fill=&quot;none&quot;
=======
        className={`animate-spin ${sizeClasses[size]} text-current`} 
        viewBox="0 0 24 24"
        fill="none"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        />
      </svg>
      {text && <span className="text-sm">{text}</span>}
    </div>
  )
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}