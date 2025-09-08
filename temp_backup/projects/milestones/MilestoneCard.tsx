/* eslint-disable */
 import { ;
  {;
  {;
  Check,  ArrowDown, X ;
  } from 'lucide-react';
import {;
  {;
  {;
  useDisputeCheck ';''
}from '@/hooks/useDisputeCheck';
import {;
  {;'
  {;''
  DisputeStatusBadge ';''
}from '@/components/disputes/DisputeStatusBadge';
import {;
  {;'
  {;''
  RaiseDisputeButton ';''
}from '@/components/disputes/RaiseDisputeButton';
interface MilestoneCardProps {;
  id: string;
  projectId: string;
  title: string;
  description?: string;
  amount: number;
  status: string;
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>
}

  id: string
  projectId: string
  title: string
  description?: string
  amount: number
  status: string
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>; import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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

  onReject
}: MilestoneCardProps) {
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);
  function getStatusBadgeColor() {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'rejected':
        return 'bg-red-500';
      default: return 'bg-gray-500'
    }
  }
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>
import React from 'react',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { format } from 'date-fns',;
import { Check, ArrowDown, X } from 'lucide-react';
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
interface MilestoneCardProps {;
  id: string,;
  projectId: string,;
  title: string,;
  description?: string,;
  amount: number,;
  status: string,;
  dueDate?: string,;
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
}
;
export function MilestoneCard({;
  id,;
  projectId,;
  title,;
  description,;
  amount,;
  status,;
  dueDate,;
  onApprove,;
  onReject;
}: MilestoneCardProps) {;
  const {;
  isUnderDispute, disputeStatus ;'
}= useDisputeCheck (projectId, id);''
switch (status) {';''
  case 'completed': return 'bg-green-500';';''
case 'in progress': return 'bg-blue-500';';''
case 'pending': return 'bg-yellow-500';';'''
case 'rejected': ;''
}return (<Card> <CardHeader className='pb-2' > <div className='flex justify-between items-start' > <div> </p>) ;
}</div> isUnderDispute && disputeStatus && (<DisputeStatusBadge status= {;'
  disputeStatus ;'''
}/>) ';''''
}</div> </div> </CardHeader> </div> </CardContent> <CardFooter className='pt-2 flex justify-between' > <div> {';''
  status !== 'completed' && status !== 'rejected' && (<RaiseDisputeButton projectId= {;
  projectId ;
}/>) ;
}</div> Actions frozen due to dispute </Button>) ;''
}</div> </CardFooter> </Card>) ;''''
}''''''