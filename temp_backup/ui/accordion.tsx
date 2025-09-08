/* eslint-disable */
 const Accordion = AccordionPrimitive.Root const AccordionItem = React.forwardRef< ElementRef<typeof AccordionPrimitive.Item>;
ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> > ( ({;
  className, ...props ;
}, ref) => (<AccordionPrimitive.Item />) ) AccordionItem.displayName = "AccordionItem" const AccordionTrigger = React.forwardRef< ElementRef<typeof AccordionPrimitive.Trigger>;
ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) ;
}{;
  ...props ;
}> </AccordionPrimitive.Trigger> </AccordionPrimitive.Header>) ) AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName const AccordionContent = React.forwardRef< ElementRef<typeof AccordionPrimitive.Content>;
ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> > ( ({;
  className,  children, ...props ;
}, ref) => (<AccordionPrimitive.Content </AccordionPrimitive.Content>) ) AccordionContent.displayName = AccordionPrimitive.Content.displayName export {;"
  Accordion, AccordionItem,  AccordionTrigger, AccordionContent ;""
}"""