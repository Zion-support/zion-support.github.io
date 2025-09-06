  TableRow,
origin/cursor/automate-test-improve-and-merge-code-2533
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';

import Link from 'next / link'; // Changed from react-router-dom;
import { use_auth } from '@/hooks / use_auth';
import { useGetOrdersQuery } from '@/hooks / use_orders';

import {

  Table
  TableBody
  TableCell
  TableHead
  TableHeader





export default function OrdersPage() {;

  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);

  const formatDate = (date: string) => new Date(date).toLocaleDateString();
TableRow;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
origin/cursor/automate-test-improve-and-merge-code-2533
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react'
import Link from 'next/link', // Changed from react-router-dom
import { useAuth  } from '@/hooks/useAuth';
import { useGetOrdersQuery } from '@/hooks/useOrders';
import { Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow } from '@/components/ui/table';
import { Badge  } from '@/components/ui/badge';
import Skeleton from '@/components/ui/skeleton';
import { EmptyState } from '@/components/ui/empty-state';
export default function OrdersPage() {;
  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);


  const getStatusBadge = (status: string,) => {;
    switch (status) {;
      case 'in_escrow':;

  const formatDate = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      {isLoading ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 3 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
              </TableRow>
            ))}
          </TableBody>;
        </Table>;
      ) : orders && orders.length === 0 ? (;
        <EmptyState


        />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>


                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <Link
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
          </TableBody>;
        </Table>;
      )}
    </div>;
  );
        return (
          <Badge variant='warning' className='flex items-center gap-1'>;
            <Clock className='h-3 w-3' /> In Escrow;
          </Badge>;
        );
      case 'released':;
      case 'completed':;
        return (
          <Badge variant='success' className='flex items-center gap-1'>;
            <CheckCircle2 className='h-3 w-3' /> Released;
          </Badge>;
        );
      case 'disputed':;
        return (

        )

      default:
          <Badge variant='destructive' className='flex items-center gap-1'>;
            <ShieldAlert className='h-3 w-3' /> Disputed;
          </Badge>;
        ),;
      default:;
        return status;
    }


origin/cursor/automate-test-improve-and-merge-code-2533
