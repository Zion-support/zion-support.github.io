import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { SEO } from '@/components/SEO'
import {
  BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  FileText,
  Inbox,
  Video } from 'lucide-react'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { SuggestedJobs } from '@/components/jobs/SuggestedJobs'
import { useAuth } from '@/hooks/useAuth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { TalentOnboardingSteps } from '@/components/onboarding/TalentOnboardingSteps'
import { AdvancedOnboardingSteps } from '@/components/onboarding/AdvancedOnboardingSteps'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'
import { MyApplications } from '@/components/jobs/MyApplications'
import { ProjectOfferBanner } from '@/components/projects/ProjectOfferBanner'
import { UpcomingInterviewsCard } from '@/components/interviews/UpcomingInterviewsCard'
function TalentDashboardContent() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('job-matches')
  const onboardingStatus = useOnboardingStatus()
  const showAdvanced =
    onboardingStatus && onboardingStatus.profileCompleted &&
    onboardingStatus && onboardingStatus.skillsAdded &&
    onboardingStatus && onboardingStatus.availabilitySet &&
    onboardingStatus && onboardingStatus.matchReceived
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




  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("job-matches")
  const onboardingStatus = null
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






  return (
    <>
      <SEO />
        title="Talent Dashboard | Zion AI Marketplace" 
        description="Your personalized talent dashboard with job matches and professional opportunities." 
      />
      <main className="container mx-auto px-4 py-8">
        <div>
          <div>
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>
            <p className="text-muted-foreground mt-1">Find opportunities matched to your skills and experience</p>
          </div>
          <div>
            <Button />
              <Link />
                <UserIcon />
                Profile Settings
              </Link>
            </Button>
            <Button />
              <Link />
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker
              </Link>
            </Button>
          </div>
        </div>
        {/* Project Offer Banner - Show pending offers */}

        <ProjectOfferBanner />
        <div>
          <div>
          <div>
            <Card />
              <CardHeader />
                <div>
          <div>
                    <Avatar />
                      {user?.avatarUrl ? (
                        <img
                          src={user.avatarUrl}

                          alt={user.displayName |'User'}

                          loading='lazy'
                        />

                      ) : (
                        <div>
                          {user?.displayName?.charAt(0) |'U'}

                        <img src={user.avatarUrl} alt={user.displayName || "User"} loading="lazy" />
                      ) : (
                        <div>
                          {user?.displayName?.charAt(0) || "U"}

                        </div>
                      )}

                    </Avatar>
                    <div>
                      <CardTitle>{user?.displayName |'User'}</CardTitle>
                      <CardDescription />
                        {user?.headline |'AI Professional'}

                      </CardDescription>
                      <CardTitle>{user?.displayName || "User"}</CardTitle>
                      <CardDescription>{user?.headline || "AI Professional"}</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
              </CardHeader>
              <CardContent />
                <div>
          <div>
                    <div>
                      <Star />
                      4.9
                    </div>
                    <span className="text-xs text-muted-foreground">Rating</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold">18</div>
                    <span className="text-xs text-muted-foreground">Projects</span>
                  </div>
                </div>
                <div>
                  <Button />
                    <Link />
                      <MessageSquare />
                <div>
                  <Button />
                    <Link />
                      <MessageSquare />
                      Messages
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>


            




            {/* New Onboarding Progress Tracker */}

            <TalentOnboardingSteps />
            {showAdvanced && (
              <div>
                <AdvancedOnboardingSteps />
              </div>

            )}

            {/* Upcoming Interviews Card */}

            <div>
              <UpcomingInterviewsCard />
            </div>
            <Card />
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
    onboardingStatus.matchReceived
  return (
    <>
      <SEO />
        title="Talent Dashboard | Zion AI Marketplace"
        description="Your personalized talent dashboard with job matches and professional opportunities."
      />
      <main className="container mx-auto px-4 py-8">
        <div>
          <div>
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>
            <p className="text-muted-foreground mt-1">Find opportunities matched to your skills and experience</p></$1>
          <div>
            <Button />
              <Link />
                <UserIcon />
                Profile Settings</$1></$1>
            <Button />
              <Link />
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker</$1></$1></$1></$1>
        {/* Project Offer Banner - Show pending offers */}

        <ProjectOfferBanner />
        <div>
          <div>
            <Card />
              <CardHeader />
                <div>
          <div>
                    <Avatar />
                      {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.displayName || "User"} loading="lazy" />
                      ) : (
                        <div>
                          {user?.displayName?.charAt(0) || "U"}

                        </div>
                      )}

                    </Avatar>
                    <div>
                      <CardTitle>{user?.displayName || 'User'}</CardTitle>
import { useState, useEffect } from 'react'
import { Button } from '@/components / ui / button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs'
import Link from 'next / link'
import { SEO } from '@/components / SEO'
import {
  BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  FileText,
  Inbox,
  Video } from 'lucide-react'
