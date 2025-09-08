/* eslint-disable */
 interface ApplyFormProps {;
  job: Job;
onClose: () => void;
onApplySuccess?: (jobId: string) => Promise<void> ;
}export function ApplyForm ({;
  job,  onClose, onApplySuccess ;
}: ApplyFormProps) {;
  const {;
  createConversation ;
}= useMessaging ();
const {;
  applyToJob ;
}= useJobApplications ();
const [message, setMessage] = useState ();
const [proposalLink, setProposalLink] = useState ('');
const [isSubmitting, setIsSubmitting] = useState (false);
<<<<<<< HEAD
const [activeTab, setActiveTab] = useState<string> ('message');
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);
const [selectedResumeId, setSelectedResumeId] = useState<string | null> (null);
  if (!message.trim () ) {;
  toast ({;'
  return;''
=======
const [activeTab, setActiveTab] = useState<string> ("message");
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);
const [selectedResumeId, setSelectedResumeId] = useState<string | null> (null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const handleApply = async () => {;
  if (!message.trim () ) {;
  toast ({;'
  return;''
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 ';''
>>>>>>> origin/resolved-merge-conflicts
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId || undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined);
if (!applicationSuccess) {;'
}//Format message with proposal link if provided let fullMessage = message;''
if (proposalLink) {';''
  fullMessage += `\n\nHere's a link to my proposal: $ {;
  proposalLink ;'`
}` ;''
}//Add info about attached resume if available if (selectedResume) {';''`
  fullMessage += `\n\nI've attached my resume: $ {;
  selectedResume.title ;`
}` ;
}//Create context data for the conversation const contextData = {;
  title: job.title;
description: job.description;
attachedResume: selectedResume ? {;
  id: selectedResume.id;
title: selectedResume.title;
type: selectedResume.type ;
}: null ;'
};''
fullMessage;';''
'job';
job.id;
contextData);'
//Call onApplySuccess to update job status in the UI onClose () ;''
}catch (error) {';''
  logErrorToProduction ('Failed to send application:', {;
  data: error ;
});
toast ({;
}finally {;
  setIsSubmitting (false) ;
}
};
return (<> <Tabs value= {;
<<<<<<< HEAD
  activeTab ;'
}onValueChange= {;''
  setActiveTab ';''
}className='w-full' > <TabsList className='w-full mb-4 bg-zion-blue-dark/30' > <TabsTrigger value='message' className='flex-1' > resume'className=' flex-1'> Resume </TabsTrigger> </TabsList> <TabsContent value=' message'> <MessageTab message= {;
=======
  activeTab ;"
}onValueChange= {;""
  setActiveTab ";""
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {;
>>>>>>> origin/resolved-merge-conflicts
  message ;
}setMessage= {;
  setMessage ;
}proposalLink= {;
<<<<<<< HEAD
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
=======
  proposalLink ;"
}setProposalLink= {;""
  setProposalLink ";""
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {;
  handleResumeSelected ;"
}selectedResumeId= {;"'"
  selectedResumeId ";'"'"
}/> </TabsContent> </Tabs> <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {'";'"'"
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application') ;'"
}</Button> </div> </>) ;'"'"
}'"'"'"`
>>>>>>> origin/resolved-merge-conflicts
