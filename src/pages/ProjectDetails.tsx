import React, { useState, useEffect } from &quot;react&quot;;
import Link from 'next/link';
import { useRouter } from 'next/router';
import { format } from &quot;date-fns&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useProjects } from &quot;@/hooks/useProjects&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { Project, ProjectStatus } from &quot;@/types/projects&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle} from &quot;@/components/ui/card&quot;;
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger} from &quot;@/components/ui/tabs&quot;;
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger} from &quot;@/components/ui/alert-dialog&quot;;
import { Avatar } from &quot;@/components/ui/avatar&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { ProjectReviewSection } from &quot;@/components/projects/reviews/ProjectReviewSection&quot;;
import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from 'lucide-react'

function ProjectDetailsContent() {
  const router = useRouter();
  // Get projectId from Next.js router query params
  const { projectId } = router.query as { projectId?: string };
  const { user } = useAuth();
  const { getProjectById, updateProjectStatus } = useProjects();
  
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState<any[]>([]);
  const [newNote, setNewNote] = useState("&quot;);
  const [isSubmittingNote, setIsSubmittingNote] = useState(false);
  const [activeTab, setActiveTab] = useState(&quot;details&quot;);
  
  // Load project data
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return;
      
      setIsLoading(true);
      const projectData = await getProjectById(projectId);
      
      if (projectData) {
        setProject(projectData);
        
        // Now fetch notes
        fetchProjectNotes(projectId);
      } else {
        toast({
          title: &quot;Project not found&quot;,
          description: &quot;The requested project could not be found.&quot;,
          variant: &quot;destructive&quot;});
        router.push(&quot;/dashboard&quot;);
      }
      
      setIsLoading(false);
    }
    
    loadProject();
  }, [projectId]);
  
  const fetchProjectNotes = async (projectId: string) => {
    try {
      const { data, error } = await supabase
        .from(&quot;project_notes&quot;)
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .eq(&quot;project_id&quot;, projectId)
        .order(&quot;created_at&quot;, { ascending: false });
      
      if (error) throw error;
      
      setNotes(data || []);
    } catch (err: any) {
      logErrorToProduction('Error fetching project notes:', { data: err });
      toast({
        title: &quot;Failed to load notes&quot;,
        description: err.message || &quot;An error occurred while loading project notes.&quot;,
        variant: &quot;destructive&quot;});
    }
  };
  
  const handleSubmitNote = async () => {
    if (!newNote.trim() || !project || !user) return;
    
    setIsSubmittingNote(true);
    
    try {
      const { data, error } = await supabase
        .from(&quot;project_notes&quot;)
        .insert({
          project_id: project.id,
          user_id: user.id,
          content: newNote})
        .select();
      
      if (error) throw error;
      
      // Refresh notes
      fetchProjectNotes(project.id);
      setNewNote("&quot;);
      
      toast({
        title: &quot;Note added&quot;,
        description: &quot;Your note has been added to the project.&quot;});
    } catch (err: any) {
      logErrorToProduction('Error adding note:', { data: err });
      toast({
        title: &quot;Failed to add note&quot;,
        description: err.message || &quot;An error occurred while adding note.&quot;,
        variant: &quot;destructive&quot;});
    } finally {
      setIsSubmittingNote(false);
    }
  };
  
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return;
    
    const success = await updateProjectStatus(project.id, newStatus);
    
    if (success) {
      setProject({
        ...project,
        status: newStatus});
      
      // If offer was accepted, show a special toast
      if (newStatus === &quot;offer_accepted&quot;) {
        toast({
          title: &quot;Offer Accepted! 🎉&quot;,
          description: &quot;The project is now in progress. Congratulations!&quot;});
      }
    }
  };
  
  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case &quot;offer_sent&quot;:
        return <Badge variant=&quot;outline&quot;>Offer Sent</Badge>;
      case &quot;offer_accepted&quot;:
        return <Badge className=&quot;bg-green-100 text-green-800&quot;>Offer Accepted</Badge>;
      case &quot;changes_requested&quot;:
        return <Badge variant=&quot;secondary&quot;>Changes Requested</Badge>;
      case &quot;in_progress&quot;:
        return <Badge className=&quot;bg-blue-100 text-blue-800&quot;>In Progress</Badge>;
      case &quot;completed&quot;:
        return <Badge variant=&quot;default&quot;>Completed</Badge>;
      case &quot;canceled&quot;:
        return <Badge variant=&quot;destructive&quot;>Canceled</Badge>;
      default:
        return <Badge variant=&quot;outline&quot;>{status}</Badge>;
    }
  };
  
  if (isLoading) {
    return (
      <div className=&quot;container mx-auto py-8&quot;>
        <div className=&quot;flex justify-center items-center h-64&quot;>
          <div className=&quot;text-center&quot;>
            <div className=&quot;animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4&quot;></div>
            <p>Loading project details...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className=&quot;container mx-auto py-8&quot;>
        <Card>
          <CardContent className=&quot;flex flex-col items-center justify-center py-10&quot;>
            <AlertCircle className=&quot;h-10 w-10 text-muted-foreground mb-4&quot; />
            <h2 className=&quot;text-xl font-bold mb-2&quot;>Project Not Found</h2>
            <p className=&quot;text-muted-foreground mb-4&quot;>
              The project you're looking for doesn't exist or you don't have access to it.
            </p>
            <Button onClick={() => router.push(&quot;/dashboard&quot;)}>
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Check if user is either the client or the talent
  const isClient = user?.id === project.client_id;
  const isTalent = user?.id === project.talent_id;
  
  if (!isClient && !isTalent) {
    router.push(&quot;/unauthorized&quot;);
    return null;
  }
  
  const isOfferPending = project.status === &quot;offer_sent&quot;;
  const isOfferAccepted = [&quot;offer_accepted&quot;, &quot;in_progress&quot;, &quot;completed&quot;].includes(project.status);
  const isActiveProject = [&quot;offer_accepted&quot;, &quot;in_progress&quot;].includes(project.status);
  
  return (
    <>
      <SEO 
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} 
        description=&quot;View and manage your project details and collaboration.&quot;
      />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;mb-6&quot;>
          <div className=&quot;flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2&quot;>
            <div>
              <h1 className=&quot;text-3xl font-bold&quot;>{project.job?.title || &quot;Project&quot;}</h1>
              <div className=&quot;flex items-center gap-2 mt-1&quot;>
                {getStatusBadge(project.status)}
                <span className=&quot;text-muted-foreground&quot;>
                  Started on {format(new Date(project.start_date), &quot;PPP&quot;)}
                </span>
              </div>
            </div>
            
            {/* Action Buttons Based on Role and Status */}
            <div className=&quot;space-x-2&quot;>
              {isTalent && isOfferPending && (
                <>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant=&quot;default&quot;>
                        <CheckCircle2 className=&quot;mr-2 h-4 w-4&quot; /> Accept Offer
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>
                        <AlertDialogDescription>
                          By accepting this offer, you agree to the project terms and timeline. 
                          This will initiate the contract and start the project.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleStatusChange(&quot;offer_accepted&quot;)}>
                          Accept Offer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <Button variant=&quot;outline&quot; onClick={() => handleStatusChange(&quot;changes_requested&quot;)}>
                    <MessageSquare className=&quot;mr-2 h-4 w-4&quot; /> Request Changes
                  </Button>
                </>
              )}
              
              {(isClient || isTalent) && project.status === &quot;in_progress&quot; && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant=&quot;default&quot;>
                      <CheckCircle2 className=&quot;mr-2 h-4 w-4&quot; /> Mark as Completed
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will finalize the project and mark it as complete. 
                        Make sure all deliverables have been provided and approved.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleStatusChange(&quot;completed&quot;)}>
                        Mark as Completed
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              
              {isActiveProject && (
                <Button variant=&quot;default&quot; asChild>
                  <Link href={`/project/[id]/milestones`}>
                    <Layers className=&quot;mr-2 h-4 w-4&quot; /> Milestones
                  </Link>
                </Button>
              )}

              {isActiveProject && (
                <Button variant=&quot;outline&quot; asChild>
                  <Link href={`/project/[id]/room`}>
                    <Video className=&quot;mr-2 h-4 w-4&quot; /> Project Room
                  </Link>
                </Button>
              )}
              
              {(isClient || isTalent) && [&quot;offer_sent&quot;, &quot;offer_accepted&quot;, &quot;in_progress&quot;].includes(project.status) && (
                <Button 
                  variant=&quot;outline&quot; 
                  onClick={() => router.push(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >
                  <MessageSquare className=&quot;mr-2 h-4 w-4&quot; /> Message
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
          <div className=&quot;order-2 lg:order-1 lg:col-span-2&quot;>
            <Tabs defaultValue=&quot;details&quot; value={activeTab} onValueChange={setActiveTab}>
              <TabsList className=&quot;mb-6&quot;>
                <TabsTrigger value=&quot;details&quot;>Project Details</TabsTrigger>
                <TabsTrigger value=&quot;timeline&quot;>Timeline</TabsTrigger>
                <TabsTrigger value=&quot;documents&quot;>Documents</TabsTrigger>
                <TabsTrigger value=&quot;notes&quot;>Shared Notes</TabsTrigger>
                {project.status === &quot;completed&quot; && (
                  <TabsTrigger value=&quot;reviews&quot;>Reviews</TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value=&quot;details&quot;>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Scope</CardTitle>
                    <CardDescription>
                      Project details and expectations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className=&quot;space-y-4&quot;>
                      <div>
                        <h3 className=&quot;font-semibold mb-2&quot;>Project Description</h3>
                        <div className=&quot;bg-muted/30 p-4 rounded-md&quot;>
                          <p className=&quot;whitespace-pre-wrap&quot;>{project.scope_summary}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className=&quot;font-semibold mb-2&quot;>Payment Terms</h3>
                        <Badge variant=&quot;outline&quot; className=&quot;capitalize&quot;>
                          {project.payment_terms} Payment
                        </Badge>
                      </div>
                      
                      <div>
                        <h3 className=&quot;font-semibold mb-2&quot;>Job Details</h3>
                        <div className=&quot;bg-muted/30 p-4 rounded-md&quot;>
                          <p className=&quot;whitespace-pre-wrap&quot;>{project.job?.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value=&quot;timeline&quot;>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                    <CardDescription>
                      Key dates and milestones
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className=&quot;space-y-4&quot;>
                      <div className=&quot;flex items-start gap-3 p-3 bg-muted/30 rounded-md&quot;>
                        <Calendar className=&quot;h-5 w-5 text-primary mt-0.5&quot; />
                        <div>
                          <h3 className=&quot;font-semibold&quot;>Start Date</h3>
                          <p>{format(new Date(project.start_date), &quot;PPP&quot;)}</p>
                        </div>
                      </div>
                      
                      <div className=&quot;flex items-start gap-3 p-3 bg-muted/30 rounded-md&quot;>
                        <Clock className=&quot;h-5 w-5 text-primary mt-0.5&quot; />
                        <div>
                          <h3 className=&quot;font-semibold&quot;>Project Status</h3>
                          <div className=&quot;mt-1&quot;>
                            {getStatusBadge(project.status)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value=&quot;documents&quot;>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Documents</CardTitle>
                    <CardDescription>
                      Agreements and relevant files
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.agreement_url ? (
                      <div className=&quot;flex items-center justify-between bg-muted/30 p-4 rounded-md&quot;>
                        <div className=&quot;flex items-center gap-3&quot;>
                          <FileText className=&quot;h-5 w-5 text-primary&quot; />
                          <div>
                            <h3 className=&quot;font-semibold&quot;>Project Agreement</h3>
                            <p className=&quot;text-sm text-muted-foreground&quot;>
                              Uploaded when project was created
                            </p>
                          </div>
                        </div>
                        <Button variant=&quot;outline&quot; size=&quot;sm&quot; asChild>
                          <a href={project.agreement_url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                            View
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <div className=&quot;text-center py-8&quot;>
                        <FileText className=&quot;h-10 w-10 text-muted-foreground mx-auto mb-2&quot; />
                        <h3 className=&quot;font-semibold&quot;>No Documents Yet</h3>
                        <p className=&quot;text-sm text-muted-foreground&quot;>
                          No documents have been uploaded to this project.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value=&quot;notes&quot;>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Notes</CardTitle>
                    <CardDescription>
                      Shared notes and updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className=&quot;space-y-4&quot;>
                      <div className=&quot;space-y-4 max-h-[400px] overflow-y-auto mb-4&quot;>
                        {notes.length > 0 ? (
                          notes.map((note) => (
                            <div key={note.id} className=&quot;bg-muted/30 p-3 rounded-md&quot;>
                              <div className=&quot;flex items-center gap-2 mb-2&quot;>
                                <Avatar className=&quot;h-6 w-6&quot;>
                                  {note.created_by_profile?.avatar_url ? (
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                      loading=&quot;lazy&quot;
                                    />
                                  ) : (
                                    <User className=&quot;h-4 w-4&quot; />
                                  )}
                                </Avatar>
                                <span className=&quot;font-medium text-sm&quot;>
                                  {note.created_by_profile?.display_name || &quot;User&quot;}
                                </span>
                                <span className=&quot;text-xs text-muted-foreground&quot;>
                                  {format(new Date(note.created_at), &quot;PPp&quot;)}
                                </span>
                              </div>
                              <p className=&quot;text-sm whitespace-pre-wrap&quot;>{note.content}</p>
                            </div>
                          ))
                        ) : (
                          <div className=&quot;text-center py-8&quot;>
                            <MessageSquare className=&quot;h-8 w-8 text-muted-foreground mx-auto mb-2&quot; />
                            <p className=&quot;text-muted-foreground&quot;>
                              No notes yet. Add the first note to this project.
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {isOfferAccepted && (
                        <div>
                          <Textarea
                            placeholder=&quot;Add a note or update to the project...&quot;
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className=&quot;min-h-[100px] mb-2&quot;
                          />
                          <Button
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          >
                            {isSubmittingNote ? &quot;Posting...&quot; : &quot;Post Note&quot;}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value=&quot;reviews&quot;>
                <ProjectReviewSection project={project} />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className=&quot;order-1 lg:order-2 lg:col-span-1&quot;>
            <Card>
              <CardHeader>
                <CardTitle>Project Participants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=&quot;space-y-6&quot;>
                  <div className=&quot;flex items-start gap-4&quot;>
                    <Avatar className=&quot;h-10 w-10&quot;>
                      {project.talent_profile?.profile_picture_url ? (
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading=&quot;lazy&quot;
                        />
                      ) : (
                        <User className=&quot;h-6 w-6&quot; />
                      )}
                    </Avatar>
                    <div>
                      <h3 className=&quot;font-semibold&quot;>
                        {project.talent_profile?.full_name || &quot;Talent&quot;}
                      </h3>
                      <p className=&quot;text-sm text-muted-foreground&quot;>
                        {project.talent_profile?.professional_title || &quot;Professional&quot;}
                      </p>
                      {isClient && (
                        <Button
                          variant=&quot;outline&quot;
                          size=&quot;sm&quot;
                          className=&quot;mt-2&quot;
                          onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                        >
                          <MessageSquare className=&quot;mr-1 h-3 w-3&quot; /> Message
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className=&quot;flex items-start gap-4&quot;>
                    <Avatar className=&quot;h-10 w-10&quot;>
                      {project.talent_profile?.profile_picture_url ? (
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading=&quot;lazy&quot;
                        />
                      ) : (
                        <User className=&quot;h-6 w-6&quot; />
                      )}
                    </Avatar>
                    <div>
                      <h3 className=&quot;font-semibold&quot;>
                        {project.talent_profile?.full_name || &quot;Client&quot;}
                      </h3>
                      <p className=&quot;text-sm text-muted-foreground&quot;>Project Owner</p>
                      {isTalent && (
                        <Button
                          variant=&quot;outline&quot;
                          size=&quot;sm&quot;
                          className=&quot;mt-2&quot;
                          onClick={() => router.push(`/messages?clientId=${project.client_id}`)}
                        >
                          <MessageSquare className=&quot;mr-1 h-3 w-3&quot; /> Message
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Project Status Card */}
            <Card className=&quot;mt-6&quot;>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=&quot;space-y-2&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-sm font-medium&quot;>Current Status:</span>
                    <div>{getStatusBadge(project.status)}</div>
                  </div>
                  
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-sm font-medium&quot;>Creation Date:</span>
                    <span className=&quot;text-sm&quot;>
                      {format(new Date(project.created_at), &quot;PPP&quot;)}
                    </span>
                  </div>
                  
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-sm font-medium&quot;>Start Date:</span>
                    <span className=&quot;text-sm&quot;>
                      {format(new Date(project.start_date), &quot;PPP&quot;)}
                    </span>
                  </div>
                </div>
              </CardContent>
              
              {/* Conditional Footer Based on Status */}
              {project.status === &quot;changes_requested&quot; && isClient && (
                <CardFooter className=&quot;flex-col items-start gap-2 border-t pt-6&quot;>
                  <p className=&quot;text-sm text-amber-600 flex items-center gap-1&quot;>
                    <AlertCircle className=&quot;h-4 w-4&quot; /> The talent has requested changes to this offer.
                  </p>
                  <Button 
                    variant=&quot;outline&quot;
                    onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                    className=&quot;w-full&quot;
                  >
                    <MessageSquare className=&quot;mr-2 h-4 w-4&quot; /> Discuss Changes
                  </Button>
                </CardFooter>
              )}
              
              {project.status === &quot;offer_sent&quot; && isClient && (
                <CardFooter className=&quot;flex-col items-start gap-2 border-t pt-6&quot;>
                  <p className=&quot;text-sm text-muted-foreground&quot;>
                    Waiting for the talent to accept your offer.
                  </p>
                </CardFooter>
              )}
              
              {project.status === &quot;completed&quot; && (
                <CardFooter className=&quot;flex-col items-start gap-2 border-t pt-6&quot;>
                  <p className=&quot;text-sm text-green-600 flex items-center gap-1&quot;>
                    <CheckCircle2 className=&quot;h-4 w-4&quot; /> This project has been completed.
                  </p>
                </CardFooter>
              )}
              
              {project.status === &quot;canceled&quot; && (
                <CardFooter className=&quot;flex-col items-start gap-2 border-t pt-6&quot;>
                  <p className=&quot;text-sm text-red-600 flex items-center gap-1&quot;>
                    <XCircle className=&quot;h-4 w-4&quot; /> This project has been canceled.
                  </p>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

export default function ProjectDetails() {
  return (
    <ProtectedRoute>
      <ProjectDetailsContent />
    </ProtectedRoute>
  );
}
