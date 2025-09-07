/* eslint-disable */
 export const SidebarTrigger = React.forwardRef< React.ElementRef<typeof Button>;
React.ComponentProps<typeof Button> > ( (props, ref) => {;
  const {;
  toggleSidebar ;
}= useSidebar () return (<Button props.onClick?. (event) toggleSidebar () ;
}
}{;
  ...props ;
}> <PanelLeft /> <span className="sr-only" >Toggle Sidebar</span> </Button>) ";""
}) SidebarTrigger.displayName = "SidebarTrigger" """