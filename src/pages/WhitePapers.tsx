import React from 'react';
import { Link } from 'react-router-dom';

export default function WhitePapers() {
	const papers = [
		{
			title: 'AI-Powered Digital Transformation',
			description: 'How AI is transforming enterprises with measurable ROI.',
			category: 'Digital Transformation',
			date: '2025-01-10',
			pages: 28,
			downloads: '2,800+'
		},
		{
			title: 'Quantum Computing in Cybersecurity',
			description: 'Next-generation threat detection and quantum-safe approaches.',
			category: 'Cybersecurity',
			date: '2024-12-15',
			pages: 35,
			downloads: '1,900+'
		}
	];

	return (
		<div className="min-h-screen bg-zion-blue text-white p-12">
			<h1 className="text-3xl font-bold mb-6">White Papers</h1>
			<p className="text-zion-slate-light mb-8">Research and insights from Zion Tech Group.</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{papers.map((p) => (
					<div key={p.title} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
						<div className="text-sm text-zion-slate-light mb-1">{p.category}</div>
						<h3 className="text-xl font-semibold mb-2">{p.title}</h3>
						<p className="text-zion-slate-light mb-4">{p.description}</p>
						<div className="text-sm text-zion-slate-light mb-4">{p.date} • {p.pages} pages • {p.downloads} downloads</div>
						<Link to="/contact" className="text-zion-cyan hover:underline">Request PDF</Link>
					</div>
				))}
			</div>
		</div>
	);
}
