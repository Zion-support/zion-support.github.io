<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { SEO } from '@/components/SEO'
import {
  BriefcaseIcon
  UserIcon
  MessageSquare
  Star
  PlusCircle
  FileText
  Inbox
  Video
} from 'lucide-react'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { SuggestedJobs } from '@/components/jobs/SuggestedJobs'
import { useAuth } from '@/hooks/useAuth'
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { TalentOnboardingSteps } from '@/components/onboarding/TalentOnboardingSteps'
import { AdvancedOnboardingSteps } from '@/components/onboarding/AdvancedOnboardingSteps'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'
import { MyApplications } from '@/components/jobs/MyApplications'
import { ProjectOfferBanner } from '@/components/projects/ProjectOfferBanner'
import { UpcomingInterviewsCard } from '@/components/interviews/UpcomingInterviewsCard'
<<<<<<< HEAD

function TalentDashboardContent() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("job-matches");
  const onboardingStatus = null;
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
=======
<<<<<<< HEAD
=======
function TalentDashboardContent() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('job-matches')
  const onboardingStatus = useOnboardingStatus()
  const showAdvanced = null;
    onboardingStatus.profileCompleted &&
    onboardingStatus.skillsAdded &&
    onboardingStatus.availabilitySet &&
    onboardingStatus.matchReceived
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

