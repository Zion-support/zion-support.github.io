import {  import { motion, AnimatePresence  } from 'framer-motion';
 from 'lucide-react';
interface LoadingSpinnerProps extends React.PropsWithChildren<{}> {;

  size?: 'sm' | 'md' | 'lg';
  ;
"}}
  text?: string;
  fullScreen?: boolean}

export function LoadingSpinner({;

  size = 'md',
  text = 'Loading...',
  fullScreen = false}: LoadingSpinnerProps) {;
}}            />";
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-xl">;
              ZION;
            </div>;
          </div>;

          <motion.h2";
            className="text-2xl font-bold text-white mb-2";
            animate = {;

}}
            transition = {;

  { "duration": "2",;
  "repeat": "Infinit y;

"}}
  { opacity: [0.7, 1,
  0.7];
}}
            transition = {;

  { duration: 2,
  repeat: Infinity;
}}          >;
            Loading {pageName}
          </motion.h2>;

          <motion.p";
            className="text-zion-slate-light";
            animate = {;

}}
            transition = {;

  { "duration": "2", "repeat": "Infinit y",;
  "delay": "0.5;

"}}
  { opacity: [0.5, 1,
  0.5];
}}
            transition = {;

  { duration: 2, repeat: Infinity,
  delay: 0.5;
}}          >;
            Please wait while we prepare everything for you...;
          </motion.p>;

          {/* Progress Bar */}";
          <div className="mt-6 w-64 mx-auto">";
            <div className="bg-zion-slate-light/20 rounded-full h-2 overflow-hidden">;
              <motion.div";
                className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full";
                initial={{ "width": "0 "}}";
                animate={{ "width": "100%" }}
                transition = {;
export function SkeletonLoader(...args[]):  {;
  return ()`;
<div "className":  {`space-y-3 ${className"}`}> {Array.from({ "length": "line s "}).map((_, index)  => (;
        <motion.div;
          key={index}";
          className="h-4 bg-zion-slate-light/20 rounded";
          animate = {;

  {;

            opacity: [0.5, 1, 0.5],
            backgroundPosition: ['200% 0',-200% 0'];}}
          transition = {;

  {;

"}}
            duration: 1.5,
            repeat: Infinity,
  delay: index * 0.1;
}}          style = {;

  {;

            "background": 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1), transparent),"`;

</motion>;
</div>;
</motion>;
</motion>;
</motion>