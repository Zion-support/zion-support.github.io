import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type IconPosition = 'left' | 'right';
export type RoundedSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  rounded?: RoundedSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-700 hover:bg-gray-800 text-white',
  outline: 'border border-white/20 hover:bg-white/10 text-white',
  ghost: 'bg-transparent hover:bg-white/10 text-white'
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
  xl: 'px-6 py-3 text-xl'
};

const roundedClasses: Record<RoundedSize, string> = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full'
};

export default function Button(props: ButtonProps) {
  const {
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
    rounded = 'md'
  } = props;

  const baseClasses = [
    'inline-flex items-center justify-center gap-2',
    variantClasses[variant],
    sizeClasses[size],
    roundedClasses[rounded],
    fullWidth ? 'w-full' : '',
    disabled || loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <span className="inline-flex items-center gap-2">
      {icon && iconPosition === 'left' ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? icon : null}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} aria-disabled={disabled || loading} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} disabled={disabled || loading}>
      {content}
    </button>
  );
}
