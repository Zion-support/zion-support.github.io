import React, { useEffect, useState } from 'react',
import { useInterviews } from '@/hooks/useInterviews',
import { Interview } from '@/types/interview',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { SEO } from '@/components/SEO',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { InterviewCard } from '@/components/interviews/InterviewCard',
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video } from 'lucide-react'
import { format, isAfter, parseISO, startOfDay } from 'date-fns';
function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews();
  const [activeTab, setActiveTab] = useState('upcoming');
        title='Interviews | Zion AI Marketplace' 
        description='Manage your scheduled interviews with clients and talent' 
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-3xl font-bold'>Interviews</h1>
            <p className='text-muted-foreground mt-1'>Schedule and manage your video interviews</p>
            <TabsTrigger value='pending'>
            <TabsTrigger value='past'>Past</TabsTrigger>
