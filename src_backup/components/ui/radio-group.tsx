<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react"
=======
import * as React from "react""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/radio-group.tsx
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from 'lucide-react'

=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <RadioGroupPrimitive.Root
=======

=======
>(({ className, ...props }, ref) => {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/radio-group.tsx
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
<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
    <RadioGroupPrimitive.Root

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    <RadioGroupPrimitive.Root;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/radio-group.tsx
      className={cn("grid gap-2", className)}
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {...props}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      ref={ref}
    />;
  );
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef<;
  React.ElementRef<typeof RadioGroupPrimitive.Item>,;  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
=======

  React.ElementRef<typeof RadioGroupPrimitive.Item>,;

=======

  React.ElementRef<typeof RadioGroupPrimitive.Item>,;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>(({ className, ...props }, ref) => {;
  return (;
    <RadioGroupPrimitive.Item;
      ref={ref}
<<<<<<< HEAD
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
=======

<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        className
=======

        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/radio-group.tsx
      )}
      {...props}
    >"
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">"
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export { RadioGroup, RadioGroupItem }
=======

=======
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/radio-group.tsx
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

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export { RadioGroup, RadioGroupItem }

export { RadioGroup, RadioGroupItem };
;
<<<<<<< HEAD
<<<<<<< HEAD

export { RadioGroup, RadioGroupItem };

<<<<<<< HEAD:src_backup/components/ui/radio-group.tsx
export { RadioGroup, RadioGroupItem }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

export { RadioGroup, RadioGroupItem }

export { RadioGroup, RadioGroupItem }
;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export { RadioGroup, RadioGroupItem };
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/radio-group.tsx
