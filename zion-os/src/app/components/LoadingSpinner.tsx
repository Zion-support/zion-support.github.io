<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg',;
  text?: string,;

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  className?: string;
}

export default function LoadingSpinner({ size = 'md', text, className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
<<<<<<< HEAD
=======
  }
  return (
    <div className={`flex items-center gap-3 ${className}`}>
<<<<<<< HEAD
=======

      <svg 

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  className?: string;
}
export default function LoadingSpinner({ size = 'md', text, className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4'
    md: 'w-6 h-6'
=======

  className?: string;
}
export default function LoadingSpinner({ size = 'md', text, className = '' }: LoadingSpinnerProps) {}
  const sizeClasses = {'
    sm: 'w-4 h-4''
    md: 'w-6 h-6''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    lg: 'w-8 h-8'
  }
  return (
    <div className={`flex items-center gap-3 ${className}`}>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
      <svg 

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

      <svg 

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        />
      </svg>
      {text && <span className="text-sm">{text}</span>}
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  class_name?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';
  text?: string;
=======
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg',;
=======

interface LoadingSpinnerProps {'
  size?: 'sm' | 'md' | 'lg',
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  text?: string,;
  class_name?: string;

  className?: string;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======  className?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======  className?: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';
  text?: string;
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg',;
  text?: string,;
  className?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
export default /**;
 * LoadingSpinner - Function description;
 */
function LoadingSpinner() {}
  const size_classes = {'
    sm: 'w - 4 h - 4','
    md: 'w - 6 h - 6','
    lg: 'w - 8 h - 8';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        className={`animate-spin ${sizeClasses[size]} text-current`} 
        viewBox="0 0 24 24"
        fill="none"
      >
=======
  },
  return (
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
    <div className={`flex items-center gap-3 ${className}`}>
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
      <svg 
        className={`animate-spin ${sizeClasses[size]} text-current`} ;
        viewBox=&quot;0 0 24 24&quot;
        fill=&quot;none&quot;
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg',;
  text?: string,;
  className?: string;
}

export default function LoadingSpinner({ size = 'md', text, className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  },

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        className={`animate-spin ${sizeClasses[size]} text-current`} 
        viewBox="0 0 24 24"
        fill="none"
      >
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
=======

      >
        <circle "
          className="opacity-25" "
          cx="12" "
          cy="12" "
          r="10" "
          stroke="currentColor" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          strokeWidth="4"
        />
        <path "
          className="opacity-75" "
          fill="currentColor" "
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        />
      </svg>"
      {text && <span className="text-sm">{text}</span>}
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
export default function LoadingSpinner({ size = 'md', text, className =  }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4,
  md: 'w-6 h-6
    lg: 'w-8 h-8
  return (
    <div className={`flex items-center gap-3 ${className}`}>
</div>
      </svg>
      {text && <span className="text-sm">{text}</span>}"
    </div>`;
    <div className={`flex items - center gap - 3 ${class_name}`}>;
      <svg;`;
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
</circle>
        <path;
          className=&quot;opacity - 75 & quot; ;
          fill=&quot;current_color & quot; ;
          d=&quot;M4 12a8 8 0 018 - 8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3 - 2.647z & quot;
</path>
      </svg>;
      {text && <span className=&quot;text - sm & quot;>{text}</span>})
    </div>);
        className={`animate-spin ${sizeClasses[size]} text-current`}
        viewBox=&quot;0 0 24 24&quot;
        fill=&quot;none&quot;
      >
          className=&quot;opacity-25&quot;
          cx=&quot;12&quot;
          cy=&quot;12&quot;
          r=&quot;10&quot;
          stroke=&quot;currentColor&quot;
          strokeWidth=&quot;4&quot;
        />
          className=&quot;opacity-75&quot;
          fill=&quot;currentColor&quot;
          d=&quot;M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z&quot;`;
        className={`animate-spin ${sizeClasses[size]} text-current`} ;
        <circle;"
          className="opacity-25"""
          cx="12"""
          cy="12"""
          r="10"""
          stroke="currentColor"""
          strokeWidth="4""
        <path;"
          className="opacity-75"""
          fill="currentColor"""
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z""
      </svg>"
    </div>"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
