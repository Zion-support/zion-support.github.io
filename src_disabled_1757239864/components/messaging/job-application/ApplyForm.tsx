
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

export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging($2);
  const { applyToJob } = useJobApplications($2);
  const [message, setMessage] = useState($2);
  const [proposalLink, setProposalLink] = useState($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),
  
  const handleResumeSelected = (resume: ResumeOption) => {,
    setSelectedResume(resume),
    setSelectedResumeId(resume.id)
  },
  
  const handleApply = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message before applying.",
        variant: "destructive",
      }),
      return
    }
    
    try {
      setIsSubmitting($2);
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id,
        message,
        selectedResume && selectedResume.type === 'ai_resume'
          ? selectedResumeId || undefined
          : undefined,
        selectedResume && selectedResume.type === 'custom_upload'
          ? selectedResume.file
          : undefined,
      ),
      
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
      }
      
      // Format message with proposal link if provided
      let fullMessage = $2;
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
      }
      
      // Add info about attached resume if available
      if (selectedResume) {
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`
      }
      
      // Create context data for the conversation
      const contextData = {;
        title: job.title;
        description: job.description;
        attachedResume: selectedResume ? {
          id: selectedResume.id;
          title: selectedResume.title;
          type: selectedResume.type,
        } : null
      },
      
      // Create conversation with the job client
      await createConversation($2);
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id)
      }
      
      toast($2);
      onClose()
    } catch (error) {
      logErrorToProduction($2);
      toast({
        title: "Application failed",
        description: "There was an error sending your application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  },

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

        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application',
          )}

