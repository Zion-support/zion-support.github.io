import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { SEO } from '@/components/SEO';
import {;
  BriefcaseIcon,;
  UserIcon,;
  MessageSquare,;
  Star,;
  PlusCircle,;
  FileText,;
  Inbox,;
  Video,;
} from 'lucide-react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { SuggestedJobs } from '@/components/jobs/SuggestedJobs';
import { useAuth } from '@/hooks/useAuth';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { TalentOnboardingSteps } from '@/components/onboarding/TalentOnboardingSteps';
import { AdvancedOnboardingSteps } from '@/components/onboarding/AdvancedOnboardingSteps';
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus';
import { MyApplications } from '@/components/jobs/MyApplications';
import { ProjectOfferBanner } from '@/components/projects/ProjectOfferBanner';
import { UpcomingInterviewsCard } from '@/components/interviews/UpcomingInterviewsCard';
function TalentDashboardContent() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("job-matches");
  const onboardingStatus = null;
import { useState, useEffect } from "react",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import Link from "next/link",
import { SEO } from "@/components/SEO",
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from 'lucide-react'
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { SuggestedJobs } from "@/components/jobs/SuggestedJobs",
import { useAuth } from "@/hooks/useAuth",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { TalentOnboardingSteps } from "@/components/onboarding/TalentOnboardingSteps",
import { AdvancedOnboardingSteps } from "@/components/onboarding/AdvancedOnboardingSteps",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { MyApplications } from "@/components/jobs/MyApplications",
import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner",
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",
function TalentDashboardContent() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("job-matches"),
  const onboardingStatus = useOnboardingStatus(),
  const showAdvanced =
    onboardingStatus.profileCompleted &&
    onboardingStatus.skillsAdded &&
    onboardingStatus.availabilitySet &&
    onboardingStatus.matchReceived,

                <div className='mt-4'>
                  <Button className='w-full' asChild>
                    <Link href='/messages'>
                      <MessageSquare className='h-4 w-4 mr-2' />


            


            {/* New Onboarding Progress Tracker */}

