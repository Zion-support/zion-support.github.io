import React from 'react';

type AvatarProps = React.HTMLAttributes<HTMLDivElement> & { className?: string };
type AvatarImageProps = React.ImgHTMLAttributes<HTMLImageElement> & { className?: string };
type AvatarFallbackProps = React.HTMLAttributes<HTMLDivElement> & { className?: string };

export const Avatar: React.FC<AvatarProps> = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`relative inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const AvatarImage: React.FC<AvatarImageProps> = ({ className = '', alt = '', ...props }) => {
  return (
    <img
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      {...props}
    />
  );
};

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`flex h-full w-full items-center justify-center text-sm font-medium text-gray-600 ${className}`}
      aria-hidden
      {...props}
    >
      {children}
    </div>
  );
};

