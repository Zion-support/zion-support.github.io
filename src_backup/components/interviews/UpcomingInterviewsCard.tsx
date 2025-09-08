
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Filter for confirmed interviews in the future

        const upcoming = interviews
          .filter(
            interview =>
              interview.status === 'confirmed &&
              !isPast(parseISO(interview.scheduled_date))
          )



<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          .sort(;
            (a, b) =>;
              parseISO(a.scheduled_date).getTime() -;
              parseISO(b.scheduled_date).getTime()          );



<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          .slice(0, 3); // Take only the next 3 interviews
        setUpcomingInterviews(upcoming)
      } catch (error) {
        logErrorToProduction(Error loading upcoming interviews:', {
          data: error
        })


          .sort((a, b) => 
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
          )
          .slice(0, 3), // Take only the next 3 interviews
        
        setUpcomingInterviews(upcoming)
      } catch (error) {
        logErrorToProduction('Error loading upcoming interviews:, { data: error })
      } finally {
        setIsLoading(false)
      }
    },

    loadInterviews()
  }, []),





<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (isLoading) {
    return (
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light>
        <CardHeader>
          <CardTitle className=text-lg flex items-center">
            <Video className="h-5 w-5 mr-2 text-zion-purple />
            Upcoming Interviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className=space-y-4">
            {[1, 2].map(i => (
              <div key={i} className="flex items-center gap-3 animate-pulse>
                <div className=w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>
                <div className="flex-1>
                  <div className=h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded></div>
                </div>
              </div>
<<<<<<< HEAD


=======


import React, { useEffect, useState } from 'react;
import { Card, CardContent, CardHeader, CardTitle } from @/components/ui/card';
import { Button } from '@/components/ui/button;
import { useInterviews } from @/hooks/useInterviews';
import { Interview } from '@/types/interview;
import { format, isPast, parseISO } from date-fns';
import Link from 'next/link;
import { Calendar, Clock, Video } from lucide-react';


origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useInterviews } from '@/hooks/useInterviews';
import { Interview } from '@/types/interview';
import { format, isPast, parseISO } from 'date-fns';
import Link from 'next/link';
import { Calendar, Clock, Video } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { logErrorToProduction } from '@/utils/productionLogger';
export function UpcomingInterviewsCard() {;
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect((,) => {;
    const loadInterviews = async () => {      setIsLoading(true);
      try {;
        const interviews = await fetchInterviews();
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(;
            interview =>;
              interview && interview.status === 'confirmed' &&;
              !isPast(parseISO(interview && interview.scheduled_date));
          );
          .sort(;
            (a, b) =>;
              parseISO(a && a.scheduled_date).getTime() -;
              parseISO(b && b.scheduled_date).getTime()          );
          .slice(0, 3); // Take only the next 3 interviews;
        setUpcomingInterviews(upcoming);
      } catch (error) {;
        logErrorToProduction('Error loading upcoming interviews:', {;
          data: error,;
        });
      } finally {;
        setIsLoading(false);
      }
    };
    loadInterviews();
  }, []);
  if (isLoading) {;
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
        <CardHeader>;
          <CardTitle className='text-lg flex items-center'>;
            <Video className='h-5 w-5 mr-2 text-zion-purple' />;
    load_interviews ();
  }, []);
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;
        <CardHeader>;
          <CardTitle className='text - lg flex items - center'>;
            <Video className='h - 5 w - 5 mr - 2 text - zion - purple' />;


            ))}
          </div>
        </CardContent>
      </Card>
    )
  }


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import Link from "next/link",;
import { Calendar, Clock, Video } from 'lucide-react';
<<<<<<< HEAD

