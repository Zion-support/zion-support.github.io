import React from 'react';
interface SwitchProps  {checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}const Switch: React.FC<SwitchProps> = ({checked,onChange,label,disabled = false,size = 'md';
}) => {const sizeClasses = {sm: 'w-8 h-4',md: 'w-12 h-6',lg: 'w-16 h-8';
  }const thumbSizeClasses = {sm: 'w-3 h-3',md: 'w-5 h-5',lg: 'w-7 h-7';
  }const translateClasses = {sm: checked ? 'translate-x-4' : 'translate-x-0',md: checked ? 'translate-x-6' : 'translate-x-0',lg: checked ? 'translate-x-8' : 'translate-x-0';
  }return (<div className="flex items-center space-x-3">;
      <button;
        type="button";
        className={`;
          ${sizeClasses[size]} relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent;
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
          ${checked ? 'bg-blue-600' : 'bg-gray-200'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
      >;
        <span;
          className={`;
            ${thumbSizeClasses[size]} ${translateClasses[size]} pointer-events-none inline-block rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out;
          `}
        />;
      </button>;
      {label && (<label className="text-sm font-medium text-gray-700">;
          {label}
        </label>;
      )}
    </div>;
  )}export default Switch;