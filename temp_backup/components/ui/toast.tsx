import React from 'react';

export interface ToastProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export interface ToastActionElement {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Toast = ({ children, className }: ToastProps) => {
  return (
    <div className={`bg-slate-800 border border-slate-600 text-white p-4 rounded-lg ${className || ''}`}>
      {children}
    </div>
  );
};

export const ToastAction = ({ children, onClick }: ToastActionElement) => {
  return (
    <button onClick={onClick} className="text-blue-400 hover:text-blue-300">
      {children}
    </button>
  );
};