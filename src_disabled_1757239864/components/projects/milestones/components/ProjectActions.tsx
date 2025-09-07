<<<<<<< HEAD

import React from 'react';
import { Button } from '@/components/ui/button';
=======
<<<<<<< HEAD
import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import { ShieldAlert } from 'lucide-react'
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton'
import { Button } from '@/components/ui/button'
interface ProjectActionsProps {
  projectId: string
  isUnderDispute: boolean
  disputeId?: string
  isTalent: boolean
  onAddMilestone: () => void

import React from 'react';
import { Button  } from '@/components/ui/button';
>>>>>>> merged-prs-20250907-203621
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react'
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {
  projectId: string;
  isUnderDispute: boolean;
<<<<<<< HEAD
  disputeId?: string,
  isTalent: boolean;
  onAddMilestone: () => void,
}

=======
  disputeId?: string;
  isTalent: boolean;
  onAddMilestone: () => void
export function ProjectActions({

  projectId
  isUnderDispute
  disputeId
  isTalent

import React from 'react',;
import { Button } from '@/components/ui/button',;
import Link from 'next/link',;
import { ShieldAlert } from 'lucide-react';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
interface ProjectActionsProps {;
  projectId: string,;
  isUnderDispute: boolean,;
  disputeId?: string,;
  isTalent: boolean,;
  onAddMilestone: () => void;
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
onAddMilestone
}: ProjectActionsProps) {

  onAddMilestone: () => void;

export function ProjectActions(): any ({;
  projectId,;
  isUnderDispute,;
  disputeId,;
  isTalent,;
  onAddMilestone,;
}: ProjectActionsProps) {;

  return (
    <div className='flex gap-2'>;
      {isUnderDispute && disputeId ? (;
        <Button variant='outline' asChild>;
          <Link href={`/dashboard/disputes/${disputeId}`}>;
            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute;
          </Link>;
        </Button>;
      ) : (;
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />;
            View Active Dispute;
          </Link>;
        </Button>;
      ) : (;
        <RaiseDisputeButton projectId={projectId} variant='outline' />;
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>Add Milestone</Button>;

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
  onAddMilestone
}: ProjectActionsProps) {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  return (
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant="outline" asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>
<<<<<<< HEAD
            <ShieldAlert className="h-4 w-4 mr-2" />
=======
<<<<<<< HEAD
            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />
            <ShieldAlert className="h-4 w-4 mr-2" />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            View Active Dispute
          </Link>
        </Button>
      ) : (
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/projects/milestones/components/ProjectActions.tsx
========
import { Button  } from '@/components/ui/button';
import { ShieldAlert  } from 'lucide-react';
import { RaiseDisputeButton  } from '@/components/disputes/RaiseDisputeButton';
import { Button   } from '@/components/ui/button';
interface ProjectActionsProps  {projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
  onAddMilestone: () => void;
export function ProjectActions() {return (<div className='flex gap-2'>;
      {isUnderDispute && disputeId ? (<Button variant='outline' asChild>;
          <Link href={`/dashboard/disputes/${disputeId}`}>;
            <ShieldAlert className='h-4 w-4 mr-2' />;
            View Active Dispute;
          </Link>;
        </Button>;
      ) : (<RaiseDisputeButton projectId={projectId} variant='outline' />;
      )}
      {isTalent && !isUnderDispute && (<Button onClick={onAddMilestone}>Add Milestone</Button>;
      )}
    </div>;
  )
>>>>>>>> merged-prs-20250907-203621:src_disabled_1757239864/components/projects/milestones/components/ProjectActions.tsx
=======
<<<<<<< HEAD
            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />
          </Link>
        </Button>
      ) : (
    </div>
  )
}
>>>>>>> merged-prs-20250907-203621
        <RaiseDisputeButton 
          projectId={projectId}
          variant="outline"
        />
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </div>;
  );
};



<<<<<<< HEAD
        <RaiseDisputeButton projectId={projectId} variant='outline' />
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>Add Milestone</Button>
      )}
    </div>
  )
}
>>>>>>> merged-prs-20250907-203621
      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
    </div>
  )
}
<<<<<<< HEAD
=======
    </div>;
  );
};
        <RaiseDisputeButton 
          projectId={projectId}
          variant="outline"
        />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
  );
}

import React from 'react';
import {Button} from '@/components / ui / button';
import Link from 'next / link';
import { ShieldAlert } from 'lucide-react';
import { RaiseDisputeButton } from '@/components / disputes / RaiseDisputeButton';
import { Button } from '@/components / ui / button';
interface ProjectActionsProps {
  project_id: string;
  isUnderDispute: boolean;
  dispute_id?: string;
  is_talent: boolean;
  onAddMilestone: () => void;
export /**
 * ProjectActions - Function description
 */
function ProjectActions() {
  return (
    <div className='flex gap - 2'>;
      {isUnderDispute && dispute_id ? (
        <Button variant='outline' as_child>;
          <Link href={`/dashboard / disputes/${dispute_id}`}>;
            <ShieldAlert className='h - 4 w - 4 mr - 2' />            View Active Dispute;
          </Link>;
        </Button>) : (
        <RaiseDisputeButton project_id={project_id} variant='outline' />            <ShieldAlert className="h - 4 w - 4 mr - 2" />;
            View Active Dispute;
          </Link>;
        </Button>) : (
        <RaiseDisputeButton project_id={project_id} variant='outline' />;
      {is_talent && !isUnderDispute && (
        <Button on_click={onAddMilestone}>Add Milestone</Button>)}
    </div>);
}
      )}
      {is_talent && !isUnderDispute && (
        <Button on_click={onAddMilestone}>;
          Add Milestone;
        </Button>)}
    </div>);
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
