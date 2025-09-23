import Link from 'next/link';
import React from 'react';

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

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  fullWidth = false,
  rounded = 'lg',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-200';
  const sizes: Record<string, string> = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-lg',
  };
  const variants: Record<string, string> = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline: 'border border-white/20 hover:border-white/40 text-white',
    ghost: 'text-white hover:bg-white/10',
  };
  const width = fullWidth ? 'w-full' : '';
  const roundedMap: Record<string, string> = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const content = (
    <span className={`gap-2 ${loading ? 'opacity-80' : ''} ${icon ? 'inline-flex items-center' : ''}`}>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </span>
  );

  const cls = [base, sizes[size], variants[variant], width, roundedMap[rounded], className].join(' ');

  if (href) {
    return (
      <Link href={href} className={cls} aria-disabled={disabled || loading}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled || loading}>
      {content}
    </button>
  );
}
