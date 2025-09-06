import React from 'react';

interface LayoutWrapperProps {
  className?: string;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LayoutWrapper</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LayoutWrapper;