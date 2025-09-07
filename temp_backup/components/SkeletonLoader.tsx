<<<<<<< HEAD
import React from 'react';

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  lines = 3;
  className = '';
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
;
interface SkeletonLoaderProps {
  lines?: number, class_name?: string;
}
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react';

interface SkeletonLoaderProps {
<<<<<<< HEAD
  lines?: number, className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({

  lines;
}) => {
  return (

    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
=======
  lines?: number, class_name?: string;
}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SkeletonLoaderProps {;
  lines?: number, className?: string;
}
const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({;
    lines = 3,;
    className = '';
  }) => {;
    <div className={`animate-pulse ${className}`}>;
      {Array && Array.from({ length: lines }).map((_, index) => (;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full';
          }`}
        />
      ))}
    </div>;
  );
<<<<<<< HEAD
};

=======
}
const SkeletonLoader: React.FC < SkeletonLoaderProps> = ({
    lines = 3,
    class_name = '';
  }) => {
    <div className={`animate - pulse ${class_name}`}>;
      {Array.from ({ length: lines }).map ((_, index) => (
        <div;
          key={index}
          className={`h - 4 bg - gray - 200 rounded mb - 2 ${
            index === lines - 1 ? 'w - 3/4' : 'w - full';
          }`}
        />))}
    </div>);
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default SkeletonLoader;