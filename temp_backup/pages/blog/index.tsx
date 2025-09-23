<<<<<<< HEAD
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Link from 'next/link';

export default function BlogIndexPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="low">
			<Head>
				<title>Blog & Insights | Zion Tech Group</title>
				<meta name="description" content="Insights on AI, cloud, security, and micro SaaS from Zion Tech Group." />
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-8">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Blog & Insights</h1>
					<p className="text-gray-300">Guides, benchmarks, and playbooks for AI, cloud, security, and micro SaaS.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Link href="/market-pricing" className="p-6 bg-black/40 border border-gray-700/50 rounded-xl hover:border-cyan-500/50">
						<h3 className="text-white text-xl font-semibold mb-2">Market Pricing References</h3>
						<p className="text-gray-300 text-sm">Vendor-verifiable benchmarks for AI, cloud, and security tools.</p>
					</Link>
					<Link href="/resources" className="p-6 bg-black/40 border border-gray-700/50 rounded-xl hover:border-cyan-500/50">
						<h3 className="text-white text-xl font-semibold mb-2">Resources</h3>
						<p className="text-gray-300 text-sm">Reports, docs, and quick-start guides.</p>
					</Link>
					<Link href="/comprehensive-services-showcase-2025" className="p-6 bg-black/40 border border-gray-700/50 rounded-xl hover:border-cyan-500/50">
						<h3 className="text-white text-xl font-semibold mb-2">All Services Showcase</h3>
						<p className="text-gray-300 text-sm">Explore our full portfolio with pricing and use cases.</p>
					</Link>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';

const posts = [
  { slug: 'ai-automation-trends-2025', title: 'AI Automation Trends 2025', excerpt: 'What forward-leaning teams ship next with agents, RAG, and guardrails.' },
  { slug: 'cloud-native-automation', title: 'Cloud-Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' },
  { slug: 'future-of-work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' },
  { slug: 'performance-optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' },
  { slug: 'ai-ethics-automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' },
  { slug: 'autonomous-content-generation', title: 'Autonomous Content Generation', excerpt: 'Ship content faster with quality and factuality checks.' },
];

export default function BlogIndexPage() {
  return (
    <UltraFuturisticBackground  intensity="medium">
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Insights on AI, cloud, automation, and platform engineering." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Insights & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Practical playbooks and deep dives on AI, cloud, and modern software delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.slug} className="p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
              <h2 className="text-white text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-400 mb-4">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
            </div>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}

>>>>>>> origin/auto/autonomy-17186719616
