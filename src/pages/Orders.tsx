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



=======
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react'
import Link from 'next/link', // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth',
import { useGetOrdersQuery } from '@/hooks/useOrders',
import {
  Table,
  TableBody,
  TableCell,

export default function OrdersPage() {;

  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  const getStatusBadge = (status: string,) => {;
    switch (status) {;
      case 'in_escrow':;

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
  }
  },


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

            ))}
          </TableBody>
        </Table>
      ) : orders.length === 0 ? (
        <EmptyState
          icon={<FileText className='h-10 w-10' />}
          title='No Orders'          description="You haven't purchased anything yet."
          icon={<FileText className="h-10 w-10" />}
          title="No Orders"
          description="You haven't purchased anything yet."


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
            {orders.map(order => (              <TableRow key={order.orderId}>
                <TableCell className='font-medium'>{order.orderId}</TableCell>
            {orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="font-medium">{order.orderId}</TableCell>


                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <Link
                    href={`/orders/${order.orderId}`}
                    className='text-zion-purple underline'
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
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
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
;


          </TableBody>;
        </Table>;
      )}
    </div>;
  );
}
