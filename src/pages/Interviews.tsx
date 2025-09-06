<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useEffect, useState } from 'react'
import { useInterviews } from '@/hooks/useInterviews'
import { Interview } from '@/types/interview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SEO } from '@/components/SEO'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { InterviewCard } from '@/components/interviews/InterviewCard'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React, { useEffect, useState } from "react",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { InterviewCard } from "@/components/interviews/InterviewCard",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Calendar, Clock, Video } from 'lucide-react'
import { format, isAfter, parseISO, startOfDay } from "date-fns";
function InterviewsContent() {

<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button";
>>>>>>> import { Calendar, Clock, Video } from 'lucide-react'
import { format, isAfter, parseISO, startOfDay } from "date-fns";
function InterviewsContent() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
    load_interviews ();
  }, []);
  // Filter interviews based on status and date;
  const now = new Date ();
  const today = startOfDay (now);
  const upcoming_interviews = interviews;
    .filter (interview => {
      const interview_date = parseISO (interview.scheduled_date);
      return (
        is_after (interview_date, now) &&;
        ['confirmed', 'requested'].includes (interview.status));
    });
    .sort (
      (a, b) =>;
        parseISO (a.scheduled_date).get_time () -;
        parseISO (b.scheduled_date).get_time ());
  const pending_interviews = interviews.filter (
    interview => interview.status === 'requested');
  const past_interviews = interviews.filter (interview => {
    const interview_date = parseISO (interview.scheduled_date);
=======
  const { interviews, isLoading, fetchInterviews } = useInterviews()
  const [activeTab, setActiveTab] = useState('upcoming')
  useEffect(() => {function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews()
  const [activeTab, setActiveTab] = useState("upcoming")
  useEffect((,) => {
    // Modified to handle Promise<Interview[]> return type
    const loadInterviews = async () => {
      await fetchInterviews()
    }
    loadInterviews()
  }, [])
  // Filter interviews based on status and date
  const now = new Date()
  const today = startOfDay(now)
  const upcomingInterviews = interviews
    .filter(interview => {
      const interviewDate = parseISO(interview.scheduled_date)
      return (
        isAfter(interviewDate, now) &&
        ['confirmed', 'requested'].includes(interview.status)
      )
    })
    .sort(
      (a, b) =>
        parseISO(a.scheduled_date).getTime() -
        parseISO(b.scheduled_date).getTime()
    )
  const pendingInterviews = interviews.filter(
    interview => interview.status === 'requested'
  )
  const pastInterviews = interviews.filter(interview => {
    const interviewDate = parseISO(interview.scheduled_date)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
      !isAfter(interviewDate, now) |
      ['completed', 'declined', 'cancelled'].includes(interview.status)
    )
  })
  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string, Interview[]> = {}
    interviews.forEach(interview => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { interviews, isLoading, fetchInterviews } = useInterviews(),
  const [activeTab, setActiveTab] = useState("upcoming"),
  
  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type
    const loadInterviews = async () => {
      await fetchInterviews()
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },
    
    loadInterviews()
  }, []),

<<<<<<< HEAD
=======
  // Filter interviews based on status and date
  const now = new Date(),
  const today = startOfDay(now),
  
  const upcomingInterviews = interviews
    .filter((interview) => {
      const interviewDate = parseISO(interview.scheduled_date),
      return isAfter(interviewDate, now) && 
        ['confirmedrequested'].includes(interview.status)
    })
    .sort((a, b) => 
      parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
    ),
  
  const pendingInterviews = interviews.filter(interview => 
    interview.status === 'requested'
  ),
  
  const pastInterviews = interviews.filter(interview => {
    const interviewDate = parseISO(interview.scheduled_date),
    return !isAfter(interviewDate, now) || 
      ['completeddeclinedcancelled'].includes(interview.status)
  }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string Interview[]> = {},
    
    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd'),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      if (!grouped[dateKey]) {
        grouped[dateKey] = []
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      }
      grouped[dateKey].push(interview)
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       if (!grouped[dateKey]) {
        grouped[dateKey] = []
      }
      grouped[dateKey].push(interview)
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    })
    return grouped
  }
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews)
  const pendingGrouped = groupInterviewsByDate(pendingInterviews)
  const pastGrouped = groupInterviewsByDate(pastInterviews)
  const renderInterviewGroups = (
    groupedInterviews: Record<string, Interview[]>
  ) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>     return Object.entries(groupedInterviews)
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }),
    
    return grouped
  },
  
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews),
  const pendingGrouped = groupInterviewsByDate(pendingInterviews),
  const pastGrouped = groupInterviewsByDate(pastInterviews),

  const renderInterviewGroups = (groupedInterviews: Record<string Interview[]>) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    return Object.entries(groupedInterviews)
