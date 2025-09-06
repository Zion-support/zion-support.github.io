import React from 'react';

interface CTAButtonProps {
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CTAButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CTAButton;