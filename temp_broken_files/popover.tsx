<<<<<<< HEAD:temp_broken_files/popover.tsx
import React from 'react';
const popover: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">popover</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export function Popover({ children, className }: PopoverRootProps) {
  return <div className={className}>{children}</div>;
}
type PopoverTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};
export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button ref={ref} className={className} type={props.type ?? "button"} {...props}>
        {children}
      </button>
    );
  }
);
PopoverTrigger.displayName = "PopoverTrigger";
type PopoverContentProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
};
export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, className = "z-50 rounded-md border bg-white p-3 shadow-md", ...props }, ref) => {
    return (
      <div ref={ref} role="dialog" className={className} {...props}>
        {children}
=======
import React from "react";

const Popover = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Popover</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/ui/popover.tsx
      </div>
    </div>
  );
};

<<<<<<< HEAD:temp_broken_files/popover.tsx


=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/ui/popover.tsx
export default Popover;
