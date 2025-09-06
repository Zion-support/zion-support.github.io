<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
"use client",
interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large",
  class_name?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
"use client";
interface LoadingSpinnerProps {size?: "small" | "medium" | "large";
  className?: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
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
  return (
    <div className={`${size_classes[size]} ${class_name}`} role="status" aria - label="Loading">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
  return (;
    <div className={`${sizeClasses[size]} ${className}`} role="status" aria-label="Loading">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <svg;
        className="animate - spin text - blue - 500";
        xmlns="http: //www.w3.org / 2000 / svg";
        fill="none";
        view_box="0 0 24 24";
        aria - hidden="true";
      >;
        <circle;
          className="opacity - 25";
          cx="12";
          cy="12";
          r="10";
          stroke="current_color";
          stroke_width="4";
        />;
        <path;
          className="opacity - 75";
          fill="current_color";
          d="M4 12a8 8 0 018 - 8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3 - 2.647z";
        />;
      </svg>;
      <span className="sr - only">Loading...</span>;
    </div>);
}
