<<<<<<< HEAD
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  className?: string
}

export default function LoadingSpinner({ size = 'md', text, className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  },
=======
interface LoadingSpinnerProps {_size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;}

export default function LoadingSpinner(_{_size = 'md', _text, _className = ''}: LoadingSpinnerProps) {_const _sizeClasses = {
    sm: 'w-4 h-4', _md: 'w-6 h-6', _lg: 'w-8 h-8'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className={_`flex items-center gap-3 ${className}`}>
      <svg 
<<<<<<< HEAD
        className={`animate-spin ${sizeClasses[size]} text-current`} 
        viewBox=&quot;0 0 24 24&quot;
        fill=&quot;none&quot;
=======
        className={_`animate-spin ${sizeClasses[size]} text-current`} 
        viewBox="0 0 24 24"
        fill="none"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
      {text && <span className=&quot;text-sm&quot;>{text}</span>}
=======
      {_text && <span className="text-sm">{text}</span>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}