<<<<<<< HEAD:temp_broken_files/LazyComponent.tsx
import React{ SuspenselazyComponentType } from 'react';
import LoadingSpinner from './LoadingSpinner';
interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  className?: string;
};



export default function LazyComponent({ 
  component
  fallback = <LoadingSpinner size="md" text="Loading..." />,
  ...props 
}: LazyComponentProps) {
  const LazyLoadedComponent = lazy(component);
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
  );
}
// Pre-configured lazy components for common use cases
export const LazyROICalculator = (props: any) => (
  <LazyComponent 
    component={() => import('./ROICalculator')} 
    fallback={<LoadingSpinner size="lg" text="Loading ROI Calculator..." />}
    {...props}
  />
);
export const LazyStructuredData = (props: any) => (
  <LazyComponent 
    component={() => import('./StructuredData')} 
    fallback={null}
    {...props}
  />
);
export const LazyInteractiveWidget = (props: any) => (
  <LazyComponent 
    component={() => import('./InteractiveContentDiscoveryWidget')} 
    fallback={<LoadingSpinner size="lg" text="Loading Interactive Widget..." />}
    {...props}
  />
);
=======
import React from "react";

const function LazyComponent({  = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function LazyComponent({ </h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default function LazyComponent({ ;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/LazyComponent.tsx
