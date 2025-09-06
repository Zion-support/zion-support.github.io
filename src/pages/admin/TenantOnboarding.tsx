import React from 'react';

interface TenantOnboardingProps {
  className?: string;
}

const TenantOnboarding: React.FC<TenantOnboardingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TenantOnboarding</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TenantOnboarding;