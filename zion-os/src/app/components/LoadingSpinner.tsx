<<<<<<< HEAD
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';
  text?: string;
=======
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg',;
  text?: string,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  className?: string;
}
<<<<<<< HEAD
export default function LoadingSpinner({ size = 'md', text, className = '' }: LoadingSpinnerProps) {
=======

export default function LoadingSpinner({
  size = 'md',
  text,
  className = '',
}: LoadingSpinnerProps) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const sizeClasses = {
    sm: 'w-4 h-4'
    md: 'w-6 h-6'
    lg: 'w-8 h-8'
  }
  return (
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
}