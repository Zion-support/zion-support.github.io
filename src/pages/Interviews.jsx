import React, { useEffect, useState } from "react";
import { useInterviews } from "@/hooks/useInterviews";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/SEOHead";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { InterviewCard } from "@/components/interviews/InterviewCard";
import { Calendar, Clock, Video } from "lucide-react";
import { format, isAfter, parseISO, startOfDay } from "date-fns";
function InterviewsContent() {
    const { interviews, isLoading, fetchInterviews } = useInterviews();
    const [activeTab, setActiveTab] = useState("upcoming");
    useEffect(() => {
        // Modified to handle Promise<Interview[]> return type
        const loadInterviews = async () => {
            await fetchInterviews();
        };
        loadInterviews();
    }, []);
    // Filter interviews based on status and date
    const now = new Date();
    const today = startOfDay(now);
    const upcomingInterviews = interviews
        .filter((interview) => {
        const interviewDate = parseISO(interview.scheduled_date);
        return isAfter(interviewDate, now) &&
            ['confirmed', 'requested'].includes(interview.status);
    })
        .sort((a, b) => parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime());
    const pendingInterviews = interviews.filter(interview => interview.status === 'requested');
    const pastInterviews = interviews.filter(interview => {
        const interviewDate = parseISO(interview.scheduled_date);
        return !isAfter(interviewDate, now) ||
            ['completed', 'declined', 'cancelled'].includes(interview.status);
    });
    // Group interviews by date
    const groupInterviewsByDate = (interviews) => {
        const grouped = {};
        interviews.forEach((interview) => {
            const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd');
            if (!grouped[dateKey]) {
                grouped[dateKey] = [];
            }
            grouped[dateKey].push(interview);
        });
        return grouped;
    };
    const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
    const pendingGrouped = groupInterviewsByDate(pendingInterviews);
    const pastGrouped = groupInterviewsByDate(pastInterviews);
    const renderInterviewGroups = (groupedInterviews) => {
        return Object.entries(groupedInterviews)
            .sort(([dateA], [dateB]) => parseISO(dateA).getTime() - parseISO(dateB).getTime())
            .map(([date, interviews]) => (<div key={date} className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2"/>
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interviews.map((interview) => (<InterviewCard key={interview.id} interview={interview} onRefresh={async () => {
                    await fetchInterviews();
                }}/>))}
          </div>
        </div>));
    };
    return (<>
      <SEOHead title="Interviews | Zion AI Marketplace" description="Manage your scheduled interviews with clients and talent"/>
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Interviews</h1>
            <p className="text-muted-foreground mt-1">Schedule and manage your video interviews</p>
          </div>
        </div>






