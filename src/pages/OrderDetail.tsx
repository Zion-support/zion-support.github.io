import Link from 'next/link';
import { useRouter  } from 'next/router';
import { Button  } from '@/components/ui/button';
import { Clipboard } from 'lucide-react'
import Skeleton from '@/components/ui/skeleton';
import { useGetOrderQuery  } from '@/hooks/useOrder';
import { generateInvoicePdf  } from '@/utils/generateInvoicePdf';
import { useAuth  } from '@/hooks/useAuth';
import { supabase  } from '@/integrations/supabase/client';
import { toast  } from '@/hooks/use-toast';
import { OrderTimeline } from '@/components/orders/OrderTimeline';
export default function OrderDetailPage() {
  const router = null;
  if (isLoading || !order) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Order not found</h1>
          <Link href="/orders">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to orders
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/orders">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to orders
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Order Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Summary */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Order #{order.orderId}</CardTitle>
                <Badge className={getStatusColor(order.status)}>
                  {getStatusIcon(order.status)}
                  <span className="ml-1 capitalize">{order.status}</span>
                </Badge>
              </div>
              <p className="text-sm text-gray-600">
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-semibold">Items:</h3>
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                ))}
                <div className="flex justify-between text-lg font-bold pt-4">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="font-medium">{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.street}</p>
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                </p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="font-medium">
                  {order.paymentMethod.type === 'credit_card' ? 'Credit Card' : order.paymentMethod.type}
                </p>
                <p className="text-gray-600">**** **** **** {order.paymentMethod.last4}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Status & Tracking */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Order placed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Payment confirmed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Processing</span>
                </div>
                {order.status === 'shipped' && (
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Shipped</span>
                  </div>
                )}
                {order.status === 'delivered' && (
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Delivered</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {order.trackingNumber && (
            <Card>
              <CardHeader>
                <CardTitle>Tracking Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Tracking Number:</p>
                  <p className="font-mono text-lg">{order.trackingNumber}</p>
                  <Button className="w-full mt-4">
                    Track Package
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
