import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";


const badgeVariants = null;
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
        outline: "text-foreground border-border"
      }
    }
    defaultVariants: {
      variant: "default"
    }

interface HTMLDivElement extends HTMLElement {}
  tagName: "DIV"
)
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

  return (
    <div className={cn (badge_variants ({ variant }), class_name)} {...props} />)
export { Badge, badgeVariants }
