import React from 'react';
<<<<<<< HEAD:src/pages/ApplicationStatusTracker.tsx

export default function ApplicationStatusTracker() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <div className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Application Status Tracker</h1>
          <p className='text-gray-300'>
            Monitor the progress of your job applications and stay updated on their status.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6'>
            <div className='flex flex-row items-center justify-between mb-4'>
              <h3 className='text-sm font-medium text-white'>Total Applications</h3>
              <div className='h-4 w-4 text-blue-400'>📁</div>
            </div>
            <div className='text-2xl font-bold text-white'>12</div>
            <p className='text-xs text-gray-300'>Active applications</p>
          </div>

          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6'>
            <div className='flex flex-row items-center justify-between mb-4'>
              <h3 className='text-sm font-medium text-white'>Interviews</h3>
              <div className='h-4 w-4 text-green-400'>📅</div>
            </div>
            <div className='text-2xl font-bold text-white'>3</div>
            <p className='text-xs text-gray-300'>Scheduled this week</p>
          </div>

          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6'>
            <div className='flex flex-row items-center justify-between mb-4'>
              <h3 className='text-sm font-medium text-white'>Offers</h3>
              <div className='h-4 w-4 text-purple-400'>💼</div>
            </div>
            <div className='text-2xl font-bold text-white'>1</div>
            <p className='text-xs text-gray-300'>Pending review</p>
          </div>
        </div>

        <div className='space-y-4'>
          <p className='text-gray-300'>Your applications will be displayed here.</p>
        </div>
      </div>
    </div>
=======
import { SEO } from '@/components/SEO';
import { ApplicationsTracker } from '@/components/jobs/applications';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Inbox } from 'lucide-react';
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";

function ApplicationStatusTrackerContent() {
  const isMobile = useIsMobile();
  
  return (
    <>
      <SEO
        title='Application Status Tracker | Zion AI Marketplace'
        description='Track the status of your job applications in the Zion AI marketplace.'
      />
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>
              Application Status Tracker
            </h1>
            <p className='text-muted-foreground mt-1'>
              Track where you stand in the hiring process
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6'>
          <Card>
            <CardHeader className='border-b bg-muted/50'>
              <CardTitle className='flex items-center text-lg'>
                <Inbox className='mr-2 h-5 w-5' /> Your Applications
              </CardTitle>
            </CardHeader>
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>
>>>>>>> pr-22690:temp-broken-files/ApplicationStatusTracker.tsx
  );
}