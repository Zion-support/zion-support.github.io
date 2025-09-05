import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';

export default function ApiHubPage() {
	return (
		<>
			<Head>
				<title>API | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Zion Tech Group API hub and documentation.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/api/&quot; />
			</Head>
			<Layout>
				<section className=&quot;min-h-[60vh] px-4 py-24&quot;>
					<h1 className=&quot;text-5xl font-bold mb-4&quot;>API</h1>
					<p className=&quot;text-gray-300 mb-6&quot;>Access our API documentation and developer resources.</p>
					<Link className=&quot;text-cyan-300 underline&quot; href=&quot;/api-documentation&quot;>Go to API Documentation</Link>
				</section>
			</Layout>
		</>
	);
}