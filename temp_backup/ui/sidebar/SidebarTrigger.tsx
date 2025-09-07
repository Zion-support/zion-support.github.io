/* eslint-disable */
 interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {;
  className?: string ;
}export function SidebarTrigger ({;
  className, ...props ;
}: SidebarTriggerProps) {;
  const {;
  open, toggleSidebar ;
}= useSidebar ();
return (<Button variant="ghost" size="icon" className= {";""
  cn ("", className) ;
}onClick={;
  toggleSidebar ;"
}{;""
  ...props ";""
}open ? <X className="h-4 w-4"/> : <Menu className="h-4 w-4"/> ";""
}<span className="sr-only">Toggle Sidebar</span> </Button>) ;""
}"""