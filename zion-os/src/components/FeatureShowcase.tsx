import React from 'react';

interface FeatureShowcaseProps {
  className?: string;
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FeatureShowcase</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FeatureShowcase;