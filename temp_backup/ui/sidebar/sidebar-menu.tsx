/* eslint-disable */
 interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React.ReactNode;
active?: boolean;
href?: string;
target?: string;
badge?: React.ReactNode ;
}const SidebarMenuItem = forwardRef<HTMLButtonElement SidebarMenuItemProps> ( ({;
  icon, active, children, href, target, badge,  className, ...props ;
}, ref) => {;
  if (href) {;
  return (<a href= {;
  href ;
}target= {;
  target ;
}rel= {;
  target === "blank" ? "noopener noreferrer" : undefined ;""
}className= {";""
  cn ("flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent";";""
active && "bg-accent font-medium text-accent-foreground";""
className) ";""
}> <div className="flex items-center gap-2" > {";""
  icon && <span className="text-muted-foreground" > {;
  icon ;
}</span> ;
}<span> {;
  children ;
}</span> </div> {;
  badge && <span> {;
  badge ;
}</span> ;
}</a>) ;
}return (<button) ;
}{;
  ...props ;
}> </div> {;
  badge && <span> {;
  badge ;
}</span> ;
}</button>) ;
});
</div>) ;"
};""
"""