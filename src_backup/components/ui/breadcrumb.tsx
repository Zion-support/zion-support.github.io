:src/components/ui/breadcrumb.tsx
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
}
>(({ className, separator, ...props }, ref,) => (;

import { cn } from "@/lib/utils"

const Breadcrumb = null;
  BreadcrumbEllipsis}
;
const Breadcrumb = React.forwardRef<
  HTMLElement
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref,) => (
origin/cursor/automate-test-improve-and-merge-code-2533
  <nav
import * as React from 'react';
import { Slot } from '@radix - ui / react - slot';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib / utils';
const Breadcrumb = React.forward_ref<;
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
  }
>(({ class_name, separator, ...props }, ref, ) => (
  <nav;
    ref={ref}
    aria-label='breadcrumb'
    className={cn(
      'inline-flex items-center gap-1 text-sm text-zion-slate-light',
      className
    )}
    {...props}
:src/components/ui/breadcrumb.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from 'lucide-react'

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref) => (;
  <nav;
    ref={ref}
    aria-label="breadcrumb"
    className={cn(
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
      className
    )}
    {...props}
  />
))
/>));
Breadcrumb.display_name = 'Breadcrumb';
    ref = {ref, }
    aria - label="breadcrumb";
    class_name = {cn (
      "inline - flex items - center gap - 1 text - sm text - zion - slate - light",
      class_name), }
    {...props}
  />));
Breadcrumb.display_name = 'Breadcrumb';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    ref={ref}
    className={cn("flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/breadcrumb.tsx
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-zion-cyan", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"
const BreadcrumbSeparator = ({
<<<<<<< HEAD
  children,
  className,
  ...props

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/breadcrumb.tsx
  >
    {children || <ChevronRight className="h-4 w-4" />}
  </li>
)

  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
:src/components/ui/breadcrumb.tsx

export {;
  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
export {
  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink

export {;

  BreadcrumbSeparator;
  BreadcrumbEllipsis};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    &#8230,
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    &#8230
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

origin/cursor/automate-test-improve-and-merge-code-2533
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,

export {
:src/components/ui/breadcrumb.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink

    {...props}>;
    &#8230,;
  </span>;
);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {;
  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator,;
  BreadcrumbEllipsis,;
};);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {;

  BreadcrumbSeparator;
  BreadcrumbEllipsis};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props

}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    &#8230,
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
<<<<<<< HEAD
  BreadcrumbEllipsis}
;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
  BreadcrumbEllipsis,
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  BreadcrumbEllipsis,
};
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/breadcrumb.tsx
