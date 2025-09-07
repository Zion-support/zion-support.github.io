import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from 'lucide-react'

<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
=======

<<<<<<< HEAD
const RadioGroup = React.forwardRef<
import * as React from &quot;react&quot;
import * as RadioGroupPrimitive from &quot;@radix-ui/react-radio-group&quot;
import { Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;

import { cn } from "@/lib/utils"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/radio-group.tsx
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
=======
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
  return (
    <RadioGroupPrimitive.Root
      className={cn(&quot;grid gap-2&quot; className)}
      className={cn("grid gap-2", className)}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/radio-group.tsx

import * as React from &quot;react & quot;
import * as RadioGroupPrimitive from &quot;@radix - ui / react - radio - group & quot;'
import { Circle } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
;
const RadioGroup = React.forward_ref<;
  React.ElementRef < typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof RadioGroupPrimitive.Root>;
>(({ class_name, ...props }, ref) => {}
  return (
    <RadioGroupPrimitive.Root;
      className={cn (&quot;grid gap - 2&quot;, class_name)}
  return (

      className={cn("grid gap-2", className)}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {...props}
      className={cn(&quot;grid gap-2&quot; className)}
ursor/fix-website-loading-errors-and-merge-6662
      ref={ref}
    />;
  );
});
<<<<<<< HEAD
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;

      className={cn("grid gap-2", className)}

      {...props}

      ref={ref}
    />;
  );
});

  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx

=======
  React.ElementRef<typeof RadioGroupPrimitive.Item>;
  React.ElementRef<typeof RadioGroupPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>(({ className, ...props }, ref) => {return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
=======



  React.ElementRef<typeof RadioGroupPrimitive.Item>,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/radio-group.tsx
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
<<<<<<< HEAD
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
ursor/fix-website-loading-errors-and-merge-6662
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
className={cn(
        &quot;aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

=======

<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
        className

      )}
      {...props}
    >"
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        className
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/radio-group.tsx
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
=======
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
<<<<<<< HEAD
export { RadioGroup, RadioGroupItem }
export { RadioGroup, RadioGroupItem };
export { RadioGroup, RadioGroupItem }
;
export { RadioGroup, RadioGroupItem }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/radio-group.tsx

export { RadioGroup, RadioGroupItem }
;
export { RadioGroup, RadioGroupItem };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export { RadioGroup, RadioGroupItem }
;
RadioGroup.display_name = RadioGroupPrimitive.Root.display_name;
const RadioGroupItem = React.forward_ref<;
  React.ElementRef < typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof RadioGroupPrimitive.Item>;
>(({ class_name, ...props }, ref) => {}
  return (
    <RadioGroupPrimitive.Item;
      ref={ref}
className={cn (
        &quot;aspect - square h - 4 w - 4 rounded - full border border - primary text - primary ring - offset - background focus:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 & quot;,
        class_name)}
      {...props}
    >;
      <RadioGroupPrimitive.Indicator className=&quot;flex items - center justify - center & quot;>;
        <Circle className=&quot;h - 2.5 w - 2.5 fill - current text - current & quot; />;
      </RadioGroupPrimitive.Indicator>;
    </RadioGroupPrimitive.Item>);
});
RadioGroupItem.display_name = RadioGroupPrimitive.Item.display_name;

export { RadioGroup, RadioGroupItem }

export { RadioGroup, RadioGroupItem };
<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
;
=======

export { RadioGroup, RadioGroupItem }
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/radio-group.tsx
