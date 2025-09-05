import React from 'react';
import Head from 'next/head';

export default function ForbiddenPage() {
  return (
    <>
      <Head>
        <title>403 - Zion App</title>
        <meta name=&quot;description&quot; content=&quot;403 page&quot; />
      </Head>
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold mb-6&quot;>403 - Access Forbidden</h1>
        <p className=&quot;text-lg mb-4&quot;>You don't have permission to access this resource.</p>
        <div className=&quot;mt-4&quot;>
          <a href=&quot;/&quot; className=&quot;text-blue-600 hover:underline&quot;>
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
