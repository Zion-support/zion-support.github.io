<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState, useEffect } from "react",
import Link from 'next/link';
import { useRouter  } from 'next/router';
import { format } from "date-fns",
import { useAuth } from "@/hooks/useAuth",
import { useProjects } from "@/hooks/useProjects",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { Project, ProjectStatus } from "@/types/projects",
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';
import {
>>>>>>>   AlertDialog,
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  AlertDialog,
>>>>>>>   AlertDialogAction,
=======
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';
import {
=======
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',
import {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  AlertDialog,
  AlertDialogAction,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
<<<<<<< HEAD
<<<<<<< HEAD

=======
  AlertDialogTrigger} from "@/components/ui/alert-dialog",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection",
import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from 'lucide-react'
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
=======
<<<<<<< HEAD
  AlertDialogTrigger,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
function ProjectDetailsContent() {
<<<<<<< HEAD

=======
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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
  AlertDialogTrigger} from "@/components/ui/alert-dialog",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection",
import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from 'lucide-react'

function ProjectDetailsContent() {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

  // Load project data
  useEffect(() => {
    async function loadProject() {

=======
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Load project data
  useEffect(() => {
    async function loadProject() {
<<<<<<< HEAD
<<<<<<< HEAD
      if (!projectId) return
=======
      if (!projectId) return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setIsLoading(true)
      const projectData = await getProjectById(projectId)
      if (projectData) {
        setProject(projectData)
<<<<<<< HEAD

=======
  
>>>>>>>   // Load project data
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>       setIsLoading(true)
      const projectData = await getProjectById(projectId)
      if (projectData) {
        setProject(projectData)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (!projectId) return,
      
      setIsLoading(true),
      const projectData = await getProjectById(projectId),
      
      if (projectData) {
        setProject(projectData),
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        // Now fetch notes
        fetchProjectNotes(projectId)
      } else {
        toast({
<<<<<<< HEAD

          title: "Project not found",
=======
        
>>>>>>>         // Now fetch notes
        fetchProjectNotes(projectId)
      } else {
        toast({
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          title: 'Project not found'
          description: 'The requested project could not be found.'
          variant: 'destructive'
        })
        router.push('/dashboard')
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
        // Now fetch notes
        fetchProjectNotes(projectId)
      } else {
        toast({

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          title: 'Project not found',
          description: 'The requested project could not be found.',
          variant: 'destructive',
        })
        router.push('/dashboard')
      }

      setIsLoading(false)
    }

    loadProject()
  }, [projectId])
  const fetchProjectNotes = async (projectId: string) => {    try {
<<<<<<< HEAD

>>>>>>>           title: "Project not found",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          title: "Project not found",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          title: "Project not found",;
          description: "The requested project could not be found.",;
          variant: "destructive"}),;
        router.push("/dashboard");
<<<<<<< HEAD
<<<<<<< HEAD

      }
      setIsLoading(false)
    }

      const { data, error } = await supabase
=======
>>>>>>>       }
      setIsLoading(false)
    }
    loadProject()
  }, [projectId])
  const fetchProjectNotes = async (projectId: string) => {    try {

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      }
      setIsLoading(false)
    }
<<<<<<< HEAD
    loadProject()
  }, [projectId])
  const fetchProjectNotes = async (projectId: string) => {    try {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>       const { data, error } = await supabase
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    
    loadProject()
  }, [projectId]),
  
  const fetchProjectNotes = async (projectId: string) => {
    try {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      const { data, error } = await supabase
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        .from("project_notes")
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
    
>>>>>>>     try {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    try {
>>>>>>>       const { data, error } = await supabase
        .from('project_notes')
        .insert({
<<<<<<< HEAD

=======
          project_id: project.id
          user_id: user.id
          content: newNote
          content: newNote,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    try {
      const { data, error } = await supabase
        .from("project_notes")
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD
          project_id: project.id
          user_id: user.id
          content: newNote
=======
          project_id: project.id,
          user_id: user.id,
<<<<<<< HEAD
          content: newNote,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
      logErrorToProduction ('Error fetching project notes:', { data: err });
      toast ({
        title: 'Failed to load notes',
        description:;
          err.message || 'An error occurred while loading project notes.',
        variant: 'destructive',
      });
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
<<<<<<< HEAD

=======
          project_id: project.id,
          user_id: user.id,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
      logErrorToProduction ('Error adding note:', { data: err });
      toast ({
        title: 'Failed to add note',
        description: err.message || 'An error occurred while adding note.',
        variant: 'destructive',
      });

=======
      logErrorToProduction('Error adding note:', { data: err })
      toast({
        title: 'Failed to add note'
        description: err.message |'An error occurred while adding note.'
        variant: 'destructive'
      })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    } finally {
      setIsSubmittingNote(false)
    }
<<<<<<< HEAD
  },
  
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return,
    
    const success = await updateProjectStatus(project.id, newStatus),
    
    if (success) {
      setProject({
        ...project,
        status: newStatus}),
<<<<<<< HEAD

      // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {
        toast({

=======
      
>>>>>>>       // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {
=======
  }
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return;
    const success = await updateProjectStatus(project.id, newStatus)
    if (success) {
      setProject({
        ...project
        status: newStatus
      })
=======
<<<<<<< HEAD
          project_id: project.id,
          user_id: user.id,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    if (!project) return,
    
    const success = await updateProjectStatus(project.id, newStatus),
    
    if (success) {
      setProject({
        ...project,
        status: newStatus}),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        toast({
<<<<<<< HEAD
<<<<<<< HEAD
          title: 'Offer Accepted! 🎉'
          description: 'The project is now in progress. Congratulations!'
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        })
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      }
    }

  }

=======
=======
          title: 'Offer Accepted! 🎉',
          description: 'The project is now in progress. Congratulations!',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        })
      }
    }
  }
  const getStatusBadge = (status: ProjectStatus) => {    switch (status) {
      case 'offer_sent':
        return <Badge variant='outline'>Offer Sent</Badge>
      case 'offer_accepted':
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
  }

=======
  
>>>>>>>   if (isLoading) {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     return (
      <div className='container mx - auto py - 8'>;
        <div className='flex justify - center items - center h - 64'>;
          <div className='text - center'>;
            <div className='animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full mx - auto mb - 4'></div>;
            <p > Loading project details...</p>;
          </div>;
        </div>;
      </div>);
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
<<<<<<< HEAD
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
            <Button onClick={() => router.push('/dashboard')}>              Return to Dashboard
>>>>>>>             </Button>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <Button onClick={() => router.push('/dashboard')}>              Return to Dashboard
=======
            <Button onClick={() => router.push("/dashboard")}>
              Return to Dashboard
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>
>>>>>>>           </CardContent>
        </Card>
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
  // Check if user is either the client or the talent
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <>
      <SEO
        title={`Project: ${project.job?.title |'Project Details'} | Zion AI Marketplace`}
        description='View and manage your project details and collaboration.'
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  
  // Check if user is either the client or the talent
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,
  
  if (!isClient && !isTalent) {
    router.push("/unauthorized"),
    return null
  }
  
  const isOfferPending = project.status === "offer_sent",
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status),
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <>
      <SEO 
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} 
        description="View and manage your project details and collaboration."
<<<<<<< HEAD
<<<<<<< HEAD

      />
=======
>>>>>>>       />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">
            <div>
<<<<<<< HEAD

                {getStatusBadge(project.status)}
                <span className="text-muted-foreground">
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>
              </div>
            </div>

            {/* Action Buttons Based on Role and Status */}
=======
              <h1 className='text-3xl font-bold'>
                {project.job?.title |'Project'}
              </h1>
              <div className='flex items-center gap-2 mt-1'>
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">
            <div>
<<<<<<< HEAD


              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>
              <div className="flex items-center gap-2 mt-1">


>>>>>>>                 {getStatusBadge(project.status)}
                <span className='text-muted-foreground'>
                  Started on {format(new Date(project.start_date), 'PPP')}
                </span>
              </div>
            </div>
>>>>>>>             {/* Action Buttons Based on Role and Status */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              <h1 className='text-3xl font-bold'>
                {project.job?.title |'Project'}
              </h1>
              <div className='flex items-center gap-2 mt-1'>
=======
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>
              <div className="flex items-center gap-2 mt-1">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                {getStatusBadge(project.status)}
                <span className="text-muted-foreground">
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>
              </div>
            </div>
<<<<<<< HEAD
=======
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {/* Action Buttons Based on Role and Status */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
                        <AlertDialogAction
                          onClick={() => handleStatusChange('offer_accepted')}
                        >                          Accept Offer
=======
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>
                          Accept Offer
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
<<<<<<< HEAD

                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes
=======
                        <AlertDialogAction
                          onClick={() => handleStatusChange('offer_accepted')}
                        >                          Accept Offer
>>>>>>>                         </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  </Button>
                </>
              )}
              {(isClient |isTalent) && project.status === 'in_progress' && (
                  
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes
>>>>>>>                   </Button>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                        <AlertDialogCancel > Cancel</AlertDialogCancel>;
                        <AlertDialogAction;
                          on_click={() => handleStatusChange ('offer_accepted')}

                        >                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;



                  
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                  </Button>
>>>>>>>                 </>
              )}
              
              {(isClient || isTalent) && project.status === "in_progress" && (
<<<<<<< HEAD

=======
>>>>>>>                 <AlertDialog>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <AlertDialog>
>>>>>>>                   <AlertDialogTrigger asChild>
                    <Button variant='default'>
                      <CheckCircle2 className='mr-2 h-4 w-4' /> Mark as
                      Completed
=======
<<<<<<< HEAD
                  <Button
                    variant='outline'
                    onClick={() => handleStatusChange('changes_requested')}
                  >
                    <MessageSquare className='mr-2 h-4 w-4' /> Request Changes
<<<<<<< HEAD
                  </Button>
                </>
              )}
              {(isClient |isTalent) && project.status === 'in_progress' && (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                  
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                  </Button>
                </>
              )}
              
              {(isClient || isTalent) && project.status === "in_progress" && (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="default">
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
                      <AlertDialogAction
                        onClick={() => handleStatusChange('completed')}
                      >                        Mark as Completed
>>>>>>>                       </AlertDialogAction>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                      <AlertDialogAction
                        onClick={() => handleStatusChange('completed')}
                      >                        Mark as Completed
=======
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>
                        Mark as Completed
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </AlertDialogAction>
>>>>>>>                     </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
              
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
              {(isClient |isTalent) &&
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                ['offer_sent', 'offer_accepted', 'in_progress'].includes(
                  project.status
                ) && (
              {(isClient || isTalent) && project && project.status === 'in_progress' && (;
                <AlertDialog>;
                  <AlertDialogTrigger asChild>;
                    <Button variant='default'>;
                      <CheckCircle2 className='mr-2 h-4 w-4' /> Mark as;
                      Completed;
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
                    <AlertDialogHeader>;
                      <AlertDialogTitle>;
                        Mark Project as Completed?;
                      </AlertDialogTitle>;
                      <AlertDialogDescription>;
                        This will finalize the project and mark it as complete.;
                        Make sure all deliverables have been provided and;
                        approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
                      <AlertDialogCancel>Cancel</AlertDialogCancel>;
                      <AlertDialogAction
                        onClick={() => handleStatusChange('completed')}
                      >                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;
              )}

              {isActiveProject && (;
                <Button variant='default' asChild>;
                  <Link href={`/project/[id]/milestones`}>;
                    <Layers className='mr-2 h-4 w-4' /> Milestones;
                  </Link>;
                </Button>;
              )}

              {isActiveProject && (;
                <Button variant='outline' asChild>;
                  <Link href={`/project/[id]/room`}>;
                    <Video className='mr-2 h-4 w-4' /> Project Room;
                  </Link>;
                </Button>;
              )}

              {(isClient || isTalent) &&;
                ['offer_sent', 'offer_accepted', 'in_progress'].includes(;
                  project && project.status;
                ) && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
              {(isClient |isTalent) &&
=======

              {(isClient || isTalent) &&
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                ['offer_sent', 'offer_accepted', 'in_progress'].includes(
                  project.status
                ) && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Button
                    variant='outline'
                    onClick={() =>
                      router.push(
                        `/messages?talentId=${project.talent_id}&clientId=${project.client_id}`
                      )
                    }
<<<<<<< HEAD

                  >;
                    <MessageSquare className='mr-2 h-4 w-4' /> Message;
                  </Button>;
                )}            </div>;
          </div>;
        </div>;

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>;
          <div className='order-2 lg:order-1 lg:col-span-2'>;

            <Tabs
              defaultValue='details'
              value={activeTab}
              onValueChange={setActiveTab}>;
              <TabsList className='mb-6'>;
                  <Button;
                    variant='outline';
                    on_click={() => handleStatusChange ('changes_requested')}
                  >;
                    <MessageSquare className='mr - 2 h - 4 w - 4' /> Request Changes;
                  </Button>;
                </>)}
              {(is_client || is_talent) && project.status === 'in_progress' && (
                <AlertDialog>;
                  <AlertDialogTrigger as_child>;
                    <Button variant='default'>;
                      <CheckCircle2 className='mr - 2 h - 4 w - 4' /> Mark as;
                      Completed;
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
                    <AlertDialogHeader>;
                      <AlertDialogTitle>;
                        Mark Project as Completed?;
                      </AlertDialogTitle>;
                      <AlertDialogDescription>;
                        This will finalize the project and mark it as complete.;
                        Make sure all deliverables have been provided and;
                        approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
                      <AlertDialogCancel > Cancel</AlertDialogCancel>;
                      <AlertDialogAction;
                        on_click={() => handleStatusChange ('completed')}
                      >                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>)}
              {isActiveProject && (
                <Button variant='default' as_child>;
                  <Link href={`/project/[id]/milestones`}>;
                    <Layers className='mr - 2 h - 4 w - 4' /> Milestones;
                  </Link>;
                </Button>)}
              {isActiveProject && (
                <Button variant='outline' as_child>;
                  <Link href={`/project/[id]/room`}>;
                    <Video className='mr - 2 h - 4 w - 4' /> Project Room;
                  </Link>;
                </Button>)}
              {(is_client || is_talent) &&;
                ['offer_sent', 'offer_accepted', 'in_progress'].includes (
                  project.status) && (
                  <Button;
                    variant='outline';
                    on_click={() =>;
                      router.push (
                        `/messages?talent_id=${project.talent_id}&client_id=${project.client_id}`);
                    }
                  >;
                    <MessageSquare className='mr - 2 h - 4 w - 4' /> Message;
                  </Button>)}            </div>;
          </div>;
        </div>;
        <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 8'>;
          <div className='order - 2 lg:order - 1 lg:col - span - 2'>;
            <Tabs;
              default_value='details';
              value={active_tab}
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
              
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
              
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>                 <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Card>
>>>>>>>                   <CardHeader>
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
<<<<<<< HEAD
<<<<<<< HEAD

                      <div>
=======
>>>>>>>                       <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        <h3 className="font-semibold mb-2">Payment Terms</h3>
                        <Badge variant="outline" className="capitalize">
                          {project.payment_terms} Payment
                        </Badge>
                      </div>
<<<<<<< HEAD

                      <div>
=======
>>>>>>>                       <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        <h3 className="font-semibold mb-2">Job Details</h3>
                        <div className="bg-muted/30 p-4 rounded-md">
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
                      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <div>
                        <h3 className="font-semibold mb-2">Payment Terms</h3>
                        <Badge variant="outline" className="capitalize">
                          {project.payment_terms} Payment
                        </Badge>
                      </div>
<<<<<<< HEAD


                      


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                      <div>
                        <h3 className='font-semibold mb-2'>Job Details</h3>
                        <div className='bg-muted/30 p-4 rounded-md'>
                          <p className='whitespace-pre-wrap'>
                            {project.job?.description}
                          </p>
>>>>>>>                         </div>
=======
<<<<<<< HEAD
=======
                      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      <div>
                        <h3 className="font-semibold mb-2">Job Details</h3>
                        <div className="bg-muted/30 p-4 rounded-md">
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>
                        </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
              <TabsContent value='timeline'>
>>>>>>>                 <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              <TabsContent value='timeline'>
=======
              
              <TabsContent value="timeline">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Card>
>>>>>>>                   <CardHeader>
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
<<<<<<< HEAD
<<<<<<< HEAD

                        <div>
=======
                      <div className='flex items-start gap-3 p-3 bg-muted/30 rounded-md'>
                        <Clock className='h-5 w-5 text-primary mt-0.5' />
>>>>>>>                         <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          <h3 className="font-semibold">Project Status</h3>
                          <div className="mt-1">
ursor/fix-website-loading-errors-and-merge-6662
                        <div>
                          <h3 className='font-semibold'>Project Status</h3>
                          <div className='mt-1'>
>>>>>>>                             {getStatusBadge(project.status)}
=======
                      <div className='flex items-start gap-3 p-3 bg-muted/30 rounded-md'>
                        <Clock className='h-5 w-5 text-primary mt-0.5' />
=======
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        <div>
                          <h3 className="font-semibold">Project Status</h3>
                          <div className="mt-1">
                            {getStatusBadge(project.status)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
              <TabsContent value='documents'>
>>>>>>>                 <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              <TabsContent value='documents'>
=======
              
              <TabsContent value="documents">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Card>
>>>>>>>                   <CardHeader>
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
              <TabsContent value='notes'>
>>>>>>>                 <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              <TabsContent value='notes'>
=======
              
              <TabsContent value="notes">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Card>
>>>>>>>                   <CardHeader>
                    <CardTitle>Project Notes</CardTitle>
                    <CardDescription>
                      Shared notes and updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
                        {notes.length > 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD

=======
                          notes.map(note => (
                            <div
                              key={note.id}
                              className='bg-muted/30 p-3 rounded-md'
                            >
                              <div className='flex items-center gap-2 mb-2'>
                                <Avatar className='h-6 w-6'>
=======
                          notes.map((note) => (
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">
                              <div className="flex items-center gap-2 mb-2">
                                <Avatar className="h-6 w-6">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                  {note.created_by_profile?.avatar_url ? (
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
<<<<<<< HEAD

                                  ) : (
                                    <User className="h-4 w-4" />
                                  )}
                                </Avatar>

                                </span>
=======
                          notes.map(note => (
                            <div
                              key={note.id}
                              className='bg-muted/30 p-3 rounded-md'
                            >
                              <div className='flex items-center gap-2 mb-2'>
                                <Avatar className='h-6 w-6'>
>>>>>>>                                   {note.created_by_profile?.avatar_url ? (
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                      loading='lazy'                                    />
>>>>>>>                                   ) : (
                                    <User className="h-4 w-4" />
=======
<<<<<<< HEAD
                                      loading='lazy'                                    />
=======
                                      loading="lazy"
                                    />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                                  ) : (
                                    <User className="h-4 w-4" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                  )}
                                </Avatar>
<<<<<<< HEAD
                                <span className='font-medium text-sm'>
                                  {note.created_by_profile?.display_name |
<<<<<<< HEAD
                                    'User'}
                                  {note.created_by_profile?.avatar_url ? (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                                    <img


                                      loading="lazy"
                                    />


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                    'User'}
=======
                                <span className="font-medium text-sm">
                                  {note.created_by_profile?.display_name || "User"}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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

>>>>>>>                                 </span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
                      </div>
<<<<<<< HEAD

=======
                          <Button
                            onClick = {handleSubmitNote,}
                            disabled = {!newNote.trim() |isSubmittingNote,}
                      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                      </div>
<<<<<<< HEAD
                      {isOfferAccepted && (
                        <div>
                          <Textarea
                            placeholder='Add a note or update to the project...'
                            value={newNote}
                            onChange={e => setNewNote(e.target.value)}
                            className='min-h-[100px] mb-2'                          />
<<<<<<< HEAD
                          <Button
                            onClick = {handleSubmitNote,}
                            disabled = {!newNote.trim() |isSubmittingNote,}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                      
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      {isOfferAccepted && (
                        <div>
                          <Textarea
                            placeholder="Add a note or update to the project..."
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="min-h-[100px] mb-2"
                          />
<<<<<<< HEAD
<<<<<<< HEAD

                          <Button
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}

                          >
=======
>>>>>>>                           <Button
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
>>>>>>>                           >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          <Button
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                          >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
              <TabsContent value='reviews'>
>>>>>>>                 <ProjectReviewSection project={project} />
=======
              <TabsContent value='reviews'>
=======
              
              <TabsContent value="reviews">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <ProjectReviewSection project={project} />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </TabsContent>
            </Tabs>
          </div>
<<<<<<< HEAD
          <div className='order-1 lg:order-2 lg:col-span-1'>
<<<<<<< HEAD
>>>>>>>             <Card>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                          <Button

                            onClick = {handleSubmitNote,}

                            {isSubmittingNote ? 'Posting...' : 'Post Note'}
                          </Button>;
                        </div>;
                      )}


              
              <TabsContent value="reviews">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <ProjectReviewSection project={project} />
              </TabsContent>
            </Tabs>
          </div>

<<<<<<< HEAD
=======

          
          <div className="order-1 lg:order-2 lg:col-span-1">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
          
          <div className="order-1 lg:order-2 lg:col-span-1">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Card>
>>>>>>>               <CardHeader>
                <CardTitle>Project Participants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      {project.talent_profile?.profile_picture_url ? (
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
<<<<<<< HEAD
<<<<<<< HEAD

                      ) : (
=======
                          loading='lazy'                        />
>>>>>>>                       ) : (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          variant='outline'
                          size='sm'
                          className='mt-2'
                          onClick={() =>
                            router.push(
                              `/messages?talentId=${project.talent_id}`
                            )
                          }                        >
                          <MessageSquare className='mr-1 h-3 w-3' /> Message
<<<<<<< HEAD

=======
                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name || "Talent"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.talent_profile?.professional_title || "Professional"}
                      </p>
                      {isClient && (
                        <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
<<<<<<< HEAD

                        </Button>
                      )}
                    </div>
                  </div>

                      {project.talent_profile?.profile_picture_url ? (
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}

                      ) : (
=======
>>>>>>>                         </Button>
                      )}
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <Avatar className='h-10 w-10'>
>>>>>>>                       {project.talent_profile?.profile_picture_url ? (
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading='lazy'                        />
>>>>>>>                       ) : (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
<<<<<<< HEAD

                      </h3>
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      {isTalent && (
                        <Button

=======
                      <h3 className='font-semibold'>
                        {project.talent_profile?.full_name |'Client'}
                      </h3>
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      {isTalent && (
ursor/fix-website-loading-errors-and-merge-6662
=======
                          loading='lazy'                        />
=======
                          loading="lazy"
                        />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
<<<<<<< HEAD

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
>>>>>>>                         <Button
                          variant='outline'
                          size='sm'
                          className='mt-2'




=======
<<<<<<< HEAD
                      <h3 className='font-semibold'>
                        {project.talent_profile?.full_name |'Talent'}
                      </h3>
                      <p className='text-sm text-muted-foreground'>
                        {project.talent_profile?.professional_title |
                          'Professional'}
                      </p>
                      {isClient && (
                        <Button
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          variant='outline'
                          size='sm'
                          className='mt-2'
                          onClick={() =>
                            router.push(
                              `/messages?talentId=${project.talent_id}`
                            )
                          }                        >
                          <MessageSquare className='mr-1 h-3 w-3' /> Message
=======
<<<<<<< HEAD
                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name || "Talent"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.talent_profile?.professional_title || "Professional"}
                      </p>
                      {isClient && (
                        <Button
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        </Button>
                      )}
                    </div>
                  </div>
<<<<<<< HEAD
                </div>
              </CardContent>
            </Card>
            {/* Project Status Card */}
            <Card className='mt-6'>
>>>>>>>               <CardHeader>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
                  <div className='flex items-start gap-4'>
                    <Avatar className='h-10 w-10'>
=======
                  
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      {project.talent_profile?.profile_picture_url ? (
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
<<<<<<< HEAD


                          loading="lazy"
                        />


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
                          loading='lazy'                        />
=======
                          loading="lazy"
                        />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                        <Button


                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => router.push(`/messages?clientId=${project.client_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
=======
<<<<<<< HEAD
                      <h3 className='font-semibold'>
                        {project.talent_profile?.full_name |'Client'}
=======
                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name || "Client"}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
            <Card className="mt-6">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <Card className='mt-6'>
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <CardHeader>
>>>>>>>                 <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Current Status:</span>
                    <div>{getStatusBadge(project.status)}</div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                     </span>
                  </div>
                </div>
              </CardContent>
>>>>>>>               {/* Conditional Footer Based on Status */}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                  
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </span>
                  </div>
                </div>
              </CardContent>
<<<<<<< HEAD

<<<<<<< HEAD
=======
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


              


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              {/* Conditional Footer Based on Status */}
>>>>>>>               {project.status === "changes_requested" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-amber-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.
                  </p>
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
              
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              {/* Conditional Footer Based on Status */}
              {project.status === "changes_requested" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-amber-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.
                  </p>
<<<<<<< HEAD
                  <Button
                    variant='outline'
                    onClick={() =>
                      router.push(`/messages?talentId=${project.talent_id}`)
                    }
                    className='w-full'                  >
                    <MessageSquare className='mr-2 h-4 w-4' /> Discuss Changes
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </Button>
                </CardFooter>
              )}
              {project.status === 'offer_sent' && isClient && (
                <CardFooter className='flex-col items-start gap-2 border-t pt-6'>
                  <p className='text-sm text-muted-foreground'>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Button 
                    variant="outline"
                    onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                    className="w-full"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>                   </Button>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </Button>
>>>>>>>                 </CardFooter>
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  </Button>
                </CardFooter>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              )}
              
              {project.status === "offer_sent" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-muted-foreground">
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    Waiting for the talent to accept your offer.
                  </p>
                </CardFooter>
              )}
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Card>
          </div>
        </div>
      </main>
    </>
<<<<<<< HEAD
  )
}
setIsSubmittingNote (true)
try {
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
const handleStatusChange = async (newStatus: ProjectStatus) => {
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

=======
>>>>>>>                     Waiting for the talent to accept your offer.
                  </p>
                </CardFooter>
              )}
  status
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                    Waiting for the talent to accept your offer.
                  </p>
                </CardFooter>
              )}

                    className='w-full'                  >;
                    <MessageSquare className='mr-2 h-4 w-4' /> Discuss Changes;
                  </Button>;
                </CardFooter>;
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

=======
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
setIsSubmittingNote (true)
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
>>>>>>>   `/project/[id]/milestones` "
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
const handleStatusChange = async (newStatus: ProjectStatus) => {
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
<<<<<<< HEAD
  status
=======
  status 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                  <li>• Professional Solutions</li>
                  <li>• Expert Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
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
>>>>>>> }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </Card>;
          </div>;
        </div>;
      </main>;
    </>;
  );
}
=======
            </div>
    </>
  )
}
=======
              
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
=======
            </div>;
    </>;
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </Card>;
          </div>;
        </div>;
      </main>;
    </>;
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
