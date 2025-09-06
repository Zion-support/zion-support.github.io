import * as React from "react""
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu""
import { cva } from "class-variance-authority"
import { ChevronDown } from 'lucide-react'
"
import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
  <NavigationMenuPrimitive.Root
<<<<<<< HEAD
<<<<<<< HEAD
=======
  <NavigationMenuPrimitive.Root';
import React from 'react';'
import * as React from 'react';'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';'
import {cva} from 'class-variance-authority';'
import {ChevronDown} from 'lucide-react';
'
import {cn} from '@/lib/utils';

const NavigationMenu = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Root>;
></typeof>(({ className, children, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Root;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
    ref={ref}
    className={cn(
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
      "relative z-10 flex w-full flex-1 items-center justify-center sm:max-w-max",
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      className;
    )}
    {...props}
  >;
    {children}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

    <NavigationMenuViewport />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Root>;
));
NavigationMenu && NavigationMenu.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.List>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitiv</typeof>e && e.List>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.List

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.List;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
    ref={ref}
    className={cn('
      'group flex flex-1 list-none items-center justify-center space-x-1'

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1'

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <NavigationMenuViewport />;
  </NavigationMenuPrimitive.Root>;
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.List>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.List;
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    ref={ref}
    className={cn("
      "group flex flex-1 list-none items-center justify-center space-x-1",
<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
      className
<<<<<<< HEAD
<<<<<<< HEAD
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
    )}
    {...props}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
const NavigationMenuItem = NavigationMenuPrimitive.Item
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const navigationMenuTriggerStyle = cva(
=======
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
  <NavigationMenuPrimitive.Trigger
<<<<<<< HEAD
=======
=======
  <NavigationMenuPrimitive.Trigger;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
  />;
));
NavigationMenuList && NavigationMenuList.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive && NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(;'
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover: bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50';
),;

const NavigationMenuTrigger = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger>,;
  React && React.ComponentPropsWithoutRef<typeof NavigationMenuPr</typeof>imitive && imitive.Trigger>;
>(({ className, children, ...props }, ref) => (;
<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Trigger
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ref={ref}
=======
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Trigger;
    ref={ref}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >"
    {children}{" "}
<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
    <ChevronDown
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
<<<<<<< HEAD
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

=======
      className='relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none'
=======
    <ChevronDown'
      className='relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
      aria-hidden='true'






>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

      className='relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none'
      aria-hidden='true'

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

      className='relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none'
      aria-hidden='true'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
  <NavigationMenuPrimitive.Content
<<<<<<< HEAD
<<<<<<< HEAD
=======
  <NavigationMenuPrimitive.Content;
    />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger>;
));
NavigationMenuTrigger && NavigationMenuTrigger.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof Navigat</typeof>ionMenuPrimitive && ionMenuPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Content;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
    ref={ref}
    className={cn(
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      "left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground",

      className
=======
"
      "left-0 top-0 z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-border/20 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto dark:bg-secondary dark:text-foreground",


      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
    )}
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
const NavigationMenuLink = NavigationMenuPrimitive.Link




=======

const NavigationMenuLink = NavigationMenuPrimitive.Link

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

const NavigationMenuLink = NavigationMenuPrimitive.Link

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const NavigationMenuLink = NavigationMenuPrimitive.Link;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => ("
  <div className={cn("absolute left-0 top-full z-50 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport;
      className={cn(

<<<<<<< HEAD
<<<<<<< HEAD
  />;
));
NavigationMenuContent && NavigationMenuContent.displayName = NavigationMenuPrimitive && NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive && NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport>,;
  React && React.ComponentPropsWithoutRef<typeof</typeof> NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport>;
>(({ className, ...props }, ref) => (;'
  <div className={cn('absolute left-0 top-full z-50 flex justify-center')}>;
    <NavigationMenuPrimitive&& NavigationMenuPrimitive.Viewport;
      className={cn('
        'origin-top-center relative mt-1 && 1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',

<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        className
=======
"
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",

        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
      )}
      ref={ref}
      {...props}
=======
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayNameconst NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content        className
      )}
      ref={ref}
      {...props}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    />;
  </div>;
));
NavigationMenuViewport.displayName =;
  NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef<;
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,;
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive.Indicator;

    ref={ref}
    className={cn("
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
      className
    )}
=======
      className;
    )}'
import * as React from 'react';'
import * as NavigationMenuPrimitive from '@radix - ui / react - navigation - menu';'
import {cva} from 'class - variance - authority';'
import {ChevronDown} from 'lucide-react';'
import {cn} from '@/lib / utils';
const NavigationMenu = React.forward_ref<;
  React.ElementRef < typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof NavigationMenuPrimitive.Root>;
></typeof>(({ class_name, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root;
    ref={ref}
    className={cn ('
      'relative z - 10 flex w - full flex - 1 items - center justify - center sm:max - w-max',
      class_name)}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  >
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    />;
  </div>;
));
NavigationMenuViewport && NavigationMenuViewport.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Viewport.displayName;
  >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
  NavigationMenuPrimitive.Indicator.displayName

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  NavigationMenuPrimitive.Indicator.displayName;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
const NavigationMenuIndicator = React && React.forwardRef<;
  React && React.ElementRef<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>,;
  React && React.ComponentPropsWithoutRe</typeof>f<typeof NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>;
>(({ className, ...props }, ref) => (;
  <NavigationMenuPrimitive&& NavigationMenuPrimitive.Indicator;
    ref={ref}
    className={cn('
      'top-full z-[1] flex h-1 && 1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className;
    )}
    {...props}>;'
    <div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md' />;
  </NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator>;
));
NavigationMenuIndicator && NavigationMenuIndicator.displayName =;
  NavigationMenuPrimitive && NavigationMenuPrimitive.Indicator.displayName;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export {
=======
export {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  NavigationMenuLink,
  NavigationMenuIndicator,
<<<<<<< HEAD:src_backup/components/ui/navigation-menu.tsx
  NavigationMenuViewport}
;
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  NavigationMenuViewport};
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/navigation-menu.tsx
