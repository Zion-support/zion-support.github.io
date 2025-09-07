application: JobApplication
}

import { useState } from 'react';
import { formatDistanceToNow } from 'date - fns';
import { JobApplication } from '@/types / jobs';
import { Button } from '@/components / ui / button';
import { JobApplication } from '@/types/ jobs';
import { Button } from '@/components/ui/ button';
import { JobApplication } from '@/types / jobs;
import { Button } from @/components / ui / button';
import { JobApplication } from '@/types/ jobs;
import { Button } from @/components/ui/ button';


import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle} from '@/components/ui/ card;
  FileText,
  MessageSquare,
  HelpCircle,
  Calendar,
  ExternalLink,
  Download} from lucide-react';
application: JobApplication;
}import { useState  } from 'react';
import { formatDistanceToNow  } from 'date - fns';
import { JobApplication  } from '@/types / jobs';
import { Button  } from '@/components / ui / button';
import { Card,CardContent,CardFooter,CardHeader,CardTitle} from '@/components / ui / card';
  FileText,MessageSquare,HelpCircle,Calendar,ExternalLink,Download} from 'lucide-react';
import Link from 'next / link';
import { StatusBadge  } from './StatusBadge';
import { ApplicationProgress  } from './ApplicationProgress';
import { toast  } from './sonner';


import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react'
import Link from "next/link",
import { StatusBadge } from "./StatusBadge",
import { ApplicationProgress } from "./ApplicationProgress";
import { toast } from "sonner";
import { toast  } from ./sonner';


