import React from 'react';

interface AlertProps {
  variant?: 'default' | 'destructive' | 'success';
  children: React.ReactNode;
  className?: string;
}

export function Alert({ variant = 'default', children, className = '' }: AlertProps) {
  const baseClasses = 'p-4 rounded-lg border';
  
  const variantClasses = {
    default: 'bg-blue-50 border-blue-200 text-blue-800',
    destructive: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export function AlertDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-sm ${className}`}>
      {children}
    </div>
  );
}