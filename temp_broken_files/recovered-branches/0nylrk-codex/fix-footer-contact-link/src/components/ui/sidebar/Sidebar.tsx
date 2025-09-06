 interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
children?: React.ReactNode 
}className, children, ...props 
}: SidebarProps) {
  return (<div className= {
  cn () 
}{
  ...props 
}> {
  children 
}</div>) 
}