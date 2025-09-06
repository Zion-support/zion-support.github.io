<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react",
import { useRouter } from "next/router",
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { Briefcase } from 'lucide-react'

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
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              Hiring Pipeline
            </h1>
=======
return (
    <>;
      <SEO
        title='Hiring Tracker | Zion AI Marketplace'
        description='Manage your candidate pipeline in the Zion AI Marketplace.'


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

        title='Hiring Tracker | Zion AI Marketplace'
        description='Manage your candidate pipeline in the Zion AI Marketplace.'

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <p className="text-muted-foreground mt-1">
              Track and manage your candidates through the hiring process
            </p>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD
          
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          
=======


        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
          <TabsList>

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>

<<<<<<< HEAD
          
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <TabsContent value="analytics" className="mt-6">
            <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======

  );
}


export default function HiringTracker() {
  return (
    <ProtectedRoute>
<<<<<<< HEAD
<<<<<<< HEAD
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

      <HiringTrackerContent />;
    </ProtectedRoute>;
  );
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  );
}

<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import React from "react";
import MainLayout from "../components/layout/MainLayout";

const HiringTracker: React.FC = () => {
  return (
    <MainLayout title="Hiring Tracker - Zion Tech Group" description="Track and manage your hiring process efficiently.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Hiring Tracker</h1>
        <p className="text-lg">This is the Hiring Tracker page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default HiringTracker;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
export default function HiringTracker() {
  return (
    <ProtectedRoute>

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
