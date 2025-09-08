<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/ui/toast.tsx
import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { logInfo } from '@/utils/productionLogger';
const ToastProvider = null;
import { cn } from '@/lib/utils'
import { logInfo } from '@/utils/productionLogger'
const ToastProvider = ToastPrimitives.Provider; import { logInfo } from '@/utils/productionLogger'
:src/components/ui/toast.tsx
const ToastProvider = ToastPrimitives.Provider
<<<<<<< HEAD
const ToastProvider = ToastPrimitives.Provider
=======
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { cn } from "@/lib/utils"
import { logInfo } from '@/utils/productionLogger';
const ToastProvider = null;
import { cn } from '@/lib/utils'
import { logInfo } from '@/utils/productionLogger'
const ToastProvider = ToastPrimitives.Provider; import { logInfo } from '@/utils/productionLogger'
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
import { cn  } from '@/lib/utils';
import { logInfo  } from '@/utils/productionLogger';
const ToastProvider = null;
const ToastProvider = ToastPrimitives.Provider; import { logInfo  } from '@/utils/productionLogger';
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Viewport>;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>;
>(({ className, ...props }, ref) => (<ToastPrimitives.Viewport;
    {...props}
  />;
))ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
import React from 'react';
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps  } from 'class-variance-authority';
import { X  } from 'lucide-react';
const ToastProvider = ToastPrimitives && ToastPrimitives.Provider;import { logInfo  } from '@/utils/productionLogger';
const ToastProvider  = ToastPrimitives && ToastPrimitives.Provider;const ToastViewport = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Viewport>,React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Viewport>;
>(({ className, ...props }, ref,) => (<ToastPrimitives&& ToastPrimitives.Viewport;
import * as ToastPrimitives from '@radix - ui / react - toast';
import { cva, type VariantProps  } from 'class - variance - authority';
import { cn  } from '@/lib / utils';
import { log_info  } from '@/utils / production_logger';
const ToastProvider = ToastPrimitives.Provider; import { log_info  } from '@/utils / production_logger';
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Viewport>;
>(({ class_name, ...props }, ref, ) => (
  <ToastPrimitives.Viewport;
    ref={ref}

    className={cn(

      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}


<<<<<<< HEAD
=======
import React from 'react;
import * as React from react';
import * as ToastPrimitives from '@radix-ui/react-toast;
import { cva, type VariantProps } from class-variance-authority';
import { X } from 'lucide-react;
import { cn } from @/lib/utils';

=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React from 'react';
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { logInfo } from '@/utils/productionLogger';
'
const ToastProvider = ToastPrimitives && ToastPrimitives.Provider;import { logInfo } from '@/utils/productionLogger';
const ToastProvider = ToastPrimitives && ToastPrimitives.Provider;

const ToastViewport = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Viewport>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Viewport>;
>(({ className, ...props }, ref,) => (;
  <ToastPrimitives&& ToastPrimitives.Viewport'
import * as React from 'react';'
import * as ToastPrimitives from '@radix - ui / react - toast';'
import { cva, type VariantProps } from 'class - variance - authority';'
import { X } from 'lucide-react';'
import { cn } from '@/lib / utils';'
import { log_info } from '@/utils / production_logger';'
const ToastProvider = ToastPrimitives.Provider; import { log_info } from '@/utils / production_logger';
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Viewport>;
>(({ class_name, ...props }, ref, ) => (
  <ToastPrimitives.Viewport;
    ref={ref}

    className={cn(
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/ui/toast.tsx
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',      className
    ),}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName
const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full'
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground'
        destructive:
          'destructive border-destructive bg-destructive text-destructive-foreground'
        success:
          'border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100'
        warning:
          'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100'
        info: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100'
      }
    }
    defaultVariants: {
      variant: 'default'
    }
  }
)
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className;
    )}

    {...props}

const toastVariants = cva(

  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {}
    variants: {}
<<<<<<< HEAD
      variant: {'
        default: 'border bg-background text-foreground',
        destructive:'
          'destructive border-destructive bg-destructive text-destructive-foreground','
        success: 'border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100','
        warning: 'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100','
        info: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100'},
=======
      variant: {"
        default: border bg-background text-foreground,
        destructive:"
<<<<<<< HEAD

=======
<<<<<<< HEAD
          "destructive border-destructive bg-destructive text-destructive-foreground,
        success: "border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100",
        warning: border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100","
        info: border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100}},
>>>>>>> origin/resolved-merge-conflicts
:src/components/ui/toast.tsx
    defaultVariants: {
      variant: 'default'}
)
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          "destructive border-destructive bg-destructive text-destructive-foreground","
        success: "border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100","
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100","
        info: "border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100"}},


const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  React.ElementRef < typeof ToastPrimitives.Viewport>,React.ComponentPropsWithoutRef < typeof ToastPrimitives.Viewport>;
>(({ class_name, ...props }, ref, ) => (<ToastPrimitives.Viewport;
    ref={ref}className={cn('fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',className;
    )}{...props}{...props}
  />;
))ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',{variants: {variant: {default: 'border bg-background text-foreground',destructive:;
          'destructive border-destructive bg-destructive text-destructive-foreground',success: 'border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100',warning: 'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100',info: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100'},defaultVariants: {const Toast = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Root>;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &;
<<<<<<< HEAD
const Toast = React.forwardRef<
=======
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const Toast = React.forwardRef<
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  React.ElementRef<typeof ToastPrimitives.Root>
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>

  />;
));
ToastViewport && ToastViewport.displayName = ToastPrimitives && ToastPrimitives.Viewport.displayName;

