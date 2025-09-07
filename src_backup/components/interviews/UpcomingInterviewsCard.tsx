<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useInterviews } from '@/hooks/useInterviews'
import { Interview } from '@/types/interview'
import { format, isPast, parseISO } from 'date-fns'
import Link from 'next/link'
import { Calendar, Clock, Video } from 'lucide-react'
import { Avatar } from "@/components/ui/avatar";
import {logErrorToProduction} from '@/utils/productionLogger';
export function UpcomingInterviewsCard() {

  const { fetchInterviews } = useInterviews()
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect((,) => {
    const loadInterviews = async () => {      setIsLoading(true)
      try {
        const interviews = await fetchInterviews()
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Filter for confirmed interviews in the future

        const upcoming = interviews
          .filter(
            interview =>
              interview.status === 'confirmed &&
              !isPast(parseISO(interview.scheduled_date))
          )

<<<<<<< HEAD

=======
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useInterviews } from "@/hooks/useInterviews",
import { Interview } from "@/types/interview",
import { format, isPast, parseISO } from "date-fns",
import Link from "next/link",
import { Calendar, Clock, Video } from 'lucide-react'
import { Avatar } from "@/components/ui/avatar",
import {logErrorToProduction} from '@/utils/productionLogger',
export function UpcomingInterviewsCard() {

  const { fetchInterviews } = useInterviews(),
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),

  useEffect(() => {
    const loadInterviews = async () => {
      setIsLoading(true),
      try {
        const interviews = await fetchInterviews(),
        
        // Filter for confirmed interviews in the future
        const upcoming = interviews
          .filter(interview => 
            interview.status === 'confirmed' && 
            !isPast(parseISO(interview.scheduled_date))
          )
          .sort(
            (a, b) =>
              parseISO(a.scheduled_date).getTime() -
              parseISO(b.scheduled_date).getTime()          )
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          .sort(;
            (a, b) =>;
              parseISO(a.scheduled_date).getTime() -;
              parseISO(b.scheduled_date).getTime()          );
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import Link from "next/link",;
<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { use_interviews } from '@/hooks / use_interviews';
import { Interview } from '@/types / interview';
import { format, is_past, parseISO } from 'date - fns';
import Link from 'next / link';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Calendar, Clock, Video } from 'lucide-react';
import { Avatar } from '@/components/ui/ avatar';
import { logErrorToProduction } from '@/utils/ production_logger';
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
// Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(interview =>;
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
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React, { useEffect, useState } from 'react;
import { Card, CardContent, CardHeader, CardTitle } from @/components/ui/card';
import { Button } from '@/components/ui/button;
import { useInterviews } from @/hooks/useInterviews';
import { Interview } from '@/types/interview;
import { format, isPast, parseISO } from date-fns';
import Link from 'next/link;
import { Calendar, Clock, Video } from lucide-react';


origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect((,) => {;
    const loadInterviews = async () => {      setIsLoading(true);
      try {;
        const interviews = await fetchInterviews();
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        setUpcomingInterviews(upcoming);
      } catch (error) {;
        logErrorToProduction('Error loading upcoming interviews:', {;
          data: error,;
        });
      } finally {;
        setIsLoading(false);
      }
    };
<<<<<<< HEAD

    loadInterviews();
  }, []);

=======
    loadInterviews();
  }, []);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
=======
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import Link from "next/link",;
import { Calendar, Clock, Video } from 'lucide-react';
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD

          </div>;
        </CardContent>;
      </Card>;
    );

=======
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc



  }
<<<<<<< HEAD
  if (upcomingInterviews.length === 0) {
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light>
=======


ursor/fix-website-loading-errors-and-merge-6662
  }
  if (upcomingInterviews.length === 0) {
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light>
=======
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
  if (upcomingInterviews && upcomingInterviews.length === 0) {;
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
        <CardHeader>;
          <CardTitle className='text-lg flex items-center'>;
            <Video className='h-5 w-5 mr-2 text-zion-purple' />;
<<<<<<< HEAD
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
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;
        </CardContent>;
      </Card>;
    );
<<<<<<< HEAD
  }

  if (upcomingInterviews.length === 0) {
    return (
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Video className="h-5 w-5 mr-2 text-zion-purple" />
=======



  }
  if (upcomingInterviews.length === 0) {
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center'>
            <Video className='h-5 w-5 mr-2 text-zion-purple' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Upcoming Interviews
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          <div className="text-center py-6">
            <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">No upcoming interviews scheduled</p>
            <Button asChild className="mt-4" variant="outline" size="sm">
              <Link href="/interviews">Schedule Interview</Link>
=======
          <div className='text-center py-6'>
            <Calendar className='h-10 w-10 mx-auto mb-2 text-muted-foreground' />
            <p className='text-sm text-muted-foreground'>
              No upcoming interviews scheduled
            </p>
            <Button asChild className='mt-4' variant='outline' size='sm'>
              <Link href='/interviews'>Schedule Interview</Link>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </Button>
          </div>
        </CardContent>
      </Card>
    )
<<<<<<< HEAD
  }
  return (
    <Card className="bg-zion-blue-dark/40 border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Video className="h-5 w-5 mr-2 text-zion-purple" />
          Upcoming Interviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingInterviews.map(interview => {
            const interviewDate = parseISO(interview.scheduled_date)
            const formattedDate = format(interviewDate, 'EEE, MMM d')
            const formattedTime = format(interviewDate, 'h:mm a')
            // Determine if interview is happening soon (within 30 minutes)            const now = new Date()
            const isStartingSoon = null;
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&
              interviewDate.getTime() > now.getTime()

            return (
              <div key={interview.id} className='flex items-center gap-3'>
                <Avatar className='h-10 w-10 bg-zion-purple/10'>
                  {interview.client_avatar |interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar |interview.talent_avatar}
                      alt={interview.client_name |interview.talent_name}
                      loading='lazy'                    />
                  ) : (
                    <div className='flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium'>
                      {(
                        interview.client_name |
                        interview.talent_name |
                        'U'
                      ).charAt(0)}
                    </div>
            return (<div key={interview.id} className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-zion-purple/10">
                  {/* Assuming AvatarImage and AvatarFallback are part of Avatar or imported separately */}
                  {/* For now, conditional rendering based on available image */}
                  {interview.client_avatar |interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar |interview.talent_avatar |undefined} // Ensure src is string | undefined
                      alt={interview.client_name |interview.talent_name |"User"} // Ensure alt is string
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">
                      {(interview.client_name |interview.talent_name |"U").charAt(0)}
                    </div>
                  )}
                </Avatar>
                <div className='flex-1'>
                  <div className='flex justify-between items-start'>
                    <p className='font-medium line-clamp-1'>
                      {interview.title |'Interview'}
=======
          </div>;
        </CardContent>;
      </Card>;
    );
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc




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
<<<<<<< HEAD
            
=======



<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Avatar } from '@/components/ui/avatar';
import { logErrorToProduction } from '@/utils/productionLogger';

export function UpcomingInterviewsCard() {

  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadInterviews = null;
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            return (
              <div key={interview.id} className="flex items-center gap-3>
                <Avatar className=h-10 w-10 bg-zion-purple/10">
                  {interview.client_avatar || interview.talent_avatar ? (
                    <img
                      src={interview.client_avatar || interview.talent_avatar}
<<<<<<< HEAD
                      alt={interview.client_name || interview.talent_name}<div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium>;
                      {(interview.client_name || interview.talent_name || U").charAt(0)}
                    </div>;
=======
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
                      alt={interview.client_name || interview.talent_name}<div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium>;
                      {(interview.client_name || interview.talent_name || U").charAt(0)}
                    </div>;
=======
                      alt={interview.client_name || interview.talent_name}
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}
                    </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  )}
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-medium line-clamp-1">
                      {interview.title || "Interview"}

                    </p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      <span className='text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>
                    </p>
                    {isStartingSoon && (
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">
                        Soon
                      </span>
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <Clock className='h-3 w-3 mr-1' />
                    {formattedDate} at {formattedTime}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='mt-4 pt-3 border-t border-zion-blue-light/40'>
          <Button asChild size='sm' variant='outline' className='w-full'>
            <Link href='/interviews'>View All Interviews</Link>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    {isStartingSoon && (
                      <span className=text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse'>
                        Soon
                      </span>
<<<<<<< HEAD
    <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
      <CardHeader>;
        <CardTitle className=text-lg flex items-center'>;
          <Video className='h-5 w-5 mr-2 text-zion-purple />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
      <CardHeader>;
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
        <CardTitle className=text-lg flex items-center'>;
          <Video className='h-5 w-5 mr-2 text-zion-purple />;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
                    {formattedDate} at {formattedTime}
                  </div>;
=======
=======
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
<<<<<<< HEAD
=======

                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/interviews/UpcomingInterviewsCard.tsx
                    {formattedDate} at {formattedTime}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>;
                  <div className="flex items-center text-sm text-muted-foreground">;
                    <Clock className="h-3 w-3 mr-1" />;
                    {formattedDate} at {formattedTime}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
    return (
      <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}



    </Card>);
}
}

<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;

  );
origin/cursor/automate-test-improve-and-merge-code-2533
  )


  );
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/interviews/UpcomingInterviewsCard.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
