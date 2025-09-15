import React from 'react';
import Head from 'next/head';

export default function TestPage() {
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>Test - Zion Tech Group</title>
        <meta name="description" content="test page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Test</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
=======
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
>>>>>>> origin/auto/autonomy-17186719616
      </div>
    </>
  );
}