>>>>>>>       .sort(
        ([dateA], [dateB]) =>
          parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(([date, interviews]) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div key={date} className='mb-8'>
          <h3 className='text-lg font-medium text-white mb-4 flex items-center'>
            <Calendar className='h-5 w-5 mr-2' />
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {interviews.map(interview => (
              <InterviewCard
                key={interview.id}
                interview={interview}
                onRefresh={async () => {
                  await fetchInterviews() }}
              />
=======

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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
import { format, isAfter, parseISO, startOfDay } from "date-fns",;
function InterviewsContent() {;
  const { interviews, isLoading, fetchInterviews } = useInterviews(),;
  const [activeTab, setActiveTab] = useState("upcoming"),;
  useEffect(() => {;
    // Modified to handle Promise<Interview[]> return type;
    const loadInterviews = async () => {;
      await fetchInterviews();
    },;
    loadInterviews();
  }, []),;
  // Filter interviews based on status and date;
  const now = new Date(),;
  const today = startOfDay(now),;
  const upcomingInterviews = interviews;
    .filter((interview) => {;
      const interviewDate = parseISO(interview.scheduled_date),;
      return isAfter(interviewDate, now) &&;
        ['confirmedrequested'].includes(interview.status);
    });
    .sort((a, b) =>;
      parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime();
    ),;
  const pendingInterviews = interviews.filter(interview =>;
    interview.status === 'requested';
  ),;
  const pastInterviews = interviews.filter(interview => {;
    const interviewDate = parseISO(interview.scheduled_date),;
    return !isAfter(interviewDate, now) ||;
      ['completeddeclinedcancelled'].includes(interview.status);
  }),;
  // Group interviews by date;
  const groupInterviewsByDate = (interviews: Interview[]) => {;
    const grouped: Record<string Interview[]> = {},;
    interviews.forEach((interview) => {;
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd'),;
      if (!grouped[dateKey]) {;
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(interview);
    }),;
    return grouped;
  },;
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews),;
  const pendingGrouped = groupInterviewsByDate(pendingInterviews),;
  const pastGrouped = groupInterviewsByDate(pastInterviews),;
  const renderInterviewGroups = (groupedInterviews: Record<string Interview[]>) => {;
    return Object.entries(groupedInterviews);
      .sort(([dateA], [dateB]) =>;
        parseISO(dateA).getTime() - parseISO(dateB).getTime();
      );
      .map(([date, interviews]) => (;
<<<<<<< HEAD
        <div key={date} className="mb-8">;
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">;
            <Calendar className="h-5 w-5 mr-2" />;
=======
        <div key={date} className='mb-8'>;
          <h3 className='text-lg font-medium text-white mb-4 flex items-center'>;
            <Calendar className='h-5 w-5 mr-2' />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
            {interviews.map((interview) => (;
              <InterviewCard;
                key={interview.id} ;
                interview={interview}
                onRefresh={async () => {;
                  await fetchInterviews();
                }}
              />;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            ))}
          </div>
        </div>
      ))
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
        <div key={date} className='mb-8'>
          <h3 className='text-lg font-medium text-white mb-4 flex items-center'>
            <Calendar className='h-5 w-5 mr-2' />
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {interviews.map(interview => (
              <InterviewCard
                key={interview.id}
                interview={interview}
                onRefresh={async () => {
                  await fetchInterviews() }}
              />
>>>>>>>             ))}
          </div>
        </div>
      ))
  }

<<<<<<< HEAD
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <>
      <SEO 
        title="Interviews | Zion AI Marketplace" 
        description="Manage your scheduled interviews with clients and talent" 
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Interviews</h1>
            <p className="text-muted-foreground mt-1">Schedule and manage your video interviews</p>
          </div>
        </div>
<<<<<<< HEAD

=======
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
>>>>>>>                   {upcomingInterviews.length}
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            ))}
          </div>
        </div>
      ))

    grouped_interviews: Record < string, Interview[]>) =>: any {
    return Object.entries (grouped_interviews);
      .sort (
        ([date_a], [date_b]) =>;
          parseISO (date_a).get_time () - parseISO (date_b).get_time ());
      .map (([date, interviews]) => (
        <div key={date} className='mb - 8'>;
          <h3 className='text - lg font - medium text - white mb - 4 flex items - center'>;
            <Calendar className='h - 5 w - 5 mr - 2' />;
            {format (parseISO (date), 'EEEE, MMMM d, yyyy')}
          </h3>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
            {interviews.map (interview => (
              <InterviewCard;
                key={interview.id}
                interview={interview}
                on_refresh={async () => {
                  await fetch_interviews () }}
              />))}
          </div>;
        </div>));

  }
                onRefresh={async () => {;
                  await fetchInterviews();                }}
              />;
            ))}
          </div>;
        </div>;
      ));
  };

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  },




