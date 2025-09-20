import React from 'react';
import { SEO } from '@/components/SEO';
import { ApplicationsTracker } from '@/components/jobs/applications';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Inbox } from 'lucide-react';
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useIsMobile } from "@/hooks/use-mobile";

function ApplicationStatusTrackerContent() {
  const isMobile = false;

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
            <p className='text-gray-600 mt-2'>
              Monitor your job applications and track their progress
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Card className='p-4'>
              <div className='flex items-center gap-2'>
                <Briefcase className='h-5 w-5 text-blue-600' />
                <span className='text-sm font-medium'>Total Applications</span>
              </div>
              <p className='text-2xl font-bold mt-1'>12</p>
            </Card>
            <Card className='p-4'>
              <div className='flex items-center gap-2'>
                <Inbox className='h-5 w-5 text-green-600' />
                <span className='text-sm font-medium'>Pending</span>
              </div>
              <p className='text-2xl font-bold mt-1'>8</p>
            </Card>
          </div>
        </div>
        
        <ApplicationsTracker />
      </div>
    </>
  );
}

export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>
  );
}