import React from 'react';
import Head from 'next/head';

export default function OrderSuccessPage() {
  return (
    <>
      <Head>
        <title>Order Success - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Your order has been successfully placed&quot; />
      </Head>
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold mb-6&quot;>Order Success!</h1>
        <p className=&quot;text-lg mb-4&quot;>Your order has been successfully placed. Thank you for choosing Zion Tech Group!</p>
        <div className=&quot;mt-4&quot;>
          <a href=&quot;/&quot; className=&quot;text-blue-600 hover:underline&quot;>
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
