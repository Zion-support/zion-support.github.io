import { useState, useEffect  } from 'react';
import { Button  } from '@/components/ui/button';import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link';
import { SEO  } from '@/components/SEO';
import { BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  FileText,
  Inbox,
  Video,;
 } from 'lucide-react';import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { SuggestedJobs  } from '@/components/jobs/SuggestedJobs';import { useAuth  } from '@/hooks/useAuth';
import { Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
 } from '@/components/ui/card';import { Avatar  } from '@/components/ui/avatar';
import { Badge  } from '@/components/ui/badge';import { TalentOnboardingSteps  } from '@/components/onboarding/TalentOnboardingSteps';
import { AdvancedOnboardingSteps  } from '@/components/onboarding/AdvancedOnboardingSteps';import { useOnboardingStatus  } from '@/hooks/useOnboardingStatus';
import { MyApplications  } from '@/components/jobs/MyApplications';import { ProjectOfferBanner  } from '@/components/projects/ProjectOfferBanner';
import { UpcomingInterviewsCard  } from '@/components/interviews/UpcomingInterviewsCard';function TalentDashboardContent() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('job-matches')
  const onboardingStatus = useOnboardingStatus()
  const showAdvanced =
    onboardingStatus && onboardingStatus.profileCompleted &&
    onboardingStatus && onboardingStatus.skillsAdded &&
    onboardingStatus && onboardingStatus.availabilitySet &&
    onboardingStatus && onboardingStatus.matchReceived
import { useState, useEffect  } from 'react';
import { Button  } from '@/components/ui/button';import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link';
import { SEO  } from '@/components/SEO';
import { BriefcaseIcon
  UserIcon
  MessageSquare
  Star
  PlusCircle
  FileText
  Inbox
  Video;
 } from 'lucide-react';import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { SuggestedJobs  } from '@/components/jobs/SuggestedJobs';import { useAuth } from '@/hooks/useAuth'
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card';
import { Avatar  } from '@/components/ui/avatar';
import { Badge  } from '@/components/ui/badge';import { TalentOnboardingSteps  } from '@/components/onboarding/TalentOnboardingSteps';
import { AdvancedOnboardingSteps  } from '@/components/onboarding/AdvancedOnboardingSteps';import { useOnboardingStatus  } from '@/hooks/useOnboardingStatus';
import { MyApplications  } from '@/components/jobs/MyApplications';import { ProjectOfferBanner  } from '@/components/projects/ProjectOfferBanner';
import { UpcomingInterviewsCard  } from '@/components/interviews/UpcomingInterviewsCard';const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("job-matches")
  const onboardingStatus = null
