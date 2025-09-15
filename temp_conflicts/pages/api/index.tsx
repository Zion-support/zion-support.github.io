<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Layout from '../../components/layout/Layout',
import Link from 'next/link',
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
>>>>>>> origin/auto/autonomy-17186719616

export default function ApiHubPage() {
	return (
		<>
			<Head>
				<title>API | Zion Tech Group</title>
				<meta name="description" content="Zion Tech Group API hub and documentation." />
<<<<<<< HEAD
				<link rel="canonical" href="https: //ziontechgroup.com/api/" />
=======
				<link rel="canonical" href="https://ziontechgroup.com/api/" />
>>>>>>> origin/auto/autonomy-17186719616
			</Head>
			<Layout>
				<section className="min-h-[60vh] px-4 py-24">
					<h1 className="text-5xl font-bold mb-4">API</h1>
					<p className="text-gray-300 mb-6">Access our API documentation and developer resources.</p>
					<Link className="text-cyan-300 underline" href="/api-documentation">Go to API Documentation</Link>
				</section>
			</Layout>
		</>
<<<<<<< HEAD
	)
=======
	);
>>>>>>> origin/auto/autonomy-17186719616
}