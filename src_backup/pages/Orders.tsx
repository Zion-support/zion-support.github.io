<<<<<<< HEAD
<<<<<<<< HEAD:src-disabled/pages.disabled/Orders.tsx
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

========
<<<<<<< HEAD
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/pages/Orders.tsx
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
<<<<<<<< HEAD:src-disabled/pages.disabled/Orders.tsx
export default function OrdersPage() {;
========
<<<<<<<< HEAD:src/pages/Orders.tsx
export default function OrdersPage() {
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/pages/Orders.tsx
  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);
========
export default function OrdersPage() {;
>>>>>>>> merged-prs-20250907-203621:src_backup/pages/Orders.tsx
=======
<<<<<<< HEAD
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
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
=======
  TableRow,
origin/cursor/automate-test-improve-and-merge-code-2533
import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';

import Link from 'next / link'; // Changed from react-router-dom;
import { use_auth } from '@/hooks / use_auth';
import { useGetOrdersQuery } from '@/hooks / use_orders';

import {

>>>>>>> origin/resolved-merge-conflicts
  Table
  TableBody
  TableCell
  TableHead
  TableHeader




<<<<<<< HEAD
=======

>>>>>>> origin/resolved-merge-conflicts
export default function OrdersPage() {;

  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);

  const formatDate = (date: string) => new Date(date).toLocaleDateString();
<<<<<<< HEAD
<<<<<<<< HEAD:src_backup/pages/Orders.tsx
=======
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);

========
>>>>>>>> origin/resolved-merge-conflicts:src-disabled/pages.disabled/Orders.tsx
=======

>>>>>>> origin/resolved-merge-conflicts

  const getStatusBadge = (status: string,) => {;
    switch (status) {;
      case 'in_escrow':;

<<<<<<< HEAD
<<<<<<<< HEAD:src_backup/pages/Orders.tsx
  const formatDate = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className='container max-w-4xl py-10'>
      <h1 className='text-3xl font-bold mb-6'>Order History</h1>
=======
  const formatDate = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
                <TableCell><Skeleton className='h-4 w-20' /></TableCell>
                <TableCell><Skeleton className='h-4 w-24' /></TableCell>
                <TableCell><Skeleton className='h-4 w-16' /></TableCell>
                <TableCell><Skeleton className='h-4 w-20' /></TableCell>
                <TableCell><Skeleton className='h-4 w-24' /></TableCell>
=======
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
========
>>>>>>>> origin/resolved-merge-conflicts:src-disabled/pages.disabled/Orders.tsx
=======
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621

  const formatDate = (date: string) => new Date(date).toLocaleDateString(),

    switch (status) {
      case 'in_escrow':
        return (
          <Badge variant="warning" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> In Escrow
          </Badge>
<<<<<<<< HEAD:src-disabled/pages.disabled/Orders.tsx
        ),
========
<<<<<<< HEAD
        );
=======
        ),
>>>>>>> merged-prs-20250907-203621
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/pages/Orders.tsx
      case 'released':
      case 'completed':
        return (
          <Badge variant="success" className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" /> Released
          </Badge>
<<<<<<<< HEAD:src-disabled/pages.disabled/Orders.tsx
        ),
========
<<<<<<< HEAD
        );
=======
        ),
>>>>>>> merged-prs-20250907-203621
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/pages/Orders.tsx
      case 'disputed':
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <ShieldAlert className="h-3 w-3" /> Disputed
          </Badge>
<<<<<<<< HEAD:src-disabled/pages.disabled/Orders.tsx
        ),
========
<<<<<<< HEAD
        );
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/pages/Orders.tsx
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
=======
        )
      default:
        return status
    }
  }
ursor/fix-website-loading-errors-and-merge-6662
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
  }
  },
=======
>>>>>>> merged-prs-20250907-203621
            ))}
          </TableBody>
        </Table>
      ) : orders.length === 0 ? (
        <EmptyState
<<<<<<<< HEAD:src-disabled/pages.disabled/Orders.tsx

========
<<<<<<< HEAD
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/pages/Orders.tsx
          icon={<FileText className="h-10 w-10" />}
          title="No Orders"
          description="You haven't purchased anything yet."
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          icon={<FileText className="h-10 w-10" />}
          title="No Orders"
          description="You haven't purchased anything yet."


>>>>>>> merged-prs-20250907-203621
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
<<<<<<<< HEAD:src-disabled/pages.disabled/Orders.tsx

========
<<<<<<< HEAD
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/pages/Orders.tsx
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
=======
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
            {orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="font-medium">{order.orderId}</TableCell>


                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <Link
<<<<<<< HEAD
                    href={`/orders/${order.orderId}`} // Changed to href
                    className="text-zion-purple underline"
=======
                    href={`/orders/${order.orderId}`}
                    className='text-zion-purple underline'
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621
            ))}

          </TableBody>;
        </Table>;
      )}
<<<<<<<< HEAD:src-disabled/pages.disabled/Orders.tsx
    </div>;
  );

========
    </div>
<<<<<<< HEAD
  )
}
=======
  );
}
;

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </TableBody>;
        </Table>;
      )}
    </div>;
  );
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
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/pages/Orders.tsx
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
<<<<<<<< HEAD:src-disabled/pages.disabled/Orders.tsx
        return (
========
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
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc:src/pages/Orders.tsx
=======


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/resolved-merge-conflicts
