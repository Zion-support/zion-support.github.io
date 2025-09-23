import React from 'react';

interface AspectRatioProps {
  ratio?: number;
  className?: string;
  children?: React.ReactNode;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ ratio = 16 / 9, className, children }) => {
  const paddingTop = `${100 / ratio}%`;
  return (
    <div className={className} style={{ position: 'relative' }}>
      <div style={{ paddingTop }} />
      <div style={{ position: 'absolute', inset: 0 }}>{children}</div>
    </div>
  );
};

export default AspectRatio;

