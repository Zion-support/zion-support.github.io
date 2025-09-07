/* eslint-disable */
 setIsRefreshing (true);
try {;
  return (<TooltipProvider> <div className="flex items-center gap-1" > <Tooltip> <TooltipTrigger asChild> <Link </Link> </TooltipTrigger> <TooltipContent> {";""
  isAuthenticated ? (<> <p className="text-sm font-medium" >Point Breakdown</p> {";""
  points === 0 && (<p className="text-xs text-muted-foreground" > You haven't earned any points yet. </p>) ";""
}</ul> <p className="text-xs mt-2 text-muted-foreground border-t pt-1" > Click to view full rewards program </p> </>) : (<> <p className="text-sm font-medium" >Zion Rewards Program</p> <p className="text-xs mt-1 text-muted-foreground" > • Sign up: 50 pts<br/> • First purchase: 100 pts<br/> • Community posts: 25 pts each<br/> • Refer friends: 200 pts each </p> <p className="text-xs mt-2 text-muted-foreground border-t pt-1" > Click to learn more and join! </p> </>) ;""
}</TooltipContent> </Tooltip> {";""
  isAuthenticated && (<Tooltip> <TooltipTrigger asChild> <Button variant="ghost" size="sm" onClick={;""
  handleRefresh ";""
}/> </Button> </TooltipTrigger> <TooltipContent> <p className="text-sm" >Refresh points balance</p> </TooltipContent> </Tooltip>) ;
}</div> {;
  !isAuthenticated && (<LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;
}/>) ;'"
}</TooltipProvider>) ;'"'"
}'"'"'"