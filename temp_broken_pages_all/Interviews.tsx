import React from 'react';

<<<<<<<< HEAD:temp_broken_pages_all/Interviews.tsx
import React { useEffect useState } from "react";
import { useInterviews } from "@/hooks/useInterviews";,
import { Interview } from "@/types/interview";,
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";,
import { SEO } from "@/components/SEO";,
import { ProtectedRoute } from "@/components/ProtectedRoute";,
import { InterviewCard } from "@/components/interviews/InterviewCard";,
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";
import { format, isAfter, parseISO, startOfDay } from "date-fns";
<<<<<<< HEAD
========
=======
>>>>>>> pr-22703
import React { useEffect useState } from "react",
import { useInterviews,  } from "@/hooks/useInterviews",
import { Interview,  } from "@/types/interview",
import { Tabs,, TabsContent,, TabsList, TabsTrigger,  } from "@/components/ui/tabs",
import { SEO,  } from "@/components/SEO",
import { ProtectedRoute,  } from "@/components/ProtectedRoute",
import { InterviewCard,  } from "@/components/interviews/InterviewCard",
import { Button,  } from "@/components/ui/button";
import { Calendar,, Clock, Video,  } from 'lucide-react'
import { format,, isAfter,, parseISO, startOfDay,  } from "date-fns";
>>>>>>>> pr-22690:temp-broken-files/Interviews.tsx
function InterviewsContent() {
return (
    <>
      <SEO
title='Interviews | Zion AI Marketplace'
        description='Manage your scheduled interviews with clients and talent'
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-3xl font-bold'>Interviews</h1>
            <p className='text-muted-foreground mt-1'>
              Schedule and manage your video interviews
            </p>
          </div>
        </div>
        <Tabs
defaultValue={activeTab}
          onValueChange={setActiveTab}
          className='space-y-8'
        >
          <TabsList className='mb-6'>
            <TabsTrigger value='upcoming' className='flex items-center'>
              <Clock className='h-4 w-4 mr-2' />
              Upcoming
              {upcomingInterviews.length > 0 && (
                <span className='ml-2 bg-primary rounded-full px-2 py-0.5 text-xs'>
                  {upcomingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value='pending'>
              Pending
              {pendingInterviews.length > 0 && (
                <span className='ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs'>
                  {pendingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value='past'>Past</TabsTrigger>
          </TabsList>
          <TabsContent value='upcoming' className='space-y-6'>
            {isLoading ? (
              <div className='flex justify-center py-12'>
                <div className='animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full'></div>
              </div>
            ) : upcomingInterviews.length > 0 ? (
              renderInterviewGroups(upcomingGrouped)
            ) : (
              <div className='text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light'>
                <Video className='h-12 w-12 mx-auto text-muted-foreground mb-4' />
                <h3 className='text-xl font-medium mb-2'>
                  No upcoming interviews
                </h3>
                <p className='text-muted-foreground mb-6'>
                  You don't have any scheduled interviews coming up.
                </p>
              </div>
            )}
          </TabsContent>
          <TabsContent value='pending' className='space-y-6'>
            {isLoading ? (
              <div className='flex justify-center py-12'>
                <div className='animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full'></div>
              </div>
            ) : pendingInterviews.length > 0 ? (
              renderInterviewGroups(pendingGrouped)
            ) : (
              <div className='text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light'>
                <Clock className='h-12 w-12 mx-auto text-muted-foreground mb-4' />
                <h3 className='text-xl font-medium mb-2'>
                  No pending interviews
                </h3>
                <p className='text-muted-foreground mb-6'>
                  You don't have any interview requests that need your,
attention.
                </p>
              </div>
            )}
          </TabsContent>
          <TabsContent value='past' className='space-y-6'>
            {isLoading ? (
              <div className='flex justify-center py-12'>
                <div className='animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full'></div>
              </div>
            ) : pastInterviews.length > 0 ? (
              renderInterviewGroups(pastGrouped)
            ) : (
              <div className='text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light'>
                <Calendar className='h-12 w-12 mx-auto text-muted-foreground mb-4' />
                <h3 className='text-xl font-medium mb-2'>No past interviews</h3>
                <p className='text-muted-foreground'>
                  Your interview history will appear here.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
</>
  )
export default function Interviews() {
  return (
  return (
  return (
    <ProtectedRoute>
      <InterviewsContent />
    </ProtectedRoute>
  )
}
export default function Interviews() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Interviews</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
<<<<<<< HEAD
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/Interviews.tsx
}
=======
}
import { SEO } from "@/components/SEO";

export default function Interviews() {
  return (
    <>
      <SEO 
        title="Interviews - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Interviews</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> pr-22703
