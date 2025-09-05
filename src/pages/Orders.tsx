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
=======
import Link from 'next/link'; // Changed from react-router-dom
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';

export default function OrdersPage() {_const { user} = useAuth();
  const {_data: orders, _isLoading} = useGetOrdersQuery(user?.id);

  const _formatDate = (_date: string) => new Date(date).toLocaleDateString();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getStatusBadge = (_status: string) => {_switch (status) {
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
<<<<<<< HEAD
        return status
    }
  },

  return (
    <div className=&quot;container max-w-4xl py-10&quot;>
      <h1 className=&quot;text-3xl font-bold mb-6&quot;>Order History</h1>
      {isLoading ? (
=======
        return status;}
  };

  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      {_isLoading ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
            {Array.from({ length: 3 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell><Skeleton className=&quot;h-4 w-20&quot; /></TableCell>
                <TableCell><Skeleton className=&quot;h-4 w-24&quot; /></TableCell>
                <TableCell><Skeleton className=&quot;h-4 w-16&quot; /></TableCell>
                <TableCell><Skeleton className=&quot;h-4 w-20&quot; /></TableCell>
                <TableCell><Skeleton className=&quot;h-4 w-24&quot; /></TableCell>
=======
            {Array.from({ length: 3}).map(_(_, _i) => (
              <TableRow key={_i}>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : orders.length === 0 ? (
        <EmptyState
<<<<<<< HEAD
          icon={<FileText className=&quot;h-10 w-10&quot; />}
          title=&quot;No Orders&quot;
          description=&quot;You haven't purchased anything yet.&quot;
=======
          icon={_<FileText className="h-10 w-10" />}
          title="No Orders"
          description="You haven't purchased anything yet."
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      ) : (_<Table>
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
            {_orders.map((order) => (
              <TableRow key={order.orderId}>
<<<<<<< HEAD
                <TableCell className=&quot;font-medium&quot;>{order.orderId}</TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <Link
                    href={`/orders/${order.orderId}`} // Changed to href
                    className=&quot;text-zion-purple underline&quot;
=======
                <TableCell className="font-medium">{_order.orderId}</TableCell>
                <TableCell>{_formatDate(order.date)}</TableCell>
                <TableCell>{_order.total}</TableCell>
                <TableCell>{_getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <Link
                    href={_`/orders/${order.orderId}`} // Changed to href
                    className="text-zion-purple underline"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
