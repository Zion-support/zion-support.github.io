<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",
import { useRouter } from "next/router",
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Briefcase } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
function HiringTrackerContent() {

  const router = useRouter()
  const jobId = router.query.jobId as string
  const [activeTab, setActiveTab] = useState<string>('kanban')
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

function HiringTrackerContent() {
  const router = useRouter(),
  const jobId = router.query.jobId as string,
  const [activeTab, setActiveTab] = useState<string>("kanban"),

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             <p className="text-muted-foreground mt-1">
ursor/fix-website-loading-errors-and-merge-6662
  return (
=======
return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    <>;
      <SEO
        title='Hiring Tracker | Zion AI Marketplace'
        description='Manage your candidate pipeline in the Zion AI Marketplace.'


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <p className="text-muted-foreground mt-1">
>>>>>>>               Track and manage your candidates through the hiring process
            </p>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

          <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Tabs
          defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'
        >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           <TabsList>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
<<<<<<< HEAD
          <TabsList>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value='kanban' className='mt-6'>
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          <TabsContent value='analytics' className='mt-6'>            <HiringAnalytics jobId={jobId} />          <TabsList>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <TabsList>
            <TabsTrigger value='kanban'>Kanban Board</TabsTrigger>
            <TabsTrigger value='analytics'>Analytics</TabsTrigger>
          </TabsList>


        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
          <TabsList>

>>>>>>>             <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
=======
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           <TabsContent value="analytics" className="mt-6">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <TabsContent value="analytics" className="mt-6">
>>>>>>>             <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export default function HiringTracker() {
  return (
    <ProtectedRoute>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <HiringTrackerContent />
    </ProtectedRoute>
<<<<<<< HEAD
=======


      />;
      <main className='container mx-auto px-4 py-8'>;
        <div className='flex justify-between items-center mb-8'>;
          <div>;
            <h1 className='text-3xl font-bold flex items-center'>;
              <Briefcase className='mr-2 h-6 w-6 text-primary' />;
              Hiring Pipeline;
            </h1>;
            <p className='text-muted-foreground mt-1'>              Track and manage your candidates through the hiring process  const [activeTab, setActiveTab] = useState<string>("kanban");

  return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <HiringTrackerContent />;
    </ProtectedRoute>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    <>;
      <SEO;
        title="Hiring Tracker | Zion AI Marketplace";
        description="Manage your candidate pipeline in the Zion AI Marketplace.";
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
        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">;
          <TabsList>;
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
;
export default function HiringTracker() {;
  return (;
    <ProtectedRoute>;
      <HiringTrackerContent />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  );
}

import { useState } from 'react';
import { use_router } from 'next / router';
import { KanbanBoard } from '@/components / hiring - tracker / KanbanBoard';
import { HiringAnalytics } from '@/components / hiring - tracker / HiringAnalytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { Briefcase } from 'lucide-react';
/**
 * HiringTrackerContent - Function description
 */
function HiringTrackerContent() {
  const router = use_router ();
  const job_id = router.query.job_id as string;
  const [active_tab, setActiveTab] = useState < string>('kanban');
  return (
    <>;
      <SEO;
        title='Hiring Tracker | Zion AI Marketplace';
        description='Manage your candidate pipeline in the Zion AI Marketplace.';
      />;
      <main className='container mx - auto px - 4 py - 8'>;
        <div className='flex justify - between items - center mb - 8'>;
          <div>;
            <h1 className='text - 3xl font - bold flex items - center'>;
              <Briefcase className='mr - 2 h - 6 w - 6 text - primary' />;
              Hiring Pipeline;
            </h1>;
            <p className='text - muted - foreground mt - 1'>              Track and manage your candidates through the hiring process  const [active_tab, setActiveTab] = useState < string>("kanban");
  return (
    <>;
      <SEO;
        title="Hiring Tracker | Zion AI Marketplace";
        description="Manage your candidate pipeline in the Zion AI Marketplace.";
      />;
      <main className="container mx - auto px - 4 py - 8">;
        <div className="flex justify - between items - center mb - 8">;
          <div>;
            <h1 className="text - 3xl font - bold flex items - center">;
              <Briefcase className="mr - 2 h - 6 w - 6 text - primary" />;
              Hiring Pipeline;
            </h1>;
            <p className="text - muted - foreground mt - 1">;
              Track and manage your candidates through the hiring process;
            </p>;
          </div>;
        </div>;
        <Tabs;
          default_value='kanban';
          onValueChange={setActiveTab}
          className='mb - 8';
        >;
          <TabsList>;
            <TabsTrigger value='kanban'>Kanban Board</TabsTrigger>;
            <TabsTrigger value='analytics'>Analytics</TabsTrigger>;
          </TabsList>;
          <TabsContent value='kanban' className='mt - 6'>;
            <KanbanBoard job_id={job_id} />;
          </TabsContent>;
          <TabsContent value='analytics' className='mt - 6'>            <HiringAnalytics job_id={job_id} />          <TabsList>;
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>;
            <TabsTrigger value="analytics">Analytics</TabsTrigger>;
          </TabsList>;
          <TabsContent value="kanban" className="mt - 6">;
            <KanbanBoard job_id={job_id} />;
          </TabsContent>;
          <TabsContent value="analytics" className="mt - 6">;
            <HiringAnalytics job_id={job_id} />;
          </TabsContent>;
        </Tabs>;
      </main>;
    </>);
}
export default /**
 * HiringTracker - Function description
 */
function HiringTracker() {
  return (
    <ProtectedRoute>;
      <HiringTrackerContent />;
    </ProtectedRoute>);
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
