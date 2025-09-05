import React from 'react';
import Head from 'next/head';

export default function ProductsListPage() {
  return (
    <>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive range of technology products and services&quot; />
      </Head>
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold mb-6&quot;>Our Products & Services</h1>
        <p className=&quot;text-lg mb-4&quot;>Discover our cutting-edge technology solutions designed to transform your business.</p>
        <div className=&quot;mt-4&quot;>
          <a href=&quot;/&quot; className=&quot;text-blue-600 hover:underline&quot;>
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
