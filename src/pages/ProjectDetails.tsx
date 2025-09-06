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



import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

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
            </div>
    </>
  )
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

