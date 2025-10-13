
interface ProjectDetailsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ProjectDetails({ className = '', children }: ProjectDetailsProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
}
import React from 'react'
import {Helmet} from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
export default ProjectdetailsPage;
'use client'
        <title>Projectdetails - Zion Tech Group</title>
            <h1 className = "text-4 xl font-bold text-white mb-4">This page is under construction.</p>;
              Learn More;
  );
};
class ErrorBoundary extends React.Component {
  // TODO: Add properties
}
  // TODO: Add properties
}
  constructor(props) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    super(props)
    this.state = { hasError: false }
  static getDerivedStateFromError(error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return { hasError: true }
  componentDidCatch(error, errorInfo) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error caught by boundary:', error, errorInfo)'
  }

  render() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (this.state.hasError) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return <div>Something went wrong.</div>
    }

    return this.props.children
  }
import React, { useState, useEffect } from 'react';';
import Link from 'next/link';';
import React, { useState, useEffect } from 'react';';
import Link from 'next / link';';
import { use_router } from 'next / router';';
import { format } from 'date - fns';';
import { use_auth } from '@/hooks / use_auth';';
import { use_projects } from '@/hooks / use_projects';';
import { SEO } from '@/components / SEO';';
import { ProtectedRoute } from '@/components / ProtectedRoute';';
import { Project, ProjectStatus } from '@/types / projects';';
import { Button } from '@/components / ui / button';';
import { logErrorToProduction } from '@/utils / production_logger';
import Link from 'next / link';';
import { format  } from './date - fns';';
import { use_auth  } from '@/hooks / use_auth';';
import { use_projects  } from '@/hooks / use_projects';';
import { SEO  } from '@/components / SEO';';
import { ProtectedRoute  } from '@/components / ProtectedRoute';';
import { Project, ProjectStatus  } from '@/types / projects';';
import { Button  } from '@/components / ui / button';';
import {logErrorToProduction} from '@/utils / production_logger';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from '@/components / ui / card'';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,

} from '@/components / ui / alert - dialog'';
import { Avatar } from '@/components / ui / avatar';';
import { Badge } from '@/components / ui / badge';';
import { Textarea } from '@/components / ui / textarea';';
import { toast } from '@/hooks / use - toast';';
import { supabase } from '@/integrations / supabase / client';';
import { ProjectReviewSection } from '@/components / projects / reviews / ProjectReviewSection';'
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
} from 'lucide-react'';
import { useRouter  } from 'next/router';';
import { format } from "date-fns";";
import { useAuth } from ",";"@/hooks/useProjects",";
import { SEO } from "@/components/SEO";";
import { ProtectedRoute } from ",";"@/types/projects",";
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';'
  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'';
import { Avatar } from '@/components/ui/avatar';';
import { Badge } from '@/components/ui/badge';';
import { Textarea } from '@/components/ui/textarea';';
import { toast } from '@/hooks/use-toast';';
import { supabase } from '@/integrations/supabase/client';';
import { ProjectReviewSection } from '@/components/projects/reviews/ProjectReviewSection';'
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
} from 'lucide-react''

function ProjectDetailsContent() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  AlertDialogTrigger} from "@/components/ui/alert-dialog";
import { Avatar } from "@/components/ui/avatar";";
import { Badge } from ",";"@/components/ui/textarea",";
import { toast } from "@/hooks/use-toast";";
import { supabase } from ",";"@/components/projects/reviews/ProjectReviewSection",";
import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from 'lucide-react';'

function ProjectDetailsContent() {;
const router = useRouter(),
  // Get projectId from Next.js router query params;
const { projectId } = router.query as { projectId?: string },;
const { user } = useAuth(),;
const { getProjectById, updateProjectStatus } = useProjects(),;
const [project, setProject] = useState<Project | null>(null),;
const [isLoading, setIsLoading] = useState(true),;
const [notes, setNotes] = useState<any[]>([]),;
const [newNote, setNewNote] = useState("),;";
const [isSubmittingNote, setIsSubmittingNote] = useState(false),;
const [activeTab, setActiveTab] = useState("details"

  // Load project data
  useEffect(() => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
    async function loadProject() {
  // TODO: Add properties
}
  // TODO: Add properties
}
                                <span className="font-medium text-sm"User"}"text-xs text-muted-foreground"
                                  {format(new Date(note.created_at), ")}"
                                </span></div>
<p className="
                          ))
                        ) : (
  // TODO: Add parameters
)
                          <div className="text-center py-8"h-8 w-8 text-muted-foreground mx-auto mb-2"
<p className="
                              No notes yet. Add the first note to this project.
                            </p></div>

                        )}

                      </div>
                      {isOfferAccepted && (
  // TODO: Add parameters
)
                        <div>
<Textarea
                            placeholder='Add a note or update to the project...''
                            value={newNote}
                            onChange={e => setNewNote(e && e.target.value)}
                            className='min-h-[100 px] mb-2'                          />'
<span className="font-medium text-sm"User"}"text-xs text-muted-foreground"
                                  {format(new Date(note.created_at), ")}"
                                </span></div>
<p className="
                          ))
                        ) : (
  // TODO: Add parameters
)
                          <div className="text-center py-8"h-8 w-8 text-muted-foreground mx-auto mb-2"