import { useState } from "react,
import { formatDistanceToNow } from date-fns",
import { JobApplication } from "@/types/jobs,
import { Button } from @/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card,
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react
import Link from next/link",
import { StatusBadge } from "./StatusBadge,
import { ApplicationProgress } from ./ApplicationProgress";
import { toast } from "sonner;
origin/cursor/automate-test-improve-and-merge-code-2533
interface ApplicationCardProps {
  application: JobApplication;
export /**
 * ApplicationCard - Function description
 */
function ApplicationCard() {
  const [ expanded, set_expanded ] = useState (false),
  const handleDownloadResume = () =>: any {
    // This would typically download the resume file;
import { toast  } from sonner';
import { useState   } from './react;
import { formatDistanceToNow   } from ./date - fns';
import { JobApplication   } from '@/types / jobs;
import { Button   } from @/components / ui / button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle   } from '@/components / ui / card;
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from lucide-react'; import Link from './next / link;
import { StatusBadge   } from ./StatusBadge';
import { ApplicationProgress   } from './ApplicationProgress;
import { toast   } from ./sonner';
import { useState } from react",import { formatDistanceToNow } from "date-fns,import { JobApplication } from @/types/jobs",import { Button } from "@/components/ui/button,import { Card, CardContent, CardFooter, CardHeader, CardTitle } from @/components/ui/card",import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download  } from 'lucide-react;
import Link from "next/link,import { StatusBadge } from ./StatusBadge",interface ApplicationCardProps  {}export function ApplicationCard() {const [expanded, setExpanded] = useState(false),const handleDownloadResume = () => {// This would typically download the resume file;
  const [expanded, setExpanded] = useState(false)const handleDownloadResume = () => {// This would typically download the resume file;
    toast.info("Resume download functionality will be implemented soon)}
  const renderActionButtons = () =>: any {switch (application.status) {application: JobApplication;
export /**;
 * ApplicationCard - Function description;
 */;
    toast.info (Resume download functionality will be implemented soon') }
  const renderActionButtons = () =>: any {switch (application.status) {interface ApplicationCardProps  {application: JobApplication;
}
export /**
 * ApplicationCard - Function description
 */
  const [expanded, set_expanded] = useState (false);
    // This would typically download the resume file;
    toast.info (Resume download functionality will be implemented soon");

  }
  const renderActionButtons = () => {
    switch (application.status) {
      case 'shortlisted:;

interface ApplicationCardProps {

export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file

  const [expanded, setExpanded] = useState(false)
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon)
  }
  const renderActionButtons = () =>: any {
    switch (application.status) {

    toast.info(Resume download functionality will be implemented soon') }
    switch (application.status) {interface ApplicationCardProps {
  application: JobApplication
}
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const handleDownloadResume = null;
origin/cursor/automate-test-improve-and-merge-code-2533
        return (
          <Button variant='default size=sm'>;
            <Calendar className='h - 4 w - 4 mr - 1 /> Prepare for Interview);
      case interview':;
        return (


          <Button variant='default size=sm'>;
export /**;
 * ApplicationCard - Function description;
 */;
    toast.info (Resume download functionality will be implemented soon")}
  const renderActionButtons = () => {switch (application.status) {case 'shortlisted:;toast.info(Resume download functionality will be implemented soon') }
  const renderActionButtons = () => {switch (application.status) {interface ApplicationCardProps  {application: JobApplication;
}
export function ApplicationCard() {const [expanded, setExpanded] = useState(false)const handleDownloadResume  = null;return (<Button variant='default size=sm'>;
            <Calendar className='h - 4 w - 4 mr - 1 /> Prepare for Interview)case interview':;
        return (<Button variant='default size=sm'>;
            <Calendar className='h - 4 w - 4 mr - 1 /> View Interview Details;
          </Button>)case hired':;
          >;
            <FileText className='h - 4 w - 4 mr - 1' /> View Offer;
          </Button>);
      case rejected':;


        return (
          <Button variant='outline size=sm'>
            <HelpCircle className='h-4 w-4 mr-1 /> View Feedback
          </Button>
        )
      default:
        return null
    }
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

  }

    switch (application.status) {

  return (

  }

    switch (application.status) {

      case "shortlisted: return (
          <Button variant=default" size="sm>
            <Calendar className=h-4 w-4 mr-1" /> Prepare for Interview
          </Button>
        ),


        ),
      case "interview:
        return (
          <Button variant=default" size="sm>
            <Calendar className=h-4 w-4 mr-1" /> View Interview Details
          </Button>
        ),


      case "hired:
        return (
          <Button variant=secondary" size="sm className=bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">
            <FileText className="h-4 w-4 mr-1 /> View Offer
          </Button>
        ),


        ),
      case rejected":
        return (
          <Button variant="outline size=sm">
            <HelpCircle className="h-4 w-4 mr-1 /> View Feedback
          </Button>
        ),
      default:
        return null
    }
  },


  return (
    <Card className=overflow-hidden">
      <CardHeader className="pb-3>
        <div className=flex justify-between items-start">
          <div>
            <CardTitle>{application.job?.title |'Unknown Job'}</CardTitle>
            <div className='text-sm text-muted-foreground mt-1'>
              Applied{' '}
            <CardTitle>{application.job?.title |Unknown Job'}</CardTitle>
            <div className='text-sm text-muted-foreground mt-1>
              Applied{ '}
              {formatDistanceToNow(new Date(application.created_at), {
                addSuffix: true})}
origin/cursor/automate-test-improve-and-merge-code-2533
            <CardTitle>{application.job?.title || "Unknown Job}</CardTitle>

export function ApplicationCard({ application }: ApplicationCardProps) {

    // This would typically download the resume file

            <div className="text-sm text-muted-foreground mt-1">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true})}
            </div>
          </div>
          <StatusBadge status={application.status} />
        </div>
      </CardHeader>

          </Button>)case 'rejected':;return (<Button variant='outline' size='sm'>;
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback;
          </Button>)case 'rejected:;return (<Button variant=outline' size='sm>;
            <HelpCircle className=h-4 w-4 mr-1' /> View Feedback;
          </Button>;
        )default:;
        return null;
    }
  }return (}const renderActionButtons = () => {switch (application.status) {}
  const renderActionButtons = () => {switch (application.status) {case "shortlisted: return (<Button variant=default" size="sm>;
            <Calendar className=h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>;
        ),case "interview:;
        return (<Button variant=default" size="sm>;
            <Calendar className=h-4 w-4 mr-1" /> View Interview Details;
          </Button>;
        ),case "hired:;
        return (<Button variant=secondary" size="sm className=bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;
            <FileText className="h-4 w-4 mr-1 /> View Offer;
          </Button>;
        ),case rejected":;
        return (<Button variant="outline size=sm">;
            <HelpCircle className="h-4 w-4 mr-1 /> View Feedback;
          </Button>;
        ),default:;
        return null;
    }
  },return (<Card className=overflow-hidden">;
      <CardHeader className="pb-3>;
        <div className=flex justify-between items-start">;
          <div>;
            <CardTitle>{application.job?.title || "Unknown Job}</CardTitle>;
export function ApplicationCard() {const [expanded, setExpanded] = useState(false),const handleDownloadResume = () => {// This would typically download the resume file;
            <div className=text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}<CardTitle>{application.job?.title |'Unknown Job}</CardTitle>;
            <div className=text-sm text-muted-foreground mt-1'>;
              Applied{' }
              {formatDistanceToNow(new Date(application.created_at), {addSuffix: true})}</div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;
    <Card className=overflow - hidden'>;
      <CardHeader className='pb - 3>;
        <div className=flex justify - between items - start'>;
          <div>;
            <CardTitle>{application.job?.title || 'Unknown Job}</CardTitle>;
            <div className=text - sm text - muted - foreground mt - 1'>;
              Applied{' }
              {formatDistanceToNow (new Date (application.created_at), {add_suffix: true})}            </div>            <CardTitle>{application.job?.title || "Unknown Job}</CardTitle>;
            <div className=text - sm text - muted - foreground mt - 1">;
              Applied {formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;
      <CardContent className='pb - 3'>;
        <ApplicationProgress status={application.status} className='my - 4' />;
        <ApplicationProgress status={application.status} className='my - 4 />;



      
      <CardContent className="pb-3>
        <ApplicationProgress status={application.status} className=my-4" />

<CardContent className='pb-3'>
        <ApplicationProgress status={application.status} className='my-4' />
<CardContent className=pb-3'>
        <ApplicationProgress status={application.status} className='my-4 />
origin/cursor/automate-test-improve-and-merge-code-2533

<CardContent className=pb-3'>
        <ApplicationProgress status={application.status} className='my-4 />
        {expanded && (
          <div className=mt - 4 space - y-3'>;
            {application.cover_letter && (
              <div>;
        <ApplicationProgress status={application.status} className='my - 4 />;<CardContent className="pb-3>;
        <ApplicationProgress status={application.status} className=my-4" />;
<CardContent className=pb-3'>;
        <ApplicationProgress status={application.status} className='my-4 />;
        {expanded && (<div className=mt - 4 space - y-3'>;
            {application.cover_letter && (<div>;
                <h4 className='text - sm font - medium mb - 1'>Your Cover Letter</h4>;
                <p className='text - sm text - muted - foreground'>;
                  {application.cover_letter}import { formatDistanceToNow  } from 'date-fns';
import { JobApplication  } from '@/types/jobs';
import { Button  } from '@/components/ui/button';
import {Card,CardContent,CardFooter,CardHeader,CardTitle} from '@/components/ui/card';
  FileText,MessageSquare,HelpCircle,Calendar,ExternalLink,Download} from 'lucide-react';
                  {application.cover_letter}import { formatDistanceToNow  } from 'date-fns;
import { JobApplication  } from @/types/jobs';
import { Button  } from '@/components/ui/button;
import {Card,CardContent,CardFooter,CardHeader,CardTitle} from @/components/ui/card';
  FileText,MessageSquare,HelpCircle,Calendar,ExternalLink,Download} from 'lucide-react;
                  {application.cover_letter}

import { useState } from react';
import { formatDistanceToNow } from 'date-fns;
import { JobApplication } from @/types/jobs';
import { Button } from '@/components/ui/button;
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle} from @/components/ui/card';
  FileText,
  MessageSquare,
  HelpCircle,
  Calendar,
  ExternalLink,
  Download} from 'lucide-react;
import Link from next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card;
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from lucide-react';import Link from 'next/link;
interface ApplicationCardProps  {application: JobApplication;export function ApplicationCard(): any ({ application }: ApplicationCardProps) {const [ expanded, setExpanded ]  = useState(false),const handleDownloadResume = () => {// This would typically download the resume file;
    toast && toast.info(Resume download functionality will be implemented soon')}const renderActionButtons = () => {switch (application && application.status) {interface ApplicationCardProps  {application: JobApplication;
}export function ApplicationCard(): any ({ application }: ApplicationCardProps) {const [expanded, setExpanded]  = useState(false)const handleDownloadResume = () => {// This would typically download the resume file;
    toast && toast.info("Resume download functionality will be implemented soon)}const renderActionButtons = () => {switch (application && application.status) {case 'shortlisted:;
        return (<Button variant=default' size='sm>;
            <Calendar className=h-4 w-4 mr-1' /> Prepare for Interview;
        )case 'interview:;
        return (<Button variant=default' size='sm>;
            <Calendar className=h-4 w-4 mr-1' /> View Interview Details;
          </Button>;
        )case 'hired:;>;
            <FileText className=h-4 w-4 mr-1' /> View Offer;
          </Button>;
        )case 'rejected:;
        return (<Button variant=outline' size='sm>;
            <HelpCircle className=h-4 w-4 mr-1' /> View Feedback;
          </Button>;
        )default:;
        return null;
    }
  }return (<Card className='overflow-hidden>;
      <CardHeader className=pb-3'>;
        <div className='flex justify-between items-start>;
          <div>;
            <CardTitle>{application && application.job?.title || Unknown Job'}</CardTitle>;
            <div className='text-sm text-muted-foreground mt-1>;
              Applied{ '}
              {formatDistanceToNow(new Date(application && application.created_at), {addSuffix: true})}            </div>            <CardTitle>{application && application.job?.title || Unknown Job"}</CardTitle>;
            <div className="text-sm text-muted-foreground mt-1>;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application && application.status} />;
        </div>;
      </CardHeader>;<CardContent className='pb-3>;
        <ApplicationProgress status={application && application.status} className=my-4' />;{expanded && (<div className='mt-4 space-y-3>;
            {application && application.cover_letter && (<div>;
                <h4 className=text-sm font-medium mb-1'>Your Cover Letter</h4>;
                <p className='text-sm text-muted-foreground>;
                  {application && application.cover_letter}
                </p>;
              </div>;
            )}{application && application.resume && (<div className=border rounded-md p-3 bg-muted/20'>;
                <div className='flex justify-between items-center>;
                  <div className=flex items-center'>;
                    <FileText className='h-4 w-4 mr-2 text-blue-500 />;
                    <span className=text-sm font-medium'>;
                      {application && application.resume.title || 'Resume}
                    </span>;
                  </div>;
                  <Button;
                    variant=ghost';
                    size='sm;
                    onClick={handleDownloadResume}
                  >

      
      <CardContent className=pb-3">
        <ApplicationProgress status={application.status} className="my-4 />
        

                  >;
                    <Download className=h-3 w-3 mr-1' /> Download                  </Button>;
                </div>;
              </div>;
            )}{expanded && (<div className=mt-4 space-y-3">;
            {application.cover_letter && (<div>;
                <h4 className="text-sm font-medium mb-1>Your Cover Letter</h4>;
                <p className=text-sm text-muted-foreground">{application.cover_letter}</p>;
              </div>;
            )}
            {application.resume && (<div className="border rounded-md p-3 bg-muted/20>;
                <div className=flex justify-between items-center">;
                  <div className="flex items-center>;
                    <FileText className=h-4 w-4 mr-2 text-blue-500" />;
                    <span className="text-sm font-medium>{application.resume.title |Resume"}</span>;
                  </div>;
            {application.resume && (<div className="border rounded-md p-3 bg-muted/20>;
                <div className=flex justify-between items-center">;
                  <div className="flex items-center>;
                    <FileText className=h-4 w-4 mr-2 text-blue-500" />;
                    <span className="text-sm font-medium>{application.resume.title || Resume"}</span>;
                  </div>;
      <CardContent className="pb-3>;
        <ApplicationProgress status={application.status} className=my-4" />;
                </p>;
              </div>)}
            {application.resume && (<div className='border rounded - md p - 3 bg - muted / 20>;
                <div className=flex justify - between items - center'>;
                  <div className='flex items - center>;
                    <FileText className=h - 4 w - 4 mr - 2 text - blue - 500' />;
                    <span className='text - sm font - medium>;
                      {application.resume.title || Resume'}
                    </span>;
                  </div>;
                  <Button;
                    variant='ghost;
                    size=sm';
                    on_click={handleDownloadResume}
                  >;
                    <Download className='h - 3 w - 3 mr - 1 /> Download                  </Button>;
                </div>;
              </div>)}
        {expanded && (
          <div className="mt-4 space-y-3>
            {application.cover_letter && (





                  <Button variant=ghost" size="sm onClick={handleDownloadResume}>
                    <Download className=h-3 w-3 mr-1" /> Download
                    <Download className=h-3 w-3 mr-1' /> Download
origin/cursor/automate-test-improve-and-merge-code-2533
                    <Download className='h-3 w-3 mr-1 /> Download                  </Button>
                </div>
              </div>
            )}

                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
                    <Download className="h-3 w-3 mr-1" /> Download

                    <Download className=h-3 w-3 mr-1' /> Download
                  </Button>
                </div>
              </div>
            )}
{application.match_score && (
origin/cursor/automate-test-improve-and-merge-code-2533
              <div>
                <h4 className='text-sm font-medium mb-1>Match Score</h4>
                <div className=flex items-center'>
                  <div className='h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium>
                    {application.match_score}%
                  </div>
                  <span className=ml-2 text-xs text-muted-foreground'>
                    Relevance to job requirements

              <div>;
        {expanded && (<div className=mt-4 space-y-3">;
            {application.cover_letter && (<Button variant="ghost size=sm" onClick={handleDownloadResume}>;
                    <Download className="h-3 w-3 mr-1 /> Download;
                    <Download className='h-3 w-3 mr-1 /> Download;
                  </Button>;
                </div>;
              </div>;
            )}<div>;
                <h4 className=text - sm font - medium mb - 1">Your Cover Letter</h4>;
                <p className="text - sm text - muted - foreground>{application.cover_letter}</p>;
              </div>)}
            {application.resume && (<div className=border rounded - md p - 3 bg - muted / 20">;
                <div className="flex justify - between items - center>;
                  <div className=flex items - center">;
                    <FileText className="h - 4 w - 4 mr - 2 text - blue - 500 />;
                    <span className=text - sm font - medium">{application.resume.title || "Resume}</span>;
                  </div>;
                  <Button variant=ghost" size="sm on_click={handleDownloadResume}>;
                    <Download className=h - 3 w - 3 mr - 1" /> Download;
                  </Button>;
                </div>;
              </div>)}{application.match_score && ({application.match_score && (<div>;
                <h4 className=text-sm font-medium mb-1'>Match Score</h4>;
                <div className='flex items-center>;
                  <div className=h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium'>;
                    {application.match_score}%;
                  </div>;
                  <span className='ml-2 text-xs text-muted-foreground>;
                    Relevance to job requirements;
                  </span>                </div>            {application.match_score && (<div>;
            {application.match_score && (<div>;
                <h4 className=text - sm font - medium mb - 1'>Match Score</h4>;
                <div className='flex items - center>;
                  <div className=h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium'>;
                    {application.match_score}%;
                  </div>;
                  <span className='ml - 2 text - xs text - muted - foreground>;
                    Relevance to job requirements;
                  </span>                </div>            {application.match_score && (

            
            {application.match_score && (


              </div>)}

            {application.match_score && (
              <div>
                <h4 className=text-sm font-medium mb-1'>Match Score</h4>
                <div className='flex items-center>
                  <div className=h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium'>
                    {application.match_score}%
                  </div>
                  <span className='ml-2 text-xs text-muted-foreground>
                    Relevance to job requirements
                  </span>                </div>            {application.match_score && (
              <div>
            
            {application.match_score && (
              <div>



              <div>

                <h4 className="text-sm font-medium mb-1>Match Score</h4>
                <div className=flex items-center">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium>
                    {application.match_score}%
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>
                  </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>
              </div>

                  </span>
                </div>
              </div>



import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from lucide-react';
import { ApplicationProgress } from ./ApplicationProgress",
import { toast } from "sonner,
interface ApplicationCardProps {
  application: JobApplication;
}
export function ApplicationCard({ application }: ApplicationCardProps) {
    // This would typically download the resume file;
    toast.info(Resume download functionality will be implemented soon");
  },
    switch (application.status) {
      case "shortlisted: return (;
          <Button variant=default" size="sm>;
                  </span>                </div>            {application.match_score && ({application.match_score && (<div>;
                <h4 className=text-sm font-medium mb-1">Match Score</h4>;
                <div className="flex items-center>;
                  <div className=h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
                    {application.match_score}%;
                  </div>;
                  <span className="ml-2 text-xs text-muted-foreground>Relevance to job requirements</span>;
                  </span>;
                </div>;
              </div>;
import { ApplicationProgress } from ./ApplicationProgress",import { toast } from "sonner,interface ApplicationCardProps  {application: JobApplication;
}export function ApplicationCard() {const [expanded, setExpanded] = useState(false),const handleDownloadResume = () => {// This would typically download the resume file;
    toast.info(Resume download functionality will be implemented soon")},const renderActionButtons = () => {switch (application.status) {case "shortlisted: return (<Button variant=default" size="sm>;
            <Calendar className=h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>;
        ),case "interview:;
        return (<Button variant=default" size="sm>;
            <Calendar className=h-4 w-4 mr-1" /> View Interview Details;
          </Button>;
        ),case "hired:;
        return (<Button variant=secondary" size="sm className=bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;
            <FileText className="h-4 w-4 mr-1 /> View Offer;
          </Button>;
        ),case rejected":;
        return (<Button variant="outline size=sm">;
            <HelpCircle className="h-4 w-4 mr-1 /> View Feedback;
          </Button>;
        )default:;
        return null;
    }
  }return (<Card className=overflow-hidden">;
      <CardHeader className="pb-3>;
        <div className=flex justify-between items-start">;
          <div>;
            <CardTitle>{application.job?.title || "Unknown Job}</CardTitle>;
            <div className=text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;
      <CardContent className="pb-3">;
        <ApplicationProgress status={application.status} className="my-4" />;
        <ApplicationProgress status={application.status} className=my-4" />;


                </div>
              </div>

        {expanded && (;
          <div className="mt-4 space-y-3>;
            {application.cover_letter && (;
              <div>;
                <h4 className=text-sm font-medium mb-1">Your Cover Letter</h4>;
                <p className="text-sm text-muted-foreground>{application.cover_letter}</p>;
              </div>;
            )}



            )}
            {application.match_score && (;
              <div>;
        <ApplicationProgress status={application.status} className=my-4" />;{expanded && (<div className="mt-4 space-y-3>;
            {application.cover_letter && (<div>;
                <h4 className=text-sm font-medium mb-1">Your Cover Letter</h4>;
                <p className="text-sm text-muted-foreground>{application.cover_letter}</p>;
              </div>;
            )})}{application.match_score && (<div>;
                <h4 className=text-sm font-medium mb-1">Match Score</h4>;
                <div className="flex items-center>;
                  <div className=h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
                    {application.match_score}%;
                  </div>;
                  <span className="ml-2 text-xs text-muted-foreground>Relevance to job requirements</span>;
                </div>;
              </div>;
            )}
          </div>;
        )}


      </CardContent>
<CardFooter className='flex flex-col gap-3 pt-0>
        <div className=flex justify-between items-center w-full'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <Button
            variant='ghost
            size=sm'
        )}</CardContent>;
<CardFooter className='flex flex-col gap-3 pt-0>;
        <div className=flex justify-between items-center w-full'>;
          <Button;
            variant='ghost;
            size=sm';
            onClick={() => setExpanded(!expanded)}
          >;
            {expanded ? 'Show Less : Show More'}
          </Button>;
          <div className='flex gap-2>;
            {renderActionButtons()}</div>;
        )}</CardContent>;
      <CardFooter className=flex flex-col gap-3 pt-0">;
        <div className="flex justify-between items-center w-full>;
          <Button variant=ghost" size="sm onClick={() => setExpanded(!expanded)}>;
            {expanded ? Show Less" : "Show More}</Button>;
          <div className=flex gap-2">;
            {renderActionButtons()}
            <Button variant='outline' size='sm' asChild>
            <Button variant=outline' size='sm asChild>
              <Link href={`/jobs/${application.job_id}`}>
                <ExternalLink className=h-4 w-4 mr-1' /> View Job
origin/cursor/automate-test-improve-and-merge-code-2533

          </div>
        )}

      </CardContent>
      
      <CardFooter className="flex flex-col gap-3 pt-0>
        <div className=flex justify-between items-center w-full">
          <Button variant="ghost size=sm" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less : Show More"}



          </Button>
          <div className="flex gap-2>
            {renderActionButtons()}
            <Button 
              variant=outline" 
              size="sm
              asChild
            >
              <Link href={`/jobs/${application.job_id}`}>

                <ExternalLink className=h-4 w-4 mr-1" /> View Job
              </Link>
            </Button>
          </div>
        </div>


        

            <MessageSquare className='h-4 w-4 mr-1 /> Message Client        

        <Button 
          variant="secondary 
          size=sm"
          className="w-full
          asChild
        >
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className=h-4 w-4 mr-1" /> Message Client


          </Link>



        </Button>
      </CardFooter>
    </Card>
  )

            <Button;
              variant="outline;
              size=sm";
              asChild;
            >;
              <Link href={`/jobs/${application.job_id}`}>;
                <ExternalLink className="h-4 w-4 mr-1 /> View Job;
            <Button variant=outline' size='sm asChild>;
              <Link href={`/jobs/${application.job_id}`}>;
                <ExternalLink className=h-4 w-4 mr-1' /> View Job;
              </Link>;
            </Button>;
          </div>;
        </div>;
            <MessageSquare className='h-4 w-4 mr-1 /> Message Client;
        <Button;
          variant=secondary";
          size="sm;
          className=w-full";
          asChild;
        >;
          <Link href={`/messages?jobId=${application.job_id}`}>;
            <MessageSquare className="h-4 w-4 mr-1 /> Message Client;
          </Link>;
        </Button>;
      </CardFooter>;
    </Card>;
  )<Button variant=outline' size='sm asChild>;
              <Link href={`/jobs/${application && application.job_id}`}>;
                <ExternalLink className=h-4 w-4 mr-1' /> View Job              </Link>;
            </Button>;
          </div>;
        </div>;<Button variant='secondary size=sm' className='w-full asChild>;
          <Link href={`/messages?jobId=${application && application.job_id}`}>;
            <MessageSquare className=h-4 w-4 mr-1' /> Message Client          </Link>          </Button>;
          <div className=flex gap-2">;
            {renderActionButtons()}
            <Button;
              variant="outline;
              size=sm";
              asChild>;
              <Link href={`/jobs/${application && application.job_id}`}>;
                <ExternalLink className="h-4 w-4 mr-1 /> View Job;}<div>;
}

              <div>;
                <h4 className=text - sm font - medium mb - 1">Match Score</h4>;
                <div className="flex items - center>;
                  <div className=h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium">;
                    {application.match_score}%;
                  </div>;
                  <span className="ml - 2 text - xs text - muted - foreground>Relevance to job requirements</span>;
                </div>;
              </div>)}
          </div>)}
      </CardContent>;
      <CardFooter className='flex flex - col gap - 3 pt - 0>;
        <div className=flex justify - between items - center w - full'>;
          <Button;
            variant='ghost;
            size=sm';
            on_click={() => set_expanded (!expanded)}
          >;
            {expanded ? 'Show Less : Show More'}
          </Button>;
          <div className='flex gap - 2>;
            {renderActionButtons ()}
            <Button variant=outline' size='sm as_child>;
              <Link href={`/jobs/${application.job_id}`}>;
                <ExternalLink className=h - 4 w - 4 mr - 1' /> View Job              </Link>;
            </Button>;
          </div>;
        </div>;
        <Button variant='secondary size=sm' className='w - full as_child>;
          <Link href={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className=h - 4 w - 4 mr - 1' /> Message Client          </Link>          </Button>;
          <div className=flex gap - 2">;
            {renderActionButtons ()}
            <Button;
              variant="outline;
              size=sm";
              as_child;
            >;
              <Link href={`/jobs/${application.job_id}`}>;
                <ExternalLink className="h - 4 w - 4 mr - 1 /> View Job;
              </Link>;
            </Button>;
          </div>;
        </div>;}</Link>;
        </Button>;
      </CardFooter>;
    </Card>;
  )}
        <Button variant='secondary size=sm' className='w - full as_child>;
          <Link href={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className=h - 4 w - 4 mr - 1' /> Message Client;
        <Button;
          variant=secondary";
          size="sm;
          className=w - full";
          as_child;
        >;
          <Link href={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className="h - 4 w - 4 mr - 1 /> Message Client;
        </Button>;
      </CardFooter>;
    </Card>)default: return (<Card className=overflow - hidden" > <CardHeader className="pb - 3 > <div className=flex justify - between items - start" > <div> </div> </div> <StatusBadge status= {application.status;
}/> </div> </CardHeader> {";
  application.cover letter && (<div> <h4 className="text - sm font - medium mb - 1" >Your Cover Letter</h4> <p className="text - sm text - muted - foreground" > {
  application.cover letter && (<div> <h4 className=text - sm font - medium mb - 1 >Your Cover Letter</h4> <p className="text - sm text - muted - foreground" > {
  application.cover letter;
}</p> </div>);
}</Button> </div> </div>);
}{;
  application.match score && (<div> <h4 className=text - sm font - medium mb - 1" >Match Score</h4> <div className="flex items - center > <div className=h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium" > {
  application.match score ";
}% </div> <span className=ml - 2 text - xs text - muted - foreground >Relevance to job requirements</span> </div> </div>);
}</div>) ";
}</CardContent> <Button variant="outline size=sm" as_child > </Link> </Button> </div> </div> <Button variant="secondary size=sm" className="w - full as_child > </Link> </Button> </CardFooter> </Card>);
};

<Button variant='secondary' size='sm' className='w-full' asChild>
<Button variant='secondary size=sm' className='w-full asChild>
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className=h-4 w-4 mr-1' /> Message Client
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
default: return (<Card className="overflow-hidden" > <CardHeader className=pb-3 > <div className="flex justify-between items-start" > <div> </div> </div> <StatusBadge status= {
  application.status ;
}/> </div> </CardHeader> {;
  application.cover letter && (<div> <h4 className=text-sm font-medium mb-1" >Your Cover Letter</h4> <p className="text-sm text-muted-foreground > {
  application.cover letter ;
}</p> </div>) ;
}</Button> </div> </div>) ;
}{;
  application.match score && (<div> <h4 className="text-sm font-medium mb-1" >Match Score</h4> <div className=flex items-center > <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium" > {
  application.match score ;
}% </div> <span className=ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>) ;
}</div>) ";
}</CardContent> <Button variant=outline size="sm" asChild > </Link> </Button> </div> </div> <Button variant=secondary size="sm" className=w-full asChild > </Link> </Button> </CardFooter> </Card>) ;
}"
origin/cursor/automate-test-improve-and-merge-code-2533
  application.cover letter && (<div> <h4 className="text - sm font - medium mb - 1 >Your Cover Letter</h4> <p className=text - sm text - muted - foreground" > {application.cover letter;
}</p> </div>)}</Button> </div> </div>)}{";
  application.match score && (<div> <h4 className=text - sm font - medium mb - 1 >Match Score</h4> <div className="flex items - center" > <div className=h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium > {application.match score ";
}% </div> <span className="ml - 2 text - xs text - muted - foreground >Relevance to job requirements</span> </div> </div>)}</div>) ;
}</CardContent> <Button variant="outline" size=sm as_child > </Link> </Button> </div> </div> <Button variant="secondary" size=sm className="w - full" as_child > </Link> </Button> </CardFooter> </Card>)};}}<Button variant='secondary size=sm' className='w-full asChild>;
          <Link href={`/messages?jobId=${application.job_id}`}>;
            <MessageSquare className=h-4 w-4 mr-1' /> Message Client;
          </Link>;
        </Button>;
      </CardFooter>;
    </Card>;
  )default: return (<Card className=overflow-hidden" > <CardHeader className="pb-3 > <div className=flex justify-between items-start" > <div> </div> </div> <StatusBadge status= {application.status ;
}/> </div> </CardHeader> {";
  application.cover letter && (<div> <h4 className=text-sm font-medium mb-1 >Your Cover Letter</h4> <p className="text-sm text-muted-foreground" > {application.cover letter ;
}</p> </div>)}</Button> </div> </div>)}{;
  application.match score && (<div> <h4 className=text-sm font-medium mb-1" >Match Score</h4> <div className="flex items-center > <div className=h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium" > {application.match score ";
}% </div> <span className=ml-2 text-xs text-muted-foreground >Relevance to job requirements</span> </div> </div>)}</div>) ";
}</CardContent> <Button variant="outline size=sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary size=sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>)}";
