import React from 'react';

interface SkeletonProps {

  className?: string;}
  lines?: number}

}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', lines = 1 }) => {
  return (

    <div;}
className={cn('animate-pulse bg-gray-200 rounded', className;}
        )}
      /"  />";"
    )}return ("";"
    <div className="space-y-2" />;
      {Array.from({ length: lines}
}).map((_, i) => (<div;
          key={i}
          className={cn('animate-pulse bg-gray-200 rounded h-4', i === lines - 1 ? 'w-3/4' : 'w-full';}
          )}"
        /"  />";
      ))}
    </div>;"
  )}"";

"