        setUpcomingInterviews(upcoming)} catch (error) {logErrorToProduction('Error loading upcoming 'interviews':', {'data': error;'
        }).sort((a, b) =>;
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()).slice(0, 3), // Take only the next 3 interviews;
        setUpcomingInterviews(upcoming)} catch (error) {logErrorToProduction('Error loading upcoming 'interviews':', { 'data': error })} finally {setIsLoading(false)}'
    },loadInterviews()}, []),if (isLoading) {return (<Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;'
        <CardHeader>;
          <CardTitle className='text-lg flex items-center'>;'
            <Video className='h-5 w-5 mr-2 text-zion-purple' />;'
          <div className='space-y-4'>;'
            {[1, 2].map(i => (<div key={i} className='flex items-center gap-3 animate-pulse'>;'
                <div className='w-10 h-10 bg-zion-blue-light/30 rounded-full'></div>;'
                <div className='flex-1'>;'
                  <div className='h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2'></div>;'
                  <div className='h-3 w-1/2 bg-zion-blue-light/30 rounded'></div>;'
                </div>;
              </div>;
import React, { useEffect, useState } from 'react',import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',import { Button } from '@/components/ui/button',import { useInterviews } from '@/hooks/useInterviews',import { Interview } from '@/types/interview',import { format, isPast, parseISO } from 'date-fns',import Link from 'next/link',import { Calendar, Clock, Video  } from 'lucide-react';'
        setUpcomingInterviews (upcoming)} catch (error) {logErrorToProduction ('Error loading upcoming 'interviews':', {'data': error})} finally {setIsLoading (false)}'
              parseISO(b && b.scheduled_date).getTime()          ).slice(0, 3)// Take only the next 3 interviews;setUpcomingInterviews(upcoming)} catch (error) {logErrorToProduction('Error loading upcoming 'interviews':', {'data': error})} finally {setIsLoading(false)}'
    )<Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;'
      <CardHeader>;
        <CardTitle className='text-lg flex items-center'>;'
          <Video className='h-5 w-5 mr-2 text-zion-purple' />;'
        <div className='space-y-4'>;'
  return (const interviewDate = parseISO(interview.scheduled_date),const formattedDate = format(interviewDate, 'EEE, MMM d'),const formattedTime = format(interviewDate, ''h': mm a'),// Determine if interview is happening soon (within 30 minutes)const now = new Date(),const isStartingSoon =;'
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&;
              interviewDate.getTime() > now.getTime(),export function UpcomingInterviewsCard() {const { fetchInterviews } = useInterviews()const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),const [isLoading, setIsLoading] = useState(true)useEffect(() => {const loadInterviews  = null;return (<div key={interview.id} className='flex items-center gap-3'>;'
                <Avatar className='h-10 w-10 bg-zion-purple/10'>;'
                  {interview.client_avatar || interview.talent_avatar ? (<img;
                      }
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}<div className='flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>;'
                      {(interview.client_name || interview.talent_name || 'U').charAt(0)}'
                    </div>;
                  )}
                </Avatar>;
                <div className='flex-1'>;'
                  <div className='flex justify-between items-start'>;'
                    <p className='font-medium line-clamp-1'>;'
                      {interview.title || 'Interview'}</p>;'
          {upcomingInterviews && upcomingInterviews.map((interview) => {const interviewDate = parseISO(interview && interview.scheduled_date)const formattedDate = format(interviewDate, 'EEE, MMM d')const formattedTime  = format(interviewDate, ''h':mm a')// Determine if interview is happening soon (within 30 minutes)            const now = new Date()const isStartingSoon =;'
            return (<div key={interview && interview.id} className='flex items-center gap-3'>;'
                <Avatar className='h-10 w-10 bg-zion-purple/10'>;'
                      alt={interview && interview.client_name || interview && interview.talent_name || 'User'} // Ensure alt is string;' />;
                  ) : (<div className='flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>;'
                      {(interview && interview.client_name || interview && interview.talent_name || 'U').charAt(0)}'
                  <div className='flex items-center text-sm text-muted-foreground'>;'
                    <Clock className='h-3 w-3 mr-1' />;'
        <div className='mt-4 pt-3 border-t border-zion-blue-light/40'>;'
          <Button asChild size='sm' variant='outline' className='w-full'>;'
            <Link href='/interviews'>;'
          {upcoming_interviews.map ((interview) => {const interview_date = parseISO (interview.scheduled_date)const formatted_date = format (interview_date, 'EEE, MMM d')const formatted_time = format (interview_date, ''h':mm a')// Determine if interview is happening soon (within 30 minutes)            const now = new Date ()const isStartingSoon =;'
            return (<div key={interview.id} className='flex items - center gap - 3'>;'
                <Avatar className='h - 10 w - 10 bg - zion - purple / 10'>;'
                      alt={interview.client_name || interview.talent_name || 'User'} // Ensure alt is string;' />) : (<div className='flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium'>;'
                      {(interview.client_name || interview.talent_name || 'U').char_at (0)}'
