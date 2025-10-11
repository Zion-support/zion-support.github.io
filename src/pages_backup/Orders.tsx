import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react'
import Link from 'next/link'; // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth'
import { useGetOrdersQuery } from '@/hooks/useOrders'
import {

  Table
  TableBody
  TableCell
  TableHead
  TableHeader








export default function OrdersPage() {
  const { user } = useAuth()
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id)
  const formatDate = (date: string) => new Date(date).toLocaleDateString()
  const getStatusBadge = (status: string,) => {
    switch (status) {
      case 'in_escrow':
        return (
            <Clock className='h-3 w-3' /> In Escrow</$1>
        )
      case 'released':
      case 'completed':
        return (
            <CheckCircle2 className='h-3 w-3' /> Released</$1>
        )
      case 'disputed':
        return (

        )

      default:
            <ShieldAlert className='h-3 w-3' /> Disputed</$1>
        ),
      default:
        return status
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


    switch (status) {
      case 'in_escrow':
        return (
            <Clock className="h-3 w-3" /> In Escrow
        ),
      case 'released':
      case 'completed':
        return (
            <CheckCircle2 className="h-3 w-3" /> Released
        ),
      case 'disputed':
        return (
            <ShieldAlert className="h-3 w-3" /> Disputed
        )
      default:
        return status
    }
  }
  },


  return (


      <h1 className='text-3xl font-bold mb-6'>Order History</h1>
      {isLoading ? (
              <TableHead>Order #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>View</TableHead></$1></$1>
            {Array && Array.from({ length: 3 }).map((_, i,) => (
                  <Skeleton className='h-4 w-20' /></$1>
                  <Skeleton className='h-4 w-24' /></$1>
                  <Skeleton className='h-4 w-16' /></$1>
                  <Skeleton className='h-4 w-20' /></$1>
                  <Skeleton className='h-4 w-24' /></$1></$1>
            ))}
          </TableBody></$1>
      ) : orders && orders.length === 0 ? (
          icon={<FileText className='h-10 w-10' />}
          title='No Orders'          description="You haven't purchased anything yet."
          icon={<FileText className="h-10 w-10" />}
          title="No Orders"
          description="You haven't purchased anything yet."



        />
      ) : (
              <TableHead>Order #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>View</TableHead>

            {orders.map(order => (              <TableRow key={order.orderId}>
                <TableCell className='font-medium'>{order.orderId}</TableCell>
            {orders.map((order) => (
                <TableCell className="font-medium">{order.orderId}</TableCell>



                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <$2 />
                    href={`/orders/${order.orderId}`}
                    className='text-zion-purple underline'
                  >
          title='No Orders'          description="You haven't purchased anything yet."
        />
      ) : (
              <TableHead>Order #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>View</TableHead></$1></$1>
            {orders && orders.map(order => (              <TableRow key={order && order.orderId}>
                <TableCell className='font-medium'>{order && order.orderId}</TableCell>
                <TableCell>{formatDate(order && order.date)}</TableCell>
                <TableCell>{order && order.total}</TableCell>
                <TableCell>{getStatusBadge(order && order.status)}</TableCell>
                  <$2 />
                    href={`/orders/${order && order.orderId}`} // Changed to href
                    className='text-zion-purple underline'>
                    View</$1></$1></$1>
            ))}



      )}
  )
}


</$1></$1>
      )}
  )
}

  TableRow,

} from '@/components / ui / table'
import { Badge } from '@/components / ui / badge'
import Skeleton from '@/components / ui / skeleton'
import { EmptyState } from '@/components / ui / empty - state'
export default /**
 * OrdersPage - Function description
 */
function OrdersPage() {
  const { user } = use_auth ()
  const { data: orders, is_loading } = useGetOrdersQuery (user?.id)
  const format_date = (date: string) =>: any new Date (date).toLocaleDateString ()
  const getStatusBadge = (status: string, ) =>: any {
    switch (status) {
      case 'in_escrow':
        return (
            <Clock className='h - 3 w - 3' /> In Escrow</$1>)
      case 'released':
      case 'completed':
        return (
            <CheckCircle2 className='h - 3 w - 3' /> Released</$1>)
      case 'disputed':
        return (
            <ShieldAlert className='h - 3 w - 3' /> Disputed</$1>),
      default:
        return status
    }
  }

  return (
      <h1 className='text - 3xl font - bold mb - 6'>Order History</h1>
      {is_loading ? (
              <TableHead > Order #</TableHead>
              <TableHead > Date</TableHead>
              <TableHead > Total</TableHead>
              <TableHead > Status</TableHead>
              <TableHead > View</TableHead></$1></$1>
            {Array.from ({ length: 3 }).map ((_, i, ) => (
                  <Skeleton className='h - 4 w - 20' /></$1>
                  <Skeleton className='h - 4 w - 24' /></$1>
                  <Skeleton className='h - 4 w - 16' /></$1>
                  <Skeleton className='h - 4 w - 20' /></$1>
                  <Skeleton className='h - 4 w - 24' /></$1></$1>))}
          </TableBody></$1>) : orders.length === 0 ? (
          icon={<FileText className='h - 10 w - 10' />}
          title='No Orders'          description="You haven't purchased anything yet."
        />) : (
              <TableHead > Order #</TableHead>
              <TableHead > Date</TableHead>
              <TableHead > Total</TableHead>
              <TableHead > Status</TableHead>
              <TableHead > View</TableHead></$1></$1>
            {orders.map (order => (              <TableRow key={order.order_id}>
                <TableCell className='font - medium'>{order.order_id}</TableCell>
                <TableCell>{format_date (order.date)}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{getStatusBadge (order.status)}</TableCell>
                  <;$2 />
                    href={`/orders/${order.order_id}`} // Changed to href
                    className='text - zion - purple underline'
                  >
                    View</$1></$1></$1>))}
          </TableBody></$1>)}
    </div>)
}
