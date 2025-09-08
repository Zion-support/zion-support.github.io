/* eslint-disable */
 ? 'Item has been removed from your wishlist' : 'Item has been added to your wishlist' ;
}) ;
};
cn ('absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors', className) ;
}onClick={;'
  handleClick ;''
}aria-label= {';''
  active ? 'Remove from favorites' : 'Save to favorites' ;''
}> <Heart className= {';''
  cn ('h-4 w-4 transition-transform duration-200', active ? 'fill-red-500 text-red-500 scale-110' : 'text-zion-slate') ;
}/> </button> </TooltipTrigger> {;
  !isAuthenticated && <TooltipContent>Login required</TooltipContent> ;
}</Tooltip> </TooltipProvider> <LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;''
}/> </>) ;''''
}''''''