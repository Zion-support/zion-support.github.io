<<<<<<< HEAD:app/components/LoadingSpinner.tsx
}
=======
import React from 'react';
interface LoadingSpinnerProps {
size?: 'sm' | 'md' | 'lg';}
>>>>>>> origin/main:temp-disabled/app/components/LoadingSpinner.tsx
  className?: string;}
}
export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {

  const sizeClasses = {
    sm: 'h-4 w-4',
<<<<<<< HEAD:app/components/LoadingSpinner.tsx
  md: 'h-8 w-8',
    lg: 'h-12 w-12'}
  }
}
=======

    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

>>>>>>> origin/main:temp-disabled/app/components/LoadingSpinner.tsx
  return (
    <div className={`flex justify-center items-center ${className}`} />
      <div
className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600`}
        role=\"status\"
        aria-label=\"Loading\"
<<<<<<< HEAD:app/components/LoadingSpinner.tsx
       />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
=======
       />"
        <span className=\"sr-only\" />Loading...</span>
      </div>
    </div>

  );
}

>>>>>>> origin/main:temp-disabled/app/components/LoadingSpinner.tsx