=======
import { Avatar } from "@/components/ui/avatar",;
import {logErrorToProduction} from '@/utils/productionLogger',;
export function UpcomingInterviewsCard() {;
  const { fetchInterviews } = useInterviews(),;
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const loadInterviews = async () => {;
      setIsLoading(true),;
      try {;
        const interviews = await fetchInterviews(),;
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(interview =>;
            interview.status === 'confirmed' &&;
            !isPast(parseISO(interview.scheduled_date));
          );
          .sort((a, b) =>;
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime();
          );
          .slice(0, 3), // Take only the next 3 interviews;
        setUpcomingInterviews(upcoming);
      } catch (error) {;
        logErrorToProduction('Error loading upcoming interviews:', { data: error });
      } finally {;
        setIsLoading(false);
      }
    },;
    loadInterviews();
  }, []),;
  if (isLoading) {;
    return (;
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="text-lg flex items-center">;
            <Video className="h-5 w-5 mr-2 text-zion-purple" />;

            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Avatar } from '@/components / ui / avatar';
import { logErrorToProduction } from '@/utils / production_logger';
export /**
 * UpcomingInterviewsCard - Function description
 */
function UpcomingInterviewsCard() {
  const { fetch_interviews } = use_interviews ();
  const [upcoming_interviews, setUpcomingInterviews] = useState < Interview[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  useEffect ((, ) => {
    const load_interviews = async () => {      setIsLoading (true);
      try {
        const interviews = await fetch_interviews ();
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter (
            interview =>;
              interview.status === 'confirmed' &&;
              !is_past (parseISO (interview.scheduled_date)));
          .sort (
            (a, b) =>;
              parseISO (a.scheduled_date).get_time () -;
              parseISO (b.scheduled_date).get_time ()          );
          .slice (0, 3); // Take only the next 3 interviews;
        setUpcomingInterviews (upcoming);
      } catch (error) {
        logErrorToProduction ('Error loading upcoming interviews:', {
          data: error,
        });
      } finally {
        setIsLoading (false);
      }
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba



  }


ursor/fix-website-loading-errors-and-merge-6662
  }
  if (upcomingInterviews.length === 0) {

      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>
<<<<<<< HEAD

=======
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light>
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <CardHeader>
          <CardTitle className=text-lg flex items-center'>
            <Video className='h-5 w-5 mr-2 text-zion-purple />
            Upcoming Interviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className=text-center py-6'>
            <Calendar className='h-10 w-10 mx-auto mb-2 text-muted-foreground />
            <p className=text-sm text-muted-foreground'>
              No upcoming interviews scheduled
            </p>
            <Button asChild className='mt-4 variant=outline' size='sm>
              <Link href=/interviews'>Schedule Interview</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
          </div>;
        </CardContent>;
      </Card>;
    );
  }
  if (upcomingInterviews && upcomingInterviews.length === 0) {;
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
        <CardHeader>;
          <CardTitle className='text-lg flex items-center'>;
            <Video className='h-5 w-5 mr-2 text-zion-purple' />;
<<<<<<< HEAD

    load_interviews ();
  }, []);
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;
        <CardHeader>;
          <CardTitle className='text - lg flex items - center'>;
            <Video className='h - 5 w - 5 mr - 2 text - zion - purple' />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;


=======
          <div className="space-y-4">;
            {[1, 2].map(i => (;
              <div key={i} className="flex items-center gap-3 animate-pulse">;
                <div className="w-10 h-10 bg-zion-blue-light/30 rounded-full"></div>;
                <div className="flex-1">;
                  <div className="h-4 w-3/4 bg-zion-blue-light/30 rounded mb-2"></div>;
                  <div className="h-3 w-1/2 bg-zion-blue-light/30 rounded"></div>;
                </div>;
              </div>;
            ))}
          </div>;
        </CardContent>;
      </Card>;
          <div className="text-center py-6">;
            <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />;
            <p className="text-sm text-muted-foreground">No upcoming interviews scheduled</p>;
            <Button asChild className="mt-4" variant="outline" size="sm">;
              <Link href="/interviews">Schedule Interview</Link>;
            </Button>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>;
        </CardContent>;
      </Card>;
    );
<<<<<<< HEAD




  }
  if (upcomingInterviews.length === 0) {
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center'>
            <Video className='h-5 w-5 mr-2 text-zion-purple' />

=======
  }

  if (upcomingInterviews.length === 0) {
    return (
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Video className="h-5 w-5 mr-2 text-zion-purple" />
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Upcoming Interviews
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD

          <div className='text-center py-6'>
            <Calendar className='h-10 w-10 mx-auto mb-2 text-muted-foreground' />
            <p className='text-sm text-muted-foreground'>
              No upcoming interviews scheduled
            </p>
            <Button asChild className='mt-4' variant='outline' size='sm'>
              <Link href='/interviews'>Schedule Interview</Link>

=======
          <div className="text-center py-6">
            <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">No upcoming interviews scheduled</p>
            <Button asChild className="mt-4" variant="outline" size="sm">
              <Link href="/interviews">Schedule Interview</Link>
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </Button>
          </div>
        </CardContent>
      </Card>
    )
<<<<<<< HEAD
=======
  }
  return (
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
      <CardHeader>
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </div>;
        </CardContent>;
      </Card>;
    );
  }

  if (upcomingInterviews && upcomingInterviews.length === 0) {;
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
        <CardHeader>;
          <CardTitle className='text-lg flex items-center'>;
            <Video className='h-5 w-5 mr-2 text-zion-purple' />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className='text-center py-6>;
            <Calendar className=h-10 w-10 mx-auto mb-2 text-muted-foreground' />;
            <p className='text-sm text-muted-foreground>;
              No upcoming interviews scheduled;
            </p>;
            <Button asChild className=mt-4' variant='outline size=sm'>;
              <Link href='/interviews>Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
  return (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba




            const interviewDate = parseISO(interview.scheduled_date),
            const formattedDate = format(interviewDate, EEE, MMM d'),
            const formattedTime = format(interviewDate, 'h: mm a),
            
            // Determine if interview is happening soon (within 30 minutes)
            const now = new Date(),
            const isStartingSoon = 
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime(),
            

<<<<<<< HEAD


=======
import { Avatar } from '@/components/ui/avatar';
import { logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadInterviews = null;
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/delete-old-data-records-6bba
            return (
              <div key={interview.id} className="flex items-center gap-3>
                <Avatar className=h-10 w-10 bg-zion-purple/10">
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar || interview.talent_avatar}

                      alt={interview.client_name || interview.talent_name}
<<<<<<< HEAD

=======
                      loading="lazy"
                    />
                  ) : (
                      loading="lazy"
                    />
                  ) : (
                      loading="lazy"
                    />
                  ) : (
                      loading='lazy'                    />
                  ) : (
                    <div className='flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>
                      {(
                        interview.client_name ||
                        interview.talent_name ||
                        'U'
                      ).charAt(0)}
                    </div>
            return (<div key={interview.id} className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-zion-purple/10">
                  {/* Assuming AvatarImage and AvatarFallback are part of Avatar or imported separately */}
                  {/* For now, conditional rendering based on available image */}
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img 
                      src={interview.client_avatar || interview.talent_avatar || undefined} // Ensure src is string | undefined
                      alt={interview.client_name || interview.talent_name || "User"} // Ensure alt is string
                    />
                  ) : (
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}
                    </div>
                      alt={interview.client_name || interview.talent_name}<div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium>;
                      {(interview.client_name || interview.talent_name || U").charAt(0)}
                    </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  )}
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-medium line-clamp-1">
                      {interview.title || "Interview"}

                    </p>

                    {isStartingSoon && (
                      <span className=text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>
                        Soon
                      </span>
<<<<<<< HEAD

    <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
      <CardHeader>;

=======
    <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
      <CardHeader>;

    <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
      <CardHeader>;
        <CardTitle className=text-lg flex items-center'>;
          <Video className='h-5 w-5 mr-2 text-zion-purple />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <CardTitle className='text-lg flex items-center'>;
          <Video className='h-5 w-5 mr-2 text-zion-purple' />;
    ),;
  }
;
  return (;
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-lg flex items-center">;
          <Video className="h-5 w-5 mr-2 text-zion-purple" />;
<<<<<<< HEAD

=======
        <CardTitle className=text-lg flex items-center'>;
          <Video className='h-5 w-5 mr-2 text-zion-purple />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;

<<<<<<< HEAD
        <div className="space-y-4">;
          {upcomingInterviews.map(interview => {;
            const interviewDate = parseISO(interview.scheduled_date),;
            const formattedDate = format(interviewDate, 'EEE, MMM d'),;
            const formattedTime = format(interviewDate, 'h:mm a'),;
            ;
            // Determine if interview is happening soon (within 30 minutes);
            const now = new Date(),;
            const isStartingSoon = ;
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&;
              interviewDate.getTime() > now.getTime(),;
            ;
            return (;
              <div key={interview.id} className="flex items-center gap-3">;
                <Avatar className="h-10 w-10 bg-zion-purple/10">;
                  {interview.client_avatar || interview.talent_avatar ? (;
                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}
                      loading="lazy";
                    />;
                  ) :(;
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}
                    </div>;
                  )}
                </Avatar>;
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <p className="font-medium line-clamp-1">;
                      {interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (;
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;
                        Soon;
                      </span>;
                    )}

=======
        <div className=space-y-4'>;
          {upcomingInterviews && upcomingInterviews.map(interview => {const interviewDate = parseISO(interview && interview.scheduled_date)const formattedDate = format(interviewDate, 'EEE, MMM d)const formattedTime  = format(interviewDate, h:mm a')// Determine if interview is happening soon (within 30 minutes)            const now = new Date()const isStartingSoon =;
              interviewDate && interviewDate.getTime() - now && now.getTime() < 30 * 60 * 1000 &&;
              interviewDate && interviewDate.getTime() > now && now.getTime()return (<div key={interview && interview.id} className='flex items-center gap-3>;
                <Avatar className=h-10 w-10 bg-zion-purple/10'>;
                  {interview && interview.client_avatar || interview && interview.talent_avatar ? (<img;
                      src={interview && interview.client_avatar || interview && interview.talent_avatar}
                      alt={interview && interview.client_name || interview && interview.talent_name}
                      loading='lazy                    />;
                  ) : (<div className=flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>;
                      {(interview && interview.client_name ||;
                        interview && interview.talent_name ||;
                        'U;
                      ).charAt(0)}
                    </div>;
            return (<div key={interview && interview.id} className="flex items-center gap-3>;
                <Avatar className=h-10 w-10 bg-zion-purple/10">;
                  {/* Assuming AvatarImage and AvatarFallback are part of Avatar or imported separately */}
                  {/* For now, conditional rendering based on available image */}
                  {interview && interview.client_avatar || interview && interview.talent_avatar ? (<img;
                      src={interview && interview.client_avatar || interview && interview.talent_avatar || undefined} // Ensure src is string | undefined;
                      alt={interview && interview.client_name || interview && interview.talent_name || "User} // Ensure alt is string;
                    />;
                  ) : (<div className=flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;
                      {(interview && interview.client_name || interview && interview.talent_name || "U).charAt(0)}
                    </div>;
                  )}
                </Avatar>;
                <div className=flex-1'>;
                  <div className='flex justify-between items-start>;
                    <p className=font-medium line-clamp-1'>;
                      {interview && interview.title || 'Interview}
                    </p>;
                    {isStartingSoon && (<span className=text-xs px-1 && 1.5 py-0 && 0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>;
                        Soon;
                      </span>;
                    )}</div>;
                  <div className=flex items-center text-sm text-muted-foreground">;
                    <Clock className="h-3 w-3 mr-1 />;

                    {formattedDate} at {formattedTime}
                  </div>;

                    )}</div>;
                  <div className=flex items-center text-sm text-muted-foreground">;
                    <Clock className="h-3 w-3 mr-1 />;
                    {formattedDate} at {formattedTime}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>;
                  <div className="flex items-center text-sm text-muted-foreground">;
                    <Clock className="h-3 w-3 mr-1" />;
                    {formattedDate} at {formattedTime}
                </div>;
              </div>;
            );
          })}
        </div>

        
        <div className=mt-4 pt-3 border-t border-zion-blue-light/40">
          <Button asChild size="sm variant=outline" className="w-full>
            <Link href=/interviews">
              View All Interviews
            </Link>


          </Button>
        </div>
      </CardContent>
    </Card>
                  </div>;
                </div>;
              </div>;

<<<<<<< HEAD
    return (
      <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;

=======
            )})}
        </div>;<div className='mt-4 pt-3 border-t border-zion-blue-light/40>;
          <Button asChild size=sm' variant='outline className=w-full'>;
          <div className='space - y-4>;
            {[1, 2].map (index => (<div key={i} className=flex items - center gap - 3 animate - pulse'>;
                <div className='w - 10 h - 10 bg - zion - blue - light / 30 rounded - full></div>;
                <div className=flex - 1'>;
                  <div className='h - 4 w - 3/4 bg - zion - blue - light / 30 rounded mb - 2></div>;
                  <div className=h - 3 w - 1/2 bg - zion - blue - light / 30 rounded'></div>;
                </div>;
              </div>))}
          </div>;
        </CardContent>;
      </Card>)}
  // Check condition;
if ( {) {$2;
}
    return (<Card className='bg - zion - blue - dark / 40 border - zion - blue - light>;

    return (
      <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <CardHeader>;
          <CardTitle className=text - lg flex items - center'>;
            <Video className='h - 5 w - 5 mr - 2 text - zion - purple />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className=text - center py - 6'>;
            <Calendar className='h - 10 w - 10 mx - auto mb - 2 text - muted - foreground />;
            <p className=text - sm text - muted - foreground'>;
              No upcoming interviews scheduled;
            </p>;
            <Button as_child className='mt - 4 variant=outline' size='sm>;
              <Link href=/interviews'>Schedule Interview</Link>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>)}
  return (<Card className='bg - zion - blue - dark / 40 border - zion - blue - light>;
      <CardHeader>;
        <CardTitle className=text - lg flex items - center'>;
          <Video className='h - 5 w - 5 mr - 2 text - zion - purple />;
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className=space - y-4'>;
          {upcoming_interviews.map (interview => {const interview_date = parseISO (interview.scheduled_date)const formatted_date = format (interview_date, 'EEE, MMM d)const formatted_time = format (interview_date, h:mm a')// Determine if interview is happening soon (within 30 minutes)            const now = new Date ()const isStartingSoon =;
              interview_date.get_time () - now.get_time () < 30 * 60 * 1000 &&;
              interview_date.get_time () > now.get_time ()return (<div key={interview.id} className='flex items - center gap - 3>;
                <Avatar className=h - 10 w - 10 bg - zion - purple / 10'>;
                  {interview.client_avatar || interview.talent_avatar ? (<img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}
                      loading='lazy                    />) : (<div className=flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium'>;
                      {(interview.client_name ||;
                        interview.talent_name ||;
                        'U).char_at (0)}
                    </div>;
            return (<div key={interview.id} className="flex items - center gap - 3>;
                <Avatar className=h - 10 w - 10 bg - zion - purple / 10">;
                  {/* Assuming AvatarImage and AvatarFallback are part of Avatar or imported separately */}
                  {/* For now, conditional rendering based on available image */}
                  {interview.client_avatar || interview.talent_avatar ? (<img;
                      src={interview.client_avatar || interview.talent_avatar || undefined} // Ensure src is string | undefined;
                      alt={interview.client_name || interview.talent_name || "User} // Ensure alt is string;
                    />) : (<div className=flex h - full w - full items - center justify - center bg - zion - purple / 20 text - zion - purple font - medium">;
                      {(interview.client_name || interview.talent_name || "U").char_at (0)}
                    </div>)}
                </Avatar>;
                <div className=flex - 1'>;
                  <div className='flex justify - between items - start>;
                    <p className=font - medium line - clamp - 1'>;
                      {interview.title || 'Interview}
                    </p>;
                    {isStartingSoon && (<span className=text - xs px - 1.5 py - 0.5 bg - green - 600 / 20 text - green - 400 rounded - full animate - pulse'>;
                        Soon;
                      </span>)}
                  </div>;
                  <div className='flex items - center text - sm text - muted - foreground>;
                    <Clock className=h - 3 w - 3 mr - 1' />;
                    {formatted_date} at {formatted_time}
                  </div>;
                </div>;
              </div>)})}
        </div>;
        <div className='mt - 4 pt - 3 border - t border - zion - blue - light / 40>;
          <Button as_child size=sm' variant='outline className=w - full'>;
            <Link href='/interviews'>View All Interviews</Link>;
          </Button>;
        </div>;
      </CardContent>;
            ),;
          })}
        </div>;
        ;
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;
          <Button asChild size="sm" variant="outline" className="w-full">;
            <Link href="/interviews">;
              View All Interviews;
            </Link>;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;
  ),;}
 export function UpcomingInterviewsCard () {;
  const {;
  fetchInterviews ;
}= useInterviews ();
const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]> ([]);
const [isLoading, setIsLoading] = useState (true);
useEffect ( () => {;
  const loadInterviews = async () => {;
  setIsLoading (true);
try {;
  const interviews = await fetchInterviews ();
}, []);
<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> </div> </div>) ) ;
}</div> </CardContent> </Card>) ";
}<CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> <div className="text-center py-6" > <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" /> <p className="text-sm text-muted-foreground" >No upcoming interviews scheduled</p> <Button asChild className="mt-4" variant="outline" size="sm" > <Link href="/interviews" >Schedule Interview</Link> </Button> </div> </CardContent> </Card> return (<Card className="bg-zion-blue-dark/40 border-zion-blue-light" > <CardHeader> <CardTitle className="text-lg flex items-center" > <Video className="h-5 w-5 mr-2 text-zion-purple" /> Upcoming Interviews </CardTitle> </CardHeader> <CardContent> interviewDate.getTime () - now.getTime () < 30 * 60 * 1000 && interviewDate.getTime () > now.getTime ();
return (Soon </span>) ;
}</div> </div> </div> </div>) ;
}) ";
}</div> <div className="mt-4 pt-3 border-t border-zion-blue-light/40" > <Button asChild size="sm" variant="outline" className="w-full" > <Link href="/interviews" > View All Interviews </Link> </Button> </div> </CardContent> </Card>) ;
}"
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {formattedDate} at {formattedTime}
                  </div>;
                </div>;
              </div>;
            );
          })}
        </div>
        
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">
          <Button asChild size="sm" variant="outline" className="w-full">
            <Link href="/interviews">
              View All Interviews
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
}
;
;

}



    </Card>);
}
}

<<<<<<< HEAD


=======

;

  );
origin/cursor/automate-test-improve-and-merge-code-2533
  )


  );

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
