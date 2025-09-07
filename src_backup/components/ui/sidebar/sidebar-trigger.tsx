export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
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