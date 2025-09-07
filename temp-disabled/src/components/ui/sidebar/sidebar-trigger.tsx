
:src/components/ui/sidebar/sidebar-trigger.tsx

export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()

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
      }}
      {...props}

:temp-disabled/src/components/ui/sidebar/sidebar-trigger.tsx
import * as React from "react"""
import { PanelLeft } from 'lucide-react
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
</typeof>
  React.ComponentProps<typeof Button>
export const SidebarTrigger = React.forward_ref<;
  React.ElementRef < typeof Button>,
  React.ComponentProps < typeof Button>;
>((props, ref) => {
  const { toggle_sidebar } = use_sidebar ();

  return (
    <Button;

      ref={ref}
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;)
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}

      on_click={(event) => {

      data-sidebar="trigger"""
      variant="ghost"""
      size="icon"""
      className={cn("h-7 w-7", props.className)}"
      onClick={(event) => {

      <PanelLeft />;

      <span className=&quot;sr - only & quot;>Toggle Sidebar</span>;
:src/components/ui/sidebar/sidebar-trigger.tsx
    );"
pr-12325
    </Button>);"

:temp-disabled/src/components/ui/sidebar/sidebar-trigger.tsx
