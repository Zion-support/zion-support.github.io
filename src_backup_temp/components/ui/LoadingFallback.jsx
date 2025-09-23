import {motion} from &quot;framer-motion&quot;; import { Loader2 export function LoadingFallback($1) { const sizeClasses = { sm: &quot;w-6 h-6&quot;,md: &quot;w-8 h-8&quot;,lg: &quot;w-12 h-12&quot; };; const textSizes = {sm: &quot;text-sm&quot;,md: &quot;text-base&quot;,lg: &quot;text-lg&quot;};; return ( <div className=&quot;min-h-screen bg-white&quot;> <motion.div animate={{ rotate: 360 }} transition = { { duration: 1,repeat: Infinity,ease: &quot;linear&quot; }}> <Loader2 className={`${sizeClasses[size]} text-zion-cyan`} /> </motion.div> <motion.p className={`${textSizes[size]} text-zion-slate-light font-medium`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}> {message} </motion.p> {} <motion.div className=&quot;flex space-x-1&quot;> {[0,1,2].map((index) => (<motion .div key={index } className=&quot;w-2 h-2 bg-zion-cyan rounded-full&quot; animate = { { scale: [1,1.5,1],opacity: [0.5,1,0.5] }} transition = { { duration: 1.4,repeat: Infinity,delay: index * 0.2 }} />))} </motion.div> </div> )} export function PageLoadingFallback($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;text-center&quot;> <LoadingFallback message=&quot;Loading Zion Tech Group...&quot; size=&quot;lg&quot; /> <motion.div className=&quot;mt-8 text-zion-slate-light text-sm&quot; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}> Connecting to the future of tech... </motion.div> </div> </div> )} export default LoadingFallback; </motion> </motion>;
import {motion} from "framer-motion";
import { Loader2 export function LoadingFallback("props": "any) {;
    const sizeClasses = {;
  "sm": "w-6 h-6"",;
        "md": "w-8 h-8",;
  "lg": "w-12 h-12";
    ;
;
;
;
};
    const textSizes = {"sm": "text-sm",;
        "md": "text-base",;
  "lg": "text-lg"};
    return (<div className={`flex flex-col items-center justify-center p-8 space-y-4 ${className}`}>;
      <motion.div animate={{ "rotate": "360 "}} transition = {;
  { "duration": "1", "repeat": "Infinity",;
  "ease": "linear" ;
import { Loader2 export function LoadingFallback($1) {
    const sizeClasses = {
  "sm": "w-6 h-6",
        "md": "w-8 h-8",
  "lg": "w-12 h-12"
};
    const textSizes = {sm: "text-sm",
        md: "text-base",
  lg: "text-lg"};
    return (
        <div className={`flex flex-col items-center justify-center p-8 space-y-4 ${className}`}>
      <motion.div animate={{ rotate: 360 }} transition = {
  { duration: 1, repeat: Infinity,
  ease: "linear" 
;
;
;
}}>;
        <Loader2 className={`${sizeClasses[size]} text-zion-cyan`} />;
      </motion.div>;
      <motion.p className={`${textSizes[size]} text-zion-slate-light font-medium`} initial={{ "opacity": "0 "}} animate={{ "opacity": "1 "}} transition={{ "delay": "0.2 "}}>;
        {message}
      </motion.p>;
      {/* Animated dots */}
      <motion.div className="flex space-x-1">;
        {[0, 1,;
  2].map((index) => (<motion .div key={index;
} className="w-2 h-2 bg-zion-cyan rounded-full" animate = {;
  {;
                "scale": "[1", 1.5, 1],;
                "opacity": "[0.5", 1,;
  0.5];
            ;
;
;
;
}} transition = {;
  {;
                "duration": "1.4",;
                "repeat": "Infinity",;
  "delay": "index * 0.2;
            ;
;
;
;
"}} />))}
      </motion.div>;
    </div>)}
export function PageLoadingFallback("props": "any) {;
    return (<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center">;
      <div className="text-center">;
        <LoadingFallback message="Loading Zion Tech Group..." size="lg" />;
        <motion.div className="mt-8 text-zion-slate-light text-sm" initial={{ "opacity": 0 "}} animate={{ "opacity": "1 "}} transition={{ "delay": "1 "}}>;
          Connecting to the future of tech...;
        </motion.div>;
      </div>;
    </div>)}
;
export default LoadingFallback;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>
    const textSizes = {"sm": "text-sm",
        "md": "text-base",
  "lg": "text-lg"};
    return (
    <div className="min-h-screen bg-white">
      <motion.div animate={{ "rotate": 360 }} transition = {
  { "duration": 1, "repeat": Infinity,
  "ease": "linear"
}}>
        <Loader2 className={`${sizeClasses[size]} text-zion-cyan`} />
      </motion.div>
      <motion.p className={`${textSizes[size]} text-zion-slate-light font-medium`} initial={{ "opacity": 0 }} animate={{ "opacity": 1 }} transition={{ "delay": 0.2 }}>
        {message}
      </motion.p>
      {/* Animated dots */}
      <motion.div className="flex space-x-1">
        {[0, 1,
  2].map((index) => (<motion .div key={index
} className="w-2 h-2 bg-zion-cyan rounded-full" animate = {
  {
                "scale": [1, 1.5, 1],
                "opacity": [0.5, 1,
  0.5]
}} transition = {
  {
                "duration": 1.4,
                "repeat": Infinity,
  "delay": index * 0.2
}} />))}
      </motion.div>
    </div>)}
export function PageLoadingFallback(props: any) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center">
        </div>
  );
}
export function PageLoadingFallback($1) {
    return (
    <div className="min-h-screen bg-white">
      <div className="text-center">
        <LoadingFallback message="Loading Zion Tech Group..." size="lg" />
        <motion.div className="mt-8 text-zion-slate-light text-sm" initial={{ "opacity": 0 }} animate={{ "opacity": 1 }} transition={{ "delay": 1 }}>
          Connecting to the future of tech...
        </motion.div>
      </div>
        </div>
  );
}
export default LoadingFallback;
</motion>
</motion>;
import {motion} from "framer-motion"; import { Loader2 export function LoadingFallback($1) { const sizeClasses = { sm: "w-6 h-6",md: "w-8 h-8",lg: "w-12 h-12" };; const textSizes = {sm: "text-sm",md: "text-base",lg: "text-lg"};; return ( <div className="min-h-screen bg-white"> <motion.div animate={{ rotate: 360 }} transition = { { duration: 1,repeat: Infinity,ease: "linear" }}> <Loader2 className={`${sizeClasses[size]} text-zion-cyan`} /> </motion.div> <motion.p className={`${textSizes[size]} text-zion-slate-light font-medium`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}> {message} </motion.p> {} <motion.div className="flex space-x-1"> {[0,1,2].map((index) => (<motion .div key={index } className="w-2 h-2 bg-zion-cyan rounded-full" animate = { { scale: [1,1.5,1],opacity: [0.5,1,0.5] }} transition = { { duration: 1.4,repeat: Infinity,delay: index * 0.2 }} />))} </motion.div> </div> )} export function PageLoadingFallback($1) { return ( <div className="min-h-screen bg-white"> <div className="text-center"> <LoadingFallback message="Loading Zion Tech Group..." size="lg" /> <motion.div className="mt-8 text-zion-slate-light text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}> Connecting to the future of tech... </motion.div> </div> </div> )} export default LoadingFallback; </motion> </motion>;
