<<<<<<< HEAD

import * as React from "react"
import { PanelLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
<<<<<<< HEAD

<<<<<<< HEAD
  return (
      ref={ref}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();
return (

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
      }}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
