import * as React from "react";

type RootProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export function AlertDialog({ children }: RootProps) {
  return <div>{children}</div>;
}

type ContentProps = React.HTMLAttributes<HTMLDivElement>;
export const AlertDialogContent = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ className = "z-50 max-w-md rounded-md border bg-white p-4 shadow-lg", children, ...props }, ref) => (
    <div ref={ref} role="alertdialog" className={className} {...props}>
      {children}
    </div>
  )
);
AlertDialogContent.displayName = "AlertDialogContent";

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;
export const AlertDialogHeader = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className = "mb-2", children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
);
AlertDialogHeader.displayName = "AlertDialogHeader";

export const AlertDialogFooter = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className = "mt-4 flex justify-end gap-2", children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
);
AlertDialogFooter.displayName = "AlertDialogFooter";

type TitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className = "text-lg font-semibold", children, ...props }, ref) => (
    <h2 ref={ref} className={className} {...props}>
      {children}
    </h2>
  )
);
AlertDialogTitle.displayName = "AlertDialogTitle";

type DescProps = React.HTMLAttributes<HTMLParagraphElement>;
export const AlertDialogDescription = React.forwardRef<HTMLParagraphElement, DescProps>(
  ({ className = "text-sm text-gray-600", children, ...props }, ref) => (
    <p ref={ref} className={className} {...props}>
      {children}
    </p>
  )
);
AlertDialogDescription.displayName = "AlertDialogDescription";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean };
export const AlertDialogAction = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "bg-blue-600 text-white px-3 py-2 rounded", children, ...props }, ref) => (
    <button ref={ref} type={props.type ?? "button"} className={className} {...props}>
      {children}
    </button>
  )
);
AlertDialogAction.displayName = "AlertDialogAction";

export const AlertDialogCancel = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "px-3 py-2 rounded border", children, ...props }, ref) => (
    <button ref={ref} type={props.type ?? "button"} className={className} {...props}>
      {children}
    </button>
  )
);
AlertDialogCancel.displayName = "AlertDialogCancel";

export const AlertDialogTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, ...props }, ref) => (
    <button ref={ref} type={props.type ?? "button"} className={className} {...props}>
      {children}
    </button>
  )
);
AlertDialogTrigger.displayName = "AlertDialogTrigger";

export default AlertDialog;

