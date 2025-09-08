import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { format } from "date-fns";
import { useAuth } from "@/hooks/useAuth";
import { useProjects } from "@/hooks/useProjects";
import SEOHead from "@/components/SEOHead";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Project, ProjectStatus } from "@/types/projects";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection";
import {
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
} from "lucide-react";

function ProjectDetailsContent() {
  const { projectId } = useParams();
  const { user } = useAuth();
  const { getProjectById, updateProjectStatus } = useProjects();
  
  const [project, setProject] = useState(null as Project | null);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([] as any[]);
  const [newNote, setNewNote] = useState("");
  const [isSubmittingNote, setIsSubmittingNote] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  
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
          title: "Project not found",
          description: "The requested project could not be found.",
          variant: "destructive",
        });
        router.push("/dashboard");
      }
      
      setIsLoading(false);
    }
    
    loadProject();
  }, [projectId]);
  
  const fetchProjectNotes = async (projectId: string) => {
    try {
      const { data, error } = await supabase
        .from("project_notes")
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .eq("project_id", projectId)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      
      setNotes(data || []);
    } catch (err) {
      console.error("Error fetching project notes:", err);
    }
  };
  
  const handleSubmitNote = async () => {
    if (!newNote.trim() || !project || !user) return;
    
    setIsSubmittingNote(true);
    
    try {
      const { data, error } = await supabase
        .from("project_notes")
        .insert({
          project_id: project.id,
          user_id: user.id,
          content: newNote,
        })
        .select();
      
      if (error) throw error;
      
      // Refresh notes
      fetchProjectNotes(project.id);
      setNewNote("");
      
      toast({
        title: "Note added",
        description: "Your note has been added to the project.",
      });
    } catch (err: any) {
      console.error("Error adding note:", err);
      toast({
        title: "Failed to add note",
        description: err.message || "An error occurred while adding your note.",
        variant: "destructive",
      });
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
        status: newStatus,
      });
      
      // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {
        toast({
          title: "Offer Accepted! 🎉",
          description: "The project is now in progress. Congratulations!",
        });
      }
    }
  };
  
  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case "offer_sent":
        return <Badge variant="outline">Offer Sent</Badge>;
      case "offer_accepted":
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>;
      case "changes_requested":
        return <Badge variant="secondary">Changes Requested</Badge>;
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case "completed":
        return <Badge variant="default">Completed</Badge>;
      case "canceled":
        return <Badge variant="destructive">Canceled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
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
    );
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
            <Button onClick={() => router.push("/dashboard")}>
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
    router.push("/unauthorized");
    return null;
  }
  
  const isOfferPending = project.status === "offer_sent";
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status);
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status);
  
  return (
    <>
      <SEOHead 
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} 
        description="View and manage your project details and collaboration."
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">
            <div>
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>
              <div className="flex items-center gap-2 mt-1">
                {getStatusBadge(project.status)}
                <span className="text-muted-foreground">
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>
              </div>
            </div>
            
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
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>
                          Accept Offer
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
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>
                        Mark as Completed
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              
              {isActiveProject && (
                <Button variant="default" asChild>
                  <Link href={`/project/${project.id}/milestones`}>
                    <Layers className="mr-2 h-4 w-4" /> Milestones
                  </Link>
                </Button>
              )}

