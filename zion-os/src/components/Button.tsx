<<<<<<< HEAD
'use client',

import React, { forwardRef } from 'react',
import Link from 'next/link',
import LoadingSpinner from './LoadingSpinner',
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',
  size?: 'sm' | 'md' | 'lg' | 'xl',
  href?: string,
  onClick?: () => void,
  disabled?: boolean,
  loading?: boolean,
  icon?: React.ReactNode,
  iconPosition?: 'left' | 'right',
  className?: string,
  type?: 'button' | 'submit' | 'reset',
  fullWidth?: boolean,
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const Button = forwardRef<HTMLButtonElement ButtonProps>(({
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
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover: scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25',
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm',
    ghost: 'text-white hover:bg-white/10 hover:text-purple-400'
  },
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-xl'
  },
  
  const roundedClasses = {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  },
  
  const widthClasses = fullWidth ? 'w-full' : '',
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${widthClasses} ${className}`,
=======
'use client';

import React, {_forwardRef} from 'react';
import Link from 'next/link';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {_children: React.ReactNode;
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
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(_({_children, _variant = 'primary', _size = 'md', _href, _onClick, _disabled = false, _loading = false, _icon, _iconPosition = 'right', _className = '', _type = 'button', _fullWidth = false, _rounded = 'lg'}, _ref) => {_const _baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const _variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25', _secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl', _outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm', _ghost: 'text-white hover:bg-white/10 hover:text-purple-400'};
  
  const _sizeClasses = {_sm: 'px-4 py-2 text-sm rounded-md', _md: 'px-6 py-3 text-base rounded-lg', _lg: 'px-8 py-4 text-lg rounded-xl', _xl: 'px-10 py-5 text-xl rounded-xl'};
  
  const _roundedClasses = {_sm: 'rounded', _md: 'rounded-md', _lg: 'rounded-lg', _xl: 'rounded-xl', _full: 'rounded-full'};
  
  const _widthClasses = fullWidth ? 'w-full' : '';
  
  const _classes = `${_baseClasses} ${_variantClasses[variant]} ${_sizeClasses[size]} ${_roundedClasses[rounded]} ${_widthClasses} ${_className}`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _content = (
    <>
      {_loading && <LoadingSpinner size="sm" color="white" className="mr-2" />}
      {_icon && iconPosition === 'left' && !loading && <span className="mr-2">{icon}</span>}
      <span className={_loading ? 'opacity-0' : ''}>{_children}</span>
      {_icon && iconPosition === 'right' && !loading && <span className="ml-2">{icon}</span>}
    </>
  ),
  
  if (href) {_return (
      <Link href={href} className={_classes}>
        {_content}
      </Link>
    )
  }
  
  return (
    <button
      ref={_ref}
      type={_type}
      className={_classes}
      onClick={_onClick}
      disabled={_disabled || loading}
      aria-label={_typeof children === 'string' ? children : undefined}
    >
      {_content}
    </button>
  )
}),

Button.displayName = 'Button',

export default Button,

// Specialized button variants
<<<<<<< HEAD
export function PrimaryButton(props: Omit<ButtonProps 'variant'>) {
  return <Button {...props} variant="primary" />
}

export function SecondaryButton(props: Omit<ButtonProps 'variant'>) {
  return <Button {...props} variant="secondary" />
}

export function OutlineButton(props: Omit<ButtonProps 'variant'>) {
  return <Button {...props} variant="outline" />
}

export function GhostButton(props: Omit<ButtonProps 'variant'>) {
  return <Button {...props} variant="ghost" />
=======
export function PrimaryButton(_props: Omit<ButtonProps, _'variant'>) {_return <Button {...props} variant="primary" />;
}

export function SecondaryButton(_props: Omit<ButtonProps, _'variant'>) {_return <Button {...props} variant="secondary" />;
}

export function OutlineButton(_props: Omit<ButtonProps, _'variant'>) {_return <Button {...props} variant="outline" />;
}

export function GhostButton(_props: Omit<ButtonProps, _'variant'>) {_return <Button {...props} variant="ghost" />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

// Icon button variant
export function IconButton(_{_icon, _children, _...props}: ButtonProps & {_icon: React.ReactNode}) {_return (
    <Button {...props} icon={_icon} iconPosition="left" size="sm">
      {_children}
    </Button>
  )
}

// Floating action button
export function FloatingActionButton(_{_icon, _onClick, _className = '', _...props}: ButtonProps & {_icon: React.ReactNode}) {_return (
    <Button
      {...props}
      icon={_icon}
      onClick={_onClick}
      className={_`fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl z-50 ${className}`}
      size="lg"
      rounded="full"
    />
  )
}