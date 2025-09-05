
<<<<<<< HEAD
import { useState } from "react",;
import { useRouter } from "next/router",;
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard",;
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { Briefcase } from 'lucide-react';
;
function HiringTrackerContent() {;
  const router = useRouter(),;
  const jobId = router.query.jobId as string,;
  const [activeTab, setActiveTab] = useState<string>("kanban"),;
;
  return (;
    <>;
      <SEO ;
        title="Hiring Tracker | Zion AI Marketplace" ;
        description="Manage your candidate pipeline in the Zion AI Marketplace." ;
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
;
        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">;
          <TabsList>;
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>;
            <TabsTrigger value="analytics">Analytics</TabsTrigger>;
          </TabsList>;
          ;
          <TabsContent value="kanban" className="mt-6">;
            <KanbanBoard jobId={jobId} />;
          </TabsContent>;
          ;
          <TabsContent value="analytics" className="mt-6">;
            <HiringAnalytics jobId={jobId} />;
          </TabsContent>;
        </Tabs>;
      </main>;
    </>;
  ),;
}
;
export default function HiringTracker() {;
  return (;
    <ProtectedRoute>;
      <HiringTrackerContent />;
    </ProtectedRoute>;
  ),;
}
=======
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
function HiringTrackerContent() {_const _router = useRouter();
  const _jobId = router.query.jobId as string;
  const [activeTab, _setActiveTab] = useState<string>("kanban");

  return (
    <>
      <SEO 
        title=&quot;Hiring Tracker | Zion AI Marketplace&quot; 
        description=&quot;Manage your candidate pipeline in the Zion AI Marketplace.&quot; 
      />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;flex justify-between items-center mb-8&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold flex items-center&quot;>
              <Briefcase className=&quot;mr-2 h-6 w-6 text-primary&quot; />
              Hiring Pipeline
            </h1>
            <p className=&quot;text-muted-foreground mt-1&quot;>
              Track and manage your candidates through the hiring process
            </p>
          </div>
        </div>

        <Tabs defaultValue=&quot;kanban&quot; onValueChange={setActiveTab} className=&quot;mb-8&quot;>
          <TabsList>
            <TabsTrigger value=&quot;kanban&quot;>Kanban Board</TabsTrigger>
            <TabsTrigger value=&quot;analytics&quot;>Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;kanban&quot; className=&quot;mt-6&quot;>
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          
          <TabsContent value=&quot;analytics&quot; className=&quot;mt-6&quot;>
            <HiringAnalytics jobId={jobId} />          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}

export default function HiringTracker() {_return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  )
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
