<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { useAuth } from '@/hooks/useAuth'
import { useProjects } from '@/hooks/useProjects'
import { SEO } from '@/components/SEO'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Project, ProjectStatus } from '@/types/projects';
import { Button } from '@/components/ui/button';
import { logErrorToProduction } from '@/utils/productionLogger'; import Link from 'next/link'
import { format } from "date-fns"
import { useAuth } from "@/hooks/useAuth"
import { useProjects } from "@/hooks/useProjects"
import { SEO } from "@/components/SEO"
import { ProtectedRoute } from "@/components/ProtectedRoute"
import { Project, ProjectStatus } from "@/types/projects"
import { Button } from "@/components/ui/button"
import {logErrorToProduction} from '@/utils/productionLogger'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import Link from 'next/link';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

} from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,

<<<<<<< HEAD
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

<<<<<<< HEAD
=======
import { useRouter  } from 'next/router';
import { format } from "date-fns",
import { useAuth } from "@/hooks/useAuth",
import { useProjects } from "@/hooks/useProjects",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { Project, ProjectStatus } from "@/types/projects",
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';
import {
ursor/fix-website-loading-errors-and-merge-6662
  AlertDialog,
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';
import {
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger} from "@/components/ui/alert-dialog",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection",
import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from 'lucide-react'
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle
  AlertDialogTrigger
<<<<<<< HEAD
  AlertDialogTrigger,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
} from '@/components/ui/alert-dialog'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { supabase } from '@/integrations/supabase/client'
import { ProjectReviewSection } from '@/components/projects/reviews/ProjectReviewSection'
  AlertCircle
  Calendar
  CheckCircle2
  Clock
  FileText
  Layers
  MessageSquare
  Video
  User
  XCircle
} from 'lucide-react'
<<<<<<< HEAD
function ProjectDetailsContent() {
  AlertDialogTrigger} from "@/components/ui/alert-dialog",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection",
import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from 'lucide-react'

  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle
  AlertDialogTrigger
  const router = useRouter()
  // Get projectId from Next.js router query params
  const { projectId } = router.query as { projectId?: string }
  const { user } = useAuth()
  const { getProjectById, updateProjectStatus } = useProjects()
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [notes, setNotes] = useState<any[]>([])
  const [newNote, setNewNote] = useState('')
  const [isSubmittingNote, setIsSubmittingNote] = useState(false)
  const [activeTab, setActiveTab] = useState('details')
  AlertDialogTrigger} from "@/components/ui/alert-dialog",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection",
import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from 'lucide-react'

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
function ProjectDetailsContent() {
  const router = useRouter(),
  // Get projectId from Next.js router query params
  const { projectId } = router.query as { projectId?: string },
  const { user } = useAuth(),
  const { getProjectById, updateProjectStatus } = useProjects(),
  
  const [project, setProject] = useState<Project | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [notes, setNotes] = useState<any[]>([]),
  const [newNote, setNewNote] = useState(""),
  const [isSubmittingNote, setIsSubmittingNote] = useState(false),
  const [activeTab, setActiveTab] = useState("details"),
  
  // Load project data
  useEffect(() => {
    async function loadProject() {
<<<<<<< HEAD
      if (!projectId) return
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  // Load project data
  useEffect(() => {
    async function loadProject() {

      if (!projectId) return;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setIsLoading(true)
      const projectData = await getProjectById(projectId)
      if (projectData) {
        setProject(projectData)
<<<<<<< HEAD
<<<<<<< HEAD

          title: "Project not found",
=======
  
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return
ursor/fix-website-loading-errors-and-merge-6662
      const projectData = await getProjectById(projectId)
      if (projectData) {
        setProject(projectData)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      if (!projectId) return,
      
      setIsLoading(true),
      const projectData = await getProjectById(projectId),
      
      if (projectData) {
        setProject(projectData),
        
        // Now fetch notes
        fetchProjectNotes(projectId)
      } else {
        toast({
          title: "Project not found",
          description: "The requested project could not be found.",
          variant: "destructive"}),
        router.push("/dashboard")
import React, { useState, useEffect } from "react",;
import Link from 'next/link',;
import { useRouter } from 'next/router',;
import { format } from "date-fns",;
import { useAuth } from "@/hooks/useAuth",;
import { useProjects } from "@/hooks/useProjects",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { Project, ProjectStatus } from "@/types/projects",;
import { Button } from "@/components/ui/button",;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle} from "@/components/ui/card",;
import {;
  Tabs,;
  TabsContent,;
  TabsList,;
  TabsTrigger} from "@/components/ui/tabs",;
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;
  AlertDialogTrigger} from "@/components/ui/alert-dialog",;
import { Avatar } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection",;
import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from 'lucide-react';
function ProjectDetailsContent() {;
  const router = useRouter(),;
  // Get projectId from Next.js router query params;
  const { projectId } = router.query as { projectId?: string },;
  const { user } = useAuth(),;
  const { getProjectById, updateProjectStatus } = useProjects(),;
  const [project, setProject] = useState<Project | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [notes, setNotes] = useState<any[]>([]),;
  const [newNote, setNewNote] = useState(""),;
  const [isSubmittingNote, setIsSubmittingNote] = useState(false),;
  const [activeTab, setActiveTab] = useState("details"),;
  // Load project data;
  useEffect(() => {;
    async function loadProject() {;
      if (!projectId) return,;
      setIsLoading(true),;
      const projectData = await getProjectById(projectId),;
      if (projectData) {;
        setProject(projectData),;
        // Now fetch notes;
        fetchProjectNotes(projectId);
      } else {;
        toast({;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          title: 'Project not found',;
          description: 'The requested project could not be found.',;
          variant: 'destructive',;
        });
        router && router.push('/dashboard');
=======
          title: "Project not found",;
          description: "The requested project could not be found.",;
          variant: "destructive"}),;
        router.push("/dashboard");
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
<<<<<<< HEAD

=======
      setIsLoading(false)
    }
<<<<<<< HEAD

      const { data, error } = await supabase
      setIsLoading(false)
    }
    loadProject()
  }, [projectId])
  const fetchProjectNotes = async (projectId: string) => {    try {

      }
      setIsLoading(false)
    }
    loadProject()
  }, [projectId])
  const fetchProjectNotes = async (projectId: string) => {    try {
      const { data, error } = await supabase
        .from('project_notes')
        .select(
          `
          *
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `
        )
        .eq('project_id', projectId)
        .order('created_at', { ascending: false })
      if (error) throw error
      setNotes(data |[])
    } catch (err: any) {
      logErrorToProduction('Error fetching project notes:', { data: err })
      toast({
        title: 'Failed to load notes'
        description:
          err.message |'An error occurred while loading project notes.'
        variant: 'destructive'
      })
    }
  }
  const handleSubmitNote = async () => {
    if (!newNote.trim() |!project |!user) return
    setIsSubmittingNote(true)

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    
    loadProject()
  }, [projectId]),
  
  const fetchProjectNotes = async (projectId: string) => {
    try {
<<<<<<< HEAD

      const { data, error } = await supabase
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      const { data, error } = await supabase
        .from("project_notes")
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
ursor/fix-website-loading-errors-and-merge-6662
    try {
        .from('project_notes')
        .insert({
          project_id: project.id
          user_id: user.id
          content: newNote
          content: newNote,
    
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {
      const { data, error } = await supabase
        .from("project_notes")
        .insert({
        })
        .select()
      if (error) throw error
      // Refresh notes
      fetchProjectNotes(project.id)
      setNewNote('')
      toast({
        title: 'Note added'
        description: 'Your note has been added to the project.'
      })
    } catch (err: any) {
      logErrorToProduction('Error adding note:', { data: err })
      toast({
        title: 'Failed to add note'
        description: err.message |'An error occurred while adding note.'
        variant: 'destructive'
      })
    } finally {
      setIsSubmittingNote(false)
    }
  }
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return;
    const success = await updateProjectStatus(project.id, newStatus)
    if (success) {
      setProject({
        ...project
        status: newStatus
      })
          content: newNote})
        .select(),
      
      if (error) throw error,
      
      // Refresh notes
      fetchProjectNotes(project.id),
      setNewNote(""),
      
      toast({
        title: "Note added",
        description: "Your note has been added to the project."})
    } catch (err: any) {
      logErrorToProduction('Error adding note:', { data: err }),
      toast({
        title: "Failed to add note",
        description: err.message || "An error occurred while adding note.",
        variant: "destructive"})
    } finally {
      setIsSubmittingNote(false)
    }
  },
  
  const handleStatusChange = async (newStatus: ProjectStatus) => {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD



  if (isLoading) {
    return (


=======
      }
    }

  }

          title: 'Offer Accepted! 🎉',
          description: 'The project is now in progress. Congratulations!',
=======
    if (!project) return,
    
    const success = await updateProjectStatus(project.id, newStatus),
    
    if (success) {
      setProject({
        ...project,
        status: newStatus}),
      
      // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {
        toast({
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        })
      }
    }
  }
  const getStatusBadge = (status: ProjectStatus) => {    switch (status) {
      case 'offer_sent':
        return <Badge variant='outline'>Offer Sent</Badge>
      case 'offer_accepted':
        return (
          <Badge className='bg-green-100 text-green-800'>Offer Accepted</Badge>
        )
      case 'changes_requested':
        return <Badge variant='secondary'>Changes Requested</Badge>
      case 'in_progress':
        return <Badge className='bg-blue-100 text-blue-800'>In Progress</Badge>
      case 'completed':
        return <Badge variant='default'>Completed</Badge>
      case 'canceled':
        return <Badge variant='destructive'>Canceled</Badge>
      default:
        return <Badge variant='outline'>{status}</Badge>
    }
  }
          title: "Offer Accepted! 🎉",
          description: "The project is now in progress. Congratulations!"})
      }
    }
  },
  
  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>,
      case "offer_accepted":
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>,
      case "changes_requested":
        return <Badge variant="secondary">Changes Requested</Badge>,
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>,
      case "completed":
        return <Badge variant="default">Completed</Badge>,
      case "canceled":
        return <Badge variant="destructive">Canceled</Badge>,
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  },
  
  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading project details...</p>
          </div>
        </div>
      </div>
    )
  }
  if (!project) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The project you're looking for doesn't exist or you don't have access to it.
            </p>
