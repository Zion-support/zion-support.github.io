'use client';

import React, { useState } from 'react';

interface InteractiveCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function InteractiveCard({ 
  title, 
  description, 
  children, 
  className = '',
  onClick 
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-400 mb-4">
        {description}
      </p>
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default InteractiveCard;