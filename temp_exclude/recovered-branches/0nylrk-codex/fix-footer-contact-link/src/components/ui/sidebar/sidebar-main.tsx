) 
}ref= {
  ref 
}{
  ...props 
}> {
  props.children 
}</div>) 
}if (isMobile) {
  return (<Sheet open= {
  openMobile 
}onOpenChange= {
  setOpenMobile 
}{
  ...props 
}> <SheetContent 
}side= {
  props.side 
}> </SheetContent> </Sheet>) 
}return (<div > {
  /* This is what handles the sidebar gap on desktop */ 
}<div) 
}{
  ...props 
}> <div data-sidebar="sidebar" className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow" > {
  props.children 
}</div> </div> </div>) 
}) Sidebar.displayName = "Sidebar"
}

export const SidebarRail = React.forwardRef< HTMLButtonElement;
) 
}{
  ...props 
}/>) 
}) SidebarRail.displayName = "SidebarRail"
}

export const SidebarInset = React.forwardRef< HTMLDivElement;
) 
}{
  ...props 
}/>) 
}) SidebarInset.displayName = "SidebarInset" 