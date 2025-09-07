:src/components/projects/milestones/components/ProjectActions.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';

import React from 'react';
import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react'
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {
  projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
  onAddMilestone: () => void
export function ProjectActions({
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
  onAddMilestone
}: ProjectActionsProps) {
  return (
    <div className='flex gap-2'>
      {isUnderDispute && disputeId ? (
        <Button variant='outline' asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>
            <ShieldAlert className='h-4 w-4 mr-2' />
            View Active Dispute
          </Link>
        </Button>
      ) : (
<RaiseDisputeButton projectId={projectId} variant='outline' />
      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>Add Milestone</Button>
      )}
    </div>
  );

:temp-disabled/src/components/projects/milestones/components/ProjectActions.tsx
onAddMilestone;
}: ProjectActionsProps) {

  onAddMilestone: () => void;

export function ProjectActions(): any ({;
  projectId,;
  isUnderDispute,;
  disputeId,;
  isTalent,;
  onAddMilestone,;)
}: ProjectActionsProps) {;

  return (
    <div className='flex gap-2'>;
</div>
        <Button variant='outline' asChild>;

          <Link href={`/dashboard/disputes/${disputeId}`}>;

            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute;

          ;
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />;"

        ;"
        <RaiseDisputeButton projectId={projectId} variant='outline' />;

        <Button onClick={onAddMilestone}>Add Milestone;
    <div className="flex gap-2">"
</div>"
        <Button variant="outline" asChild>"
`;
          <Link href={`/dashboard/disputes/${disputeId}`}>

          
        
    </div>;
        <Button onClick={onAddMilestone}>;

    </div>;"
    <div className='flex gap - 2'>;
        <Button variant='outline' as_child>;
          <Link href={`/dashboard / disputes/${dispute_id}`}>;

            <ShieldAlert className='h - 4 w - 4 mr - 2' />            View Active Dispute;

          ;)
        ) : (
        <RaiseDisputeButton project_id={project_id} variant='outline' />            <ShieldAlert className="h - 4 w - 4 mr - 2" />;"

        ) : ("
        <RaiseDisputeButton project_id={project_id} variant='outline' />;
)
        <Button on_click={onAddMilestone}>Add Milestone)}
    </div>);
        <Button on_click={onAddMilestone}>;
:src/components/projects/milestones/components/ProjectActions.tsx

        )}
    </div>);`;
pr-12325
</Button>
        </Button>)}
    </div>);'

:temp-disabled/src/components/projects/milestones/components/ProjectActions.tsx