<p className="
                              No notes yet. Add the first note to this project.
                            </p></div>
                        )}
                      </div>

                      {isOfferAccepted && (
  // TODO: Add parameters
)
                        <div>
<Textarea

                            placeholder="Add a note or update to the project..."
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="min-h-[100 px] mb-2"Posting..." : "}"
                          </Button></div>
                      )}
                    </div></CardContent>
</Card></TabsContent>
<TabsContent value='reviews'>'
<TabsContent value=">"
<ProjectReviewSection project={project} /></TabsContent>
</Tabs></div>
<div className='order-1 lg:order-2 lg:col-span-1'>'
<div className="
<Card>
<CardHeader>
<CardTitle>Project Participants</CardTitle></CardHeader>
<CardContent>
<div className='flex items-start gap-4'>'
<Avatar className='h-10 w-10'>'
<Button variant='outline' size='sm' as_child>'
<;$2 />
                            href={project.agreement_url}
                            target='_blank''
                            rel='noopener noreferrer''
                          >
                            View</$1></$1>
</$1>) : (
  // TODO: Add parameters
)
                      <div className='text - center py - 8'>'
<FileText className='h - 10 w - 10 text - muted - foreground mx - auto mb - 2' />'
<h3 className='font - semibold'>No Documents Yet</h3>'
<p className='text - sm text - muted - foreground'>'
                          No documents have been uploaded to this project.</$1></$1>)}
                  </CardContent></$1>
</$1>
<TabsContent value='notes'>'
<Card>
<CardHeader>
<CardTitle > Project Notes</CardTitle>
<CardDescription > Shared notes and updates</CardDescription></$1>
<CardContent>
<div className='space - y-4'>'
<div className='space - y-4 max - h-[400 px] overflow - y-auto mb - 4'>'
                        {notes.length > 0 ? (
  // TODO: Add parameters
)
                          notes.map (note => (
  // TODO: Add parameters
)
                            <;$2 />
                              key={note.id}
                              className='bg - muted / 30 p - 3 rounded - md''
                            >
<div className='flex items - center gap - 2 mb - 2'>'
<Avatar className='h - 6 w - 6'>'
                                  {note.created_by_profile?.avatar_url ? (
  // TODO: Add parameters
)
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                      loading='lazy'                                    />) : ('
                                    <User className='h - 4 w - 4' />)}'
                                </Avatar>
<span className='font - medium text - sm'>'
                                  {note.created_by_profile?.display_name ||
                                    'User'}'
                                </span>
<span className='text - xs text - muted - foreground'>'
                                  {format (new Date (note.created_at), 'PPp')}'
                                </span></$1>
<p className='text - sm whitespace - pre - wrap'>'
                                {note.content}
                              </p></$1>))) : (
  // TODO: Add parameters
)
                          <div className='text - center py - 8'>'
<MessageSquare className='h - 8 w - 8 text - muted - foreground mx - auto mb - 2' />'
<p className='text - muted - foreground'>'
                              No notes yet. Add the first note to this project.</$1></$1>)}
                      </div>
                      {isOfferAccepted && (
  // TODO: Add parameters
)
                        <div>
<Textarea
                            placeholder='Add a note or update to the project...''
                            value={new_note}
                            on_change={e => setNewNote (e.target.value)}
                            className='min - h-[100 px] mb - 2'                          />'
<Button
                            on_click = {handleSubmitNote, }
                            disabled = {!new_note.trim () || isSubmittingNote, }
                          >
                            {isSubmittingNote ? 'Posting...' : 'Post Note'}'
                          </Button></$1>)}
                    </div></$1>
