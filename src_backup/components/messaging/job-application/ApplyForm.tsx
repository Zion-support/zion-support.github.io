

interface ApplyFormProps {
  job: Job,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>
}

  job: Job
  onClose: () => void
  onApplySuccess?: (jobId: string,) => Promise<void>

import React, { useState } from react';
import { Button } from '@/components/ui/button;
import { Loader2 } from lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;
import { useJobApplications } from @/hooks/useJobApplications';
import { useMessaging } from '@/context/MessagingContext;
import { toast } from @/hooks/use-toast';
import { ResumeSelector, ResumeOption } from '../resume-selector;
import { MessageTab } from ./MessageTab';
import { ResumeTab } from './ResumeTab;
import { Job } from ./types';
import { logErrorToProduction } from '@/utils/productionLogger;

import React, { useState } from react',
import { Button } from @/components/ui/button",
import { Loader2 } from 'lucide-react
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs,
import { useJobApplications } from @/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext,
import { toast } from @/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector,
import { MessageTab } from ./MessageTab",
import { ResumeTab } from "./ResumeTab,
import { Job } from ./types";
import {logErrorToProduction} from @/utils/productionLogger';
interface ApplyFormProps {
  job: Job;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>
origin/cursor/automate-test-improve-and-merge-code-2533
}
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title} and would like to apply. I believe my skills and experience are a great match for this role.`
  );
  const [proposalLink, setProposalLink] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
origin/cursor/automate-test-improve-and-merge-code-2533
  const [activeTab, setActiveTab] = useState<string>(message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),

import React, { useState } from 'react';
import { Button } from @/components/ui/button;
import { Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from @/components/ui/tabs;
import { useJobApplications } from '@/hooks/useJobApplications';
import { useMessaging } from @/context/MessagingContext;
import { toast } from '@/hooks/use-toast';
import { ResumeSelector, ResumeOption } from ../resume-selector;
import { MessageTab } from './MessageTab';
import { ResumeTab } from ./ResumeTab;
import { Job } from './types';
import { logErrorToProduction } from @/utils/productionLogger;

}

export const ApplyForm: React.FC<ApplyFormProps> = ({ job, onClose }) => {
  const [activeTab, setActiveTab] = useState('message');
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [message, setMessage] = useState();
  
  const { applyToJob } = useJobApplications();
  const { sendMessage } = useMessaging();

  const handleSubmit = async () => {
    if (!selectedResume) {
      toast({
        title: 'Resume required',
        description: Please select a resume before applying.,
        variant: 'destructive'});
      return;
    }

  const handleResumeSelected = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full>
        <TabsList className=w-full mb-4 bg-zion-blue-dark/30">
          <TabsTrigger value="message className=flex-1">
            Message
          </TabsTrigger>
          <TabsTrigger value="resume className=flex-1">
            Resume
          </TabsTrigger>
        </TabsList>
            message = {message}
            setMessage = {setMessage}
            proposalLink = {proposalLink}
            setProposalLink = {setProposalLink}
          />
        </TabsContent>

        <TabsContent value="message>
          <MessageTab 
;
      toast({
        title: Application sent",,
  description: `Your application for "${job.title} has been sent.`}),
      onClose();
    } catch (error) {
      logErrorToProduction(Failed to send application:, { data: error }),
      toast({
        title: Application failed",,
  description: "There was an error sending your application. Please try again.;
        variant: destructive";
      });

      setIsSubmitting(false);
    }


            Message;
          </TabsTrigger>;
          <TabsTrigger value=resume" className="flex-1>;
            Resume;
          </TabsTrigger>;
        </TabsList>;



            message={message}
            setMessage={setMessage}
            proposalLink={proposalLink}
            setProposalLink={setProposalLink}

          />
        </TabsContent>
        
        <TabsContent value="resume>
          <ResumeTab 
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} 
          />
        </TabsContent>
      </Tabs>

      <div className=flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
        <Button
          type="button
          variant=outline"
          onClick={onClose}
          className="border-zion-purple/30 text-white
        >
          Cancel
        </Button>
        <Button

        >

          {isSubmitting ? (
            <>
              <Loader2 className=h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}

if (!applicationSuccess) {}//Format message with proposal link if provided let fullMessage = message
if (proposalLink) {
  fullMessage += `\n\nHeres a link to my proposal: $ {
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
fullMessage;
job'
job.id
contextData)
//Call onApplySuccess to update job status in the UI onClose ()
}catch (error) {'
  logErrorToProduction (Failed to send application:, {
  data: error
})
toast ({}finally {
  setIsSubmitting (false)
}
return (<> <Tabs value= {
  activeTab
}onValueChange= {
  setActiveTab "
}className=w-full > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value=message className="flex-1" > resumeclassName= flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message> <MessageTab message= {
  message
}setMessage= {
  setMessage
}proposalLink= {
  proposalLink
}setProposalLink= {
  setProposalLink 
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {
  handleResumeSelected
}selectedResumeId= {
  selectedResumeId 
}/> </TabsContent> </Tabs> <div className= flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {'"
  isSubmitting ? (<> <Loader2 className= h-4 w-4 mr-2 animate-spin /> Submitting... </>) : ('Submit Application)
}</Button> </div> </>)
}"}
        </Button>;
      </div>;
    </>;
  );
}



        </Button>
      </div>
    </div>
  );
}

        </Button>
      </div>
    </>
  );
  if (!message.trim () ) {
  toast ({
  return;


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


