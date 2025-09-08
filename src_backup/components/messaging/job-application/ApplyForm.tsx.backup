<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useJobApplications } from '@/hooks/useJobApplications';
import { useMessaging } from '@/context/MessagingContext';
import { toast } from '@/hooks/use-toast';
import { ResumeSelector, ResumeOption } from '../resume-selector';
import { MessageTab } from './MessageTab';
import { ResumeTab } from './ResumeTab';
import { Job } from './types';
import { logErrorToProduction } from '@/utils/productionLogger';
<<<<<<< HEAD

import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Loader2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext",
import { toast } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { MessageTab } from "./MessageTab",
import { ResumeTab } from "./ResumeTab",
import { Job } from "./types";
import {logErrorToProduction} from '@/utils/productionLogger';
=======
import React, { useState } from 'react;
import { Button } from @/components/ui/button';
import { Loader2 } from 'lucide-react;
import { Tabs, TabsContent, TabsList, TabsTrigger } from @/components/ui/tabs';
import { useJobApplications } from '@/hooks/useJobApplications;
import { useMessaging } from @/context/MessagingContext';
import { toast } from '@/hooks/use-toast;
import { ResumeSelector, ResumeOption } from ../resume-selector';
import { MessageTab } from './MessageTab;
import { ResumeTab } from ./ResumeTab';
import { Job } from './types;
import { logErrorToProduction } from @/utils/productionLogger';

import React, { useState } from 'react,
import { Button } from "@/components/ui/button,
import { Loader2 } from lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from @/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications,
import { useMessaging } from @/context/MessagingContext",
import { toast } from "@/hooks/use-toast,
import { ResumeSelector, ResumeOption } from ../resume-selector",
import { MessageTab } from "./MessageTab,
import { ResumeTab } from ./ResumeTab",
import { Job } from "./types;
import {logErrorToProduction} from '@/utils/productionLogger;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ApplyFormProps {
  job: Job,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>
}

  job: Job
  onClose: () => void
  onApplySuccess?: (jobId: string,) => Promise<void>

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useJobApplications } from '@/hooks/useJobApplications';
import { useMessaging } from '@/context/MessagingContext';
import { toast } from '@/hooks/use-toast';
import { ResumeSelector, ResumeOption } from '../resume-selector';
import { MessageTab } from './MessageTab';
import { ResumeTab } from './ResumeTab';
import { Job } from './types';
import { logErrorToProduction } from '@/utils/productionLogger';

import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Loader2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext",
import { toast } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { MessageTab } from "./MessageTab",
import { ResumeTab } from "./ResumeTab",
import { Job } from "./types";
import {logErrorToProduction} from '@/utils/productionLogger';
interface ApplyFormProps {
  job: Job;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>
origin/cursor/automate-test-improve-and-merge-code-2533
}
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
  );
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
origin/cursor/automate-test-improve-and-merge-code-2533
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useJobApplications } from '@/hooks/useJobApplications';
import { useMessaging } from '@/context/MessagingContext';
import { toast } from '@/hooks/use-toast';
import { ResumeSelector, ResumeOption } from '../resume-selector';
import { MessageTab } from './MessageTab';
import { ResumeTab } from './ResumeTab';
import { Job } from './types';
import { logErrorToProduction } from '@/utils/productionLogger';

}

