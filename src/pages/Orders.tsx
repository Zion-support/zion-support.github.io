import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
import {
  Table,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function OrdersPage() {;

  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);

  const formatDate = (date: string) => new Date(date).toLocaleDateString();
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
      default:
          <Badge variant='destructive' className='flex items-center gap-1'>;
            <ShieldAlert className='h-3 w-3' /> Disputed;
          </Badge>;
        ),;
      default:;
        return status;
    }
    switch (status) {
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
  },


  return (
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
}
