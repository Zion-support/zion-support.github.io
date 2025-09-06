 const Drawer = ({
  shouldScaleBackground = true, ...props 
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (<DrawerPrimitive.Root shouldScaleBackground= {
  shouldScaleBackground 
}{
  ...props 
}/>) Drawer.displayName = "Drawer" const DrawerTrigger = DrawerPrimitive.Trigger const DrawerPortal = DrawerPrimitive.Portal const DrawerClose = DrawerPrimitive.Close const DrawerOverlay = React.forwardRef< React.ElementRef<typeof DrawerPrimitive.Overlay>;
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> > ( ({
  className, ...props 
}, ref) => (<DrawerPrimitive.Overlay />) ) DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName const DrawerContent = React.forwardRef< React.ElementRef<typeof DrawerPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> > ( ({
  className, children, ...props 
}, ref) => (<DrawerPortal> <DrawerOverlay /> <DrawerPrimitive.Content) 
}{
  ...props 
}> </DrawerPrimitive.Content> </DrawerPortal>) ) DrawerContent.displayName = "DrawerContent" const DrawerHeader = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div />) DrawerHeader.displayName = "DrawerHeader" const DrawerFooter = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div />) DrawerFooter.displayName = "DrawerFooter" const DrawerTitle = React.forwardRef< React.ElementRef<typeof DrawerPrimitive.Title>;
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> > ( ({
  className, ...props 
}, ref) => (<DrawerPrimitive.Title) 
}{
  ...props 
}/>) ) DrawerTitle.displayName = DrawerPrimitive.Title.displayName const DrawerDescription = React.forwardRef< React.ElementRef<typeof DrawerPrimitive.Description>;
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> > ( ({
  className, ...props 
}, ref) => (<DrawerPrimitive.Description />) ) DrawerDescription.displayName = DrawerPrimitive.Description.displayName export {
  Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription 
}