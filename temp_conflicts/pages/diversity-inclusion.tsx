import React from 'react';
import Head from 'next/head';

export default function DiversityInclusionPage() {
	return (
		<div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
			<Head>
				<title>Diversity & Inclusion | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Our commitment to diversity, equity, and inclusion.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/diversity-inclusion&quot; />
			</Head>
			<div className=&quot;max-w-4xl mx-auto space-y-6&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Diversity & Inclusion</h1>
				<p className=&quot;text-slate-300&quot;>We believe diverse teams build better products. We foster inclusive hiring, growth, and a respectful workplace.</p>
				<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
					<li>Inclusive hiring practices and diverse panels</li>
					<li>Equal opportunities and career development</li>
					<li>Respectful, safe, and collaborative culture</li>
				</ul>
			</div>
		</div>
	);
}