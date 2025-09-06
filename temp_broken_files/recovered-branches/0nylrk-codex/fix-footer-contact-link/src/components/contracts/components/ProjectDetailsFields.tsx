 import {
  FormField;
FormItem;
FormLabel;
FormControl;
FormDescription;
FormMessage interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues> 
}form 
}: ProjectDetailsFieldsProps) {
  return (<> <FormField control= {
  form.control 
}</FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Scope Summary</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> Be specific about what is included and any limitations </FormDescription> <FormMessage /> </FormItem>) 
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> <FormField <FormLabel>End Date (Optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormDescription> Leave empty if the end date is flexible </FormDescription> <FormMessage /> </FormItem>) 
}/> </div> </>) 
}