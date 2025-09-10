import { _useParams, Link } from 'react-router-dom';
import { _Button } from '@/components/ui/button';
import { _Skeleton } from '@/components/ui/skeleton';
import { _useGetOrderQuery } from '@/hooks/useOrder';
import { _generateInvoicePdf } from '@/utils/generateInvoicePdf';
import { _useAuth } from '@/hooks/useAuth';
import { _supabase } from '@/integrations/supabase/client';
import { _toast } from '@/hooks/use-toast';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
const integrations = [];
export default function OrderDetailPage() {
    const { orderId } = useParams();
    const { user } = useAuth();
    const { data: order, isLoading } = useGetOrderQuery(orderId);
    const _handleDownload = async () => {
        if (!order)
            return;
        const _blob = await generateInvoicePdf(order);
        const _url = URL.createObjectURL(blob);
        const _link = document.createElement('a');
        link.href = url;
        link.download = `invoice-${order.orderId}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const _handleResend = async () => {
        if (!order || !user?.email)
            return;
        try {
            await supabase.functions.invoke('send-email', {
                body: {
                    to: user.email,
                    subject: `Receipt for order ${order.orderId}`,
                    html: `<p>Thank you for your purchase. Total ${order.total}.</p>`
                }
            });
            toast({ title: 'Receipt sent!' });
        }
        catch (err) {
            toast({ title: 'Failed to send receipt', variant: 'destructive' });
        }
    };
    if (isLoading || !order) {
        return (<div className="container max-w-3xl py-10">
        <Skeleton className="h-6 w-full"/>
      </div>);
    }
    return (<div className="container max-w-3xl py-10 space-y-6">
      <h1 className="text-3xl font-bold">Order #{order.orderId}</h1>

      <div>
        <h2 className="font-semibold mb-2">Items</h2>
        <ul className="space-y-1">
          {order.items.map((item, idx) => (<li key={idx} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Shipping Address</h2>
        <p>{order.shippingAddress.name}</p>
        <p>{order.shippingAddress.street}</p>
        <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
      </div>

      <div className="flex gap-3">
        <Button onClick={handleDownload}>Download PDF Invoice</Button>
        <Button variant="outline" onClick={handleResend}>Resend Receipt</Button>
      </div>

      <Link to="/orders" className="text-zion-purple underline">
        Back to orders
      </Link>
    </div>);
}
