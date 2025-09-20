import React from 'react';

<<<<<<<< HEAD:temp_broken_pages_all/HiringTracker.tsx
import { useState } from "react";,
import { useRouter } from "next/router";,
import { KanbanBoard } from "@/components/hiring-tracker/KanbanBoard";,
import { HiringAnalytics } from "@/components/hiring-tracker/HiringAnalytics";,
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";,
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Briefcase } from "lucide-react";
import { useState,  } from "react",
import { useRouter,  } from "next/router",
import { KanbanBoard,  } from "@/components/hiring-tracker/KanbanBoard",
import { HiringAnalytics,  } from "@/components/hiring-tracker/HiringAnalytics",
import { Tabs,, TabsContent,, TabsList, TabsTrigger,  } from "@/components/ui/tabs",
import { SEO,  } from "@/components/SEO";
import { ProtectedRoute,  } from "@/components/ProtectedRoute";
import { Briefcase,  } from 'lucide-react'
>>>>>>>> pr-22690:temp-broken-files/HiringTracker.tsx
function HiringTrackerContent() {
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
              Track and manage your candidates through the hiring process
            </p>
          </div>
        </div>
        <Tabs
defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'
        >
          <TabsList>
            <TabsTrigger value='kanban'>Kanban Board</TabsTrigger>
            <TabsTrigger value='analytics'>Analytics</TabsTrigger>
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
          <TabsContent value="analytics" className="mt-6">
            <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
</>
  )
}
export default function HiringTracker() {
  return (
  return (
  return (
    <ProtectedRoute>
      <HiringTrackerContent />
    </ProtectedRoute>
  )
export default function HiringTracker() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">HiringTracker</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}
import { SEO } from "@/components/SEO";

export default function HiringTracker() {
  return (
    <>
      <SEO 
        title="HiringTracker - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">HiringTracker</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
