<<<<<<< HEAD:src_backup/components/ui/select.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

=======
import * as React from "react""
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

;
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger;
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
    )}
    {...props}
  >;
    {children}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/ui/select.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
=======
    <SelectPrimitive.Icon asChild>
=======
    <SelectPrimitive.Icon asChild>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
      <ChevronDown className="h-4 w-4 opacity-50" />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
<<<<<<< HEAD:src_backup/components/ui/select.tsx
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

=======
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton;
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
      "flex cursor-default items-center justify-center py-1",
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
    )}
    {...props}
  >"
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
<<<<<<< HEAD:src_backup/components/ui/select.tsx
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

=======
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton;
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      "flex cursor-default items-center justify-center py-1",
=======
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
      "flex cursor-default items-center justify-center py-1",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
    )}
    {...props}
  >"
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
<<<<<<< HEAD:src_backup/components/ui/select.tsx
  SelectPrimitive.ScrollDownButton.displayName

=======
  SelectPrimitive.ScrollDownButton.displayName;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
>(({ className, children, position = "popper", ...props }, ref) => (


=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  <SelectPrimitive.Portal>
<<<<<<< HEAD:src_backup/components/ui/select.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <SelectPrimitive.Content
=======
    <SelectPrimitive.Content;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
      ref={ref}
      className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
=======
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
=======
"
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
        position === "popper" &&"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        className
=======
        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport;
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          "p-1",
          position === "popper" &&
=======
"
          "p-1","
          position === "popper" &&"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
<<<<<<< HEAD
=======
import * as React from &quot;react & quot;
import * as SelectPrimitive from &quot;@radix - ui / react - select & quot;'
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
;
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Trigger>;
>(({ class_name, children, ...props }, ref) => (
  <SelectPrimitive.Trigger;
    ref={ref}
    className={cn (
      &quot;flex h - 10 w - full items - center justify - between rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background placeholder:text - muted - foreground focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 [&>span]:line - clamp - 1&quot;,
      class_name)}
    {...props}
  >;
    {children}
<SelectPrimitive.Icon as_child>;
      <ChevronDown className=&quot;h - 4 w - 4 opacity - 50 & quot; />;
    </SelectPrimitive.Icon>;
  </SelectPrimitive.Trigger>));
SelectTrigger.display_name = SelectPrimitive.Trigger.display_name;
const SelectScrollUpButton = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.ScrollUpButton>;
>(({ class_name, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton;
    ref={ref}
    className={cn (
      &quot;flex cursor - default items - center justify - center py - 1&quot;,
      class_name)}
    {...props}
  >;
    <ChevronUp className=&quot;h - 4 w - 4&quot; />;
  </SelectPrimitive.ScrollUpButton>));
SelectScrollUpButton.display_name = SelectPrimitive.ScrollUpButton.display_name;
const SelectScrollDownButton = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.ScrollDownButton>;
>(({ class_name, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton;
    ref={ref}
    className={cn (
      &quot;flex cursor - default items - center justify - center py - 1&quot;,
      class_name)}
    {...props}
  >;
    <ChevronDown className=&quot;h - 4 w - 4&quot; />;
  </SelectPrimitive.ScrollDownButton>));
SelectScrollDownButton.display_name =;
  SelectPrimitive.ScrollDownButton.display_name;
const SelectContent = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Content>;
>(({ class_name, children, position = &quot;popper & quot;, ...props }, ref) => (
  <SelectPrimitive.Portal>;
    <SelectPrimitive.Content;
      ref={ref}
      className={cn (
        &quot;relative z - 50 max - h-96 min - w-[8rem] overflow - hidden rounded - md border bg - popover text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
        position === &quot;popper & quot; &&;
          &quot;data-[side = bottom]:translate - y-1 data-[side = left]:-translate - x-1 data-[side = right]:translate - x-1 data-[side = top]:-translate - y-1 & quot;,
        class_name)}
      position={position}
      {...props}
    >;
      <SelectScrollUpButton />;
      <SelectPrimitive.Viewport;
        className={cn (
          &quot;p - 1&quot;,
          position === &quot;popper & quot; &&;
            &quot;h-[var (--radix - select - trigger - height)] w - full min - w-[var (--radix - select - trigger - width)]&quot)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      >;
=======
        )}      >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        {children}
      </SelectPrimitive.Viewport>;
      <SelectScrollDownButton />;
    </SelectPrimitive.Content>;
<<<<<<< HEAD
<<<<<<< HEAD
  </SelectPrimitive.Portal>;
));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef<;
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof SelectPrimitive.Label>,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
>(({ className, ...props }, ref) => (;
  <SelectPrimitive.Label;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}


    {...props}
<<<<<<< HEAD
  />;
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef<;
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof SelectPrimitive.Item>,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
>(({ className, children, ...props }, ref) => (;
  <SelectPrimitive.Item;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD:src_backup/components/ui/select.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
=======
    className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      className
=======

      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
    )}
    {...props}
  >"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>"
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
<<<<<<< HEAD:src_backup/components/ui/select.tsx
SelectItem.displayName = SelectPrimitive.Item.displayName

=======
SelectItem.displayName = SelectPrimitive.Item.displayName;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD:src_backup/components/ui/select.tsx
  <SelectPrimitive.Separator
<<<<<<< HEAD
<<<<<<< HEAD
=======
  <SelectPrimitive.Separator;
  />));
SelectLabel.display_name = SelectPrimitive.Label.display_name;
const SelectItem = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Item>;
>(({ class_name, children, ...props }, ref) => (
  <SelectPrimitive.Item;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
    ref={ref}
<<<<<<< HEAD
=======
className={cn (
      &quot;relative flex w - full cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
    ref={ref}
<<<<<<< HEAD:src_backup/components/ui/select.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
    className={cn("-mx-1 my-1 h-px bg-muted", className)}


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    {...props}
<<<<<<< HEAD:src_backup/components/ui/select.tsx
  />;
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
<<<<<<< HEAD
export {;
  Select,;
  SelectGroup,;
  SelectValue,;
  SelectTrigger,;
  SelectContent,;
  SelectLabel,;
  SelectItem,;
=======
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <SelectPrimitive.ItemIndicator>;
        <Check className=&quot;h - 4 w - 4&quot; />;
      </SelectPrimitive.ItemIndicator>;
    </span>;
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>;
  </SelectPrimitive.Item>));
SelectItem.display_name = SelectPrimitive.Item.display_name;
const SelectSeparator = React.forward_ref<;
  React.ElementRef < typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof SelectPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <SelectPrimitive.Separator;
    ref={ref}
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}
    {...props}

  />));
SelectSeparator.display_name = SelectPrimitive.Separator.display_name;
export {}
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
  SelectSeparator;
  SelectScrollUpButton;
  SelectScrollDownButton}
<<<<<<< HEAD
;
=======

<<<<<<< HEAD:src_backup/components/ui/select.tsx
export {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  SelectSeparator;
  SelectScrollUpButton;
  SelectScrollDownButton}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
  placeholder,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          ${className}
        `}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Select;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export {;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/select.tsx
