import Link from 'next/link'; // Changed from react-router-dom
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';

export default function OrdersPage() {_const { user} = useAuth();
  const {_data: orders, _isLoading} = useGetOrdersQuery(user?.id);

  const _formatDate = (_date: string) => new Date(date).toLocaleDateString();

  const _getStatusBadge = (_status: string) => {_switch (status) {
      case 'in_escrow':
        return (
          <Badge variant="warning" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> In Escrow
          </Badge>
        );
      case 'released':
      case 'completed':
        return (
          <Badge variant="success" className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" /> Released
          </Badge>
        );
      case 'disputed':
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <ShieldAlert className="h-3 w-3" /> Disputed
          </Badge>
        );
      default:
        return status;}
  };

  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      {_isLoading ? (
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
            {Array.from({ length: 3}).map(_(_, _i) => (
              <TableRow key={_i}>
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
          icon={_<FileText className="h-10 w-10" />}
          title="No Orders"
          description="You haven't purchased anything yet."
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
                <TableCell className="font-medium">{_order.orderId}</TableCell>
                <TableCell>{_formatDate(order.date)}</TableCell>
                <TableCell>{_order.total}</TableCell>
                <TableCell>{_getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <Link
                    href={_`/orders/${order.orderId}`} // Changed to href
                    className="text-zion-purple underline"
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
  );
}
