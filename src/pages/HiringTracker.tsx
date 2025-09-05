
import { useState } from &quot;react&quot;;
import { useRouter } from &quot;next/router&quot;;
import { KanbanBoard } from &quot;@/components/hiring-tracker/KanbanBoard&quot;;
import { HiringAnalytics } from &quot;@/components/hiring-tracker/HiringAnalytics&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { Briefcase } from 'lucide-react'

function HiringTrackerContent() {
  const router = useRouter();
  const jobId = router.query.jobId as string;
  const [activeTab, setActiveTab] = useState<string>(&quot;kanban&quot;);

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
            <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}

export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  );
}
