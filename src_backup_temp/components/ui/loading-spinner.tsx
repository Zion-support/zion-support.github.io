import React from 'react';
;
export function LoadingSpinner() {;
  return (;
    <div className="flex items-center justify-center min-h-screen bg-gray-900">;
      <div className="text-center">;
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>;
        <p className="text-gray-400">Loading...</p>;
      </div>;
    </div>;
  );
}
import { motion } from 'framer-motion';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'cyan' | 'white' | 'blue';
  text?: string;
  showText?: boolean;
  className?: string;
}
const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};
const colorClasses = {
  cyan: 'border-cyan-400',
  white: 'border-white',
  blue: 'border-blue-400'
};
export default function LoadingSpinner(props: any) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full opacity-20`}></div>
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = { sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  return (
        <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
    );
}
// Optimized spinner for inline use
export const InlineSpinner: React.FC<{ size?: 'sm' | 'md'; className?: string }> = ({
  size = 'sm',
  className = ''
}) => (
  <div className={`inline-flex items-center ${className}`} role="status">
    <motion.div
      className={`${size === 'sm' ? 'w-4 h-4' : 'w-6 h-6'} border-2 border-t-transparent border-cyan-400 rounded-full`}
      animate={{ rotate: 36 0 }}
      transition={{
        duration: 1,
        repeat: Infinit y,
        ease: "linear"
      }}
    />
    <span className="sr-only">Loading</span>
  </div>
    );
// Full-screen loading overlay
export const FullScreenLoader: React.FC<{
  text?: string;
  showLogo?: boolean;
  className?: string;
}> = ({
  text = 'Loading amazing experiences...',
  showLogo = true,
  className = ''
}) => (
  <div className={`fixed inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center z-50 ${className}`}>
    <div className="relative text-center">
      {showLogo && (
        <div className="mb-6">
          <div className="w-24 h-24 border-4 border-cyan-400/20 rounded-full mx-auto mb-4"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-xl">
            ZION
          </div>
        </div>
      )}
      <LoadingSpinner size="lg" color="cyan" text={text}  />
</div>
  )}"""
  size = "md",,
  className = "}) => {"
  const sizeClasses = {}"}>
      <div>
        role="status>
      >;"
        <span className="sr-only">Loading...</span>
      </div>
  )}"
interface LoadingSpinnerProps {
size?: "sm" | "md" | "lg";"
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({size = "md", className=""
}) => {const sizeClasses = {}"}" >""
      <div className="{"${sizeClasses[size]}" border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"}" role="status" >"
  size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg
   className?: string}&apos;&apos
  size = &apos;md&apos,
  className = &apos;&apos}) => {&apos}&apos
  const sizeClasses = {}
// Skeleton loading component
export const SkeletonLoader: React.FC<{
  className?: string;
  lines?: number;
}> = ({
  className = '',
  lines = 3
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: line s }).map((_, index) => (
      <div key={index}
        className="h-4 bg-gray-200 rounded mb-2"
        style="{{{ width: `${Math.random() * 40 + 60}}"%` }}
       />
    ))}
  </div>
    );
