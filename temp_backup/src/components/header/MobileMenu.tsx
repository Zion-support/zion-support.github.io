/* eslint-disable */
 '/messages', //Already marked as authRequired '/dashboard', //Already marked as authRequired //Add any specific sub-routes if necessary ];''
const baseItems = [ {';''
  key: 'home', href: '/',  icon: Home, matches: (path: string) => path === '/' ;'
};''
{';''
  key: 'explore', href: '/talent',  icon: Search, matches: (path: string) => path.startsWith ('/talent') || path.startsWith ('/categories') || path.startsWith ('/marketplace') ;'
};''
{';''
  key: 'community', href: '/community',  icon: MessageCircle, matches: (path: string) => path.startsWith ('/community') || path.startsWith ('/forum') ;
};
> <X className='h-5 w-5' /> </Button> </div> <Link key= {;
  item.name ;
}href= {;
  item.href ;
}aria-label= {;'
  item.name ;''
}className= {';''
  cn ('flex items-center px-6 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',  item.matches (router.pathname) ? 'bg-primary/20 text-primary border-l-4 border-primary' //It's important to call onClose AFTER openLoginModal if the modal might be part of the same parent that controls menu visibility. //Or ensure modal is rendered at a higher level. Given AppHeader structure, this should be okay. ;
}onClose (), //Close mobile menu on any click ;'
}''
}> {';''
  item.badge > 9 ? '9+' : item.badge ;
}</span>) ;
}</div> {;'
  item.name ;''
}</Link>) ) ';'''
}</nav> <div className='mt-6 px-6' > <ModeToggle /> </div> </div>) ;''''
}''''''