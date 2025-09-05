import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function OrderConfirmationPage() {
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <>
      <Head>
        <title>Order Confirmation - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Order confirmation details&quot; />
      </Head>
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold mb-6&quot;>Order Confirmation</h1>
        {orderId && (
          <p className=&quot;text-lg mb-4&quot;>Order ID: {orderId}</p>
        )}
        <p className=&quot;text-lg mb-4&quot;>Your order has been confirmed and is being processed.</p>
        <div className=&quot;mt-4&quot;>
          <a href=&quot;/&quot; className=&quot;text-blue-600 hover:underline&quot;>
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
