/* eslint-disable */
 const RadioGroup = React.forwardRef< React.ElementRef<typeof RadioGroupPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> > ( ({;
  className, ...props ;
}, ref) => {;
  return (<RadioGroupPrimitive.Root />) ;
}) RadioGroup.displayName = RadioGroupPrimitive.Root.displayName const RadioGroupItem = React.forwardRef< React.ElementRef<typeof RadioGroupPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> > ( ({;
  className, ...props ;
}, ref) => {;
  return (<RadioGroupPrimitive.Item ref= {;
  ref ;
}) ;
}{;
  ...props ;
}> <RadioGroupPrimitive.Indicator className="flex items-center justify-center" > <Circle className="h-2.5 w-2.5 fill-current text-current" /> </RadioGroupPrimitive.Indicator> </RadioGroupPrimitive.Item>) ;
}) RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName export {;"
  RadioGroup, RadioGroupItem ;""
}"""