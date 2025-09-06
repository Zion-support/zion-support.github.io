class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import Link from 'next / link';
import { use_router } from 'next / router';
import { format } from 'date - fns';
import { use_auth } from '@/hooks / use_auth';
import { use_projects } from '@/hooks / use_projects';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { Project, ProjectStatus } from '@/types / projects';
import { Button } from '@/components / ui / button';
import { logErrorToProduction } from '@/utils / production_logger'; import Link from 'next / link';
import { format  } from './date - fns';
import { use_auth  } from '@/hooks / use_auth';
import { use_projects  } from '@/hooks / use_projects';
import { SEO  } from '@/components / SEO';
import { ProtectedRoute  } from '@/components / ProtectedRoute';
import { Project, ProjectStatus  } from '@/types / projects';
import { Button  } from '@/components / ui / button';
import {logErrorToProduction} from '@/utils / production_logger';


} from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';



  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,

import { logErrorToProduction } from '@/utils/productionLogger';import Link from 'next/link';
import { useRouter } from 'next/router';
import { format } from "date-fns";
import { useAuth } from "@/hooks/useAuth";
import { useProjects } from "@/hooks/useProjects";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Project, ProjectStatus } from "@/types/projects";
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;
  AlertDialogTrigger,;

} from '@/components/ui/alert-dialog';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ProjectReviewSection } from '@/components/projects/reviews/ProjectReviewSection';

} from '@/components / ui / alert - dialog';
import { Avatar } from '@/components / ui / avatar';
import { Badge } from '@/components / ui / badge';
import { Textarea } from '@/components / ui / textarea';
import { toast } from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';
import { ProjectReviewSection } from '@/components / projects / reviews / ProjectReviewSection';

  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  MessageSquare,
  Video,
  User,
  XCircle,
} from 'lucide-react';



  // Load project data
  useEffect(() => {
    async function loadProject() {

      if (!projectId) return;

      setIsLoading(true)
      const projectData = await getProjectById(projectId)
      if (projectData) {
        setProject(projectData)

          title: "Project not found",
          title: 'Project not found',;
          description: 'The requested project could not be found.',;
          variant: 'destructive',;
        });
        router && router.push('/dashboard');
      }

    
    loadProject()
  }, [projectId]),
  
  const fetchProjectNotes = async (projectId: string) => {
    try {

      const { data, error } = await supabase
        `
        )
        .eq('project_id', projectId)
        .order('created_at', { ascending: false })
      if (error) throw error
      setNotes(data || [])
    } catch (err: any) {
      logErrorToProduction('Error fetching project notes:', { data: err })
      toast({
        title: 'Failed to load notes',
        description:
          err.message || 'An error occurred while loading project notes.',
        variant: 'destructive',
      })
    }
  }
  const handleSubmitNote = async () => {
    if (!newNote.trim() || !project || !user) return;
    setIsSubmittingNote(true)
        `)
        .eq("project_id", projectId)
        .order("created_at", { ascending: false }),
      
      if (error) throw error,
      
      setNotes(data || [])
    } catch (err: any) {
      logErrorToProduction('Error fetching project notes:', { data: err }),
      toast({
        title: "Failed to load notes",
        description: err.message || "An error occurred while loading project notes.",
        variant: "destructive"})
    }
  },
  
  const handleSubmitNote = async () => {
    if (!newNote.trim() || !project || !user) return,
    
    setIsSubmittingNote(true),
    
  }


          project_id: project.id,
          user_id: user.id,


      // If offer was accepted, show a special toast
      if (newStatus === 'offer_accepted') {
        toast({

  const fetchProjectNotes = async (projectId: string) => {    try {;
      const { data, error } = await supabase;
        .from('project_notes');
        .select(;
          `;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `;
        );
        .eq('project_id', projectId);
        .order('created_at', { ascending: false });

      if (error) throw error;

      setNotes(data || []);
    } catch (err: any) {;
      logErrorToProduction('Error fetching project notes:', { data: err });
      toast({;
        title: 'Failed to load notes',;
        description:;
          err && err.message || 'An error occurred while loading project notes.',;
        variant: 'destructive',;
      });
    }
  };

  const handleSubmitNote = async () => {;
    if (!newNote && newNote.trim() || !project || !user) return;

    setIsSubmittingNote(true);

    try {;
      const { data, error } = await supabase;
        .from('project_notes');
        .insert({;
          project_id: project && project.id,;
          user_id: user && user.id,;
          content: newNote,;
        });
        .select();

      if (error) throw error;

      // Refresh notes;
      fetchProjectNotes(project && project.id);
      setNewNote('');

      toast({;
        title: 'Note added',;
        description: 'Your note has been added to the project.',;
      });
    } catch (err: any) {;
      logErrorToProduction('Error adding note:', { data: err });
      toast({;
        title: 'Failed to add note',;
        description: err && err.message || 'An error occurred while adding note.',;
        variant: 'destructive',;
      });
    } finally {;
      setIsSubmittingNote(false);
    }
  };

  const handleStatusChange = async (newStatus: ProjectStatus) => {;
    if (!project) return;

    const success = await updateProjectStatus(project && project.id, newStatus);
    if (success) {;
      setProject({;
        ...project,;
        status: newStatus,;
      });

      // If offer was accepted, show a special toast;
      if (newStatus === 'offer_accepted') {;
        toast({;
          title: 'Offer Accepted! 🎉',;
          description: 'The project is now in progress. Congratulations!',;
        });

  const handleStatusChange = async (new_status: ProjectStatus) => {
    // Check condition
if (return) {
  $2
}
    const success = await updateProjectStatus (project.id, new_status);
    // Check condition
if ( {) {
  $2
}
      set_project ({
        ...project,
        status: new_status,
      });
      // If offer was accepted, show a special toast;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: 'Offer Accepted! 🎉',
          description: 'The project is now in progress. Congratulations!',
        });

          title: 'Offer Accepted! 🎉',
          description: 'The project is now in progress. Congratulations!',

        })



  if (isLoading) {
    return (


            <Button onClick={() => router.push("/dashboard")}>
              Return to Dashboard



        title={`Project: ${project && project.job?.title || 'Project Details'} | Zion AI Marketplace`}
        description='View and manage your project details and collaboration.'
      />;
      <main className='container mx-auto px-4 py-8'>;
        <div className='mb-6'>;
          <div className='flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2'>;
            <div>;
              <h1 className='text-3xl font-bold'>;
                {project && project.job?.title || 'Project'}
              </h1>;
              <div className='flex items-center gap-2 mt-1'>;
                {getStatusBadge(project && project.status)}
                <span className='text-muted-foreground'>;
                  Started on {format(new Date(project && project.start_date), 'PPP')}
                </span>;
              </div>;
            </div>;


            {/* Action Buttons Based on Role and Status */}
            <div className='space-x-2'>;
              {isTalent && isOfferPending && (;
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger asChild>;
                      <Button variant='default'>;
                        <CheckCircle2 className='mr-2 h-4 w-4' /> Accept Offer;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='container mx - auto py - 8'>;
        <Card>;
          <CardContent className='flex flex - col items - center justify - center py - 10'>;
            <AlertCircle className='h - 10 w - 10 text - muted - foreground mb - 4' />;
            <h2 className='text - xl font - bold mb - 2'>Project Not Found</h2>;
            <p className='text - muted - foreground mb - 4'>;
              The project you're looking for doesn't exist or you don't have;
              access to it.;
            </p>;
            <Button on_click={() => router.push ('/dashboard')}>              Return to Dashboard;
            </Button>;
          </CardContent>;
        </Card>;
      </div>);
  }
  // Check if user is either the client or the talent;
  const is_client = user?.id === project.client_id;
  const is_talent = user?.id === project.talent_id;
  // Check condition
if ( {) {
  $2
}
    router.push ('/unauthorized');
    return null;
  }
  const isOfferPending = project.status === 'offer_sent';
  const isOfferAccepted = [;
    'offer_accepted',
    'in_progress',
    'completed',
  ].includes (project.status);
  const isActiveProject = ['offer_accepted', 'in_progress'].includes (
    project.status);
  return (
    <>;
      <SEO;
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`}
        description='View and manage your project details and collaboration.';
      />;
      <main className='container mx - auto px - 4 py - 8'>;
        <div className='mb - 6'>;
          <div className='flex flex - col md:flex - row justify - between md:items - center gap - 4 mb - 2'>;
            <div>;
              <h1 className='text - 3xl font - bold'>;
                {project.job?.title || 'Project'}
              </h1>;
              <div className='flex items - center gap - 2 mt - 1'>;
                {getStatusBadge (project.status)}
                <span className='text - muted - foreground'>;
                  Started on {format (new Date (project.start_date), 'PPP')}
                </span>;
              </div>;
            </div>;
            {/* Action Buttons Based on Role and Status */}
            <div className='space - x-2'>;
              {is_talent && isOfferPending && (
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger as_child>;
                      <Button variant='default'>;
                        <CheckCircle2 className='mr - 2 h - 4 w - 4' /> Accept Offer;
                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
                      <AlertDialogHeader>;
                        <AlertDialogTitle>;
                          Accept Project Offer?;
                        </AlertDialogTitle>;
                        <AlertDialogDescription>;
                          By accepting this offer, you agree to the project;
                          terms and timeline. This will initiate the contract;
                          and start the project.;
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;


            


            {/* Action Buttons Based on Role and Status */}
                        <AlertDialogAction
                          onClick={() => handleStatusChange('offer_accepted')}
                        >                          Accept Offer
                      <AlertDialogAction
                        onClick={() => handleStatusChange('completed')}
                      >                        Mark as Completed
            >
              <TabsList className='mb-6'>
                <TabsTrigger value='details'>Project Details</TabsTrigger>
                <TabsTrigger value='timeline'>Timeline</TabsTrigger>
                <TabsTrigger value='documents'>Documents</TabsTrigger>
                <TabsTrigger value='notes'>Shared Notes</TabsTrigger>
                {project.status === 'completed' && (
                  <TabsTrigger value='reviews'>Reviews</TabsTrigger>
                )}
              </TabsList>
              <TabsContent value='details'>
              <TabsContent value='timeline'>
                      <div className='flex items-start gap-3 p-3 bg-muted/30 rounded-md'>
                        <Clock className='h-5 w-5 text-primary mt-0.5' />
              <TabsContent value='documents'>
                        <Button variant='outline' size='sm' asChild>
              </TabsList>;

              <TabsContent value='details'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Scope</CardTitle>;
                    <CardDescription>;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className='space-y-4'>;
                      <div>;
                        <h3 className='font-semibold mb-2'>;
                          Project Description;
                        </h3>;
                        <div className='bg-muted/30 p-4 rounded-md'>;
                          <p className='whitespace-pre-wrap'>;
                            {project && project.scope_summary}
                          </p>;
                        </div>;
                      </div>;

                      <div>;
                        <h3 className='font-semibold mb-2'>Payment Terms</h3>;
                        <Badge variant='outline' className='capitalize'>;
                          {project && project.payment_terms} Payment;
                        </Badge>;
                      </div>;

                      <div>;
                        <h3 className='font-semibold mb-2'>Job Details</h3>;
                        <div className='bg-muted/30 p-4 rounded-md'>;
                          <p className='whitespace-pre-wrap'>;
                            {project && project.job?.description}
                          </p>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;

              <TabsContent value='timeline'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Timeline</CardTitle>;
                    <CardDescription>Key dates and milestones</CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className='space-y-4'>;
                      <div className='flex items-start gap-3 p-3 bg-muted/30 rounded-md'>;
                        <Calendar className='h-5 w-5 text-primary mt-0 && 0.5' />;
                        <div>;
                          <h3 className='font-semibold'>Start Date</h3>;
                          <p>{format(new Date(project && project.start_date), 'PPP')}</p>;
                        </div>;
                      </div>;

                      <div className='flex items-start gap-3 p-3 bg-muted/30 rounded-md'>;
                        <Clock className='h-5 w-5 text-primary mt-0 && 0.5' />;
                        <div>;
                          <h3 className='font-semibold'>Project Status</h3>;
                          <div className='mt-1'>;
                            {getStatusBadge(project && project.status)}
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;

              <TabsContent value='documents'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    {project && project.agreement_url ? (;
                      <div className='flex items-center justify-between bg-muted/30 p-4 rounded-md'>;
                        <div className='flex items-center gap-3'>;
                          <FileText className='h-5 w-5 text-primary' />;
                          <div>;
                            <h3 className='font-semibold'>Project Agreement</h3>;
                            <p className='text-sm text-muted-foreground'>;
                {project.status === 'completed' && (
                  <TabsTrigger value='reviews'>Reviews</TabsTrigger>)}
              </TabsList>;
              <TabsContent value='details'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Scope</CardTitle>;
                    <CardDescription>;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className='space - y-4'>;
                      <div>;
                        <h3 className='font - semibold mb - 2'>;
                          Project Description;
                        </h3>;
                        <div className='bg - muted / 30 p - 4 rounded - md'>;
                          <p className='whitespace - pre - wrap'>;
                            {project.scope_summary}
                          </p>;
                        </div>;
                      </div>;
                      <div>;
                        <h3 className='font - semibold mb - 2'>Payment Terms</h3>;
                        <Badge variant='outline' className='capitalize'>;
                          {project.payment_terms} Payment;
                        </Badge>;
                      </div>;
                      <div>;
                        <h3 className='font - semibold mb - 2'>Job Details</h3>;
                        <div className='bg - muted / 30 p - 4 rounded - md'>;
                          <p className='whitespace - pre - wrap'>;
                            {project.job?.description}
                          </p>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value='timeline'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Timeline</CardTitle>;
                    <CardDescription > Key dates and milestones</CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className='space - y-4'>;
                      <div className='flex items - start gap - 3 p - 3 bg - muted / 30 rounded - md'>;
                        <Calendar className='h - 5 w - 5 text - primary mt - 0.5' />;
                        <div>;
                          <h3 className='font - semibold'>Start Date</h3>;
                          <p>{format (new Date (project.start_date), 'PPP')}</p>;
                        </div>;
                      </div>;
                      <div className='flex items - start gap - 3 p - 3 bg - muted / 30 rounded - md'>;
                        <Clock className='h - 5 w - 5 text - primary mt - 0.5' />;
                        <div>;
                          <h3 className='font - semibold'>Project Status</h3>;
                          <div className='mt - 1'>;
                            {getStatusBadge (project.status)}
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value='documents'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    {project.agreement_url ? (
                      <div className='flex items - center justify - between bg - muted / 30 p - 4 rounded - md'>;
                        <div className='flex items - center gap - 3'>;
                          <FileText className='h - 5 w - 5 text - primary' />;
                          <div>;
                            <h3 className='font - semibold'>Project Agreement</h3>;
                            <p className='text - sm text - muted - foreground'>;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;


              
              <TabsContent value="notes">


                              key={note && note.id}
                              className='bg-muted/30 p-3 rounded-md'>;
                              <div className='flex items-center gap-2 mb-2'>;
                                <Avatar className='h-6 w-6'>;
                                  {note && note.created_by_profile?.avatar_url ? (;

                          notes.map((note) => (
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">
                              <div className="flex items-center gap-2 mb-2">
                                <Avatar className="h-6 w-6">

                                  {note.created_by_profile?.avatar_url ? (
                          <Button
                            onClick = {handleSubmitNote,}
                            disabled = {!newNote.trim() |isSubmittingNote,}
                <div className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <Avatar className='h-10 w-10'>
                        <Button variant='outline' size='sm' as_child>;
                          <a;
                            href={project.agreement_url}
                            target='_blank';
                            rel='noopener noreferrer';
                          >;
                            View;
                          </a>;
                        </Button>;
                      </div>) : (
                      <div className='text - center py - 8'>;
                        <FileText className='h - 10 w - 10 text - muted - foreground mx - auto mb - 2' />;
                        <h3 className='font - semibold'>No Documents Yet</h3>;
                        <p className='text - sm text - muted - foreground'>;
                          No documents have been uploaded to this project.;
                        </p>;
                      </div>)}
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value='notes'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Notes</CardTitle>;
                    <CardDescription > Shared notes and updates</CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className='space - y-4'>;
                      <div className='space - y-4 max - h-[400px] overflow - y-auto mb - 4'>;
                        {notes.length > 0 ? (
                          notes.map (note => (
                            <div;
                              key={note.id}
                              className='bg - muted / 30 p - 3 rounded - md';
                            >;
                              <div className='flex items - center gap - 2 mb - 2'>;
                                <Avatar className='h - 6 w - 6'>;
                                  {note.created_by_profile?.avatar_url ? (
                                    <img;
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                      loading='lazy'                                    />) : (
                                    <User className='h - 4 w - 4' />)}
                                </Avatar>;
                                <span className='font - medium text - sm'>;
                                  {note.created_by_profile?.display_name ||;
                                    'User'}
                                </span>;
                                <span className='text - xs text - muted - foreground'>;
                                  {format (new Date (note.created_at), 'PPp')}
                                </span>;
                              </div>;
                              <p className='text - sm whitespace - pre - wrap'>;
                                {note.content}
                              </p>;
                            </div>))) : (
                          <div className='text - center py - 8'>;
                            <MessageSquare className='h - 8 w - 8 text - muted - foreground mx - auto mb - 2' />;
                            <p className='text - muted - foreground'>;
                              No notes yet. Add the first note to this project.;
                            </p>;
                          </div>)}
                      </div>;
                      {isOfferAccepted && (
                        <div>;
                          <Textarea;
                            placeholder='Add a note or update to the project...';
                            value={new_note}
                            on_change={e => setNewNote (e.target.value)}
                            className='min - h-[100px] mb - 2'                          />;
                          <Button;
                            on_click = {handleSubmitNote, }
                            disabled = {!new_note.trim () || isSubmittingNote, }
                          >;
                            {isSubmittingNote ? 'Posting...' : 'Post Note'}
                          </Button>;
                        </div>)}
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value='reviews'>;
                <ProjectReviewSection project={project} />;
              </TabsContent>;
            </Tabs>;
          </div>;
          <div className='order - 1 lg:order - 2 lg:col - span - 1'>;
            <Card>;
              <CardHeader>;
                <CardTitle > Project Participants</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='space - y-6'>;
                  <div className='flex items - start gap - 4'>;
                    <Avatar className='h - 10 w - 10'>;


                          loading="lazy"
                        />



                          loading='lazy'                        />) : (
                        <User className='h - 6 w - 6' />)}
                    </Avatar>;
                    <div>;
                      <h3 className='font - semibold'>;
                        {project.talent_profile?.full_name || 'Talent'}
                      </h3>;
                      <p className='text - sm text - muted - foreground'>;
                        {project.talent_profile?.professional_title ||;
                          'Professional'}
                      </p>;
                      {is_client && (
                        <Button;
                          variant='outline';
                          size='sm';
                          className='mt - 2';
                          on_click={() =>;
                            router.push (
                              `/messages?talent_id=${project.talent_id}`);
                          }                        >;
                          <MessageSquare className='mr - 1 h - 3 w - 3' /> Message;
                        </Button>)}
                    </div>;
                  </div>;
                  <div className='flex items - start gap - 4'>;
                    <Avatar className='h - 10 w - 10'>;


                  
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">

                  <div className='flex justify-between items-center'>
                    <span className='text-sm font-medium'>Start Date:</span>
                    <span className='text-sm'>
                      {format(new Date(project.start_date), 'PPP')}
                  </Button>
                </CardFooter>
              )}
              {project.status === 'offer_sent' && isClient && (
                <CardFooter className='flex-col items-start gap-2 border-t pt-6'>
                  <p className='text-sm text-muted-foreground'>
}



  status;
}</Badge>;
}'";
<p > Loading project details...</p> </div> </div> </div> <Card> <CardContent className="flex flex - col items - center justify - center py - 10" > <AlertCircle className="h - 10 w - 10 text - muted - foreground mb - 4" /> <h2 className="text - xl font - bold mb - 2" >Project Not Found</h2> <p className="text - muted - foreground mb - 4" > The project you're looking for doesn't exist or you don't have access to it. </p> <Button on_click={";
  () => router.push ("/dashboard");
}> Return to Dashboard </Button> </CardContent> </Card> </div>) ";
}//Check if user is either the client or the talent container mx - auto px - 4 py - 8"> <div className=" mb - 6"> <div className=" flex flex - col md:flex - row justify - between md:items - center gap - 4 mb - 2"> <div> </span> </div> </div> <AlertDialog> <AlertDialogTrigger as_child> <Button variant=" default"> <CheckCircle2 className=" mr - 2 h - 4 w - 4"/> Accept Offer </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Accept Project Offer?</AlertDialogTitle> <AlertDialogDescription> By accepting this offer, you agree to the project terms and timeline. This will initiate the contract and start the project. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction on_click={";
  () => handleStatusChange (" offer accepted");
}> Accept Offer </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Button> </>) ";
}<AlertDialogTrigger as_child> <Button variant=" default"> <CheckCircle2 className=" mr - 2 h - 4 w - 4"/> Mark as Completed </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Mark Project as Completed?</AlertDialogTitle> <AlertDialogDescription> This will finalize the project and mark it as complete. Make sure all deliverables have been provided and approved. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction on_click={";
  () => handleStatusChange (" completed");
}> Mark as Completed </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>);
}<Link href= {
  `/project/[id]/milestones` ";
}> <Layers className=" mr - 2 h - 4 w - 4"/> Milestones </Link> </Button>);
}<Link href= {
  `/project/[id]/room` ";
}> <Video className=" mr - 2 h - 4 w - 4"/> Project Room </Link> </Button>) ";
}> <MessageSquare className=" mr - 2 h - 4 w - 4"/> Message </Button>);
}</div> </div> </div>) ";
}</TabsList> <TabsContent value=" details"> <Card> <CardHeader> <CardTitle > Project Scope</CardTitle> <CardDescription> Project details and expectations </CardDescription> </CardHeader> <CardContent> <div className=" space - y-4"> <div> </div> </div> <div> </Badge> </div> <div> </div> </div> </div> </CardContent> </Card> </TabsContent> <TabsContent value=" timeline"> <Card> <CardHeader> <CardTitle > Project Timeline</CardTitle> <CardDescription> Key dates and milestones </CardDescription> </CardHeader> <CardContent> <div className=" space - y-4"> <div className=" flex items - start gap - 3 p - 3 bg - muted / 30 rounded - md"> <Calendar className=" h - 5 w - 5 text - primary mt - 0.5"/> <div> </div> </div> <div className=" flex items - start gap - 3 p - 3 bg - muted / 30 rounded - md"> <Clock className=" h - 5 w - 5 text - primary mt - 0.5"/> <div> </div> </div> </div> </div> </CardContent> </Card> </TabsContent> <TabsContent value=" documents"> <Card> <CardHeader> <CardTitle > Project Documents</CardTitle> <CardDescription> Agreements and relevant files </CardDescription> </CardHeader> <CardContent> <div> <h3 className=" font - semibold">Project Agreement</h3> <p className=" text - sm text - muted - foreground"> Uploaded when project was created </p> </div> </div> <Button variant=" outline"size=" sm"as_child> <a href= {
  project.agreement url ";
}target=" blank"rel=" noopener noreferrer"> View </Link> </Button> </div>) : (<div className=" text - center py - 8"> <FileText className=" h - 10 w - 10 text - muted - foreground mx - auto mb - 2"/> <h3 className=" font - semibold">No Documents Yet</h3> <p className=" text - sm text - muted - foreground"> No documents have been uploaded to this project. </p> </div>) ";
}</CardContent> </Card> </TabsContent> <TabsContent value=" notes"> <Card> <CardHeader> <CardTitle > Project Notes</CardTitle> <CardDescription> Shared notes and updates </CardDescription> </CardHeader> <CardContent> />) : (<User className=" h - 4 w - 4"/>) ";
}</Avatar> </div>) ) ) : (<div className=" text - center py - 8"> <MessageSquare className=" h - 8 w - 8 text - muted - foreground mx - auto mb - 2"/> <p className=" text - muted - foreground"> No notes yet. Add the first note to this project. </p> </div>);
}</div> {";
  isOfferAccepted && (<div> <Textarea placeholder=" Add a note or update to the project..."value= {
  new_note;
}/> <Button on_click={
  handleSubmitNote;
}disabled= {
  !new_note.trim () || isSubmittingNote;
}> </Button> </div>) ";
}</div> </CardContent> </Card> </TabsContent> </TabsContent> </Tabs> </div> <div className=" order - 1 lg:order - 2 lg:col - span - 1"> <Card> <CardHeader> <CardTitle > Project Participants</CardTitle> </CardHeader> <CardContent> />) : (<User className=" h - 6 w - 6"/>);
}</Avatar> <div> on_click={
  () => router.push (`/messages?talent_id=$ {
  project.talent id;
}`) ";
}> <MessageSquare className=" mr - 1 h - 3 w - 3"/> Message </Button>) ";
}</div> </div> />) : (<User className=" h - 6 w - 6"/>);
}</Avatar> <div> on_click={
  () => router.push (`/messages?client_id=$ {
  project.client id;
}`) ";
}> <MessageSquare className=" mr - 1 h - 3 w - 3"/> Message </Button>) ";
}</div> </div> </div> </CardContent> </Card> <CardHeader> <CardTitle > Project Status</CardTitle> </CardHeader> <CardContent> </span> </div> </div> </CardContent> </p> <Button variant=" outline"on_click={
  () => router.push (`/messages?talent_id=$ {
  project.talent id;
}`) ";
}className=" w - full"> <MessageSquare className=" mr - 2 h - 4 w - 4" /> Discuss Changes </Button> </CardFooter>);
}Waiting for the talent to accept your offer. </p> </CardFooter>);
}</p> </CardFooter>);
}</p> </CardFooter>);
}</Card> </div> </div> </main> </>);
}export default /**
 * ProjectDetails - Function description
 */
function ProjectDetails() {
  return (<ProtectedRoute> <ProjectDetailsContent /> </ProtectedRoute> '"export default /**
 * ProjectDetails - Function description
 */
function ProjectDetails() {
  return (
}
;
