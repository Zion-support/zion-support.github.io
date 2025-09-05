import React from 'react';
interface AlertProps {
  "children": React.ReactNode;';
  className?: string;';';
  variant?: 'default' | 'destructive';
}
interface AlertTitleProps {
  "children": React.ReactNode;
  className?: string;
}
interface AlertDescriptionProps {
  "children": React.ReactNode;
  className?: string;
}
export function Alert($1) {
  const baseClasses = 'relative w-full rounded-lg border p-4';
  const variantClasses = variant === 'destructive';
    ? 'border-red-200 bg-red-50 text-red-800';
    : 'border-gray-200 bg-gray-50 text-gray-800';
  return <div className={`${baseClasses} ${variantClasses} ${className}`}>{children}</div>;
}
export function AlertTitle($1) {
  return <h5 className={`mb-1 font-medium leading-none tracking-tight ${className}`}>{children}</h5>;
}
export function AlertDescription($1) {
  return <div className={`text-sm ${className}`}>{children}</div>;
}
export default Alert;';';
import React from 'react'; interface AlertProps { children: React.ReactNode;'; className?: string;';'; variant?: 'default' | 'destructive'} interface AlertTitleProps { children: React.ReactNode; className?: string} interface AlertDescriptionProps { children: React.ReactNode; className?: string} export function Alert($1) { const baseClasses = 'relative w-full rounded-lg border p-4'; const variantClasses = variant === 'destructive' ? 'border-red-200 bg-red-50 text-red-800' : 'border-gray-200 bg-gray-50 text-gray-800'; return <div className={`${baseClasses} ${variantClasses} ${className}`}>{children}</div>} export function AlertTitle($1) { return <h5 className={`mb-1 font-medium leading-none tracking-tight ${className}`}>{children}</h5>} export function AlertDescription($1) { return <div className={`text-sm ${className}`}>{children}</div>} export default Alert;';';
