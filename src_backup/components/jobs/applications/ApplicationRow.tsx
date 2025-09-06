<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { formatDistanceToNow } from "date-fns",
import { Calendar, User, FileText, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict
import { TableRow, TableCell } from "@/components/ui/table",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { StatusBadge } from "./StatusBadge",
import { ScoreBadge } from "./ScoreBadge",
import { ApplicationActions } from "./ApplicationActions",
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import useState
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface ApplicationRowProps {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
import { Button } from "@/components/ui/button",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict
import { TableRow, TableCell } from "@/components/ui/table",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { StatusBadge } from "./StatusBadge",
import { ScoreBadge } from "./ScoreBadge";
import { ApplicationActions } from "./ApplicationActions";
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import useState

interface ApplicationRowProps {
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
  onViewScore: (application: JobApplication) => void
import { Button } from '@/components/ui/button'
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict
import { TableRow, TableCell } from '@/components/ui/table'
import { JobApplication, ApplicationStatus } from '@/types/jobs'
import { StatusBadge } from './StatusBadge'
import { ScoreBadge } from './ScoreBadge'
import { ApplicationActions } from './ApplicationActions'
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState
interface ApplicationRowProps {
origin/cursor/automate-test-improve-and-merge-code-2533
  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
interface ApplicationRowProps {
  application: JobApplication;
  processing_id: string | null;
  onViewApplication: (application_id: string) => Promise < void>;
  onStatusChange: (
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
export function ApplicationRow({

  application
  processingId
  onViewApplication
  onStatusChange
  onViewScore
}: ApplicationRowProps) {
  const [avatarError, setAvatarError] = useState(false)

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

interface ApplicationRowProps {
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,
  onViewScore: (application: JobApplication) => void
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { formatDistanceToNow } from 'date-fns';
import { Calendar, User, FileText, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict;
import { TableRow, TableCell } from '@/components/ui/table';
import { JobApplication, ApplicationStatus } from '@/types/jobs';
import { StatusBadge } from './StatusBadge';
import { ScoreBadge } from './ScoreBadge';
import { ApplicationActions } from './ApplicationActions';
import Image from 'next/image'; // Import next/image;
import React, { useState } from 'react'; // Import useState;

<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
interface ApplicationRowProps {;
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (;
    applicationId: string,;
    newStatus: ApplicationStatus;
  ) => Promise<void>;
  onViewScore: (application: JobApplication) => void;
interface ApplicationRowProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string,) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus,) => Promise<void>,;
  onViewScore: (application: JobApplication,) => void;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}

<<<<<<< HEAD
export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
  onStatusChange,
  onViewScore
}: ApplicationRowProps) {
  const [avatarError, setAvatarError] = useState(false),
  const talentName = application.talent_profile?.full_name || "Unknown",

  const talentName = application.talent_profile?.full_name || 'Unknown'

  return (
  const talentName = application.talent_profile?.full_name |'Unknown'

  const talentName = application.talent_profile?.full_name || 'Unknown'    <TableRow key={application.id}>
=======
export function ApplicationRow(): any ({;
  application,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore,;
}: ApplicationRowProps) {;
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application && application.talent_profile?.full_name || 'Unknown';

<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

  const talentName = application.talent_profile?.full_name || 'Unknown'

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
    applicationId: string
    newStatus: ApplicationStatus
  ) => Promise<void>
  onViewScore: (application: JobApplication) => void
interface ApplicationRowProps {
  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string,) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus,) => Promise<void>
  onViewScore: (application: JobApplication,) => void
}
export function ApplicationRow({
  application;
  processingId;
  onViewApplication;
  onStatusChange;
  onViewScore
}: ApplicationRowProps) {
  const [avatarError, setAvatarError] = useState(false);
  const talentName = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
  const talentName = application.talent_profile?.full_name |'Unknown'

  const talentName = application.talent_profile?.full_name || 'Unknown'
  return (
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
    <TableRow key={application.id}>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <TableCell>
        <div className="flex items-center gap-3">
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
              <Image

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                src={application.talent_profile.profile_picture_url} 
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={36} // Corresponds to h-9 w-9
                className="rounded-full object-cover" // Ensure rounded and object-cover
                onError={() => setAvatarError(true)}
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
                priority={false}
              />


            ) : (
              <User className="h-5 w-5 text-gray-400" />
            )}
<<<<<<< HEAD
          </AvatarPrimitive>
          <div>
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="font-medium">
              {talentName}
            </div>
            <div className="text-xs text-muted-foreground">
              {application.talent_profile?.professional_title || "Talent"}


<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
        </div>
=======
              <Image        </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
        <Button 
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          variant="ghost" 
          size="sm" 
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1"
        >
          <BarChart className="h-4 w-4 mr-1" />

          <ScoreBadge application={application} />
        </Button>
      </TableCell>
      <TableCell>
        {application.resume ? (
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Button variant="ghost" size="sm" asChild>
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-1" /> View
            </Link>

          </Button>
        ) : (
          <span className="text-muted-foreground text-sm">No resume</span>
        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions
<<<<<<< HEAD
=======

import { formatDistanceToNow } from "date-fns",;
import { Calendar, User, FileText, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict;
import { TableRow, TableCell } from "@/components/ui/table",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { StatusBadge } from "./StatusBadge",;
import { ScoreBadge } from "./ScoreBadge",;
import { ApplicationActions } from "./ApplicationActions",;
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import useState;
interface ApplicationRowProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
}
;
export function ApplicationRow({;
  application,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
}: ApplicationRowProps) {;
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talent_profile?.full_name || "Unknown";
  return (;
    <TableRow key={application.id}>;
      <TableCell>;
        <div className="flex items-center gap-3">;
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (;
              <Image;
                src={application.talent_profile.profile_picture_url} ;
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px);
                height={36} // Corresponds to h-9 w-9;
                className="rounded-full object-cover" // Ensure rounded and object-cover;
                onError={() => setAvatarError(true)}
                priority={false}
              />;
            ) : (;
              <User className="h-5 w-5 text-gray-400" />;
            )}
          </AvatarPrimitive>;
          <div>;
            <div className='font-medium'>{talentName}</div>;
            <div className='text-xs text-muted-foreground'>;
              {application && application.talent_profile?.professional_title || 'Talent'}
    application_id: string,
    new_status: ApplicationStatus) => Promise < void>;
  onViewScore: (application: JobApplication) => void;
interface ApplicationRowProps {
  application: JobApplication,
  processing_id: string | null,
  onViewApplication: (application_id: string, ) => Promise < void>,
  onStatusChange: (application_id: string, new_status: ApplicationStatus, ) => Promise < void>,
  onViewScore: (application: JobApplication, ) => void;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { formatDistanceToNow } from "date-fns",;
import { Calendar, User, FileText, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict;
import { TableRow, TableCell } from "@/components/ui/table",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { StatusBadge } from "./StatusBadge",;
import { ScoreBadge } from "./ScoreBadge",;
import { ApplicationActions } from "./ApplicationActions",;
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import useState;
interface ApplicationRowProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
}
;
export function ApplicationRow({;
  application,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
}: ApplicationRowProps) {;
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talent_profile?.full_name || "Unknown";
  return (;
    <TableRow key={application.id}>;
      <TableCell>;
        <div className="flex items-center gap-3">;
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (;
              <Image;
                src={application.talent_profile.profile_picture_url} ;
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px);
                height={36} // Corresponds to h-9 w-9;
                className="rounded-full object-cover" // Ensure rounded and object-cover;
                onError={() => setAvatarError(true)}
                priority={false}
              />;
            ) : (;
              <User className="h-5 w-5 text-gray-400" />;
            )}
          </AvatarPrimitive>;
          <div>;
            <div className="font-medium">;
              {talentName}
            </div>;
            <div className="text-xs text-muted-foreground">;
              {application.talent_profile?.professional_title || "Talent"}
            </div>;
          </div>;
        </div>;
      </TableCell>;
      <TableCell>;
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD
        <div className="flex items-center gap-1">;
          <Calendar className="h-4 w-4 text-muted-foreground" />;
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>;
=======

        <div className='flex items - center gap - 1'>;
          <Calendar className='h - 4 w - 4 text - muted - foreground' />;
          <span>;
            {formatDistanceToNow (new Date (application.created_at), {
              add_suffix: true,

            })}
          </span>;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
        </div>;
      </TableCell>;
      <TableCell>;
        <StatusBadge status={application.status} />;
      </TableCell>;
      <TableCell>;
        <Button;
          variant="ghost";
          size="sm";
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1";
        >;
          <BarChart className="h-4 w-4 mr-1" />;
=======

<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
          <ScoreBadge application={application} />;
        </Button>;
      </TableCell>;
      <TableCell>;
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        {application.resume ? (;
          <Button variant="ghost" size="sm" asChild>;
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;
              <FileText className="h-4 w-4 mr-1" /> View;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

              href={application && application.resume.file_url || '#'}

              target='_blank'
              rel='noopener noreferrer'>;
              <FileText className='h-4 w-4 mr-1' /> View;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
            </a>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </Button>;
        ) : (;
          <span className="text-muted-foreground text-sm">No resume</span>;
        )}
      </TableCell>;
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      <TableCell className="text-right">;
        <ApplicationActions;
          application={application}
          processingId={processingId}
          onViewApplication={onViewApplication}
          onStatusChange={onStatusChange}
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
      <TableCell className='text-right'>;
        <ApplicationActions
          application = {application,}
          processingId = {processingId,}
          onViewApplication = {onViewApplication,}
          onStatusChange = {onStatusChange,}
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        />;
      </TableCell>;
    </TableRow>;
  );
}
<<<<<<< HEAD
=======

        {application.resume ? (
          <Button variant='ghost' size='sm' as_child>;
            <a;
              href={application.resume.file_url || '#'}
              target='_blank';
              rel='noopener noreferrer';
            >;
              <FileText className='h - 4 w - 4 mr - 1' /> View;
            </a>;
          </Button>) : (
          <span className='text - muted - foreground text - sm'>No resume</span>)}
      </TableCell>;
      <TableCell className='text - right'>;
        <ApplicationActions;
          application = {application, }
          processing_id = {processing_id, }
          onViewApplication = {onViewApplication, }
          onStatusChange = {onStatusChange, }
        />;
      </TableCell>;
    </TableRow>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
        />
      </TableCell>
    </TableRow>
  );
<<<<<<< HEAD:src/components/jobs/applications/ApplicationRow.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationRow.tsx
