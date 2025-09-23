import React from 'react';

type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
};

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  className = '',
  ...props
}) => {
  const base = orientation === 'vertical'
    ? 'w-px h-full self-stretch'
    : 'h-px w-full';
  return <div role="separator" className={`${base} bg-gray-200 ${className}`} {...props} />;
};

export default Separator;

