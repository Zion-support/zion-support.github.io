<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

'use client',;
import React, { forwardRef } from 'react',;
import Link from 'next/link',;
import LoadingSpinner from './LoadingSpinner',;
interface ButtonProps {;
  children: React.ReactNode,;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',;
  size?: 'sm' | 'md' | 'lg' | 'xl',;
  href?: string,;
  onClick?: () => void,;
  disabled?: boolean,;
  loading?: boolean,;
  icon?: React.ReactNode,;
  iconPosition?: 'left' | 'right',;
  className?: string,;
  type?: 'button' | 'submit' | 'reset',;
  fullWidth?: boolean,;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
;
const Button = forwardRef<HTMLButtonElement ButtonProps>(({;
  children,;
  variant = 'primary',;
  size = 'md',;
  href,;
  onClick,;
  disabled = false,;
  loading = false,;
  icon,;
  iconPosition = 'right',;
  className = '',;
  type = 'button',;
  fullWidth = false,;
  rounded = 'lg';
}, ref) => {;
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover: scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',;
  const variantClasses = {;
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25',;
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl',;
    outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm',;
    ghost: 'text-white hover:bg-white/10 hover:text-purple-400';
  },;
  const sizeClasses = {;
    sm: 'px-4 py-2 text-sm rounded-md',;
    md: 'px-6 py-3 text-base rounded-lg',;
    lg: 'px-8 py-4 text-lg rounded-xl',;
    xl: 'px-10 py-5 text-xl rounded-xl';
  },;
  const roundedClasses = {;
    sm: 'rounded',;
    md: 'rounded-md',;
    lg: 'rounded-lg',;
    xl: 'rounded-xl',;
    full: 'rounded-full';
  },;
  const widthClasses = fullWidth ? 'w-full' : '',;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${widthClasses} ${className}`,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const content = (;
    <>;
      {loading && <LoadingSpinner size="sm" color="white" className="mr-2" />}
      {icon && iconPosition === 'left' && !loading && <span className="mr-2">{icon}</span>}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>;
      {icon && iconPosition === 'right' && !loading && <span className="ml-2">{icon}</span>}
    </>;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
'use client',
import React, { forward_ref } from 'react',
import Link from 'next / link',
import LoadingSpinner from './LoadingSpinner',
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',
  size?: 'sm' | 'md' | 'lg' | 'xl',
  href?: string,
  on_click?: () => void,
  disabled?: boolean,
  loading?: boolean,
  icon?: React.ReactNode,
  icon_position?: 'left' | 'right',
  class_name?: string,
  type?: 'button' | 'submit' | 'reset',
  full_width?: boolean,
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
'use client';
import React, { forwardRef } from 'react';
import Link from 'next/link';
import LoadingSpinner from './LoadingSpinner';
interface ButtonProps {children: React.ReactNode;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
const Button = forward_ref < HTMLButtonElement ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  href,
  on_click,
  disabled = false,
  loading = false,
  icon,
  icon_position = 'right',
  class_name = '',
  type = 'button',
  full_width = false,
  rounded = 'lg';
<<<<<<< HEAD
}, ref) => {
  const base_classes = 'inline - flex items - center justify - center font - semibold transition - all duration - 300 transform hover: scale - 105 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - offset - black focus:ring - purple - 500 disabled:opacity - 50 disabled:cursor - not - allowed disabled:transform - none',
  const variant_classes = {
    primary: 'bg - gradient - to - r from - purple - 600 to - blue - 600 hover:from - purple - 700 hover:to - blue - 700 text - white shadow - lg hover:shadow - xl hover:shadow - purple - 500 / 25',
    secondary: 'bg - gradient - to - r from - gray - 600 to - gray - 700 hover:from - gray - 700 hover:to - gray - 800 text - white shadow - lg hover:shadow - xl',
    outline: 'border - 2 border - white / 20 text - white hover:bg - white / 10 hover:border - white / 40 backdrop - blur - sm',
    ghost: 'text - white hover:bg - white / 10 hover:text - purple - 400';
  },
  const size_classes = {
    sm: 'px - 4 py - 2 text - sm rounded - md',
    md: 'px - 6 py - 3 text - base rounded - lg',
    lg: 'px - 8 py - 4 text - lg rounded - xl',
    xl: 'px - 10 py - 5 text - xl rounded - xl';
  },
  const rounded_classes = {
    sm: 'rounded',
    md: 'rounded - md',
    lg: 'rounded - lg',
    xl: 'rounded - xl',
    full: 'rounded - full';
  },
  const width_classes = full_width ? 'w - full' : '',
  const classes = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${rounded_classes[rounded]} ${width_classes} ${class_name}`,
  const content = (
    <>;
      {loading && <LoadingSpinner size="sm" color="white" className="mr - 2" />}
      {icon && icon_position === 'left' && !loading && <span className="mr - 2">{icon}</span>}
      <span className={loading ? 'opacity - 0' : ''}>{children}</span>;
      {icon && icon_position === 'right' && !loading && <span className="ml - 2">{icon}</span>}
    </>),
  // Check condition
if ( {) {
  $2
}
    return (
<<<<<<< HEAD

=======

  ),;
  if (href) {;
    return (;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
}, ref) => {const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover: scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  const variantClasses = {;
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25';
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl';
    outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm';
    ghost: 'text-white hover:bg-white/10 hover:text-purple-400';
  }
  const sizeClasses = {sm: 'px-4 py-2 text-sm rounded-md';
    md: 'px-6 py-3 text-base rounded-lg';
    lg: 'px-8 py-4 text-lg rounded-xl';
    xl: 'px-10 py-5 text-xl rounded-xl';
  }
  const roundedClasses = {sm: 'rounded';
    md: 'rounded-md';
    lg: 'rounded-lg';
    xl: 'rounded-xl';
    full: 'rounded-full';
  }
  const widthClasses = fullWidth ? 'w-full' : '';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${widthClasses} ${className}`;
'use client',;
import React, { forwardRef } from 'react',;
import Link from 'next/link',;
import LoadingSpinner from './LoadingSpinner',;
interface ButtonProps {;
  children: React.ReactNode,;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',;
  size?: 'sm' | 'md' | 'lg' | 'xl',;
  href?: string,;
  onClick?: () => void,;
  disabled?: boolean,;
  loading?: boolean,;
  icon?: React.ReactNode,;
  iconPosition?: 'left' | 'right',;
  className?: string,;
  type?: 'button' | 'submit' | 'reset',;
  fullWidth?: boolean,;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
;
const Button = forwardRef<HTMLButtonElement ButtonProps>(({;
  children,;
  variant = 'primary',;
  size = 'md',;
  href,;
  onClick,;
  disabled = false,;
  loading = false,;
  icon,;
  iconPosition = 'right',;
  className = '',;
  type = 'button',;
  fullWidth = false,;
  rounded = 'lg';
}, ref) => {;
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover: scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',;
  const variantClasses = {;
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25',;
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl',;
    outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm',;
    ghost: 'text-white hover:bg-white/10 hover:text-purple-400';
  },;
  const sizeClasses = {;
    sm: 'px-4 py-2 text-sm rounded-md',;
    md: 'px-6 py-3 text-base rounded-lg',;
    lg: 'px-8 py-4 text-lg rounded-xl',;
    xl: 'px-10 py-5 text-xl rounded-xl';
  },;
  const roundedClasses = {;
    sm: 'rounded',;
    md: 'rounded-md',;
    lg: 'rounded-lg',;
    xl: 'rounded-xl',;
    full: 'rounded-full';
  },;
  const widthClasses = fullWidth ? 'w-full' : '',;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${widthClasses} ${className}`,;
  const content = (;
    <>;
      {loading && <LoadingSpinner size="sm" color="white" className="mr-2" />}
      {icon && iconPosition === 'left' && !loading && <span className="mr-2">{icon}</span>}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>;
      {icon && iconPosition === 'right' && !loading && <span className="ml-2">{icon}</span>}
    </>;
  );
  if (href) {return (;
  ),;
  if (href) {;
    return (;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Link href={href} className={classes}>;
        {content}
      </Link>);
  }
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <button;
      ref={ref}
      type={type}
      className={classes}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      on_click={on_click}
      disabled={disabled || loading}
      aria - label={typeof children === 'string' ? children : undefined}
    >;
      {content}
<<<<<<< HEAD
<<<<<<< HEAD
    </button>;
  );
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </button>);
}),
Button.display_name = 'Button',
export default Button,
=======
<<<<<<< HEAD

}),;
Button.displayName = 'Button',;
export default Button,;

