<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
return (
    <>;
      <SEO
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        title='Hiring Tracker | Zion AI Marketplace'
        description='Manage your candidate pipeline in the Zion AI Marketplace.'
=======
import { useState } from 'react';
import { useRouter } from 'next/router';
import { KanbanBoard } from '@/components/hiring-tracker/KanbanBoard';
import { HiringAnalytics } from '@/components/hiring-tracker/HiringAnalytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SEO } from '@/components/SEO';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Briefcase } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD

function HiringTrackerContent() {
  const router = useRouter(),
  const jobId = router.query.jobId as string,
  const [activeTab, setActiveTab] = useState<string>("kanban"),

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <>
      <SEO 
        title="Hiring Tracker | Zion AI Marketplace" 
        description="Manage your candidate pipeline in the Zion AI Marketplace." 
=======
function HiringTrackerContent() {
            <p className='text-muted-foreground mt-1'>
  return (
    <>
      <SEO
        title="Hiring Tracker | Zion AI Marketplace"
        description="Manage your candidate pipeline in the Zion AI Marketplace."
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
      <SEO;
        title='Hiring Tracker | Zion AI Marketplace''
        description='Manage your candidate pipeline in the Zion AI Marketplace.'


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

        title='Hiring Tracker | Zion AI Marketplace'
        description='Manage your candidate pipeline in the Zion AI Marketplace.'

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <p className="text-muted-foreground mt-1">
              Track and manage your candidates through the hiring process;
            </p>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
<Tabs
          defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'
        >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
=======
          <TabsList>"
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
          <TabsList>
<<<<<<< HEAD

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
=======
"
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>"
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>

<<<<<<< HEAD
<<<<<<< HEAD
          
=======
          "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <TabsContent value="analytics" className="mt-6">
=======
          <TabsContent value='kanban' className='mt-6'>
            <KanbanBoard jobId={jobId} />
          </TabsContent>

          <TabsContent value='analytics' className='mt-6'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  );
}


export default function HiringTracker() {}
  return (
    <ProtectedRoute>
<<<<<<< HEAD
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
=======
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
      <HiringTrackerContent />
    </ProtectedRoute>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
