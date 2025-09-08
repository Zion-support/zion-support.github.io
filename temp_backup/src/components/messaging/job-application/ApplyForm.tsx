const [activeTab, setActiveTab] = useState<string> ('message');
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);
const [selectedResumeId, setSelectedResumeId] = useState<string | null> (null);
  if (!message.trim () ) {;
  toast ({;'
  return;''
  activeTab ;'
}onValueChange= {;''
  setActiveTab ';''
}className='w-full' > <TabsList className='w-full mb-4 bg-zion-blue-dark/30' > <TabsTrigger value='message' className='flex-1' > resume'className=' flex-1'> Resume </TabsTrigger> </TabsList> <TabsContent value=' message'> <MessageTab message= {;
  proposalLink ;'
}setProposalLink= {;''
  setProposalLink ';''
}/> </TabsContent> <TabsContent value=' resume'> <ResumeTab onResumeSelected= {;
  handleResumeSelected ;'
}selectedResumeId= {;'''
  selectedResumeId ';''''
}/> </TabsContent> </Tabs> <div className=' flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4'> <Button > Cancel </Button> <Button > {'';''''
  isSubmitting ? (<> <Loader2 className=' h-4 w-4 mr-2 animate-spin' /> Submitting... </>) : ('Submit Application') ;''
}</Button> </div> </>) ;''''
}''''''`