import { useState, useEffect } from "react",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import Link from "next/link",
import { SEO } from "@/components/SEO",;
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video  } from 'lucide-react';
import { ProtectedRoute  } from '@/components/ProtectedRoute';,
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






  return (
    <>
      <SEO 
        title="Talent Dashboard | Zion AI Marketplace" 
        description="Your personalized talent dashboard with job matches and professional opportunities." 
      />
      <main className="container mx-auto px-4 py-8"></main>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"></div>
          <div></div>
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>
            <p className="text-muted-foreground mt-1">Find opportunities matched to your skills and experience</p>
                </div>
          <div className="flex gap-4"></div>
            <Button variant="outline" asChild></Button>
              <Link href="/settings/account"></Link>
                <UserIcon className="h-4 w-4 mr-2" />
                Profile Settings
              </Link>
                </Button>
            <Button asChild></Button>
              <Link href="/dashboard/talent/applications"></Link>
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker
              </Link>
                </Button>
          </div>
                </div>
                {/* Project Offer Banner - Show pending offers */}
                <ProjectOfferBanner />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

</div>
          <div></div>
            <Card className="mb-8"></Card>
              <CardHeader className="pb-2"></CardHeader>
                <div className="flex items-center justify-between"></div>
                  <div className="flex items-center gap-3"></div>
                    <Avatar className="h-12 w-12 border"></Avatar>
                {user?.avatarUrl ? (
                        <img
                          src={user.avatarUrl}
                          alt={user.displayName |'User'}
                          loading='lazy'
                        />

                      ) : (
                        <div className='flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase'></div>
                {user?.displayName?.charAt(0) |'U'}
                <img src={user.avatarUrl} alt={user.displayName || "User"} loading="lazy" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase"></div>
                {user?.displayName?.charAt(0) || "U"}
                </div>
                      )}
                </Avatar>
                    <div></div>
                      <CardTitle></CardTitle>
                {user?.displayName |'User'}
                </CardTitle>
                      <CardDescription></CardDescription>
                {user?.headline |'AI Professional'}
                </CardDescription>
                      <CardTitle></CardTitle>
                {user?.displayName || "User"}
                </CardTitle>
                      <CardDescription></CardDescription>
                {user?.headline || "AI Professional"}
                </CardDescription>
                </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
              </CardHeader>
              <CardContent></CardContent>
                <div className="grid grid-cols-2 gap-4 mt-4"></div>
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md"></div>
                    <div className="flex items-center gap-1 text-lg font-bold"></div>
                      <Star className="h-4 w-4 text-yellow-500" />
                      4.9
                    </div>
                    <span className="text-xs text-muted-foreground">Rating</span>
                </div>
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md"></div>
                    <div className="text-lg font-bold">18</div>
                    <span className="text-xs text-muted-foreground">Projects</span>
                </div>
                </div>
                <div className='mt-4'></div>
                  <Button className='w-full' asChild></Button>
                    <Link href='/messages'></Link>
                      <MessageSquare className='h-4 w-4 mr-2' />
                
                <div className="mt-4"></div>
                  <Button className="w-full" asChild></Button>
                    <Link href="/messages"></Link>
                      <MessageSquare className="h-4 w-4 mr-2" />



                      Messages
                    </Link>
                </Button>
                </div>
                </CardContent>
            </Card>
                {/* New Onboarding Progress Tracker */}
                <TalentOnboardingSteps />
                {showAdvanced && (
              <div className="mt-6"></div>
                <AdvancedOnboardingSteps />
              </div>

            )}
            {/* Upcoming Interviews Card */}
                <div className='mt-8'></div>
              <UpcomingInterviewsCard />
            </div>
            <Card className='mt-8'></Card>
import { useState, useEffect } from "react",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import Link from "next/link",
import { SEO } from "@/components/SEO",;
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video  } from 'lucide-react';
import { ProtectedRoute  } from '@/components/ProtectedRoute';,
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
    onboardingStatus.matchReceived
  return (
    <>
      <SEO
        title="Talent Dashboard | Zion AI Marketplace"
        description="Your personalized talent dashboard with job matches and professional opportunities."
      />
      <main className="container mx-auto px-4 py-8"></main>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"></div>
          <div></div>
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>
            <p className="text-muted-foreground mt-1">Find opportunities matched to your skills and experience</p>
                </$1>
          <div className="flex gap-4"></div>
            <Button variant="outline" asChild></Button>
              <Link href="/settings/account"></Link>
                <UserIcon className="h-4 w-4 mr-2" />
                Profile Settings</$1>
                </$1>
            <Button asChild></Button>
              <Link href="/dashboard/talent/applications"></Link>
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker</$1>
                </$1></$1>
                </$1>
                {/* Project Offer Banner - Show pending offers */}
                <ProjectOfferBanner />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"></div>
          <div></div>
            <Card className="mb-8"></Card>
              <CardHeader className="pb-2"></CardHeader>
                <div className="flex items-center justify-between"></div>
                  <div className="flex items-center gap-3"></div>
                    <Avatar className="h-12 w-12 border"></Avatar>
                {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.displayName || "User"} loading="lazy" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase"></div>
                {user?.displayName?.charAt(0) || "U"}
                </div>
                      )}
                </Avatar>
                    <div></div>
                      <CardTitle></CardTitle>
                {user?.displayName || 'User'}
                </CardTitle>;
import { useState, useEffect  } from 'react';
import { Button  } from '@/components / ui / button';import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs'
import Link from 'next / link';
import { SEO  } from '@/components / SEO';
import { BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  FileText,
  Inbox,
  Video,;
 } from 'lucide-react';import { ProtectedRoute  } from '@/components / ProtectedRoute';
import { SuggestedJobs  } from '@/components / jobs / SuggestedJobs';import { use_auth } from '@/hooks / use_auth'
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Avatar  } from '@/components / ui / avatar';
import { Badge  } from '@/components / ui / badge';import { TalentOnboardingSteps  } from '@/components / onboarding / TalentOnboardingSteps';
import { AdvancedOnboardingSteps  } from '@/components / onboarding / AdvancedOnboardingSteps';import { useOnboardingStatus  } from '@/hooks / useOnboardingStatus';
import { MyApplications  } from '@/components / jobs / MyApplications';import { ProjectOfferBanner  } from '@/components / projects / ProjectOfferBanner';
import { UpcomingInterviewsCard  } from '@/components / interviews / UpcomingInterviewsCard';/**
 * TalentDashboardContent - Function description
 */