import { ProtectedRoute } from '@/components / ProtectedRoute'
import { SuggestedJobs } from '@/components / jobs / SuggestedJobs'
import { use_auth } from '@/hooks / use_auth'
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle } from '@/components / ui / card'
import { Avatar } from '@/components / ui / avatar'
import { Badge } from '@/components / ui / badge'
import { TalentOnboardingSteps } from '@/components / onboarding / TalentOnboardingSteps'
import { AdvancedOnboardingSteps } from '@/components / onboarding / AdvancedOnboardingSteps'
import { useOnboardingStatus } from '@/hooks / useOnboardingStatus'
import { MyApplications } from '@/components / jobs / MyApplications'
import { ProjectOfferBanner } from '@/components / projects / ProjectOfferBanner'
import { UpcomingInterviewsCard } from '@/components / interviews / UpcomingInterviewsCard'
/**
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
      <SEO />
        title='Talent Dashboard | Zion AI Marketplace'
        description='Your personalized talent dashboard with job matches and professional opportunities.'
      />
      <main className='container mx - auto px - 4 py - 8'>
        <div>
          <div>
            <h1 className='text - 3xl font - bold'>Talent Dashboard</h1>
            <p className='text - muted - foreground mt - 1'>
              Find opportunities matched to your skills and experience</$1></$1>
          <div>
            <Button />
              <Link />
                <UserIcon />
                Profile Settings</$1></$1>
            <Button />
              <Link />
                <Inbox className='h - 4 w - 4 mr - 2' /> Application Tracker</$1></$1></$1></$1>
        {/* Project Offer Banner - Show pending offers */}

        <ProjectOfferBanner />
        <div>
          <div>
            <Card />
              <CardHeader />
                <div>
          <div>
                    <Avatar />
                      {user?.avatar_url ? (
                        <img
                          src={user.avatar_url}

                          alt={user.display_name || 'User'}

                          loading='lazy'
                        />) : (
                        <div>
                          {user?.display_name?.char_at (0) || 'U'}

                        </div>)}

                    </Avatar>
                    <div>
                      <CardTitle>{user?.display_name || 'User'}</CardTitle>
                      <CardDescription />
                        {user?.headline || 'AI Professional'}

                      </CardDescription></$1></$1>
                  <Badge className='bg - green - 100 text - green - 800'>Online</Badge></$1></$1>
              <CardContent />
                <div>
          <div>
                    <div>
                      <Star />
                      4.9</$1>
                    <span className="text-xs text-muted-foreground">Rating</span></$1>
                  <div>
                    <div className='text - lg font - bold'>18</div>
                    <span className='text - xs text - muted - foreground'>
                      Projects</$1></$1></$1>
                <div>
                  <Button />
                    <Link />
                      <MessageSquare />
                      Messages</$1></$1></$1></$1></$1>
            <Card />
              <CardHeader />
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent />
                <div>
          <div>
                    <span className="text-muted-foreground">Profile views</span>
                    <span className="font-medium">152</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Job matches</span>
                    <span className="font-medium">7</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Applications</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Profile completion</span>
                    <span className="font-medium">85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Tabs />
              <TabsList />
                <TabsTrigger />
                  <BriefcaseIcon />
          <div>
            <Tabs />
              <TabsList />
                <TabsTrigger />
                  <BriefcaseIcon />
                  AI Job Matches
                </TabsTrigger>
                <TabsTrigger value="applications">My Applications</TabsTrigger>
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
              </TabsList>
              <TabsContent />
                <SuggestedJobs />
              </TabsContent>
              <TabsContent />
              <TabsContent />
                <SuggestedJobs />
              </TabsContent>
              
              <TabsContent />
                <MyApplications />
                <div>
                  <Button />
                    <Link />
                      <Inbox className="h-4 w-4 mr-2" /> View Full Application Tracker
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent />
                <Card />
                  <CardContent />
                    <p className='text-muted-foreground'>
              
              <TabsContent />
                <Card />
                  <CardContent />
                    <p className="text-muted-foreground">


                      You haven't saved any jobs yet.
                    </p>
                    <Button />
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



            <div>
              <UpcomingInterviewsCard /></$1>
            <Card />
              <CardHeader />
                <CardTitle className='text-lg'>Quick Stats</CardTitle></$1>
              <CardContent />
                <div>
          <div>
                    <span className='text-muted-foreground'>Profile views</span>
                    <span className='font-medium'>152</span></$1>
                  <div>
                    <span className='text-muted-foreground'>Job matches</span>
                    <span className='font-medium'>7</span></$1>
                  <div>
                    <span className='text-muted-foreground'>Applications</span>
                    <span className='font-medium'>3</span></$1>
                  <div>
                    <span className='text-muted-foreground'>
                      Profile completion</$1>
                    <span className='font-medium'>85%</span></$1></$1></$1></$1></$1>
          <div>
            <Tabs />
              <TabsList />
                <TabsTrigger />
                  <BriefcaseIcon />
                  AI Job Matches</$1>
                <TabsTrigger value='applications'>My Applications</TabsTrigger>
                <TabsTrigger value='saved'>Saved Jobs</TabsTrigger></$1>
              <TabsContent />
                <SuggestedJobs /></$1>
              <TabsContent />
                <MyApplications />
                <div>
                  <Button />
                    <Link />
                      <Inbox className='h-4 w-4 mr-2' /> View Full Application
                      Tracker</$1></$1></$1></$1>
              <TabsContent />
                <Card />
                  <CardContent />
                    <p className='text-muted-foreground'>
                      You haven't saved any jobs yet.</$1>
                    <Button />
                      <Link href='/jobs'>Browse Jobs</Link></$1></$1></$1></$1></$1></$1></$1></$1>
    </>
  )
      <TalentDashboardContent /></$1>
  )
}</$1></div></div></div></div></div></div></div></div></Link></p></main>