=======
    </button>;
  );
});
Button.displayName = 'Button';
export default Button;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Specialized button variants;
export /**
 * PrimaryButton - Function description
 */
function PrimaryButton() {
  return <Button {...props} variant="primary" />;
}
export /**
 * SecondaryButton - Function description
 */
function SecondaryButton() {
  return <Button {...props} variant="secondary" />;
}
export /**
 * OutlineButton - Function description
 */
function OutlineButton() {
  return <Button {...props} variant="outline" />;
}
export /**
 * GhostButton - Function description
 */
function GhostButton() {
  return <Button {...props} variant="ghost" />;
}
// Icon button variant;
<<<<<<< HEAD

=======
<<<<<<< HEAD
export /**
 * IconButton - Function description
 */
function IconButton() {
  return (
    <Button {...props} icon={icon} icon_position="left" size="sm">;
=======
export function IconButton({icon;
  children;
  ...props;
}: ButtonProps & { icon: React.ReactNode }) {return (;
}),;
Button.displayName = 'Button',;
export default Button,;
// Specialized button variants;
export function PrimaryButton(props: Omit<ButtonProps 'variant'>) {;
  return <Button {...props} variant="primary" />;
}
;
export function SecondaryButton(props: Omit<ButtonProps 'variant'>) {;
  return <Button {...props} variant="secondary" />;
}
;
export function OutlineButton(props: Omit<ButtonProps 'variant'>) {;
  return <Button {...props} variant="outline" />;
}
;
export function GhostButton(props: Omit<ButtonProps 'variant'>) {;
  return <Button {...props} variant="ghost" />;
}
;
// Icon button variant;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function IconButton({;
  icon,;
  children,;
  ...props;
}: ButtonProps & { icon: React.ReactNode }) {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    <Button {...props} icon={icon} iconPosition="left" size="sm">;

      {children}
    </Button>);
}

<<<<<<< HEAD
=======
export /**
 * FloatingActionButton - Function description
 */
function FloatingActionButton() {
  return (

=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    <Button {...props} icon={icon} iconPosition="left" size="sm">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {children}
    </Button>);
}
// Floating action button;
<<<<<<< HEAD
export /**
 * FloatingActionButton - Function description
 */
function FloatingActionButton() {
  return (
=======
export function FloatingActionButton({icon;
  onClick;
  className = '';
  ...props;
}: ButtonProps & { icon: React.ReactNode }) {return (;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
// Floating action button;
export function FloatingActionButton({;
  icon,;
  onClick;
  className = '';
  ...props;
}: ButtonProps & { icon: React.ReactNode }) {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    <Button;
      {...props}
      icon={icon}
      on_click={on_click}
      className={`fixed bottom - 8 right - 8 w - 16 h - 16 rounded - full shadow - 2xl hover:shadow - 3xl z - 50 ${class_name}`}
      size="lg";
      rounded="full";
    />);
}