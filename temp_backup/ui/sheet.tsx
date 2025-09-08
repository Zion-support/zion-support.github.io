/* eslint-disable */
 const Sheet = SheetPrimitive.Root const SheetTrigger = SheetPrimitive.Trigger const SheetClose = SheetPrimitive.Close const SheetPortal = SheetPrimitive.Portal const SheetOverlay = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Overlay>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> > ( ({;
  className, ...props ;
}, ref) => (<SheetPrimitive.Overlay) ;
}{;
  ...props ;
}ref= {;
  ref ;
}/>) ) SheetOverlay.displayName = SheetPrimitive.Overlay.displayName) interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>;
VariantProps<typeof sheetVariants> {;
}const SheetContent = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Content>;
SheetContentProps <SheetPortal> <SheetOverlay /> <SheetPrimitive.Content ref= {;
  ref ;
}className= {;
  cn (sheetVariants ({;
  side ;
}), className) ;
}{;
  ...props ;
}> </SheetPrimitive.Close> </SheetPrimitive.Content> </SheetPortal>) ) SheetContent.displayName = SheetPrimitive.Content.displayName const SheetHeader = ({;
  className, ...props ;
}: React.HTMLAttributes<HTMLDivElement>) => (<div) ;
}{;
  ...props ;
}/>) SheetHeader.displayName = "SheetHeader" const SheetFooter = ({;
  className, ...props ;
}: React.HTMLAttributes<HTMLDivElement>) => (<div) ;"
}{;""
  ...props ";""
}/>) SheetFooter.displayName = "SheetFooter" const SheetTitle = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Title>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> > ( ({;
  className, ...props ;
}, ref) => (<SheetPrimitive.Title />) ) SheetTitle.displayName = SheetPrimitive.Title.displayName const SheetDescription = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Description>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> > ( ({;
  className, ...props ;
}, ref) => (<SheetPrimitive.Description />) ) SheetDescription.displayName = SheetPrimitive.Description.displayName export {;"
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal,  SheetTitle, SheetTrigger ;""
}"""