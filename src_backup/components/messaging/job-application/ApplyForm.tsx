<<<<<<< HEAD:src/components/messaging/job-application/ApplyForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { Job } from "./types",
import {logErrorToProduction} from '@/utils/productionLogger',
interface ApplyFormProps {
  job: Job,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>
}

export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
  ),
  const [proposalLink, setProposalLink] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),
  
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume),
    setSelectedResumeId(resume.id)
  },
  
  const handleApply = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message before applying.",
        variant: "destructive"
      }),
      return
    }
    
    try {
      setIsSubmitting(true),
      
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id,
        message,
        selectedResume && selectedResume.type === 'ai_resume'
          ? selectedResumeId || undefined
          : undefined,
        selectedResume && selectedResume.type === 'custom_upload'
          ? selectedResume.file
          : undefined
      ),
      
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
import React, { useState } from 'react',;
import { Button } from "@/components/ui/button",;
import { Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { useMessaging } from "@/context/MessagingContext",;
import { toast } from "@/hooks/use-toast",;
import { ResumeSelector, ResumeOption } from "../resume-selector",;
import { MessageTab } from "./MessageTab",;
import { ResumeTab } from "./ResumeTab",;
import { Job } from "./types",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface ApplyFormProps {;
  job: Job,;
  onClose: () => void,;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
;
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {;
  const { createConversation } = useMessaging(),;
  const { applyToJob } = useJobApplications(),;
  const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
  ),;
  const [proposalLink, setProposalLink] = useState(''),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [activeTab, setActiveTab] = useState<string>("message"),;
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),;
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),;
  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume),;
    setSelectedResumeId(resume.id);
  },;
  const handleApply = async () => {;
    if (!message.trim()) {;
      toast({;
        title: "Message required",;
        description: "Please enter a message before applying.",;
        variant: "destructive";
      }),;
      return;
    }
;
    try {;
      setIsSubmitting(true),;
      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(;
        job.id,;
        message,;
        selectedResume && selectedResume.type === 'ai_resume';
          ? selectedResumeId || undefined;
          : undefined,;
        selectedResume && selectedResume.type === 'custom_upload';
          ? selectedResume.file;
          : undefined;
      ),;
      if (!applicationSuccess) {;
        throw new Error("Failed to submit application");
      }
;
      // Format message with proposal link if provided;
      let fullMessage = message,;
      if (proposalLink) {;
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
      }
;
      // Add info about attached resume if available;
      if (selectedResume) {;
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`;
      }
;
      // Create context data for the conversation;
      const contextData = {;
        title: job.title,;
        description: job.description,;
        attachedResume: selectedResume ? {;
          id: selectedResume.id,;
          title: selectedResume.title,;
          type: selectedResume.type;
        } : null;
      },;
      // Create conversation with the job client;
      await createConversation(;
        job.client_id,;
        fullMessage,;
        'job',;
        job.id,;
        contextData;
      ),;
      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job.id);
      }
      
      toast({
        title: "Application sent",
        description: `Your application for "${job.title}" has been sent.`}),
      
      onClose()
    } catch (error) {
      logErrorToProduction('Failed to send application:', { data: error }),
      toast({
        title: "Application failed",
        description: "There was an error sending your application. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  },

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
        
        <TabsContent value="message">
          <MessageTab 
;
      toast({;
        title: "Application sent",;
        description: `Your application for "${job.title}" has been sent.`}),;
      onClose();
    } catch (error) {;
      logErrorToProduction('Failed to send application:', { data: error }),;
      toast({;
        title: "Application failed",;
        description: "There was an error sending your application. Please try again.";
        variant: "destructive";
      });
    } finally {;
=======
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface ApplyFormProps {
  job: Job,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>
}

  job: Job
  onClose: () => void
  onApplySuccess?: (jobId: string,) => Promise<void>

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/messaging/job-application/ApplyForm.tsx
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
  
<<<<<<< HEAD:src/components/messaging/job-application/ApplyForm.tsx
<<<<<<< HEAD
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume),
    setSelectedResumeId(resume.id)
  },
  
  const handleApply = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"
    }
    try {
      setIsSubmitting(true)
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id
        message
        selectedResume && selectedResume.type === 'ai_resume'
          ? selectedResumeId |undefined
          : undefined
        selectedResume && selectedResume.type === 'custom_upload'
          ? selectedResume.file
          : undefined
      )
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
      }
      // Format message with proposal link if provided
      let fullMessage = message
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
      }
      // Add info about attached resume if available
      if (selectedResume) {
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`
      }
      // Create context data for the conversation
      const contextData = {
        title: job.title
        description: job.description
        attachedResume: selectedResume ? {
          id: selectedResume.id
          title: selectedResume.title
          type: selectedResume.type
        } : null
      let full_message = message;}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/messaging/job-application/ApplyForm.tsx

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

<<<<<<< HEAD:src/components/messaging/job-application/ApplyForm.tsx
=======
interface ApplyFormProps {
  job: Job;
  onClose: () => void;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/messaging/job-application/ApplyForm.tsx
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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
<<<<<<< HEAD
    } finally {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    } finally {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      setIsSubmitting(false);
    }
  };
  return (;
    <>;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="w-full mb-4 bg-zion-blue-dark/30">;
          <TabsTrigger value="message" className="flex-1">;
            Message;
          </TabsTrigger>;
          <TabsTrigger value="resume" className="flex-1">;
            Resume;
          </TabsTrigger>;
        </TabsList>;
        <TabsContent value="message">;
<<<<<<< HEAD
          <MessageTab;
<<<<<<< HEAD:src/components/messaging/job-application/ApplyForm.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    setIsSubmitting(true);
    try {
      await applyToJob(job.id, {
        resumeId: selectedResume.id,
        message,
      });

      // Send a message to the job poster
      await sendMessage({
        content: `I'm interested in the ${job.title} position. ${message}`,
        recipientId: job.posterId,
        jobId: job.id,
      });

      toast({
        title: 'Application submitted',
        description: 'Your application has been sent successfully.',
      });
      
      onClose();
    } catch (error) {
      logErrorToProduction('Job application failed', error);
      toast({
        title: 'Application failed',
        description: 'There was an error submitting your application.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Apply to {job.title}</h2>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="message">Message</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
        </TabsList>

        <TabsContent value="message" className="space-y-4">
          <MessageTab

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/messaging/job-application/ApplyForm.tsx
            message={message}
            setMessage={setMessage}
            proposalLink={proposalLink}
            setProposalLink={setProposalLink}
=======

          <MessageTab;            message={message}
            onMessageChange={setMessage}
            job={job}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          />
        </TabsContent>
        
        <TabsContent value="resume">
          <ResumeTab 
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} 
          />
        </TabsContent>
      </Tabs>
<<<<<<< HEAD:src/components/messaging/job-application/ApplyForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
          type="button" 
          onClick={handleApply}
          disabled={isSubmitting}
          className="bg-zion-purple hover:bg-zion-purple-dark text-white"
=======
          onClick={handleSubmit}
          disabled={isSubmitting || !selectedResume}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || !selectedResume}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/messaging/job-application/ApplyForm.tsx
        >
=======
          className="bg-zion-purple hover:bg-zion-purple-dark text-white"        >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
<<<<<<< HEAD:src/components/messaging/job-application/ApplyForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        </Button>;
      </div>;
    </>;
  );
}
;
=======
        </Button>
      </div>
    </div>
  );
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/messaging/job-application/ApplyForm.tsx
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
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId || undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined);
if (!applicationSuccess) {;
  ;
}//Format message with proposal link if provided let fullMessage = message;
if (proposalLink) {';
  fullMessage += `\n\nHere's a link to my proposal: $ {;
  proposalLink ;
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
};
fullMessage;';
'job';
job.id;
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
}'"
<<<<<<< HEAD:src/components/messaging/job-application/ApplyForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/messaging/job-application/ApplyForm.tsx
