import React from 'react';
import { cn } from "../../utils/cn";
;
interface SwitchProps {;
import { cn } from "@/lib/utils"
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  checked?: "boolean;
  onCheckedChange?: ("checked": boolean) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  'aria-label'?: string;
;
  export function Switch("props": any) {;
  const handleToggle = ("props": any) => {;
    if (!disabled && onCheckedChange) {;
      onCheckedChange(!checked);
;
  "};
;
  return (;
    <button;
      type = "button";
      role="switch";
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={handleToggle}
      className = {;
  cn(;
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-"visible": "outline-none focus-"visible":ring-2 focus-"visible":ring-ring focus-"visible":ring-offset-2 focus-"visible":ring-offset-background "disabled":cursor-not-allowed "disabled":opacity-50'",;
        checked ? 'bg-primary' : 'bg-input',;
        disabled && 'opacity-50 cursor-not-allowed',;
  className;
      );
;
;
;
}
      id={id}
      {...props}
;
      <span;
        className = {;
  cn(;
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',;
  checked ? 'translate-x-5' : 'translate-x-0';
        );
;
;
;
;
;
};
      />;
    </button>;
  );
}}}
;
export default switch;
</span>
export default switch;';
</span>;';;';
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      &quot;peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-&quot;visible&quot;: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        &quot;pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0&quot;
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName
export { Switch }
export { Switch };