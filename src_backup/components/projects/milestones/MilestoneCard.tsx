<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx

import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
=======
import { Button } from "@/components/ui/button";
import { format  } from 'date-fns';
import React from 'react'
import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
import { Check, ArrowDown, X } from 'lucide-react'
import { useDisputeCheck } from '@/hooks/useDisputeCheck',
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
interface MilestoneCardProps {
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>
import React from 'react',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { format } from 'date-fns',;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  id: string
  projectId: string
  title: string
  description?: string
  amount: number
  status: string
  dueDate?: string
  onApprove?: (id: string) => Promise<void>
  onReject?: (id: string) => Promise<void>; import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
interface MilestoneCardProps {
  id: string
  projectId: string
  title: string
  description?: string
  amount: number
  status: string
  dueDate?: string
  onApprove?: (id: string,) => Promise<void>
  onReject?: (id: string,) => Promise<void>
}
export function MilestoneCard({
  id
  projectId
  title
  description
  amount
  status
  dueDate
  onApprove

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
  onReject?: (id: string) => Promise<void>;

export function MilestoneCard({
  id,
  projectId,
  title,
  description,
  amount,
  status,
  dueDate,
  onApprove,
  onReject,
origin/cursor/automate-test-improve-and-merge-code-2533
  onReject
}: MilestoneCardProps) {
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);
  function getStatusBadgeColor() {
    switch (status) {
      case 'completed':

import React from 'react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Check, ArrowDown, X } from 'lucide-react';
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
import { useDisputeCheck } from '@/hooks/useDisputeCheck';
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';interface MilestoneCardProps {;
=======
=======
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx

interface MilestoneCardProps {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  id: string,;
  projectId: string,;
  title: string,;
  description?: string,;
  amount: number,;
  status: string,;
  dueDate?: string,;
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
  onApprove?: (id: string,) => Promise<void>,;
  onReject?: (id: string,) => Promise<void>;
}

export function MilestoneCard(): any ({;  id,;
=======
=======
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
}
;
export function MilestoneCard({;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx

  id,;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  projectId,;
  title,;
  description,;
  amount,;
  status,;
  dueDate,;
  onApprove,;
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  onReject;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  onReject;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id),;
  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;
        return 'bg-green-500',;
=======
  onReject,;}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);

        return 'bg-green-500';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      case 'in_progress':;
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
        return 'bg-blue-500';      case 'pending':;
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
<<<<<<< HEAD
      default: return 'bg-gray-500';
    }
  }
  
=======
=======
=======
        return 'bg-blue-500',;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx

      case 'pending':;
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { format } from 'date - fns';
import { Check, ArrowDown, X } from 'lucide-react';
import { useDisputeCheck } from '@/hooks / useDisputeCheck';
import { DisputeStatusBadge } from '@/components / disputes / DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components / disputes / RaiseDisputeButton';
interface MilestoneCardProps {
  id: string;
  project_id: string;
  title: string;
  description?: string;
  amount: number;
  status: string;
  due_date?: string;
  on_approve?: (id: string) => Promise < void>;
  on_reject?: (id: string) => Promise < void>; import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
interface MilestoneCardProps {
  id: string,
  project_id: string,
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
import { Check, ArrowDown, X } from 'lucide-react'
import { useDisputeCheck } from '@/hooks/useDisputeCheck',
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
interface MilestoneCardProps {
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,

  return (
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;
              <p className="text-sm text-muted-foreground">;
  dueDate?: string,

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
default:
        return 'bg-gray-500';
    }
  }
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <p className="text-sm text-muted-foreground">
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}
<<<<<<< HEAD
=======

      default: return 'bg-gray-500'
    };
  }
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {dueDate && (
              <p className="text-sm text-muted-foreground">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
              <p className='text-sm text-muted-foreground'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>
            )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

          </div>

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <div className="flex gap-2">
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
              {status.replace('_ ')}
            </Badge>

            {isUnderDispute && disputeStatus && (
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
<div className='flex gap-2'>
            <Badge
              variant='outline'
              className={`capitalize ${getStatusBadgeColor()} text-white`}
            >
              {status.replace('_', ' ')}
            </Badge>
            {isUnderDispute && disputeStatus && (
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
              <DisputeStatusBadge status={disputeStatus} />
            )}
          </div>
        </div>
      </CardHeader>
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD

<<<<<<< HEAD
      
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <CardContent className="pb-2">
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        <div className="mt-4">
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
<CardContent className='pb-2'>
        {description && <p className='text-muted-foreground'>{description}</p>}
        <div className='mt-4'>
          <p className='text-xl font-bold'>${amount.toFixed(2)}</p>
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex justify-between">
        <div>
          {status !== 'completed' && status !== 'rejected' && (
<<<<<<< HEAD
            <RaiseDisputeButton 
              projectId={projectId} 
              milestoneId={id} 
=======

              className={`capitalize ${getStatusBadgeColor()} text-white`}>;
              {status && status.replace('_', ' ')}
            </Badge>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
              {status && status.replace('_ ')}
            </Badge>;

              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;
      </CardHeader>;

      <CardContent className='pb-2'>;
        {description && <p className='text-muted-foreground'>{description}</p>}
        <div className='mt-4'>;
          <p className='text-xl font-bold'>${amount && amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;

      <CardFooter className='pt-2 flex justify-between'>;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (;

            <RaiseDisputeButton
              projectId={projectId}
              milestoneId={id}
              variant='ghost'
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD

              variant="ghost"
              size="sm"
            />;
          )}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              variant="ghost"
              size="sm"
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
              size='sm'
origin/cursor/automate-test-improve-and-merge-code-2533
            />
          )}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject            </Button>

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className="flex gap-2">
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
        <div className='flex gap-2'>
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1' /> Reject
            </Button>
          )}

          {status === 'pending' && onApprove && !isUnderDispute && (
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1' /> Approve
            </Button>
          )}

          {isUnderDispute && (
            <Button variant='outline' size='sm' disabled>
              Actions frozen due to dispute
origin/cursor/automate-test-improve-and-merge-code-2533
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
          )}
          
          {status === 'pending' && onApprove && !isUnderDispute && (
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>
              <Check className="h-4 w-4 mr-1" /> Approve
            </Button>
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

          )}
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
          
          {status === 'pending' && onApprove && !isUnderDispute && (

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          )}
          
          {isUnderDispute && (
            <Button variant="outline" size="sm" disabled>
              Actions frozen due to dispute
            </Button>
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
              {status.replace('_ ')}
            </Badge>;
            {isUnderDispute && disputeStatus && (;
              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;

<<<<<<< HEAD
        <div className='flex gap-2'>;
          {status === 'pending' && onReject && !isUnderDispute && (;
            <Button variant='outline' size='sm' onClick={() => onReject(id)}>;
              <X className='h-4 w-4 mr-1' /> Reject            </Button>;
          )}

          {status === 'pending' && onApprove && !isUnderDispute && (;
            <Button variant='default' size='sm' onClick={() => onApprove(id)}>;
              <Check className='h-4 w-4 mr-1' /> Approve            </Button>;
          )}

          {isUnderDispute && (;
            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute            <Button variant="outline" size="sm" disabled>;              Actions frozen due to dispute;
=======
=======
      </CardHeader>;
      <CardContent className="pb-2">;
        {description && (;
          <p className="text-muted-foreground">{description}</p>;
        )}
        <div className="mt-4">;
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="pt-2 flex justify-between">;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (;
            <RaiseDisputeButton;
              projectId={projectId} ;
              milestoneId={id} ;
              variant="ghost";
              size="sm";
            />;
          )}
        </div>;
        <div className="flex gap-2">;
          {status === 'pending' && onReject && !isUnderDispute && (;
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;
              <X className="h-4 w-4 mr-1" /> Reject;
            </Button>;
          )}
;
          {status === 'pending' && onApprove && !isUnderDispute && (;
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>;
              <Check className="h-4 w-4 mr-1" /> Approve;
            </Button>;
          )}
;
          {isUnderDispute && (;
            <Button variant="outline" size="sm" disabled>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
              Actions frozen due to dispute;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            </Button>;
          )}
        </div>;
      </CardFooter>;
    </Card>;
  );
}
<<<<<<< HEAD
;
=======

  );
}
      <CardHeader className='pb - 2'>;
        <div className='flex justify - between items - start'>;
          <div>;
            <CardTitle className='text - xl'>{title}</CardTitle>;
            {due_date && (
              <p className='text - sm text - muted - foreground'>                Due: {format (new Date (due_date), 'MMM d, yyyy')}
              </p>)}
          </div>  }
  return (
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify - between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {due_date && (
              <p className="text - sm text - muted-foreground">;
                Due: {format (new Date (due_date), 'MMM d, yyyy')}
              </p>)}
          </div>;
          <div className='flex gap - 2'>;
            <Badge;
              variant='outline';
              className={`capitalize ${getStatusBadgeColor ()} text - white`}
            >;
              {status.replace ('_', ' ')}
            </Badge>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor ()} text - white`}>;
              {status.replace ('_ ')}
            </Badge>;
              <DisputeStatusBadge status={dispute_status} />)}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent className='pb - 2'>;
        {description && <p className='text - muted - foreground'>{description}</p>}
        <div className='mt - 4'>;
          <p className='text - xl font - bold'>${amount.to_fixed (2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className='pt - 2 flex justify - between'>;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton;
              project_id={project_id}
              milestone_id={id}
              variant='ghost';
              size='sm'            <RaiseDisputeButton;
              project_id = {project_id, }
              milestone_id = {id, }
              variant="ghost";
              size="sm";
            />)}
        </div>;
        <div className='flex gap - 2'>;
          {status === 'pending' && on_reject && !isUnderDispute && (
            <Button variant='outline' size='sm' on_click={() => on_reject (id)}>;
              <X className='h - 4 w - 4 mr - 1' /> Reject            </Button>)}
          {status === 'pending' && on_approve && !isUnderDispute && (
            <Button variant='default' size='sm' on_click={() => on_approve (id)}>;
              <Check className='h - 4 w - 4 mr - 1' /> Approve            </Button>)}
          {isUnderDispute && (
            <Button variant='outline' size='sm' disabled>              Actions frozen due to dispute            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>)}
        </div>;
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
        </div>
      </CardFooter>
    </Card>
  );
}
<<<<<<< HEAD:src/components/projects/milestones/MilestoneCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/MilestoneCard.tsx
