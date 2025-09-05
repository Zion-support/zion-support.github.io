<<<<<<< HEAD
import Link from 'next/link',
import { useRouter } from 'next/router',
import { Button } from '@/components/ui/button',
import { Clipboard } from 'lucide-react'
import Skeleton from '@/components/ui/skeleton',
import { useGetOrderQuery } from '@/hooks/useOrder',
import { generateInvoicePdf } from '@/utils/generateInvoicePdf',
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { toast } from '@/hooks/use-toast',
import { OrderTimeline } from '@/components/orders/OrderTimeline',
export default function OrderDetailPage() {
  const router = useRouter(),
  const { orderId } = router.query as { orderId?: string },
  const { user } = useAuth(),
  const { data: order, isLoading } = useGetOrderQuery(orderId),

  const handleDownload = async () => {
    if (!order) return,
    const blob = await generateInvoicePdf(order),
    const url = URL.createObjectURL(blob),
    const link = document.createElement('a'),
    link.href = url,
    link.download = `invoice-${order.orderId}.pdf`,
    document.body.appendChild(link),
    link.click(),
    document.body.removeChild(link),
    URL.revokeObjectURL(url)
  },

  const handleResend = async () => {
    if (!order || !user?.email) return,
=======
import Link from 'next/link';
import Skeleton from '@/components/ui/skeleton';

export default function OrderDetailPage() {_const _router = useRouter();
  const { orderId} = router.query as {_orderId?: string};
  const {_user} = useAuth();
  const {_data: order, _isLoading} = useGetOrderQuery(orderId);

  const _handleDownload = async () => {_if (!order) return;
    const _blob = await generateInvoicePdf(order);
    const _url = window.URL.createObjectURL(blob);
    const _link = document.createElement('a');
    link.href = url;
    link.download = `invoice-${order.orderId}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const _handleResend = async () => {_if (!order || !user?.email) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    try {
      await supabase.functions.invoke('send-email', _{
        body: {
          to: user.email, _subject: `Receipt for order ${order.orderId}`,
          html: `<p>Thank you for your purchase. Total ${_order.total}.</p>`
        }
<<<<<<< HEAD
      }),
      toast({ title: 'Receipt sent!' })
    } catch (err) {
      toast({ title: 'Failed to send receipt', variant: 'destructive' })
=======
      });
      toast({_title: 'Receipt sent!'});
    } catch (err) {_toast({ title: 'Failed to send receipt', _variant: 'destructive'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const handleCopySummary = async () => {
    if (!order) return,
    const summary = [
=======
  const _handleCopySummary = async () => {_if (!order) return;
    const _summary = [
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      `Order #${order.orderId}`,
      `Date: ${_new Date(order.date).toLocaleDateString()}`,
      '',
      'Items:',
      ...order.items.map(_(i) => `${_i.name} x${_i.quantity} - $${_i.price.toFixed(2)}`),
      '',
      `Total: $${_order.total.toFixed(2)}`,
      '',
      'Shipping Address: ',
      order.shippingAddress.name,
      order.shippingAddress.street,
<<<<<<< HEAD
      `${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}`].join('\n'),
=======
      `${_order.shippingAddress.city}, ${_order.shippingAddress.state} ${_order.shippingAddress.zip}`].join('\n');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    await navigator.clipboard.writeText(summary),
    toast.success('Order summary copied to clipboard')
  },

<<<<<<< HEAD
  if (isLoading || !order) {
    return (
      <div className=&quot;container max-w-3xl py-10&quot;>
        <Skeleton className=&quot;h-6 w-full&quot; />
      </div>
    )
  }

  return (
    <div className=&quot;container max-w-3xl py-10 space-y-6&quot;>
      <h1 className=&quot;text-3xl font-bold&quot;>Order #{order.orderId}</h1>

      <div>
        <h2 className=&quot;font-semibold mb-2&quot;>Items</h2>
        <ul className=&quot;space-y-1&quot;>
          {order.items.map((item, idx) => (
            <li key={idx} className=&quot;flex justify-between&quot;>
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price.toFixed(2)}</span>
=======
  if (isLoading || !order) {_return (
      <div className="container max-w-3xl py-10">
        <Skeleton className="h-6 w-full" />
      </div>
    );}

  return (_<div className="container max-w-3xl py-10 space-y-6">
      <h1 className="text-3xl font-bold">Order #{_order.orderId}</h1>

      <div>
        <h2 className="font-semibold mb-2">Items</h2>
        <ul className="space-y-1">
          {_order.items.map((item, _idx) => (
            <li key={idx} className="flex justify-between">
              <span>{_item.name} x {_item.quantity}</span>
              <span>${_item.price.toFixed(2)}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </li>
          ))}
        </ul>
      </div>

      <div>
<<<<<<< HEAD
        <h2 className=&quot;font-semibold mb-2&quot;>Shipping Address</h2>
        <p>{order.shippingAddress.name}</p>
        <p>{order.shippingAddress.street}</p>
        <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
      </div>

      <div>
        <h2 className=&quot;font-semibold mb-2&quot;>Tracking</h2>
        <OrderTimeline events={order.trackingEvents} />
      </div>

      <div className=&quot;flex gap-3&quot;>
        <Button onClick={handleDownload}>Download PDF Invoice</Button>
        <Button variant=&quot;outline&quot; onClick={handleCopySummary}>
          <Clipboard className=&quot;h-4 w-4&quot; /> Copy Summary
        </Button>
        <Button variant=&quot;outline&quot; onClick={handleResend}>Resend Receipt</Button>
=======
        <h2 className="font-semibold mb-2">Shipping Address</h2>
        <p>{_order.shippingAddress.name}</p>
        <p>{_order.shippingAddress.street}</p>
        <p>{_order.shippingAddress.city}, {_order.shippingAddress.state} {_order.shippingAddress.zip}</p>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Tracking</h2>
        <OrderTimeline events={_order.trackingEvents} />
      </div>

      <div className="flex gap-3">
        <Button onClick={_handleDownload}>Download PDF Invoice</Button>
        <Button variant="outline" onClick={_handleCopySummary}>
          <Clipboard className="h-4 w-4" /> Copy Summary
        </Button>
        <Button variant="outline" onClick={_handleResend}>Resend Receipt</Button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>

      <Link href=&quot;/orders&quot; className=&quot;text-zion-purple underline&quot;>
        Back to orders
      </Link>
    </div>
  )
}
