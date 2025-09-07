/* eslint-disable */
 const openLoginModal = (returnToPath?: string) => {;
  //The actual returnToPath is set in the window.URL by the child components (ResponsiveNavigation, MobileMenu) //using router.push with shallow:true before this function is called. //This function's main job is just to open the modal. return (<> <header) ;''
}> <div className="container flex h-16 items-center px-4 sm:px-6" > <Logo />) : (<Menu className="block h-6 w-6" aria-hidden="true" />) ";'";'"'"
}</button> </div> <PointsBadge /> <Link href="/auth/login" className="text-sm font-medium text-foreground/70 hover:text-foreground" aria-label= {';';''
  t ('auth.login') ;'
}''
}';''
}> {';';''
  t ('auth.login') ;';''
}</Link> <Link > {';';''"
  t ('auth.signup') ;""
}</Link> </div>) ;";""
}<UserMenu /> </div>) ";";""
}</div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={;";""
  () => setMobileMenuOpen (false) ";";""
}aria-hidden="true" /> <div className="relative bg-background border-t border-border h-auto max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {;
  unreadCount ;
}onClose= {;
  () => setMobileMenuOpen (false) ;
}openLoginModal= {;
  openLoginModal ;
}/> </div> </div>) ;
}{;
  /* Mobile Bottom Navigation */ ;
}{;
  isMobile && <MobileBottomNav unreadCount= {;
  unreadCount ;
}/> ;
}<LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;'"
  setLoginOpen ;'"'"
}/> </>) ;'";'"'"
}'"'"'"'"