"use client";
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'secondary' };

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'px-4 py-2 rounded-lg text-sm font-medium';
  const style = variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white';
  return <button className={`${base} ${style} ${className}`} {...props} />;
}
