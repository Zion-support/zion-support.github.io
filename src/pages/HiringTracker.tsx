return (
    <>;
      <SEO

        title='Hiring Tracker | Zion AI Marketplace'
        description='Manage your candidate pipeline in the Zion AI Marketplace.'

            <p className="text-muted-foreground mt-1">
              Track and manage your candidates through the hiring process
            </p>
          </div>
        <Tabs
          defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'
        >

        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">

          <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value='kanban' className='mt-6'>
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          <TabsContent value='analytics' className='mt-6'>            <HiringAnalytics jobId={jobId} />          <TabsList>
          <TabsContent value="kanban" className="mt-6">

          <TabsContent value="analytics" className="mt-6">
            <HiringAnalytics jobId={jobId} />
        </Tabs>
      </main>
    </>
  )
}

export default function HiringTracker() {
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
      <SEO;
        title="Hiring Tracker | Zion AI Marketplace";
        description="Manage your candidate pipeline in the Zion AI Marketplace.";
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
            <h1 className="text-3xl font-bold flex items-center">;
              <Briefcase className="mr-2 h-6 w-6 text-primary" />;
            <p className="text-muted-foreground mt-1">;
              Track and manage your candidates through the hiring process;
            </p>;
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
        </Tabs>;
      </main>;
    </>;
;
export default function HiringTracker() {;
    <ProtectedRoute>;

import { useState } from 'react';
import { use_router } from 'next / router';
import { KanbanBoard } from '@/components / hiring - tracker / KanbanBoard';
import { HiringAnalytics } from '@/components / hiring - tracker / HiringAnalytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
/**
 * HiringTrackerContent - Function description
 */
function HiringTrackerContent() {
  const router = use_router ();
  const job_id = router.query.job_id as string;
  const [active_tab, setActiveTab] = useState < string>('kanban');
        title='Hiring Tracker | Zion AI Marketplace';
        description='Manage your candidate pipeline in the Zion AI Marketplace.';
      <main className='container mx - auto px - 4 py - 8'>;
        <div className='flex justify - between items - center mb - 8'>;
            <h1 className='text - 3xl font - bold flex items - center'>;
              <Briefcase className='mr - 2 h - 6 w - 6 text - primary' />;
            <p className='text - muted - foreground mt - 1'>              Track and manage your candidates through the hiring process  const [active_tab, setActiveTab] = useState < string>("kanban");
      <main className="container mx - auto px - 4 py - 8">;
        <div className="flex justify - between items - center mb - 8">;
            <h1 className="text - 3xl font - bold flex items - center">;
              <Briefcase className="mr - 2 h - 6 w - 6 text - primary" />;
            <p className="text - muted - foreground mt - 1">;
        <Tabs;
          default_value='kanban';
          className='mb - 8';
        >;
            <TabsTrigger value='kanban'>Kanban Board</TabsTrigger>;
            <TabsTrigger value='analytics'>Analytics</TabsTrigger>;
          <TabsContent value='kanban' className='mt - 6'>;
            <KanbanBoard job_id={job_id} />;
          <TabsContent value='analytics' className='mt - 6'>            <HiringAnalytics job_id={job_id} />          <TabsList>;
          <TabsContent value="kanban" className="mt - 6">;
          <TabsContent value="analytics" className="mt - 6">;
            <HiringAnalytics job_id={job_id} />;
    </>);
export default /**
 * HiringTracker - Function description
function HiringTracker() {
    </ProtectedRoute>);