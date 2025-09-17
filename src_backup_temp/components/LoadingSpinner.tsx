<<<<<<< HEAD
import React from 'react';
=======
import React from 'react';';';

import { Brain, Zap, Globe, Rocket } from 'lucide-react';
interface LoadingSpinnerProps {
';
  message?: string;';';
  message?: "string;
  size?: 'sm' | 'md' | 'lg';
;
"}
;
const "LoadingSpinner": "React.FC<LoadingSpinnerProps> = ({;
  message = "Loading..."",;
  size = 'md';
}) => {;
  const sizeClasses = {;
    "sm": 'w-8 h-8',;
    "md": 'w-16 h-16',;
    "lg": 'w-24 h-24';
  };
;
  const textSizeClasses = {;
    "sm": 'text-sm',;
    "md": 'text-base',;
    "lg": 'text-lg';
import React from 'react';

import { Brain, Zap, Globe, Rocket } from 'lucide-react';
interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Loading...", 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
  const icons = [Brain, Zap, Globe, Rocket];
  const [currentIcon, setCurrentIcon] = React.useState<any>(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [icons.length]);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const LoadingSpinner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">LoadingSpinner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
<<<<<<< HEAD

export default LoadingSpinner;
=======
</motion>
</motion>
</motion>
</motion>
</motion>
</any>
</LoadingSpinnerProps>
</motion>
</motion>
</any>
</LoadingSpinnerProps>
export default LoadingSpinner;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</any>;
</LoadingSpinnerProps>;
</motion>;
</motion>;
</any>;
</LoadingSpinnerProps>;
;
export default LoadingSpinner;
const React from "react"; '"`'"`
import { useEffect } from 'react';,
import { useState } from 'react';,

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