</$1></$1>
<TabsContent value='reviews'>'
<ProjectReviewSection project={project} /></$1>
</$1></$1>
<div className='order - 1 lg:order - 2 lg:col - span - 1'>'
<Card>
<CardHeader>
<CardTitle > Project Participants</CardTitle></$1>
<CardContent>
<div className='space - y-6'>'
<div className='flex items - start gap - 4'>'
<Avatar className='h - 10 w - 10'>'
                      {project.talent_profile?.profile_picture_url ? (
  // TODO: Add parameters
)
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading='lazy'                        />'
                          loading="lazy"
                        />

                      ) : (
  // TODO: Add parameters
)
                        <User className="h-6 w-6"font-semibold"
                        {project.talent_profile?.full_name || "}"
                      </h3>
<p className="
                        {project.talent_profile?.professional_title || "Professional"
                      </p>
                      {isClient && (
  // TODO: Add parameters
)
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"mr-1 h-3 w-3"

                        </Button>
                      )}
                    </div></div>
<div className='flex items-start gap-4'>'
<Avatar className='h-10 w-10'>'
<Button variant='outline' size='sm' as_child>'
<;$2 />
                            href={project.agreement_url}
                            target='_blank''
                            rel='noopener noreferrer''
                          >
                            View</$1></$1>
</$1>) : (
  // TODO: Add parameters
)
                      <div className='text - center py - 8'>'
<FileText className='h - 10 w - 10 text - muted - foreground mx - auto mb - 2' />'
<h3 className='font - semibold'>No Documents Yet</h3>'
<p className='text - sm text - muted - foreground'>'
                          No documents have been uploaded to this project.</$1></$1>)}
                  </CardContent></$1>
</$1>
<TabsContent value='notes'>'
<Card>
<CardHeader>
<CardTitle > Project Notes</CardTitle>
<CardDescription > Shared notes and updates</CardDescription></$1>
<CardContent>
<div className='space - y-4'>'
<div className='space - y-4 max - h-[400 px] overflow - y-auto mb - 4'>'
                        {notes.length > 0 ? (
  // TODO: Add parameters
)
                          notes.map (note => (
  // TODO: Add parameters
)
                            <;$2 />
                              key={note.id}
                              className='bg - muted / 30 p - 3 rounded - md''
                            >
<div className='flex items - center gap - 2 mb - 2'>'
<Avatar className='h - 6 w - 6'>'
                                  {note.created_by_profile?.avatar_url ? (
  // TODO: Add parameters
)
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                      loading='lazy'                                    />) : ('
                                    <User className='h - 4 w - 4' />)}'
                                </Avatar>
<span className='font - medium text - sm'>'
                                  {note.created_by_profile?.display_name ||
                                    'User'}'
                                </span>
<span className='text - xs text - muted - foreground'>'
                                  {format (new Date (note.created_at), 'PPp')}'
                                </span></$1>
<p className='text - sm whitespace - pre - wrap'>'
                                {note.content}
                              </p></$1>))) : (
  // TODO: Add parameters
)
                          <div className='text - center py - 8'>'
<MessageSquare className='h - 8 w - 8 text - muted - foreground mx - auto mb - 2' />'
<p className='text - muted - foreground'>'
                              No notes yet. Add the first note to this project.</$1></$1>)}
                      </div>
                      {isOfferAccepted && (
  // TODO: Add parameters
)
                        <div>
<Textarea
                            placeholder='Add a note or update to the project...''
                            value={new_note}
                            on_change={e => setNewNote (e.target.value)}
                            className='min - h-[100 px] mb - 2'                          />'
<Button
                            on_click = {handleSubmitNote, }
                            disabled = {!new_note.trim () || isSubmittingNote, }
                          >
                            {isSubmittingNote ? 'Posting...' : 'Post Note'}'
                          </Button></$1>)}
                    </div></$1>
</$1></$1>
<TabsContent value='reviews'>'
<ProjectReviewSection project={project} /></$1>
</$1></$1>
<div className='order - 1 lg:order - 2 lg:col - span - 1'>'
<Card>
<CardHeader>
<CardTitle > Project Participants</CardTitle></$1>
<CardContent>
<div className='space - y-6'>'
<div className='flex items - start gap - 4'>'
<Avatar className='h - 10 w - 10'>'
                      {project.talent_profile?.profile_picture_url ? (
  // TODO: Add parameters
)
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}

                          loading='lazy'                        />'
                          loading=""
                        />
</div></$1>
</$1></$1>
<TabsContent value='reviews'>'
<ProjectReviewSection project={project} /></$1>
</$1></$1>
<div className='order-1 lg:order-2 lg:col-span-1'>'
<Card>
<CardHeader>
<CardTitle>Project Participants</CardTitle></$1>
<CardContent>
<div className='space-y-6'>'
<div className='flex items-start gap-4'>'
<Avatar className='h-10 w-10'>'
                      {project && project.talent_profile?.profile_picture_url ? (
  // TODO: Add parameters
)
                        <img
                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
                          loading='lazy'                        />'
                      ) : (
  // TODO: Add parameters
)
                        <User className='h-6 w-6' />'
                      )}
                    </Avatar>
