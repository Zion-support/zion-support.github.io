import React{ SuspenselazyComponentType } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

export default function LazyComponent({ 
  component
  fallback = <LoadingSpinner size="md" text="Loading..." />,
  ...props 
}: LazyComponentProps) {
  const LazyLoadedComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
    </Suspense>
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