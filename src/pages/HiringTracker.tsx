<<<<<<< HEAD
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


<<<<<<< HEAD
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            <p className="text-muted-foreground mt-1">
              Track and manage your candidates through the hiring process
            </p>
          </div>
        </div>

<<<<<<< HEAD

<<<<<<< HEAD
=======

        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
<Tabs
          defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'
        >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD
=======


        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
          <TabsList>

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>

<<<<<<< HEAD
=======
          
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
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

  )
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
          <TabsContent value="analytics" className="mt-6">;
            <HiringAnalytics jobId={jobId} />;
          </TabsContent>;
        </Tabs>;
      </main>;
    </>;
  );
}
    <ProtectedRoute>;
      <HiringTrackerContent />;
    </ProtectedRoute>;
  );
}
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1

  );
}

=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

export default function HiringTracker() {
  return (
    <ProtectedRoute>
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