function TalentDashboardContent() {
  const { user } = use_auth ()
  const [active_tab, setActiveTab] = useState ('job - matches')
  const onboarding_status = useOnboardingStatus ()
  const show_advanced =
    onboarding_status.profile_completed &&
    onboarding_status.skills_added &&
    onboarding_status.availability_set &&
    onboarding_status.match_received
  return (
    <>
      <SEO
        title='Talent Dashboard | Zion AI Marketplace'
        description='Your personalized talent dashboard with job matches and professional opportunities.'
      />
      <main className='container mx - auto px - 4 py - 8'></main>
        <div className='flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8'></div>
          <div></div>
            <h1 className='text - 3xl font - bold'>Talent Dashboard</h1>
            <p className='text - muted - foreground mt - 1'></p>
              Find opportunities matched to your skills and experience</$1>
                </$1>
          <div className='flex gap - 4'></div>
            <Button variant='outline' as_child></Button>
              <Link href='/settings / account'></Link>
                <UserIcon className='h - 4 w - 4 mr - 2' />
                Profile Settings</$1>
                </$1>
            <Button as_child></Button>
              <Link href='/dashboard / talent / applications'></Link>
                <Inbox className='h - 4 w - 4 mr - 2' /> Application Tracker</$1>
                </$1></$1>
                </$1>
                {/* Project Offer Banner - Show pending offers */}
                <ProjectOfferBanner />
        <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 8'></div>
          <div></div>
            <Card className='mb - 8'></Card>
              <CardHeader className='pb - 2'></CardHeader>
                <div className='flex items - center justify - between'></div>
                  <div className='flex items - center gap - 3'></div>
                    <Avatar className='h - 12 w - 12 border'></Avatar>
                {user?.avatar_url ? (
                        <img
                          src={user.avatar_url}
                          alt={user.display_name || 'User'}
                          loading='lazy'
                        />) : (
                        <div className='flex h - full w - full items - center justify - center bg - muted text - lg font - medium uppercase'></div>
                {user?.display_name?.char_at (0) || 'U'}
                </div>)}
                </Avatar>
                    <div></div>
                      <CardTitle></CardTitle>
                {user?.display_name || 'User'}
                </CardTitle>
                      <CardDescription></CardDescription>
                {user?.headline || 'AI Professional'}
                </CardDescription>
                </$1></$1>
                  <Badge className='bg - green - 100 text - green - 800'>Online</Badge>
                </$1></$1>
              <CardContent></CardContent>
                <div className='grid grid - cols - 2 gap - 4 mt - 4'></div>
                  <div className='flex flex - col items - center p - 3 bg - muted / 30 rounded - md'></div>
                    <div className='flex items - center gap - 1 text - lg font - bold'></div>
                      <Star className='h - 4 w - 4 text - yellow - 500' />
                      4.9</$1>
                    <span className="text-xs text-muted-foreground">Rating</span>
                </$1>
                  <div className='flex flex - col items - center p - 3 bg - muted / 30 rounded - md'></div>
                    <div className='text - lg font - bold'>18</div>
                    <span className='text - xs text - muted - foreground'></span>
                      Projects</$1>
                </$1></$1>
                <div className='mt - 4'></div>
                  <Button className='w - full' as_child></Button>
                    <Link href='/messages'></Link>
                      <MessageSquare className='h - 4 w - 4 mr - 2' />
                      Messages</$1>
                </$1></$1>
                </$1></$1>
            <Card className="mt-8">


</Card>
              <CardHeader></CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
              <CardContent></CardContent>
                <div className="space-y-3"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-muted-foreground">Profile views</span>
                    <span className="font-medium">152</span>
                </div>
                  <div className="flex justify-between"></div>
                    <span className="text-muted-foreground">Job matches</span>
                    <span className="font-medium">7</span>
                </div>
                  <div className="flex justify-between"></div>
                    <span className="text-muted-foreground">Applications</span>
                    <span className="font-medium">3</span>
                </div>
                  <div className="flex justify-between"></div>
                    <span className="text-muted-foreground">Profile completion</span>
                    <span className="font-medium">85%</span>
                </div>
                </div>
                </CardContent>
            </Card>
                </div>
          <div className='lg:col-span-2'></div>
            <Tabs defaultValue='job-matches' onValueChange={setActiveTab}></Tabs>
              <TabsList className='mb-6'></TabsList>
                <TabsTrigger value='job-matches' className='flex items-center'></TabsTrigger>
                  <BriefcaseIcon className='h-4 w-4 mr-2' />
          
          <div className="lg:col-span-2"></div>
            <Tabs defaultValue="job-matches" onValueChange={setActiveTab}></Tabs>
              <TabsList className="mb-6"></TabsList>
                <TabsTrigger value="job-matches" className="flex items-center"></TabsTrigger>
                  <BriefcaseIcon className="h-4 w-4 mr-2" />


                  AI Job Matches
                </TabsTrigger>
                <TabsTrigger value="applications">My Applications</TabsTrigger>
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
                </TabsList>
              <TabsContent value='job-matches' className='mt-0'>
</TabsContent>
                <SuggestedJobs />
              </TabsContent>
              <TabsContent value='applications' className='mt-0'>
              </TabsContent>
              <TabsContent value="job-matches" className="mt-0"></TabsContent>
                <SuggestedJobs />
              </TabsContent>
              
              <TabsContent value="applications" className="mt-0">


</TabsContent>
                <MyApplications />
                <div className="mt-4 flex justify-center"></div>
                  <Button variant="outline" asChild></Button>
                    <Link href="/dashboard/talent/applications"></Link>
                      <Inbox className="h-4 w-4 mr-2" /> View Full Application Tracker
                    </Link>
                </Button>
                </div>
                </TabsContent>
              <TabsContent value='saved' className='mt-0'></TabsContent>
                <Card className='bg-muted/30'></Card>
                  <CardContent className='pt-6 text-center'></CardContent>
                    <p className='text-muted-foreground'>
              </p>
              <TabsContent value="saved" className="mt-0"></TabsContent>
                <Card className="bg-muted/30"></Card>
                  <CardContent className="pt-6 text-center"></CardContent>
                    <p className="text-muted-foreground">

</p>
                      You haven't saved any jobs yet.
                    </p>
                    <Button className="mt-4" asChild></Button>
                      <Link href="/jobs">Browse Jobs</Link>
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



            <div className='mt-8'></div>
              <UpcomingInterviewsCard /></$1>
            <Card className='mt-8'></Card>
              <CardHeader></CardHeader>
                <CardTitle className='text-lg'>Quick Stats</CardTitle>
                </$1>
              <CardContent></CardContent>
                <div className='space-y-3'></div>
                  <div className='flex justify-between'></div>
                    <span className='text-muted-foreground'>Profile views</span>
                    <span className='font-medium'>152</span>
                </$1>
                  <div className='flex justify-between'></div>
                    <span className='text-muted-foreground'>Job matches</span>
                    <span className='font-medium'>7</span>
                </$1>
                  <div className='flex justify-between'></div>
                    <span className='text-muted-foreground'>Applications</span>
                    <span className='font-medium'>3</span>
                </$1>
                  <div className='flex justify-between'></div>
                    <span className='text-muted-foreground'></span>
                      Profile completion</$1>
                    <span className='font-medium'>85%</span>
                </$1></$1>
                </$1></$1>
                </$1>
          <div className='lg:col-span-2'></div>
            <Tabs defaultValue='job-matches' onValueChange={setActiveTab}></Tabs>
              <TabsList className='mb-6'></TabsList>
                <TabsTrigger value='job-matches' className='flex items-center'></TabsTrigger>
                  <BriefcaseIcon className='h-4 w-4 mr-2' />
                  AI Job Matches</$1>
                <TabsTrigger value='applications'>My Applications</TabsTrigger>
                <TabsTrigger value='saved'>Saved Jobs</TabsTrigger>
                </$1>
              <TabsContent value='job-matches' className='mt-0'></TabsContent>
                <SuggestedJobs /></$1>
              <TabsContent value='applications' className='mt-0'></TabsContent>
                <MyApplications />
                <div className='mt-4 flex justify-center'></div>
                  <Button variant='outline' asChild></Button>
                    <Link href='/dashboard/talent/applications'></Link>
                      <Inbox className='h-4 w-4 mr-2' /> View Full Application
                      Tracker</$1>
                </$1></$1>
                </$1>
              <TabsContent value='saved' className='mt-0'></TabsContent>
                <Card className='bg-muted/30'></Card>
                  <CardContent className='pt-6 text-center'></CardContent>
                    <p className='text-muted-foreground'></p>
                      You haven't saved any jobs yet.</$1>
                    <Button className='mt-4' asChild></Button>
                      <Link href='/jobs'>Browse Jobs</Link>
                </$1></$1>
                </$1></$1>
                </$1></$1>
                </$1></$1>
    </>
  )
      <TalentDashboardContent /></$1>
  )
}
                </$1>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </Link></p>
                </main>