import React from 'react';
import Head from 'next/head';

export default function [slug]Page() {
  return (
    <>
      <Head>
        <title>[Slug] - Zion Tech Group</title>
        <meta name="description" content="[slug] page" />
      </Head>
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      {!data ? (
        <div className="opacity-70">No report found.</div>
      ) : (
        <pre className="text-xs whitespace-pre-wrap break-words rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-zinc-900 overflow-x-auto">{JSON.stringify(datanull2)}</pre>
      )}
    </EnhancedLayout>
  );
}