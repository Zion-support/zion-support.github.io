 interface MobileBottomNavProps {
  unreadCount?: number 
}export function MobileBottomNav ({
  unreadCount = 0 
}: MobileBottomNavProps) {
  const location = useLocation ();
const {
  user 
}= useAuth ();
const isAuthenticated = !!user;
const navItems = [ {
  name: "Home";
href: "/";
icon: Home;
matches: (path: string) => path === "/" 
};
{
  name: "Browse";
href: "/talent";
icon: Search;
matches: (path: string) => path.startsWith ("/talent") || path.startsWith ("/categories") || path.startsWith ("/marketplace") 
};
{
  name: "Community";
href: "/community";
icon: MessageCircle;
matches: (path: string) => path.startsWith ("/community") || path.startsWith ("/forum") 
};
{
  name: "Messages";
href: "/messages";
icon: MessageSquare;
matches: (path: string) => path.startsWith ("/messages") || path.startsWith ("/inbox");
badge: unreadCount;
authRequired: true 
};
{
  name: "Dashboard";
href: "/dashboard";
icon: User;
matches: (path: string) => path.startsWith ("/dashboard");
authRequired: true 
}];
return ({
  item.badge > 9 ? '9+' : item.badge 
}</span>) 
}</div> </Link>) ) 
}</div> </nav>) 
}