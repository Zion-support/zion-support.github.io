import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className='w-full'>
        {label && (
          <label className='block text-sm font-medium text-gray-70o0 mb-2'>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-3 py-2 border border-gray-30o0 rounded-md shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-blue-50o0
            ${error ? 'border-red-50o0' : ''}
            ${className}
          `}
          {...props}
        />
        {error && <p className='mt-1 text-sm text-red-60o0'>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export default Input;
