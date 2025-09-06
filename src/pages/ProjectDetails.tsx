
import React, { useState, useEffect } from "react",
import Link from 'next/link';
import { useRouter  } from 'next/router';
import { format } from "date-fns",
import { useAuth } from "@/hooks/useAuth",
import { useProjects } from "@/hooks/useProjects",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { Project, ProjectStatus } from "@/types/projects",
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
=======

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
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

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
  AlertDialogTrigger,

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
                      </div>


                          <Button
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


                <ProjectReviewSection project={project} />
              </TabsContent>
            </Tabs>
          </div>
          <div className='order-1 lg:order-2 lg:col-span-1'>
          
          <div className="order-1 lg:order-2 lg:col-span-1">
<<<<<<< HEAD
            <Card>
              <CardHeader>
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
                        <Button
                          variant='outline'
                          size='sm'
                          className='mt-2'
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
                        </Button>
                      )}
                    </div>
                  </div>
              {/* Conditional Footer Based on Status */}
              {project.status === "changes_requested" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-amber-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.
                  </p>


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            </Card>
          </div>
        </div>
      </main>
    </>
<<<<<<< HEAD
  )
    </>);

}
setIsSubmittingNote (true)
try {

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
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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
<<<<<<< HEAD
              </Link>
<<<<<<< HEAD

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
