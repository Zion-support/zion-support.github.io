<<<<<<< HEAD
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in_escrow':
        return (
          <Badge variant=&quot;warning&quot; className=&quot;flex items-center gap-1&quot;>
            <Clock className=&quot;h-3 w-3&quot; /> In Escrow
          </Badge>
        ),
      case 'released':
      case 'completed':
        return (
          <Badge variant=&quot;success&quot; className=&quot;flex items-center gap-1&quot;>
            <CheckCircle2 className=&quot;h-3 w-3&quot; /> Released
          </Badge>
        ),
      case 'disputed':
        return (
          <Badge variant=&quot;destructive&quot; className=&quot;flex items-center gap-1&quot;>
            <ShieldAlert className=&quot;h-3 w-3&quot; /> Disputed
          </Badge>
        ),
      default:
        return status
    }
  },

  return (
    <div className=&quot;container max-w-4xl py-10&quot;>
      <h1 className=&quot;text-3xl font-bold mb-6&quot;>Order History</h1>
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
                <TableCell><Skeleton className=&quot;h-4 w-20&quot; /></TableCell>
                <TableCell><Skeleton className=&quot;h-4 w-24&quot; /></TableCell>
                <TableCell><Skeleton className=&quot;h-4 w-16&quot; /></TableCell>
                <TableCell><Skeleton className=&quot;h-4 w-20&quot; /></TableCell>
                <TableCell><Skeleton className=&quot;h-4 w-24&quot; /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : orders.length === 0 ? (
        <EmptyState
          icon={<FileText className=&quot;h-10 w-10&quot; />}
          title=&quot;No Orders&quot;
          description=&quot;You haven't purchased anything yet.&quot;
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
            {orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className=&quot;font-medium&quot;>{order.orderId}</TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <Link
                    href={`/orders/${order.orderId}`} // Changed to href
                    className=&quot;text-zion-purple underline&quot;
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
=======
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import Link from 'next/link', // Changed from react-router-dom;
import { useAuth } from '@/hooks/useAuth',;
import { useGetOrdersQuery } from '@/hooks/useOrders',;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from '@/components/ui/table',;
import { Badge } from '@/components/ui/badge',;
import Skeleton from '@/components/ui/skeleton',;
import { EmptyState } from '@/components/ui/empty-state',;
export default function OrdersPage() {;
  const { user } = useAuth(),;
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id),;
  const formatDate = (date: string) => new Date(date).toLocaleDateString(),;
  const getStatusBadge = (status: string) => {;
    switch (status) {;
      case 'in_escrow':;
        return (;
          <Badge variant="warning" className="flex items-center gap-1">;
            <Clock className="h-3 w-3" /> In Escrow;
          </Badge>;
        ),;
      case 'released':;
      case 'completed':;
        return (;
          <Badge variant="success" className="flex items-center gap-1">;
            <CheckCircle2 className="h-3 w-3" /> Released;
          </Badge>;
        ),;
      case 'disputed':;
        return (;
          <Badge variant="destructive" className="flex items-center gap-1">;
            <ShieldAlert className="h-3 w-3" /> Disputed;
          </Badge>;
        );
      default:;
        return status;
    }
  };
  return (;
    <div className="container max-w-4xl py-10">;
      <h1 className="text-3xl font-bold mb-6">Order History</h1>;
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
            {Array.from({ length: 3 }).map((_, i) => (;
              <TableRow key={i}>;
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>;
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>;
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>;
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      ) : orders.length === 0 ? (;
        <EmptyState;
          icon={<FileText className="h-10 w-10" />}
          title="No Orders";
          description="You haven't purchased anything yet.";
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
            {orders.map((order) => (;
              <TableRow key={order.orderId}>;
                <TableCell className="font-medium">{order.orderId}</TableCell>;
                <TableCell>{formatDate(order.date)}</TableCell>;
                <TableCell>{order.total}</TableCell>;
                <TableCell>{getStatusBadge(order.status)}</TableCell>;
                <TableCell>;
                  <Link;
                    href={`/orders/${order.orderId}`} // Changed to href;
                    className="text-zion-purple underline";
                  >;
                    View;
                  </Link>;
                </TableCell>;
              </TableRow>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            ))}
          </TableBody>;
        </Table>;
      )}
    </div>;
  );
}
;