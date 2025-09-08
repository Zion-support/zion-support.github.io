

:src/components/ServiceQuoteModal.tsx
import { useState  } from 'react';




import { useState } from react',
import { useState } from 'react,



;
...formData;            startDate: startDate?.toISOString(),endDate: endDate?.toISOString()}
...formData;            startDate: startDate?.toISOString(),endDate: endDate?.toISOString()}


                </Button>;
              )}</div>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
    </Dialog>;
  )}</div>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
    </Dialog>;
  )})if (error) throw error;
//Show success message //Close the modal and reset form onOpenChange (false)setFormData ({';
  description: '';';
email: '';';
budget: BUDGET RANGES[0]?.value || '0-5000';';
timeframe: TIMELINE OPTIONS[0]?.value || 'lt-1month' ;
})setStartDate (new Date () )setEndDate (undefined)';
setCurrentStep ('details')}catch (error) {';
  logErrorToProduction ('Error submitting quote:', {data: error ;
})toast ({}finally {setIsSubmitting (false)}const nextStep = () => {';
  if (currentStep === 'details') setCurrentStep ('timeline')';
else if (currentStep === 'timeline') setCurrentStep ('contact')}const prevStep = () => {';
  if (currentStep === 'timeline') setCurrentStep ('details')';
else if (currentStep === 'contact') setCurrentStep ('timeline')}> <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]" > text-2xl font-semibold text-white"> Request Service Quote </DialogTitle> </DialogHeader> </div> <div className=" space-y-2"> <Label htmlFor=" description"className=" text-white">Project Description</Label> <Textarea required /> </div> <div className=" space-y-2"> <Label htmlFor=" budget"className=" text-white">Estimated Budget</Label> <Select value= {formData.budget ;
}onValueChange= {(value) => setFormData (prev => ({...prev, budget: value ;
}) ) ";
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your budget range"/> </SelectTrigger> </SelectItem>) )}</SelectContent> </Select> </div> </div>)}<Select value= {formData.timeframe ;
}onValueChange= {(value) => setFormData (prev => ({...prev, timeframe: value ;
}) ) ";
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your timeline"/> </SelectTrigger> </SelectItem>) ) ";
}</SelectContent> </Select> </div> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-2"> <Label className=" text-white">Expected Start Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> <div className=" space-y-2"> <Label className=" text-white">Expected End Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/> </PopoverContent> </Popover> </div> </div> </div>) ";
}<Input id=" email"name=" email"type=" email"value= {formData.email ;
}required /> </div> </div>)}</div> </div> </div>) ";
}<Button type=" button"variant=" outline"onClick={prevStep ";
}className=" border-zion-blue-light text-white hover:bg-zion-blue-light"> Previous </Button>)}> Cancel </Button> {'";
  currentStep !== 'contact' ? (<Button type=" button"onClick={nextStep ";
}className=" bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" > Next </Button>) : (<Button </Button>)}</div> </DialogFooter> </form> </DialogContent> </Dialog>)}'";
}
}
origin/cursor/automate-test-improve-and-merge-code-2533
}
            </div>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
    </Dialog>;
:src/components/ServiceQuoteModal.tsx
  )
