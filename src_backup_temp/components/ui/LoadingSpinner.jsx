import React from &apos;react&apos;; import {motion} from &apos;framer-motion&apos;; import {cn} from &apos;@/lib/utils&apos;; export function LoadingSpinner($1) { const sizeClasses = { xs: &apos;w-4 h-4&apos;,sm: &apos;w-6 h-6&apos;,md: &apos;w-8 h-8&apos;,lg: &apos;w-12 h-12&apos;,xl: &apos;w-16 h-16&apos; };;&apos;; const colorClasses = {primary: &apos;border-zion-purple&apos;,secondary: &apos;border-zion-cyan&apos;,white: &apos;border-white&apos;,custom: &quot;};; const borderColor = customColor || colorClasses[color]; return (&apos;; <div className={cn(&apos;flex flex-col items-center justify-center&apos;,className)}> <motion .div &apos;; className={cn(&apos;;&apos;; &apos;border-2 border-t-transparent rounded-full animate-spin&apos;,sizeClasses[size],borderColor )} animate={{ rotate: 360 }} transition={{ duration: 1,repeat: Infinity,ease: &quot;linear&quot; }} role=&quot;status&quot; aria-label=&quot;Loading&quot; /> {showText && ( <motion.p className=&quot;mt-3 text-sm text-zion-slate-light text-center&quot; initial={{ opacity: 0,y: 10 }} animate={{ opacity: 1,y: 0 }} transition={{ delay: 0.2 }} > {text} </motion.p> )} </div> )} export function SkeletonLoader($1) { return ( <div className={cn(&apos;space-y-3&apos;,className)}> {Array.from({ length: lines }).map((_,index) => ( <motion .div&apos;; key={index} className={cn(&apos;bg-zion-slate-light/20 rounded animate-pulse&apos;,height)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }} /> ))} </div> )} export function PageLoader($1) { return ( <div className={cn(&apos;min-h-screen flex items-center justify-center&apos;,className)}> <div className=&quot;text-center&quot;> <LoadingSpinner size=&quot;xl&quot; color=&quot;primary&quot; showText text={text} /> </div> </div> )} export function ButtonLoader($1) { return ( <div className={cn(&apos;inline-flex items-center&apos;,className)}> <LoadingSpinner size={size} color=&quot;white&quot; /> <span className=&quot;ml-2&quot;>Loading...</span> </div> )} export default LoadingSpinner; </motion> </motion>;&apos;;&apos;;
import React from 'react';
import {motion} from 'framer-motion';
import {cn} from '@/lib/utils';
;
export function LoadingSpinner("props": "any) {;
  const sizeClasses = {;
    "xs": 'w-4 h-4'",;
    "sm": 'w-6 h-6',;
    "md": 'w-8 h-8',;
    "lg": 'w-12 h-12',;
    "xl": 'w-16 h-16';
  };
;
  const colorClasses = {"primary": 'border-zion-purple',;
    "secondary": 'border-zion-cyan',;
    "white": 'border-white',;
    "custom": ''};
;
  const borderColor = customColor || colorClasses[color];
;
  return (;
    <div className={cn('flex flex-col items-center justify-center', className)}>;
      <motion .div ;
        className={cn(;
          'border-2 border-t-transparent rounded-full animate-spin',;
          sizeClasses[size],;
          borderColor;
        )}
        animate={{ "rotate": "360 "}}
        transition={{;
          "duration": "1",;
          "repeat": "Infinity",;
          "ease": "linear";
        }}
        role="status";
        aria-label="Loading";
       />;
      {showText && (;
        <motion.p ;
          className="mt-3 text-sm text-zion-slate-light text-center";
          initial={{ "opacity": "0", "y": "10 "}}
          animate={{ "opacity": "1", "y": "0 "}}
          transition={{ "delay": "0.2 "}}
        >;
export function LoadingSpinner($1) {
  const sizeClasses = {
    "xs": 'w-4 h-4',
    "sm": 'w-6 h-6',
    "md": 'w-8 h-8',
    "lg": 'w-12 h-12',
    "xl": 'w-16 h-16'
  };';
  const colorClasses = {"primary": 'border-zion-purple',
    "secondary": 'border-zion-cyan',
    "white": 'border-white',
    "custom": "};
  const borderColor = customColor || colorClasses[color];
  return (';
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <motion .div ';
        className={cn(';';
          'border-2 border-t-transparent rounded-full animate-spin',
          sizeClasses[size],
          borderColor
        )}
        animate={{ "rotate": 360 }}
        transition={{
          "duration": 1,
          "repeat": Infinity,
          "ease": "linear"
        }}
        role="status"
        aria-label="Loading"
       />
      {showText && (
        <motion.p
          className="mt-3 text-sm text-zion-slate-light text-center"
          initial={{ "opacity": 0, "y": 10 }}
          animate={{ "opacity": 1, "y": 0 }}
          transition={{ "delay": 0.2 }}
        >
          {text}
        </motion.p>;
      )}
    </div>;
  );
}
;
// Skeleton loading component for content;
export function SkeletonLoader("props": "any) {;
  return (;
    <div className={cn('space-y-3'", className)}>;
      {Array.from({ "length": "lines "}).map((_, index) => (;
        <motion .div;
          key={index}
          className={cn('bg-zion-slate-light/20 rounded animate-pulse', height)}
          initial={{ "opacity": "0 "}}
          animate={{ "opacity": "1 "}}
          transition={{ "delay": "index * 0.1 "}}
         />;
      ))}
    </div>;
  );
}
;
// Page loading component;
export function PageLoader("props": "any) {;
  return (;
    <div className={cn('min-h-screen flex items-center justify-center'", className)}>;
      <div className="text-center">;
        <LoadingSpinner size="xl" color="primary" showText text={text}  />;
      </div>;
    </div>;
  );
}
;
// Button loading state;
export function ButtonLoader("props": "any) {;
  return (;
    <div className={cn('inline-flex items-center'", className)}>;
      <LoadingSpinner size={size} color="white"  />;
      <span className="ml-2">Loading...</span>;
    </div>;
  );
}
;
export default LoadingSpinner;
</motion>;
</motion>;
</motion>
    </div>
    );
}
// Skeleton loading component for content
export function SkeletonLoader($1) {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">LoadingSpinner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
    );
}
// Page loading component
export function PageLoader($1) {
  return (
    <div className={cn('min-h-screen flex items-center justify-center', className)}>
      <div className="text-center">
        <LoadingSpinner size="xl" color="primary" showText text={text}  />
      </div>
    </div>
    );
}
// Button loading state
export function ButtonLoader($1) {
  return (
    <div className={cn('inline-flex items-center', className)}>
      <LoadingSpinner size={size} color="white"  />
      <span className="ml-2">Loading...</span>
    </div>
    );
}
export default LoadingSpinner;
</motion>
</motion>;';';
import React from 'react'; import {motion} from 'framer-motion'; import {cn} from '@/lib/utils'; export function LoadingSpinner($1) { const sizeClasses = { xs: 'w-4 h-4',sm: 'w-6 h-6',md: 'w-8 h-8',lg: 'w-12 h-12',xl: 'w-16 h-16' };;'; const colorClasses = {primary: 'border-zion-purple',secondary: 'border-zion-cyan',white: 'border-white',custom: "};; const borderColor = customColor || colorClasses[color]; return ('; <div className={cn('flex flex-col items-center justify-center',className)}> <motion .div '; className={cn(';'; 'border-2 border-t-transparent rounded-full animate-spin',sizeClasses[size],borderColor )} animate={{ rotate: 360 }} transition={{ duration: 1,repeat: Infinity,ease: "linear" }} role="status" aria-label="Loading" /> {showText && ( <motion.p className="mt-3 text-sm text-zion-slate-light text-center" initial={{ opacity: 0,y: 10 }} animate={{ opacity: 1,y: 0 }} transition={{ delay: 0.2 }} > {text} </motion.p> )} </div> )} export function SkeletonLoader($1) { return ( <div className={cn('space-y-3',className)}> {Array.from({ length: lines }).map((_,index) => ( <motion .div'; key={index} className={cn('bg-zion-slate-light/20 rounded animate-pulse',height)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }} /> ))} </div> )} export function PageLoader($1) { return ( <div className={cn('min-h-screen flex items-center justify-center',className)}> <div className="text-center"> <LoadingSpinner size="xl" color="primary" showText text={text} /> </div> </div> )} export function ButtonLoader($1) { return ( <div className={cn('inline-flex items-center',className)}> <LoadingSpinner size={size} color="white" /> <span className="ml-2">Loading...</span> </div> )} export default LoadingSpinner; </motion> </motion>;';';
