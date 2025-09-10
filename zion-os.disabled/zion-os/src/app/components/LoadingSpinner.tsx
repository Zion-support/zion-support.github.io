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

      <svg 

        />
      </svg>
      {text && <span className="text-sm">{text}</span>}
    </div>
  )
}
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  class_name?: string;
  );
};