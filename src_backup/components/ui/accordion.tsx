:src_backup/components/ui/accordion.tsx
<<<<<<< HEAD
import * as React from "react"
import { ElementRef, ComponentPropsWithoutRef } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from 'lucide-react'
"
import { cn } from "@/lib/utils"
:src_backup/components/ui/accordion.tsx

const Accordion = AccordionPrimitive.Root

=======
;
const Accordion = AccordionPrimitive.Root;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/accordion.tsx
const AccordionItem = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
:src_backup/components/ui/accordion.tsx
  <AccordionPrimitive.Item
<<<<<<< HEAD
<<<<<<< HEAD
    ref={ref}
    className={cn("border-b", className)}
    {...props}
/>
))
AccordionItem.displayName = "AccordionItem"

<<<<<<< HEAD:src_backup/components/ui/accordion.tsx
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/accordion.tsx
AccordionItem.displayName = "AccordionItem"
"
AccordionItem.displayName = "AccordionItem"

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const AccordionTrigger = React.forwardRef<
=======
const AccordionTrigger = React.forwardRef<
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => ("
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger;
      ref={ref}
      className={cn(
:src_backup/components/ui/accordion.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >;
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
import {ChevronDown} from 'lucide-react';
'
import {cn} from '@/lib/utils';

const Accordion = AccordionPrimitive && AccordionPrimitive.Root;

const AccordionItem = React && React.forwardRef<;
  ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Item>,;
  ComponentPropsWithoutRef<typeof AccordionPrimitive && AccordionPrimitive.Item>;
></typeof>(({ className, ...props }, ref) => (;
  <AccordionPrimitive&& AccordionPrimitive.Item;
    ref={ref}'
    className={cn('border-b', className)}
    {...props}
  />;
));'
AccordionItem && AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React && React.forwardRef<;
  ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Trigger>,;
  ComponentPropsWithoutRef<typeof AccordionPrimitive && AccordionPrimitive.T</typeof>rigger>;
>(({ className, children, ...props }, ref) => (;'
  <AccordionPrimitive && AccordionPrimitive.Header className='flex'>;
    <AccordionPrimitive&& AccordionPrimitive.Trigger;
      ref={ref}
      className={cn('
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',;
        className;

      )}
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    </AccordionPrimitive>  {...props}
    >
      {children}'
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
      {...props}
    >;
      {children}
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </AccordionPrimitive.Trigger>
=======

    </AccordionPrimitive.Trigger>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  </AccordionPrimitive.Header>
))
:src_backup/components/ui/accordion.tsx
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/accordion.tsx
const AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
:src_backup/components/ui/accordion.tsx
  <AccordionPrimitive.Content
<<<<<<< HEAD
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/accordion.tsx
