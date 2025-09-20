import React from 'react';
import { motion } from 'framer-motion';
</motion>';
</motion>,;
export function LoadingSpinner(props) {,
;
export function LoadingSpinner(props) {;
  const { size = 'md', variant = 'default', text, className = '' } = props;
  ;
  const sizeClasses = {;
    "sm": 'w-4 h-4';
    "md": 'w-6 h-6';
    "lg": 'w-8 h-8';
    "xl": 'w-12 h-12',
  };
  ;
  const variantClasses = {;
    "default": 'text-blue-500';
    "primary": 'text-blue-600';
    "secondary": 'text-purple-600';
    "white": 'text-white',
  };
;
  return (;
    <div className={`flex flex-col items-center gap-3 ${className}`}>;
      <motion.div;
        className={`animate-spin rounded-full border-2 border-current border-t-transparent ${sizeClasses[size]} ${variantClasses[variant]}`}
        role="status";
      >;
        <span className="sr-only">Loading...</span>;
      </motion.div>;
      {text && (;
        <motion.p;
          initial={{ "opacity": "0", "y": "10 "}}
          animate={{ "opacity": "1", "y": "0 "}}
          transition={{ "delay": "0.2 "}}
          className="text-gray-600 font-medium text-sm";
        >;
          {text}
        </motion.p>;
      )}
    </div>;
  );
}
import React from 'react', import {motion} from 'framer-motion', import {cn} from '@/lib/utils', export function LoadingSpinner(props: any) { const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-12 h-12' ,}, const variantClasses = {default: 'text-zion-cyan', primary: 'text-zion-blue', secondary: 'text-zion-purple', white: 'text-white',}, return (,
        <div className={cn('flex flex-col items-center gap-3', className)}> <motion.div className={cn('animate-spin rounded-full border-2 border-current border-t-transparent', sizeClasses[size], variantClasses[variant] )} role="status"  > <span className="sr-only">Loading...</span> </motion.div> {text && ( <motion.p initial={{ opacity: 0, y: 10 ,}} animate={{ opacity: 1, y: 0 ,}} transition={{ delay: 0.2 ,}} className="text-zion-slate-light font-medium text-sm" > {text} </motion.p> )} </div>,
    ), }
</motion>,
</motion>,
}