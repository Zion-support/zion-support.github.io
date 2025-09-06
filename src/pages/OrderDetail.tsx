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
