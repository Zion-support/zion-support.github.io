
<<<<<<< HEAD
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
;
function TalentDashboardContent() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState("job-matches"),;
  const onboardingStatus = useOnboardingStatus(),;
  const showAdvanced =;
    onboardingStatus.profileCompleted &&;
    onboardingStatus.skillsAdded &&;
    onboardingStatus.availabilitySet &&;
    onboardingStatus.matchReceived,;
;
  return (;
    <>;
      <SEO ;
        title="Talent Dashboard | Zion AI Marketplace" ;
        description="Your personalized talent dashboard with job matches and professional opportunities." ;
      />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
          <div>;
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>;
            <p className="text-muted-foreground mt-1">Find opportunities matched to your skills and experience</p>;
          </div>;
          <div className="flex gap-4">;
            <Button variant="outline" asChild>;
              <Link href="/settings/account">;
                <UserIcon className="h-4 w-4 mr-2" />;
                Profile Settings;
              </Link>;
            </Button>;
            <Button asChild>;
              <Link href="/dashboard/talent/applications">;
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker;
              </Link>;
            </Button>;
          </div>;
        </div>;
;
        {/* Project Offer Banner - Show pending offers */}
        <ProjectOfferBanner />;
;
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
          <div>;
            <Card className="mb-8">;
              <CardHeader className="pb-2">;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-3">;
                    <Avatar className="h-12 w-12 border">;
                      {user?.avatarUrl ? (;
                        <img src={user.avatarUrl} alt={user.displayName || "User"} loading="lazy" />;
                      ) :(;
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase">;
                          {user?.displayName?.charAt(0) || "U"}
                        </div>;
                      )}
                    </Avatar>;
                    <div>;
                      <CardTitle>{user?.displayName || "User"}</CardTitle>;
                      <CardDescription>{user?.headline || "AI Professional"}</CardDescription>;
                    </div>;
                  </div>;
                  <Badge className="bg-green-100 text-green-800">Online</Badge>;
                </div>;
              </CardHeader>;
              <CardContent>;
                <div className="grid grid-cols-2 gap-4 mt-4">;
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">;
                    <div className="flex items-center gap-1 text-lg font-bold">;
                      <Star className="h-4 w-4 text-yellow-500" />;
                      4.9;
                    </div>;
                    <span className="text-xs text-muted-foreground">Rating</span>;
                  </div>;
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">;
                    <div className="text-lg font-bold">18</div>;
                    <span className="text-xs text-muted-foreground">Projects</span>;
                  </div>;
                </div>;
                ;
                <div className="mt-4">;
                  <Button className="w-full" asChild>;
                    <Link href="/messages">;
                      <MessageSquare className="h-4 w-4 mr-2" />;
                      Messages;
                    </Link>;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
            ;
            {/* New Onboarding Progress Tracker */}
            <TalentOnboardingSteps />;
            {showAdvanced && (;
              <div className="mt-6">;
                <AdvancedOnboardingSteps />;
              </div>;
=======
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
  const onboardingStatus = useOnboardingStatus(),  const showAdvanced =
import Link from "next/link";

function TalentDashboardContent() {_const { user} = useAuth();
  const [activeTab, setActiveTab] = useState("job-matches");
  const _onboardingStatus = useOnboardingStatus();
  const _showAdvanced =
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
            <Card className=&quot;mb-8&quot;>
              <CardHeader className=&quot;pb-2&quot;>
                <div className=&quot;flex items-center justify-between&quot;>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <Avatar className=&quot;h-12 w-12 border&quot;>
                      {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.displayName || &quot;User&quot;} loading=&quot;lazy&quot; />
                      ) : (
                        <div className=&quot;flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase&quot;>
                          {user?.displayName?.charAt(0) || &quot;U&quot;}                        </div>
                      )}
                    </Avatar>
                    <div>
                      <CardTitle>{user?.displayName || &quot;User&quot;}</CardTitle>
                      <CardDescription>{user?.headline || &quot;AI Professional&quot;}</CardDescription>                    </div>
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
            {showAdvanced && (
              <div className=&quot;mt-6&quot;>                <AdvancedOnboardingSteps />
              </div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            )}
            ;
            {/* Upcoming Interviews Card */}
<<<<<<< HEAD
            <div className="mt-8">;
              <UpcomingInterviewsCard />;
            </div>;
            ;
            <Card className="mt-8">;
              <CardHeader>;
                <CardTitle className="text-lg">Quick Stats</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-3">;
                  <div className="flex justify-between">;
                    <span className="text-muted-foreground">Profile views</span>;
                    <span className="font-medium">152</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-muted-foreground">Job matches</span>;
                    <span className="font-medium">7</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-muted-foreground">Applications</span>;
                    <span className="font-medium">3</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-muted-foreground">Profile completion</span>;
                    <span className="font-medium">85%</span>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
          ;
          <div className="lg:col-span-2">;
            <Tabs defaultValue="job-matches" onValueChange={setActiveTab}>;
              <TabsList className="mb-6">;
                <TabsTrigger value="job-matches" className="flex items-center">;
                  <BriefcaseIcon className="h-4 w-4 mr-2" />;
                  AI Job Matches;
                </TabsTrigger>;
                <TabsTrigger value="applications">My Applications</TabsTrigger>;
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>;
              </TabsList>;
              ;
              <TabsContent value="job-matches" className="mt-0">;
                <SuggestedJobs />;
              </TabsContent>;
              ;
              <TabsContent value="applications" className="mt-0">;
                <MyApplications />;
                <div className="mt-4 flex justify-center">;
                  <Button variant="outline" asChild>;
                    <Link href="/dashboard/talent/applications">;
                      <Inbox className="h-4 w-4 mr-2" /> View Full Application Tracker;
                    </Link>;
                  </Button>;
                </div>;
              </TabsContent>;
              ;
              <TabsContent value="saved" className="mt-0">;
                <Card className="bg-muted/30">;
                  <CardContent className="pt-6 text-center">;
                    <p className="text-muted-foreground">;
                      You haven't saved any jobs yet.;
                    </p>;
                    <Button className="mt-4" asChild>;
                      <Link href="/jobs">Browse Jobs</Link>;
                    </Button>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
      </main>;
    </>;
  ),;
}
;
export default function TalentDashboard() {;
  return (;
    <ProtectedRoute>;
      <TalentDashboardContent />;
    </ProtectedRoute>;
  ),;
}
=======
            <div className=&quot;mt-8&quot;>              <UpcomingInterviewsCard />
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
          
          <div className=&quot;lg:col-span-2&quot;>
            <Tabs defaultValue=&quot;job-matches&quot; onValueChange={setActiveTab}>
              <TabsList className=&quot;mb-6&quot;>
                <TabsTrigger value=&quot;job-matches&quot; className=&quot;flex items-center&quot;>
                  <BriefcaseIcon className=&quot;h-4 w-4 mr-2&quot; />                  AI Job Matches
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
  )
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
