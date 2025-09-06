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
}
=======
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  class_name?: string;
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
