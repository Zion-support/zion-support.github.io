
import Link from 'next/link';

import { useAuth } from '@/hooks/useAuth';

import React, { useState, useEffect } from 'react';
import { use_router } from 'next / router';
import { ArrowLeft, Package, CreditCard, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import Link from 'next / link';
import { use_auth } from '@/hooks / use_auth';
;

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
}
interface Order {
  id: string;
  order_id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  shipping_address: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
  }

  payment_method: {
    type: string;
    last4: string;
  }
  tracking_number?: string;
}
const getStatusColor = (status: string) =>: any {

  switch (status) {
    case 'pending':;
      return 'bg - yellow - 100 text - yellow - 800';
    case 'processing':;
      return 'bg - blue - 100 text - blue - 800';
    case 'shipped':;
      return 'bg - purple - 100 text - purple - 800';
    case 'delivered':;
      return 'bg - green - 100 text - green - 800';
    case 'cancelled':;
      return 'bg - red - 100 text - red - 800';
    default:;
      return 'bg - gray - 100 text - gray - 800';
  }
}

;
const getStatusIcon = (status: string) =>: any {

  switch (status) {
    case 'delivered':;
      return <CheckCircle className="h - 4 w - 4" />;
    case 'shipped':;
      return <Package className="h - 4 w - 4" />;
    case 'processing':;
      return <Clock className="h - 4 w - 4" />;
    default:;
      return <Clock className="h - 4 w - 4" />;
  }
}

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
;
export default /**
 * OrderDetail - Function description
 */
function OrderDetail() {
  const router = use_router ();
  const { user } = use_auth ();
  const [order, set_order] = useState < Order | null>(null);
  const [loading, set_loading] = useState (true);
;
  useEffect (() => {
    // Mock data - replace with actual API call;
    const mock_order: Order = {
      id: router.query.id as string || '1',
      order_id: 'ORD - 2024 - 001',
      date: '2024 - 01 - 15',
      status: 'shipped',
      total: 299.99,
      items: [;
        {
          id: '1'
          name: 'Premium Web Development Service'
          quantity: 1
          price: 299.99
        }

export default function OrderDetailPage() {;
  const router = useRouter();
  const { orderId } = router && router.query as { orderId?: string };
  const { user } = useAuth();
  const { data: order, isLoading } = useGetOrderQuery(orderId);

  const handleDownload = async () => {;
    if (!order) return;
    const blob = await generateInvoicePdf(order);
    const url = URL && URL.createObjectURL(blob);
    const link = document && document.createElement('a');
    link && link.href = url;
    link && link.download = `invoice-${order && order.orderId}.pdf`;
    document && document.body.appendChild(link);
    link && link.click();
    document && document.body.removeChild(link);
    URL && URL.revokeObjectURL(url);
  };

  const handleResend = async () => {;
    if (!order || !user?.email) return;
    try {;
      await supabase && supabase.functions.invoke('send-email', {;
        body: {;
          to: user && user.email,;
          subject: `Receipt for order ${order && order.orderId}`,;
          html: `<p>Thank you for your purchase. Total ${order && order.total}.</p>`,;
        },;
      });
      toast({ title: 'Receipt sent!' });
    } catch (err) {;
      toast({ title: 'Failed to send receipt', variant: 'destructive' });

    }
    setOrder(mockOrder);
    setLoading(false);
  }, [router.query.id]);
  if (loading) {


  const handleCopySummary = async () => {;
    if (!order) return;
    const summary = [
      `Order #${order.orderId}`,
      `Date: ${new Date(order.date).toLocaleDateString()}`,
      '',
      'Items:',
      ...order.items.map(
        i => `${i.name} x${i.quantity} - $${i.price.toFixed(2)}`
      ),
      '',
      `Total: $${order.total.toFixed(2)}`,
      '',
      'Shipping Address:',
      order.shippingAddress.name,
      order.shippingAddress.street,
      `${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}`,
    ].join('\n');

    await navigator && navigator.clipboard.writeText(summary);
    toast && toast.success('Order summary copied to clipboard');
  };

  if (isLoading || !order) {
      ],
      shipping_address: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip_code: '10001',
        country: 'USA';
      },
      payment_method: {
        type: 'credit_card',
        last4: '4242';
      },
      tracking_number: 'TRK123456789';
    }
;
    set_order (mock_order);
    set_loading (false);
  }, [router.query.id]);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="container mx - auto px - 4 py - 8">;
        <div className="animate - pulse">;
          <div className="h - 8 bg - gray - 200 rounded w - 1/4 mb - 4"></div>;
          <div className="space - y-4">;
            {[1, 2, 3].map (index => (
              <div key={i} className="h - 32 bg - gray - 200 rounded"></div>))}
          </div>;
        </div>;
      </div>);
  }

  if (isLoading || !order) {;
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

      </div>
    )
  }

  return (

    <div className="container max-w-3xl py-10 space-y-6">
      <h1 className="text-3xl font-bold">Order #{order.orderId}</h1>

      <div>
        <h2 className="font-semibold mb-2">Items</h2>
        <ul className="space-y-1">
          {order.items.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Shipping Address</h2>
        <p>{order.shippingAddress.name}</p>
        <p>{order.shippingAddress.street}</p>
        <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Tracking</h2>
        <OrderTimeline events={order.trackingEvents} />
      </div>

      <div className="flex gap-3">
        <Button onClick={handleDownload}>Download PDF Invoice</Button>
        <Button variant="outline" onClick={handleCopySummary}>
          <Clipboard className="h-4 w-4" /> Copy Summary
        </Button>
        <Button variant="outline" onClick={handleResend}>Resend Receipt</Button>
      </div>

      <Link href="/orders" className="text-zion-purple underline">
        Back to orders
      </Link>
    </div>
  )
}
;

