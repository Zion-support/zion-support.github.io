<<<<<<< HEAD
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

import { useState } from "react",
import { useRouter } from "next/router",
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Briefcase } from 'lucide-react'
function HiringTrackerContent() {

  const router = useRouter()
  const jobId = router.query.jobId as string
  const [activeTab, setActiveTab] = useState<string>('kanban')

function HiringTrackerContent() {
  const router = useRouter(),
  const jobId = router.query.jobId as string,
  const [activeTab, setActiveTab] = useState<string>("kanban"),

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
              <Briefcase className="mr-2 h-6 w-6 text-primary"/>
              Hiring Pipeline
            </h1>
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
return (
    <>;
      <SEO
        title='Hiring Tracker | Zion AI Marketplace'
        description='Manage your candidate pipeline in the Zion AI Marketplace.'


            <p className="text-muted-foreground mt-1">
              Track and manage your candidates through the hiring process
            </p>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Tabs
          defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'
        >
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">


          <TabsList>
            <TabsTrigger value='kanban'>Kanban Board</TabsTrigger>
            <TabsTrigger value='analytics'>Analytics</TabsTrigger>
          </TabsList>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">


          <TabsList>

            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value='kanban' className='mt-6'>
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          <TabsContent value='analytics' className='mt-6'>            <HiringAnalytics jobId={jobId} />          <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>

          
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          

          <TabsContent value="analytics" className="mt-6">
            <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
=======

  );
}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  )
}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>


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
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <HiringTrackerContent />;
    </ProtectedRoute>;
  );
};

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
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
