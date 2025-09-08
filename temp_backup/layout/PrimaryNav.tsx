/* eslint-disable */
 ;
}
};
return (<> <header className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header" > <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap" > <Logo /> ;
}setQuery ('');
//Track analytics event ;
}
}
}searchSuggestions= {;
  suggestions ;
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link onClick={;'
  (e) => {;''"
  > {';'"'"
  t ('auth.login') ";'"'"
}</Link> <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {';''
  t ('auth.signup') ;
}</Link> </>) ;
}{;"
  isLoggedIn && <UserMenu /> ;""
}</div> </div> <ModeToggle /> <LanguageSelector /> {";""
  !isLoggedIn && (<Link href="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={;
  (e) => {;
  e.preventDefault ();'
setLoginOpen (true) ;''
}';''
}t ('auth.login') ;
}</Link>) ;
}{;
  isLoggedIn && <UserMenu /> ;"
}</div> {;""
  /* Mobile menu button */ ";""
}<button) : (<Menu className="h-6 w-6" />) ";""
}</button> </div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={;""
  () => setMobileMenuOpen (false) ";""
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {;
  unreadCount ;
}onClose= {;
  () => setMobileMenuOpen (false) ;
}openLoginModal= {;
  (returnToPath) => setLoginOpen (true) ;
}/> </div> </div>) ;
}{;
  isMobile && <MobileBottomNav unreadCount= {;
  unreadCount ;
}/> ;
}<LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;'"
}/> </>) ;'"'"
}'"'"'"