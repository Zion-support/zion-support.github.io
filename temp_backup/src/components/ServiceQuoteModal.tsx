/* eslint-disable */
 interface ServiceQuoteModalProps {;
  open: boolean;
onOpenChange: (open: boolean) => void;
service: ProductListing | null ;
}const BUDGET RANGES = [ export function ServiceQuoteModal ({;
  open,  onOpenChange, service ;
}: ServiceQuoteModalProps) {;
  const [formData, setFormData] = useState ({;
  description: '';';''
email: '';';''
budget: BUDGET RANGES[0]?.value || '0-5000';';''
timeframe: TIMELINE OPTIONS[0]?.value || 'lt-1month' ;
});'
const [startDate, setStartDate] = useState<Date | undefined> (new Date () );''
const [endDate, setEndDate] = useState<Date | undefined> (undefined);';''
const [currentStep, setCurrentStep] = useState<'details'| 'timeline'| 'contact'> ('details');
const [isSubmitting, setIsSubmitting] = useState (false);
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
  const {;
  name, value ;
}= e.target;
setFormData (prev => ({;
  ...prev, [name]: value ;
}) ) ;
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {;
  e.preventDefault ();
setIsSubmitting (true);'
//Call Supabase function to process the quote const {;''
  data, error ';''
}= await supabase.functions.invoke ('process-quote', {;
  body: {;
  service: service ? {;
  id: service.id,  title: service.title, category: service.category ;
}: null, quoteDetails: {;
  ...formData,  startDate: startDate?.toISOString (), endDate: endDate?.toISOString () ;
}
else if (currentStep = == 'timeline') setCurrentStep ('contact')}
;
  const prevStep = (';
  if (currentStep === 'timeline') setCurrentStep ('details')';) => {
  return $3;}
}"
else if (currentStep === 'contact') setCurrentStep ('timeline')}> <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]"  /> text-2xl font-semibold text-white"> Request Service Quote </DialogTitle> </DialogHeader> </div> <div className=" space-y-2" /> <Label htmlFor=" description"className=" text-white" />Project Description</Label> <Textarea required /> </div> <div className=" space-y-2" /> <Label htmlFor=" budget"className=" text-white" />Estimated Budget</Label> <Select value= {formData.budget ;}
}onValueChange= {(value) = /> setFormData (prev => ({...prev, budget: value ;}"
}) ) ";"
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white" /> <SelectValue placeholder=" Select your budget range"/> </SelectTrigger> </SelectItem>) )}</SelectContent> </Select> </div> </div>)}<Select value= {formData.timeframe ;}
}onValueChange= {(value) = /> setFormData (prev => ({...prev, timeframe: value ;}"
}) ) ";"
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white" /> <SelectValue placeholder=" Select your timeline"/> </SelectTrigger> </SelectItem>) ) ";"
}</SelectContent> </Select> </div> <div className=" grid grid-cols-2 gap-4" /> <div className=" space-y-2" /> <Label className=" text-white" />Expected Start Date</Label> <Popover /> <PopoverTrigger asChild /> <Button </Button /> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light" /> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> <div className=" space-y-2" /> <Label className=" text-white" />Expected End Date</Label> <Popover /> <PopoverTrigger asChild /> <Button </Button /> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light" /> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> </div> </div>) ";"
}<Input id=" email"name=" email"type=" email"value= {formData.email ;}"
}required /> </div> </div>)}</div> </div> </div>) ";"
}<Button type=" button"variant=" outline"onClick={prevStep ";}"
}className=" border-zion-blue-light text-white hover: bg-zion-blue-light" /> Previous </Button>,"
}> Cancel </Button> {'";}"
  currentStep !== 'contact' ? (<Button type=" button"onClick={nextStep ";}"
}className=" bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple"  /> Next </Button>) : (<Button </Button />)}</div> </DialogFooter> </form> </DialogContent> </Dialog>,"
}'";
}
});
if (error) throw error;'
//Show success message //Close the modal and reset form onOpenChange (false);''
setFormData ({';''
  description: '';';''
email: '';';''
budget: BUDGET RANGES[0]?.value || '0-5000';';''
timeframe: TIMELINE OPTIONS[0]?.value || 'lt-1month' ;
});'
setStartDate (new Date () );''
setEndDate (undefined);';''
setCurrentStep ('details') ;''
}catch (error) {';''
  logErrorToProduction ('Error submitting quote:', {;
  data: error ;
});
toast ({;
}finally {;
  setIsSubmitting (false) ;
}'
};''
const nextStep = () => {';''
  if (currentStep === 'details') setCurrentStep ('timeline');';''
else if (currentStep === 'timeline') setCurrentStep ('contact') ;'
};''
const prevStep = () => {';''
  if (currentStep === 'timeline') setCurrentStep ('details');';''
else if (currentStep === 'contact') setCurrentStep ('timeline') ;
};
return (<Dialog open= {;
  open ;
}onOpenChange= {;
  onOpenChange ;
}> <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]" > text-2xl font-semibold text-white"> Request Service Quote </DialogTitle> </DialogHeader> </div> <div className=" space-y-2"> <Label htmlFor=" description"className=" text-white">Project Description</Label> <Textarea required /> </div> <div className=" space-y-2"> <Label htmlFor=" budget"className=" text-white">Estimated Budget</Label> <Select value= {;
  formData.budget ;
}onValueChange= {;
  (value) => setFormData (prev => ({;"
  ...prev, budget: value ;""
}) ) ";""
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your budget range"/> </SelectTrigger> </SelectItem>) ) ;
}</SelectContent> </Select> </div> </div>) ;
}<Select value= {;
  formData.timeframe ;
}onValueChange= {;
  (value) => setFormData (prev => ({;"
  ...prev, timeframe: value ;""
}) ) ";""
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your timeline"/> </SelectTrigger> </SelectItem>) ) ";""
}</SelectContent> </Select> </div> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-2"> <Label className=" text-white">Expected Start Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> <div className=" space-y-2"> <Label className=" text-white">Expected End Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> </div> </div>) ";""
}<Input id=" email"name=" email"type=" email"value= {;
  formData.email ;"
}required /> </div> </div>) ;""
}</div> </div> </div>) ";""
}<Button type=" button"variant=" outline"onClick={;""
  prevStep ";"'"
}className=" border-zion-blue-light text-white hover:bg-zion-blue-light"> Previous </Button>) ;'"'"
}> Cancel </Button> {'";'"'"
  currentStep !== 'contact' ? (<Button type=" button"onClick={;""
  nextStep ";""
}className=" bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" > Next </Button>) : (<Button </Button>) ;'"
}</div> </DialogFooter> </form> </DialogContent> </Dialog>) ;'"'"
}'"'"'"