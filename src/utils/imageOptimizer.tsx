import React, { useEffect, useRef, useState } from "react";

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export function ImageOptimizer({ src, alt, className, placeholder }: ImageOptimizerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`image-container ${className || ""}`}>
      {!isLoaded && placeholder && (
        <div className="placeholder">
          <img src={placeholder} alt="Loading..." />
        </div>
      )}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      )}
    </div>
  );
}