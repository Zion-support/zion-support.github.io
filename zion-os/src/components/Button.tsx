'use client',

import React, { forwardRef } from 'react';
import Link from 'next/link';
import LoadingSpinner from './LoadingSpinner';
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = $2;
  size = $2;
  href,
  onClick,
  disabled = $2;
  loading = $2;
  icon,
  iconPosition = $2;
  className = $2;
  type = $2;
  fullWidth = $2;
  rounded = 'lg'
}, ref) => {
  const baseClasses = $2;
  const variantClasses = $2;
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm',
    ghost: 'text-white hover:bg-white/10 hover:text-purple-400'
  },
  
  const sizeClasses = $2;
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-xl'
  },
  
  const roundedClasses = $2;
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  },
  
  const widthClasses = $2;
  const classes = $2;
  const content = $2;
  if (href) {
    return (
      <Link href = $2;
Button.displayName = $2;
export default Button,

// Specialized button variants
export function PrimaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="primary" />
}

export function SecondaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="secondary" />
}

export function OutlineButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="outline" />
}

export function GhostButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant = $2;
  children,
  ...props
}: ButtonProps & { icon: React.ReactNode }) {
  return (
    <Button {...props} icon = $2;
  onClick,
  className = $2;
  ...props
}: ButtonProps & { icon: React.ReactNode }) {
  return (
    <Button
      {...props}
      icon={icon}
      onClick={onClick}
      className={`fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl z-50 ${className}`}
      size="lg"
      rounded="full"
    />
  )
}