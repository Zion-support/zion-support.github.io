<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
application: JobApplication
=======
application: JobApplication;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react'
import Link from "next/link",
import { StatusBadge } from "./StatusBadge",
import { ApplicationProgress } from "./ApplicationProgress",
import { toast } from "sonner",
interface ApplicationCardProps {
  application: JobApplication
=======
import { useState } from 'react';
import { formatDistanceToNow } from 'date - fns';
import { JobApplication } from '@/types / jobs';
import { Button } from '@/components / ui / button';
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
import {
=======
import { useState } from 'react';'
import { formatDistanceToNow } from 'date - fns';'
import { JobApplication } from '@/types / jobs';'
import { Button } from '@/components / ui / button';
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,';
} from '@/components / ui / card';
  FileText,
  MessageSquare,
  HelpCircle,
  Calendar,
  ExternalLink,
  Download,'
} from 'lucide-react';'
import Link from 'next / link';'
import { StatusBadge } from './StatusBadge';'
import { ApplicationProgress } from './ApplicationProgress';'
import { toast } from 'sonner';'
import { useState  } from './react';'
import { formatDistanceToNow  } from './date - fns';'
import { JobApplication  } from '@/types / jobs';'
import { Button  } from '@/components / ui / button';'
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';'
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react'; import Link from './next / link';'
import { StatusBadge  } from './StatusBadge';'
import { ApplicationProgress  } from './ApplicationProgress';'
import { toast  } from './sonner';
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx

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
origin/cursor/automate-test-improve-and-merge-code-2533
interface ApplicationCardProps {
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx

<<<<<<< HEAD
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file
<<<<<<< HEAD

