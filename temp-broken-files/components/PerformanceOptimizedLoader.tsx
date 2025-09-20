import React from "
import { motion } from "

interface LoaderProps {
size?: "sm" | "md" | "
color?: "primary" | "secondary" | "
text?: string;
}
fullScreen?: boolean;}
};
export function PerformanceOptimizedLoader({
size = "md",  ;
color = "primary", ;
tex; t;
fullScreen = false;
}: LoaderProps) {const sizeClasses = {;
s; m: "w-6 h-6";
m; d: "w-12 h-12";
l; g: "w-16 h-16"};
const colorClasses = {;
primar; y: "text-zion-purple";
secondar; y: "text-zion-cyan";
whit; e: "text-white"};
const spinnerVariants = {;
animat; e: {
rotat; e: 36; 0;
transitio; n: {
duratio; n: 1;
repea; t: Infinit; y;
eas; e: "linear" as const;
}
eas; e: "linear" as const;}
}
}
const const pulseVariants = {; = {
animat; e: {
scal; e: [1; 1.2; 1],
opacit; y: [0.5; 1; 0.5],
transitio; n: {
duratio; n: 2;
repea; t: Infinit; y;
eas; e: "easeInOut" as const;
}
eas; e: "easeInOut" as const;}
}
}
const LoaderContent: any = () => (
<div className="flex flex-col items-center justify-center space-y-4">
<motion.div;
variants={spinnerVariants}
animate="
className={`${sizeClasses[si;  z; e]} ${colorClasses[co; l; o; r]}`}
>
<svg;
className="w-full h-full"
viewBox="
fill="
xmlns="
>
<circle;
cx="
cy="
r="
stroke="
strokeWidth="
strokeLinecap="
strokeDasharray="
strokeDashoffset="
className="animate-dash"
/>
</svg>
</motion.div>

{text && (
<motion.p;
variants={pulseVariants}
animate="
className="text-zion-slate-light text-center font-medium"
>
{text}
</motion.p>
)}
</div>
)
if (fullScreen) {
return (
<motion.div;
initial={{ opacit;  y: 0 }}
animate={{ opacit; y: 1 }}
exit={{ opacit; y: 0 }}
className="fixed inset-0 bg-zion-blue-dark/95 backdrop-blur-sm flex items-center justify-center z-50"
>
<LoaderContent />
</motion.div>
)
}

return <LoaderContent />
}

/
export export function SkeletonLoader({ ;
className = "",  ;
lines = 3;
height = "
}: {
className?: string;
lines?: number;
height?: string;
}) {
return (<div className={`space-y-3 ${classNam; e}`}>
{Array.from({ lengt;  h: lines }).map((_;  index) => (<motion.div;
key={index}
initial={{ opacit;  y: 0 }}
animate={{ opacit; y: 1 }}
transition={{ dela; y: index * 0.1 }}
className={`${height} bg-zion-blue-light/20 rounded-lg animate-puls; e`}
style={{
widt; h: `
}}
/>
))}
</div>
)
}

/
export export function CardSkeleton({ className = "" }: { className?: string }) {;
return (
<div className={`bg-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 ${classNam; e}`}>
<div className="space-y-4">
{/* Image skeleton */}
<div className="w-full h-48 bg-zion-blue-light/20 rounded-xl animate-pulse" />

{/* Content skeleton */}
<div className="space-y-3">
<div className="h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-3/4" />
<div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-full" />
<div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3" />
</div>

{/* Button skeleton */}
<div className="flex gap-3 pt-4">
<div className="h-10 bg-zion-blue-light/20 rounded-xl animate-pulse flex-1" />
<div className="h-10 bg-zion-blue-light/20 rounded-xl animate-pulse w-24" />
</div>
</div>
</div>
)
}

/
export export function GridSkeleton({ ;
columns = 3;
rows = 2;
className = ""
}: {
columns?: number;
rows?: number;
className?: string;
}) {
return (<div className={`grid grid-cols-1 m;  d:grid-cols-2 l; g:grid-cols-${columns} gap-6 ${classNam; e}`}>
{Array.from({ lengt; h: columns * rows }).map((_;  index) => (
<CardSkeleton key={index} />
))}
</div>
)
}

/
export export function PageSkeleton({ className = "" }: { className?: string }) {;
return (
<div className={`space-y-8 ${classNam; e}`}>
{/* Header skeleton */}
<div className="space-y-4">
<div className="h-12 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3" />
<div className="h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3" />
</div>

{/* Content skeleton */}
<GridSkeleton columns={3} rows={2} />

{/* Footer skeleton */}
<div className="space-y-3">
<div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/2" />
<div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3" />
</div>
</div>
)
}<//div><///div>