/* eslint-disable */
 interface TimelineStepProps {;
  formData: QuoteFormData;
updateFormData: (data: Partial<QuoteFormData>) => void ;
}export function TimelineStep ({;
  formData, updateFormData ;
}: TimelineStepProps) {;
  return (<div className="space-y-6" > text-xl font-semibold text-white mb-4">When do you need this?</h3> <div className=" space-y-4"> <div className=" flex items-center space-x-4"> <div className= {;""
  `flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors $ {";""
  > <h4 className=" font-medium text-white">Fixed Dates</h4> <p className=" text-sm text-zion-slate-light">I have specific start and end dates</p> </div> <div > <h4 className=" font-medium text-white">Flexible Timeline</h4> <p className=" text-sm text-zion-slate-light">I'm flexible on the timing</p> </div> </div> <div> <Label className=" block mb-2 text-zion-slate-light">Start Date</Label> <Popover> <PopoverTrigger asChild> <Button variant=" outline"className= {";""
  cn (</Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border border-zion-blue-light"align=" start"> <Calendar initialFocus className=" p-3 pointer-events-auto"/> </PopoverContent> </Popover> </div> <div> <Label className=" block mb-2 text-zion-slate-light">End Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border border-zion-blue-light"align=" start" > <Calendar /> </PopoverContent> </Popover> </div> </div>) ;'"
}</div> </div> </div>) ;'"'"
}'"'"'"`