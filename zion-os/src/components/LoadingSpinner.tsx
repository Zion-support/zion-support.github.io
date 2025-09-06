<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
"use client",;
interface LoadingSpinnerProps {;
  size?: "small" | "medium" | "large",;
  className?: string;
}
;
export function LoadingSpinner({ size = "medium", className = "" }: LoadingSpinnerProps) {;
  const sizeClasses = {;
    small: "w-4 h-4",;
    medium: "w-8 h-8",;
    large: "w-12 h-12";
  };

  return (;
    <div className={`${sizeClasses[size]} ${className}`} role="status" aria-label="Loading">;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
"use client",
interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large",
  class_name?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
"use client";
interface LoadingSpinnerProps {size?: "small" | "medium" | "large";
  className?: string;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
=======
=======}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export /**
 * LoadingSpinner - Function description
 */
function LoadingSpinner() {
  const size_classes = {
    small: "w - 4 h - 4",
    medium: "w - 8 h - 8",
    large: "w - 12 h - 12";
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return (
    <div className={`${size_classes[size]} ${class_name}`} role="status" aria - label="Loading">;
=======
=======
"use client",;
interface LoadingSpinnerProps {;
  size?: "small" | "medium" | "large",;
  className?: string;
}
;
export function LoadingSpinner({ size = "medium", className = "" }: LoadingSpinnerProps) {;
  const sizeClasses = {;
    small: "w-4 h-4",;
    medium: "w-8 h-8",;
    large: "w-12 h-12";
  };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (;
    <div className={`${sizeClasses[size]} ${className}`} role="status" aria-label="Loading">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <svg;
        className="animate-spin text-blue-500";
        xmlns="http: //www.w3.org/2000/svg";
        fill="none";
        viewBox="0 0 24 24";
        aria-hidden="true";
=======
  return (
    <div className={`${size_classes[size]} ${class_name}`} role="status" aria - label="Loading">;  return (;
    <div className={`${sizeClasses[size]} ${className}`} role="status" aria-label="Loading">;
      <svg;
        className="animate - spin text - blue-500";
        xmlns="http: //www.w3.org / 2000 / svg";
        fill="none";
        viewBox="0 0 24 24";
        aria - hidden="true";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      >;
        <circle;
          className="opacity-25";
          cx="12";
          cy="12";
          r="10";
<<<<<<< HEAD
          stroke="currentColor";
=======
          stroke="current_color";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          strokeWidth="4";
        />;
        <path;
          className="opacity-75";
<<<<<<< HEAD
          fill="currentColor";
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z";
        />;
      </svg>;
<<<<<<< HEAD
      <span className="sr-only">Loading...</span>;
    </div>;
  );
}
=======
      <span className="sr - only">Loading...</span>;
    </div>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          fill="current_color";
          d="M4 12a8 8 0 018 - 8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3 - 2.647z";
        />;
      </svg>;
      <span className="sr-only">Loading...</span>;
    </div>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
