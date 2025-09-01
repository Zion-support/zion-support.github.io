<<<<<<< HEAD
import { useRouter } from 'next/router';'''
import Link from 'next/link';'''
import CheckoutProgress from '@/components/checkout/CheckoutProgress';
export default function OrderConfirmation() {}
  const router = useRouter();
  const { orderId } = router.query;
  if (!orderId) return null;
  return()
    <div className="container max-w-2xl py-10 text-center">""""
      <CheckoutProgress currentStep={2} className="mb-6" />""""
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>""""
      <p className="mb-6">Your order ID is {orderId}.</p>""""
      <Link href="/orders" className="text-zion-purple underline">
        View Orders;
      </Link>
    </div>
  );
}'"""
'"'"""
=======
import { useRouter } from 'next/router';
import Link from 'next/link';
import CheckoutProgress from '@/components/checkout/CheckoutProgress';
export default function OrderConfirmation() {

    const router = useRouter();
    const { orderId } = router.query;
    if (!orderId)
        return null;
    return (<div className="container max-w-2xl py-10 text-center">
      <CheckoutProgress currentStep={2} className="mb-6"/>
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p className="mb-6">Your order ID is {orderId}.</p>
      <Link href="/orders" className="text-zion-purple underline">View Orders</Link>
    </div>)}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
