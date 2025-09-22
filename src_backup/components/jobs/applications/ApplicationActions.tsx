:src/components/jobs/applications/ApplicationActions.tsx
return (
    <div className='flex items-center justify-end gap-2'>;
:src_backup/components/jobs/applications/ApplicationActions.tsx

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
        size='sm'


          <DropdownMenuItem;
'
            onClick={() => onStatusChange(application.id, 'rejected')}'"
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}
"
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

:src_backup/components/jobs/applications/ApplicationActions.tsx
export function ApplicationActions({
  application,
  processingId,
  onViewApplication,
  onStatusChange
}: ApplicationActionsProps) {
  return (
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
:src_backup/components/jobs/applications/ApplicationActions.tsx
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600"
            className='text-red-600'
origin/cursor/automate-test-improve-and-merge-code-2533
          >

            Reject

            Reject;
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
:src/components/jobs/applications/ApplicationActions.tsx




:src_backup/components/jobs/applications/ApplicationActions.tsx

      <Button 
        variant="default"
        size="sm"
        asChild;
      >
:src_backup/components/jobs/applications/ApplicationActions.tsx
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
:src_backup/components/jobs/applications/ApplicationActions.tsx

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { Button } from '@/components / ui / button';
import { Eye, ChevronDown, Loader2 } from 'lucide-react';
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
:src_backup/components/jobs/applications/ApplicationActions.tsx
          <DropdownMenuItem;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;"
            onClick={() => onStatusChange(application.id, "hired")}

          >;
            Schedule Interview;
          </DropdownMenuItem>;
          <DropdownMenuItem;
:src/components/jobs/applications/ApplicationActions.tsx

          >;
            Hire;
          </DropdownMenuItem>;
          <DropdownMenuItem;
onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600";
          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
:src/components/jobs/applications/ApplicationActions.tsx
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

  );
:src_backup/components/jobs/applications/ApplicationActions.tsx
}
;
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
:src_backup/components/jobs/applications/ApplicationActions.tsx
}

<Button variant='default' size='sm' asChild>
        <Link href={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  );
}
:src/components/jobs/applications/ApplicationActions.tsx
}'"`
