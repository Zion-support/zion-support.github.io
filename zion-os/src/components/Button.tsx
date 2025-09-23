'use client';

import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	fullWidth?: boolean;
};

export default function Button({ fullWidth = false, className = '', ...props }: ButtonProps) {
	return <button {...props} className={`${fullWidth ? 'w-full' : ''} ${className}`} />;
}
