import React from 'react';
<<<<<<< HEAD
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function CaseStudiesPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Case Studies | Zion Tech Group" description="Proven outcomes across AI, cloud, and automation projects." canonical="https://ziontechgroup.com/case-studies/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Case Studies</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">Explore measurable results and implementation details across industries. Want a tailored reference? Contact kleber@ziontechgroup.com.</p>
      </div>
    </UltraFuturisticBackground>
  );
=======
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function CaseStudiesPage() {
	return (
		<Layout>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>
			</section>
		</Layout>
	);
>>>>>>> origin/auto/autonomy-17186719616
}
