import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
import Link from 'next/link';

export default function DocsPage() {
	return (
		<UltraFuturisticBackground variant=&quot;quantum&quot; intensity=&quot;medium&quot;>
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Developer documentation, API reference, and implementation guides for Zion Tech Group services.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/docs&quot; />
			</Head>
			<div className=&quot;container mx-auto px-4 py-16 space-y-6&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Documentation</h1>
				<p className=&quot;text-gray-300 max-w-3xl&quot;>Find quickstart guides, API references, SDKs, and integration examples to build with our platforms.</p>
				<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
					<Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
						<h3 className=&quot;text-white text-lg font-semibold mb-2&quot;>API Reference</h3>
						<p className=&quot;text-gray-300 mb-3&quot;>Endpoints, authentication, pagination, and examples.</p>
						<Link href=&quot;/api-documentation&quot; className=&quot;text-cyan-400 hover:text-cyan-300&quot;>Open API Docs →</Link>
					</Card>
					<Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
						<h3 className=&quot;text-white text-lg font-semibold mb-2&quot;>Developer Portal</h3>
						<p className=&quot;text-gray-300 mb-3&quot;>SDKs, tutorials, and sample apps.</p>
						<Link href=&quot;/developer&quot; className=&quot;text-cyan-400 hover:text-cyan-300&quot;>Go to Developer →</Link>
					</Card>
					<Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
						<h3 className=&quot;text-white text-lg font-semibold mb-2&quot;>Support Center</h3>
						<p className=&quot;text-gray-300 mb-3&quot;>FAQ, contact, status, and training resources.</p>
						<Link href=&quot;/support&quot; className=&quot;text-cyan-400 hover:text-cyan-300&quot;>Visit Support →</Link>
					</Card>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}