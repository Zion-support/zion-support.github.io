import React from 'react'; import { motion  } from 'framer-motion'; import { Brain, Zap, Globe, Rocket  } from 'lucide-react'; interface LoadingSpinnerProps {';';
 message?: string; size?: 'sm' | 'md' | 'lg'; ';';
} const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ message = "Loading...", size = 'md' }) => { const sizeClasses = { sm: 'w-8 h-8', md: 'w-16 h-16', lg: 'w-24 h-24' }; const textSizeClasses = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' }; const icons = [Brain, Zap, Globe, Rocket]; const [currentIcon, setCurrentIcon] = React.useState<any>(0); React.useEffect(() => { const interval = setInterval(() => { setCurrentIcon((prev) => (prev + 1) % icons.length); }, 1000); return () => clearInterval(interval); }, [icons.length]); const CurrentIcon = icons[currentIcon]; return (<div className="min-h-screen flex items-center justify-center bg-zion-slate-dark"> <div className="flex flex-col items-center space-y-6"> {} <div className="relative"> <motion.div className={`${sizeClasses[size]} border-4 border-zion-cyan/20 border-t-zion-cyan rounded-full`} animate={{ rotate: 36 0   }} transition={{ duration: 1, repeat: Infinit y, ease: "linear" }} /> <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinit y }} > <CurrentIcon className={`${sizeClasses[size]} text-zion-cyan`}  /> </motion.div> </div> {} <motion.div initial={{ opacity: 0   }} animate={{ opacity: 1   }} transition={{ delay: 0.5   }} className="text-center" > <div className={`${textSizeClasses[size]} text-zion-cyan font-medium mb-2`}> {message} </div> {} <div className="flex space-x-1 justify-center"> {[0, 1, 2].map((i) => ( <motion.div key={i} className="w-2 h-2 bg-zion-cyan rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinit y, delay: i * 0.2 }} /> ))} </div> </motion.div> {} <div className="w-48 h-1 bg-zion-slate-light/30 rounded-full overflow-hidden"> <motion.div className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple" initial={{ width: 0   }} animate={{ width: "100%"   }} transition={{ duration: 3, repeat: Infinit y, ease: "easeInOut" }} /> </div> </div> </div> ); }; export default LoadingSpinner;
';
import React from 'react';';';
import { motion } from 'framer-motion';';';
import { Brain, Zap, Globe, Rocket } from 'lucide-react';
interface LoadingSpinnerProps {
';
  message?: string;';';
;
;
;
import React from 'react'; import { motion  } from 'framer-motion'; import { Brain, Zap, Globe, Rocket  } from 'lucide-react'; interface LoadingSpinnerProps {;
 message?: string; size?: 'sm' | 'md' | 'lg'; ;
} const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "Loading...", size = 'md' }) => { const sizeClasses = { sm: 'w-8 h-8', md: 'w-16 h-16', lg: 'w-24 h-24' }; const textSizeClasses = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' }; const icons = [Brain, Zap, Globe, Rocket]; const [currentIcon, setCurrentIcon] = React.useState<any>(0); React.useEffect(() => { const interval = setInterval(() => { setCurrentIcon((prev) => (prev + 1) % icons.length); }, 1000); return () => clearInterval(interval); }, [icons.length]); const CurrentIcon = icons[currentIcon]; return (<div className="min-h-screen flex items-center justify-center bg-zion-slate-dark"> <div className="flex flex-col items-center space-y-6"> {} <div className="relative"> <motion.div className={`${sizeClasses[size]} border-4 border-zion-cyan/20 border-t-zion-cyan rounded-full`} animate={{ rotate: 36 0   }} transition={{ duration: 1, repeat: Infinit y, ease: "linear" }} /> <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinit y }} > <CurrentIcon className={`${sizeClasses[size]} text-zion-cyan`}  /> </motion.div> </div> {} <motion.div initial={{ opacity: 0   }} animate={{ opacity: 1   }} transition={{ delay: 0.5   }} className="text-center" > <div className={`${textSizeClasses[size]} text-zion-cyan font-medium mb-2`}> {message} </div> {} <div className="flex space-x-1 justify-center"> {[0, 1, 2].map((i) => ( <motion.div key={i} className="w-2 h-2 bg-zion-cyan rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinit y, delay: i * 0.2 }} /> ))} </div> </motion.div> {} <div className="w-48 h-1 bg-zion-slate-light/30 rounded-full overflow-hidden"> <motion.div className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple" initial={{ width: 0   }} animate={{ width: "100%"   }} transition={{ duration: 3, repeat: Infinit y, ease: "easeInOut" }} /> </div> </div> </div> ); }; export default LoadingSpinner;
;
;
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Globe, Rocket } from 'lucide-react';
;
interface LoadingSpinnerProps {;
  message?: string;
  size?: 'sm' | 'md' | 'lg';
;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ ';
  message = "Loading...", ';';
  size = 'md' 
}) => {';
  const sizeClasses = {';';
    sm: 'w-8 h-8',';';
    md: 'w-16 h-16',';';
    lg: 'w-24 h-24'
  };
';
  const textSizeClasses = {';';
    sm: 'text-sm',';';
    md: 'text-base',';';
    lg: 'text-lg'
  message?: "string;
  size?: 'sm' | 'md' | 'lg';
;
"}
;
const "LoadingSpinner": "React.FC<LoadingSpinnerProps> = ({;
  message = "Loading..."",;
  size = 'md';
}) => {;
  const sizeClasses = {;
    "sm": 'w-8 h-8',;
    "md": 'w-16 h-16',;
    "lg": 'w-24 h-24';
  };
;
  const textSizeClasses = {;
    sm: 'text-sm',;
    md: 'text-base',;
    lg: 'text-lg';
    "sm": 'text-sm',;
    "md": 'text-base',;
    "lg": 'text-lg';
import React from &apos;react&apos;; import { motion } from &apos;framer-motion&apos;; import { Brain,Zap,Globe,Rocket } from &apos;lucide-react&apos;; ; interface LoadingSpinnerProps {; message?: string; import React from &apos;react&apos;; import { motion } from &apos;framer-motion&apos;; import { Brain,Zap,Globe,Rocket } from &apos;lucide-react&apos;; interface LoadingSpinnerProps { message?: string;&apos;;&apos;; size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;} const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = &quot;Loading...&quot;,size = &apos;md&apos; }) => { const sizeClasses = { sm: &apos;w-8 h-8&apos;,md: &apos;w-16 h-16&apos;,lg: &apos;w-24 h-24&apos; };; const textSizeClasses = { sm: &apos;text-sm&apos;,md: &apos;text-base&apos;,lg: &apos;text-lg&apos; };; ; const icons = [Brain,Zap,Globe,Rocket]; const [currentIcon,setCurrentIcon] = React.useState<any>(0); ; React.useEffect(() => {; const interval = setInterval(() => {; setCurrentIcon((prev) => (prev + 1) % icons.length)},1000); ; return () => clearInterval(interval)},[icons.length]); ; const CurrentIcon = icons[currentIcon]; return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;flex flex-col items-center space-y-6&quot;> {} <div className=&quot;relative&quot;>; <motion.div; className={`${sizeClasses[size]} border-4 border-cyan-200 border-t-cyan-500 rounded-full`} animate={{ rotate: 360 }} transition={{ duration: 1,repeat: Infinity,ease: &quot;linear&quot; }} />; <motion.div; className=&quot;absolute inset-0 flex items-center justify-center&quot;; animate={{ scale: [1,1.2,1] }} transition={{ duration: 2,repeat: Infinity }} >; <CurrentIcon className={`${sizeClasses[size]} text-cyan-500`} />; </motion.div>; </div>; {} <motion.div; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className=&quot;text-center&quot;; >; <div className={`${textSizeClasses[size]} text-cyan-600 dark:text-cyan-400 font-medium mb-2`}>; {message} </div>; {} <div className=&quot;flex space-x-1 justify-center&quot;>; {[0,1,2].map((i) => (; <motion.div; key={i} className=&quot;w-2 h-2 bg-cyan-500 rounded-full&quot;; animate={{ scale: [1,1.5,1] }} transition={{ duration: 1,repeat: Infinity,delay: i * 0.2 }} />; ))} </div>; </motion.div>; {} <div className=&quot;w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden&quot;>; <motion.div; className=&quot;h-full bg-gradient-to-r from-cyan-500 to-blue-500&quot;; initial={{ width: 0 }} animate={{ width: &quot;100%&quot; }} transition={{ duration: 3,repeat: Infinity,ease: &quot;easeInOut&quot; }} />; </div>; </div>; </div>; )}; ; </motion>; </motion>; </motion>; </motion>; </motion>; </any>; </LoadingSpinnerProps>; </motion>; </motion>; </any>; </LoadingSpinnerProps>; export default LoadingSpinner; </motion> </motion> </any> </LoadingSpinnerProps> </motion> </any> </LoadingSpinnerProps> export default LoadingSpinner; ;&apos;;&apos;;
import React from 'react'; import { motion  } from 'framer-motion'; import { Brain, Zap, Globe, Rocket  } from 'lucide-react'; interface LoadingSpinnerProps {
 message?: string; size?: 'sm' | 'md' | 'lg'; 
} const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "Loading...", size = 'md' }) => { const sizeClasses = { sm: 'w-8 h-8', md: 'w-16 h-16', lg: 'w-24 h-24' }; const textSizeClasses = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' }; const icons = [Brain, Zap, Globe, Rocket]; const [currentIcon, setCurrentIcon] = React.useState<any>(0); React.useEffect(() => { const interval = setInterval(() => { setCurrentIcon((prev) => (prev + 1) % icons.length); }, 1000); return () => clearInterval(interval); }, [icons.length]); const CurrentIcon = icons[currentIcon]; return (
        <div className="min-h-screen flex items-center justify-center bg-zion-slate-dark"> <div className="flex flex-col items-center space-y-6"> {} <div className="relative"> <motion.div className={`${sizeClasses[size]} border-4 border-zion-cyan/20 border-t-zion-cyan rounded-full`} animate={{ rotate: 36 0   }} transition={{ duration: 1, repeat: Infinit y, ease: "linear" }} /> <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinit y }} > <CurrentIcon className={`${sizeClasses[size]} text-zion-cyan`}  /> </motion.div> </div> {} <motion.div initial={{ opacity: 0   }} animate={{ opacity: 1   }} transition={{ delay: 0.5   }} className="text-center" > <div className={`${textSizeClasses[size]} text-zion-cyan font-medium mb-2`}> {message} </div> {} <div className="flex space-x-1 justify-center"> {[0, 1, 2].map((i) => ( <motion.div key={i} className="w-2 h-2 bg-zion-cyan rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinit y, delay: i * 0.2 }} /> ))} </div> </motion.div> {} <div className="w-48 h-1 bg-zion-slate-light/30 rounded-full overflow-hidden"> <motion.div className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple" initial={{ width: 0   }} animate={{ width: "100%"   }} transition={{ duration: 3, repeat: Infinit y, ease: "easeInOut" }} /> </div> </div> </div>
    ); }; export default LoadingSpinner;
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Globe, Rocket } from 'lucide-react';
interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Loading...", 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
  const icons = [Brain, Zap, Globe, Rocket];
  const [currentIcon, setCurrentIcon] = React.useState<any>(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [icons.length]);
