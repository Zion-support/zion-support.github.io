import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface Order {
  orderId: string;
  date: string;
  total: string;
  status: string;
  invoiceUrl: string;
}

export default function OrdersPage() {
  // Mock data instead of using external hooks
  const mockOrders: Order[] = [
    {
      orderId: 'ORD-001',
      date: '2024-01-15',
      total: '$299.00',
      status: 'completed',
      invoiceUrl: '#'
    },
    {
      orderId: 'ORD-002',
      date: '2024-01-20',
      total: '$599.00',
      status: 'in_escrow',
      invoiceUrl: '#'
    }
  ];

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in_escrow':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
            <Clock className="h-3 w-3" /> In Escrow
          </span>
        );
      case 'released':
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            <CheckCircle2 className="h-3 w-3" /> Completed
          </span>
        );
      case 'disputed':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
            <ShieldAlert className="h-3 w-3" /> Disputed
          </span>
        );
      default:
        return status;
    }
  };

  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      
      {mockOrders.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Orders</h3>
          <p className="text-gray-500">You haven't purchased anything yet.</p>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {mockOrders.map((order) => (
              <li key={order.orderId} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Order #{order.orderId}
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatDate(order.date)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-900 font-medium">
                      {order.total}
                    </div>
                    <div>
                      {getStatusBadge(order.status)}
                    </div>
                    <Link
                      href={order.invoiceUrl}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Download Invoice
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