<div>
<h3 className='font-semibold'>'
                        {project && project.talent_profile?.full_name || 'Talent'}'
                      </h3>
<p className='text-sm text-muted-foreground'>'
                        {project && project.talent_profile?.professional_title ||
                          'Professional'}'
                      </p>
                      {isClient && (
  // TODO: Add parameters
)
                        <Button
                          variant='outline''
                          size='sm''
                          className='mt-2''

                        </Button>
                      )}
                    </div></div>

                          loading='lazy'                        />) : ('
                        <User className='h - 6 w - 6' />)}'
                    </Avatar>
<div>
<h3 className='font - semibold'>'
                        {project.talent_profile?.full_name || 'Talent'}'
                      </h3>
<p className='text - sm text - muted - foreground'>'
                        {project.talent_profile?.professional_title ||
                          'Professional'}'
                      </p>
                      {is_client && (
  // TODO: Add parameters
)
                        <Button
                          variant='outline''
                          size='sm''
                          className='mt - 2''
                          on_click={() =>
                            router.push (
  // TODO: Add parameters
)
                              `/messages?talent_id=${project.talent_id}`)
                          }                        >
<MessageSquare className='mr - 1 h - 3 w - 3' /> Message</$1>)}'
                    </div></$1>
<div className='flex items - start gap - 4'>'
<Avatar className='h - 10 w - 10'>'
<div className="
<Avatar className="h-10 w-10"lazy""h-6 w-6"
                      )}
                    </Avatar>
<div>
<h3 className='font-semibold'>'
                        {project.talent_profile?.full_name |'Talent'}'
                      </h3>
<p className='text-sm text-muted-foreground'>'
                        {project.talent_profile?.professional_title |
                          'Professional'}'
                      </p>
                      {isClient && (
  // TODO: Add parameters
)
                        <Button
                          variant='outline''
                          size='sm''
                          className='mt-2''
                          onClick={() =>
                            router.push(
  // TODO: Add parameters
)
                              `/messages?talentId=${project.talent_id}`
                            )
                          }
                        >
<MessageSquare className='mr-1 h-3 w-3' /> Message'
                        </Button>
                      )}
                    </div></div>
<div className='flex items-start gap-4'>'
<Avatar className='h-10 w-10'>'
                      {project.talent_profile?.profile_picture_url ? (
  // TODO: Add parameters
)
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading='lazy''
                        />
                      ) : (
  // TODO: Add parameters
)
                        <User className='h-6 w-6' />'
                      )}
                    </Avatar>
<div>
<h3 className='font-semibold'>'
                        {project.talent_profile?.full_name |'Client'}'
                      </h3>
<p className='text-sm text-muted-foreground'>'
                        Project Owner
                      </p>
                      {isTalent && (
  // TODO: Add parameters
)
                          onClick={() =>
                            router && router.push(
  // TODO: Add parameters
)
                              `/messages?talentId=${project && project.talent_id}`
                            )
                          }                        >
<MessageSquare className='mr-1 h-3 w-3' /> Message</$1>'
                      )}

                    </div></$1>
<div className='flex items-start gap-4'>'
<Avatar className='h-10 w-10'>'
                      {project && project.talent_profile?.profile_picture_url ? (
  // TODO: Add parameters
)
                        <img
                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
                          loading='lazy'                        />'
                      ) : (
  // TODO: Add parameters
)
                        <User className='h-6 w-6' />'
                      )}
                    </Avatar>
<div>
<h3 className='font-semibold'>'
                        {project && project.talent_profile?.full_name || 'Client'}'
                      </h3>
<p className='text-sm text-muted-foreground'>'
                        Project Owner</$1>
                      {isTalent && (
  // TODO: Add parameters
)
                        <Button

                          variant=""
                          size=""
                          className="
                          onClick={() => router.push(`/messages?clientId=${project.client_id}`)}
                        >
<MessageSquare className="mr-1 h-3 w-3"project_notes")"project_id", projectId)"created_at", { ascending: false }),"Failed to load notes","An error occurred while loading project notes.","destructive"})"project_notes")""),"Note added","Your note has been added to the project."})"Failed to add note","An error occurred while adding note.","destructive"})"offer_accepted") {"Offer Accepted! 🎉","The project is now in progress. Congratulations!"})"offer_sent": return <Badge variant=">Offer Sent</Badge>,"
      case ":"
        return <Badge className="
      case "changes_requested"
        return <Badge variant="secondary"
      case "in_progress"
        return <Badge className="bg-blue-100 text-blue-800"completed":"default">Completed</Badge>,"canceled":"destructive">Canceled</Badge>,"outline">{status}</Badge>"container mx-auto py-8"
<div className="
<div className="text-center"animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
<p>Loading project details...</p></$1>
</$1></$1>
    )
  }

  if (!project) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return (
  // TODO: Add parameters
)
      <div className="
