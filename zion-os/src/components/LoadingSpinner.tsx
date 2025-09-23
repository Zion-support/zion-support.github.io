interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function LoadingSpinner({
  size = 'md',
  text,
}: LoadingSpinnerProps) {
  const dimension = size === 'sm' ? 16 : size === 'lg' ? 40 : 24;
  return (
    <div
      className='flex items-center justify-center gap-3'
      role='status'
      aria-live='polite'
    >
      <svg
        width={dimension}
        height={dimension}
        viewBox='0 0 24 24'
        className='animate-spin text-gray-40o0'
        aria-hidden='true'
      >
        <circle
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
          fill='none'
          opacity='0.25'
        />
        <path
          d='M22 12a10 10 0 0 1-10 10'
          stroke='currentColor'
          strokeWidth='4'
          fill='none'
        />
      </svg>
      {text ? <span className='text-sm text-gray-50o0'>{text}</span> : null}
    </div>
  );
}
('use client');

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function LoadingSpinner({
  size = 'medium',
  className = '',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className}`}
      role='status'
      aria-label='Loading'
    >
      <svg
        className='animate-spin text-blue-500'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
        />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
      <span className='sr-only'>Loading...</span>
    </div>
  );
}
