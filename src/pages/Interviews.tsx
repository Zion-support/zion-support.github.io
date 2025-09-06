

import React, { useEffect, useState } from "react",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { InterviewCard } from "@/components/interviews/InterviewCard",

import { Calendar, Clock, Video } from 'lucide-react'
import { format, isAfter, parseISO, startOfDay } from "date-fns";
function InterviewsContent() {

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

    },
    
    loadInterviews()
  }, []),

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

  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string Interview[]> = {},
    
    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd'),

      if (!grouped[dateKey]) {
        grouped[dateKey] = []
      }
      grouped[dateKey].push(interview)

    return Object.entries(groupedInterviews)
      .sort(
        ([dateA], [dateB]) =>
          parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(([date, interviews]) => (

            ))}
          </div>
        </div>
      ))

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

                  {upcomingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              {pendingInterviews.length > 0 && (

                  {pendingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

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
                  You don't have any interview requests that need your
                  attention.
                </p>
              </div>
            )}
          </TabsContent>

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

