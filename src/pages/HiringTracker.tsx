import { useState } from 'react';
import { useRouter } from 'next/router';
import { KanbanBoard } from '@/components/hiring-tracker/KanbanBoard';
import { HiringAnalytics } from '@/components/hiring-tracker/HiringAnalytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SEO } from '@/components/SEO';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Briefcase } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

function HiringTrackerContent() {

  const router = useRouter();
  const jobId = router.query.jobId as string;
  const [activeTab, setActiveTab] = useState<string>('kanban');


  return (
    <>
      <SEO
        title='Hiring Tracker | Zion AI Marketplace'
        description='Manage your candidate pipeline in the Zion AI Marketplace.'
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-3xl font-bold flex items-center'>
              <Briefcase className='mr-2 h-6 w-6 text-primary' />
              Hiring Pipeline
            </h1>
            <p className='text-muted-foreground mt-1'>              Track and manage your candidates through the hiring process
=======
            <p className="text-muted-foreground mt-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Track and manage your candidates through the hiring process
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </p>
          </div>
        </div>

        <Tabs
          defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'
        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <TabsList>
            <TabsTrigger value='kanban'>Kanban Board</TabsTrigger>
            <TabsTrigger value='analytics'>Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value='kanban' className='mt-6'>
            <KanbanBoard jobId={jobId} />
          </TabsContent>

          <TabsContent value='analytics' className='mt-6'>            <HiringAnalytics jobId={jobId} />
=======
          
          <TabsContent value="analytics" className="mt-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <HiringAnalytics jobId={jobId} />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
