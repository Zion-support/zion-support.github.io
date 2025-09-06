<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { useInterviews } from '@/hooks/useInterviews'
import { Interview } from '@/types/interview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SEO } from '@/components/SEO'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { InterviewCard } from '@/components/interviews/InterviewCard'
import { Button } from '@/components/ui/button'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React, { useEffect, useState } from "react",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { InterviewCard } from "@/components/interviews/InterviewCard",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
=======
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
=======
import { Button } from "@/components/ui/button",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Calendar, Clock, Video } from 'lucide-react'
import { format, isAfter, parseISO, startOfDay } from "date-fns";
function InterviewsContent() {

  const { interviews, isLoading, fetchInterviews } = useInterviews()
  const [activeTab, setActiveTab] = useState('upcoming')
  useEffect(() => {function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews()
  const [activeTab, setActiveTab] = useState("upcoming")
  useEffect((,) => {
    // Modified to handle Promise<Interview[]> return type
    const loadInterviews = async () => {
      await fetchInterviews()
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
=======
<<<<<<< HEAD
  const { interviews, isLoading, fetchInterviews } = useInterviews(),
  const [activeTab, setActiveTab] = useState("upcoming"),
  
  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type
    const loadInterviews = async () => {
      await fetchInterviews()
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    },
    
    loadInterviews()
  }, []),


  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string Interview[]> = {},
    
    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd'),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      if (!grouped[dateKey]) {
        grouped[dateKey] = []
      }
<<<<<<< HEAD
      grouped[date_key].push (interview);
    });
    return grouped;
  }
  const upcoming_grouped = groupInterviewsByDate (upcoming_interviews);
  const pending_grouped = groupInterviewsByDate (pending_interviews);
  const past_grouped = groupInterviewsByDate (past_interviews);
  const renderInterviewGroups = (
    groupedInterviews: Record<string, Interview[]>
  ) => {
=======

      grouped[dateKey].push(interview)

    }),
    
    return grouped
  },
  
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews),
  const pendingGrouped = groupInterviewsByDate(pendingInterviews),
  const pastGrouped = groupInterviewsByDate(pastInterviews),

  const renderInterviewGroups = (groupedInterviews: Record<string Interview[]>) => {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    return Object.entries(groupedInterviews)
      .sort(
        ([dateA], [dateB]) =>
          parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(([date, interviews]) => (
        <div key={date} className='mb-8'>
          <h3 className='text-lg font-medium text-white mb-4 flex items-center'>
            <Calendar className='h-5 w-5 mr-2' />
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>;
            {interviews && interviews.map(interview => (;
              <InterviewCard
                key={interview && interview.id}
                interview={interview}
<<<<<<< HEAD
                onRefresh={async () => {
                  await fetchInterviews() }}
              />
=======

                onRefresh={async () => {;
                  await fetchInterviews();
                }}
              />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            ))}
          </div>
        </div>
      ))
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
<<<<<<< HEAD
=======

  },




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <>;
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
              Schedule and manage your video interviews;
            </p>;
          </div>;
        </div>;

<<<<<<< HEAD
        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className='space-y-8'>;
          <TabsList className='mb-6'>;
            <TabsTrigger value='upcoming' className='flex items-center'>;
              <Clock className='h-4 w-4 mr-2' />;
              Upcoming;
              {upcomingInterviews && upcomingInterviews.length > 0 && (;
                <span className='ml-2 bg-primary rounded-full px-2 py-0 && 0.5 text-xs'>;
                  {upcomingInterviews && upcomingInterviews.length}
                </span>;
              )}
            </TabsTrigger>;
            <TabsTrigger value='pending'>;
              Pending;
              {pendingInterviews && pendingInterviews.length > 0 && (;
                <span className='ml-2 bg-amber-500 rounded-full px-2 py-0 && 0.5 text-xs'>;
                  {pendingInterviews && pendingInterviews.length}
                </span>;
              )}
            </TabsTrigger>
            <TabsTrigger value='past'>Past</TabsTrigger>
          </TabsList>
          <TabsContent value='upcoming' className='space-y-6'>
=======


        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Upcoming
              {upcomingInterviews.length > 0 && (
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {upcomingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              {pendingInterviews.length > 0 && (

                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {pendingInterviews.length}
                </span>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              )}


          
          <TabsContent value="upcoming" className="space-y-6">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
          <TabsContent value='pending' className='space-y-6'>
=======


          
          <TabsContent value="pending" className="space-y-6">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
          <TabsContent value='past' className='space-y-6'>
=======


          
          <TabsContent value="past" className="space-y-6">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
    <ProtectedRoute>
      <InterviewsContent />
    </ProtectedRoute>
  )

          <TabsContent value='upcoming' className='space-y-6'>;
            {isLoading ? (;
              <div className='flex justify-center py-12'>;
                <div className='animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full'></div>;
              </div>;
            ) : upcomingInterviews && upcomingInterviews.length > 0 ? (;
              renderInterviewGroups(upcomingGrouped);
            ) : (;
              <div className='text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light'>;
                <Video className='h-12 w-12 mx-auto text-muted-foreground mb-4' />;
                <h3 className='text-xl font-medium mb-2'>;
                  No upcoming interviews;
                </h3>;
                <p className='text-muted-foreground mb-6'>;
                  You don't have any scheduled interviews coming up.;
                </p>;
              </div>;
            )}
          </TabsContent>;

          <TabsContent value='pending' className='space-y-6'>;
            {isLoading ? (;
              <div className='flex justify-center py-12'>;
                <div className='animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full'></div>;
              </div>;
            ) : pendingInterviews && pendingInterviews.length > 0 ? (;
              renderInterviewGroups(pendingGrouped);
            ) : (;
              <div className='text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light'>;
                <Clock className='h-12 w-12 mx-auto text-muted-foreground mb-4' />;
                <h3 className='text-xl font-medium mb-2'>;
                  No pending interviews;
                </h3>;
                <p className='text-muted-foreground mb-6'>;
                  You don't have any interview requests that need your;
                  attention.;
                </p>;
              </div>;
            )}
          </TabsContent>;

          <TabsContent value='past' className='space-y-6'>;
            {isLoading ? (;
              <div className='flex justify-center py-12'>;
                <div className='animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full'></div>;
              </div>;
            ) : pastInterviews && pastInterviews.length > 0 ? (;
              renderInterviewGroups(pastGrouped);
            ) : (;
              <div className='text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light'>;
                <Calendar className='h-12 w-12 mx-auto text-muted-foreground mb-4' />;
                <h3 className='text-xl font-medium mb-2'>No past interviews</h3>;
                <p className='text-muted-foreground'>;
                  Your interview history will appear here.;
                </p>;
              </div>;
            )}
          </TabsContent>;
        </Tabs>;
      </main>;
    </>;
  );

export default function Interviews() {;
  return (
    <ProtectedRoute>;
      <InterviewsContent />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