<<<<<<< HEAD
            <Button onClick={() => router.push('/dashboard')}>              Return to Dashboard
ursor/fix-website-loading-errors-and-merge-6662
            <Button onClick={() => router.push('/dashboard')}>              Return to Dashboard
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Button onClick={() => router.push("/dashboard")}>
              Return to Dashboard


<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
  const isClient = user?.id === project.client_id
  const isTalent = user?.id === project.talent_id
  if (!isClient && !isTalent) {
    router.push('/unauthorized')
    return null
  }
  const isOfferPending = project.status === 'offer_sent'
  const isOfferAccepted = [
    'offer_accepted'
    'in_progress'
    'completed'
  ].includes(project.status)
  const isActiveProject = ['offer_accepted', 'in_progress'].includes(
    project.status
  )
  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,
  
  if (!isClient && !isTalent) {
    router.push("/unauthorized"),
    return null
  }
  
  const isOfferPending = project.status === "offer_sent",
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status),
  
  return (
    <>
      <SEO 
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} 
        description="View and manage your project details and collaboration."
      />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">
            <div>
                {getStatusBadge(project.status)}
                <span className="text-muted-foreground">
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>
              </div>
            </div>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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


            
<<<<<<< HEAD


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
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {/* Action Buttons Based on Role and Status */}
            <div className="space-x-2">
              {isTalent && isOfferPending && (
                <>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="default">
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer
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
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes
                  </Button>
                </>
              )}
              
              {(isClient || isTalent) && project.status === "in_progress" && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="default">
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed
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
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              {isActiveProject && (
                <Button variant="default" asChild>
                  <Link href={`/project/[id]/milestones`}>
                    <Layers className="mr-2 h-4 w-4" /> Milestones
                  </Link>
                </Button>
              )}
              {isActiveProject && (
                <Button variant="outline" asChild>
                  <Link href={`/project/[id]/room`}>
                    <Video className="mr-2 h-4 w-4" /> Project Room
                  </Link>
                </Button>
              )}
                ['offer_sent', 'offer_accepted', 'in_progress'].includes(
                  project.status
                ) && (
                  <Button
                    variant='outline'
                    onClick={() =>
                      router.push(
                        `/messages?talentId=${project.talent_id}&clientId=${project.client_id}`
                      )
                    }
                  >
                    <MessageSquare className='mr-2 h-4 w-4' /> Message
                  </Button>
                )}            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='order-2 lg:order-1 lg:col-span-2'>
            <Tabs
              defaultValue='details'
              value={activeTab}
              onValueChange={setActiveTab}
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
              
              {(isClient || isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project.status) && (
                <Button 
                  variant="outline" 
                  onClick={() => router.push(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Message
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="details">Project Details</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>
                {project.status === "completed" && (
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Scope</CardTitle>
                    <CardDescription>
                      Project details and expectations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Project Description</h3>
                        <div className="bg-muted/30 p-4 rounded-md">
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Payment Terms</h3>
                        <Badge variant="outline" className="capitalize">
                          {project.payment_terms} Payment
                        </Badge>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Job Details</h3>
                        <div className="bg-muted/30 p-4 rounded-md">
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                    <CardDescription>
                      Key dates and milestones
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Start Date</h3>
                          <p>{format(new Date(project.start_date), "PPP")}</p>
                        </div>
                      </div>
                        <div>
                          <h3 className="font-semibold">Project Status</h3>
                          <div className="mt-1">
                            {getStatusBadge(project.status)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Documents</CardTitle>
                    <CardDescription>
                      Agreements and relevant files
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.agreement_url ? (
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-semibold">Project Agreement</h3>
                            <p className="text-sm text-muted-foreground">
                              Uploaded when project was created
                            </p>
                          </div>
<<<<<<< HEAD
                        </div>
              <TabsContent value='notes'>
ursor/fix-website-loading-errors-and-merge-6662
              <TabsContent value='notes'>
              
              <TabsContent value="notes">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


<<<<<<< HEAD
=======
                <Card>
                    <CardTitle>Project Notes</CardTitle>
                    <CardDescription>
                      Shared notes and updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
                        {notes.length > 0 ? (
                          notes.map(note => (
                            <div
                              key={note.id}
                              className='bg-muted/30 p-3 rounded-md'
                            >
                              <div className='flex items-center gap-2 mb-2'>
                                <Avatar className='h-6 w-6'>
                  </CardContent>;
                </Card>;
              </TabsContent>;

              <TabsContent value='notes'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Notes</CardTitle>;
                    <CardDescription>Shared notes and updates</CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className='space-y-4'>;
                      <div className='space-y-4 max-h-[400px] overflow-y-auto mb-4'>;
                        {notes && notes.length > 0 ? (;
                          notes && notes.map(note => (;

                            <div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                              key={note && note.id}
                              className='bg-muted/30 p-3 rounded-md'>;
                              <div className='flex items-center gap-2 mb-2'>;
                                <Avatar className='h-6 w-6'>;
                                  {note && note.created_by_profile?.avatar_url ? (;

                          notes.map((note) => (
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">
                              <div className="flex items-center gap-2 mb-2">
                                <Avatar className="h-6 w-6">
<<<<<<< HEAD

                                  {note.created_by_profile?.avatar_url ? (
=======
                                  {note.created_by_profile?.avatar_url ? (
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                          notes.map(note => (
                            <div
                              key={note.id}
                              className='bg-muted/30 p-3 rounded-md'
                            >
                              <div className='flex items-center gap-2 mb-2'>
                                <Avatar className='h-6 w-6'>
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                      loading='lazy'                                    />
                                    <User className="h-4 w-4" />
                                      loading='lazy'                                    />
                                      loading="lazy"
                                    />
                                  ) : (
                                    <User className="h-4 w-4" />
                                  )}
                                </Avatar>
                                <span className='font-medium text-sm'>
                                  {note.created_by_profile?.display_name |

                                  {note.created_by_profile?.avatar_url ? (
                                    <img


                                      loading="lazy"
                                    />


                                  ) : (
                                    <User className='h-4 w-4' />
                                  )}
                                </Avatar>

                                      src={note && note.created_by_profile.avatar_url}
                                      alt={note && note.created_by_profile.display_name}
                                      loading='lazy'                                    />;
                                  ) : (;
                                    <User className='h-4 w-4' />;
                                  )}
                                </Avatar>;
                                <span className='font-medium text-sm'>;
                                  {note && note.created_by_profile?.display_name ||;

                                    'User'}
                                    'User'}
                                </span>;
                                <span className='text-xs text-muted-foreground'>;
                                  {format(new Date(note && note.created_at), 'PPp')}
                                </span>;
                              </div>;
                              <p className='text-sm whitespace-pre-wrap'>;
                                {note && note.content}
                              </p>;
                            </div>;
                          ));
                        ) : (;
                          <div className='text-center py-8'>;
                            <MessageSquare className='h-8 w-8 text-muted-foreground mx-auto mb-2' />;
                            <p className='text-muted-foreground'>;
                              No notes yet. Add the first note to this project.;
                            </p>;
                          </div>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        )}

                      </div>;

                      {isOfferAccepted && (;
                        <div>;
                          <Textarea
                            placeholder='Add a note or update to the project...'
                            value={newNote}
                            onChange={e => setNewNote(e && e.target.value)}
                            className='min-h-[100px] mb-2'                          />;


                                <span className="font-medium text-sm">
                                  {note.created_by_profile?.display_name || "User"}
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">
                            View
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                        <h3 className="font-semibold">No Documents Yet</h3>
                        <p className="text-sm text-muted-foreground">
                          No documents have been uploaded to this project.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Notes</CardTitle>
                    <CardDescription>
                      Shared notes and updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
                        {notes.length > 0 ? (
                                  {note.created_by_profile?.avatar_url ? (
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                  ) : (
                                    <User className="h-4 w-4" />
                                  )}
                                </Avatar>
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {format(new Date(note.created_at), "PPp")}
                                </span>
                              </div>
                              <p className="text-sm whitespace-pre-wrap">{note.content}</p>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8">
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-muted-foreground">
                              No notes yet. Add the first note to this project.
                            </p>
                          </div>
                        )}
<<<<<<< HEAD
                          <Button
                            onClick = {handleSubmitNote,}
                            disabled = {!newNote.trim() |isSubmittingNote,}
                      
                      </div>
                      {isOfferAccepted && (
                        <div>
                          <Textarea
                            placeholder='Add a note or update to the project...'
                            value={newNote}
                            onChange={e => setNewNote(e.target.value)}
                            className='min-h-[100px] mb-2'                          />
                          <Button
                            onClick = {handleSubmitNote,}
                            disabled = {!newNote.trim() |isSubmittingNote,}
=======
                      </div>


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      
                      {isOfferAccepted && (
                        <div>
                          <Textarea
                            placeholder="Add a note or update to the project..."
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="min-h-[100px] mb-2"
                          />
<<<<<<< HEAD
=======


                          <Button
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          <Button
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          >
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
<<<<<<< HEAD
              <TabsContent value='reviews'>
              <TabsContent value='reviews'>
              
              <TabsContent value="reviews">
                <ProjectReviewSection project={project} />
              </TabsContent>
            </Tabs>
          </div>
          <div className='order-1 lg:order-2 lg:col-span-1'>
                          <Button

                            onClick = {handleSubmitNote,}

                            {isSubmittingNote ? 'Posting...' : 'Post Note'}
                          </Button>;
                        </div>;
                      )}


              
              <TabsContent value="reviews">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


                <ProjectReviewSection project={project} />
              </TabsContent>
            </Tabs>
          </div>


<<<<<<< HEAD
          
          <div className="order-1 lg:order-2 lg:col-span-1">


          
          <div className="order-1 lg:order-2 lg:col-span-1">
          
          <div className="order-1 lg:order-2 lg:col-span-1">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Card>
                <CardTitle>Project Participants</CardTitle>
              </CardHeader>
              <CardContent>
                      {project.talent_profile?.profile_picture_url ? (
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      {project.talent_profile?.profile_picture_url ? (
                        <img;
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
<<<<<<< HEAD
<<<<<<< HEAD
                      ) : (
                        <User className='h-6 w-6' />
                      )}
                    </Avatar>
                    <div>

                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;

              <TabsContent value='reviews'>;
                <ProjectReviewSection project={project} />;
              </TabsContent>;
            </Tabs>;
          </div>;

          <div className='order-1 lg:order-2 lg:col-span-1'>;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Participants</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='space-y-6'>;
                  <div className='flex items-start gap-4'>;
                    <Avatar className='h-10 w-10'>;
                      {project && project.talent_profile?.profile_picture_url ? (;
                        <img
                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
                          loading='lazy'                        />;
                      ) : (;
                        <User className='h-6 w-6' />;
                      )}
                    </Avatar>;
                    <div>;
                      <h3 className='font-semibold'>;
                        {project && project.talent_profile?.full_name || 'Talent'}
                      </h3>;
                      <p className='text-sm text-muted-foreground'>;
                        {project && project.talent_profile?.professional_title ||;

                          'Professional'}
                      </p>;
                      {isClient && (;
=======

                          loading="lazy"
                        />


                      ) : (
                          loading='lazy'                        />
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
=======


                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          variant='outline'
                          size='sm'
                          className='mt-2'
                          onClick={() =>
                            router.push(
                              `/messages?talentId=${project.talent_id}`
                            )
                          }                        >
                          <MessageSquare className='mr-1 h-3 w-3' /> Message
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
<<<<<<< HEAD
                      )}
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <Avatar className='h-10 w-10'>
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading='lazy'                        />
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
                      <h3 className='font-semibold'>
                        {project.talent_profile?.full_name |'Client'}
                      </h3>
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      {isTalent && (
ursor/fix-website-loading-errors-and-merge-6662
                          loading='lazy'                        />
                          loading="lazy"
                        />
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
                      <h3 className='font-semibold'>
                        {project.talent_profile?.full_name |'Talent'}
                      </h3>
                      <p className='text-sm text-muted-foreground'>
                        {project.talent_profile?.professional_title |
                          'Professional'}
                      </p>
                      {isClient && (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        <Button
                          variant='outline'
                          size='sm'
                          className='mt-2'
<<<<<<< HEAD




=======
                          onClick={() =>
                            router.push(
                              `/messages?talentId=${project.talent_id}`
                            )
                          }                        >
                          <MessageSquare className='mr-1 h-3 w-3' /> Message
                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name || "Talent"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.talent_profile?.professional_title || "Professional"}
                      </p>
                      {isClient && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        </Button>
                      )}
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <div className='flex items-start gap-4'>
                    <Avatar className='h-10 w-10'>
                  
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">

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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      {project.talent_profile?.profile_picture_url ? (
                        <img;
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
<<<<<<< HEAD
<<<<<<< HEAD


                          loading="lazy"
                        />


=======
                          loading='lazy'                        />
                          loading="lazy"
                        />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      ) : (
                        <User className='h-6 w-6' />
                      )}
                    </Avatar>
                    <div>
<<<<<<< HEAD
<<<<<<< HEAD


                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name || "Client"}


                      </h3>
                      <p className='text-sm text-muted-foreground'>
                        Project Owner
                      </p>
                      {isTalent && (
                          onClick={() =>;
                            router && router.push(;
                              `/messages?talentId=${project && project.talent_id}`;
                            );
                          }                        >;
                          <MessageSquare className='mr-1 h-3 w-3' /> Message;
=======
                      <h3 className='font-semibold'>
                        {project.talent_profile?.full_name |'Client'}
                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name || "Client"}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      </h3>
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      {isTalent && (
                        <Button
<<<<<<< HEAD
                          variant='outline'
                          size='sm'
                          className='mt-2'
                          onClick={() =>
                            router.push(
                              `/messages?clientId=${project.client_id}`
                            )
                          }                        >
                          <MessageSquare className='mr-1 h-3 w-3' /> Message
                        </Button>
;
    loadProject();
  }, [projectId]),;
  const fetchProjectNotes = async (projectId: string) => {;
    try {;
      const { data, error } = await supabase;
        .from("project_notes");
        .select(`;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `);
        .eq("project_id", projectId);
        .order("created_at", { ascending: false }),;
      if (error) throw error,;
      setNotes(data || []);
    } catch (err: any) {;
      logErrorToProduction('Error fetching project notes:', { data: err }),;
      toast({;
        title: "Failed to load notes",;
        description: err.message || "An error occurred while loading project notes.",;
        variant: "destructive"});
    }
  },;
  const handleSubmitNote = async () => {;
    if (!newNote.trim() || !project || !user) return,;
    setIsSubmittingNote(true),;
    try {;
      const { data, error } = await supabase;
        .from("project_notes");
        .insert({;
          project_id: project.id,;
          user_id: user.id,;
          content: newNote});
        .select(),;
      if (error) throw error,;
      // Refresh notes;
      fetchProjectNotes(project.id),;
      setNewNote(""),;
      toast({;
        title: "Note added",;
        description: "Your note has been added to the project."});
    } catch (err: any) {;
      logErrorToProduction('Error adding note:', { data: err }),;
      toast({;
        title: "Failed to add note",;
        description: err.message || "An error occurred while adding note.",;
        variant: "destructive"});
    } finally {;
      setIsSubmittingNote(false);
    }
  },;
  const handleStatusChange = async (newStatus: ProjectStatus) => {;
    if (!project) return,;
    const success = await updateProjectStatus(project.id, newStatus),;
    if (success) {;
      setProject({;
        ...project,;
        status: newStatus}),;
      // If offer was accepted, show a special toast;
      if (newStatus === "offer_accepted") {;
        toast({;
          title: "Offer Accepted! 🎉",;
          description: "The project is now in progress. Congratulations!"});
      }
    }
  },;
  const getStatusBadge = (status: ProjectStatus) => {;
    switch (status) {;
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>,;
      case "offer_accepted":;
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>,;
      case "changes_requested":;
        return <Badge variant="secondary">Changes Requested</Badge>,;
      case "in_progress":;
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>,;
      case "completed":;
        return <Badge variant="default">Completed</Badge>,;
      case "canceled":;
        return <Badge variant="destructive">Canceled</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  },;
  if (isLoading) {;
    return (;
      <div className="container mx-auto py-8">;
        <div className="flex justify-center items-center h-64">;
          <div className="text-center">;
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>;
            <p>Loading project details...</p>;
          </div>;
        </div>;
      </div>;
    );
  }
;
  if (!project) {;
    return (;
      <div className="container mx-auto py-8">;
        <Card>;
          <CardContent className="flex flex-col items-center justify-center py-10">;
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;
            <p className="text-muted-foreground mb-4">;
              The project you're looking for doesn't exist or you don't have access to it.;
            </p>;
            <Button onClick={() => router.push("/dashboard")}>;
              Return to Dashboard;
            </Button>;
          </CardContent>;
        </Card>;
      </div>;
    );
  }
;
  // Check if user is either the client or the talent;
  const isClient = user?.id === project.client_id,;
  const isTalent = user?.id === project.talent_id,;
  if (!isClient && !isTalent) {;
    router.push("/unauthorized"),;
    return null;
  }
;
  const isOfferPending = project.status === "offer_sent",;
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),;
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status);
  return (;
    <>;
      <SEO;
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} ;
        description="View and manage your project details and collaboration.";
      />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;
            <div>;
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>;
              <div className="flex items-center gap-2 mt-1">;
                {getStatusBadge(project.status)}
                <span className="text-muted-foreground">;
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;
            {/* Action Buttons Based on Role and Status */}
            <div className="space-x-2">;
              {isTalent && isOfferPending && (;
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger asChild>;
                      <Button variant="default">;
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer;
                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
                      <AlertDialogHeader>;
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription>;
                          By accepting this offer, you agree to the project terms and timeline.;
                          This will initiate the contract and start the project.;
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;
                        <AlertDialogCancel>Cancel</AlertDialogCancel>;
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;
                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;
                  </Button>;
                </>;
              )}
;
              {(isClient || isTalent) && project.status === "in_progress" && (;
                <AlertDialog>;
                  <AlertDialogTrigger asChild>;
                    <Button variant="default">;
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
                    <AlertDialogHeader>;
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
                        This will finalize the project and mark it as complete.;
                        Make sure all deliverables have been provided and approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
                      <AlertDialogCancel>Cancel</AlertDialogCancel>;
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;
                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;
              )}
;
              {isActiveProject && (;
                <Button variant="default" asChild>;
                  <Link href={`/project/[id]/milestones`}>;
                    <Layers className="mr-2 h-4 w-4" /> Milestones;
                  </Link>;
                </Button>;
              )}
;
              {isActiveProject && (;
                <Button variant="outline" asChild>;
                  <Link href={`/project/[id]/room`}>;
                    <Video className="mr-2 h-4 w-4" /> Project Room;
                  </Link>;
                </Button>;
              )}
;
              {(isClient || isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project.status) && (;
                <Button;
                  variant="outline";
                  onClick={() => router.push(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >;
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;
                </Button>;
              )}
            </div>;
          </div>;
        </div>;
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
          <div className="order-2 lg:order-1 lg:col-span-2">;
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>;
              <TabsList className="mb-6">;
                <TabsTrigger value="details">Project Details</TabsTrigger>;
                <TabsTrigger value="timeline">Timeline</TabsTrigger>;
                <TabsTrigger value="documents">Documents</TabsTrigger>;
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>;
                {project.status === "completed" && (;
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>;
                )}
              </TabsList>;
              <TabsContent value="details">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Scope</CardTitle>;
                    <CardDescription>;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-4">;
                      <div>;
                        <h3 className="font-semibold mb-2">Project Description</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>;
                        </div>;
                      </div>;
                      <div>;
                        <h3 className="font-semibold mb-2">Payment Terms</h3>;
                        <Badge variant="outline" className="capitalize">;
                          {project.payment_terms} Payment;
                        </Badge>;
                      </div>;
                      <div>;
                        <h3 className="font-semibold mb-2">Job Details</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="timeline">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Timeline</CardTitle>;
                    <CardDescription>;
                      Key dates and milestones;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-4">;
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />;
                        <div>;
                          <h3 className="font-semibold">Start Date</h3>;
                          <p>{format(new Date(project.start_date), "PPP")}</p>;
                        </div>;
                      </div>;
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;
                        <Clock className="h-5 w-5 text-primary mt-0.5" />;
                        <div>;
                          <h3 className="font-semibold">Project Status</h3>;
                          <div className="mt-1">;
                            {getStatusBadge(project.status)}
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="documents">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    {project.agreement_url ? (;
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">;
                        <div className="flex items-center gap-3">;
                          <FileText className="h-5 w-5 text-primary" />;
                          <div>;
                            <h3 className="font-semibold">Project Agreement</h3>;
                            <p className="text-sm text-muted-foreground">;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;
                        <Button variant="outline" size="sm" asChild>;
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;
                            View;
                          </a>;
                        </Button>;
                      </div>;
                    ) : (;
                      <div className="text-center py-8">;
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />;
                        <h3 className="font-semibold">No Documents Yet</h3>;
                        <p className="text-sm text-muted-foreground">;
                          No documents have been uploaded to this project.;
                        </p>;
                      </div>;
                    )}
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="notes">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Notes</CardTitle>;
                    <CardDescription>;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-4">;
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">;
                        {notes.length > 0 ? (;
                          notes.map((note) => (;
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">;
                              <div className="flex items-center gap-2 mb-2">;
                                <Avatar className="h-6 w-6">;
                                  {note.created_by_profile?.avatar_url ? (;
                                    <img;
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                      loading="lazy";
                                    />;
                                  ) : (;
                                    <User className="h-4 w-4" />;
                                  )}
                                </Avatar>;
                                <span className="font-medium text-sm">;
                                  {note.created_by_profile?.display_name || "User"}
                                </span>;
                                <span className="text-xs text-muted-foreground">;
                                  {format(new Date(note.created_at), "PPp")}
                                </span>;
                              </div>;
                              <p className="text-sm whitespace-pre-wrap">{note.content}</p>;
                            </div>;
                          ));
                        ) : (;
                          <div className="text-center py-8">;
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />;
                            <p className="text-muted-foreground">;
                              No notes yet. Add the first note to this project.;
                            </p>;
                          </div>;
                        )}
                      </div>;
                      {isOfferAccepted && (;
                        <div>;
                          <Textarea;
                            placeholder="Add a note or update to the project...";
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="min-h-[100px] mb-2";
                          />;
                          <Button;
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          >;
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>;
                        </div>;
                      )}
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="reviews">;
                <ProjectReviewSection project={project} />;
              </TabsContent>;
            </Tabs>;
          </div>;
          <div className="order-1 lg:order-2 lg:col-span-1">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Participants</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-6">;
                  <div className="flex items-start gap-4">;
                    <Avatar className="h-10 w-10">;
                      {project.talent_profile?.profile_picture_url ? (;
                        <img;
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading="lazy";
                        />;
                      ) : (;
                        <User className="h-6 w-6" />;
                      )}
                    </Avatar>;
                    <div>;
                      <h3 className="font-semibold">;
                        {project.talent_profile?.full_name || "Talent"}
                      </h3>;
                      <p className="text-sm text-muted-foreground">;
                        {project.talent_profile?.professional_title || "Professional"}
                      </p>;
                      {isClient && (;
                        <Button;
                          variant="outline";
                          size="sm";
                          className="mt-2";
                          onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                        >;
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        </Button>;
                      )}
                    </div>;
                  </div>;

                  <div className='flex items-start gap-4'>;
                    <Avatar className='h-10 w-10'>;
                      {project && project.talent_profile?.profile_picture_url ? (;
                        <img
                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
                          loading='lazy'                        />;
                      ) : (;
                        <User className='h-6 w-6' />;
                      )}
                    </Avatar>;
                    <div>;
                      <h3 className='font-semibold'>;
                        {project && project.talent_profile?.full_name || 'Client'}
                      </h3>;
                      <p className='text-sm text-muted-foreground'>;
                        Project Owner;
                      </p>;
                      {isTalent && (;
<<<<<<< HEAD
                        <Button


=======
                        <Button;
                          variant="outline";
                          size="sm";
                          className="mt-2";
                          onClick={() => router.push(`/messages?clientId=${project.client_id}`)}
                        >;
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
            {/* Project Status Card */}
            <Card className='mt-6'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => router.push(`/messages?clientId=${project.client_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
                        </Button>
;
    loadProject();
  }, [projectId]),;
  const fetchProjectNotes = async (projectId: string) => {;
    try {;
      const { data, error } = await supabase;
        .from("project_notes");
        .select(`;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `);
        .eq("project_id", projectId);
        .order("created_at", { ascending: false }),;
      if (error) throw error,;
      setNotes(data || []);
    } catch (err: any) {;
      logErrorToProduction('Error fetching project notes:', { data: err }),;
      toast({;
        title: "Failed to load notes",;
        description: err.message || "An error occurred while loading project notes.",;
        variant: "destructive"});
    }
  },;
  const handleSubmitNote = async () => {;
    if (!newNote.trim() || !project || !user) return,;
    setIsSubmittingNote(true),;
    try {;
      const { data, error } = await supabase;
        .from("project_notes");
        .insert({;
          project_id: project.id,;
          user_id: user.id,;
          content: newNote});
        .select(),;
      if (error) throw error,;
      // Refresh notes;
      fetchProjectNotes(project.id),;
      setNewNote(""),;
      toast({;
        title: "Note added",;
        description: "Your note has been added to the project."});
    } catch (err: any) {;
      logErrorToProduction('Error adding note:', { data: err }),;
      toast({;
        title: "Failed to add note",;
        description: err.message || "An error occurred while adding note.",;
        variant: "destructive"});
    } finally {;
      setIsSubmittingNote(false);
    }
  },;
  const handleStatusChange = async (newStatus: ProjectStatus) => {;
    if (!project) return,;
    const success = await updateProjectStatus(project.id, newStatus),;
    if (success) {;
      setProject({;
        ...project,;
        status: newStatus}),;
      // If offer was accepted, show a special toast;
      if (newStatus === "offer_accepted") {;
        toast({;
          title: "Offer Accepted! 🎉",;
          description: "The project is now in progress. Congratulations!"});
      }
    }
  },;
  const getStatusBadge = (status: ProjectStatus) => {;
    switch (status) {;
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>,;
      case "offer_accepted":;
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>,;
      case "changes_requested":;
        return <Badge variant="secondary">Changes Requested</Badge>,;
      case "in_progress":;
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>,;
      case "completed":;
        return <Badge variant="default">Completed</Badge>,;
      case "canceled":;
        return <Badge variant="destructive">Canceled</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  },;
  if (isLoading) {;
    return (;
      <div className="container mx-auto py-8">;
        <div className="flex justify-center items-center h-64">;
          <div className="text-center">;
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>;
            <p>Loading project details...</p>;
          </div>;
        </div>;
      </div>;
    );
  }
;
  if (!project) {;
    return (;
      <div className="container mx-auto py-8">;
        <Card>;
          <CardContent className="flex flex-col items-center justify-center py-10">;
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;
            <p className="text-muted-foreground mb-4">;
              The project you're looking for doesn't exist or you don't have access to it.;
            </p>;
            <Button onClick={() => router.push("/dashboard")}>;
              Return to Dashboard;
            </Button>;
          </CardContent>;
        </Card>;
      </div>;
    );
  }
;
  // Check if user is either the client or the talent;
  const isClient = user?.id === project.client_id,;
  const isTalent = user?.id === project.talent_id,;
  if (!isClient && !isTalent) {;
    router.push("/unauthorized"),;
    return null;
  }
;
  const isOfferPending = project.status === "offer_sent",;
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),;
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status);
  return (;
    <>;
      <SEO;
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} ;
        description="View and manage your project details and collaboration.";
      />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;
            <div>;
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>;
              <div className="flex items-center gap-2 mt-1">;
                {getStatusBadge(project.status)}
                <span className="text-muted-foreground">;
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;
            {/* Action Buttons Based on Role and Status */}
            <div className="space-x-2">;
              {isTalent && isOfferPending && (;
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger asChild>;
                      <Button variant="default">;
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer;
                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
                      <AlertDialogHeader>;
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription>;
                          By accepting this offer, you agree to the project terms and timeline.;
                          This will initiate the contract and start the project.;
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;
                        <AlertDialogCancel>Cancel</AlertDialogCancel>;
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;
                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;
                  </Button>;
                </>;
              )}
;
              {(isClient || isTalent) && project.status === "in_progress" && (;
                <AlertDialog>;
                  <AlertDialogTrigger asChild>;
                    <Button variant="default">;
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
                    <AlertDialogHeader>;
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
                        This will finalize the project and mark it as complete.;
                        Make sure all deliverables have been provided and approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
                      <AlertDialogCancel>Cancel</AlertDialogCancel>;
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;
                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;
              )}
;
              {isActiveProject && (;
                <Button variant="default" asChild>;
                  <Link href={`/project/[id]/milestones`}>;
                    <Layers className="mr-2 h-4 w-4" /> Milestones;
                  </Link>;
                </Button>;
              )}
;
              {isActiveProject && (;
                <Button variant="outline" asChild>;
                  <Link href={`/project/[id]/room`}>;
                    <Video className="mr-2 h-4 w-4" /> Project Room;
                  </Link>;
                </Button>;
              )}
;
              {(isClient || isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project.status) && (;
                <Button;
                  variant="outline";
                  onClick={() => router.push(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >;
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;
                </Button>;
              )}
            </div>;
          </div>;
        </div>;
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
          <div className="order-2 lg:order-1 lg:col-span-2">;
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>;
              <TabsList className="mb-6">;
                <TabsTrigger value="details">Project Details</TabsTrigger>;
                <TabsTrigger value="timeline">Timeline</TabsTrigger>;
                <TabsTrigger value="documents">Documents</TabsTrigger>;
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>;
                {project.status === "completed" && (;
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>;
                )}
              </TabsList>;
              <TabsContent value="details">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Scope</CardTitle>;
                    <CardDescription>;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-4">;
                      <div>;
                        <h3 className="font-semibold mb-2">Project Description</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>;
                        </div>;
                      </div>;
                      <div>;
                        <h3 className="font-semibold mb-2">Payment Terms</h3>;
                        <Badge variant="outline" className="capitalize">;
                          {project.payment_terms} Payment;
                        </Badge>;
                      </div>;
                      <div>;
                        <h3 className="font-semibold mb-2">Job Details</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="timeline">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Timeline</CardTitle>;
                    <CardDescription>;
                      Key dates and milestones;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-4">;
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />;
                        <div>;
                          <h3 className="font-semibold">Start Date</h3>;
                          <p>{format(new Date(project.start_date), "PPP")}</p>;
                        </div>;
                      </div>;
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;
                        <Clock className="h-5 w-5 text-primary mt-0.5" />;
                        <div>;
                          <h3 className="font-semibold">Project Status</h3>;
                          <div className="mt-1">;
                            {getStatusBadge(project.status)}
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="documents">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    {project.agreement_url ? (;
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">;
                        <div className="flex items-center gap-3">;
                          <FileText className="h-5 w-5 text-primary" />;
                          <div>;
                            <h3 className="font-semibold">Project Agreement</h3>;
                            <p className="text-sm text-muted-foreground">;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;
                        <Button variant="outline" size="sm" asChild>;
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;
                            View;
                          </a>;
                        </Button>;
                      </div>;
                    ) : (;
                      <div className="text-center py-8">;
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />;
                        <h3 className="font-semibold">No Documents Yet</h3>;
                        <p className="text-sm text-muted-foreground">;
                          No documents have been uploaded to this project.;
                        </p>;
                      </div>;
                    )}
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="notes">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Notes</CardTitle>;
                    <CardDescription>;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-4">;
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">;
                        {notes.length > 0 ? (;
                          notes.map((note) => (;
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">;
                              <div className="flex items-center gap-2 mb-2">;
                                <Avatar className="h-6 w-6">;
                                  {note.created_by_profile?.avatar_url ? (;
                                    <img;
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                      loading="lazy";
                                    />;
                                  ) : (;
                                    <User className="h-4 w-4" />;
                                  )}
                                </Avatar>;
                                <span className="font-medium text-sm">;
                                  {note.created_by_profile?.display_name || "User"}
                                </span>;
                                <span className="text-xs text-muted-foreground">;
                                  {format(new Date(note.created_at), "PPp")}
                                </span>;
                              </div>;
                              <p className="text-sm whitespace-pre-wrap">{note.content}</p>;
                            </div>;
                          ));
                        ) : (;
                          <div className="text-center py-8">;
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />;
                            <p className="text-muted-foreground">;
                              No notes yet. Add the first note to this project.;
                            </p>;
                          </div>;
                        )}
                      </div>;
                      {isOfferAccepted && (;
                        <div>;
                          <Textarea;
                            placeholder="Add a note or update to the project...";
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="min-h-[100px] mb-2";
                          />;
                          <Button;
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          >;
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>;
                        </div>;
                      )}
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="reviews">;
                <ProjectReviewSection project={project} />;
              </TabsContent>;
            </Tabs>;
          </div>;
          <div className="order-1 lg:order-2 lg:col-span-1">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Participants</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-6">;
                  <div className="flex items-start gap-4">;
                    <Avatar className="h-10 w-10">;
                      {project.talent_profile?.profile_picture_url ? (;
                        <img;
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading="lazy";
                        />;
                      ) : (;
                        <User className="h-6 w-6" />;
                      )}
                    </Avatar>;
                    <div>;
                      <h3 className="font-semibold">;
                        {project.talent_profile?.full_name || "Talent"}
                      </h3>;
                      <p className="text-sm text-muted-foreground">;
                        {project.talent_profile?.professional_title || "Professional"}
                      </p>;
                      {isClient && (;
                        <Button;
                          variant="outline";
                          size="sm";
                          className="mt-2";
                          onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                        >;
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}
                    </div>;
                  </div>;
                  <div className="flex items-start gap-4">;
                    <Avatar className="h-10 w-10">;
                      {project.talent_profile?.profile_picture_url ? (;
                        <img;
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading="lazy";
                        />;
                      ) : (;
                        <User className="h-6 w-6" />;
                      )}
                    </Avatar>;
                    <div>;
                      <h3 className="font-semibold">;
                        {project.talent_profile?.full_name || "Client"}
                      </h3>;
                      <p className="text-sm text-muted-foreground">Project Owner</p>;
                      {isTalent && (;
                        <Button;
                          variant="outline";
                          size="sm";
                          className="mt-2";
                          onClick={() => router.push(`/messages?clientId=${project.client_id}`)}
                        >;
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
            {/* Project Status Card */}
            <Card className="mt-6">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


              <CardHeader>
<<<<<<< HEAD
                <CardTitle>Project Status</CardTitle>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm font-medium'>Current Status:</span>
                    <div>{getStatusBadge(project.status)}</div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD


=======
                  <div className='flex justify-between items-center'>
                    <span className='text-sm font-medium'>Creation Date:</span>
                    <span className='text-sm'>
                      {format(new Date(project.created_at), 'PPP')}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm font-medium'>Start Date:</span>
                    <span className='text-sm'>
                      {format(new Date(project.start_date), 'PPP')}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Creation Date:</span>
                    <span className="text-sm">
                      {format(new Date(project.created_at), "PPP")}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Start Date:</span>
                    <span className="text-sm">
                      {format(new Date(project.start_date), "PPP")}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


                    </span>
                  </div>
                </div>
              </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          onClick={() =>;
                            router && router.push(;
                              `/messages?clientId=${project && project.client_id}`;
                            );
                          }                        >;
                          <MessageSquare className='mr-1 h-3 w-3' /> Message;
                        </Button>;
                      )}
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;

            {/* Project Status Card */}
            <Card className='mt-6'>;
              <CardHeader>;
                <CardTitle>Project Status</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='space-y-2'>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-sm font-medium'>Current Status:</span>;
                    <div>{getStatusBadge(project && project.status)}</div>;
                  </div>;

                  <div className='flex justify-between items-center'>;
                    <span className='text-sm font-medium'>Creation Date:</span>;
                    <span className='text-sm'>;
                      {format(new Date(project && project.created_at), 'PPP')}
                    </span>;
                  </div>;

                  <div className='flex justify-between items-center'>;
                    <span className='text-sm font-medium'>Start Date:</span>;
                    <span className='text-sm'>;
                      {format(new Date(project && project.start_date), 'PPP')}
                          loading='lazy'                        />) : (
                        <User className='h - 6 w - 6' />)}
                    </Avatar>;
                    <div>;
                      <h3 className='font - semibold'>;
                        {project.talent_profile?.full_name || 'Client'}
                      </h3>;
                      <p className='text - sm text - muted - foreground'>;
                        Project Owner;
                      </p>;
                      {is_talent && (
                        <Button;
                          variant='outline';
                          size='sm';
                          className='mt - 2';
                          on_click={() =>;
                            router.push (
                              `/messages?client_id=${project.client_id}`);
                          }                        >;
                          <MessageSquare className='mr - 1 h - 3 w - 3' /> Message;
                        </Button>)}
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
            {/* Project Status Card */}
            <Card className='mt - 6'>;
              <CardHeader>;
                <CardTitle > Project Status</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='space - y-2'>;
                  <div className='flex justify - between items - center'>;
                    <span className='text - sm font - medium'>Current Status:</span>;
                    <div>{getStatusBadge (project.status)}</div>;
                  </div>;
                  <div className='flex justify - between items - center'>;
                    <span className='text - sm font - medium'>Creation Date:</span>;
                    <span className='text - sm'>;
                      {format (new Date (project.created_at), 'PPP')}
                    </span>;
                  </div>;
                  <div className='flex justify - between items - center'>;
                    <span className='text - sm font - medium'>Start Date:</span>;
                    <span className='text - sm'>;
                      {format (new Date (project.start_date), 'PPP')}

                    </span>;
                  </div>;
                </div>;
              </CardContent>;


              


              {/* Conditional Footer Based on Status */}
<<<<<<< HEAD
              {project.status === "changes_requested" && isClient && (
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-amber-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.
                  </p>
<<<<<<< HEAD
=======
              
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {/* Conditional Footer Based on Status */}
              {project.status === "changes_requested" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-amber-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.
                  </p>
<<<<<<< HEAD
                  </Button>
                </CardFooter>
              )}
              {project.status === 'offer_sent' && isClient && (
                <CardFooter className='flex-col items-start gap-2 border-t pt-6'>
                  <p className='text-sm text-muted-foreground'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


                  <Button 
                    variant="outline"
                    onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                    className="w-full"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes
<<<<<<< HEAD
<<<<<<< HEAD


=======
                  </Button>
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </Button>
                </CardFooter>
              )}
              
              {project.status === "offer_sent" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-muted-foreground">
                    Waiting for the talent to accept your offer.
                  </p>
                </CardFooter>
              )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
              {project.status === 'completed' && (
                <CardFooter className='flex-col items-start gap-2 border-t pt-6'>
                  <p className='text-sm text-green-600 flex items-center gap-1'>
                    <CheckCircle2 className='h-4 w-4' /> This project has been
                    completed.
                  </p>
                </CardFooter>
              )}
              {project.status === 'canceled' && (
                <CardFooter className='flex-col items-start gap-2 border-t pt-6'>
                  <p className='text-sm text-red-600 flex items-center gap-1'>
                    <XCircle className='h-4 w-4' /> This project has been
                    canceled.
                  </p>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </main>
    </>
                  </p>
                </CardFooter>
              )}
  status
}</Badge>
};'"
<p>Loading project details...</p> </div> </div> </div> <Card> <CardContent className="flex flex-col items-center justify-center py-10" > <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" /> <h2 className="text-xl font-bold mb-2" >Project Not Found</h2> <p className="text-muted-foreground mb-4" > The project you're looking for doesn't exist or you don't have access to it. </p> <Button onClick={"
  () => router.push ("/dashboard")
}> Return to Dashboard </Button> </CardContent> </Card> </div>) "
}//Check if user is either the client or the talent container mx-auto px-4 py-8"> <div className=" mb-6"> <div className=" flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2"> <div> </span> </div> </div> <AlertDialog> <AlertDialogTrigger asChild> <Button variant=" default"> <CheckCircle2 className=" mr-2 h-4 w-4"/> Accept Offer </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle> <AlertDialogDescription> By accepting this offer, you agree to the project terms and timeline. This will initiate the contract and start the project. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction onClick={"
  () => handleStatusChange (" offer accepted")
}> Accept Offer </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Button> </>) "
}<AlertDialogTrigger asChild> <Button variant=" default"> <CheckCircle2 className=" mr-2 h-4 w-4"/> Mark as Completed </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle> <AlertDialogDescription> This will finalize the project and mark it as complete. Make sure all deliverables have been provided and approved. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction onClick={"
  () => handleStatusChange (" completed")
}> Mark as Completed </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>)
}<Link href= {
                    Waiting for the talent to accept your offer.
                  </p>
                </CardFooter>
              )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                    className='w-full'                  >;
                    <MessageSquare className='mr-2 h-4 w-4' /> Discuss Changes;
                  </Button>;
                </CardFooter>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              )}

              {project && project.status === 'offer_sent' && isClient && (;
                <CardFooter className='flex-col items-start gap-2 border-t pt-6'>;
                  <p className='text-sm text-muted-foreground'>;
                    Waiting for the talent to accept your offer.;
                  </p>;
                </CardFooter>;
              )}

              {project && project.status === 'completed' && (;
                <CardFooter className='flex-col items-start gap-2 border-t pt-6'>;
                  <p className='text-sm text-green-600 flex items-center gap-1'>;
                    <CheckCircle2 className='h-4 w-4' /> This project has been;
                    completed.;
                  </p>;
                </CardFooter>;
              )}

              {project && project.status === 'canceled' && (;
                <CardFooter className='flex-col items-start gap-2 border-t pt-6'>;
                  <p className='text-sm text-red-600 flex items-center gap-1'>;
                    <XCircle className='h-4 w-4' /> This project has been;
                    canceled.;
                  </p>;
                </CardFooter>;
              )}
<<<<<<< HEAD
              {/* Conditional Footer Based on Status */}
              {project.status === 'changes_requested' && is_client && (
                <CardFooter className='flex - col items - start gap - 2 border - t pt - 6'>;
                  <p className='text - sm text - amber - 600 flex items - center gap - 1'>;
                    <AlertCircle className='h - 4 w - 4' /> The talent has requested;
                    changes to this offer.;
                  </p>;
                  <Button;
                    variant='outline';
                    on_click={() =>;
                      router.push (`/messages?talent_id=${project.talent_id}`);
                    }
                    className='w - full'                  >;
                    <MessageSquare className='mr - 2 h - 4 w - 4' /> Discuss Changes;
                  </Button>;
                </CardFooter>)}
              {project.status === 'offer_sent' && is_client && (
                <CardFooter className='flex - col items - start gap - 2 border - t pt - 6'>;
                  <p className='text - sm text - muted - foreground'>;
                    Waiting for the talent to accept your offer.;
                  </p>;
                </CardFooter>)}
              {project.status === 'completed' && (
                <CardFooter className='flex - col items - start gap - 2 border - t pt - 6'>;
                  <p className='text - sm text - green - 600 flex items - center gap - 1'>;
                    <CheckCircle2 className='h - 4 w - 4' /> This project has been;
                    completed.;
                  </p>;
                </CardFooter>)}
              {project.status === 'canceled' && (
                <CardFooter className='flex - col items - start gap - 2 border - t pt - 6'>;
                  <p className='text - sm text - red - 600 flex items - center gap - 1'>;
                    <XCircle className='h - 4 w - 4' /> This project has been;
                    canceled.;
                  </p>;
                </CardFooter>)}

            </Card>;
          </div>;
        </div>;
      </main>;

  )
    </>);

<<<<<<< HEAD
=======
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
setIsSubmittingNote (true);
try {
<<<<<<< HEAD

  // Check condition
if (throw error) {
  $2
}
//Refresh notes;
}catch (err: any) {';
  logErrorToProduction ('Error adding note:', {
  data: err;
});
toast ({
}finally {
  setIsSubmittingNote (false);
}
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
  ...project;
status: new_status;
});
//If offer was accepted, show a special toast // Check condition
if ( {) {
  $2
}

  toast ({
}";
case "offer accepted": return <Badge className="bg - green - 100 text - green - 800">Offer Accepted</Badge>;";
case "changes requested": return <Badge variant="secondary">Changes Requested</Badge>;";
case "in progress": return <Badge className="bg - blue - 100 text - blue - 800">In Progress</Badge>;";
case "completed": return <Badge variant="default">Completed</Badge>;";
case "canceled": return <Badge variant="destructive">Canceled</Badge>;";
default: return <Badge variant="outline"> {

};
setIsSubmittingNote (true);
try {;
  if (error) throw error;
//Refresh notes ;
}catch (err: any) {';
  logErrorToProduction ('Error adding note:', {;
  data: err ;
});
toast ({;

}finally {;
  setIsSubmittingNote (false) ;

};
const handleStatusChange = async (newStatus: ProjectStatus) => {;
  if (!project) return;
const success = await updateProjectStatus (project && project.id, newStatus);
if (success) {;
  setProject ({;
  ...project;
status: newStatus ;
});
//If offer was accepted, show a special toast if (newStatus === "offer accepted") {;
  toast ({;


};";
case "offer accepted": return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>;";
case "changes requested": return <Badge variant="secondary">Changes Requested</Badge>;";
case "in progress": return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;";
case "completed": return <Badge variant="default">Completed</Badge>;";
case "canceled": return <Badge variant="destructive">Canceled</Badge>;";
default: return <Badge variant="outline"> {;
  status ;
}</Badge> ;

};'";
<p>Loading project details...</p> </div> </div> </div> <Card> <CardContent className="flex flex-col items-center justify-center py-10" > <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" /> <h2 className="text-xl font-bold mb-2" >Project Not Found</h2> <p className="text-muted-foreground mb-4" > The project you're looking for doesn't exist or you don't have access to it. </p> <ButtononClick={"
  () => router && router.push ("/dashboard") ;
}> Return to Dashboard </Button> </CardContent> </Card> </div>) ";
}//Check if user is either the client or the talent container mx-auto px-4 py-8"> <div className=" mb-6"> <div className=" flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2"> <div> </span> </div> </div> <AlertDialog> <AlertDialogTrigger asChild> <Button variant=" default"> <CheckCircle2 className=" mr-2 h-4 w-4"/> Accept Offer </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle> <AlertDialogDescription> By accepting this offer, you agree to the project terms and timeline. This will initiate the contract and start the project. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogActiononClick={"
  () => handleStatusChange (" offer accepted") ;
}> Accept Offer </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Button> </>) ";
}<AlertDialogTrigger asChild> <Button variant=" default"> <CheckCircle2 className=" mr-2 h-4 w-4"/> Mark as Completed </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle> <AlertDialogDescription> This will finalize the project and mark it as complete. Make sure all deliverables have been provided and approved. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogActiononClick={"
  () => handleStatusChange (" completed") ;
}> Mark as Completed </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>) ;
}<Linkhref= {
  `/project/[id]/milestones` "
}> <Layers className=" mr-2 h-4 w-4"/> Milestones </Link> </Button>) ;
}<Linkhref= {
  `/project/[id]/room` "
}> <Video className=" mr-2 h-4 w-4"/> Project Room </Link> </Button>) ";
}> <MessageSquare className=" mr-2 h-4 w-4"/> Message </Button>) ;
}</div> </div> </div>) ";
}</TabsList> <TabsContent value=" details"> <Card> <CardHeader> <CardTitle>Project Scope</CardTitle> <CardDescription> Project details and expectations </CardDescription> </CardHeader> <CardContent> <div className=" space-y-4"> <div> </div> </div> <div> </Badge> </div> <div> </div> </div> </div> </CardContent> </Card> </TabsContent> <TabsContent value=" timeline"> <Card> <CardHeader> <CardTitle>Project Timeline</CardTitle> <CardDescription> Key dates and milestones </CardDescription> </CardHeader> <CardContent> <div className=" space-y-4"> <div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md"> <Calendar className=" h-5 w-5 text-primary mt-0 && 0.5"/> <div> </div> </div> <div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md"> <Clock className=" h-5 w-5 text-primary mt-0 && 0.5"/> <div> </div> </div> </div> </div> </CardContent> </Card> </TabsContent> <TabsContent value=" documents"> <Card> <CardHeader> <CardTitle>Project Documents</CardTitle> <CardDescription> Agreements and relevant files </CardDescription> </CardHeader> <CardContent> <div> <h3 className=" font-semibold">Project Agreement</h3> <p className=" text-sm text-muted-foreground"> Uploaded when project was created </p> </div> </div> <Button variant=" outline"size=" sm"asChild> <ahref= {
  project && project.agreement url "
}target=" blank"rel=" noopener noreferrer"> View </Link> </Button> </div>) : (<div className=" text-center py-8"> <FileText className=" h-10 w-10 text-muted-foreground mx-auto mb-2"/> <h3 className=" font-semibold">No Documents Yet</h3> <p className=" text-sm text-muted-foreground"> No documents have been uploaded to this project. </p> </div>) ";
}</CardContent> </Card> </TabsContent> <TabsContent value=" notes"> <Card> <CardHeader> <CardTitle>Project Notes</CardTitle> <CardDescription> Shared notes and updates </CardDescription> </CardHeader> <CardContent> />) : (<User className=" h-4 w-4"/>) ";
}</Avatar> </div>) ) ) : (<div className=" text-center py-8"> <MessageSquare className=" h-8 w-8 text-muted-foreground mx-auto mb-2"/> <p className=" text-muted-foreground"> No notes yet. Add the first note to this project. </p> </div>) ;
}</div> {";
  isOfferAccepted && (<div> <Textareaplaceholder=" Add a note or update to the project..."value= {
  newNote 
}/> <ButtononClick={
  handleSubmitNote 
}disabled= {
  !newNote && newNote.trim () || isSubmittingNote 
}> </Button> </div>) ";
}</div> </CardContent> </Card> </TabsContent> </TabsContent> </Tabs> </div> <div className=" order-1 lg:order-2 lg:col-span-1"> <Card> <CardHeader> <CardTitle>Project Participants</CardTitle> </CardHeader> <CardContent> />) : (<User className=" h-6 w-6"/>) ;
}</Avatar> <div> onClick={;
  () => router && router.push (`/messages?talentId=$ {;
  project && project.talent id ;
}`) ";
}> <MessageSquare className=" mr-1 h-3 w-3"/> Message </Button>) ";
}</div> </div> />) : (<User className=" h-6 w-6"/>) ;
}</Avatar> <div> onClick={;
  () => router && router.push (`/messages?clientId=$ {;
  project && project.client id ;
}`) ";
}> <MessageSquare className=" mr-1 h-3 w-3"/> Message </Button>) ";
}</div> </div> </div> </CardContent> </Card> <CardHeader> <CardTitle>Project Status</CardTitle> </CardHeader> <CardContent> </span> </div> </div> </CardContent> </p> <Buttonvariant=" outline"onClick={
  () => router && router.push (`/messages?talentId=$ {;
  project && project.talent id ;
}`) ";
}className=" w-full"> <MessageSquare className=" mr-2 h-4 w-4" /> Discuss Changes </Button> </CardFooter>) ;
}Waiting for the talent to accept your offer. </p> </CardFooter>) ;
}</p> </CardFooter>) ;
}</p> </CardFooter>) ;
}</Card> </div> </div> </main> </>) ;
}export default function ProjectDetails() {;
  return (<ProtectedRoute> <ProjectDetailsContent /> </ProtectedRoute> '"export default function ProjectDetails() {;
  return (
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>;
import React from "react";
import Head from "next/head";
import Link from "next/link";
const ProjectDetails = () => {;
  return (
    <>;
      <Head>;
        <title>Project Details - Zion Tech Group</title>;
        <meta name="description" content="Professional Project Details services"  />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;
          <div className="text-center">;
            <h1 className="text-4xl font-bold text-gray-900 mb-8">;
              Project Details;
            </h1>;
            <p className="text-xl text-gray-600 mb-12">;
              Professional Project Details services and solutions;
            </p>;
            <div className="grid md:grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
            </div>;
    </>;

  );
=======
=======
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
setIsSubmittingNote (true)
try {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (error) throw error
//Refresh notes
}catch (err: any) {'
  logErrorToProduction ('Error adding note:', {
  data: err
})
toast ({
}finally {
  setIsSubmittingNote (false)
}
  if (!project) return;
const success = await updateProjectStatus (project.id, newStatus)
if (success) {
  setProject ({
  ...project
status: newStatus
})
//If offer was accepted, show a special toast if (newStatus === "offer accepted") {;
  toast ({};"
case "offer accepted": return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>;"
case "changes requested": return <Badge variant="secondary">Changes Requested</Badge>;"
case "in progress": return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;"
case "completed": return <Badge variant="default">Completed</Badge>;"
case "canceled": return <Badge variant="destructive">Canceled</Badge>;"
default: return <Badge variant="outline"> {
}</Badge>
};'"
<p>Loading project details...</p> </div> </div> </div> <Card> <CardContent className="flex flex-col items-center justify-center py-10" > <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" /> <h2 className="text-xl font-bold mb-2" >Project Not Found</h2> <p className="text-muted-foreground mb-4" > The project you're looking for doesn't exist or you don't have access to it. </p> <Button onClick={"
  () => router.push ("/dashboard")
}> Return to Dashboard </Button> </CardContent> </Card> </div>) "
}//Check if user is either the client or the talent container mx-auto px-4 py-8"> <div className=" mb-6"> <div className=" flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2"> <div> </span> </div> </div> <AlertDialog> <AlertDialogTrigger asChild> <Button variant=" default"> <CheckCircle2 className=" mr-2 h-4 w-4"/> Accept Offer </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle> <AlertDialogDescription> By accepting this offer, you agree to the project terms and timeline. This will initiate the contract and start the project. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction onClick={"
  () => handleStatusChange (" offer accepted")
}> Accept Offer </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Button> </>) "
}<AlertDialogTrigger asChild> <Button variant=" default"> <CheckCircle2 className=" mr-2 h-4 w-4"/> Mark as Completed </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle> <AlertDialogDescription> This will finalize the project and mark it as complete. Make sure all deliverables have been provided and approved. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction onClick={"
  () => handleStatusChange (" completed")
}> Mark as Completed </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>)
}<Link href= {
  `/project/[id]/milestones` "
}> <Layers className=" mr-2 h-4 w-4"/> Milestones </Link> </Button>)
}<Link href= {
  `/project/[id]/room` "
}> <Video className=" mr-2 h-4 w-4"/> Project Room </Link> </Button>) "
}> <MessageSquare className=" mr-2 h-4 w-4"/> Message </Button>)
}</div> </div> </div>) "
}</TabsList> <TabsContent value=" details"> <Card> <CardHeader> <CardTitle>Project Scope</CardTitle> <CardDescription> Project details and expectations </CardDescription> </CardHeader> <CardContent> <div className=" space-y-4"> <div> </div> </div> <div> </Badge> </div> <div> </div> </div> </div> </CardContent> </Card> </TabsContent> <TabsContent value=" timeline"> <Card> <CardHeader> <CardTitle>Project Timeline</CardTitle> <CardDescription> Key dates and milestones </CardDescription> </CardHeader> <CardContent> <div className=" space-y-4"> <div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md"> <Calendar className=" h-5 w-5 text-primary mt-0.5"/> <div> </div> </div> <div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md"> <Clock className=" h-5 w-5 text-primary mt-0.5"/> <div> </div> </div> </div> </div> </CardContent> </Card> </TabsContent> <TabsContent value=" documents"> <Card> <CardHeader> <CardTitle>Project Documents</CardTitle> <CardDescription> Agreements and relevant files </CardDescription> </CardHeader> <CardContent> <div> <h3 className=" font-semibold">Project Agreement</h3> <p className=" text-sm text-muted-foreground"> Uploaded when project was created </p> </div> </div> <Button variant=" outline"size=" sm"asChild> <a href= {
  project.agreement url "
}target=" blank"rel=" noopener noreferrer"> View </Link> </Button> </div>) : (<div className=" text-center py-8"> <FileText className=" h-10 w-10 text-muted-foreground mx-auto mb-2"/> <h3 className=" font-semibold">No Documents Yet</h3> <p className=" text-sm text-muted-foreground"> No documents have been uploaded to this project. </p> </div>) "
}</CardContent> </Card> </TabsContent> <TabsContent value=" notes"> <Card> <CardHeader> <CardTitle>Project Notes</CardTitle> <CardDescription> Shared notes and updates </CardDescription> </CardHeader> <CardContent> />) : (<User className=" h-4 w-4"/>) "
}</Avatar> </div>) ) ) : (<div className=" text-center py-8"> <MessageSquare className=" h-8 w-8 text-muted-foreground mx-auto mb-2"/> <p className=" text-muted-foreground"> No notes yet. Add the first note to this project. </p> </div>)
}</div> {"
  isOfferAccepted && (<div> <Textarea placeholder=" Add a note or update to the project..."value= {
  newNote
}/> <Button onClick={
  handleSubmitNote
}disabled= {
  !newNote.trim () |isSubmittingNote
}> </Button> </div>) "
}</div> </CardContent> </Card> </TabsContent> </TabsContent> </Tabs> </div> <div className=" order-1 lg:order-2 lg:col-span-1"> <Card> <CardHeader> <CardTitle>Project Participants</CardTitle> </CardHeader> <CardContent> />) : (<User className=" h-6 w-6"/>)
}</Avatar> <div> onClick={
  () => router.push (`/messages?talentId=$ {
  project.talent id
}`) "
}> <MessageSquare className=" mr-1 h-3 w-3"/> Message </Button>) "
}</div> </div> />) : (<User className=" h-6 w-6"/>)
}</Avatar> <div> onClick={
  () => router.push (`/messages?clientId=$ {
  project.client id
}`) "
}> <MessageSquare className=" mr-1 h-3 w-3"/> Message </Button>) "
}</div> </div> </div> </CardContent> </Card> <CardHeader> <CardTitle>Project Status</CardTitle> </CardHeader> <CardContent> </span> </div> </div> </CardContent> </p> <Button variant=" outline"onClick={
  () => router.push (`/messages?talentId=$ {
  project.talent id
}`) "
}className=" w-full"> <MessageSquare className=" mr-2 h-4 w-4" /> Discuss Changes </Button> </CardFooter>)
}Waiting for the talent to accept your offer. </p> </CardFooter>)
}</p> </CardFooter>)
}</p> </CardFooter>)
}</Card> </div> </div> </main> </>)
}export default function ProjectDetails () {
  return (<ProtectedRoute> <ProjectDetailsContent /> </ProtectedRoute> '"export default function ProjectDetails() {
  return (
    <ProtectedRoute>
      <ProjectDetailsContent />
    </ProtectedRoute>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react"
import Head from "next/head"
import Link from "next/link"
const ProjectDetails = () => {
  return (
    <>
      <Head>
        <title>Project Details - Zion Tech Group</title>
        <meta name="description" content="Professional Project Details services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Project Details
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Project Details services and solutions
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li> Professional Solutions</li>
                  <li> Expert Implementation</li>
                  <li> 24/7 Support</li>
                  <li> Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li> Industry Expertise</li>
                  <li> Proven Results</li>
                  <li> Scalable Solutions</li>
                  <li> Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
            </div>
    </>
  )
            </div>
    </>
  )
}
              
              {project.status === "completed" && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> This project has been completed.
                  </p>
                </CardFooter>
              )}
              
              {project.status === "canceled" && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <XCircle className="h-4 w-4" /> This project has been canceled.
                  </p>
                </CardFooter>
              )}
            </div>;
    </>;
  );
};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </Card>;
          </div>;
        </div>;
      </main>;
    </>;
  );
}
;
export default function ProjectDetails() {;
  return (;
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>;
  );
}
;
<<<<<<< HEAD

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
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>;
import React from './react';
import Head from './next / head';
import Link from './next / link';
const ProjectDetails = () =>: any {
  return (
    <>;
      <Head>;
        <title > Project Details - Zion Tech Group</title>;
        <meta name="description" content="Professional Project Details services"  />;
      </Head>;
      <div className="min - h-screen bg - gray - 50">;
        <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 12">;
          <div className="text - center">;
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 8">;
              Project Details;
            </h1>;
            <p className="text - xl text - gray - 600 mb - 12">;
              Professional Project Details services and solutions;
            </p>;
            <div className="grid md:grid - cols - 2 gap - 8 mb - 12">;
              <div className="bg - white p - 6 rounded - lg shadow - md">;
                <h2 className="text - 2xl font - semibold mb - 4">Our Services</h2>;
                <ul className="text - gray - 600 space - y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24 / 7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg - white p - 6 rounded - lg shadow - md">;
                <h2 className="text - 2xl font - semibold mb - 4">Why Choose Us</h2>;
                <ul className="text - gray - 600 space - y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <Link href="/pricing/" className="bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg - gray - 600 text - white px - 6 py - 3 rounded - lg hover:bg - gray - 700 transition - colors">;
                Contact Us;
              </Link>;
            </div>;
    </>);
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