</div>
</div>
</LoadingSpinnerProps>
</div>
</motion>
</LoadingSpinnerProps>
</div>
</div>
import { motion } from &apos;framer-motion&apos;; interface LoadingSpinnerProps { size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;xl&apos;;&apos;;&apos;; color?: &apos;cyan&apos; | &apos;white&apos; | &apos;blue&apos;; text?: string; showText?: boolean; className?: string} const sizeClasses = { sm: &apos;w-4 h-4&apos;,md: &apos;w-6 h-6&apos;,lg: &apos;w-8 h-8&apos;,xl: &apos;w-12 h-12&apos; };; const colorClasses = { cyan: &apos;border-cyan-400&apos;,white: &apos;border-white&apos;,blue: &apos;border-blue-400&apos; };; export default function LoadingSpinner($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;relative&quot;> {} <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full opacity-20`}></div> export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = &apos;md&apos;,className = &quot; }) => { const sizeClasses = { sm: &apos;w-4 h-4&apos;,md: &apos;w-8 h-8&apos;,lg: &apos;w-12 h-12&apos; };; return ( <div className=&quot;min-h-screen bg-white&quot;> <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`} role=&quot;status&quot; > <span className=&quot;sr-only&quot;>Loading...</span> </div> </div> )} export const InlineSpinner: Reac t.FC<{ size?: &apos;sm&apos; | &apos;md className?: string }> = ({ size = &apos;sm&apos;,className = &quot; }) => ( <divclassName={`inline-flex items-center ${className}`}; role=&quot;status&quot;> <motion.div&apos;;&apos;; className={`${size === &apos;sm&apos; ? &apos;w-4 h-4&apos; : &apos;w-6 h-6&apos;} border-2 border-t-transparent border-cyan-400 rounded-full`} animate={{ rotate: 36 0 }} transition={{ duration: 1,repeat: Infinit y,ease: &quot;linear&quot; }} /> <span className=&quot;sr-only&quot;>Loading</span> </div> ); export const FullScreenLoader: Reac t.FC<{ text?: string; showLogo?: boolean; className?: string;&apos;}> = ({ text = &apos;Loading amazing experiences...&apos;,showLogo = true,className = &quot; }) => ( <div className={`fixed inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center z-50 ${className}`};> <div className=&quot;relative text-center&quot;> {showLogo && ( <div className=&quot;mb-6&quot;> <div className=&quot;w-24 h-24 border-4 border-cyan-400/20 rounded-full mx-auto mb-4&quot;></div> <div className=&quot;absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin&quot;></div> <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-xl&quot;> ZION </div> </div> )} <LoadingSpinner size=&quot;lg&quot; color=&quot;cyan&quot; text={text} /> </div> )}&quot; size = &quot;md&quot;,,className = &quot;}) => {&quot; const sizeClasses = {}&quot;};> <div> role=&quot;status> >;&quot; <span className=&quot;sr-only&quot;>Loading...</span> </div> )}&quot; interface LoadingSpinnerProps { size?: &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;;&quot; export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({size = &quot;md&quot;,className=&quot; }) => {const sizeClasses = {}&quot;}&quot; >&quot; <div className=&quot;{&quot;${sizeClasses[size]}&quot; border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin&quot;};&quot; role=&quot;status&quot; >&quot; size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg className?: string}&apos;&apos size = &apos;md&apos,className = &apos;&apos}) => {&apos}&apos const sizeClasses = {}; export const SkeletonLoader: Reac t.FC<{ className?: string; lines?: number;&apos;}> = ({ className = &quot;,lines = 3 }) => ( <div className={`animate-pulse ${className}`}> {Array.from({ length: line s }).map((_,index) => ( <div key={index} className=&quot;h-4 bg-gray-200 rounded mb-2&quot; style=&quot;{{{ width: `${Math.random() * 40 + 60}}&quot;%` }} /> ))}; </div> ); </div> </LoadingSpinnerProps> </div> </motion> </LoadingSpinnerProps> </div> </div>;&apos;;&apos;;
const { motion } from "framer-motion"; interface LoadingSpinnerProps { size?: "sm" | "md" | "lg" | "xl";";"; color?: "cyan" | "white" | "blue"; text?: string; showText?: boolean; className?: string} const sizeClasses = { sm: "w-4 h-4",md: "w-6 h-6",lg: "w-8 h-8",xl: "w-12 h-12" }; const colorClasses = { cyan: "border-cyan-400",white: "border-white",blue: "border-blue-400" }; export default function LoadingSpinner($1) { return ( <div className="min-h-screen bg-white"> <div className="relative"> {} <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full opacity-20`}></div> export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = "md",className = " }) => { const sizeClasses = { sm: "w-4 h-4",md: "w-8 h-8",lg: "w-12 h-12" }; return ( <div className="min-h-screen bg-white"> <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`} role="status" > <span className="sr-only">Loading.</span> </div> </div> )} export const InlineSpinner: Reac t.FC<{ size?: "sm" | "md className?: string }> = ({ size = "sm",className = " }) => ( <divclassName={`inline-flex items-center ${className}`}; role="status"> <motion.div";"; className={`${size === "sm" ? "w-4 h-4" : "w-6 h-6"} border-2 border-t-transparent border-cyan-400 rounded-full`} animate={{ rotate: 36 0 }} transition={{ duration: 1,repeat: Infinit y,ease: "linear" }} /> <span className="sr-only">Loading</span> </div> ); export const FullScreenLoader: Reac t.FC<{ text?: string; showLogo?: boolean; className?: string;"}> = ({ text = "Loading amazing experiences.",showLogo = true,className = " }) => ( <div className={`fixed inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center z-50 ${className}`};> <div className="relative text-center"> {showLogo && ( <div className="mb-6"> <div className="w-24 h-24 border-4 border-cyan-400/20 rounded-full mx-auto mb-4"></div> <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div> <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-xl"> ZION </div> </div> )} <LoadingSpinner size="lg" color="cyan" text={text} /> </div> )}" size = "md",className = "}) => {" const sizeClasses = {}"};> <div> role="status> >;" <span className="sr-only">Loading.</span> </div> )}" interface LoadingSpinnerProps { size?: "sm" | "md" | "lg";" export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({size = "md",className=" }) => {const sizeClasses = {}"}" >" <div className="{"${sizeClasses[size]}" border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"};" role="status" >" size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg className?: string}&apos;&apos size = &apos;md&apos,className = &apos;&apos}) => {&apos}&apos const sizeClasses = {}; export const SkeletonLoader: Reac t.FC<{ className?: string; lines?: number;"}> = ({ className = ",lines = 3 }) => ( <div className={`animate-pulse ${className}`}> {Array.from({ length: line s }).map((_,index) => ( <div key={index} className="h-4 bg-gray-200 rounded mb-2" style="{{{ width: `${Math.random() * 40 + 60}}"%` }} /> ))}; </div> ); </div> </LoadingSpinnerProps> </div> </motion> </LoadingSpinnerProps> </div> </div>;";";""`"`
import { motion } from 'framer-motion'; interface LoadingSpinnerProps { size?: 'sm' | 'md' | 'lg' | 'xl';';'; color?: 'cyan' | 'white' | 'blue'; text?: string; showText?: boolean; className?: string} const sizeClasses = { sm: 'w-4 h-4,md: 'w-6 h-6,lg: 'w-8 h-8,xl: 'w-12 h-12' };; const colorClasses = { cyan: 'border-cyan-400,white: 'border-white,blue: 'border-blue-400' };; export default function LoadingSpinner(_) { return ( <div className="min-h-screen bg-white"> <div className="relative"> {} <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full opacity-20`}></div> export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = 'md,className = " }) => { const sizeClasses = { sm: 'w-4 h-4,md: 'w-8 h-8,lg: 'w-12 h-12' };; return ( <div className="min-h-screen bg-white"> <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`} role="status" > <span className="sr-only">Loading...</span> </div> </div> )} export const InlineSpinner: Reac t.FC<{ size?: 'sm' | 'md className?: string }> = ({ size = 'sm',className = " }) => ( <divclassName={`inline-flex items-center ${className}`}; role="status"> <motion.div';'; className={`${size === 'sm' ? 'w-4 h-4' : 'w-6 h-6'} border-2 border-t-transparent border-cyan-400 rounded-full`} animate={{ rotate: 36 0 }} transition={{ duration: 1,repeat: Infinit y,ease: "linear" }} /> <span className="sr-only">Loading</span> </div> ); export const FullScreenLoader: Reac t.FC<{ text?: string; showLogo?: boolean; className?: string;'}> = ({ text = 'Loading amazing experiences...',showLogo = true,className = " }) => ( <div className={`fixed inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center z-50 ${className}`};> <div className="relative text-center"> {showLogo && ( <div className="mb-6"> <div className="w-24 h-24 border-4 border-cyan-400/20 rounded-full mx-auto mb-4"></div> <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div> <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-xl"> ZION </div> </div> )} <LoadingSpinner size="lg" color="cyan" text={text} /> </div> )}" size = "md",,className = "}) => {" const sizeClasses = {}"};> <div> role="status> >;" <span className="sr-only">Loading...</span> </div> )}" interface LoadingSpinnerProps { size?: "sm" | "md" | "lg";" export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({size = "md",className=" }) => {const sizeClasses = {}"}" >" <div className="{"${sizeClasses[size]}" border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"};" role="status" >" size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg className?: string}&apos;&apos size = &apos;md&apos,className = &apos;&apos}) => {&apos}&apos const sizeClasses = {}; export const SkeletonLoader: Reac t.FC<{ className?: string; lines?: number;'}> = ({ className = ",lines = 3 }) => ( <div className={`animate-pulse ${className}`}> {Array.from({ length: line s }).map((_,index) => ( <div key={index} className="h-4 bg-gray-200 rounded mb-2" style="{{{ width: `${Math.random() * 40 + 60}}"%` }} /> ))}; </div> ); </div> </LoadingSpinnerProps> </div> </motion> </LoadingSpinnerProps> </div> </div>;';';