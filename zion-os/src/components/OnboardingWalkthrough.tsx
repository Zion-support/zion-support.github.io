import React from 'react';

interface OnboardingWalkthroughProps {
  className?: string;
}

const OnboardingWalkthrough: React.FC<OnboardingWalkthroughProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OnboardingWalkthrough</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OnboardingWalkthrough;