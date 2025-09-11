<<<<<<< HEAD
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
<<<<<<< HEAD
import Link from 'next/link'; // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth';
import { useGetOrdersQuery } from '@/hooks/useOrders';
import {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import Link from 'next/link'; // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth';
import { useGetOrdersQuery } from '@/hooks/useOrders';
import {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Table
  TableBody
  TableCell
  TableHead
  TableHeader




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
=======

import Link from 'next / link'; // Changed from react-router-dom;
import { use_auth } from '@/hooks / use_auth';
import { useGetOrdersQuery } from '@/hooks / use_orders';

import {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  Table
  TableBody
  TableCell
  TableHead
  TableHeader

<<<<<<< HEAD
  const getStatusBadge = (status: string) => {
=======


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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
  }
  },
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </TableBody>
        </Table>
      ) : orders.length === 0 ? (
        <EmptyState
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
          icon={<FileText className='h-10 w-10' />}
          title='No Orders'          description="You haven't purchased anything yet."
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            {orders.map(order => (              <TableRow key={order.orderId}>
                <TableCell className='font-medium'>{order.orderId}</TableCell>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="font-medium">{order.orderId}</TableCell>


                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <Link
<<<<<<< HEAD
<<<<<<< HEAD
                    href={`/orders/${order.orderId}`} // Changed to href
                    className="text-zion-purple underline"
=======
                    href={`/orders/${order.orderId}`}
                    className='text-zion-purple underline'
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    href={`/orders/${order.orderId}`}
                    className='text-zion-purple underline'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            ))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </TableBody>
        </Table>
      )}
    </div>
  );
}
;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </TableBody>;
        </Table>;
      )}
    </div>;
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
;
;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


;
  TableRow,

} from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import Skeleton from '@/components / ui / skeleton';
import { EmptyState } from '@/components / ui / empty - state';
export default /**
 * OrdersPage - Function description
 */
function OrdersPage() {
  const { user } = use_auth ();
  const { data: orders, is_loading } = useGetOrdersQuery (user?.id);
;
  const format_date = (date: string) =>: any new Date (date).toLocaleDateString ();
  const getStatusBadge = (status: string, ) =>: any {
    switch (status) {
      case 'in_escrow':;
        return (
          <Badge variant='warning' className='flex items - center gap - 1'>;
            <Clock className='h - 3 w - 3' /> In Escrow;
          </Badge>);
      case 'released':;
      case 'completed':;
        return (
          <Badge variant='success' className='flex items - center gap - 1'>;
            <CheckCircle2 className='h - 3 w - 3' /> Released;
          </Badge>);
      case 'disputed':;
        return (
          <Badge variant='destructive' className='flex items - center gap - 1'>;
            <ShieldAlert className='h - 3 w - 3' /> Disputed;
          </Badge>),
      default:;
        return status;
    }
  }
;
  return (
    <div className='container max - w-4xl py - 10'>;
      <h1 className='text - 3xl font - bold mb - 6'>Order History</h1>;
      {is_loading ? (
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Order #</TableHead>;
              <TableHead > Date</TableHead>;
              <TableHead > Total</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead > View</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {Array.from ({ length: 3 }).map ((_, i, ) => (
              <TableRow key={i}>;
                <TableCell>;
                  <Skeleton className='h - 4 w - 20' />;
                </TableCell>;
                <TableCell>;
                  <Skeleton className='h - 4 w - 24' />;
                </TableCell>;
                <TableCell>;
                  <Skeleton className='h - 4 w - 16' />;
                </TableCell>;
                <TableCell>;
                  <Skeleton className='h - 4 w - 20' />;
                </TableCell>;
                <TableCell>;
                  <Skeleton className='h - 4 w - 24' />;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>) : orders.length === 0 ? (
        <EmptyState;
          icon={<FileText className='h - 10 w - 10' />}
          title='No Orders'          description="You haven't purchased anything yet.";
        />) : (
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Order #</TableHead>;
              <TableHead > Date</TableHead>;
              <TableHead > Total</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead > View</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {orders.map (order => (              <TableRow key={order.order_id}>;
                <TableCell className='font - medium'>{order.order_id}</TableCell>;
                <TableCell>{format_date (order.date)}</TableCell>;
                <TableCell>{order.total}</TableCell>;
                <TableCell>{getStatusBadge (order.status)}</TableCell>;
                <TableCell>;
                  <Link;
                    href={`/orders/${order.order_id}`} // Changed to href;
                    className='text - zion - purple underline';
                  >;
                    View;
                  </Link>;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>)}
    </div>);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
