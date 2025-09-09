import * as React from "react"
import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
Table.displayName = "Table"

export { Table }
;