;
  const CurrentIcon = icons[currentIcon];
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-6">
  const CurrentIcon = icons[currentIcon];
;
  return (;
    <div className="min-h-screen flex items-center justify-center bg-gray-50 "dark": "bg-gray-900">;
      <div className="flex flex-col items-center space-y-6">;
        {/* Spinner */}
        {/* Spinner */"}
        <div className="relative">;
          <motion.div;
            className={`${sizeClasses[size]} border-4 border-cyan-200 border-t-cyan-500 rounded-full`}
            animate={{ "rotate": "360 "}}
            transition={{ "duration": "1", "repeat": "Infinity", "ease": "linear" }}
          />;
          <motion.div;
            className="absolute inset-0 flex items-center justify-center";
            animate={{ "scale": "[1", 1.2, 1] }}
            transition={{ "duration": "2", "repeat": "Infinity "}}
          >;
            <CurrentIcon className={`${sizeClasses[size]} text-cyan-500`} />;
          </motion.div>;
        </div>;
        {/* Message */}
        <motion.div;
          initial={{ "opacity": "0 "}}
          animate={{ "opacity": "1 "}}
          transition={{ "delay": "0.5 "}}
          className="text-center";
        >;
          <div className={`${textSizeClasses[size]} text-cyan-600 "dark": "text-cyan-400 font-medium mb-2`"}>;
  return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinner */}
        <div className="relative">
          <motion.div
            className={`${sizeClasses[size]} border-4 border-cyan-200 border-t-cyan-500 rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CurrentIcon className={`${sizeClasses[size]} text-cyan-500`} />
          </motion.div>
        </div>
        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className={`${textSizeClasses[size]} text-cyan-600 dark:text-cyan-400 font-medium mb-2`}>
            {message}
          </div>
          {/* Dots */}
          <div className="flex space-x-1 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-500 rounded-full";
                animate={{ "scale": "[1", 1.5, 1] }}
                transition={{ "duration": "1", "repeat": "Infinity", "delay": "i * 0.2 "}}
              />;
                className="w-2 h-2 bg-cyan-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
        {/* Progress Bar */}
        <div className="w-48 h-1 bg-gray-200 "dark": "bg-gray-700 rounded-full overflow-hidden">;
          <motion.div;
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500";
            initial={{ "width": 0 "}}
            animate={{ "width": "100%" }}
            transition={{ "duration": "3", "repeat": "Infinity", "ease": "easeInOut" }}
          />;
        </div>;
      </div>;
    </div>;
  );
        <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
    );
};
export default LoadingSpinner;
</motion>
</motion>
</motion>
</motion>
</motion>
</any>
</LoadingSpinnerProps>
</motion>
</motion>
</any>
</LoadingSpinnerProps>
export default LoadingSpinner;
;';;';
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</any>;
</LoadingSpinnerProps>;
</motion>;
</motion>;
</any>;
</LoadingSpinnerProps>;
;
export default LoadingSpinner;
const React from "react"; import { motion } from "framer-motion"; import { Brain,Zap,Globe,Rocket } from "lucide-react"; ; interface LoadingSpinnerProps {; message?: string; import React from "react"; import { motion } from "framer-motion"; import { Brain,Zap,Globe,Rocket } from "lucide-react"; interface LoadingSpinnerProps { message?: string;";"; size?: "sm" | "md" | "lg"} const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "Loading.",size = "md" }) => { const sizeClasses = { sm: "w-8 h-8",md: "w-16 h-16",lg: "w-24 h-24" }; const textSizeClasses = { sm: "text-sm",md: "text-base",lg: "text-lg" }; ; const icons = [Brain,Zap,Globe,Rocket]; const [currentIcon,setCurrentIcon] = React.useState<any>(0); ; React.useEffect(() => {; const interval = setInterval(() => {; setCurrentIcon((prev) => (prev + 1) % icons.length)},1000); ; return () => clearInterval(interval)},[icons.length]); ; const CurrentIcon = icons[currentIcon]; return ( <div className="min-h-screen bg-white"> <div className="flex flex-col items-center space-y-6"> {} <div className="relative">; <motion.div; className={`${sizeClasses[size]} border-4 border-cyan-200 border-t-cyan-500 rounded-full`} animate={{ rotate: 360 }} transition={{ duration: 1,repeat: Infinity,ease: "linear" }} />; <motion.div; className="absolute inset-0 flex items-center justify-center"; animate={{ scale: [1,1.2,1] }} transition={{ duration: 2,repeat: Infinity }} >; <CurrentIcon className={`${sizeClasses[size]} text-cyan-500`} />; </motion.div>; </div>; {} <motion.div; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center"; >; <div className={`${textSizeClasses[size]} text-cyan-600 dark:text-cyan-400 font-medium mb-2`}>; {message} </div>; {} <div className="flex space-x-1 justify-center">; {[0,1,2].map((i) => (; <motion.div; key={i} className="w-2 h-2 bg-cyan-500 rounded-full"; animate={{ scale: [1,1.5,1] }} transition={{ duration: 1,repeat: Infinity,delay: i * 0.2 }} />; ))} </div>; </motion.div>; {} <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">; <motion.div; className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"; initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3,repeat: Infinity,ease: "easeInOut" }} />; </div>; </div>; </div>; )}; ; </motion>; </motion>; </motion>; </motion>; </motion>; </any>; </LoadingSpinnerProps>; </motion>; </motion>; </any>; </LoadingSpinnerProps>; export default LoadingSpinner; </motion> </motion> </any> </LoadingSpinnerProps> </motion> </any> </LoadingSpinnerProps> export default LoadingSpinner; ;";";'"`'"`
import { useEffect } from 'react';,
import { useState } from 'react';,
import _React from 'react'; import { motion } from 'framer-motion'; import { Brain,Zap,Globe,Rocket } from 'lucide-react'; ; interface LoadingSpinnerProps {; message?: string; import _React from 'react'; import { motion } from 'framer-motion'; import { Brain,Zap,Globe,Rocket } from 'lucide-react'; interface LoadingSpinnerProps { message?: string;';'; size?: 'sm' | 'md' | 'lg'} const LoadingSpinner: _React.FC<LoadingSpinnerProps> = ({ message = "Loading...",size = 'md' }) => { const sizeClasses = { sm: 'w-8 h-8,md: 'w-16 h-16,lg: 'w-24 h-24' };; const textSizeClasses = { sm: 'text-sm,md: 'text-base,lg: 'text-lg' };; ; const icons = [Brain,Zap,Globe,Rocket]; const [currentIcon,setCurrentIcon] = _React.useState<any>(0); ; _React.useEffect(() => {; const interval = setInterval(() => {; setCurrentIcon((prev) => (prev + 1) % icons.length)},1000); ; return () => clearInterval(interval)},[icons.length]); ; const CurrentIcon = icons[currentIcon]; return ( <div className="min-h-screen bg-white"> <div className="flex flex-col items-center space-y-6"> {} <div className="relative">; <motion.div; className={`${sizeClasses[size]} border-4 border-cyan-200 border-t-cyan-500 rounded-full`} animate={{ rotate: 360 }} transition={{ duration: 1,repeat: Infinity,ease: "linear" }} />; <motion.div; className="absolute inset-0 flex items-center justify-center"; animate={{ scale: [1,1.2,1] }} transition={{ duration: 2,repeat: Infinity }} >; <CurrentIcon className={`${sizeClasses[size]} text-cyan-500`} />; </motion.div>; </div>; {} <motion.div; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center"; >; <div className={`${textSizeClasses[size]} text-cyan-600 dark:text-cyan-400 font-medium mb-2`}>; {message} </div>; {} <div className="flex space-x-1 justify-center">; {[0,1,2].map((i) => (; <motion.div; key={i} className="w-2 h-2 bg-cyan-500 rounded-full"; animate={{ scale: [1,1.5,1] }} transition={{ duration: 1,repeat: Infinity,delay: i * 0.2 }} />; ))} </div>; </motion.div>; {} <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">; <motion.div; className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"; initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3,repeat: Infinity,ease: "easeInOut" }} />; </div>; </div>; </div>; )}; ; </motion>; </motion>; </motion>; </motion>; </motion>; </any>; </LoadingSpinnerProps>; </motion>; </motion>; </any>; </LoadingSpinnerProps>; export default LoadingSpinner; </motion> </motion> </any> </LoadingSpinnerProps> </motion> </any> </LoadingSpinnerProps> export default LoadingSpinner; ;';';