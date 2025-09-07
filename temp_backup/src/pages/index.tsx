import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Home</title>
        <meta name="description" content="Zion Tech Group - Leading technology solutions" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-8">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-white/80 text-center max-w-3xl mx-auto">
            Leading technology solutions for the future
          </p>
        </div>
      </div>
    </>
  );
}