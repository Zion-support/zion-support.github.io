import React from "react";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

const labelVariants = cva(;
"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
);

const Label = React.forwardRef<
React.ElementRef<typeof LabelPrimitive.Root>,;
React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &;
VariantProps<typeof labelVariants>;
>(({ className, ...props }, ref) => (
<LabelPrimitive.Root;
ref={ref}
className={`${labelVariants()} ${className}`}
{...props}
/>;
));

Label.displayName = LabelPrimitive.Root.displayName;

<<<<<<< HEAD:src/components/ui/label.tsx
export { Label };
=======
export { Label };
>>>>>>> pr-22703:temp-broken-files/components/ui/label.tsx