<<<<<<< HEAD
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <>;

      />;
      <main className='container mx-auto px-4 py-8'>;
        <div className='flex justify-between items-center mb-8'>;
          <div>;
            <h1 className='text-3xl font-bold'>Interviews</h1>;
            <p className='text-muted-foreground mt-1'>;
      <SEO;
        title='Interviews | Zion AI Marketplace';
        description='Manage your scheduled interviews with clients and talent';
      />;
      <main className='container mx - auto px - 4 py - 8'>;
        <div className='flex justify - between items - center mb - 8'>;
          <div>;
            <h1 className='text - 3xl font - bold'>Interviews</h1>;
            <p className='text - muted - foreground mt - 1'>;

              Schedule and manage your video interviews;
            </p>;
          </div>;
        </div>;



        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Upcoming
              {upcomingInterviews.length > 0 && (
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  {upcomingInterviews.length}
>>>>>>>                 </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              {pendingInterviews.length > 0 && (
<<<<<<< HEAD

=======
                <span className='ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs'>
>>>>>>>                   {pendingInterviews.length}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  {pendingInterviews.length}
>>>>>>>                 </span>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              )}
            </TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
<<<<<<< HEAD

            {isLoading ? (
=======
          <TabsContent value='upcoming' className='space-y-6'>
>>>>>>>             {isLoading ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
ursor/fix-website-loading-errors-and-merge-6662
            {isLoading ? (
              <div className='flex justify-center py-12'>
                <div className='animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full'></div>
>>>>>>>               </div>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },

  return (
    <>
      <SEO 
        title="Interviews | Zion AI Marketplace" 
        description="Manage your scheduled interviews with clients and talent" 
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Interviews</h1>
            <p className="text-muted-foreground mt-1">Schedule and manage your video interviews</p>
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

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Upcoming
              {upcomingInterviews.length > 0 && (
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">
                  {upcomingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              {pendingInterviews.length > 0 && (
                <span className='ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs'>
                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs">
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  {pendingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value='upcoming' className='space-y-6'>
          
          <TabsContent value="upcoming" className="space-y-6">
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
            {isLoading ? (
=======
          <TabsContent value='pending' className='space-y-6'>
>>>>>>>             {isLoading ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
ursor/fix-website-loading-errors-and-merge-6662
=======

          
          <TabsContent value="pending" className="space-y-6">


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {isLoading ? (
              <div className='flex justify-center py-12'>
                <div className='animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full'></div>
>>>>>>>               </div>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <TabsContent value='pending' className='space-y-6'>
          
          <TabsContent value="pending" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
            {isLoading ? (
=======
          <TabsContent value='past' className='space-y-6'>
>>>>>>>             {isLoading ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
ursor/fix-website-loading-errors-and-merge-6662
=======

          
          <TabsContent value="past" className="space-y-6">


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {isLoading ? (
              <div className='flex justify-center py-12'>
                <div className='animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full'></div>
>>>>>>>               </div>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <TabsContent value='past' className='space-y-6'>
          
          <TabsContent value="past" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ) : pastInterviews.length > 0 ? (
              renderInterviewGroups(pastGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>
                <p className="text-muted-foreground">Your interview history will appear here.</p>
              </div>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
export default function Interviews() {
  return (
    <ProtectedRoute>
      <InterviewsContent />
<<<<<<< HEAD
    </ProtectedRoute>;
  );
};
};
}
}
>>>>>>> 
;
=======
            </TabsTrigger>;
            <TabsTrigger value='past'>Past</TabsTrigger>;
          </TabsList>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </ProtectedRoute>;
  );
};
};
}
}
          </TabsContent>;
        </Tabs>;
      </main>;
    </>;
  );
}
;
export default function Interviews() {;
  return (;
    <ProtectedRoute>;
      <InterviewsContent />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

}

        <Tabs;
          default_value={active_tab}
          onValueChange={setActiveTab}
          className='space - y-8';
        >;
          <TabsList className='mb - 6'>;
            <TabsTrigger value='upcoming' className='flex items - center'>;
              <Clock className='h - 4 w - 4 mr - 2' />;
              Upcoming;
              {upcoming_interviews.length > 0 && (
                <span className='ml - 2 bg - primary rounded - full px - 2 py - 0.5 text - xs'>;
                  {upcoming_interviews.length}
                </span>)}
            </TabsTrigger>;
            <TabsTrigger value='pending'>;
              Pending;
              {pending_interviews.length > 0 && (
                <span className='ml - 2 bg - amber - 500 rounded - full px - 2 py - 0.5 text - xs'>;
                  {pending_interviews.length}
                </span>)}
            </TabsTrigger>;
            <TabsTrigger value='past'>Past</TabsTrigger>;
          </TabsList>;
          <TabsContent value='upcoming' className='space - y-6'>;
            {is_loading ? (
              <div className='flex justify - center py - 12'>;
                <div className='animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full'></div>;
              </div>) : upcoming_interviews.length > 0 ? (
              renderInterviewGroups (upcoming_grouped)) : (
              <div className='text - center py - 12 bg - zion - blue - dark / 40 rounded - lg border border - zion - blue - light'>;
                <Video className='h - 12 w - 12 mx - auto text - muted - foreground mb - 4' />;
                <h3 className='text - xl font - medium mb - 2'>;
                  No upcoming interviews;
                </h3>;
                <p className='text - muted - foreground mb - 6'>;
                  You don't have any scheduled interviews coming up.;
                </p>;
              </div>)}
          </TabsContent>;
          <TabsContent value='pending' className='space - y-6'>;
            {is_loading ? (
              <div className='flex justify - center py - 12'>;
                <div className='animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full'></div>;
              </div>) : pending_interviews.length > 0 ? (
              renderInterviewGroups (pending_grouped)) : (
              <div className='text - center py - 12 bg - zion - blue - dark / 40 rounded - lg border border - zion - blue - light'>;
                <Clock className='h - 12 w - 12 mx - auto text - muted - foreground mb - 4' />;
                <h3 className='text - xl font - medium mb - 2'>;
                  No pending interviews;
                </h3>;
                <p className='text - muted - foreground mb - 6'>;
                  You don't have any interview requests that need your;
                  attention.;
                </p>;
              </div>)}
          </TabsContent>;
          <TabsContent value='past' className='space - y-6'>;
            {is_loading ? (
              <div className='flex justify - center py - 12'>;
                <div className='animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full'></div>;
              </div>) : past_interviews.length > 0 ? (
              renderInterviewGroups (past_grouped)) : (
              <div className='text - center py - 12 bg - zion - blue - dark / 40 rounded - lg border border - zion - blue - light'>;
                <Calendar className='h - 12 w - 12 mx - auto text - muted - foreground mb - 4' />;
                <h3 className='text - xl font - medium mb - 2'>No past interviews</h3>;
                <p className='text - muted - foreground'>;
                  Your interview history will appear here.;
                </p>;
              </div>)}
          </TabsContent>;
        </Tabs>;
      </main>;
    </>);
export default /**
 * Interviews - Function description
 */
function Interviews() {
  return (
    <ProtectedRoute>;
      <InterviewsContent />;
    </ProtectedRoute>);
}
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
