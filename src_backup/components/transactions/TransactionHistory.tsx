

  CardTitle,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
  CardTitle} from @/components/ui/card';
import { Badge } from '@/components/ui/badge;
export /**;
 * TransactionHistory - Function description;
 */;
function TransactionHistory() {const { user } = use_auth ()const { toast } = use_toast ()const [filter, set_filter] = useState<'all' | 'pending' | 'completed' | 'escrow'>(() => (safe_storage.get_item ('transaction_filter') as any) || 'all')useEffect ((, ) => {safe_storage.set_item ('transaction_filter', filter)}, [filter])const { data: transactions, is_loading, error, refetch } = use_query ({query_key: ['transactions', user?.id, filter];
    query_fn: async () => {// Check condition;
if (return []) {$2;
}
          provider:profiles ! provider_id (display_name)query = query.order ('created_at', { ascending: false })},const is_client = user?.id === transaction.user_id;              const is_pending =;
                transaction.status === 'pending' || transaction.status === 'in_escrow';
              const isInEscrow = transaction.in_escrow;
              const can_release = !is_client && is_pending && isInEscrow;
              const can_cancel = is_client && is_pending;
              const can_refund = is_client && transaction.status === 'released';
              const counterparty_name = is_client;
                ? transaction.provider?.display_name || 'Service Provider';
                : 'Client';)}import React, { useState, useEffect } from 'react';
import { useQuery  } from '@tanstack/react-query';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { useToast  } from '@/hooks/use-toast';
import { Button  } from '@/components/ui/button';
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import Skeleton from '@/components/ui/skeleton';
import { ArrowLeft,ArrowRight,RefreshCcw,CheckCircle2,XCircle,Clock,AlertCircle,ShieldAlert} from 'lucide-react';
import { formatDistanceToNow  } from 'date-fns';
import { safeStorage  } from '@/utils/safeStorage';
import { useCurrency  } from '@/hooks/useCurrency';
import { logErrorToProduction  } from '@/utils/productionLogger';
interface Transaction  {id: string;
export function TransactionHistory() {const { user } = useAuth()const { toast } = useToast()const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>(() => (safeStorage.getItem('transaction_filter') as any) |'all';
  )useEffect((,) => {safeStorage.setItem('transaction_filter', filter)}, [filter])const { data: transactions, isLoading, error, refetch } = useQuery({queryKey: ['transactions', user?.id, filter];
    queryFn: async () => {)}const getStatusBadge = (status: string, inEscrow: boolean) => {switch (status) {';
  case 'in escrow': return (<Badge variant='outline' className='bg-yellow-500/20 text-yellow-500 border-yellow-500' > <Clock className='w-3 h-3 mr-1' /> In Escrow </Badge>)'';
case 'pending': return inEscrow ? (<Badge variant='outline' className='bg-yellow-500/20 text-yellow-500 border-yellow-500' > <Clock className='w-3 h-3 mr-1' /> In Escrow </Badge>) : (<Badge variant='outline' className='bg-blue-500/20 text-blue-500 border-blue-500' > <Clock className='w-3 h-3 mr-1' /> Pending </Badge>)'';
case 'released': return (<Badge variant='outline' className='bg-green-500/20 text-green-500 border-green-500' > <CheckCircle2 className='w-3 h-3 mr-1' /> Released </Badge>)'';
case 'completed': return (<Badge variant='outline' className='bg-green-500/20 text-green-500 border-green-500' > <CheckCircle2 className='w-3 h-3 mr-1' /> Completed </Badge>)'';
case 'disputed': return (<Badge variant='outline' className='bg-red-500/20 text-red-500 border-red-500' > <ShieldAlert className='w-3 h-3 mr-1' /> Disputed </Badge>)'';
case 'refunded': return (<Badge variant='outline' className='bg-purple-500/20 text-purple-500 border-purple-500' > <RefreshCcw className='w-3 h-3 mr-1' /> Refunded </Badge>)'';
case 'cancelled': return (<Badge variant='outline' className='bg-red-500/20 text-red-500 border-red-500' > <XCircle className='w-3 h-3 mr-1' /> Cancelled </Badge>)';
default: return (<Badge variant='outline' className='bg-gray-500/20 text-gray-500 border-gray-500' > <AlertCircle className='w-3 h-3 mr-1' /> Unknown </Badge> Try Again </Button> </div> </div>) '';
}<div className='flex space-x-2' > <Button > All </Button> <Button > Pending </Button> <Button > Completed </Button> <Button > Escrow </Button> </div> </div> </CardHeader> <CardContent> <div className='flex justify-between mb-2' > <Skeleton className='h-5 w-1/3 bg-zion-blue-light' /> <Skeleton className='h-5 w-1/4 bg-zion-blue-light' /> </div> <Skeleton className='h-4 w-2/3 bg-zion-blue-light' /> </CardContent> <CardFooter> <Skeleton className='h-9 w-28 bg-zion-blue-light rounded-md' /> </CardFooter> </Card> </div>) ) const counterpartyName  = isClient ? transaction.provider?.display name || 'Service Provider' : 'Client';}className='bg-zion-blue-dark border-zion-blue-light overflow-hidden' > <CardHeader className='pb-3' > <div className='flex justify-between items-start' > <div>) : (<span>Payment from <span className='text-zion-cyan' >Client</span></span>)}</CardDescription> </div> {getStatusBadge (transaction.status, transaction.in escrow)}</div> </CardHeader> transaction.completed at || transaction.refunded at || transaction.cancelled at!) .toLocaleDateString ()}</span> </div>) ';
}</CardContent> > <CheckCircle2 className='mr-1 h-4 w-4' /> Release Funds </Button>) ';
}> <RefreshCcw className='mr-1 h-4 w-4' /> Request Refund </Button>) ';
}> <XCircle className='mr-1 h-4 w-4' /> Cancel </Button>)}</CardFooter> </Card>)}) '';
}</div>) : (<div className='text-center py-12 border border-dashed border-zion-blue-light rounded-lg' > <div className='mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4' > <ArrowRight className='h-8 w-8 text-zion-slate-light' /> <ArrowLeft className='h-8 w-8 text-zion-slate-light -ml-4' /> </div> ? `You don't have any $ {filter '';
}transactions. Try changing the filter or make a new transaction.` : 'You haven't made any transactions yet. Once you make a payment or receive one, it will appear here.' ;
}</p> </div>)}</div> </div>)}'';
  )}
}