  const [expanded, setExpanded] = useState(false)
  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
  }
  const renderActionButtons = () =>: any {
    switch (application.status) {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
=======
interface ApplicationCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
  application: JobApplication;
export /**;
 * ApplicationCard - Function description;
 */
function ApplicationCard() {}
  const [ expanded, set_expanded ] = useState (false),
  const handleDownloadResume = () =>: any {}
    // This would typically download the resume file;'
    toast.info ('Resume download functionality will be implemented soon') }
  const renderActionButtons = () =>: any {}
    switch (application.status) {interface ApplicationCardProps {}
  application: JobApplication;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export /**;
 * ApplicationCard - Function description;
 */
function ApplicationCard() {}
  const [expanded, set_expanded] = useState (false);
  const handleDownloadResume = () =>: any {}
    // This would typically download the resume file;
    toast.info ("Resume download functionality will be implemented soon");

<<<<<<< HEAD
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),
=======
  }
  const renderActionButtons = () => {}
    switch (application.status) {'
      case 'shortlisted':;
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
    toast.info('Resume download functionality will be implemented soon') }
  const renderActionButtons = () => {
    switch (application.status) {interface ApplicationCardProps {
  application: JobApplication
}
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const handleDownloadResume = null;
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
        return (
          <Button variant='default' size='sm'>;
            <Calendar className='h - 4 w - 4 mr - 1' /> Prepare for Interview);
      case 'interview':;
        return (
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
  },
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======

          <Button variant='default' size='sm'>;
=======
        return ('
          <Button variant='default' size='sm'>;'
            <Calendar className='h - 4 w - 4 mr - 1' /> Prepare for Interview);'
      case 'interview':;
        return (
'
          <Button variant='default' size='sm'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
            <Calendar className='h - 4 w - 4 mr - 1' /> View Interview Details;
          </Button>);'
      case 'hired':;
          >;'
            <FileText className='h - 4 w - 4 mr - 1' /> View Offer;
          </Button>);'
      case 'rejected':;

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
        return (
          <Button variant='outline' size='sm'>
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback
=======
        return ('
          <Button variant='outline' size='sm'>'
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
          </Button>
        )
      default:
        return null;
    }
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
  const renderActionButtons = () => {
    switch (application.status) {
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  }
  const renderActionButtons = () => {
    switch (application.status) {
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
      case "shortlisted": return (
          <Button variant="default" size="sm">
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview
          </Button>
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
=======
        ),
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx

=======
  const renderActionButtons = () => {}
    switch (application.status) {"
      case "shortlisted": return ("
          <Button variant="default" size="sm">"
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>
        ),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
      case "interview":
        return ("
          <Button variant="default" size="sm">"
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
          </Button>
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
=======
        ),
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx

=======
        ),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
      case "hired":
        return ("
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">"
            <FileText className="h-4 w-4 mr-1" /> View Offer;
          </Button>
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
=======
        ),
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx

=======
        ),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
      case "rejected":
        return ("
          <Button variant="outline" size="sm">"
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
          </Button>
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
=======
        ),
      default:
        return null;
    }
  },

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
=======
  return ("
    <Card className="overflow-hidden">"
      <CardHeader className="pb-3">"
        <div className="flex justify-between items-start">
          <div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>
<<<<<<< HEAD
=======

export function ApplicationCard({ application }: ApplicationCardProps) {}
  const [expanded, setExpanded] = useState(false),

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
  const handleDownloadResume = () => {
    // This would typically download the resume file

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  const handleDownloadResume = () => {};
    // This would typically download the resume file;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
            <div className="text-sm text-muted-foreground mt-1">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
            <CardTitle>{application.job?.title |'Unknown Job'}</CardTitle>
            <div className='text-sm text-muted-foreground mt-1'>
              Applied{' '}
              {formatDistanceToNow(new Date(application.created_at), {
                addSuffix: true,
              })}
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
          <StatusBadge status={application.status} />
        </div>
      </CardHeader>
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx

    <Card className='overflow - hidden'>;
      <CardHeader className='pb - 3'>;
=======
'
    <Card className='overflow - hidden'>;'
      <CardHeader className='pb - 3'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
        <div className='flex justify - between items - start'>;
          <div>;'
            <CardTitle>{application.job?.title || 'Unknown Job'}</CardTitle>;'
            <div className='text - sm text - muted - foreground mt - 1'>;'
              Applied{' '}
              {formatDistanceToNow (new Date (application.created_at), {}
                add_suffix: true,"
              })}            </div>            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>;"
            <div className="text - sm text - muted - foreground mt - 1">;
              Applied {formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;'
      <CardContent className='pb - 3'>;'
        <ApplicationProgress status={application.status} className='my - 4' />;


<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
      
      <CardContent className="pb-3">
=======
      "
      <CardContent className="pb-3">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
        <ApplicationProgress status={application.status} className="my-4" />
        
<<<<<<< HEAD
        {expanded && (
          <div className="mt-4 space-y-3">
            {application.cover_letter && (
              <div>
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>
              </div>
            )}
            
            {application.resume && (
              <div className="border rounded-md p-3 bg-muted/20">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>
                  </div>
=======
=======

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
      <CardContent className="pb-3">
        <ApplicationProgress status={application.status} className="my-4" />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<CardContent className='pb-3'>
        <ApplicationProgress status={application.status} className='my-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
        {expanded && (
=======
        {expanded && ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
          <div className='mt - 4 space - y-3'>;
            {application.cover_letter && (
              <div>;'
                <h4 className='text - sm font - medium mb - 1'>Your Cover Letter</h4>;'
                <p className='text - sm text - muted - foreground'>;
                  {application.cover_letter}

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { JobApplication } from '@/types/jobs';
=======
'
import { useState } from 'react';'
import { formatDistanceToNow } from 'date-fns';'
import { JobApplication } from '@/types/jobs';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
  CardTitle,;'
} from '@/components/ui/card';
import {;
  FileText,;
  MessageSquare,;
  HelpCircle,;
  Calendar,;
  ExternalLink,;
  Download,;'
} from 'lucide-react';'
import Link from 'next/link';'
import { StatusBadge } from './StatusBadge';'
import { ApplicationProgress } from './ApplicationProgress';'
import { toast } from 'sonner';
"
import { useState } from "react";"
import { formatDistanceToNow } from "date-fns";"
import { JobApplication } from "@/types/jobs";"
import { Button } from "@/components/ui/button";"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";'"
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react';import Link from "next/link";"
import { StatusBadge } from "./StatusBadge";"
import { ApplicationProgress } from "./ApplicationProgress";"
import { toast } from "sonner";
interface ApplicationCardProps {;
  application: JobApplication;

export function ApplicationCard(): any ({ application }: ApplicationCardProps) {;

  const [ expanded, setExpanded ] = useState(false),;

  const handleDownloadResume = () => {;
    // This would typically download the resume file;'
    toast && toast.info('Resume download functionality will be implemented soon');  };

  const renderActionButtons = () => {;
    switch (application && application.status) {interface ApplicationCardProps {;
  application: JobApplication;
}

export function ApplicationCard(): any ({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);

  const handleDownloadResume = () => {;
    // This would typically download the resume file;"
    toast && toast.info("Resume download functionality will be implemented soon");
  };

  const renderActionButtons = () => {;
    switch (application && application.status) {;'
      case 'shortlisted':;
        return ('
          <Button variant='default' size='sm'>;'
            <Calendar className='h-4 w-4 mr-1' /> Prepare for Interview;
        );'
      case 'interview':;
        return ('
          <Button variant='default' size='sm'>;'
            <Calendar className='h-4 w-4 mr-1' /> View Interview Details;
          </Button>;
        );'
      case 'hired':;

          >;'
            <FileText className='h-4 w-4 mr-1' /> View Offer;
          </Button>;
        );'
      case 'rejected':;
        return ('
          <Button variant='outline' size='sm'>;'
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback;
          </Button>;
        );
      default:;
        return null;
    }
  };

  return ('
    <Card className='overflow-hidden'>;'
      <CardHeader className='pb-3'>;'
        <div className='flex justify-between items-start'>;
          <div>;'
            <CardTitle>{application && application.job?.title || 'Unknown Job'}</CardTitle>;'
            <div className='text-sm text-muted-foreground mt-1'>;'
              Applied{' '}
              {formatDistanceToNow(new Date(application && application.created_at), {;
                addSuffix: true,;"
              })}            </div>            <CardTitle>{application && application.job?.title || "Unknown Job"}</CardTitle>;"
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application && application.status} />;
        </div>;
      </CardHeader>;
'
      <CardContent className='pb-3'>;'
        <ApplicationProgress status={application && application.status} className='my-4' />;

        {expanded && (;'
          <div className='mt-4 space-y-3'>;
            {application && application.cover_letter && (;
              <div>;'
                <h4 className='text-sm font-medium mb-1'>Your Cover Letter</h4>;'
                <p className='text-sm text-muted-foreground'>;
                  {application && application.cover_letter}
                </p>;
              </div>;
            )}

            {application && application.resume && (;'
              <div className='border rounded-md p-3 bg-muted/20'>;'
                <div className='flex justify-between items-center'>;'
                  <div className='flex items-center'>;'
                    <FileText className='h-4 w-4 mr-2 text-blue-500' />;'
                    <span className='text-sm font-medium'>;'
                      {application && application.resume.title || 'Resume'}
                    </span>;
                  </div>;
                  <Button'
                    variant='ghost''
                    size='sm'
                    onClick={handleDownloadResume}
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
                  >
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
=======
                  >'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
                    <Download className='h-3 w-3 mr-1' /> Download                  </Button>
                </div>
              </div>
            )}
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
      
      <CardContent className="pb-3">
=======
      "
      <CardContent className="pb-3">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
        <ApplicationProgress status={application.status} className="my-4" />
        

                </p>;
              </div>)}
            {application.resume && ('
              <div className='border rounded - md p - 3 bg - muted / 20'>;'
                <div className='flex justify - between items - center'>;'
                  <div className='flex items - center'>;'
                    <FileText className='h - 4 w - 4 mr - 2 text - blue - 500' />;'
                    <span className='text - sm font - medium'>;'
                      {application.resume.title || 'Resume'}
                    </span>;
                  </div>;
                  <Button;'
                    variant='ghost';'
                    size='sm';
                    on_click={handleDownloadResume}
                  >;'
                    <Download className='h - 3 w - 3 mr - 1' /> Download                  </Button>;
                </div>;
              </div>)}
        {expanded && ("
          <div className="mt-4 space-y-3">
            {application.cover_letter && (



<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx

<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
                    <Download className="h-3 w-3 mr-1" /> Download
                    <Download className='h-3 w-3 mr-1' /> Download
origin/cursor/automate-test-improve-and-merge-code-2533
=======
"
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>"
                    <Download className="h-3 w-3 mr-1" /> Download;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
                  </Button>
                </div>
              </div>
            )}
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

              <div>;"
                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;"
                <p className="text - sm text - muted - foreground">{application.cover_letter}</p>;
              </div>)}
            {application.resume && ("
              <div className="border rounded - md p - 3 bg - muted / 20">;"
                <div className="flex justify - between items - center">;"
                  <div className="flex items - center">;"
                    <FileText className="h - 4 w - 4 mr - 2 text - blue - 500" />;"
                    <span className="text - sm font - medium">{application.resume.title || "Resume"}</span>;
                  </div>;"
                  <Button variant="ghost" size="sm" on_click={handleDownloadResume}>;"
                    <Download className="h - 3 w - 3 mr - 1" /> Download;
                  </Button>;
                </div>;
              </div>)}

<<<<<<< HEAD



            {application.match_score && (
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
{application.match_score && (
origin/cursor/automate-test-improve-and-merge-code-2533
              <div>
                <h4 className='text-sm font-medium mb-1'>Match Score</h4>
                <div className='flex items-center'>
                  <div className='h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium'>
                    {application.match_score}%
                  </div>
                  <span className='ml-2 text-xs text-muted-foreground'>
                    Relevance to job requirements
              <div>;
                <h4 className='text - sm font - medium mb - 1'>Match Score</h4>;
                <div className='flex items - center'>;
=======
              <div>;'
                <h4 className='text - sm font - medium mb - 1'>Match Score</h4>;'
                <div className='flex items - center'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
                  <div className='h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium'>;
                    {application.match_score}%;
                  </div>;'
                  <span className='ml - 2 text - xs text - muted - foreground'>;
                    Relevance to job requirements;
                  </span>                </div>            {application.match_score && (

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            {application.match_score && (
<<<<<<< HEAD
=======

<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <div>
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
              <div>

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <h4 className="text-sm font-medium mb-1">Match Score</h4>
                <div className="flex items-center">
=======


"
                <h4 className="text-sm font-medium mb-1">Match Score</h4>"
                <div className="flex items-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">
                    {application.match_score}%
                  </div>"
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>
                  </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>
              </div>
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react';
import Link from "next/link",;
import { StatusBadge } from "./StatusBadge",;
import { ApplicationProgress } from "./ApplicationProgress",;
=======
"
import { useState } from "react",;"
import { formatDistanceToNow } from "date-fns",;"
import { JobApplication } from "@/types/jobs",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;'
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react';"
import Link from "next/link",;"
import { StatusBadge } from "./StatusBadge",;"
import { ApplicationProgress } from "./ApplicationProgress",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
import { toast } from "sonner",;
interface ApplicationCardProps {;
  application: JobApplication;
}
;
export function ApplicationCard() { return null; }
  },;
  const renderActionButtons = () => {;
    switch (application.status) {;"
      case "shortlisted": return (;"
          <Button variant="default" size="sm">;"
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>;
        ),;"
      case "interview":;
        return (;"
          <Button variant="default" size="sm">;"
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
          </Button>;
        ),;"
      case "hired":;
        return (;"
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;"
            <FileText className="h-4 w-4 mr-1" /> View Offer;
          </Button>;
        ),;"
      case "rejected":;
        return (;"
          <Button variant="outline" size="sm">;"
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
          </Button>;
        );
      default:;
        return null;
    }
  };
  return (;"
    <Card className="overflow-hidden">;"
      <CardHeader className="pb-3">;"
        <div className="flex justify-between items-start">;
          <div>;"
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>;"
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;"
      <CardContent className="pb-3">;"
        <ApplicationProgress status={application.status} className="my-4" />;
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
        {expanded && (;
=======
        {expanded && (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
          <div className="mt-4 space-y-3">;
            {application.cover_letter && (;
              <div>;"
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;"
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>;
              </div>;
            )}
<<<<<<< HEAD
;
            {application.resume && (;
              <div className="border rounded-md p-3 bg-muted/20">;
                <div className="flex justify-between items-center">;
                  <div className="flex items-center">;
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />;
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
                  </div>;
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>;
                    <Download className="h-3 w-3 mr-1" /> Download;
                  </Button>;
                </div>;
              </div>;
=======

<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
            )}
;
            {application.match_score && (;
              <div>;"
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;"
                <div className="flex items-center">;"
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
                    {application.match_score}%;
                  </div>;"
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;
                </div>;
              </div>;
            )}
          </div>;
        )}
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
      </CardContent>
<CardFooter className='flex flex-col gap-3 pt-0'>
        <div className='flex justify-between items-center w-full'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <Button
            variant='ghost'
=======
          <Button'
            variant='ghost''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
            size='sm'
            onClick={() => setExpanded(!expanded)}
          >;'
            {expanded ? 'Show Less' : 'Show More'}
          </Button>;'
          <div className='flex gap-2'>;
            {renderActionButtons()}
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD

          </div>
        )}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </CardContent>
      "
      <CardFooter className="flex flex-col gap-3 pt-0">"
        <div className="flex justify-between items-center w-full">"
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>"
            {expanded ? "Show Less" : "Show More"}



<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          </Button>
=======
          </Button>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
          <div className="flex gap-2">
            {renderActionButtons()}
            <Button "
              variant="outline" "
              size="sm"
              asChild;
            >
              <Link href={`/jobs/${application.job_id}`}>
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <ExternalLink className="h-4 w-4 mr-1" /> View Job
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
            <Button variant='outline' size='sm' asChild>
              <Link href={`/jobs/${application.job_id}`}>
                <ExternalLink className='h-4 w-4 mr-1' /> View Job
origin/cursor/automate-test-improve-and-merge-code-2533
=======


"
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
              </Link>
            </Button>
          </div>
        </div>
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx

<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======


        

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
        
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client        
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
        <Button 
          variant="secondary" 
          size="sm"
          className="w-full"
          asChild
        >
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
=======

=======


=======
        '
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client;
        <Button "
          variant="secondary" "
          size="sm""
          className="w-full"
          asChild;
        >`
          <Link href={`/messages?jobId=${application.job_id}`}>"
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
          </Link>



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
        </Button>
      </CardFooter>
    </Card>
  )
'
            <Button variant='outline' size='sm' asChild>;`
              <Link href={`/jobs/${application && application.job_id}`}>;'
                <ExternalLink className='h-4 w-4 mr-1' /> View Job              </Link>;
            </Button>;
          </div>;
        </div>;
'
        <Button variant='secondary' size='sm' className='w-full' asChild>;`
          <Link href={`/messages?jobId=${application && application.job_id}`}>;'
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client          </Link>          </Button>;"
          <div className="flex gap-2">;
            {renderActionButtons()}
            <Button"
              variant="outline" "
              size="sm"
              asChild>;`
              <Link href={`/jobs/${application && application.job_id}`}>;"
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;

}
;

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
              <div>;
                <h4 className="text - sm font - medium mb - 1">Match Score</h4>;
                <div className="flex items - center">;
=======

              <div>;"
                <h4 className="text - sm font - medium mb - 1">Match Score</h4>;"
                <div className="flex items - center">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
                  <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium">;
                    {application.match_score}%;
                  </div>;"
                  <span className="ml - 2 text - xs text - muted - foreground">Relevance to job requirements</span>;
                </div>;
              </div>)}
          </div>)}
      </CardContent>;'
      <CardFooter className='flex flex - col gap - 3 pt - 0'>;'
        <div className='flex justify - between items - center w - full'>;
          <Button;'
            variant='ghost';'
            size='sm';
            on_click={() => set_expanded (!expanded)}
          >;'
            {expanded ? 'Show Less' : 'Show More'}
          </Button>;'
          <div className='flex gap - 2'>;
            {renderActionButtons ()}'
            <Button variant='outline' size='sm' as_child>;`
              <Link href={`/jobs/${application.job_id}`}>;'
                <ExternalLink className='h - 4 w - 4 mr - 1' /> View Job              </Link>;
            </Button>;
          </div>;
        </div>;'
        <Button variant='secondary' size='sm' className='w - full' as_child>;`
          <Link href={`/messages?job_id=${application.job_id}`}>;'
            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client          </Link>          </Button>;"
          <div className="flex gap - 2">;
            {renderActionButtons ()}
            <Button;"
              variant="outline";"
              size="sm";
              as_child;
            >;`
              <Link href={`/jobs/${application.job_id}`}>;"
                <ExternalLink className="h - 4 w - 4 mr - 1" /> View Job;
              </Link>;
            </Button>;
          </div>;
        </div>;

}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </Link>
        </Button>
      </CardFooter>
    </Card>
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
  )
}
<<<<<<< HEAD
;
=======
        <Button variant='secondary' size='sm' className='w - full' as_child>;
          <Link href={`/messages?job_id=${application.job_id}`}>;
=======
  );
}'
        <Button variant='secondary' size='sm' className='w - full' as_child>;`
          <Link href={`/messages?job_id=${application.job_id}`}>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client;
        <Button;"
          variant="secondary";"
          size="sm";"
          className="w - full";
          as_child;
        >;`
          <Link href={`/messages?job_id=${application.job_id}`}>;"
            <MessageSquare className="h - 4 w - 4 mr - 1" /> Message Client;
        </Button>;
      </CardFooter>;
    </Card>);"
default: return (<Card className="overflow - hidden" > <CardHeader className="pb - 3" > <div className="flex justify - between items - start" > <div> </div> </div> <StatusBadge status= {}
  application.status;"
}/> </div> </CardHeader> {";"
  application.cover letter && (<div> <h4 className="text - sm font - medium mb - 1" >Your Cover Letter</h4> <p className="text - sm text - muted - foreground" > {}
  application.cover letter;
}</p> </div>);
}</Button> </div> </div>);"
}{";"
  application.match score && (<div> <h4 className="text - sm font - medium mb - 1" >Match Score</h4> <div className="flex items - center" > <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium" > {"
  application.match score ";"
}% </div> <span className="ml - 2 text - xs text - muted - foreground" >Relevance to job requirements</span> </div> </div>);"
}</div>) ";"
}</CardContent> <Button variant="outline" size="sm" as_child > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w - full" as_child > </Link> </Button> </CardFooter> </Card>);"
}";
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
<Button variant='secondary' size='sm' className='w-full' asChild>
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
default: return (<Card className="overflow-hidden" > <CardHeader className="pb-3" > <div className="flex justify-between items-start" > <div> </div> </div> <StatusBadge status= {;
  application.status ;
}/> </div> </CardHeader> {";
  application.cover letter && (<div> <h4 className="text-sm font-medium mb-1" >Your Cover Letter</h4> <p className="text-sm text-muted-foreground" > {;
  application.cover letter ;
}</p> </div>) ;
}</Button> </div> </div>) ;
}{";
  application.match score && (<div> <h4 className="text-sm font-medium mb-1" >Match Score</h4> <div className="flex items-center" > <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium" > {;
  application.match score ";
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>) ;
}</div>) ";
}</CardContent> <Button variant="outline" size="sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>) ;
}"
<<<<<<< HEAD:src/components/jobs/applications/ApplicationCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationCard.tsx
=======
}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationCard.tsx
