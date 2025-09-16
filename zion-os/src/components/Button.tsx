<<<<<<< HEAD
"use client";
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'secondary' };

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'px-4 py-2 rounded-lg text-sm font-medium';
  const style = variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white';
  return <button className={`${base} ${style} ${className}`} {...props} />;
=======

;
'use client',import React, { forwardRef } from 'react',import Link from 'next/link',import LoadingSpinner from './LoadingSpinner',interface ButtonProps  {children: React.ReactNode,variant?: 'primary' | 'secondary' | 'outline' | 'ghost',size?: 'sm' | 'md' | 'lg' | 'xl',href?: string,onClick?: () => void,disabled?: boolean,loading?: boolean,icon?: React.ReactNode,iconPosition?: 'left' | 'right',className?: string,type?: 'button' | 'submit' | 'reset',fullWidth?: boolean,rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}const Button = forwardRef<HTMLButtonElement ButtonProps>(({children,variant = 'primary',size = 'md',href,onClick,disabled = false,loading = false,icon,iconPosition = 'right',className = '',type = 'button',fullWidth = false,rounded = 'lg';
}, ref) => {const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover: scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  const variantClasses = {primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25',secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl',outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm',ghost: 'text-white hover:bg-white/10 hover:text-purple-400';
  },const sizeClasses = {sm: 'px-4 py-2 text-sm rounded-md',md: 'px-6 py-3 text-base rounded-lg',lg: 'px-8 py-4 text-lg rounded-xl',xl: 'px-10 py-5 text-xl rounded-xl';
  },const roundedClasses = {sm: 'rounded',md: 'rounded-md',lg: 'rounded-lg',xl: 'rounded-xl',full: 'rounded-full';
  },const widthClasses = fullWidth ? 'w-full' : '';
  const classes  = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${widthClasses} ${className}`,const content = (<>;
      {loading && <LoadingSpinner size="sm" color="white" className="mr-2" />}
      {icon && iconPosition === 'left' && !loading && <span className="mr-2">{icon}</span>}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>;
      {icon && iconPosition === 'right' && !loading && <span className="ml-2">{icon}</span>}
    </>;'use client',import React, { forward_ref } from 'react',import Link from 'next / link',interface ButtonProps  {children: React.ReactNode,variant?: 'primary' | 'secondary' | 'outline' | 'ghost',size?: 'sm' | 'md' | 'lg' | 'xl',href?: string,on_click?: () => void,disabled?: boolean,loading?: boolean,icon?: React.ReactNode,icon_position?: 'left' | 'right',class_name?: string,type?: 'button' | 'submit' | 'reset',full_width?: boolean,<button;
      ref={ref}
      type={type}
      className={classes}on_click={on_click}
      disabled={disabled || loading}
      aria - label={typeof children === 'string' ? children : undefined}
    >;
      {content}<Button;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
>>>>>>> origin/merge-pr-12271
}
