<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react';
import { useRouter } from 'next/router';
import { KanbanBoard } from '@/components/hiring-tracker/KanbanBoard';
import { HiringAnalytics } from '@/components/hiring-tracker/HiringAnalytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SEO } from '@/components/SEO';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Briefcase } from 'lucide-react';
=======

import { useState } from "react";
import { useRouter } from "next/router";
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard";
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Briefcase } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function HiringTrackerContent() {
  const router = useRouter();
  const jobId = router.query.jobId as string;
  const [activeTab, setActiveTab] = useState<string>("kanban");

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
            <p className='text-muted-foreground mt-1'>
=======

import { useState } from "react";
import { useRouter } from "next/router";
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard";
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Briefcase } from 'lucide-react'

function HiringTrackerContent() {

  const router = useRouter();
  const jobId = router.query.jobId as string,
  const [activeTab, setActiveTab] = useState<string>("kanban");


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
            <p className="text-muted-foreground mt-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <p className="text-muted-foreground mt-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Track and manage your candidates through the hiring process
            </p>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        <Tabs
          defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'
        >
=======
        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
<<<<<<< HEAD

          <TabsContent value='analytics' className='mt-6'>
=======
        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          
          <TabsContent value="analytics" className="mt-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function HiringTracker() {
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