function TalentDashboardContent() {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('job-matches');
  const onboardingStatus = useOnboardingStatus();
  const showAdvanced =;
    onboardingStatus && onboardingStatus.profileCompleted &&;
    onboardingStatus && onboardingStatus.skillsAdded &&;
    onboardingStatus && onboardingStatus.availabilitySet &&;
    onboardingStatus && onboardingStatus.matchReceived;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <>;
      <SEO
        title='Talent Dashboard | Zion AI Marketplace'
        description='Your personalized talent dashboard with job matches and professional opportunities.'
<<<<<<< HEAD
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h1 className='text-3xl font-bold'>Talent Dashboard</h1>
            <p className='text-muted-foreground mt-1'>
              Find opportunities matched to your skills and experience
            </p>
          </div>
          <div className='flex gap-4'>
            <Button variant='outline' asChild>
              <Link href='/settings/account'>
                <UserIcon className='h-4 w-4 mr-2' />
                Profile Settings
              </Link>
            </Button>
            <Button asChild>
              <Link href='/dashboard/talent/applications'>
                <Inbox className='h-4 w-4 mr-2' /> Application Tracker
              </Link>
            </Button>
          </div>
        </div>
        {/* Project Offer Banner - Show pending offers */}
        <ProjectOfferBanner />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
=======



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          <div>
            <Card className='mb-8'>
              <CardHeader className='pb-2'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <Avatar className='h-12 w-12 border'>
                      {user?.avatarUrl ? (
                        <img
                          src={user.avatarUrl}
                          alt={user.displayName |'User'}
                          loading='lazy'
                        />
                      ) : (
                        <div className='flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase'>
                          {user?.displayName?.charAt(0) |'U'}
                        </div>
                      )}
                    </Avatar>
                    <div>
                      <CardTitle>{user?.displayName |'User'}</CardTitle>
                      <CardDescription>
                        {user?.headline |'AI Professional'}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className='bg-green-100 text-green-800'>Online</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                  <div className='flex flex-col items-center p-3 bg-muted/30 rounded-md'>
                    <div className='flex items-center gap-1 text-lg font-bold'>
                      <Star className='h-4 w-4 text-yellow-500' />
                      4.9
                    </div>
                    <span className='text-xs text-muted-foreground'>
                      Rating
                    </span>
                  </div>
                  <div className='flex flex-col items-center p-3 bg-muted/30 rounded-md'>
                    <div className='text-lg font-bold'>18</div>
                    <span className='text-xs text-muted-foreground'>
                      Projects
                    </span>
                  </div>
                </div>
<<<<<<< HEAD
                <div className='mt-4'>
                  <Button className='w-full' asChild>
                    <Link href='/messages'>
                      <MessageSquare className='h-4 w-4 mr-2' />
=======


                
                <div className="mt-4">
                  <Button className="w-full" asChild>
                    <Link href="/messages">
                      <MessageSquare className="h-4 w-4 mr-2" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                      Messages
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
<<<<<<< HEAD
=======

=======

            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {/* New Onboarding Progress Tracker */}
            <TalentOnboardingSteps />
            {showAdvanced && (
              <div className="mt-6">
                <AdvancedOnboardingSteps />
              </div>

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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      />;
      <main className='container mx-auto px-4 py-8'>;
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>;
          <div>;
            <h1 className='text-3xl font-bold'>Talent Dashboard</h1>;
            <p className='text-muted-foreground mt-1'>;
              Find opportunities matched to your skills and experience;
            </p>;
          </div>;
          <div className='flex gap-4'>;
            <Button variant='outline' asChild>;
              <Link href='/settings/account'>;
                <UserIcon className='h-4 w-4 mr-2' />;
                Profile Settings;
              </Link>;
            </Button>;
            <Button asChild>;
              <Link href='/dashboard/talent/applications'>;
                <Inbox className='h-4 w-4 mr-2' /> Application Tracker;
              </Link>;
            </Button>;
          </div>;
        </div>;

        {/* Project Offer Banner - Show pending offers */}
        <ProjectOfferBanner />;

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>;
          <div>;
            <Card className='mb-8'>;
              <CardHeader className='pb-2'>;
                <div className='flex items-center justify-between'>;
                  <div className='flex items-center gap-3'>;
                    <Avatar className='h-12 w-12 border'>;
                      {user?.avatarUrl ? (;
                        <img
                          src={user && user.avatarUrl}
                          alt={user && user.displayName || 'User'}
                          loading='lazy'
                        />;
                      ) : (;
                        <div className='flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase'>;
                          {user?.displayName?.charAt(0) || 'U'}
                        </div>;
                      )}
                    </Avatar>;
                    <div>;
                      <CardTitle>{user?.displayName || 'User'}</CardTitle>;
=======
import { useState, useEffect } from 'react';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import Link from 'next / link';
import { SEO } from '@/components / SEO';
import {
  BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  FileText,
  Inbox,
  Video,
} from 'lucide-react';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { SuggestedJobs } from '@/components / jobs / SuggestedJobs';
import { use_auth } from '@/hooks / use_auth';
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Avatar } from '@/components / ui / avatar';
import { Badge } from '@/components / ui / badge';
import { TalentOnboardingSteps } from '@/components / onboarding / TalentOnboardingSteps';
import { AdvancedOnboardingSteps } from '@/components / onboarding / AdvancedOnboardingSteps';
import { useOnboardingStatus } from '@/hooks / useOnboardingStatus';
import { MyApplications } from '@/components / jobs / MyApplications';
import { ProjectOfferBanner } from '@/components / projects / ProjectOfferBanner';
import { UpcomingInterviewsCard } from '@/components / interviews / UpcomingInterviewsCard';
/**
 * TalentDashboardContent - Function description
 */
function TalentDashboardContent() {
  const { user } = use_auth ();
  const [active_tab, setActiveTab] = useState ('job - matches');
  const onboarding_status = useOnboardingStatus ();
  const show_advanced =;
    onboarding_status.profile_completed &&;
    onboarding_status.skills_added &&;
    onboarding_status.availability_set &&;
    onboarding_status.match_received;
  return (
    <>;
      <SEO;
        title='Talent Dashboard | Zion AI Marketplace';
        description='Your personalized talent dashboard with job matches and professional opportunities.';
      />;
      <main className='container mx - auto px - 4 py - 8'>;
        <div className='flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8'>;
          <div>;
            <h1 className='text - 3xl font - bold'>Talent Dashboard</h1>;
            <p className='text - muted - foreground mt - 1'>;
              Find opportunities matched to your skills and experience;
            </p>;
          </div>;
          <div className='flex gap - 4'>;
            <Button variant='outline' as_child>;
              <Link href='/settings / account'>;
                <UserIcon className='h - 4 w - 4 mr - 2' />;
                Profile Settings;
              </Link>;
            </Button>;
            <Button as_child>;
              <Link href='/dashboard / talent / applications'>;
                <Inbox className='h - 4 w - 4 mr - 2' /> Application Tracker;
              </Link>;
            </Button>;
          </div>;
        </div>;
        {/* Project Offer Banner - Show pending offers */}
        <ProjectOfferBanner />;
        <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 8'>;
          <div>;
            <Card className='mb - 8'>;
              <CardHeader className='pb - 2'>;
                <div className='flex items - center justify - between'>;
                  <div className='flex items - center gap - 3'>;
                    <Avatar className='h - 12 w - 12 border'>;
                      {user?.avatar_url ? (
                        <img;
                          src={user.avatar_url}
                          alt={user.display_name || 'User'}
                          loading='lazy';
                        />) : (
                        <div className='flex h - full w - full items - center justify - center bg - muted text - lg font - medium uppercase'>;
                          {user?.display_name?.char_at (0) || 'U'}
                        </div>)}
                    </Avatar>;
                    <div>;
                      <CardTitle>{user?.display_name || 'User'}</CardTitle>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                      <CardDescription>;
                        {user?.headline || 'AI Professional'}
                      </CardDescription>;
                    </div>;
                  </div>;
                  <Badge className='bg-green-100 text-green-800'>Online</Badge>;
                </div>;
              </CardHeader>;
              <CardContent>;
                <div className='grid grid-cols-2 gap-4 mt-4'>;
                  <div className='flex flex-col items-center p-3 bg-muted/30 rounded-md'>;
                    <div className='flex items-center gap-1 text-lg font-bold'>;
                      <Star className='h-4 w-4 text-yellow-500' />;
                      4 && 4.9;
                    </div>;
                    <span className='text-xs text-muted-foreground'>;
                      Rating;
                    </span>;
                  </div>;
                  <div className='flex flex-col items-center p-3 bg-muted/30 rounded-md'>;
                    <div className='text-lg font-bold'>18</div>;
                    <span className='text-xs text-muted-foreground'>;
                      Projects;
                    </span>;
                  </div>;
                </div>;

                <div className='mt-4'>;
                  <Button className='w-full' asChild>;
                    <Link href='/messages'>;
                      <MessageSquare className='h-4 w-4 mr-2' />;
                      Messages;
                    </Link>;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;

<<<<<<< HEAD
            {/* New Onboarding Progress Tracker */}
            <TalentOnboardingSteps />;
            {showAdvanced && (;
              <div className='mt-6'>;
                <AdvancedOnboardingSteps />;
              </div>;
            )}
            {/* Upcoming Interviews Card */}
            <div className='mt-8'>
              <UpcomingInterviewsCard />
            </div>
            <Card className='mt-8'>
=======
            
            <Card className="mt-8">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              <CardHeader>
                <CardTitle className='text-lg'>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Profile views</span>
                    <span className='font-medium'>152</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Job matches</span>
                    <span className='font-medium'>7</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Applications</span>
                    <span className='font-medium'>3</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>
                      Profile completion
                    </span>
                    <span className='font-medium'>85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
<<<<<<< HEAD
          <div className='lg:col-span-2'>
            <Tabs defaultValue='job-matches' onValueChange={setActiveTab}>
              <TabsList className='mb-6'>
                <TabsTrigger value='job-matches' className='flex items-center'>
                  <BriefcaseIcon className='h-4 w-4 mr-2' />
=======


          
          <div className="lg:col-span-2">
            <Tabs defaultValue="job-matches" onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="job-matches" className="flex items-center">
                  <BriefcaseIcon className="h-4 w-4 mr-2" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  AI Job Matches
                </TabsTrigger>
                <TabsTrigger value='applications'>My Applications</TabsTrigger>
                <TabsTrigger value='saved'>Saved Jobs</TabsTrigger>
              </TabsList>
              <TabsContent value='job-matches' className='mt-0'>
                <SuggestedJobs />
              </TabsContent>
<<<<<<< HEAD
              <TabsContent value='applications' className='mt-0'>
=======
              
              <TabsContent value="applications" className="mt-0">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                <MyApplications />
                <div className='mt-4 flex justify-center'>
                  <Button variant='outline' asChild>
                    <Link href='/dashboard/talent/applications'>
                      <Inbox className='h-4 w-4 mr-2' /> View Full Application
                      Tracker
                    </Link>
                  </Button>
                </div>
              </TabsContent>
<<<<<<< HEAD
              <TabsContent value='saved' className='mt-0'>
                <Card className='bg-muted/30'>
                  <CardContent className='pt-6 text-center'>
                    <p className='text-muted-foreground'>
=======


              
              <TabsContent value="saved" className="mt-0">
                <Card className="bg-muted/30">
                  <CardContent className="pt-6 text-center">
                    <p className="text-muted-foreground">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                      You haven't saved any jobs yet.
                    </p>
                    <Button className='mt-4' asChild>
                      <Link href='/jobs'>Browse Jobs</Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </>
  )
<<<<<<< HEAD
export default function TalentDashboard() {
=======
<<<<<<< HEAD
export default function TalentDashboard() {
  return (
    <ProtectedRoute>
<<<<<<< HEAD
      <TalentDashboardContent />
    </ProtectedRoute>
  )
}
=======

      <TalentDashboardContent />;
    </ProtectedRoute>;
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
}
;

export default function TalentDashboard() {;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <ProtectedRoute>
      <TalentDashboardContent />
    </ProtectedRoute>
  )
}
<<<<<<< HEAD

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
