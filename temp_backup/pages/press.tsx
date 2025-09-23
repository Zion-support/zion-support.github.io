import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';

export default function PressPage() {
  return (
    <>
      <Head>
        <title>Press - Zion Tech Group</title>
        <meta name="description" content="press page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Press</h1>
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
=======
import SEO from '../components/SEO';

export default function PressPage() {
	return (
		<>
			<SEO title="Press | Zion Tech Group" description="News, media resources, and press inquiries." canonical="/press" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Press</h1>
				<p className="text-gray-300">Media kit and announcements coming soon.</p>
			</div>
		</>
	);
}
>>>>>>> origin/auto/autonomy-17186719616
