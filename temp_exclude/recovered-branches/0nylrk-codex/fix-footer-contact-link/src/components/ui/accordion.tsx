const Accordion = AccordionPrimitive.Root const AccordionItem = React.forwardRef< React.ElementRef<typeof AccordionPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> > ( ({
  className, ...props 
}, ref) => (<AccordionPrimitive.Item />) ) AccordionItem.displayName = "AccordionItem" const AccordionTrigger = React.forwardRef< React.ElementRef<typeof AccordionPrimitive.Trigger>;
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) 
}{
  ...props 
}> </AccordionPrimitive.Trigger> </AccordionPrimitive.Header>) ) AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName const AccordionContent = React.forwardRef< React.ElementRef<typeof AccordionPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> > ( ({
  className, children, ...props 
}, ref) => (<AccordionPrimitive.Content </AccordionPrimitive.Content>) ) AccordionContent.displayName = AccordionPrimitive.Content.displayName export {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent 
}