import { useState, useEffect } from "react",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import Link from "next/link",;
import { SEO } from "@/components/SEO",;
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from 'lucide-react';
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { SuggestedJobs } from "@/components/jobs/SuggestedJobs",;
import { useAuth } from "@/hooks/useAuth",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { TalentOnboardingSteps } from "@/components/onboarding/TalentOnboardingSteps",;
import { AdvancedOnboardingSteps } from "@/components/onboarding/AdvancedOnboardingSteps",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { MyApplications } from "@/components/jobs/MyApplications",;
import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner",;
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",;
function TalentDashboardContent() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState("job-matches"),;
  const onboardingStatus = useOnboardingStatus(),;
  const showAdvanced =;
    onboardingStatus.profileCompleted &&;
    onboardingStatus.skillsAdded &&;
    onboardingStatus.availabilitySet &&;
    onboardingStatus.matchReceived;
  return (;
    <>;
      <SEO;
        title="Talent Dashboard | Zion AI Marketplace";
        description="Your personalized talent dashboard with job matches and professional opportunities.";
          <div className='lg:col-span-2'>
            <Tabs defaultValue='job-matches' onValueChange={setActiveTab}>
              <TabsList className='mb-6'>
                <TabsTrigger value='job-matches' className='flex items-center'>
                  <BriefcaseIcon className='h-4 w-4 mr-2' />
              <TabsContent value='applications' className='mt-0'>
              <TabsContent value='saved' className='mt-0'>
                <Card className='bg-muted/30'>
                  <CardContent className='pt-6 text-center'>
                    <p className='text-muted-foreground'>

            <div className='mt-8'>;
              <UpcomingInterviewsCard />;
            </div>;

            <Card className='mt-8'>;
              <CardHeader>;
                <CardTitle className='text-lg'>Quick Stats</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='space-y-3'>;
                  <div className='flex justify-between'>;
                    <span className='text-muted-foreground'>Profile views</span>;
                    <span className='font-medium'>152</span>;
                  </div>;
                  <div className='flex justify-between'>;
                    <span className='text-muted-foreground'>Job matches</span>;
                    <span className='font-medium'>7</span>;
                  </div>;
                  <div className='flex justify-between'>;
                    <span className='text-muted-foreground'>Applications</span>;
                    <span className='font-medium'>3</span>;
                  </div>;
                  <div className='flex justify-between'>;
                    <span className='text-muted-foreground'>;
                      Profile completion;
                    </span>;
                    <span className='font-medium'>85%</span>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;

          <div className='lg:col-span-2'>;
            <Tabs defaultValue='job-matches' onValueChange={setActiveTab}>;
              <TabsList className='mb-6'>;
                <TabsTrigger value='job-matches' className='flex items-center'>;
                  <BriefcaseIcon className='h-4 w-4 mr-2' />;
                  AI Job Matches;
                </TabsTrigger>;
                <TabsTrigger value='applications'>My Applications</TabsTrigger>;
                <TabsTrigger value='saved'>Saved Jobs</TabsTrigger>;
              </TabsList>;

              <TabsContent value='job-matches' className='mt-0'>;
                <SuggestedJobs />;
              </TabsContent>;

              <TabsContent value='applications' className='mt-0'>;
                <MyApplications />;
                <div className='mt-4 flex justify-center'>;
                  <Button variant='outline' asChild>;
                    <Link href='/dashboard/talent/applications'>;
                      <Inbox className='h-4 w-4 mr-2' /> View Full Application;
                      Tracker;
                    </Link>;
                  </Button>;
                </div>;
              </TabsContent>;

              <TabsContent value='saved' className='mt-0'>;
                <Card className='bg-muted/30'>;
                  <CardContent className='pt-6 text-center'>;
                    <p className='text-muted-foreground'>;
                      You haven't saved any jobs yet.;
                    </p>;
                    <Button className='mt-4' asChild>;
                      <Link href='/jobs'>Browse Jobs</Link>;
                    </Button>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
      </main>;
    </>;
  );


      <TalentDashboardContent />;
    </ProtectedRoute>;
  );
};




            {/* New Onboarding Progress Tracker */}
            <TalentOnboardingSteps />;
            {show_advanced && (
              <div className='mt - 6'>;
                <AdvancedOnboardingSteps />;
              </div>)}
            {/* Upcoming Interviews Card */}
            <div className='mt - 8'>;
              <UpcomingInterviewsCard />;
            </div>;
            <Card className='mt - 8'>;
              <CardHeader>;
                <CardTitle className='text - lg'>Quick Stats</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='space - y-3'>;
                  <div className='flex justify - between'>;
                    <span className='text - muted - foreground'>Profile views</span>;
                    <span className='font - medium'>152</span>;
                  </div>;
                  <div className='flex justify - between'>;
                    <span className='text - muted - foreground'>Job matches</span>;
                    <span className='font - medium'>7</span>;
                  </div>;
                  <div className='flex justify - between'>;
                    <span className='text - muted - foreground'>Applications</span>;
                    <span className='font - medium'>3</span>;
                  </div>;
                  <div className='flex justify - between'>;
                    <span className='text - muted - foreground'>;
                      Profile completion;
                    </span>;
                    <span className='font - medium'>85%</span>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
          <div className='lg:col - span - 2'>;
            <Tabs default_value='job - matches' onValueChange={setActiveTab}>;
              <TabsList className='mb - 6'>;
                <TabsTrigger value='job - matches' className='flex items - center'>;
                  <BriefcaseIcon className='h - 4 w - 4 mr - 2' />;
                  AI Job Matches;
                </TabsTrigger>;
                <TabsTrigger value='applications'>My Applications</TabsTrigger>;
                <TabsTrigger value='saved'>Saved Jobs</TabsTrigger>;
              </TabsList>;
              <TabsContent value='job - matches' className='mt - 0'>;
                <SuggestedJobs />;
              </TabsContent>;
              <TabsContent value='applications' className='mt - 0'>;
                <MyApplications />;
                <div className='mt - 4 flex justify - center'>;
                  <Button variant='outline' as_child>;
                    <Link href='/dashboard / talent / applications'>;
                      <Inbox className='h - 4 w - 4 mr - 2' /> View Full Application;
                      Tracker;
                    </Link>;
                  </Button>;
                </div>;
              </TabsContent>;
              <TabsContent value='saved' className='mt - 0'>;
                <Card className='bg - muted / 30'>;
                  <CardContent className='pt - 6 text - center'>;
                    <p className='text - muted - foreground'>;
                      You haven't saved any jobs yet.;
                    </p>;
                    <Button className='mt - 4' as_child>;
                      <Link href='/jobs'>Browse Jobs</Link>;
                    </Button>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
      </main>;
    </>);
export default /**
 * TalentDashboard - Function description
 */
function TalentDashboard() {
  return (
    <ProtectedRoute>;
      <TalentDashboardContent />;
    </ProtectedRoute>);
}
;