export const ApplyForm: React.FC<ApplyFormProps> = ({ job, onClose }) => {
  const [activeTab, setActiveTab] = useState('message');
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { applyToJob } = useJobApplications();
  const { sendMessage } = useMessaging();

  const handleSubmit = async () => {
    if (!selectedResume) {
      toast({
        title: 'Resume required',
        description: 'Please select a resume before applying.',
        variant: 'destructive',
      });
      return;
    }

  const handleResumeSelected = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full mb-4 bg-zion-blue-dark/30">
          <TabsTrigger value="message" className="flex-1">
            Message
          </TabsTrigger>
          <TabsTrigger value="resume" className="flex-1">
            Resume
          </TabsTrigger>
        </TabsList>
            message = {message,}
            setMessage = {setMessage,}
            proposalLink = {proposalLink,}
            setProposalLink = {setProposalLink,}
          />
        </TabsContent>

        <TabsContent value="message">
          <MessageTab 
;
      toast({;
        title: "Application sent",,
  description: `Your application for "${job.title}" has been sent.`}),;
      onClose();
    } catch (error) {;
      logErrorToProduction('Failed to send application:', { data: error }),;
      toast({;
        title: "Application failed",,
  description: "There was an error sending your application. Please try again.";
        variant: "destructive";
      });

      setIsSubmitting(false);
    }
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {setIsSubmitting(true)// First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(job.id;
        message;
        selectedResume && selectedResume.type === 'ai_resume';
          ? selectedResumeId |undefined;
          : undefined;
        selectedResume && selectedResume.type === 'custom_upload';
          ? selectedResume.file;
          : undefined;
      )if (!applicationSuccess) {throw new Error("Failed to submit application")}
      // Format message with proposal link if provided;
      let fullMessage = message;
      if (proposalLink) {fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
      }
      // Add info about attached resume if available;
      if (selectedResume) {fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`;
      }
      // Create context data for the conversation;
      const contextData = {title: job.title;
        description: job.description;
        attachedResume: selectedResume ? {id: selectedResume.id;
          title: selectedResume.title;
          type: selectedResume.type;
        } : null;
      let full_message  = message;let fullMessage  = message;import { Loader2 } from 'lucide-react'import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
interface ApplyFormProps  {job: Job,onClose: () => void,onApplySuccess?: (jobId: string,) => Promise<void>;interface ApplyFormProps  {job: Job;
  onClose: () => void;}export const ApplyForm: React.FC<ApplyFormProps> = ({ job, onClose }) => {const [activeTab, setActiveTab] = useState('message')const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null)const [message, setMessage] = useState('')const [isSubmitting, setIsSubmitting]  = useState(false)const { applyToJob } = useJobApplications()const { sendMessage }  = useMessaging()const handleSubmit = async () => {if (!selectedResume) {toast({title: 'Resume required',description: 'Please select a resume before applying.',variant: 'destructive'})return;
    }const handleResumeSelected  = null;return (<>;
<<<<<<< HEAD
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="w-full mb-4 bg-zion-blue-dark/30">;
          <TabsTrigger value="message" className="flex-1">;
=======
      <Tabs value={activeTab} onValueChange={setActiveTab} className=w-full">;
        <TabsList className="w-full mb-4 bg-zion-blue-dark/30>;
          <TabsTrigger value=message" className="flex-1>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  };
  return (;
    <>;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="w-full mb-4 bg-zion-blue-dark/30">;
          <TabsTrigger value="message" className="flex-1">;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Message;
          </TabsTrigger>;
          <TabsTrigger value="resume" className="flex-1">;
            Resume;
          </TabsTrigger>;
        </TabsList>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <TabsContent value="message">;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            message = {message}
            setMessage = {setMessage}
            proposalLink = {proposalLink}
            setProposalLink = {setProposalLink}
          />;
        </TabsContent>;
        <TabsContent value="message">;
            message={message}
            onMessageChange={setMessage}
            job={job}
          />;
        </TabsContent>;
        <TabsContent value="resume" className="space-y-4">;
          <ResumeTab;
            selectedResume={selectedResume}
            onResumeSelect={setSelectedResume}
<<<<<<< HEAD
=======
=======
        <TabsContent value="message">;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

            message={message}
            setMessage={setMessage}
            proposalLink={proposalLink}
            setProposalLink={setProposalLink}

          />
        </TabsContent>
        
        <TabsContent value="resume">
          <ResumeTab 
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} 
          />
        </TabsContent>
      </Tabs>

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="border-zion-purple/30 text-white"
        >
          Cancel
        </Button>
        <Button

        >

          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}

if (!applicationSuccess) {
}//Format message with proposal link if provided let fullMessage = message
if (proposalLink) {'
  fullMessage += `\n\nHere's a link to my proposal: $ {
  proposalLink
}`
}//Add info about attached resume if available if (selectedResume) {'
  fullMessage += `\n\nI've attached my resume: $ {
  selectedResume.title
}`
}//Create context data for the conversation const contextData = {
  title: job.title
description: job.description
attachedResume: selectedResume ? {
  id: selectedResume.id
title: selectedResume.title
type: selectedResume.type
}: null
}
fullMessage;'
'job'
job.id
contextData)
//Call onApplySuccess to update job status in the UI onClose ()
}catch (error) {'
  logErrorToProduction ('Failed to send application:', {
  data: error
})
toast ({
}finally {
  setIsSubmitting (false)
}
return (<> <Tabs value= {
  activeTab
}onValueChange= {
  setActiveTab "
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {
  message
}setMessage= {
  setMessage
}proposalLink= {
  proposalLink
}setProposalLink= {
  setProposalLink "
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {
  handleResumeSelected
}selectedResumeId= {
  selectedResumeId "
}/> </TabsContent> </Tabs> <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {'"
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application')
}</Button> </div> </>)
}'"}
        </Button>;
      </div>;
    </>;
  );
<<<<<<< HEAD
};
=======
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
>>>>>>> origin/chore/fix-lint-and-merge
=======
;
=======
<<<<<<< HEAD
=======
;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </Button>
      </div>
    </div>
  );
};

        </Button>
      </div>
    </>
  );
  if (!message.trim () ) {;
  toast ({;
  return;
<<<<<<< HEAD


=======
<<<<<<< HEAD
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId || undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined);
if (!applicationSuccess) {;
  ;
}//Format message with proposal link if provided let fullMessage = message;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId || undefined : undefined, selectedResume && selectedResume.type === custom upload? selectedResume.file : undefined);
if (!applicationSuccess) {}//Format message with proposal link if provided let fullMessage = message;
>>>>>>> origin/resolved-merge-conflicts
          />;
        </TabsContent>;
      </Tabs>;
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;
        <Button;
          type="button";
          variant="outline";
          onClick={onClose}
          className="border-zion-purple/30 text-white";
        >;
          Cancel;
        </Button>;
        <Button;
          className="bg-zion-purple hover:bg-zion-purple-dark text-white";
      <div className="flex justify-end space-x-2">;
        <Button variant="outline" onClick={onClose}>;
          Cancel;
        </Button>;
        <Button;
          onClick={handleSubmit}
          disabled={isSubmitting || !selectedResume}>;
          {isSubmitting ? (<>;
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
              Submitting...;
            </>;
          ) : ('Submit Application';
          )}if (!applicationSuccess) {}//Format message with proposal link if provided let fullMessage = message;
if (proposalLink) {';
  fullMessage += `\n\nHere's a link to my proposal: $ {proposalLink;
}`;
}//Add info about attached resume if available if (selectedResume) {';
  fullMessage += `\n\nI've attached my resume: $ {selectedResume.title;
}`;
}//Create context data for the conversation const contextData = {title: job.title;
description: job.description;
attachedResume: selectedResume ? {id: selectedResume.id;
title: selectedResume.title;
type: selectedResume.type;
}: null;
}
fullMessage;';
'job';
job.id;
contextData)//Call onApplySuccess to update job status in the UI onClose ()}catch (error) {';
  logErrorToProduction ('Failed to send application:', {data: error;
})toast ({}finally {setIsSubmitting (false)}
return (<> <Tabs value= {activeTab;
}onValueChange= {setActiveTab ";
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {message;
}setMessage= {setMessage;
}proposalLink= {proposalLink;
}setProposalLink= {setProposalLink ";
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {handleResumeSelected;
}selectedResumeId= {selectedResumeId ";
}/> </TabsContent> </Tabs> <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {'";
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application') ;
<<<<<<< HEAD
=======
  isSubmitting ? (<> <Loader2 className= h-4 w-4 mr-2 animate-spin /> Submitting... </>) : ('Submit Application) ;
>>>>>>> origin/resolved-merge-conflicts
}</Button> </div> </>) ;
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application')}</Button> </div> </>)}'"}
        </Button>;
      </div>;
    </>;
  )}</Button>;
      </div>;
    </div>;
  )}</Button>;
      </div>;
    </>;
  )if (!message.trim () ) {toast ({return;
<<<<<<< HEAD
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId || undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined)if (!applicationSuccess) {}//Format message with proposal link if provided let fullMessage = message;
if (proposalLink) {';
  fullMessage += `\n\nHere's a link to my proposal: $ {proposalLink ;
