<<<<<<< HEAD:src/components/jobs/applications/ApplicationActions.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationActions.tsx
return (
    <div className='flex items-center justify-end gap-2'>;
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx

import Link from "next/link";
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu",
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from "@/types/jobs";
interface ApplicationActionsProps {
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}

export function ApplicationActions({
  application;
  processingId;
  onViewApplication;
  onStatusChange
}: ApplicationActionsProps) {
  return (
    <div className='flex items-center justify-end gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
      <Button
        variant='outline'
=======
      <Button'
        variant='outline''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
        size='sm'

<<<<<<< HEAD
=======
        onClick={() => onViewApplication(application && application.id)}
        disabled={!!application && application.viewed_at}    <div className="flex items-center justify-end gap-2">;
      <Button"
        variant="outline" "
        size="sm" 
        onClick = {(,) => onViewApplication(application && application.id),}
        disabled = {!!application && application.viewed_at,}
      >;'
        <Eye className='h-4 w-4' />;
      </Button>;

      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;

          <Button'
            variant='outline''
            size='sm'
            disabled={processingId === application.id}          >
            {processingId === application.id ? ('
              <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
              <>'
                Status <ChevronDown className='h-4 w-4 ml-1' />
              </>
            )}
          </Button>
        </DropdownMenuTrigger>'
        <DropdownMenuContent align='end'>
          <DropdownMenuItem'
            onClick={() => onStatusChange(application.id, 'shortlisted')}
          >
            Shortlist;
          </DropdownMenuItem>
          <DropdownMenuItem'
            onClick={() => onStatusChange(application.id, 'interview')}
          >
            Schedule Interview;
          </DropdownMenuItem>
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx
          <DropdownMenuItem

            onClick={() => onStatusChange(application.id, 'rejected')}
<<<<<<< HEAD:src/components/jobs/applications/ApplicationActions.tsx
<<<<<<< HEAD
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
          <DropdownMenuItem;
'
            onClick={() => onStatusChange(application.id, 'rejected')}'"
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
import Link from "next/link",
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger"
} from "@/components/ui/dropdown-menu","
import { Button } from "@/components/ui/button",'
import { Eye, ChevronDown, Loader2 } from 'lucide-react'"
import { JobApplication, ApplicationStatus } from "@/types/jobs",

interface ApplicationActionsProps {}
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx
export function ApplicationActions({
  application,
  processingId,
  onViewApplication,
  onStatusChange
}: ApplicationActionsProps) {
  return (
=======
export function ApplicationActions({};
  application;
  processingId;
  onViewApplication;
  onStatusChange;
}: ApplicationActionsProps) {}
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
    <div className="flex items-center justify-end gap-2">
      <Button "
        variant="outline" "
        size="sm" 
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}
      >"
        <Eye className="h-4 w-4" />
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button "
            variant="outline" "
            size="sm"
            disabled={processingId === application.id}
          >
            {processingId === application.id ? ("
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : ("
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>
            )}
          </Button>
        </DropdownMenuTrigger>"
        <DropdownMenuContent align="end">
          <DropdownMenuItem "
            onClick={() => onStatusChange(application.id, "shortlisted")}
          >
            Shortlist;
          </DropdownMenuItem>
          <DropdownMenuItem "
            onClick={() => onStatusChange(application.id, "interview")}
          >
            Schedule Interview;
          </DropdownMenuItem>
          <DropdownMenuItem "
            onClick={() => onStatusChange(application.id, "hired")}
          >
            Hire;
          </DropdownMenuItem>
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, "rejected")}
=======
          <DropdownMenuItem"
            onClick={() => onStatusChange(application.id, "rejected")}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
            className="text-red-600"
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationActions.tsx
            className='text-red-600'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            Reject
=======

            Reject;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
<<<<<<< HEAD:src/components/jobs/applications/ApplicationActions.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


      

      
      


<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationActions.tsx
      <Button 
        variant="default" 
=======
      <Button "
        variant="default" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
        size="sm"
        asChild;
      >
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx
<<<<<<< HEAD
        <Link href={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  )
import Link from "next/link",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",;
import { Button } from "@/components/ui/button",;
=======

=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
            onClick={() => onStatusChange(application && application.id, 'hired')}          >;
            Shortlist;
          </DropdownMenuItem>;
          <DropdownMenuItem"
            onClick = {() => onStatusChange(application && application.id, "interview"),}          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem"
            onClick = {() => onStatusChange(application && application.id, "hired"),}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
'
            onClick={() => onStatusChange(application && application.id, 'rejected')}'"
            className='text-red-600'          >            onClick={() => onStatusChange(application && application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem"
            onClick={() => onStatusChange(application && application.id, "rejected")}"
            className="text-red-600";
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { Button } from '@/components / ui / button';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Eye, ChevronDown, Loader2 } from 'lucide-react';
=======
'
import Link from 'next / link';
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,';
} from '@/components / ui / dropdown - menu';'
import { Button } from '@/components / ui / button';'
import { Eye, ChevronDown, Loader2 } from 'lucide-react';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
interface ApplicationActionsProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
}
;
export function ApplicationActions() { return null; }
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}
      >;"
        <Eye className="h-4 w-4" />;
      </Button>;
      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;
          <Button;"
            variant="outline";"
            size="sm";
            disabled={processingId === application.id}
          >;
            {processingId === application.id ? (;"
              <Loader2 className="h-4 w-4 animate-spin" />;
            ) : (;"
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}
          </Button>;
        </DropdownMenuTrigger>;"
        <DropdownMenuContent align="end">;
          <DropdownMenuItem;"
            onClick={() => onStatusChange(application.id, "shortlisted")}
          >;
            Shortlist;
          </DropdownMenuItem>;
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx
          <DropdownMenuItem;
<<<<<<< HEAD:src/components/jobs/applications/ApplicationActions.tsx
<<<<<<< HEAD
=======
          <DropdownMenuItem;"
            onClick={() => onStatusChange(application.id, "interview")}
          >;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;"
            onClick={() => onStatusChange(application.id, "hired")}
=======
=======
            onClick={() => onStatusChange(application.id, "interview")}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationActions.tsx

          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD:src/components/jobs/applications/ApplicationActions.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
            onClick={() => onStatusChange(application.id, "hired")}

          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;'
            on_click={() => onStatusChange (application.id, 'rejected')}'"
            className='text - red - 600'          >            on_click={() => onStatusChange (application.id, "hired")}
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;"
            on_click={() => onStatusChange (application.id, "rejected")}"
            className="text - red - 600";


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationActions.tsx
          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
<<<<<<< HEAD
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
          >;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

          >;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
<<<<<<< HEAD:src/components/jobs/applications/ApplicationActions.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      <Button;
        variant="default";
        size="sm";
        asChild;
      >;
        <Link href={`/messages?talentId=${application.talent_id}`}>;
          Contact;
        </Link>;
      </Button>;
    </div>;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationActions.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  );
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx
}
<<<<<<< HEAD
;
=======
=======
}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
      <Button variant='default' size='sm' as_child>        <Link href={`/messages?talent_id=${application.talent_id}`}>;
      <Button;"
        variant="default";"
        size="sm";
        as_child;
      >;
          Contact;
        </Link>;
      </Button>;
    </div>);
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationActions.tsx
}
<<<<<<< HEAD:src/components/jobs/applications/ApplicationActions.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationActions.tsx
<Button variant='default' size='sm' asChild>
        <Link href={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  );
}
<<<<<<< HEAD:src/components/jobs/applications/ApplicationActions.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationActions.tsx
=======
}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationActions.tsx
