<:src_backup/components/projects/milestones/MilestoneCard.tsx

import React from 'react,
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card,
import { Badge } from @/components/ui/badge",
import { Button } from "@/components/ui/button;
import { format  } from date-fns';
import React from 'react
import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from @/components/ui/card'
import { Badge } from '@/components/ui/badge
import { Button } from @/components/ui/button'
import { format } from 'date-fns
origin/cursor/automate-test-improve-and-merge-code-2533
=>import { Check, ArrowDown, X } from lucide-react'
import { useDisputeCheck  } from '@/hooks/useDisputeCheck;
import { DisputeStatusBadge  } from @/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton;
interface MilestoneCardProps {
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
      case completed':

<:src_backup/components/projects/milestones/MilestoneCard.tsx

;
import React from 'react',import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",import { Badge } from "@/components/ui/badge",import { Button  } from '@/components/ui/button';
import { format   } from 'date-fns';
import React from 'react';

=import React from 'react;
>import { Card, CardContent, CardFooter, CardHeader, CardTitle } from @/components/ui/card";
import { Badge } from "@/components/ui/badge;
import { Button } from @/components/ui/button";
import { format } from date-fns';
import { Check, ArrowDown, X } from 'lucide-react;
<:src_backup/components/projects/milestones/MilestoneCard.tsx
import { useDisputeCheck } from @/hooks/useDisputeCheck',
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge,
import { RaiseDisputeButton } from @/components/disputes/RaiseDisputeButton',
=>
interface MilestoneCardProps {
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
<:src_backup/components/projects/milestones/MilestoneCard.tsx
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>;
}
export function MilestoneCard({
=>
  id,
  projectId,
  title,
  description,
  amount,
  status,
  dueDate,
  onApprove,
<:src_backup/components/projects/milestones/MilestoneCard.tsx
  onReject;
=>
}: MilestoneCardProps) {

        return 'bg-green-500;
      case in_progress':;
<:src_backup/components/projects/milestones/MilestoneCard.tsx
        return 'bg-blue-500,
=>
      case pending':;
        return 'bg-yellow-500;
      case rejected':;
        return 'bg-red-500;

  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle} from '@/components/ui/ card;
import { Badge } from @/components/ui/ badge';
import { Button } from '@/components/ui/ button;
import { format } from date - fns';
import { useDisputeCheck } from @/hooks/ useDisputeCheck';
import { DisputeStatusBadge } from '@/components/ disputes / DisputeStatusBadge;
import { RaiseDisputeButton } from @/components/ disputes / RaiseDisputeButton';
interface MilestoneCardProps {
  id: string;
<:src_backup/components/projects/milestones/MilestoneCard.tsx
import { Card;
  CardContent;
  CardFooter;
  CardHeader;
  CardTitle;
 } from '@/components/ui/card;
import { Badge  } from @/components/ui/badge';
import { format  } from 'date-fns;
import { Check, ArrowDown, X  } from lucide-react';
import { useDisputeCheck   } from '@/hooks/useDisputeCheck;
import { DisputeStatusBadge   } from @/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton  } from '@/components/disputes/RaiseDisputeButton;
interface MilestoneCardProps  {id: string;
  projectId: string;
  title: string;
  description?: string;
  amount: number;
  status: string;
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>; import React from react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card;
interface MilestoneCardProps  {id: string;
  projectId: string;
  title: string;
  description?: string;
  amount: number;
  status: string;
  dueDate?: string;
  onApprove?: (id: string,) => Promise<void>;
  onReject?: (id: string,) => Promise<void>;
}
export function MilestoneCard({id;
  projectId;
  title;
  description;
  amount;
  status;
  dueDate;
  onApprove;
  onReject?: (id: string) => Promise<void>;export function MilestoneCard() {const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id)function getStatusBadgeColor() {switch (status) {case completed':;
import { useDisputeCheck } from '@/hooks/useDisputeCheck,import { DisputeStatusBadge } from @/components/disputes/DisputeStatusBadge',import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton,interface MilestoneCardProps  {id: string,projectId: string,title: string,description?: string,amount: number,status: string,dueDate?: string,onApprove?: (id: string,) => Promise<void>,onReject?: (id: string,) => Promise<void>;
}export function MilestoneCard(): any ({onApprove?: (id: string) => Promise<void>,onReject?: (id: string) => Promise<void>;
}export function MilestoneCard() {const { isUnderDispute, disputeStatus }  = useDisputeCheck(projectId, id)return bg-green-500';
      case 'in_progress:;return bg-blue-500';return 'bg-blue-500,case pending':;
        return 'bg-yellow-500;
      case rejected':;
        return 'bg-red-500;import { Card,CardContent,CardFooter,CardHeader,CardTitle} from @/components / ui / card';
import { Badge  } from '@/components / ui / badge;
import { Button  } from @/components / ui / button';
import { format  } from 'date - fns;
import { useDisputeCheck  } from @/hooks / useDisputeCheck';
import { DisputeStatusBadge  } from '@/components / disputes / DisputeStatusBadge;
import { RaiseDisputeButton  } from @/components / disputes / RaiseDisputeButton';
interface MilestoneCardProps  {id: string;
  project_id: string;
=  projectId: string;
>  title: string;
  description?: string,
  amount: number;
  status: string;
  due_date?: string;
  on_approve?: (id: string) => Promise < void>;
  on_reject?: (id: string) => Promise < void>; import React from 'react;
<:src_backup/components/projects/milestones/MilestoneCard.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle   } from @/components / ui / card';
import { Badge   } from '@/components / ui / badge;
import { Button   } from @/components / ui / button';
interface MilestoneCardProps  {id: string,project_id: string,import { Button } from "@/components/ui/button,import { format } from 'date-fns,interface MilestoneCardProps  {id: string,projectId: string,title: string,description?: string,amount: number,status: string,return (<Card>;
=import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from @/components / ui / card';
interface MilestoneCardProps {
  id: string,
  project_id: string,
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from @/components/ui/card",
import { Badge } from "@/components/ui/badge,
import { Button } from @/components/ui/button",
import { format } from date-fns',
import { Check, ArrowDown, X } from 'lucide-react
interface MilestoneCardProps {
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,

  return (
    <Card>;
>      <CardHeader className="pb-2>;
        <div className=flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;
              <p className=text-sm text-muted-foreground">;
  dueDate?: string,
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>}

<:src_backup/components/projects/milestones/MilestoneCard.tsx
default:
        return 'bg-gray-500;
    }
=  return (
    <Card>
      <CardHeader className="pb-2>
        <div className=flex justify-between items-start">
          <div>
            <CardTitle className="text-xl>{title}</CardTitle>
            {dueDate && (

              <p className=text-sm text-muted-foreground">
                Due: {format(new Date(dueDate), MMM d, yyyy')}
              </p>;
            )}

      default: return 'bg-gray-500
    }
>  }
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Card>
      <CardHeader className="pb-2>
        <div className=flex justify-between items-start">
          <div>
            <CardTitle className="text-xl>{title}</CardTitle>
            {dueDate && (
              <p className=text-sm text-muted-foreground'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Due: {format(new Date(dueDate), 'MMM d, yyyy)}
              </p>
            )}
          </div>
<:src_backup/components/projects/milestones/MilestoneCard.tsx
<div className=flex gap-2'>
            <Badge
              variant='outline
            {dueDate && (<p className=text-sm text-muted-foreground">;
  dueDate?: string,default:;
        return bg-gray-500';
    }
  }return (<Card>;
      <CardHeader className="pb-2>;
        <div className=flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl>{title}</CardTitle>;
            {dueDate && (<p className=text-sm text-muted-foreground">;
                Due: {format(new Date(dueDate), 'MMM d, yyyy)}
              </p>;
            )}default: return bg-gray-500';
    }}return (<Card>;
      <CardHeader className="pb-2>;
        <div className=flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl>{title}</CardTitle>;
            {dueDate && (<p className=text-sm text-muted-foreground">;
              <p className='text-sm text-muted-foreground>;
                Due: {format(new Date(dueDate), MMM d, yyyy')}
              </p>;
            )}
          </div>;
          </div>;
          <div className="flex gap-2>;
            <Badge variant=outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
=
          </div>

          <div className="flex gap-2>
            <Badge variant=outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>
>              {status.replace('_ )}
            </Badge>;
            {isUnderDispute && disputeStatus && (<div className=flex gap-2'>;
            <Badge;
              variant='outline;
              className={`capitalize ${getStatusBadgeColor()} text-white`}
            >;
              {status.replace('_', ' ')}
            </Badge>
<:src_backup/components/projects/milestones/MilestoneCard.tsx
            {isUnderDispute && disputeStatus && (
origin/cursor/automate-test-improve-and-merge-code-2533
=
            {isUnderDispute && disputeStatus && (

>              <DisputeStatusBadge status={disputeStatus} />
            )}
          </div>
        </div>
      </CardHeader>
<:src_backup/components/projects/milestones/MilestoneCard.tsx
<CardContent className=pb-2'>
        {description && <p className='text-muted-foreground>{description}</p>}
        <div className=mt-4'>
          <p className='text-xl font-bold>${amount.toFixed(2)}</p>
origin/cursor/automate-test-improve-and-merge-code-2533
=
      <CardContent className="pb-2>
        {description && (
          <p className=text-muted-foreground">{description}</p>
        )}
        <div className="mt-4>
          <p className=text-xl font-bold">${amount.toFixed(2)}</p>

>        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex justify-between>
        <div>
          {status !== completed' && status !== 'rejected && (

              className={`capitalize ${getStatusBadgeColor()} text-white`}>;
            </Badge>;
            {isUnderDispute && disputeStatus && (<DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent className=pb-2">;
        {description && (<p className="text-muted-foreground>{description}</p>;
        )}
        <div className=mt-4">;
          <p className="text-xl font-bold>${amount.toFixed(2)}</p>;
<CardContent className=pb-2'>;
        {description && <p className='text-muted-foreground>{description}</p>}
        <div className=mt-4'>;
          <p className='text-xl font-bold>${amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className=pt-2 flex justify-between'>;
        <div>;
          {status !== 'completed && status !== rejected' && (className={`capitalize ${getStatusBadgeColor()} text-white`}>;
              {status && status.replace('_,  ')}
            </Badge>;
          <div className=flex gap-2">;
            <Badge variant="outline className={`capitalize ${getStatusBadgeColor()} text-white`}>;
              {status && status.replace('_ )}
            </Badge>;<DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;
      </CardHeader>;<CardContent className=pb-2'>;
        {description && <p className='text-muted-foreground>{description}</p>}
        <div className=mt-4'>;
          <p className='text-xl font-bold>${amount && amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;<CardFooter className=pt-2 flex justify-between'>;
        <div>;
<:src_backup/components/projects/milestones/MilestoneCard.tsx
          {status !== 'completed && status !== rejected' && (<RaiseDisputeButton;
=          {status !== 'completed && status !== rejected' && (;

            <RaiseDisputeButton
>              projectId={projectId}
              milestoneId={id}
              variant='ghost'
              size='sm'
              variant='ghost
              size=sm'
origin/cursor/automate-test-improve-and-merge-code-2533
            />
          )}
        </div>

<:src_backup/components/projects/milestones/MilestoneCard.tsx
        <div className='flex gap-2>
=>          {status === pending' && onReject && !isUnderDispute && (
            <Button variant='outline size=sm' onClick={() => onReject(id)}>
              <X className='h-4 w-4 mr-1 /> Reject
            </Button>
          )}

<:src_backup/components/projects/milestones/MilestoneCard.tsx
          {status === pending' && onApprove && !isUnderDispute && (
            <Button variant='default size=sm' onClick={() => onApprove(id)}>
              <Check className='h-4 w-4 mr-1 /> Approve
            </Button>
          )}

          {isUnderDispute && (
            <Button variant=outline' size='sm disabled>
              Actions frozen due to dispute
origin/cursor/automate-test-improve-and-merge-code-2533
=        <div className=flex gap-2">
          {status === pending' && onReject && !isUnderDispute && (
            <Button variant="outline size=sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1 /> Reject
>            </Button>

          )}
<:src_backup/components/projects/milestones/MilestoneCard.tsx
      </CardHeader>;
              variant='ghost;
              variant=ghost";
              size="sm;
            />;
          )}variant=ghost";
              size="sm;
              size=sm';
            />;
=          
          {status === 'pending && onApprove && !isUnderDispute && (

>          )}
        </div>;
<:src_backup/components/projects/milestones/MilestoneCard.tsx
          {status === pending' && onReject && !isUnderDispute && (<Button variant='outline size=sm' onClick={() => onReject(id)}>;
              <X className='h-4 w-4 mr-1 /> Reject            </Button>;
        <div className=flex gap-2">;
          {status === pending' && onReject && !isUnderDispute && (<Button variant="outline size=sm" onClick={() => onReject(id)}>;
              <X className="h-4 w-4 mr-1 /> Reject;
        <div className='flex gap-2>;
          {status === pending' && onReject && !isUnderDispute && (<Button variant='outline size=sm' onClick={() => onReject(id)}>;
              <X className='h-4 w-4 mr-1 /> Reject;
            </Button>;
          )}{status === pending' && onApprove && !isUnderDispute && (<Button variant='default size=sm' onClick={() => onApprove(id)}>;
              <Check className='h-4 w-4 mr-1 /> Approve;
            </Button>;
          )}{isUnderDispute && (<Button variant=outline' size='sm disabled>;
=
>              Actions frozen due to dispute;
            </Button>;
          )}{status === pending' && onApprove && !isUnderDispute && ()}{isUnderDispute && (</div>;<div className='flex gap-2>;
          {status === pending' && onReject && !isUnderDispute && (<Button variant='outline size=sm' onClick={() => onReject(id)}>;
              <X className='h-4 w-4 mr-1 /> Reject            </Button>;
          )}{status === pending' && onApprove && !isUnderDispute && (<Button variant='default size=sm' onClick={() => onApprove(id)}>;
              <Check className='h-4 w-4 mr-1 /> Approve            </Button>;
          )}{isUnderDispute && (<Button variant=outline' size='sm disabled>              Actions frozen due to dispute            <Button variant=outline" size="sm disabled>;</CardHeader>;
      <CardContent className=pb-2">;
        {description && (<p className="text-muted-foreground>{description}</p>;
        )}
        <div className=mt-4">;
          <p className="text-xl font-bold>${amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className=pt-2 flex justify-between">;
        <div>;
          {status !== completed' && status !== 'rejected && (<RaiseDisputeButton;
              projectId={projectId}milestoneId={id}variant="ghost;
              size=sm";
            />;
          )}
        </div>;
        <div className="flex gap-2>;
          {status === pending' && onReject && !isUnderDispute && (<Button variant=outline" size="sm onClick={() => onReject(id)}>;
              <X className=h-4 w-4 mr-1" /> Reject;
            </Button>;
          )}{status === 'pending && onApprove && !isUnderDispute && (<Button variant="default size=sm" onClick={() => onApprove(id)}>;
              <Check className="h-4 w-4 mr-1 /> Approve;
            </Button>;
          )}
          {isUnderDispute && (;
            <Button variant=outline" size="sm disabled>;

              Actions frozen due to dispute;
          )}{isUnderDispute && (<Button variant=outline" size="sm disabled>;Actions frozen due to dispute;
            </Button>;
          )}
        </div>;
      </CardFooter>;
    </Card>;
<:src_backup/components/projects/milestones/MilestoneCard.tsx
  )})}
      <CardHeader className=pb - 2'>;
        <div className='flex justify - between items - start>;
          <div>;
            <CardTitle className=text - xl'>{title}</CardTitle>;
            {due_date && (<p className='text - sm text - muted - foreground>                Due: {format (new Date (due_date), MMM d, yyyy')}
              </p>)}
          </div>  }
  return (<Card>;
      <CardHeader className=pb - 2">;
        <div className="flex justify - between items - start>;
          <div>;
            <CardTitle className=text - xl">{title}</CardTitle>;
            {due_date && (<p className="text - sm text - muted - foreground>;
                Due: {format (new Date (due_date), 'MMM d, yyyy)}
              </p>)}
          </div>;
          <div className=flex gap - 2'>;
            <Badge;
              variant='outline;
              className={`capitalize ${getStatusBadgeColor ()} text - white`}
            >;
              {status.replace (_', ' )}
            </Badge>;
          <div className=flex gap - 2">;
            <Badge variant="outline className={`capitalize ${getStatusBadgeColor ()} text - white`}>;
              {status.replace (_ ')}
            </Badge>;
              <DisputeStatusBadge status={dispute_status} />)}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent className='pb - 2>;
        {description && <p className=text - muted - foreground'>{description}</p>}
        <div className='mt - 4>;
          <p className=text - xl font - bold'>${amount.to_fixed (2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className='pt - 2 flex justify - between>;
        <div>;
          {status !== completed' && status !== 'rejected && (<RaiseDisputeButton;
              project_id={project_id}
              milestone_id={id}
              variant=ghost';
              size='sm            <RaiseDisputeButton;
              project_id = {project_id }
              milestone_id = {id }
              variant=ghost";
              size="sm;
            />)}
        </div>;
        <div className=flex gap - 2'>;
          {status === 'pending && on_reject && !isUnderDispute && (<Button variant=outline' size='sm on_click={() => on_reject (id)}>;
              <X className=h - 4 w - 4 mr - 1' /> Reject            </Button>)}
          {status === 'pending && on_approve && !isUnderDispute && (<Button variant=default' size='sm on_click={() => on_approve (id)}>;
              <Check className=h - 4 w - 4 mr - 1' /> Approve            </Button>)}
          {isUnderDispute && (<Button variant='outline size=sm' disabled>              Actions frozen due to dispute            <Button variant=outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>)}
        </div>;
      </CardFooter>;
    </Card>);
}
        </div>
      </CardFooter>
    </Card>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
    </Card>)}</div>;
      </CardFooter>;
    </Card>;
  )}
=  );
}
>