=======
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === ai resume? selectedResumeId || undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined)if (!applicationSuccess) {}//Format message with proposal link if provided let fullMessage = message;
if (proposalLink) {;
  fullMessage += `\n\nHeres a link to my proposal: $ {proposalLink ;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId || undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined);
if (!applicationSuccess) {;
  ;
}//Format message with proposal link if provided let fullMessage = message;
if (proposalLink) {';
  fullMessage += `\n\nHere's a link to my proposal: $ {;
  proposalLink ;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
}` ;
}//Add info about attached resume if available if (selectedResume) {';
  fullMessage += `\n\nI've attached my resume: $ {;
  selectedResume.title ;
}` ;
}//Create context data for the conversation const contextData = {;
  title: job.title;
description: job.description;
attachedResume: selectedResume ? {;
  id: selectedResume.id;
title: selectedResume.title;
type: selectedResume.type ;
}: null ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
}fullMessage;';
'job';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
fullMessage;';
'job';
job.id;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}fullMessage;;
job';
>>>>>>> origin/resolved-merge-conflicts
job.id;
contextData)//Call onApplySuccess to update job status in the UI onClose ()}catch (error) {';
  logErrorToProduction ('Failed to send application:', {data: error ;
})toast ({}finally {setIsSubmitting (false)}return (<> <Tabs value= {activeTab ;
}onValueChange= {setActiveTab ";
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {message ;
}setMessage= {setMessage ;
}proposalLink= {proposalLink ;
}setProposalLink= {setProposalLink ";
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {handleResumeSelected ;
}selectedResumeId= {selectedResumeId ";
}/> </TabsContent> </Tabs> <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {'";
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application')}</Button> </div> </>)}'";
}'"
=======
};
fullMessage;';
'job';
job.id;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
contextData);
//Call onApplySuccess to update job status in the UI onClose () ;
}catch (error) {';
  logErrorToProduction ('Failed to send application:', {;
  data: error ;
});
toast ({;
  ;
}finally {;
  setIsSubmitting (false) ;

};
return (<> <Tabs value= {;
  activeTab ;
}onValueChange= {;
  setActiveTab ";
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {;
  message ;
}setMessage= {;
  setMessage ;
}proposalLink= {;
  proposalLink ;
}setProposalLink= {;
  setProposalLink ";
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {;
  handleResumeSelected ;
}selectedResumeId= {;
  selectedResumeId ";
}/> </TabsContent> </Tabs> <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {'";
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application') ;
}</Button> </div> </>) ;
<<<<<<< HEAD
}'"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
}'"
=======
}'"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
