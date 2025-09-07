import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export function Tooltip({ children, content, ...props }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className='relative inline-block'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {children}
      {isVisible && (
        <div className='absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-1'>
          {content}
          <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900' />
        </div>
      )}
    </div>
  );
}

export function TooltipContent({ children, className = '', ...props }) {
  return (
    <div className={cn('px-2 py-1 text-xs text-white bg-gray-900 rounded', className)} {...props}>
      {children}
    </div>
  );
}

export function TooltipProvider({ children }) {
  return <>{children}</>;
}

export function TooltipTrigger({ children, ...props }) {
  return <div {...props}>{children}</div>;
}