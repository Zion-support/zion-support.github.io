<<<<<<< HEAD

=======
import { useState } from 'react'
import { useRouter } from 'next/router'
import { KanbanBoard } from '@/components/hiring-tracker/KanbanBoard'
import { HiringAnalytics } from '@/components/hiring-tracker/HiringAnalytics'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SEO } from '@/components/SEO'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Briefcase } from 'lucide-react'
function HiringTrackerContent() {

  const router = useRouter()
  const jobId = router.query.jobId as string
  const [activeTab, setActiveTab] = useState<string>('kanban')
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import { useState } from "react",
import { useRouter } from "next/router",
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Briefcase } from 'lucide-react'
<<<<<<< HEAD

  return (
=======
function HiringTrackerContent() {

  const router = useRouter()
  const jobId = router.query.jobId as string
  const [activeTab, setActiveTab] = useState<string>('kanban')
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <>
      <SEO 
        title="Hiring Tracker | Zion AI Marketplace" 
        description="Manage your candidate pipeline in the Zion AI Marketplace." 
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              Hiring Pipeline
            </h1>
<<<<<<< HEAD

=======
            <p className='text-muted-foreground mt-1'>              Track and manage your candidates through the hiring process  const [activeTab, setActiveTab] = useState<string>("kanban")

  return (
    <>
      <SEO
        title="Hiring Tracker | Zion AI Marketplace"
        description="Manage your candidate pipeline in the Zion AI Marketplace."
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              Hiring Pipeline
            </h1>
>>>>>>>             <p className="text-muted-foreground mt-1">
ursor/fix-website-loading-errors-and-merge-6662
  return (
    <>;
      <SEO
        title='Hiring Tracker | Zion AI Marketplace'
        description='Manage your candidate pipeline in the Zion AI Marketplace.'


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <p className="text-muted-foreground mt-1">
>>>>>>>               Track and manage your candidates through the hiring process
            </p>
          </div>
        </div>
<<<<<<< HEAD

          <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

=======
        <Tabs
          defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'
        >
>>>>>>>           <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value='kanban' className='mt-6'>
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          <TabsContent value='analytics' className='mt-6'>            <HiringAnalytics jobId={jobId} />          <TabsList>
ursor/fix-website-loading-errors-and-merge-6662
          <TabsList>
            <TabsTrigger value='kanban'>Kanban Board</TabsTrigger>
            <TabsTrigger value='analytics'>Analytics</TabsTrigger>
          </TabsList>


        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
          <TabsList>

>>>>>>>             <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
>>>>>>>           <TabsContent value="analytics" className="mt-6">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <TabsContent value="analytics" className="mt-6">
>>>>>>>             <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
<<<<<<< HEAD

=======
      <HiringTrackerContent />
    </ProtectedRoute>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState } from "react",;
import { useRouter } from "next/router",;
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",;
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { Briefcase } from 'lucide-react';
function HiringTrackerContent() {;
  const router = useRouter(),;
  const jobId = router.query.jobId as string,;
  const [activeTab, setActiveTab] = useState<string>("kanban");
  return (;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
    <>;
      <SEO
        title="Hiring Tracker | Zion AI Marketplace" 
        description="Manage your candidate pipeline in the Zion AI Marketplace." 
      />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold flex items-center">;
              <Briefcase className="mr-2 h-6 w-6 text-primary" />;
              Hiring Pipeline;
            </h1>;
            <p className="text-muted-foreground mt-1">;
              Track and manage your candidates through the hiring process;
            </p>;
          </div>;
        </div>;

        <Tabs
          defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'>;
          <TabsList>;
            <TabsTrigger value='kanban'>Kanban Board</TabsTrigger>;
            <TabsTrigger value='analytics'>Analytics</TabsTrigger>;
          </TabsList>;

          <TabsContent value='kanban' className='mt-6'>;
            <KanbanBoard jobId={jobId} />;
          </TabsContent>;

          <TabsContent value='analytics' className='mt-6'>            <HiringAnalytics jobId={jobId} />          <TabsList>;
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>;
            <TabsTrigger value="analytics">Analytics</TabsTrigger>;
          </TabsList>;

          <TabsContent value="kanban" className="mt-6">;
            <KanbanBoard jobId={jobId} />;
          </TabsContent>;

          <TabsContent value="analytics" className="mt-6">;
            <HiringAnalytics jobId={jobId} />;
          </TabsContent>;
        </Tabs>;
      </main>;
    </>;
  );
}

export default function HiringTracker() {;
  return (
    <ProtectedRoute>;
      <HiringTrackerContent />;
    </ProtectedRoute>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
