'use client';

import React, { forwardRef } from 'react';
import Link from 'next/link';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  fullWidth = false,
  rounded = 'lg'
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25',
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm',
    ghost: 'text-white hover:bg-white/10 hover:text-purple-400'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-xl'
  };
  
  const roundedClasses = {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  };
  
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${widthClasses} ${className}`;
  
  const content = (
    <>
      {loading && <LoadingSpinner size=&quot;sm&quot; color=&quot;white&quot; className=&quot;mr-2&quot; />}
      {icon && iconPosition === 'left' && !loading && <span className=&quot;mr-2&quot;>{icon}</span>}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {icon && iconPosition === 'right' && !loading && <span className=&quot;ml-2&quot;>{icon}</span>}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  
  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

// Specialized button variants
export function PrimaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant=&quot;primary&quot; />;
}

export function SecondaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant=&quot;secondary&quot; />;
}

export function OutlineButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant=&quot;outline&quot; />;
}

export function GhostButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant=&quot;ghost&quot; />;
}

// Icon button variant
export function IconButton({
  icon,
  children,
  ...props
}: ButtonProps & { icon: React.ReactNode }) {
  return (
    <Button {...props} icon={icon} iconPosition=&quot;left&quot; size=&quot;sm&quot;>
      {children}
    </Button>
  );
}

// Floating action button
export function FloatingActionButton({
  icon,
  onClick,
  className = '',
  ...props
}: ButtonProps & { icon: React.ReactNode }) {
  return (
    <Button
      {...props}
      icon={icon}
      onClick={onClick}
      className={`fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl z-50 ${className}`}
      size=&quot;lg&quot;
      rounded=&quot;full&quot;
    />
  );
}