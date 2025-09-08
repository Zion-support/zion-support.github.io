/* eslint-disable */
 const MenubarMenu = MenubarPrimitive.Menu const MenubarGroup = MenubarPrimitive.Group const MenubarPortal = MenubarPrimitive.Portal const MenubarSub = MenubarPrimitive.Sub const MenubarRadioGroup = MenubarPrimitive.RadioGroup const Menubar = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> > ( ({;
  className, ...props ;
}, ref) => (<MenubarPrimitive.Root) ;
}{;
  ...props ;
}/>) ) Menubar.displayName = MenubarPrimitive.Root.displayName const MenubarTrigger = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Trigger>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> > ( ({;
  className, ...props ;
}, ref) => (<MenubarPrimitive.Trigger) ;
}{;
  ...props ;
}/>) ) MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName const MenubarSubTrigger = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.SubTrigger>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
  inset?: boolean ;
}> ( ({;
  className, inset,  children, ...props ;
}, ref) => (<MenubarPrimitive.SubTrigger) ;
}{;
  ...props ;
}> </MenubarPrimitive.SubTrigger>) ) MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName const MenubarSubContent = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.SubContent>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> > ( ({;
  className, ...props ;
}, ref) => (<MenubarPrimitive.SubContent) ;
}{;
  ...props ;
}/>) ) MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName const MenubarContent = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>) ;
}{;
  ...props ;
}/> </MenubarPrimitive.Portal>) ) MenubarContent.displayName = MenubarPrimitive.Content.displayName const MenubarItem = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
  inset?: boolean ;
}> ( ({;
  className,  inset, ...props ;
}, ref) => (<MenubarPrimitive.Item) ;
}{;
  ...props ;
}/>) ) MenubarItem.displayName = MenubarPrimitive.Item.displayName const MenubarCheckboxItem = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.CheckboxItem>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> > ( ({;
  className, children,  checked, ...props ;
}, ref) => (<MenubarPrimitive.CheckboxItem) ;
}checked= {;
  checked ;
}{;
  ...props ;
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <MenubarPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </MenubarPrimitive.ItemIndicator> </span> {;
  children ;
}</MenubarPrimitive.CheckboxItem>) ) MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName const MenubarRadioItem = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.RadioItem>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> > ( ({;
  className,  children, ...props ;
}, ref) => (<MenubarPrimitive.RadioItem) ;"
}{;""
  ...props ";""
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <MenubarPrimitive.ItemIndicator> <Circle className="h-2 w-2 fill-current" /> </MenubarPrimitive.ItemIndicator> </span> {;
  children ;
}</MenubarPrimitive.RadioItem>) ) MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName const MenubarLabel = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Label>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
  inset?: boolean ;
}> ( ({;
  className,  inset, ...props ;
}, ref) => (<MenubarPrimitive.Label) ;
}{;
  ...props ;
}/>) ) MenubarLabel.displayName = MenubarPrimitive.Label.displayName const MenubarSeparator = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Separator>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> > ( ({;
  className, ...props ;
}, ref) => (<MenubarPrimitive.Separator />) ) MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName const MenubarShortcut = ({;
  className, ...props ;
}: React.HTMLAttributes<HTMLSpanElement>) => {;
  return (<span className= {;
  cn () ;
}{;"
  ...props ;""
}/>) ";""
}MenubarShortcut.displayname = "MenubarShortcut" export {;"
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarLabel, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarPortal, MenubarSubContent, MenubarSubTrigger, MenubarGroup,  MenubarSub, MenubarShortcut ;""
}"""