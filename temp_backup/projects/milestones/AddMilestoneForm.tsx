/* eslint-disable */
 type MilestoneFormValues = z.infer<typeof formSchema>;
const handleAddMilestones = (milestones: GeneratedMilestone[]) => {;
  //If there's only one milestone, submit it directly if (milestones.length === 1) {;
}
}//If there are multiple milestones, submit them one by one <AIMilestoneGenerator scope= {;
  projectScope ;
}startDate= {;
  projectStartDate ;
}endDate= {;
  projectEndDate ;
}projectType= {;
  projectType ;
}onAddMilestones= {;
  handleAddMilestones ;
}onAddMilestone= {;
  handleAddMilestone ;
}/>) ;
}</FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ;
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Due Date (optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button variant="outline" className="w-full pl-3 text-left font-normal" >) : (<span className="text-muted-foreground" > Pick a date </span>) ";""
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) ;""
}/> <FormField <FormItem> <FormLabel>Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";""
}/> </div> <Button type="button" variant="outline" onClick={;
  onCancel ;
}disabled= {;"
  isSubmitting ;""
}> Cancel </Button>) ";""
}<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : ("Add Milestone") ;'"
}</Button> </div> </form> </Form> </div>) ;'"'"
}'"'"'"