const toastVariants = cva(;'
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',;
  {;
    variants: {;
      variant: {;'
        default: 'border bg-background text-foreground',;
        destructive:;'
          'destructive border-destructive bg-destructive text-destructive-foreground',;
        success:;'
          'border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100',;
        warning:;'
          'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100',;'
        info: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100',;
      },;
    },;
    defaultVariants: {;'
      variant: 'default',;
    },;
  });

const Toast = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Root>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Root> &;
    VariantProps<typeof toastVariants>;
>(({ className, variant, ...props }, ref) => {;
<<<<<<< HEAD
=======
>(({ className, variant, ...props }, ref) => {
>>>>>>> origin/resolved-merge-conflicts
      />;
  );
});
Toast && Toast.displayName = ToastPrimitives && ToastPrimitives.Root.displayName;

const ToastAction = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Action>,;
  React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Action>;
>(({ className, ...props }, ref,) => (;

  />));
ToastViewport.display_name = ToastPrimitives.Viewport.display_name;
const toast_variants = cva ('
  'group pointer - events - auto relative flex w - full items - center justify - between space - x-4 overflow - hidden rounded - md border p - 6 pr - 8 shadow - lg transition - all data-[swipe = cancel]:translate - x-0 data-[swipe = end]:translate - x-[var (--radix - toast - swipe - end - x)] data-[swipe = move]:translate - x-[var (--radix - toast - swipe - move - x)] data-[swipe = move]:transition - none data-[state = open]:animate - in data-[state = closed]:animate - out data-[swipe = end]:animate - out data-[state = closed]:fade - out - 80 data-[state = closed]:slide - out - to - right - full data-[state = open]:slide - in - from - top - full data-[state = open]:sm:slide - in - from - bottom - full',
  {}
    variants: {}
      variant: {'
        default: 'border bg - background text - foreground',
        destructive:;'
          'destructive border - destructive bg - destructive text - destructive - foreground',
        success:;'
          'border - green - 500 bg - green - 50 text - green - 900 dark:bg - green - 900 / 20 dark:text - green - 100',
        warning:;'
          'border - yellow - 500 bg - yellow - 50 text - yellow - 900 dark:bg - yellow - 900 / 20 dark:text - yellow - 100','
        info: 'border - blue - 500 bg - blue - 50 text - blue - 900 dark:bg - blue - 900 / 20 dark:text - blue - 100',
      },
    },
    default_variants: {'
      variant: 'default',
    },
  });
