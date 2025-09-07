<<<<<<< HEAD

import * as React from "react"
import { PanelLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

export const SidebarTrigger = $2;
=======
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()

  return (

      ref={ref}

      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();

      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
      }
      {...props}

    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )