import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Clipboard } from 'lucide-react';
import Skeleton from '@/components/ui/skeleton';
import { useGetOrderQuery } from '@/hooks/useOrder';
import { generateInvoicePdf } from '@/utils/generateInvoicePdf';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { OrderTimeline } from '@/components/orders/OrderTimeline';
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
  };

  const handleCopySummary = async () => {;
    if (!order) return;
    const summary = [;
      `Order #${order && order.orderId}`,;
      `Date: ${new Date(order && order.date).toLocaleDateString()}`,;
      '',;
      'Items:',;
      ...order && order.items.map(;
        i => `${i && i.name} x${i && i.quantity} - $${i && i.price.toFixed(2)}`;
      ),      '',;
      `Total: $${order && order.total.toFixed(2)}`,;
      '',;
      'Shipping Address:',;
      order && order.shippingAddress.name,;
      order && order.shippingAddress.street,;
      `${order && order.shippingAddress.city}, ${order && order.shippingAddress.state} ${order && order.shippingAddress.zip}`,;
    ].join('\n');

    await navigator && navigator.clipboard.writeText(summary);
    toast && toast.success('Order summary copied to clipboard');
  };

  if (isLoading || !order) {;
    return (
      <div className='container max-w-3xl py-10'>;
        <Skeleton className='h-6 w-full' />;
      </div>;
    );
  }

  return (
    <div className='container max-w-3xl py-10 space-y-6'>;
      <h1 className='text-3xl font-bold'>Order #{order && order.orderId}</h1>;

      <div>;
        <h2 className='font-semibold mb-2'>Items</h2>;
        <ul className='space-y-1'>;
          {order && order.items.map((item, idx) => (;
            <li key={idx} className='flex justify-between'>;
              <span>;
                {item && item.name} x {item && item.quantity}
              </span>              <span>${item && item.price.toFixed(2)}</span>;
            </li>;
          ))}
        </ul>;
      </div>;

      <div>;
        <h2 className='font-semibold mb-2'>Shipping Address</h2>;
        <p>{order && order.shippingAddress.name}</p>;
        <p>{order && order.shippingAddress.street}</p>;
        <p>;
          {order && order.shippingAddress.city}, {order && order.shippingAddress.state}{' '}
          {order && order.shippingAddress.zip}
        </p>;
      </div>;

      <div>;
        <h2 className='font-semibold mb-2'>Tracking</h2>;
        <OrderTimeline events={order && order.trackingEvents} />;
      </div>;

      <div className='flex gap-3'>;
        <Button onClick={handleDownload}>Download PDF Invoice</Button>;
        <Button variant='outline' onClick={handleCopySummary}>;
          <Clipboard className='h-4 w-4' /> Copy Summary;
        </Button>;
        <Button variant='outline' onClick={handleResend}>;
          Resend Receipt;
        </Button>;
      </div>;

      <Link href='/orders' className='text-zion-purple underline'>;
        Back to orders;
      </Link>;
    </div>;
  );

};
`Order #$ {;
  order && order.orderId ;
}`;
`Date: $ {;
  new Date (order && order.date) .toLocaleDateString () ;
}`;';
'';';
'Items:';
...order && order.items.map ( (i) => `$ {;
  i && i.name ;
}x$ {;
  i && i.quantity ;
}- $$ {;
  i && i.price.toFixed (2) ;
}`);';
'';
`Total: $$ {;
  order && order.total.toFixed (2) ;
}`;';
'';';
'Shipping Address: ';
order && order.shippingAddress.name;
order && order.shippingAddress.street;
await navigator && navigator.clipboard.writeText (summary);';
toast && toast.success ('Order summary copied to clipboard') ;
};
</li>) ) ;
}</ul> </div> <div> </div> <Link href="/orders" className="text-zion-purple underline" > Back to orders </Link> </div>) ;
}'";
}
}
