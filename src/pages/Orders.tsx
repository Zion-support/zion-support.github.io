
<<<<<<< HEAD
<<<<<<< HEAD
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import Link from 'next/link'; // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth';
import { useGetOrdersQuery } from '@/hooks/useOrders';
<<<<<<< HEAD
=======
import {

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import Link from 'next/link'; // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth';
import { useGetOrdersQuery } from '@/hooks/useOrders';
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import {
  Table,
  TableBody,
  TableCell,
<<<<<<< HEAD

=======
<<<<<<< HEAD
  TableHead,;
  TableHeader;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';


>>>>>>> 
export default function OrdersPage() {;

import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react'
import Link from 'next/link', // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth',
import { useGetOrdersQuery } from '@/hooks/useOrders',
import {
  Table,
  TableBody,
  TableCell,
  TableHead,;
  TableHeader;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);

  const formatDate = (date: string) => new Date(date).toLocaleDateString();
  const getStatusBadge = (status: string,) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react'
import Link from 'next/link', // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth',
import { useGetOrdersQuery } from '@/hooks/useOrders',
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  Table,
  TableBody,
  TableCell,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  TableHead,
  TableHeader,
  TableRow} from '@/components/ui/table',
import { Badge } from '@/components/ui/badge',
import Skeleton from '@/components/ui/skeleton',
import { EmptyState } from '@/components/ui/empty-state',
export default function OrdersPage() {
  const { user } = useAuth(),
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id),

<<<<<<< HEAD

  const getStatusBadge = (status: string) => {
<<<<<<< HEAD

    switch (status) {
=======
>>>>>>>     switch (status) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const formatDate = (date: string) => new Date(date).toLocaleDateString(),

  const getStatusBadge = (status: string) => {
    switch (status) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case 'in_escrow':
        return (
          <Badge variant="warning" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> In Escrow
          </Badge>
        ),
      case 'released':
      case 'completed':
        return (
          <Badge variant="success" className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" /> Released
          </Badge>
        ),
      case 'disputed':
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <ShieldAlert className="h-3 w-3" /> Disputed
          </Badge>
        )
      default:
        return status
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (

    <div className='container max-w-4xl py-10'>;
      <h1 className='text-3xl font-bold mb-6'>Order History</h1>;
      {isLoading ? (;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Order #</TableHead>;
              <TableHead>Date</TableHead>;
              <TableHead>Total</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>View</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {Array && Array.from({ length: 3 }).map((_, i,) => (;
              <TableRow key={i}>;
                <TableCell>;
                  <Skeleton className='h-4 w-20' />;
                </TableCell>;
                <TableCell>;
                  <Skeleton className='h-4 w-24' />;
                </TableCell>;
                <TableCell>;
                  <Skeleton className='h-4 w-16' />;
                </TableCell>;
                <TableCell>;
                  <Skeleton className='h-4 w-20' />;
                </TableCell>;
                <TableCell>;
                  <Skeleton className='h-4 w-24' />;
                </TableCell>;
              </TableRow>;

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ))}
          </TableBody>
        </Table>
      ) : orders.length === 0 ? (
        <EmptyState
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
          icon={<FileText className='h-10 w-10' />}
          title='No Orders'          description="You haven't purchased anything yet."
>>>>>>>         />
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          icon={<FileText className='h-10 w-10' />}
          title='No Orders'          description="You haven't purchased anything yet."
          icon={<FileText className="h-10 w-10" />}
          title="No Orders"
          description="You haven't purchased anything yet."
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        />
>>>>>>>       ) : (
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
            {orders.map(order => (              <TableRow key={order.orderId}>
                <TableCell className='font-medium'>{order.orderId}</TableCell>
>>>>>>>                 <TableCell>{formatDate(order.date)}</TableCell>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {orders.map(order => (              <TableRow key={order.orderId}>
                <TableCell className='font-medium'>{order.orderId}</TableCell>
            {orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="font-medium">{order.orderId}</TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <TableCell>{formatDate(order.date)}</TableCell>
>>>>>>>                 <TableCell>{order.total}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <Link
<<<<<<< HEAD
                    href={`/orders/${order.orderId}`}
                    className='text-zion-purple underline'
=======
                    href={`/orders/${order.orderId}`} // Changed to href
                    className="text-zion-purple underline"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
<<<<<<< HEAD
          title='No Orders'          description="You haven't purchased anything yet.";
        />;
      ) : (;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Order #</TableHead>;
              <TableHead>Date</TableHead>;
              <TableHead>Total</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>View</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {orders && orders.map(order => (              <TableRow key={order && order.orderId}>;
                <TableCell className='font-medium'>{order && order.orderId}</TableCell>;
                <TableCell>{formatDate(order && order.date)}</TableCell>;
                <TableCell>{order && order.total}</TableCell>;
                <TableCell>{getStatusBadge(order && order.status)}</TableCell>;
                <TableCell>;
                  <Link
                    href={`/orders/${order && order.orderId}`} // Changed to href
                    className='text-zion-purple underline'>;
                    View;
                  </Link>;
                </TableCell>;
              </TableRow>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            ))}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </TableBody>;
        </Table>;
      )}
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
