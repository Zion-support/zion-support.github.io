import React from 'react';

<<<<<<< HEAD

=======
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: React.ReactNode;

<<<<<<< HEAD
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;

  disabled?: boolean;

<<<<<<< HEAD
  loading?: boolean;

=======
  onClick?: () => void;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',

<<<<<<< HEAD
  type = 'button',
  onClick,
  disabled = false,
  loading = false,

  className = '',
  type = 'button',
}) => {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg',
    secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20',
    outline: 'border border-white/30 hover:border-white/60 text-white hover:bg-white/10',
    ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
<<<<<<< HEAD
=======
  loading = false,

  className = '',
  type = 'button',
}) => {
>>>>>>> origin/cursor/delete-old-data-records-6bba

  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (

      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}

<<<<<<< HEAD

=======
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    >
      {loading && <LoadingSpinner size='sm' />}
      {children}
    </motion.button>
  )
};

export default Button;