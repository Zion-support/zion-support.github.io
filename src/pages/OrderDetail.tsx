
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ArrowLeft, Package, CreditCard, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import Link from 'next/link';

import { useAuth } from '@/hooks/useAuth';
interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
}
interface Order {
  id: string;
  orderId: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }
  paymentMethod: {
    type: string;
    last4: string;
  }
  trackingNumber?: string;
}
const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'processing':
      return 'bg-blue-100 text-blue-800';
    case 'shipped':
      return 'bg-purple-100 text-purple-800';
    case 'delivered':
      return 'bg-green-100 text-green-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}
const getStatusIcon = (status: string) => {
  switch (status) {
    case 'delivered':
      return <CheckCircle className="h-4 w-4" />;
    case 'shipped':
      return <Package className="h-4 w-4" />;
    case 'processing':
      return <Clock className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }

};

export default function OrderDetail() {;

  const router = useRouter();
  const { user } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Mock data - replace with actual API call
    const mockOrder: Order = {
      id: router.query.id as string |'1'
      orderId: 'ORD-2024-001'
      date: '2024-01-15'
      status: 'shipped'
      total: 299.99
      items: [
        {
          id: '1'
          name: 'Premium Web Development Service'
          quantity: 1
          price: 299.99
        }
      ]
      shippingAddress: {
        name: 'John Doe'
        street: '123 Main St'
        city: 'New York'
        state: 'NY'
        zipCode: '10001'
        country: 'USA'
      }
      paymentMethod: {
        type: 'credit_card'
        last4: '4242'
      }
      trackingNumber: 'TRK123456789'
    }
    setOrder(mockOrder);
    setLoading(false);
  }, [router.query.id]);
  if (loading) {

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


=======
import Link from 'next/link',;
import { useRouter } from 'next/router',;
import { Button } from '@/components/ui/button',;
import { Clipboard } from 'lucide-react';
import Skeleton from '@/components/ui/skeleton',;
import { useGetOrderQuery } from '@/hooks/useOrder',;
import { generateInvoicePdf } from '@/utils/generateInvoicePdf',;
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from '@/hooks/use-toast',;
import { OrderTimeline } from '@/components/orders/OrderTimeline',;
export default function OrderDetailPage() {;
  const router = useRouter(),;
  const { orderId } = router.query as { orderId?: string },;
  const { user } = useAuth(),;
  const { data: order, isLoading } = useGetOrderQuery(orderId),;
  const handleDownload = async () => {;
    if (!order) return,;
    const blob = await generateInvoicePdf(order),;
    const url = URL.createObjectURL(blob),;
    const link = document.createElement('a'),;
    link.href = url,;
    link.download = `invoice-${order.orderId}.pdf`,;
    document.body.appendChild(link),;
    link.click(),;
    document.body.removeChild(link),;
    URL.revokeObjectURL(url);
  },;
  const handleResend = async () => {;
    if (!order || !user?.email) return,;
    try {;
      await supabase.functions.invoke('send-email', {;
        body: {;
          to: user.email,;
          subject: `Receipt for order ${order.orderId}`,;
          html: `<p>Thank you for your purchase. Total ${order.total}.</p>`;
        }
      }),;
      toast({ title: 'Receipt sent!' });
    } catch (err) {;
      toast({ title: 'Failed to send receipt', variant: 'destructive' });
    }
  },

  const handleCopySummary = async () => {
    if (!order) return,
    const summary = [
      `Order #${order.orderId}`,
      `Date: ${new Date(order.date).toLocaleDateString()}`,
      '',
      'Items:',
      ...order.items.map((i) => `${i.name} x${i.quantity} - $${i.price.toFixed(2)}`),
      '',
      `Total: $${order.total.toFixed(2)}`,
      '',
      'Shipping Address:',
      order.shippingAddress.name,
      order.shippingAddress.street,
      `${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}`].join('\n'),

    await navigator.clipboard.writeText(summary),
    toast.success('Order summary copied to clipboard')
  },

  if (isLoading || !order) {
    return (
      <div className="container max-w-3xl py-10">
        <Skeleton className="h-6 w-full" />


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </div>
    )
  }

  return (