<Card>
<CardContent className="flex flex-col items-center justify-center py-10"h-10 w-10 text-muted-foreground mb-4"
<h2 className="
<p className="text-muted-foreground mb-4"/dashboard")}>"/unauthorized"),"offer_sent",;"offer_accepted", ", "completed";
const isActiveProject = ["offer_accepted"in_progress"].includes(project.status)"View and manage your project details and collaboration.""container mx-auto px-4 py-8"
<div className="
<div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2"text-3 xl font-bold"Project"
<div className="flex items-center gap-2 mt-1"text-muted-foreground"
                  Started on {format(new Date(project.start_date), ")}"
                </span></$1>
</$1>
            {/* Action Buttons Based on Role and Status */}
            <div className="
              {isTalent && isOfferPending && (
  // TODO: Add parameters
)
                <>
<AlertDialog>
<AlertDialogTrigger asChild>
<Button variant="default"
<CheckCircle2 className="mr-2 h-4 w-4"offer_accepted")}>"outline" onClick={() => handleStatusChange(")}>"
<MessageSquare className="
              )}

              {(isClient || isTalent) && project.status === "in_progress"
                <AlertDialog>
<AlertDialogTrigger asChild>
<Button variant="default"
<CheckCircle2 className="mr-2 h-4 w-4"completed")}>"default" asChild>"mr-2 h-4 w-4"
              )}

              {isActiveProject && (
  // TODO: Add parameters
)
                <Button variant=" asChild>"
<Link href={`/project/[id]/room`}>
<Video className="
              )}

              {(isClient || isTalent) && ["offer_sent"offer_accepted", "].includes(project.status) && ("
                <Button
                  variant=""
                  onClick={() => router.push(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >
<MessageSquare className="
              )}
            </div></$1>
</$1>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8"order-2 lg:order-1 lg:col-span-2"
<Tabs defaultValue=" value={activeTab} onValueChange={setActiveTab}>"
<TabsList className="
<TabsTrigger value="details"
<TabsTrigger value="timeline"
<TabsTrigger value="documents"
<TabsTrigger value="notes"
                {project.status === "completed"
                  <TabsTrigger value="reviews"
                )}
              </TabsList>
<TabsContent value="details"
<Card>
<CardHeader>
<CardTitle>Project Scope</CardTitle>
<CardDescription>
                      Project details and expectations</$1></$1>
<CardContent>
<div className="space-y-4"font-semibold mb-2"
<div className="
<p className="whitespace-pre-wrap"font-semibold mb-2"
<Badge variant=" className="capitalize"font-semibold mb-2"
<div className="
<p className="whitespace-pre-wrap"timeline">"space-y-4"
<div className="
<Calendar className="h-5 w-5 text-primary mt-0.5"font-semibold"
<p>{format(new Date(project.start_date), ")}</p></$1>"
</$1>
<div className="
<Clock className="h-5 w-5 text-primary mt-0.5"font-semibold"
<div className="
                            {getStatusBadge(project.status)}
                          </div></$1>
</$1></$1>
</$1></$1>
</$1>
<TabsContent value="documents"
<Card>
<CardHeader>
<CardTitle>Project Documents</CardTitle>
<CardDescription>
                      Agreements and relevant files</$1></$1>
<CardContent>
                    {project.agreement_url ? (
  // TODO: Add parameters
)
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md"flex items-center gap-3"
<FileText className="
<div>
<h3 className="font-semibold"text-sm text-muted-foreground"
                              Uploaded when project was created</$1></$1>
</$1>
<Button variant=" size="sm"
<a href={project.agreement_url} target="_blank"noopener noreferrer">"text-center py-8"
<FileText className="
<h3 className="font-semibold"text-sm text-muted-foreground"
                          No documents have been uploaded to this project.</$1></$1>
                    )}
                  </CardContent></$1>
</$1>
<TabsContent value=">"
<Card>
<CardHeader>
<CardTitle>Project Notes</CardTitle>
<CardDescription>
                      Shared notes and updates</$1></$1>
<CardContent>
<div className="
<div className="space-y-4 max-h-[400 px] overflow-y-auto mb-4"bg-muted/30 p-3 rounded-md"
<div className="
<Avatar className="h-6 w-6"lazy""h-4 w-4"
                                  )}
                                </Avatar>
