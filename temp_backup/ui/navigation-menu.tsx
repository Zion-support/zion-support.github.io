/* eslint-disable */
 const NavigationMenu = React.forwardRef< React.ElementRef<typeof NavigationMenuPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> > ( ({;
  className,  children, ...props ;
}, ref) => (<NavigationMenuPrimitive.Root) ;
}{;
  ...props ;
}> {;
  children ;
}<NavigationMenuViewport /> </NavigationMenuPrimitive.Root>) ) NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName const NavigationMenuList = React.forwardRef< React.ElementRef<typeof NavigationMenuPrimitive.List>;
React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> > ( ({;
  className, ...props ;
}, ref) => (<NavigationMenuPrimitive.List) ;
}{;
  ...props ;
}/>) ) NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName const NavigationMenuItem = NavigationMenuPrimitive.Item) const NavigationMenuTrigger = React.forwardRef< React.ElementRef<typeof NavigationMenuPrimitive.Trigger>;
React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> > ( ({;
  className,  children, ...props ;
}, ref) => (<NavigationMenuPrimitive.Trigger <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 pointer-events-none" aria-hidden="true" /> </NavigationMenuPrimitive.Trigger>) ) NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName const NavigationMenuContent = React.forwardRef< React.ElementRef<typeof NavigationMenuPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> > ( ({;
  className, ...props ;
}, ref) => (<NavigationMenuPrimitive.Content) ;
}{;
  ...props ;
}/>) ) NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName const NavigationMenuLink = NavigationMenuPrimitive.Link const NavigationMenuViewport = React.forwardRef< React.ElementRef<typeof NavigationMenuPrimitive.Viewport>;
React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>) ;
}ref= {;
  ref ;
}{;
  ...props ;
}/> </div>) ) NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName const NavigationMenuIndicator = React.forwardRef< React.ElementRef<typeof NavigationMenuPrimitive.Indicator>;
React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> > ( ({;
  className, ...props ;
}, ref) => (<NavigationMenuPrimitive.Indicator) ;"
}{;""
  ...props ";""
}> <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" /> </NavigationMenuPrimitive.Indicator>) ) NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName export {;"
  navigationMenuTriggerStyle, NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink,  NavigationMenuIndicator, NavigationMenuViewport ;""
}"""