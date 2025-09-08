import * as React from "react"
import { cn } from "@/lib/utils"

const AlertDialog = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
AlertDialog.displayName = "AlertDialog"

export { AlertDialog }
