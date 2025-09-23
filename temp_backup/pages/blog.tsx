<<<<<<< HEAD
import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function BlogPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Blog | Zion Tech Group" description="Insights and updates on AI, cloud, and automation." canonical="https://ziontechgroup.com/blog/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">Curated insights, implementation guides, and trend reports. New articles are published regularly. For press or guest posts, contact kleber@ziontechgroup.com.</p>
      </div>
    </UltraFuturisticBackground>
  );
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function BlogPage() {
	return (
		<Layout>
			<Head>
				<title>Blog | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Blog & News</h1>
				<p className="text-gray-300">Insights, guides, and announcements. New content coming soon.</p>
			</section>
		</Layout>
	);
>>>>>>> origin/auto/autonomy-17186719616
}
