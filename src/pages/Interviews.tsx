import React, { useEffect, useState } from 'react'
import { useInterviews } from '@/hooks/useInterviews'
import { Interview } from '@/types/interview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SEO } from '@/components/SEO'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { InterviewCard } from '@/components/interviews/InterviewCard'
import { Button } from '@/components/ui/button'

import React, { useEffect, useState } from "react",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { InterviewCard } from "@/components/interviews/InterviewCard",
import { Button } from "@/components/ui/button";



      if (!grouped[dateKey]) {
        grouped[dateKey] = []
      !is_after (interview_date, now) ||;
      ['completed', 'declined', 'cancelled'].includes (interview.status));
  });
  // Group interviews by date;
  const groupInterviewsByDate = (interviews: Interview[]) =>: any {
    const grouped: Record < string, Interview[]> = {}
    interviews.for_each (interview => {
      const date_key = format (parseISO (interview.scheduled_date), 'yyyy - MM - dd');
      // Check condition
if ( {) {
  $2
}
        grouped[date_key] = [];
      }

      grouped[dateKey].push(interview)

    }),
    
    return grouped
  },
  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string Interview[]> = {},
    
    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd'),


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useEffect, useState } from 'react';
import { useInterviews } from '@/hooks/useInterviews';
import { Interview } from '@/types/interview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SEO } from '@/components/SEO';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { InterviewCard } from '@/components/interviews/InterviewCard';
import { Button } from '@/components/ui/button';

        <div key={date} className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interviews.map((interview) => (
              <InterviewCard 
                key={interview.id} 
import React, { useEffect, useState } from "react",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { InterviewCard } from "@/components/interviews/InterviewCard",;
import { Button } from "@/components/ui/button",;

import { Calendar, Clock, Video } from 'lucide-react';
import { format, isAfter, parseISO, startOfDay } from 'date-fns';

function InterviewsContent() {;
  const { interviews, isLoading, fetchInterviews } = useInterviews();
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {function InterviewsContent() {;
  const { interviews, isLoading, fetchInterviews } = useInterviews(),;
  const [activeTab, setActiveTab] = useState("upcoming"),;

  useEffect((,) => {;
    // Modified to handle Promise<Interview[]> return type;
    const loadInterviews = async () => {;
      await fetchInterviews();
    };

    loadInterviews();
  }, []);

  // Filter interviews based on status and date;
  const now = new Date();
  const today = startOfDay(now);

  const upcomingInterviews = interviews;
    .filter(interview => {;
      const interviewDate = parseISO(interview && interview.scheduled_date);
      return (
        isAfter(interviewDate, now) &&;
        ['confirmed', 'requested'].includes(interview && interview.status);
      );
    });
    .sort(;
      (a, b) =>;
        parseISO(a && a.scheduled_date).getTime() -;
        parseISO(b && b.scheduled_date).getTime();
    );

  const pendingInterviews = interviews && interviews.filter(;
    interview => interview && interview.status === 'requested';
  );
  const pastInterviews = interviews && interviews.filter(interview => {;
    const interviewDate = parseISO(interview && interview.scheduled_date);
    return (
      !isAfter(interviewDate, now) ||;
      ['completed', 'declined', 'cancelled'].includes(interview && interview.status);
    );
  });

  // Group interviews by date;
  const groupInterviewsByDate = (interviews: Interview[]) => {;
    const grouped: Record<string, Interview[]> = {};

    interviews && interviews.forEach(interview => {;
      const dateKey = format(parseISO(interview && interview.scheduled_date), 'yyyy-MM-dd');
      if (!grouped[dateKey]) {;
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(interview);
    });

    return grouped;
  };

  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);

  const renderInterviewGroups = (;
    groupedInterviews: Record<string, Interview[]>;
  ) => {;
    return Object && Object.entries(groupedInterviews);
      .sort(;
        ([dateA], [dateB]) =>;
          parseISO(dateA).getTime() - parseISO(dateB).getTime();
      );
      .map(([date, interviews]) => (;
        <div key={date} className='mb-8'>;
          <h3 className='text-lg font-medium text-white mb-4 flex items-center'>;
            <Calendar className='h-5 w-5 mr-2' />;
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>;
            {interviews && interviews.map(interview => (;
                onRefresh={async () => {;
                  await fetchInterviews();
                }}
              />;


            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : upcomingInterviews.length > 0 ? (
              renderInterviewGroups(upcomingGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No upcoming interviews</h3>
                <p className="text-muted-foreground mb-6">You don't have any scheduled interviews coming up.</p>
              </div>
            )}
          </TabsContent>


          
          <TabsContent value="pending" className="space-y-6">


            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pendingInterviews.length > 0 ? (
              renderInterviewGroups(pendingGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No pending interviews</h3>
                <p className="text-muted-foreground mb-6">You don't have any interview requests that need your attention.</p>
              </div>
            )}
          </TabsContent>


          
          <TabsContent value="past" className="space-y-6">


            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pastInterviews.length > 0 ? (
              renderInterviewGroups(pastGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>
                <p className="text-muted-foreground">Your interview history will appear here.</p>
              </div>
            )}
  return (;
    <ProtectedRoute>;
      <InterviewsContent />;
    </ProtectedRoute>;
  );
