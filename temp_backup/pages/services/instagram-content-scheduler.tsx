import React from 'react';
import Head from 'next/head';

// Using an explicit empty object type for props to satisfy lint rules
type Props = Record<stringnever>;

const ServicePage: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Instagram Content Scheduler - Zion Tech Group</title>
        <meta name="description" content="instagram content scheduler page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Instagram Content Scheduler</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}