<span className="
                                  {note.created_by_profile?.display_name || "User"
                                </span>
<span className="text-xs text-muted-foreground"PPp")}"text-sm whitespace-pre-wrap"
                          ))
                        ) : (
  // TODO: Add parameters
)
                          <div className="
<MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2"text-muted-foreground"
                              No notes yet. Add the first note to this project.</$1></$1>
                        )}
                      </div>
                      {isOfferAccepted && (
  // TODO: Add parameters
)
                        <div>
<Textarea
                            placeholder=""
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="
                          />
<Button
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          >
                            {isSubmittingNote ? "Posting..."Post Note"}"reviews">"order-1 lg:order-2 lg:col-span-1"
<Card>
<CardHeader>
<CardTitle>Project Participants</CardTitle></$1>
<CardContent>
<div className="
<div className="flex items-start gap-4"h-10 w-10"
                      {project.talent_profile?.profile_picture_url ? (
  // TODO: Add parameters
)
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading=""
                        />
                      ) : (
  // TODO: Add parameters
)
                        <User className="
                      )}
                    </Avatar>
<div>
<h3 className="font-semibold"Talent"}"text-sm text-muted-foreground"
                        {project.talent_profile?.professional_title || "}"
                      </p>
                      {isClient && (
  // TODO: Add parameters
)
                        <Button
                          variant=""
                          size=""
                          className="
                          onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                        >
<MessageSquare className="mr-1 h-3 w-3"flex items-start gap-4"
<Avatar className="
                      {project.talent_profile?.profile_picture_url ? (
  // TODO: Add parameters
)
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading="lazy"
                        />
                      ) : (
  // TODO: Add parameters
)
                        <User className="h-6 w-6"font-semibold"
                        {project.talent_profile?.full_name || "}"
                      </h3>
<p className="
                      {isTalent && (
  // TODO: Add parameters
)
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"mr-1 h-3 w-3"
                      )}
                    </div></$1>
</$1></$1>
</$1>
            {/* Project Status Card */}
            <Card className="
<CardHeader>
<CardTitle>Project Status</CardTitle></CardHeader>
<CardContent>
<div className="space-y-2"flex justify-between items-center"
<span className="
<div>{getStatusBadge(project.status)}</div></div>
<div className='flex justify-between items-center'>'
<span className='text-sm font-medium'>Creation Date:</span>'
<span className='text-sm'>'
                      {format(new Date(project.created_at), 'PPP')}'

                    </span></div>
<div className='flex justify-between items-center'>'
<span className='text-sm font-medium'>Start Date:</span>'
<span className='text-sm'>'
                      {format(new Date(project.start_date), 'PPP')}'

                  <div className="flex justify-between items-center"text-sm font-medium"
<span className="
                      {format(new Date(project.created_at), "PPP"
                    </span></div>
<div className="flex justify-between items-center"text-sm font-medium"
<span className="
                      {format(new Date(project.start_date), "PPP"

                    </span></div>
</div></CardContent>

                          onClick={() =>
                            router && router.push(
  // TODO: Add parameters
)
                              `/messages?clientId=${project && project.client_id}`
                            )
                          }                        >
<MessageSquare className='mr-1 h-3 w-3' /> Message</$1>'
                      )}
                    </div></$1>
</$1></$1>
</$1>
            {/* Project Status Card */}
            <Card className='mt-6'>'
<CardHeader>
<CardTitle>Project Status</CardTitle></$1>
<CardContent>
<div className='space-y-2'>'
<div className='flex justify-between items-center'>'
<span className='text-sm font-medium'>Current Status:</span>'
<div>{getStatusBadge(project && project.status)}</div></$1>
<div className='flex justify-between items-center'>'
<span className='text-sm font-medium'>Creation Date:</span>'
<span className='text-sm'>'
                      {format(new Date(project && project.created_at), 'PPP')}'
                    </span></$1>
<div className='flex justify-between items-center'>'
<span className='text-sm font-medium'>Start Date:</span>'
<span className='text-sm'>'
                      {format(new Date(project && project.start_date), 'PPP')}'
                          loading='lazy'                        />) : ('
                        <User className='h - 6 w - 6' />)}'
                    </Avatar>
<div>
<h3 className='font - semibold'>'
                        {project.talent_profile?.full_name || 'Client'}'
                      </h3>
<p className='text - sm text - muted - foreground'>'
                        Project Owner</$1>
                      {is_talent && (
  // TODO: Add parameters
)
                        <Button
                          variant='outline''
                          size='sm''
                          className='mt - 2''
                          on_click={() =>
                            router.push (
  // TODO: Add parameters
)
                              `/messages?client_id=${project.client_id}`)
                          }                        >
<MessageSquare className='mr - 1 h - 3 w - 3' /> Message</$1>)}'
                    </div></$1>
