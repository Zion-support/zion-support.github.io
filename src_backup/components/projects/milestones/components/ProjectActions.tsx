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

export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
  onAddMilestone
}: ProjectActionsProps) {
  return (
    <div className='flex gap-2'>
      {isUnderDispute && disputeId ? (
        <Button variant='outline' asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>

            View Active Dispute
          </Link>
        </Button>
      ) : (

      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}

;