 interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
children?: React.ReactNode 
}className, children, ...props 
}: SidebarMenuProps) {
  return (<ul > {
  children 
}</ul>) 
}