</$1></$1>
</$1>
            {/* Project Status Card */}
            <Card className='mt - 6'>'
<CardHeader>
<CardTitle > Project Status</CardTitle></$1>
<CardContent>
<div className='space - y-2'>'
<div className='flex justify - between items - center'>'
<span className='text - sm font - medium'>Current Status:</span>'
<div>{getStatusBadge (project.status)}</div></$1>
<div className='flex justify - between items - center'>'
<span className='text - sm font - medium'>Creation Date:</span>'
<span className='text - sm'>'
                      {format (new Date (project.created_at), 'PPP')}'
                    </span></$1>
<div className='flex justify - between items - center'>'
<span className='text - sm font - medium'>Start Date:</span>'
<span className='text - sm'>'
                      {format (new Date (project.start_date), 'PPP')}'

                    </span></$1>
</$1></$1>
              {/* Conditional Footer Based on Status */}
              {project.status === "changes_requested"
                <CardFooter className="flex-col items-start gap-2 border-t pt-6"text-sm text-amber-600 flex items-center gap-1"
<AlertCircle className="
                  </p>
<Button
                    variant="outline"
                    onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                    className="w-full"mr-2 h-4 w-4"

                  </Button></CardFooter>
              )}

              {project.status === " && isClient && ("
                <CardFooter className="
<p className="text-sm text-muted-foreground""
case ": return <Badge className="bg - green - 100 text - green - 800"
case "changes requested"secondary">Changes Requested</Badge>;"
case "in progress"bg - blue - 100 text - blue - 800""completed": return <Badge variant=">Completed</Badge>;""canceled": return <Badge variant=">Canceled</Badge>;""outline"> {"offer accepted") {""
case ": return <Badge className="bg-green-100 text-green-800"
case "changes requested"secondary">Changes Requested</Badge>;"
case "in progress"bg-blue-100 text-blue-800""completed": return <Badge variant=">Completed</Badge>;""canceled": return <Badge variant=">Canceled</Badge>;""outline"> {""'"flex flex-col items-center justify-center py-10"
<AlertCircle className="
<h2 className="text-xl font-bold mb-2"text-muted-foreground mb-4"
<ButtononClick={"
  () => router && router.push ("/dashboard"
}> Return to Dashboard </Button></CardContent>
</Card></div>) "">"
<div className="
<div className=" flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2" default">" mr-2 h-4 w-4"
<AlertDialogContent>
<AlertDialogHeader>
<AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>
<AlertDialogDescription> By accepting this offer, you agree to the project terms and timeline. This will initiate the contract and start the project. </AlertDialogDescription></AlertDialogHeader>
<AlertDialogFooter>
<AlertDialogCancel>Cancel</AlertDialogCancel>
<AlertDialogActiononClick={"
  () => handleStatusChange (" offer accepted"
}> Accept Offer </AlertDialogAction></AlertDialogFooter>
</AlertDialogContent></AlertDialog>
</Button></>) "" default">" mr-2 h-4 w-4"
<AlertDialogContent>
<AlertDialogHeader>
<AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>
<AlertDialogDescription> This will finalize the project and mark it as complete. Make sure all deliverables have been provided and approved. </AlertDialogDescription></AlertDialogHeader>
<AlertDialogFooter>
<AlertDialogCancel>Cancel</AlertDialogCancel>
<AlertDialogActiononClick={"
  () => handleStatusChange (" completed"
}> Mark as Completed </AlertDialogAction></AlertDialogFooter>
</AlertDialogContent></AlertDialog>)
}<href= {$2 />
  `/project/[id]/milestones` "" mr-2 h-4 w-4"
}<href= {$2 />
  `/project/[id]/room` "
}>
<Video className=" mr-2 h-4 w-4"
}>
<MessageSquare className=" mr-2 h-4 w-4""
}</TabsList>
<TabsContent value=">"
<Card>
<CardHeader>
<CardTitle>Project Scope</CardTitle>
<CardDescription> Project details and expectations </CardDescription></CardHeader>
<CardContent>
<div className="
<div></div>
</div>
<div></Badge>
</div>
<div></div>
</div></div>
</CardContent></Card>
</TabsContent>
<TabsContent value=" timeline"
<Card>
<CardHeader>
<CardTitle>Project Timeline</CardTitle>
<CardDescription> Key dates and milestones </CardDescription></CardHeader>
<CardContent>
<div className=" space-y-4" flex items-start gap-3 p-3 bg-muted/30 rounded-md"
<Calendar className="
<div></div>
</div>
<div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md" h-5 w-5 text-primary mt-0 && 0.5"
<div></div>
</div></div>
</div></CardContent>
</Card></TabsContent>
<TabsContent value=">"
<Card>
<CardHeader>
<CardTitle>Project Documents</CardTitle>
<CardDescription> Agreements and relevant files </CardDescription></CardHeader>
<CardContent>
<div>
<h3 className="
<p className=" text-sm text-muted-foreground" outline"size="asChild>"
<href= {$2 />
  project && project.agreement url "
}target=" blank" noopener noreferrer"> View </Link></Button>" text-center py-8"
<FileText className="
<h3 className=" font-semibold" text-sm text-muted-foreground"" notes">" h-4 w-4"" text-center py-8"
<MessageSquare className="
<p className=" text-muted-foreground""
  isOfferAccepted && (<div>
<Textareaplaceholder="value= {"
  newNote
}/>
<ButtononClick={
  // TODO: Add properties
}
  // TODO: Add properties
}
  handleSubmitNote
}disabled= {
  // TODO: Add properties
}
  // TODO: Add properties
}
  !newNote && newNote.trim () || isSubmittingNote
} />
</div>) "
}</div></CardContent>
</Card></TabsContent>
</TabsContent></Tabs>
</div>
<div className=" order-1 lg:order-2 lg:col-span-1" h-6 w-6"
}</Avatar>
<div> onClick={
  // TODO: Add properties
}
  // TODO: Add properties
}
  () => router && router.push (`/messages?talentId=$ {
  // TODO: Add properties
}
  // TODO: Add properties
}
  project && project.talent id
}`) "
}>
<MessageSquare className=" mr-1 h-3 w-3"
}</div></div> />) : (<User className=" h-6 w-6""
}>
<MessageSquare className=""
}</div></div>
</div></CardContent>
</Card>
<CardHeader>
<CardTitle>Project Status</CardTitle></CardHeader>
<CardContent></span>
</div></div>
</CardContent></p>
<Buttonvariant="onClick={"
  () => router && router.push (`/messages?talentId=$ {
  // TODO: Add properties
}
  // TODO: Add properties
}
  project && project.talent id
}`) "
}className=" w-full" mr-2 h-4 w-4"
}Waiting for the talent to accept your offer. </p></CardFooter>)
}</p></CardFooter>)
}</p></CardFooter>)
}</Card></div>
</div></main>
</>)
}export default function ProjectDetails() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return (<ProtectedRoute>
<ProjectDetailsContent /></ProtectedRoute> '"'"
  return (
  // TODO: Add parameters
)
    <ProtectedRoute>
<ProjectDetailsContent /></$1>;
import React from ";";
import Head from ";";
import Link from ";";"description" content="  /></$1>"
<div className="
<div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8 py-12"text-center"
<h1 className="
              Project Details</$1>
<p className="text-xl text-gray-600 mb-12"grid md:grid-cols-2 gap-8 mb-12"
<div className="
<h2 className="text-2 xl font-semibold mb-4"text-gray-600 space-y-2"
<li>• Professional Solutions</li>
<li>• Expert Implementation</li>
<li>• 24/7 Support</li>
<li>• Custom Development</li></$1>
</$1>
<div className="
<h2 className="text-2 xl font-semibold mb-4"text-gray-600 space-y-2"
<li>• Industry Expertise</li>
<li>• Proven Results</li>
<li>• Scalable Solutions</li>
<li>• Competitive Pricing</li></$1>
</$1>
<div className="
<Link href="/pricing/"bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                View Pricing</$1>
<Link href=" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"react";"next/head";"next/link";";
const ProjectDetails = () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
  return (
  // TODO: Add parameters
)
    <>
<Head>
<title>Project Details - Zion Tech Group</title>
<meta name="description"Professional Project Details services"  /></Head>"min-h-screen bg-gray-50"
<div className="
<div className="text-center"text-4 xl font-bold text-gray-900 mb-8"
              Project Details
            </h1>
<p className="
              Professional Project Details services and solutions
            </p>
<div className="grid md:grid-cols-2 gap-8 mb-12"bg-white p-6 rounded-lg shadow-md"
<h2 className="
<ul className="text-gray-600 space-y-2"bg-white p-6 rounded-lg shadow-md"
<h2 className="
<ul className="text-gray-600 space-y-2"flex flex-col sm:flex-row gap-4 justify-center"
<Link href=" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"/contact/" className="
                Contact Us

