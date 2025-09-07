/* eslint-disable */
 if (!user) return null;
return (<DropdownMenu> <DropdownMenuTrigger asChild data-testid="avatar-menu-trigger" > <button className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" aria-label="Open user menu" >) : (<AvatarFallback> {;
  initials ;
}</AvatarFallback>) ;
}</Avatar> </button> </DropdownMenuTrigger> {;"
  user.email ;""
}</p>) ";""
}</div> </DropdownMenuLabel> <DropdownMenuSeparator /> <DropdownMenuItem asChild> <Link href="/profile" className="flex items-center" > <UserIcon className="mr-2 h-4 w-4" /> <span>Profile</span> </Link> </DropdownMenuItem> <DropdownMenuItem asChild> <Link href="/orders" className="flex items-center" > <Package className="mr-2 h-4 w-4" /> <span>Orders</span> </Link> </DropdownMenuItem> <DropdownMenuSeparator /> <span>Logout</span> </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) ;
};"
export default AvatarMenu;""
"""