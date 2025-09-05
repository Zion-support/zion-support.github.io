
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { useState, useEffect } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import Link from &quot;next/link&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from 'lucide-react'
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { SuggestedJobs } from &quot;@/components/jobs/SuggestedJobs&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Avatar } from &quot;@/components/ui/avatar&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { TalentOnboardingSteps } from &quot;@/components/onboarding/TalentOnboardingSteps&quot;;
import { AdvancedOnboardingSteps } from &quot;@/components/onboarding/AdvancedOnboardingSteps&quot;;
import { useOnboardingStatus } from &quot;@/hooks/useOnboardingStatus&quot;;
import { MyApplications } from &quot;@/components/jobs/MyApplications&quot;;
import { ProjectOfferBanner } from &quot;@/components/projects/ProjectOfferBanner&quot;;
import { UpcomingInterviewsCard } from &quot;@/components/interviews/UpcomingInterviewsCard&quot;;

function TalentDashboardContent() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(&quot;job-matches&quot;);
  const onboardingStatus = useOnboardingStatus();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  const showAdvanced =
=======
import Link from "next/link";

function TalentDashboardContent() {_const { user} = useAuth();
  const [activeTab, setActiveTab] = useState("job-matches");
  const _onboardingStatus = useOnboardingStatus();
  const _showAdvanced =
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    onboardingStatus.profileCompleted &&
    onboardingStatus.skillsAdded &&
    onboardingStatus.availabilitySet &&
    onboardingStatus.matchReceived,

  return (
    <>
      <SEO 
        title=&quot;Talent Dashboard | Zion AI Marketplace&quot; 
        description=&quot;Your personalized talent dashboard with job matches and professional opportunities.&quot; 
      />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold&quot;>Talent Dashboard</h1>
            <p className=&quot;text-muted-foreground mt-1&quot;>Find opportunities matched to your skills and experience</p>
          </div>
          <div className=&quot;flex gap-4&quot;>
            <Button variant=&quot;outline&quot; asChild>
              <Link href=&quot;/settings/account&quot;>
                <UserIcon className=&quot;h-4 w-4 mr-2&quot; />
                Profile Settings
              </Link>
            </Button>
            <Button asChild>
              <Link href=&quot;/dashboard/talent/applications&quot;>
                <Inbox className=&quot;h-4 w-4 mr-2&quot; /> Application Tracker
              </Link>
            </Button>
          </div>
        </div>

        {_/* Project Offer Banner - Show pending offers */}
        <ProjectOfferBanner />

        <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
          <div>
<<<<<<< HEAD
            <Card className=&quot;mb-8&quot;>
              <CardHeader className=&quot;pb-2&quot;>
                <div className=&quot;flex items-center justify-between&quot;>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <Avatar className=&quot;h-12 w-12 border&quot;>
                      {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.displayName || &quot;User&quot;} loading=&quot;lazy&quot; />
                      ) : (
                        <div className=&quot;flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase&quot;>
                          {user?.displayName?.charAt(0) || &quot;U&quot;}
=======
            <Card className="mb-8">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border">
                      {_user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={_user.displayName || "User"} loading="lazy" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase">
                          {_user?.displayName?.charAt(0) || "U"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      )}
                    </Avatar>
                    <div>
<<<<<<< HEAD
                      <CardTitle>{user?.displayName || &quot;User&quot;}</CardTitle>
                      <CardDescription>{user?.headline || &quot;AI Professional&quot;}</CardDescription>
=======
                      <CardTitle>{_user?.displayName || "User"}</CardTitle>
                      <CardDescription>{_user?.headline || "AI Professional"}</CardDescription>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                  <Badge className=&quot;bg-green-100 text-green-800&quot;>Online</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className=&quot;grid grid-cols-2 gap-4 mt-4&quot;>
                  <div className=&quot;flex flex-col items-center p-3 bg-muted/30 rounded-md&quot;>
                    <div className=&quot;flex items-center gap-1 text-lg font-bold&quot;>
                      <Star className=&quot;h-4 w-4 text-yellow-500&quot; />
                      4.9
                    </div>
                    <span className=&quot;text-xs text-muted-foreground&quot;>Rating</span>
                  </div>
                  <div className=&quot;flex flex-col items-center p-3 bg-muted/30 rounded-md&quot;>
                    <div className=&quot;text-lg font-bold&quot;>18</div>
                    <span className=&quot;text-xs text-muted-foreground&quot;>Projects</span>
                  </div>
                </div>
                
                <div className=&quot;mt-4&quot;>
                  <Button className=&quot;w-full&quot; asChild>
                    <Link href=&quot;/messages&quot;>
                      <MessageSquare className=&quot;h-4 w-4 mr-2&quot; />
                      Messages
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {_/* New Onboarding Progress Tracker */}
            <TalentOnboardingSteps />
<<<<<<< HEAD
            {showAdvanced && (
              <div className=&quot;mt-6&quot;>
=======
            {_showAdvanced && (
              <div className="mt-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <AdvancedOnboardingSteps />
              </div>
            )}
            
<<<<<<< HEAD
            {/* Upcoming Interviews Card */}
            <div className=&quot;mt-8&quot;>
=======
            {_/* Upcoming Interviews Card */}
            <div className="mt-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <UpcomingInterviewsCard />
            </div>
            
            <Card className=&quot;mt-8&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-lg&quot;>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-muted-foreground&quot;>Profile views</span>
                    <span className=&quot;font-medium&quot;>152</span>
                  </div>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-muted-foreground&quot;>Job matches</span>
                    <span className=&quot;font-medium&quot;>7</span>
                  </div>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-muted-foreground&quot;>Applications</span>
                    <span className=&quot;font-medium&quot;>3</span>
                  </div>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-muted-foreground&quot;>Profile completion</span>
                    <span className=&quot;font-medium&quot;>85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
<<<<<<< HEAD
          <div className=&quot;lg:col-span-2&quot;>
            <Tabs defaultValue=&quot;job-matches&quot; onValueChange={setActiveTab}>
              <TabsList className=&quot;mb-6&quot;>
                <TabsTrigger value=&quot;job-matches&quot; className=&quot;flex items-center&quot;>
                  <BriefcaseIcon className=&quot;h-4 w-4 mr-2&quot; />
=======
          <div className="lg:col-span-2">
            <Tabs defaultValue="job-matches" onValueChange={_setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="job-matches" className="flex items-center">
                  <BriefcaseIcon className="h-4 w-4 mr-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  AI Job Matches
                </TabsTrigger>
                <TabsTrigger value=&quot;applications&quot;>My Applications</TabsTrigger>
                <TabsTrigger value=&quot;saved&quot;>Saved Jobs</TabsTrigger>
              </TabsList>
              
              <TabsContent value=&quot;job-matches&quot; className=&quot;mt-0&quot;>
                <SuggestedJobs />
              </TabsContent>
              
              <TabsContent value=&quot;applications&quot; className=&quot;mt-0&quot;>
                <MyApplications />
                <div className=&quot;mt-4 flex justify-center&quot;>
                  <Button variant=&quot;outline&quot; asChild>
                    <Link href=&quot;/dashboard/talent/applications&quot;>
                      <Inbox className=&quot;h-4 w-4 mr-2&quot; /> View Full Application Tracker
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value=&quot;saved&quot; className=&quot;mt-0&quot;>
                <Card className=&quot;bg-muted/30&quot;>
                  <CardContent className=&quot;pt-6 text-center&quot;>
                    <p className=&quot;text-muted-foreground&quot;>
                      You haven't saved any jobs yet.
                    </p>
                    <Button className=&quot;mt-4&quot; asChild>
                      <Link href=&quot;/jobs&quot;>Browse Jobs</Link>
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
}

export default function TalentDashboard() {_return (
    <ProtectedRoute>
      <TalentDashboardContent />
    </ProtectedRoute>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