const Toast = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Root> &;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>(({ className, variant, ...props }, ref) => {/>;
))ToastViewport && ToastViewport.displayName = ToastPrimitives && ToastPrimitives.Viewport.displayName;const toastVariants = cva('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',{variants: {variant: {default: 'border bg-background text-foreground',destructive:;
          'destructive border-destructive bg-destructive text-destructive-foreground',success:;
          'border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100',warning:;
          'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100',info: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100'},defaultVariants: {variant: 'default'}
)const Toast = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Root>,React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Root> &;
    VariantProps<typeof toastVariants>;
>(({ className, variant, ...props }, ref) => {/>;
  )})Toast && Toast.displayName = ToastPrimitives && ToastPrimitives.Root.displayName;const ToastAction = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Action>,React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Action>;
>(({ className, ...props }, ref,) => (<ToastPrimitives&& ToastPrimitives.Action;
  />))ToastViewport.display_name = ToastPrimitives.Viewport.display_name;
const toast_variants = cva ('group pointer - events - auto relative flex w - full items - center justify - between space - x-4 overflow - hidden rounded - md border p - 6 pr - 8 shadow - lg transition - all data-[swipe = cancel]:translate - x-0 data-[swipe = end]:translate - x-[var (--radix - toast - swipe - end - x)] data-[swipe = move]:translate - x-[var (--radix - toast - swipe - move - x)] data-[swipe = move]:transition - none data-[state = open]:animate - in data-[state = closed]:animate - out data-[swipe = end]:animate - out data-[state = closed]:fade - out - 80 data-[state = closed]:slide - out - to - right - full data-[state = open]:slide - in - from - top - full data-[state = open]:sm:slide - in - from - bottom - full',{variants: {variant: {default: 'border bg - background text - foreground',destructive:;
          'destructive border - destructive bg - destructive text - destructive - foreground',success:;
          'border - green - 500 bg - green - 50 text - green - 900 dark:bg - green - 900 / 20 dark:text - green - 100',warning:;
          'border - yellow - 500 bg - yellow - 50 text - yellow - 900 dark:bg - yellow - 900 / 20 dark:text - yellow - 100',info: 'border - blue - 500 bg - blue - 50 text - blue - 900 dark:bg - blue - 900 / 20 dark:text - blue - 100'},default_variants: {variant: 'default'}
)const Toast = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Root>,React.ComponentPropsWithoutRef < typeof ToastPrimitives.Root> &;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    VariantProps < typeof toast_variants>;
>(({ class_name, variant, ...props }, ref) => {}
      />);
});
Toast.display_name = ToastPrimitives.Root.display_name;
const ToastAction = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef < typeof ToastPrimitives.Action>;
>(({ class_name, ...props }, ref, ) => (
  <ToastPrimitives.Action;
    ref={ref}
    className={cn('
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',      className;
    ),}
    {...props}

    ref={ref}

    className={cn(

      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600'
      className;
    )}

<<<<<<< HEAD


=======
<<<<<<< HEAD
    className={cn('inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',      className;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    className={cn(inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive,      className;
>>>>>>> origin/resolved-merge-conflicts
    )}
    {...props}/>;
))ToastAction && ToastAction.displayName = ToastPrimitives && ToastPrimitives.Action.displayName;const ToastClose = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Close>,React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Close>;
>(({ className, ...props }, ref,) => (<ToastPrimitives&& ToastPrimitives.Close;
    ref={ref}
    className={cn('absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600';
      className;
    )}/>))ToastAction.display_name = ToastPrimitives.Action.display_name;
const ToastClose = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Close>,React.ComponentPropsWithoutRef < typeof ToastPrimitives.Close>;
>(({ class_name, ...props }, ref, ) => (<ToastPrimitives.Close;
    ref={ref}
    className={cn ('absolute right - 2 top - 2 rounded - md p - 1 text - foreground / 50 opacity - 0 transition - opacity hover:text - foreground focus:opacity - 100 focus:outline - none focus:ring - 2 group - hover:opacity - 100 group-[.destructive]:text - red - 300 group-[.destructive]:hover:text - red - 50 group-[.destructive]:focus:ring - red - 400 group-[.destructive]:focus:ring - offset - red - 600',class_name)}
    toast - close=''    {...props}
  >;
    <X className='h - 4 w - 4' />;
  </ToastPrimitives.Close>))ToastClose.display_name = ToastPrimitives.Close.display_name;
const ToastTitle = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Title>,React.ComponentPropsWithoutRef < typeof ToastPrimitives.Title>;
>(({ class_name, ...props }, ref, ) => (<ToastPrimitives.Title;
    ref={ref}
    className={cn ('text - sm font - semibold', class_name)}    {...props}
  />))ToastTitle.display_name = ToastPrimitives.Title.display_name;
const ToastDescription = React.forward_ref<;
  React.ElementRef < typeof ToastPrimitives.Description>,React.ComponentPropsWithoutRef < typeof ToastPrimitives.Description>;
>(({ class_name, ...props }, ref, ) => (<ToastPrimitives.Description;ref={ref}
    className={cn ('text - sm opacity - 90', class_name)}    {...props}
  />))ToastDescription.display_name = ToastPrimitives.Description.display_name;
type ToastProps = React.ComponentPropsWithoutRef < typeof Toast>;
type ToastActionElement = React.ReactElement < typeof ToastAction>;

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
export {
  type ToastProps
  type ToastActionElement
  ToastProvider
  ToastViewport
  Toast
  ToastTitle
  ToastDescription
  ToastClose
  ToastAction
}
// Add useToast hook export
// export function useToast() {
//   return {

  return (

    <ToastPrimitives.Root
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

import { logInfo } from '@/utils/productionLogger',;
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Viewport>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Viewport;

    ref={ref}
    className={cn(;'
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',;
      className;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
type ToastActionElement = React.ReactElement < typeof ToastAction>;export {type ToastProps;
  type ToastActionElement;
  ToastProvider;
  ToastViewport;
  Toast;
  ToastTitle;
  ToastDescription;
  ToastClose;
  ToastAction;
}
// Add useToast hook export;
// export function useToast() {//   return {toast-close=''    {...props}>;
    <X className='h-4 w-4' />;
  </ToastPrimitives && ToastPrimitives.Close>;
))ToastClose && ToastClose.displayName = ToastPrimitives && ToastPrimitives.Close.displayName;const ToastTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof ToastPrimitives && ToastPrimitives.Title>,React && React.ComponentPropsWithoutRef<typeof ToastPrimitives && ToastPrimitives.Title>;
>(({ className, ...props }, ref,) => (<ToastPrimitives&& ToastPrimitives.Title;
//     },//   }// }return (<ToastPrimitives.Root;
import { logInfo } from '@/utils/productionLogger',const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Viewport>,React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>;
>(({ className, ...props }, ref) => (<ToastPrimitives.Viewport;ref={ref}
<<<<<<< HEAD
    className={cn('fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',className;
=======
    className={cn(fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",className;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
    )}
    {...props}
  />;
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(;'
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',;
  {;
    variants: {;
      variant: {;'
        default: 'border bg-background text-foreground',;
        destructive:;'
          'destructive border-destructive bg-destructive text-destructive-foreground',;'
        success: 'border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100',;'
        warning: 'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100',;'
        info: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100'},;
    defaultVariants: {;'
      variant: 'default'});
const Toast = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Root>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &;
    VariantProps<typeof toastVariants>;
>(({ className, variant, ...props }, ref) => {;
  return (;
    <ToastPrimitives.Root;
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />;
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Action>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Action;
    ref={ref}
    className={cn('
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className;
    )}
    {...props}
  />;
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Close>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Close;
    ref={ref}
    className={cn('
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className;
    )}'
    toast-close='';
    {...props}
  >;'
    <X className='h-4 w-4' />;
  </ToastPrimitives.Close>;
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Title>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Title;
    ref={ref}'
    className={cn('text-sm font-semibold', className)}
    {...props}
  />;
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef<;
  React.ElementRef<typeof ToastPrimitives.Description>,;
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>;
>(({ className, ...props }, ref) => (;
  <ToastPrimitives.Description;
    ref={ref}'
    className={cn('text-sm opacity-90', className)}
    {...props}
  />;
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;
export {;
  type ToastProps,;
  type ToastActionElement,;
  ToastProvider,;
  ToastViewport,;
  Toast,;
  ToastTitle,;
  ToastDescription,;
<<<<<<< HEAD
=======
export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
>>>>>>> origin/resolved-merge-conflicts
  ToastClose;
  ToastAction}
;
// Add useToast hook export;
// export function useToast() { return null; }
//       logInfo('Toast:', { data: props });

//     // Accept a loosely typed props object to allow custom fields like `description`;
//     toast: (props: any, ) => {}
//       // Implementation of toast functionality;'
//       log_info ('Toast:', { data: props });
//     },

//   }
// }

//     // Accept a loosely typed props object to allow custom fields like `description`
//     toast: (props: any,) => {
//       // Implementation of toast functionality
//       logInfo('Toast:', { data: props })
//     }
//   }
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
// }
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export {type ToastProps,type ToastActionElement,ToastProvider,ToastViewport,Toast,ToastTitle,ToastDescription,ToastClose;
  ToastAction}// Add useToast hook export;
// export function useToast() {//   return {//     // Accept a loosely typed props object to allow custom fields like `description`;
//     toast: (props: any) => {//       // Implementation of toast functionality;
//       logInfo('Toast:', { data: props })//     }//   }
// }
//   }
// }//     // Accept a loosely typed props object to allow custom fields like `description`;
//     toast: (props: any, ) => {//       // Implementation of toast functionality;
//       log_info ('Toast:', { data: props })//     },//   }
// }
//     }//   }
// }//     // Accept a loosely typed props object to allow custom fields like `description`;
//     toast: (props: any,) => {//       // Implementation of toast functionality;
//       logInfo('Toast:', { data: props })//     }
//   }
// }
// }
=======
// }
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
