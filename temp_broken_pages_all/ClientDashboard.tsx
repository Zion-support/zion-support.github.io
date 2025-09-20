<<<<<<< HEAD:temp_broken_pages_all/ClientDashboard.tsx
<<<<<<< HEAD:temp_broken_pages_all/ClientDashboard.tsx
import { useState, useEffect } from "react";,
import { JobsList } from "@/components/jobs/JobsList";,
import { Button } from "@/components/ui/button";,
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";,
import Link from "next/link";
import { JobStatus } from "@/types/jobs";,
import { SEO } from "@/components/SEO";,
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, Kanban, Video } from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";,
import { SuggestedTalents } from "@/components/jobs/SuggestedTalents";,
import { useJobs } from "@/hooks/useJobs";,
import { ClientOnboardingSteps } from "@/components/onboarding/ClientOnboardingSteps";,
import { AdvancedOnboardingSteps } from "@/components/onboarding/AdvancedOnboardingSteps";,
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";,
import { ActiveProjectsCard } from "@/components/projects/ActiveProjectsCard";,
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard";,
import { useIsMobile } from "@/hooks/use-mobile";
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/ClientDashboard.tsx
function ClientDashboardContent() {
  return (
    <>
      <SEO
        title="Client Dashboard | Zion AI Marketplace"
        description="Manage your jobs and talent requests in the Zion AI Marketplace."
      />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Client Dashboard</h1>
          <p className="text-gray-300">
            Manage your projects and track your AI service requests.
          </p>
        </div>
      </main>
    </>
  );
}

export default function ClientDashboard() {
  return (
  return (
  return (
    <ProtectedRoute>
      <ClientDashboardContent />
    </ProtectedRoute>
<<<<<<< HEAD:temp_broken_pages_all/ClientDashboard.tsx
  )
}, [jobs selectedJobId])
return (<> <SEO title="Client Dashboard | Zion AI Marketplace" description="Manage your jobs and talent requests in the Zion AI Marketplace." /> <main className="container mx-auto px-4 py-8"> <div className={
  `flex flex-col $ {
  !isMobile ? 'md:flex-row md:justify-between md:items-center' : ''
}mb-8 gap-4`
}> <div> <h1 className={
  `text-$ {'
  isMobile ? '2xl': '3xl'
}font-bold` "
}>My Jobs</h1> <p className="text-muted-foreground mt-1">Manage your job postings and talent applications</p> </div> <div className={
  `flex gap-2 $ {'
  isMobile ? 'flex-col': ''
}` "
}> <Button variant="outline" asChild className={'
  isMobile ? 'w-full justify-center': '' "
}> <Link href="/hiring-tracker"> <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline </Link> </Button> <Button asChild className={'
  isMobile ? 'w-full justify-center': '' "
}> <Link href="/post-job"> <PlusCircle className="h-4 w-4 mr-2" /> Post New Job </Link> </Button> </div> </div> {
  /* New Onboarding Steps */ "
}<div className="mb-8"> <ClientOnboardingSteps /> {"
  showAdvanced && (<div className="mt-6"> <AdvancedOnboardingSteps /> </div>) "
}</div> <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> </TabsContent> </Tabs> </div> <div> <div className="sticky top-4 space-y-6"> {
  /* Active Projects Card */
}<ActiveProjectsCard /> {
  /* Upcoming Interviews Card */
}<UpcomingInterviewsCard /> {
  /* AI Talent Suggestions */ "
}<div> <h2 className="text-xl font-semibold mb-4 flex items-center"> <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" /> AI Talent Suggestions </h2> {
  selectedJobId ? (<SuggestedTalents jobId= {
  selectedJobId "
}/>) : (<div className="bg-muted/30 border rounded-lg p-6 text-center"> <p className="text-muted-foreground"> Select a job to see AI-matched talent suggestions </p> </div>)
}</div> </div> </div> </div> </main> </>)
}export default function ClientDashboard() {
  return (
  return (
  return (<ProtectedRoute> <ClientDashboardContent /> </ProtectedRoute> '"}
import React from 'react';

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">ClientDashboard</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/ClientDashboard.tsx
=======
  );
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/ClientDashboard.tsx
