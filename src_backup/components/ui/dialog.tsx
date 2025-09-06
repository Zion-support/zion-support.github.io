<<<<<<< HEAD:src_backup/components/ui/dialog.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react"
=======
import * as React from "react""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from 'lucide-react'
"
import { cn } from "@/lib/utils"
<<<<<<< HEAD:src_backup/components/ui/dialog.tsx

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
;
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD:src_backup/components/ui/dialog.tsx
  <DialogPrimitive.Overlay
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  <DialogPrimitive.Overlay'
import React from 'react';'
import * as React from 'react';'
import * as DialogPrimitive from '@radix-ui/react-dialog';'
import {X} from 'lucide-react';
'
import {cn} from '@/lib/utils';

const Dialog = DialogPrimitive && DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive && DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive && DialogPrimitive.Portal;

const DialogClose = DialogPrimitive && DialogPrimitive.Close;

const DialogOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Overlay>,;
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Overlay>;
></typeof>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Overlay;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
    ref={ref}
    className={cn(
<<<<<<< HEAD
=======

  />;
=======
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.C</typeof>ontent>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content  />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
));
DialogOverlay && DialogOverlay.displayName = DialogPrimitive && DialogPrimitive.Overlay.displayName;

  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.C</typeof>ontent>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  />;
));
DialogOverlay && DialogOverlay.displayName = DialogPrimitive && DialogPrimitive.Overlay.displayName;

<<<<<<< HEAD:src_backup/components/ui/dialog.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
const DialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.C</typeof>ontent>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive&& DialogPrimitive.Content;
      ref={ref}
      className={cn('
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className;
    )}
    {...props}
  />;
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <DialogPortal>;
    <DialogOverlay />;
    <DialogPrimitive.Content;
      ref={ref}
      className={cn("
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        className;
      )}
      {...props}
    >;
      {children}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/dialog.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
=======
"
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">"
        <X className="h-4 w-4" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
        <span className="sr-only">Close</span>
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
<<<<<<< HEAD
<<<<<<< HEAD
DialogContent.displayName = DialogPrimitive.Content.displayName
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD:src_backup/components/ui/dialog.tsx
const DialogHeader = ({
  className,
  ...props
<<<<<<< HEAD
<<<<<<< HEAD
=======
const DialogHeader = ({}
  className;
  ...props;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div;
    className={cn(
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/dialog.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      "flex flex-col space-y-1.5 text-center sm:text-left",


      className
    )}
=======
"
      "flex flex-col space-y-1.5 text-center sm:text-left",


      className;
    )}'
import * as React from 'react';'
import * as DialogPrimitive from '@radix - ui / react - dialog';'
import {X} from 'lucide-react';'
import {cn} from '@/lib / utils';
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
const DialogOverlay = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof DialogPrimitive.Overlay>;
></typeof>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Overlay;
    ref={ref}
    className={cn ('
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',
      class_name)}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
    {...props}
  />
)
<<<<<<< HEAD:src_backup/components/ui/dialog.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
=======
"
DialogHeader.displayName = "DialogHeader"



const DialogFooter = ({}
'
      <DialogPrimitive && DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>;'
        <X className='h-4 w-4' />;'
        <span className='sr-only'>Close</span>;
      </DialogPrimitive && DialogPrimitive.Close>;
    </DialogPrimitive && DialogPrimitive.Content>;
  </DialogPortal>;
));
DialogContent && DialogContent.displayName = DialogPrimitive && DialogPrimitive.Content.displayName,;

const DialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
  <div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
    className={cn(
<<<<<<< HEAD
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
=======

  <div;
    className={cn('
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      className;
    )}
    {...props}

"
DialogFooter.displayName = "DialogFooter"
<<<<<<< HEAD:src_backup/components/ui/dialog.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
DialogFooter.displayName = "DialogFooter"


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD:src_backup/components/ui/dialog.tsx
  <DialogPrimitive.Title
<<<<<<< HEAD
<<<<<<< HEAD
=======
  <DialogPrimitive.Title;
  />;
);'
DialogFooter && DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof DialogPrimitive && DialogPrimitive.Title>,;
  React && React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive && DialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive&& DialogPrimitive.Title;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />;
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef<;
  React.ElementRef<typeof DialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <DialogPrimitive.Description;
=======

  class_name,
  ...props;
}: React</HTMLDivElement>.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',
      class_name)}
    {...props}
  />);'
DialogFooter.display_name = 'DialogFooter';
const DialogTitle = React.forward_ref<;
  React.ElementRef < typeof DialogPrimitive.Title>,
  React.Comp</typeof > onentPropsWithoutRef < typeof DialogPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <DialogPrimitive.Title;



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ref={ref}
<<<<<<< HEAD:src_backup/components/ui/dialog.tsx
    className={cn("text-sm text-muted-foreground", className)}
=======
    className={cn ('
      'text - lg font - semibold leading - none tracking - tight',
      class_name)}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
    {...props}
<<<<<<< HEAD
=======


  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,;
  DialogTitle,;
  DialogDescription;
};


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  />;
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export {;
  Dialog,;
  DialogPortal,;
  DialogOverlay,;
  DialogClose,;
  DialogTrigger,;
  DialogContent,;
  DialogHeader,;
<<<<<<< HEAD
<<<<<<< HEAD
  DialogFooter;
  DialogTitle;
  DialogDescription}
<<<<<<< HEAD:src_backup/components/ui/dialog.tsx
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/dialog.tsx
