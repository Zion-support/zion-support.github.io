import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';

const Orders: React.FC = () => {
  return (
    <MainLayout title="Orders - Zion Tech Group" description="Manage your orders and track their status.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Orders</h1>
        <p className="text-lg">This is the Orders page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

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
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import Link from 'next / link'; // Changed from react-router-dom;
import { use_auth } from '@/hooks/ use_auth';
import { useGetOrdersQuery } from '@/hooks/ use_orders';
import {
  // TODO: Implement
}
  Table;
pr-12325
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow } from '@/components/ui/table';
import { Badge  } from '@/components/ui/badge';

import Skeleton from '@/components/ui/skeleton';
import { EmptyState } from '@/components/ui/empty-state';
export default function OrdersPage() {;
export default function OrdersPage() {
  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import Link from 'next/link'; // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth';
import { useGetOrdersQuery } from '@/hooks/useOrders';
import {

  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);

  const formatDate = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className='container max-w-4xl py-10'>
      <h1 className='text-3xl font-bold mb-6'>Order History</h1>
                <TableCell><Skeleton className='h-4 w-20' /></TableCell>
                <TableCell><Skeleton className='h-4 w-24' /></TableCell>
                <TableCell><Skeleton className='h-4 w-16' /></TableCell>
                <TableCell><Skeleton className='h-4 w-20' /></TableCell>
                <TableCell><Skeleton className='h-4 w-24' /></TableCell>
  }
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react'
import Link from 'next/link', // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth',
import { useGetOrdersQuery } from '@/hooks/useOrders',

import {
  Table,
  TableBody,
  TableCell,
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react'
import Link from 'next/link', // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth',
import { useGetOrdersQuery } from '@/hooks/useOrders',
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from '@/components/ui/table',
import { Badge } from '@/components/ui/badge',
import Skeleton from '@/components/ui/skeleton',
import { EmptyState } from '@/components/ui/empty-state',
export default function OrdersPage() {
  const { user } = useAuth(),
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id),

  const formatDate = (date: string) => new Date(date).toLocaleDateString(),

    switch (status) {
      case 'in_escrow':
        return (
          <Badge variant="warning" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> In Escrow
          </Badge>
        ),
        );
        ),
        );
        ),
        );
      default:
        return status
    }

  },

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
  }
  },

          icon={<FileText className="h-10 w-10" />}
          title="No Orders"
          description="You haven't purchased anything yet."

            {orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="font-medium">{order.orderId}</TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <Link
                    href={`/orders/${order.orderId}`} // Changed to href
                    className="text-zion-purple underline"
            {Array.from({ length: 3 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : orders.length === 0 ? (
        <EmptyState
          icon={<FileText className='h-10 w-10' />}
          title='No Orders'          description="You haven't purchased anything yet."
ursor/fix-website-loading-errors-and-merge-6662
          icon={<FileText className='h-10 w-10' />}
          title='No Orders'          description="You haven't purchased anything yet."
          icon={<FileText className="h-10 w-10" />}
          title="No Orders"
          description="You haven't purchased anything yet."
        />
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
            {orders.map(order => (              <TableRow key={order.orderId}>
                <TableCell className='font-medium'>{order.orderId}</TableCell>
ursor/fix-website-loading-errors-and-merge-6662
            {orders.map(order => (              <TableRow key={order.orderId}>
                <TableCell className='font-medium'>{order.orderId}</TableCell>
                    href={`/orders/${order.orderId}`} // Changed to href
                    className="text-zion-purple underline"
    </div>;
  );

  )
}
;
;

        return (
;
