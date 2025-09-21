import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group's autonomous automation solutions have transformed businesses." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-5xl font-extrabold mb-6 text-center">Case Studies</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-center">
            Discover how Zion Tech Group's autonomous automation solutions have transformed businesses across industries.
          </p>
        </main>
      </div>
    </>
  );
}